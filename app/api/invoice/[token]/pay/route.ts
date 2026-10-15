import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { stripe } from '@/lib/stripe';

export const dynamic = 'force-dynamic';

export async function POST(request: Request, { params }: { params: { token: string } }) {
  const invoice = await prisma.invoice.findUnique({ where: { token: params.token } });
  if (!invoice) return NextResponse.json({ error: 'Invoice not found.' }, { status: 404 });
  if (invoice.status === 'paid') return NextResponse.json({ error: 'Invoice already paid.' }, { status: 409 });

  let body: { tipAmount?: number } = {};
  try { body = await request.json(); } catch { /* no body */ }

  const lineItems = invoice.lineItems as { label: string; amount: number }[];
  const subtotal = lineItems.reduce((s, l) => s + l.amount, 0);
  const tip = Math.max(0, Math.round(((body.tipAmount ?? 0) + Number.EPSILON) * 100) / 100);
  const totalCents = Math.round((subtotal + tip) * 100);

  if (totalCents < 50) {
    return NextResponse.json({ error: 'Amount too small to process.' }, { status: 400 });
  }

  const intent = await stripe.paymentIntents.create({
    amount: totalCents,
    currency: 'usd',
    metadata: {
      invoiceToken: params.token,
      invoiceId: invoice.id,
      customerName: invoice.customerName,
      customerEmail: invoice.customerEmail,
      tipAmount: String(tip),
    },
    receipt_email: invoice.customerEmail,
    description: `Eagle Eye Chauffeur — ${invoice.rideDate ?? 'Ride'}`,
  });

  return NextResponse.json({ clientSecret: intent.client_secret });
}
