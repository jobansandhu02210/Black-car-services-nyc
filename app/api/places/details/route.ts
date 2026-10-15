import { NextResponse, type NextRequest } from 'next/server';
import { userFacingPlacesError } from '@/lib/places-api-errors';
import { getPlacesServerApiKey } from '@/lib/places-env';
import { assertAllowedPlacesCaller } from '@/lib/places-request';

export const dynamic = 'force-dynamic';

type GoogleDetailsResponse = {
  status: string;
  result?: { formatted_address?: string; name?: string };
  error_message?: string;
};

export async function GET(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  const key = getPlacesServerApiKey();
  if (!key) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const placeId = request.nextUrl.searchParams.get('placeId')?.trim();
  if (!placeId) {
    return NextResponse.json({ error: 'missing_place_id' }, { status: 400 });
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'formatted_address,name');
  url.searchParams.set('key', key);

  let data: GoogleDetailsResponse;
  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });
    data = (await res.json()) as GoogleDetailsResponse;
  } catch (e) {
    console.error('[places/details] fetch failed', e);
    return NextResponse.json({ error: 'upstream_failed' }, { status: 502 });
  }

  if (data.status !== 'OK' || !data.result) {
    console.error('[places/details]', data.status, data.error_message);
    return NextResponse.json(
      { error: userFacingPlacesError(data.error_message ?? data.status) },
      { status: 502 }
    );
  }

  const formattedAddress =
    data.result.formatted_address ?? data.result.name ?? '';

  return NextResponse.json({
    formattedAddress,
    name: data.result.name,
  });
}
