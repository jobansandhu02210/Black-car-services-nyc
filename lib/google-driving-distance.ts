/**
 * Server-only: driving distance for pricing. Tries Distance Matrix first, then
 * Geocoding + straight-line miles × road factor if Matrix is disabled or fails.
 */
const EARTH_RADIUS_MI = 3958.7613;
/** Typical ratio driving vs crow-flies for regional trips when Matrix is unavailable. */
const ROAD_FACTOR_STRAIGHT_TO_DRIVING = 1.22;

function haversineMiles(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS_MI * c;
}

async function geocodeLatLng(
  address: string,
  apiKey: string
): Promise<{ lat: number; lng: number } | null> {
  const url = new URL('https://maps.googleapis.com/maps/api/geocode/json');
  url.searchParams.set('address', address.trim());
  url.searchParams.set('key', apiKey);
  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });
    const data = (await res.json()) as {
      status: string;
      results?: { geometry: { location: { lat: number; lng: number } } }[];
    };
    if (data.status !== 'OK' || !data.results?.[0]?.geometry?.location) return null;
    const loc = data.results[0].geometry.location;
    return { lat: loc.lat, lng: loc.lng };
  } catch {
    return null;
  }
}

export async function getDrivingMiles(
  origin: string,
  destination: string,
  apiKey: string
): Promise<number | null> {
  const o = origin.trim();
  const d = destination.trim();
  if (!o || !d) return null;

  const url = new URL('https://maps.googleapis.com/maps/api/distancematrix/json');
  url.searchParams.set('origins', o);
  url.searchParams.set('destinations', d);
  url.searchParams.set('units', 'imperial');
  url.searchParams.set('mode', 'driving');
  url.searchParams.set('key', apiKey);

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' });
    const data = (await res.json()) as {
      status: string;
      error_message?: string;
      rows?: { elements?: { status: string; distance?: { value: number } }[] }[];
    };
    if (data.status !== 'OK') return null;
    const el = data.rows?.[0]?.elements?.[0];
    if (!el || el.status !== 'OK' || !el.distance?.value) return null;
    return el.distance.value / 1609.344;
  } catch {
    return null;
  }
}

export type DrivingMilesSource = 'distance_matrix' | 'straight_line_approx';

export type DrivingMilesResolution = {
  miles: number;
  source: DrivingMilesSource;
};

/**
 * Driving miles for per-mile pricing:
 * - Uses Distance Matrix when it looks sane vs geocoded straight-line distance.
 * - If Matrix returns a route far shorter than crow-flies (bad geocoding / wrong element), uses
 *   straight-line × road factor instead — fixes ~90 mi trips showing as ~14 mi.
 * - Falls back to geocode approximation when Matrix is unavailable.
 */
export async function resolveDrivingMilesForPricing(
  origin: string,
  destination: string,
  apiKey: string
): Promise<DrivingMilesResolution | null> {
  const o = origin.trim();
  const d = destination.trim();
  if (!o || !d) return null;

  const [from, to, matrixMi] = await Promise.all([
    geocodeLatLng(o, apiKey),
    geocodeLatLng(d, apiKey),
    getDrivingMiles(o, d, apiKey),
  ]);

  const straightMi =
    from && to ? haversineMiles(from.lat, from.lng, to.lat, to.lng) : null;

  if (
    straightMi != null &&
    Number.isFinite(straightMi) &&
    straightMi >= 35 &&
    matrixMi != null &&
    matrixMi > 0 &&
    matrixMi < straightMi * 0.62
  ) {
    const approx = Math.max(1, straightMi * ROAD_FACTOR_STRAIGHT_TO_DRIVING);
    return { miles: approx, source: 'straight_line_approx' };
  }

  if (matrixMi != null && matrixMi > 0) {
    return { miles: matrixMi, source: 'distance_matrix' };
  }

  if (straightMi != null && Number.isFinite(straightMi) && straightMi > 0) {
    const approx = Math.max(1, straightMi * ROAD_FACTOR_STRAIGHT_TO_DRIVING);
    return { miles: approx, source: 'straight_line_approx' };
  }

  return null;
}
