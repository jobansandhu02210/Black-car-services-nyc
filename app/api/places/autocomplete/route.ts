import { NextResponse, type NextRequest } from 'next/server';
import { userFacingPlacesError } from '@/lib/places-api-errors';
import { getPlacesServerApiKey } from '@/lib/places-env';
import { assertAllowedPlacesCaller } from '@/lib/places-request';

export const dynamic = 'force-dynamic';

type GoogleAutocompleteResponse = {
  predictions?: Array<{ description: string; place_id: string }>;
  status: string;
  error_message?: string;
};

export async function GET(request: NextRequest) {
  const denied = assertAllowedPlacesCaller(request);
  if (denied) return denied;

  const key = getPlacesServerApiKey();
  if (!key) {
    return NextResponse.json({ predictions: [], enabled: false });
  }

  const input = request.nextUrl.searchParams.get('input')?.trim() ?? '';
  if (input.length < 2) {
    return NextResponse.json({ predictions: [], enabled: true });
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/autocomplete/json');
  url.searchParams.set('input', input);
  url.searchParams.set('components', 'country:us');
  url.searchParams.set('key', key);

  let data: GoogleAutocompleteResponse;
  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });
    data = (await res.json()) as GoogleAutocompleteResponse;
  } catch (e) {
    console.error('[places/autocomplete] fetch failed', e);
    return NextResponse.json({ predictions: [], error: 'upstream_failed', enabled: true }, { status: 502 });
  }

  if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
    console.error('[places/autocomplete]', data.status, data.error_message);
    return NextResponse.json(
      {
        predictions: [],
        error: userFacingPlacesError(data.error_message ?? data.status),
        enabled: true,
      },
      { status: 502 }
    );
  }

  const predictions = (data.predictions ?? []).map((p) => ({
    description: p.description,
    placeId: p.place_id,
  }));

  return NextResponse.json({ predictions, enabled: true });
}
