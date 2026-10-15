import { Resend } from 'resend';
import { NextResponse, type NextRequest } from 'next/server';
import { CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { escapeHtml } from '@/lib/escape-html';
import { assertAllowedPlacesCaller } from '@/lib/places-request';
import { publicEmailSendError } from '@/lib/resend-user-error';

export const dynamic = 'force-dynamic';

const MAX = 8000;

function str(v: unknown, max = 500): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
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

  const name = str(body.name, 200);
  const email = str(body.email, 200);
  const phone = str(body.phone, 80);
  const message = str(body.message, MAX);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const html = `<p><strong>Contact form</strong> — ${escapeHtml(name)}</p>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
<tr><td style="padding:6px 12px 6px 0;font-weight:600">Email</td><td>${escapeHtml(email)}</td></tr>
<tr><td style="padding:6px 12px 6px 0;font-weight:600">Phone</td><td>${escapeHtml(phone || '—')}</td></tr>
</table>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Contact: ${oneLine(name, 80)}`,
    html,
  });

  if (error) {
    console.error('[contact]', error);
    return NextResponse.json(
      { error: publicEmailSendError(error.message) },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
