import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET(_req: Request, { params }: { params: { token: string } }) {
  const invoice = await prisma.invoice.findUnique({ where: { token: params.token } });
  if (!invoice) return NextResponse.json({ error: 'Invoice not found.' }, { status: 404 });

  return NextResponse.json({
    id: invoice.id,
    customerName: invoice.customerName,
    rideDate: invoice.rideDate,
    rideFrom: invoice.rideFrom,
    rideTo: invoice.rideTo,
    lineItems: invoice.lineItems,
    notes: invoice.notes,
    status: invoice.status,
    tipAmount: invoice.tipAmount,
    createdAt: invoice.createdAt,
    paidAt: invoice.paidAt,
  });
}
