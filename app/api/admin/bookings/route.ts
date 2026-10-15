import { NextResponse, type NextRequest } from 'next/server';
import { assertAdmin } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

const RIDE_STATUSES = ['new', 'confirmed', 'completed', 'cancelled', 'no_show'] as const;

const SELECT = {
  id: true,
  createdAt: true,
  service: true,
  vehicle: true,
  pickup: true,
  dropoff: true,
  airport: true,
  date: true,
  time: true,
  passengers: true,
  hours: true,
  customerName: true,
  customerEmail: true,
  customerPhone: true,
  promoCode: true,
  quoteAmount: true,
  tipAmount: true,
  tipPercent: true,
  specialRequests: true,
  source: true,
  sourceMessage: true,
  paymentStatus: true,
  chargedAmount: true,
  paidAt: true,
  stripeCustomerId: true,
  stripePaymentMethodId: true,
  assignedDriver: true,
  assignedChauffeurId: true,
  rideStatus: true,
  confirmationSentAt: true,
  driverNotifiedAt: true,
} as const;

function str(v: unknown, max = 500): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}
function numOrNull(v: unknown): number | null {
  if (v === '' || v == null) return null;
  const n = typeof v === 'number' ? v : parseFloat(String(v));
  return Number.isFinite(n) ? n : null;
}

/** GET — list bookings for the dispatch board. */
export async function GET(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;
  try {
    const { prisma } = await import('@/lib/prisma');
    const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' }, take: 400, select: SELECT });
    return NextResponse.json({ ok: true, bookings });
  } catch (err) {
    console.error('[admin/bookings GET] DB error', err);
    return NextResponse.json({ error: 'Database is not configured or unreachable.' }, { status: 503 });
  }
}

/** POST — create a manual booking (phone / WhatsApp). */
export async function POST(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const customerName = str(body.customerName, 200);
  const pickup = str(body.pickup, 500);
  if (!customerName || !pickup) {
    return NextResponse.json({ error: 'Customer name and pick-up are required.' }, { status: 400 });
  }
  const rideStatus = RIDE_STATUSES.includes(String(body.rideStatus) as (typeof RIDE_STATUSES)[number])
    ? String(body.rideStatus)
    : 'confirmed';

  try {
    const { prisma } = await import('@/lib/prisma');
    const booking = await prisma.booking.create({
      data: {
        customerName,
        customerEmail: str(body.customerEmail, 200) || null,
        customerPhone: str(body.customerPhone, 50) || null,
        service: str(body.service, 100) || 'point-to-point',
        pickup,
        dropoff: str(body.dropoff, 500) || null,
        airport: str(body.airport, 200) || null,
        date: str(body.date, 50) || null,
        time: str(body.time, 30) || null,
        vehicle: str(body.vehicle, 200) || null,
        passengers: numOrNull(body.passengers) != null ? Math.trunc(numOrNull(body.passengers)!) : null,
        hours: numOrNull(body.hours) != null ? Math.trunc(numOrNull(body.hours)!) : null,
        specialRequests: str(body.specialRequests, 2000) || null,
        quoteAmount: numOrNull(body.quoteAmount),
        assignedDriver: str(body.assignedDriver, 120) || null,
        rideStatus,
        paymentStatus: 'pending',
      },
      select: SELECT,
    });
    return NextResponse.json({ ok: true, booking });
  } catch (err) {
    console.error('[admin/bookings POST] DB error', err);
    return NextResponse.json({ error: 'Could not create the booking.' }, { status: 500 });
  }
}

/**
 * PATCH — edit a booking, assign a driver, change status, or mark it paid (cash/other).
 *   Body: { id, ...editable fields }
 *   Mark paid: { id, markPaid: true, chargedAmount }
 */
export async function PATCH(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }

  const id = str(body.id, 60);
  if (!id) return NextResponse.json({ error: 'Booking id is required.' }, { status: 400 });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {};
  const strFields = ['customerName', 'customerEmail', 'customerPhone', 'service', 'pickup', 'dropoff', 'airport', 'date', 'time', 'vehicle', 'specialRequests', 'assignedDriver', 'assignedChauffeurId'];
  for (const f of strFields) {
    if (f in body) data[f] = str(body[f], 2000) || null;
  }
  // Reassigning (or clearing) the driver resets the "trip emailed to driver" flag.
  if ('assignedChauffeurId' in body) data.driverNotifiedAt = null;
  if ('passengers' in body) { const n = numOrNull(body.passengers); data.passengers = n != null ? Math.trunc(n) : null; }
  if ('hours' in body) { const n = numOrNull(body.hours); data.hours = n != null ? Math.trunc(n) : null; }
  if ('quoteAmount' in body) data.quoteAmount = numOrNull(body.quoteAmount);

  if ('rideStatus' in body) {
    if (!RIDE_STATUSES.includes(String(body.rideStatus) as (typeof RIDE_STATUSES)[number])) {
      return NextResponse.json({ error: 'Invalid ride status.' }, { status: 400 });
    }
    data.rideStatus = String(body.rideStatus);
  }

  // Mark paid outside Stripe (cash / external). Does not touch a saved card.
  if (body.markPaid === true) {
    const amt = numOrNull(body.chargedAmount);
    data.paymentStatus = 'paid_cash';
    data.chargedAmount = amt ?? undefined;
    data.paidAt = new Date();
  }
  // Revert to unpaid (undo a manual "mark paid").
  if (body.markUnpaid === true) {
    data.paymentStatus = 'pending';
    data.chargedAmount = null;
    data.paidAt = null;
  }

  if (Object.keys(data).length === 0) return NextResponse.json({ error: 'Nothing to update.' }, { status: 400 });

  try {
    const { prisma } = await import('@/lib/prisma');
    const booking = await prisma.booking.update({ where: { id }, data, select: SELECT });
    return NextResponse.json({ ok: true, booking });
  } catch (err) {
    console.error('[admin/bookings PATCH] DB error', err);
    return NextResponse.json({ error: 'Could not update the booking.' }, { status: 500 });
  }
}

/** DELETE — permanently remove a booking. Body: { id }. */
export async function DELETE(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const id = str(body.id, 60);
  if (!id) return NextResponse.json({ error: 'Booking id is required.' }, { status: 400 });

  try {
    const { prisma } = await import('@/lib/prisma');
    await prisma.booking.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[admin/bookings DELETE] DB error', err);
    return NextResponse.json({ error: 'Could not delete the booking.' }, { status: 500 });
  }
}
