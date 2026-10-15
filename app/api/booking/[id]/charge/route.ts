import { NextResponse, type NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { Resend } from 'resend';
import { CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { escapeHtml } from '@/lib/escape-html';
import { assertAdmin } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

/**
 * Charge the saved card for a booking AFTER the trip is complete (off-session).
 * Protected by the same admin password (ADMIN_USERNAME / ADMIN_PASSWORD) that
 * guards the /admin pages.
 *
 *   POST /api/booking/<id>/charge
 *   Body:    { "amount": 185.50, "tip": 20 }   // dollars
 */
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const denied = assertAdmin(request);
  if (denied) return denied;

  const { id } = await params;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const amount = typeof body.amount === 'number' ? body.amount : parseFloat(String(body.amount));
  const tip = typeof body.tip === 'number' ? body.tip : parseFloat(String(body.tip)) || 0;
  if (Number.isNaN(amount) || amount <= 0) {
    return NextResponse.json({ error: 'A positive amount (in dollars) is required.' }, { status: 400 });
  }

  const total = Math.round((amount + (Number.isNaN(tip) ? 0 : tip)) * 100);
  if (total < 50) {
    return NextResponse.json({ error: 'Minimum charge is $0.50.' }, { status: 400 });
  }
  // Sanity cap to prevent a fat-fingered amount (e.g. 14500 instead of 145).
  const MAX_CENTS = 5_000_00; // $5,000
  if (total > MAX_CENTS) {
    return NextResponse.json(
      { error: `Amount exceeds the $${(MAX_CENTS / 100).toLocaleString()} safety limit. Double-check the fare, or raise the cap in code for a genuinely large charge.` },
      { status: 400 }
    );
  }

  const { prisma } = await import('@/lib/prisma');
  const booking = await prisma.booking.findUnique({ where: { id } });
  if (!booking) {
    return NextResponse.json({ error: 'Booking not found.' }, { status: 404 });
  }
  if (booking.paymentStatus === 'charged') {
    return NextResponse.json({ error: 'This booking has already been charged.' }, { status: 409 });
  }
  if (!booking.stripeCustomerId) {
    return NextResponse.json({ error: 'No Stripe customer for this booking — the card entry was never started.' }, { status: 400 });
  }

  // Bug-1 fix: the DB may not have the payment method (e.g. the browser's
  // confirmation call failed after the card was saved). Reconcile from Stripe:
  // fall back to the customer's default card, then to their most recent card.
  let paymentMethodId = booking.stripePaymentMethodId;
  if (!paymentMethodId) {
    try {
      const customer = await stripe.customers.retrieve(booking.stripeCustomerId);
      if (customer && !customer.deleted) {
        const dpm = customer.invoice_settings?.default_payment_method;
        paymentMethodId = typeof dpm === 'string' ? dpm : dpm?.id ?? null;
      }
      if (!paymentMethodId) {
        const pms = await stripe.paymentMethods.list({
          customer: booking.stripeCustomerId,
          type: 'card',
          limit: 1,
        });
        paymentMethodId = pms.data[0]?.id ?? null;
      }
    } catch (err) {
      console.error('[booking/charge] could not reconcile payment method from Stripe', err);
    }
  }
  if (!paymentMethodId) {
    return NextResponse.json(
      { error: 'No saved card found on this customer in Stripe. The customer may not have completed card entry.' },
      { status: 400 }
    );
  }

  let intent;
  try {
    intent = await stripe.paymentIntents.create({
      amount: total,
      currency: 'usd',
      customer: booking.stripeCustomerId,
      payment_method: paymentMethodId,
      off_session: true,
      confirm: true,
      description: `Eagle Eye Chauffeur — ${booking.service} — ${booking.date} ${booking.time}`,
      receipt_email: booking.customerEmail ?? undefined,
      metadata: { bookingId: booking.id },
    });
  } catch (err) {
    // Bug-2 fix: give an actionable message for common off-session failures.
    const e = err as { code?: string; message?: string; decline_code?: string };
    console.error('[booking/charge] off-session charge failed', err);
    await prisma.booking.update({
      where: { id },
      data: { paymentStatus: 'charge_failed', stripePaymentMethodId: paymentMethodId },
    });
    let friendly: string;
    if (e.code === 'authentication_required') {
      friendly = 'The card requires the customer to re-confirm (3-D Secure). Off-session charge is not possible — ask the customer to re-enter the card, or send them a payment link.';
    } else if (e.code === 'card_declined') {
      friendly = `The card was declined${e.decline_code ? ` (${e.decline_code})` : ''}. Ask the customer for another card.`;
    } else if (e.code === 'insufficient_funds') {
      friendly = 'The card has insufficient funds. Ask the customer for another card.';
    } else {
      friendly = e.message ?? 'Charge failed.';
    }
    return NextResponse.json({ error: friendly, code: e.code }, { status: 402 });
  }

  if (intent.status !== 'succeeded') {
    return NextResponse.json(
      { error: `Charge not completed (status: ${intent.status}).`, status: intent.status },
      { status: 402 }
    );
  }

  await prisma.booking.update({
    where: { id },
    data: {
      paymentStatus: 'charged',
      stripePaymentIntentId: intent.id,
      stripePaymentMethodId: paymentMethodId,
      chargedAmount: total / 100,
      paidAt: new Date(),
    },
  });

  // Receipt email to the customer (best-effort)
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (apiKey && booking.customerEmail) {
    const resend = new Resend(apiKey);
    const from = process.env.EMAIL_FROM?.trim() || 'Eagle Eye Chauffeur <onboarding@resend.dev>';
    const html = `<p>Hi ${escapeHtml(booking.customerName ?? '')},</p>
<p>Thank you for riding with <strong>Eagle Eye Chauffeur</strong>. Your card on file has been charged <strong>$${(total / 100).toFixed(2)}</strong> for your ${escapeHtml(booking.service)} on ${escapeHtml(booking.date ?? '')}.</p>
<p>We hope to see you again soon.</p>
<p>— Eagle Eye Chauffeur<br/><a href="mailto:${escapeHtml(CONTACT_EMAIL_BOOKINGS)}">${escapeHtml(CONTACT_EMAIL_BOOKINGS)}</a></p>`;
    await resend.emails
      .send({
        from,
        to: [booking.customerEmail],
        subject: 'Your Eagle Eye Chauffeur receipt',
        html,
      })
      .catch(() => {});
  }

  return NextResponse.json({ ok: true, chargedAmount: total / 100, paymentIntentId: intent.id });
}
