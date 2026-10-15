import { NextResponse } from 'next/server';
import { recordReferralBooking } from '@/lib/referrals';

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      promoCode?: string;
      customerEmail?: string;
      customerPhone?: string;
      booking?: {
        service?: string;
        pickup?: string;
        dropoff?: string;
        airport?: string;
        date?: string;
        time?: string;
        vehicle?: string;
        passengers?: number;
        luggage?: number;
        hours?: number;
        specialRequests?: string;
        quoteAmount?: number;
        quoteLabel?: string;
        customerName?: string;
      };
    };

    const promoCode = body.promoCode ?? '';
    const booking = body.booking ?? {};
    if (!promoCode.trim()) {
      return NextResponse.json({ ok: false, message: 'Missing promo code.' }, { status: 400 });
    }
    if (!booking.service || !booking.pickup) {
      return NextResponse.json({ ok: false, message: 'Missing booking details.' }, { status: 400 });
    }

    const result = await recordReferralBooking({
      promoCode,
      customerEmail: body.customerEmail ?? null,
      customerPhone: body.customerPhone ?? null,
      booking: {
        service: booking.service,
        pickup: booking.pickup,
        dropoff: booking.dropoff ?? null,
        airport: booking.airport ?? null,
        date: booking.date ?? null,
        time: booking.time ?? null,
        vehicle: booking.vehicle ?? null,
        passengers: typeof booking.passengers === 'number' ? booking.passengers : null,
        luggage: typeof booking.luggage === 'number' ? booking.luggage : null,
        hours: typeof booking.hours === 'number' ? booking.hours : null,
        specialRequests: booking.specialRequests ?? null,
        quoteAmount: typeof booking.quoteAmount === 'number' ? booking.quoteAmount : null,
        quoteLabel: booking.quoteLabel ?? null,
        customerName: booking.customerName ?? null,
      },
    });

    if (!result.ok) return NextResponse.json(result, { status: 400 });
    if (result.persisted) {
      return NextResponse.json({
        ok: true,
        persisted: true,
        bookingId: result.bookingId,
        driver: result.driver,
      });
    }
    return NextResponse.json({
      ok: true,
      persisted: false,
      bookingId: result.bookingId,
      driver: result.driver,
      message: result.message,
    });
  } catch {
    return NextResponse.json({ ok: false, message: 'Could not record referral.' }, { status: 500 });
  }
}

