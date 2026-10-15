import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request, { params }: { params: { token: string } }) {
  let body: { paymentIntentId?: string; tipAmount?: number } = {};
  try { body = await request.json(); } catch { /* no body */ }

  if (!body.paymentIntentId) {
    return NextResponse.json({ error: 'paymentIntentId required.' }, { status: 400 });
  }

  // Verify with Stripe that the payment actually succeeded
  const intent = await stripe.paymentIntents.retrieve(body.paymentIntentId);
  if (intent.status !== 'succeeded') {
    return NextResponse.json({ error: 'Payment not confirmed by Stripe.' }, { status: 402 });
  }

  const invoice = await prisma.invoice.findUnique({ where: { token: params.token } });
  if (!invoice) return NextResponse.json({ error: 'Invoice not found.' }, { status: 404 });
  if (invoice.status === 'paid') return NextResponse.json({ ok: true });

  await prisma.invoice.update({
    where: { token: params.token },
    data: {
      status: 'paid',
      paidAt: new Date(),
      tipAmount: body.tipAmount ?? 0,
      stripePaymentIntentId: body.paymentIntentId,
    },
  });

  return NextResponse.json({ ok: true });
}
