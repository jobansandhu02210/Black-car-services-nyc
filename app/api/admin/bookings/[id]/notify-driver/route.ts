import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { assertAdmin } from '@/lib/admin-auth';
import { escapeHtml } from '@/lib/escape-html';
import { CONTACT_PHONE_DISPLAY } from '@/lib/contact';

export const dynamic = 'force-dynamic';

/**
 * Email the assigned chauffeur the full trip details for a booking.
 *   POST /api/admin/bookings/<id>/notify-driver
 */
export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = assertAdmin(request);
  if (denied) return denied;

  const { id } = await params;
  const { prisma } = await import('@/lib/prisma');
  const b = await prisma.booking.findUnique({ where: { id } });
  if (!b) return NextResponse.json({ error: 'Booking not found.' }, { status: 404 });
  if (!b.assignedChauffeurId) return NextResponse.json({ error: 'Assign a driver first.' }, { status: 400 });

  const driver = await prisma.chauffeur.findUnique({ where: { id: b.assignedChauffeurId } });
  if (!driver) return NextResponse.json({ error: 'Assigned driver no longer exists.' }, { status: 404 });
  if (!driver.email) return NextResponse.json({ error: `${driver.name} has no email on file — add one to notify by email.` }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) return NextResponse.json({ error: 'Email is not configured (set RESEND_API_KEY).' }, { status: 503 });

  const from = process.env.EMAIL_FROM?.trim() || 'Eagle Eye Chauffeur <onboarding@resend.dev>';
  const dest = b.dropoff || b.airport || '';
  const row = (k: string, v: string) => v ? `<tr><td style="padding:6px 14px 6px 0;color:#666;font-weight:600;vertical-align:top">${k}</td><td>${v}</td></tr>` : '';
  const html = `<p>Hi ${escapeHtml(driver.name)},</p>
<p>You've been assigned a trip. Here are the details:</p>
<table style="border-collapse:collapse;font-family:sans-serif;font-size:15px">
${row('Pick-up date', escapeHtml(b.date || ''))}
${row('Pick-up time', escapeHtml(b.time || ''))}
${row('Pick-up address', escapeHtml(b.pickup || ''))}
${row('Drop-off', escapeHtml(dest))}
${row('Service', escapeHtml(b.service || ''))}
${row('Vehicle', escapeHtml(b.vehicle || ''))}
${row('Client name', escapeHtml(b.customerName || ''))}
${row('Client phone', escapeHtml(b.customerPhone || ''))}
${row('Passengers', b.passengers != null ? String(b.passengers) : '')}
${row('Special requests', escapeHtml(b.specialRequests || ''))}
</table>
<p style="margin-top:14px">Please confirm you can cover this trip. Questions? Call dispatch at ${escapeHtml(CONTACT_PHONE_DISPLAY)}.</p>
<p>— Eagle Eye Chauffeur</p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [driver.email],
      subject: `New trip assigned — ${b.date || ''} ${b.time || ''} — ${b.customerName || 'Client'}`.trim(),
      html,
    });
    if (error) {
      console.error('[notify-driver] resend error', error);
      return NextResponse.json({ error: 'Email could not be sent.' }, { status: 502 });
    }
    const notifiedAt = new Date();
    await prisma.booking.update({ where: { id }, data: { driverNotifiedAt: notifiedAt } }).catch(() => {});
    return NextResponse.json({ ok: true, driverNotifiedAt: notifiedAt.toISOString(), driverName: driver.name });
  } catch (err) {
    console.error('[notify-driver] send failed', err);
    return NextResponse.json({ error: 'Email could not be sent.' }, { status: 502 });
  }
}
