import { Resend } from 'resend';
import { NextResponse, type NextRequest } from 'next/server';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY } from '@/lib/contact';
import { escapeHtml } from '@/lib/escape-html';
import { assertAllowedPlacesCaller } from '@/lib/places-request';
import { publicEmailSendError } from '@/lib/resend-user-error';

export const dynamic = 'force-dynamic';

const MAX = 4000;

function str(v: unknown, max = 500): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function num(v: unknown, min: number, max: number, def: number): number {
  const n = typeof v === 'number' ? v : parseInt(String(v), 10);
  if (Number.isNaN(n)) return def;
  return Math.min(max, Math.max(min, n));
}

function oneLine(s: string, max: number): string {
  return s.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

export async function POST(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email is not configured. Add RESEND_API_KEY in Vercel (see .env.example).' },
      { status: 503 }
    );
  }

  const from = process.env.EMAIL_FROM?.trim() || 'Eagle Eye Chauffeur <onboarding@resend.dev>';
  const to = process.env.BOOKING_NOTIFY_TO?.trim() || CONTACT_EMAIL_BOOKINGS;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const customerName = str(body.customerName, 200);
  const customerEmail = str(body.customerEmail, 200);
  const customerPhone = str(body.customerPhone, 50);
  if (!customerName || !customerEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
    return NextResponse.json({ error: 'Name and a valid email are required.' }, { status: 400 });
  }

  const service = str(body.service, 100);
  const vehicle = str(body.vehicle, 200);
  const pickup = str(body.pickup, MAX);
  const dropoff = str(body.dropoff, MAX);
  const airport = str(body.airport, 200);
  const date = str(body.date, 50);
  const time = str(body.time, 20);
  const passengers = num(body.passengers, 1, 20, 1);
  const luggage = num(body.luggage, 0, 50, 0);
  const hours = body.hours != null ? num(body.hours, 1, 24, 2) : undefined;
  const specialRequests = str(body.specialRequests, MAX);
  const quoteAmount = num(body.quoteAmount, 0, 100000, 0);
  const quoteLabel = str(body.quoteLabel, 200);
  const promoCode = str(body.promoCode, 64).toUpperCase();
  const promoDriverName = str(body.promoDriverName, 120);

  if (!pickup || !date || !time) {
    return NextResponse.json({ error: 'Missing required booking fields.' }, { status: 400 });
  }

  // Flag last-minute bookings (under 2 hours) — allow through but mark URGENT in the email.
  const pickupDatetime = new Date(`${date}T${time}`);
  const twoHoursFromNow = new Date(Date.now() + 2 * 60 * 60 * 1000);
  const isLastMinute = !isNaN(pickupDatetime.getTime()) && pickupDatetime < twoHoursFromNow;

  const promoDisplay =
    promoCode && promoDriverName
      ? `${promoCode} (${promoDriverName})`
      : promoCode || '—';

  const rows: [string, string][] = [
    ['Service', service],
    ['Vehicle', vehicle],
    ['Driver promo / referral', promoDisplay],
    ['Pick-up', pickup],
    ['Drop-off', dropoff || '—'],
    ['Airport', airport || '—'],
    ['Date', date],
    ['Time', time],
    ['Passengers', String(passengers)],
    ['Luggage (bags)', String(luggage)],
    ['Hours', hours != null ? String(hours) : '—'],
    [
      'Website estimate (reference only)',
      quoteAmount > 0 ? `$${quoteAmount} — send official invoice with final price` : `— (${quoteLabel})`,
    ],
    ['Special requests', specialRequests || '—'],
    ['', ''],
    ['Guest name', customerName],
    ['Guest email', customerEmail],
    ['Guest phone', customerPhone || '—'],
  ];

  const tableHtml = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`
    )
    .join('');

  const urgentBanner = isLastMinute
    ? `<div style="background:#dc2626;color:#fff;padding:14px 16px;font-size:15px;font-weight:700;margin-bottom:16px;border-radius:4px">⚠️ LAST-MINUTE BOOKING — pick-up is within 2 hours. Respond immediately.</div>`
    : '';

  const html = `${urgentBanner}<p><strong>New booking request</strong> — a client submitted the booking form on your website with the details below.</p>
<p style="margin:12px 0;font-size:14px"><strong>Your workflow:</strong> Reply to this message to email the client directly, then send them your <strong>official invoice</strong> with the final ride price when you&apos;re ready.</p>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${tableHtml}</table>
<p style="margin-top:16px;font-size:13px;color:#666">Reply-to is set to the guest&apos;s address.</p>`;

  const resend = new Resend(apiKey);
  const subject = `${isLastMinute ? '⚠️ URGENT — ' : ''}Booking request — ${oneLine(customerName, 80)} — ${oneLine(service || 'Ride', 50)}${
    promoCode ? ` — Promo ${promoCode}` : ''
  }`;

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: customerEmail,
    subject,
    html,
  });

  if (error) {
    console.error('[booking/notify] notify to business failed', error);
    return NextResponse.json(
      { error: publicEmailSendError(error.message) },
      { status: 502 }
    );
  }

  const referenceEstimate =
    quoteAmount > 0
      ? `<p style="margin:12px 0;font-size:13px;color:#555">Reference estimate from our website: <strong>$${quoteAmount}</strong> (${escapeHtml(quoteLabel)}). This is <strong>not</strong> a final bill — you will receive a formal invoice from us with the confirmed price.</p>`
      : `<p style="margin:12px 0;font-size:13px;color:#555">Final pricing will appear on your invoice after we confirm your trip details.</p>`;

  const promoNote = promoCode
    ? `<p style="margin:12px 0;font-size:14px">We recorded your driver promo / referral code: <strong>${escapeHtml(promoCode)}</strong>${
        promoDriverName ? ` (${escapeHtml(promoDriverName)})` : ''
      }.</p>`
    : '';

  const confirmHtml = `<p>Hi ${escapeHtml(customerName)},</p>
<p>Thank you — we received your booking request for <strong>Eagle Eye Chauffeur</strong>.</p>
<p><strong>Trip summary:</strong> ${escapeHtml(service)} on ${escapeHtml(date)} at ${escapeHtml(time)}. We have your pick-up and trip details on file.</p>
${promoNote}
${referenceEstimate}
<p><strong>What happens next:</strong> Our team will review your request and email you an <strong>official invoice</strong> for the ride when pricing is confirmed. If you need anything sooner, call or text <strong>${escapeHtml(CONTACT_PHONE_DISPLAY)}</strong>.</p>
<p>— Eagle Eye Chauffeur<br/><a href="mailto:${escapeHtml(CONTACT_EMAIL_BOOKINGS)}">${escapeHtml(CONTACT_EMAIL_BOOKINGS)}</a></p>`;

  const { error: guestError } = await resend.emails.send({
    from,
    to: [customerEmail],
    replyTo: to,
    subject: 'Booking received — invoice to follow — Eagle Eye Chauffeur',
    html: confirmHtml,
  });

  if (guestError) {
    console.error('[booking/notify] guest confirmation failed (business email was sent)', guestError);
    return NextResponse.json({
      ok: true,
      id: data?.id,
      guestEmailSent: false,
      guestEmailError: publicEmailSendError(guestError.message),
    });
  }

  return NextResponse.json({ ok: true, id: data?.id, guestEmailSent: true });
}
