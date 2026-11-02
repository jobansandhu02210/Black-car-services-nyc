/**
 * Server-only pricing: rates are NOT exposed to the client bundle. The customer sees a single
 * "Trip estimate" total via /api/booking/estimate, never the base/per-mile breakdown.
 *
 * Same model and numbers as eagleeyechauffeur.com's live engine (checked 2026-11-02):
 *   Point-to-point and airport: vehicle base fare + (Google driving miles × vehicle per-mile rate)
 *   Hourly: hours × vehicle per-hour rate (2-hour minimum, 24-hour maximum)
 *   No flat airport rates, and no extra-passenger or extra-bag charges by default.
 */
import { resolveDrivingMilesForPricing } from '@/lib/google-driving-distance';
import { getPlacesServerApiKey } from '@/lib/places-env';

/**
 * Every rate can be overridden with an env var (Vercel → Settings → Environment Variables)
 * without a code deploy. Unset vars use the defaults below. See .env.example for the full list.
 */
function envNum(key: string, fallback: number): number {
  const raw = process.env[key];
  if (!raw) return fallback;
  const n = parseFloat(raw);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

/** Fallback only; each vehicle normally has its own base fare below. */
const BASE_FARE_USD = envNum('PRICING_BASE_FARE', 110);

const VEHICLE_BASE_FARE_USD: Record<string, number> = {
  'business-sedan': envNum('PRICING_BASE_SEDAN', 110),
  'first-suv':      envNum('PRICING_BASE_FIRST_SUV', 130),
  'first-sedan':    envNum('PRICING_BASE_FIRST_SEDAN', 300),
  'sprinter':       envNum('PRICING_BASE_SPRINTER', 550),
};

const VEHICLE_PER_MILE_USD: Record<string, number> = {
  'business-sedan': envNum('PRICING_SEDAN', 4.5),
  'first-suv':      envNum('PRICING_FIRST_SUV', 5.5),
  'first-sedan':    envNum('PRICING_FIRST_SEDAN', 7),
  'sprinter':       envNum('PRICING_SPRINTER', 8.5),
};

const VEHICLE_HOURLY_USD: Record<string, number> = {
  'business-sedan': envNum('PRICING_HOURLY_SEDAN', 110),
  'first-suv':      envNum('PRICING_HOURLY_FIRST_SUV', 130),
  'first-sedan':    envNum('PRICING_HOURLY_FIRST_SEDAN', 180),
  'sprinter':       envNum('PRICING_HOURLY_SPRINTER', 200),
};

/** Passengers/luggage included, per vehicle. Only matters if a surcharge env var is set above 0. */
const VEHICLE_CAPACITY: Record<string, { passengers: number; luggage: number }> = {
  'business-sedan': { passengers: 3, luggage: 3 },
  'first-suv':      { passengers: 6, luggage: 6 },
  'first-sedan':    { passengers: 3, luggage: 3 },
  'sprinter':       { passengers: 14, luggage: 14 },
};

const EXTRA_PASSENGER = envNum('PRICING_EXTRA_PASSENGER', 0);
const EXTRA_LUGGAGE   = envNum('PRICING_EXTRA_LUGGAGE', 0);

const AIRPORT_DEST: Record<string, string> = {
  'JFK - John F. Kennedy': 'John F. Kennedy International Airport, Jamaica, NY, USA',
  'LGA - LaGuardia': 'LaGuardia Airport, Queens, NY, USA',
  'EWR - Newark Liberty': 'Newark Liberty International Airport, NJ, USA',
};

const ALLOWED_VEHICLES = new Set(Object.keys(VEHICLE_PER_MILE_USD));

export type BookingEstimateResponse =
  | { incomplete: true; message: string }
  | {
      incomplete: false;
      amount: number;
      label: string;
      lines: { label: string; amount: number }[];
    };

function roundUsd2(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

export async function computeBookingEstimate(input: {
  service: string;
  vehicle: string;
  pickup: string;
  dropoff: string;
  airport: string;
  hours: number;
  passengers: number;
  luggage: number;
  customerEmail?: string;
  customerPhone?: string;
}): Promise<BookingEstimateResponse> {
  const vehicle = ALLOWED_VEHICLES.has(input.vehicle) ? input.vehicle : 'business-sedan';
  const key = getPlacesServerApiKey();

  if (input.service === 'point-to-point') {
    if (!input.pickup.trim() || !input.dropoff.trim()) {
      return {
        incomplete: true,
        message: 'Enter pick-up and drop-off for a price estimate.',
      };
    }
  }

  if (input.service === 'airport') {
    if (!input.pickup.trim() || !input.airport.trim()) {
      return {
        incomplete: true,
        message: 'Enter pick-up location and airport for a price estimate.',
      };
    }
    if (!AIRPORT_DEST[input.airport]) {
      return { incomplete: true, message: 'Select a valid airport.' };
    }
  }

  let tripTotal: number;

  if (input.service === 'hourly') {
    const hours = Math.max(2, Math.min(24, input.hours || 2));
    tripTotal = hours * VEHICLE_HOURLY_USD[vehicle];
  } else {
    if (!key) {
      return {
        incomplete: true,
        message: 'Price estimates need the server Google Maps key (see docs/SETUP-SERVICES.md).',
      };
    }
    const destination = input.service === 'airport' ? AIRPORT_DEST[input.airport] : input.dropoff;
    const resolved = await resolveDrivingMilesForPricing(input.pickup, destination, key);
    if (!resolved) {
      return {
        incomplete: true,
        message:
          input.service === 'airport'
            ? 'Unable to calculate driving distance for this route. Check pick-up and airport, or contact us for a quote.'
            : 'Unable to calculate driving distance for this route. Check both addresses or contact us for a quote.',
      };
    }
    const baseFare = VEHICLE_BASE_FARE_USD[vehicle] ?? BASE_FARE_USD;
    tripTotal = baseFare + Math.max(0, resolved.miles) * VEHICLE_PER_MILE_USD[vehicle];
  }

  const lines: { label: string; amount: number }[] = [{ label: 'Trip estimate', amount: roundUsd2(tripTotal) }];

  const capacity = VEHICLE_CAPACITY[vehicle] ?? VEHICLE_CAPACITY['business-sedan'];

  if (EXTRA_PASSENGER > 0 && input.passengers > capacity.passengers) {
    const n = input.passengers - capacity.passengers;
    lines.push({ label: `Additional passengers (${n})`, amount: n * EXTRA_PASSENGER });
  }
  if (EXTRA_LUGGAGE > 0 && input.luggage > capacity.luggage) {
    const n = input.luggage - capacity.luggage;
    lines.push({ label: `Additional luggage (${n})`, amount: n * EXTRA_LUGGAGE });
  }

  const amount = roundUsd2(lines.reduce((s, l) => s + l.amount, 0));

  let label = 'Point-to-point (estimated)';
  if (input.service === 'hourly') {
    label = `${Math.max(2, input.hours || 2)} hour charter (estimated)`;
  } else if (input.service === 'airport') {
    label = 'Airport transfer (estimated)';
  }

  return { incomplete: false, amount, label, lines };
}
