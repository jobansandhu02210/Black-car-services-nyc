import { NextResponse, type NextRequest } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getSiteUrl } from '@/lib/site';
import { assertAllowedPlacesCaller } from '@/lib/places-request';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  // CSRF / origin guard — same as other API routes
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // tipCents must be a positive integer (cents)
  const tipCents = typeof body.tipCents === 'number' ? Math.round(body.tipCents) : 0;
  if (tipCents < 100) {
    // Minimum $1.00
    return NextResponse.json({ error: 'Tip must be at least $1.00' }, { status: 400 });
  }
  if (tipCents > 100_000) {
    // Maximum $1,000 — sanity cap
    return NextResponse.json({ error: 'Tip amount too large' }, { status: 400 });
  }

  const site = getSiteUrl();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: tipCents,
            product_data: {
              name: 'Tip — Eagle Eye Chauffeur',
              description: 'Thank you for tipping your driver!',
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${site}/tip?success=1`,
      cancel_url: `${site}/tip`,
      payment_method_types: ['card'],
      metadata: {
        type: 'tip',
        tipCents: String(tipCents),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('[tip/create-checkout]', err);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
