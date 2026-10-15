import { NextResponse, type NextRequest } from 'next/server';
import { isPlacesConfigured } from '@/lib/places-env';
import { assertAllowedPlacesCaller } from '@/lib/places-request';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  return NextResponse.json({ enabled: isPlacesConfigured() });
}
