import { NextResponse, type NextRequest } from 'next/server';
import { assertAdmin } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

const SELECT = { id: true, name: true, phone: true, email: true, notes: true, active: true } as const;

function str(v: unknown, max = 300): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

/** GET — list fleet chauffeurs. */
export async function GET(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;
  try {
    const { prisma } = await import('@/lib/prisma');
    const drivers = await prisma.chauffeur.findMany({ orderBy: { name: 'asc' }, select: SELECT });
    return NextResponse.json({ ok: true, drivers });
  } catch (err) {
    console.error('[admin/drivers GET]', err);
    return NextResponse.json({ error: 'Database unavailable.' }, { status: 503 });
  }
}

/** POST — add a chauffeur. Body: { name, phone?, email?, notes? } */
export async function POST(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const name = str(body.name, 120);
  if (!name) return NextResponse.json({ error: 'Driver name is required.' }, { status: 400 });
  try {
    const { prisma } = await import('@/lib/prisma');
    const driver = await prisma.chauffeur.create({
      data: { name, phone: str(body.phone, 50) || null, email: str(body.email, 200) || null, notes: str(body.notes, 500) || null },
      select: SELECT,
    });
    return NextResponse.json({ ok: true, driver });
  } catch (err) {
    console.error('[admin/drivers POST]', err);
    return NextResponse.json({ error: 'Could not add driver.' }, { status: 500 });
  }
}

/** PATCH — edit a chauffeur. Body: { id, ...fields } */
export async function PATCH(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const id = str(body.id, 60);
  if (!id) return NextResponse.json({ error: 'Driver id is required.' }, { status: 400 });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: Record<string, any> = {};
  if ('name' in body) { const n = str(body.name, 120); if (n) data.name = n; }
  if ('phone' in body) data.phone = str(body.phone, 50) || null;
  if ('email' in body) data.email = str(body.email, 200) || null;
  if ('notes' in body) data.notes = str(body.notes, 500) || null;
  if ('active' in body) data.active = !!body.active;
  if (Object.keys(data).length === 0) return NextResponse.json({ error: 'Nothing to update.' }, { status: 400 });
  try {
    const { prisma } = await import('@/lib/prisma');
    const driver = await prisma.chauffeur.update({ where: { id }, data, select: SELECT });
    return NextResponse.json({ ok: true, driver });
  } catch (err) {
    console.error('[admin/drivers PATCH]', err);
    return NextResponse.json({ error: 'Could not update driver.' }, { status: 500 });
  }
}

/** DELETE — remove a chauffeur. Body: { id } */
export async function DELETE(request: NextRequest) {
  const denied = assertAdmin(request);
  if (denied) return denied;
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }); }
  const id = str(body.id, 60);
  if (!id) return NextResponse.json({ error: 'Driver id is required.' }, { status: 400 });
  try {
    const { prisma } = await import('@/lib/prisma');
    await prisma.chauffeur.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[admin/drivers DELETE]', err);
    return NextResponse.json({ error: 'Could not delete driver.' }, { status: 500 });
  }
}
