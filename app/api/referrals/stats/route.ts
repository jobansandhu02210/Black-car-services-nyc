import { NextResponse } from 'next/server';
import { referralStats } from '@/lib/referrals';

export async function GET() {
  try {
    const rows = await referralStats();
    return NextResponse.json({ ok: true, rows });
  } catch {
    return NextResponse.json({ ok: false, message: 'Could not load stats.' }, { status: 500 });
  }
}

