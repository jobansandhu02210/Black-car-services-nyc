import { NextResponse } from 'next/server';
import { lookupDriverByPromoCode } from '@/lib/referrals';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code') ?? '';

  const result = await lookupDriverByPromoCode(code);
  if (!result.ok) return NextResponse.json(result, { status: 404 });
  return NextResponse.json(result);
}

