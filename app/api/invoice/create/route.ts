import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';
import { escapeHtml } from '@/lib/escape-html';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY } from '@/lib/contact';

export const dynamic = 'force-dynamic';

function str(v: unknown, max = 500): string {
  if (typeof v !== 'string') return '';
  return v.trim().slice(0, max);
}

function num(v: unknown, def = 0): number {
  const n = typeof v === 'number' ? v : parseFloat(String(v));
  if (!Number.isFinite(n) || n < 0) return def;
  return Math.round(n * 100) / 100;
}

export type LineItem = { label: string; amount: number };

export async function POST(request: NextRequest) {
  // Admin-only: protected by middleware HTTP Basic Auth
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const customerName = str(body.customerName, 200);
  const customerEmail = str(body.customerEmail, 200);
  if (!customerName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
    return NextResponse.json({ error: 'Customer name and valid email required.' }, { status: 400 });
  }

  const rideDate = str(body.rideDate, 50);
  const rideFrom = str(body.rideFrom, 500);
  const rideTo = str(body.rideTo, 500);
  const notes = str(body.notes, 1000);

  const rawItems = Array.isArray(body.lineItems) ? body.lineItems : [];
  const lineItems: LineItem[] = rawItems
    .filter((i): i is { label: unknown; amount: unknown } => i && typeof i === 'object')
    .map((i) => ({ label: str(i.label, 100), amount: num(i.amount) }))
    .filter((i) => i.label && i.amount > 0);

  if (lineItems.length === 0) {
    return NextResponse.json({ error: 'At least one line item is required.' }, { status: 400 });
  }

  const invoice = await prisma.invoice.create({
    data: { customerName, customerEmail, rideDate, rideFrom, rideTo, lineItems, notes },
  });

  // Send email to customer
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (apiKey) {
    const resend = new Resend(apiKey);
    const from = process.env.EMAIL_FROM?.trim() || 'Eagle Eye Chauffeur <onboarding@resend.dev>';
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://eagleeyechauffeur.com').replace(/\/$/, '');
    const invoiceUrl = `${siteUrl}/invoice/${invoice.token}`;

    const subtotal = lineItems.reduce((s, l) => s + l.amount, 0);
    const rowsHtml = lineItems
      .map(
        (l) =>
          `<tr><td style="padding:5px 16px 5px 0;color:#555">${escapeHtml(l.label)}</td><td style="padding:5px 0;text-align:right;font-weight:600">$${l.amount.toFixed(2)}</td></tr>`
      )
      .join('');

    const html = `
<p>Hi ${escapeHtml(customerName)},</p>
<p>Thank you for riding with <strong>Eagle Eye Chauffeur</strong>. Your invoice is ready — click the button below to review the details, add a gratuity, and pay securely by card.</p>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;margin:16px 0">${rowsHtml}
<tr><td colspan="2" style="border-top:1px solid #ddd;padding-top:8px"></td></tr>
<tr><td style="padding:5px 16px 5px 0;font-weight:700">Subtotal</td><td style="padding:5px 0;text-align:right;font-weight:700">$${subtotal.toFixed(2)}</td></tr>
</table>
${notes ? `<p style="font-size:13px;color:#555"><strong>Note:</strong> ${escapeHtml(notes)}</p>` : ''}
<p style="margin:24px 0">
  <a href="${invoiceUrl}" style="background:#111;color:#fff;padding:12px 28px;border-radius:6px;text-decoration:none;font-family:sans-serif;font-size:15px;font-weight:600">View &amp; Pay Invoice</a>
</p>
<p style="font-size:13px;color:#777">Or copy this link: <a href="${invoiceUrl}">${invoiceUrl}</a></p>
<p style="font-size:13px;color:#777">Questions? Call or text <strong>${escapeHtml(CONTACT_PHONE_DISPLAY)}</strong> or reply to this email.</p>
<p>— Eagle Eye Chauffeur</p>`;

    await resend.emails.send({
      from,
      to: [customerEmail],
      replyTo: CONTACT_EMAIL_BOOKINGS,
      subject: `Your Eagle Eye Chauffeur invoice${rideDate ? ` — ${rideDate}` : ''}`,
      html,
    });
  }

  return NextResponse.json({ ok: true, token: invoice.token, id: invoice.id });
}
