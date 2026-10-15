import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { assertAdmin } from '@/lib/admin-auth';
import { escapeHtml } from '@/lib/escape-html';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY } from '@/lib/contact';

export const dynamic = 'force-dynamic';

/**
 * Email the customer a booking confirmation. Admin-triggered from the dispatch
 * board. Uses Resend (RESEND_API_KEY / EMAIL_FROM).
 *   POST /api/admin/bookings/<id>/confirm
 */
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = assertAdmin(request);
  if (denied) return denied;

  const { id } = await params;

  const { prisma } = await import('@/lib/prisma');
  const b = await prisma.booking.findUnique({ where: { id } });
  if (!b) return NextResponse.json({ error: 'Booking not found.' }, { status: 404 });
  if (!b.customerEmail) return NextResponse.json({ error: 'This booking has no customer email.' }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return NextResponse.json({ error: 'Email is not configured (set RESEND_API_KEY).' }, { status: 503 });

  const from = process.env.EMAIL_FROM?.trim() || 'Eagle Eye Chauffeur <onboarding@resend.dev>';
  const dest = b.dropoff || b.airport || '';
  const rows = [
    ['Service', b.service],
    ['Vehicle', b.vehicle],
    ['Date & time', [b.date, b.time].filter(Boolean).join(' ')],
    ['Pick-up', b.pickup],
    ['Drop-off', dest],
    ['Passengers', b.passengers != null ? String(b.passengers) : ''],
  ].filter(([, v]) => v);

  const html = `<p>Hi ${escapeHtml(b.customerName ?? '')},</p>
<p>Your ride with <strong>Eagle Eye Chauffeur</strong> is confirmed. Here are the details:</p>
<table cellpadding="6" style="border-collapse:collapse;font-size:14px">
${rows.map(([k, v]) => `<tr><td style="color:#666">${escapeHtml(String(k))}</td><td><strong>${escapeHtml(String(v))}</strong></td></tr>`).join('')}
</table>
<p>Your chauffeur will arrive on time, and we track flights on airport pickups. Need to change anything? Reply to this email or call ${escapeHtml(CONTACT_PHONE_DISPLAY)}.</p>
<p>— Eagle Eye Chauffeur<br/><a href="mailto:${escapeHtml(CONTACT_EMAIL_BOOKINGS)}">${escapeHtml(CONTACT_EMAIL_BOOKINGS)}</a></p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [b.customerEmail],
      subject: 'Your Eagle Eye Chauffeur booking is confirmed',
      html,
    });
    if (error) {
      console.error('[bookings/confirm] resend error', error);
      return NextResponse.json({ error: 'Email could not be sent.' }, { status: 502 });
    }
    const sentAt = new Date();
    await prisma.booking.update({ where: { id }, data: { confirmationSentAt: sentAt } }).catch(() => {});
    return NextResponse.json({ ok: true, confirmationSentAt: sentAt.toISOString() });
  } catch (err) {
    console.error('[bookings/confirm] send failed', err);
    return NextResponse.json({ error: 'Email could not be sent.' }, { status: 502 });
  }
}
