import { NextResponse, type NextRequest } from 'next/server';
import { computeBookingEstimate } from '@/lib/booking-estimate-server';
import { assertAllowedPlacesCaller } from '@/lib/places-request';

export const dynamic = 'force-dynamic';

const SERVICES = new Set(['point-to-point', 'hourly', 'airport']);

function str(v: unknown, max: number): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function num(v: unknown, min: number, max: number, fallback: number): number {
  const n = typeof v === 'number' ? v : parseInt(String(v), 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

export async function POST(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const service = str(body.service, 32);
  const vehicle = str(body.vehicle, 32);
  if (!SERVICES.has(service)) {
    return NextResponse.json({ error: 'Invalid service' }, { status: 400 });
  }

  const result = await computeBookingEstimate({
    service,
    vehicle,
    pickup: str(body.pickup, 2000),
    dropoff: str(body.dropoff, 2000),
    airport: str(body.airport, 200),
    hours: num(body.hours, 2, 24, 2),
    passengers: num(body.passengers, 1, 20, 1),
    luggage: num(body.luggage, 0, 50, 0),
    promoCode: str(body.promoCode, 64),
    customerEmail: str(body.customerEmail, 320).toLowerCase(),
    customerPhone: str(body.customerPhone, 64),
  });

  return NextResponse.json(result);
}
