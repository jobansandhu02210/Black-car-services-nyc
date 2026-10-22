/**
 * Server-only pricing: rates are NOT exposed to the client bundle.
 * Customer UI receives only totals and generic line labels via /api/booking/estimate.
 *
 * Pricing model: Flat base fare + per-mile charge based on Google Maps driving distance.
 *   Total = BASE_FARE_USD + (driving_miles × vehicle_per_mile_rate)
 */
import { resolveDrivingMilesForPricing } from '@/lib/google-driving-distance';
import { getPlacesServerApiKey } from '@/lib/places-env';

/**
 * Pricing — read from Vercel env vars so rates can be updated without a code deploy.
 * Set these in Vercel → Settings → Environment Variables.
 * Defaults below are the production baseline — change env vars to override.
 *
 *   PRICING_BASE_FARE          — flat base fare for every trip (default: 120)
 *   PRICING_SEDAN              — per-mile rate, Business Sedan (default: 5)
 *   PRICING_SUV                — per-mile rate, Business SUV (default: 6.5)
 *   PRICING_FIRST_SUV          — per-mile rate, First Class SUV (default: 8)
 *   PRICING_FIRST_SEDAN        — per-mile rate, First Class Sedan (default: 16)
 *   PRICING_EXTRA_PASSENGER    — charge per passenger beyond the selected vehicle's capacity (default: 15)
 *   PRICING_EXTRA_LUGGAGE      — charge per bag beyond the selected vehicle's capacity (default: 8)
 *
 * Passengers/luggage within a vehicle's own advertised capacity (VEHICLE_CAPACITY below — matches
 * the capacities shown on /book and /fleet) never add a surcharge; only booking more people or
 * bags than that vehicle can actually hold does.
 */
function envNum(key: string, fallback: number): number {
  const raw = process.env[key];
  if (!raw) return fallback;
  const n = parseFloat(raw);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

/** Base fare applied to every trip (point-to-point and airport transfers). */
const BASE_FARE_USD = envNum('PRICING_BASE_FARE', 120);

/** Per-mile rate charged on top of the base fare, by vehicle type. */
const VEHICLE_PER_MILE_USD: Record<string, number> = {
  'business-sedan': envNum('PRICING_SEDAN', 5),
  'business-suv':   envNum('PRICING_SUV', 6.5),
  'first-suv':      envNum('PRICING_FIRST_SUV', 8),
  'first-sedan':    envNum('PRICING_FIRST_SEDAN', 16),
};

/** Passengers/luggage included free, per vehicle — matches the capacities advertised on /book and /fleet. */
const VEHICLE_CAPACITY: Record<string, { passengers: number; luggage: number }> = {
  'business-sedan': { passengers: 3, luggage: 3 },
  'business-suv':   { passengers: 6, luggage: 6 },
  'first-suv':      { passengers: 6, luggage: 6 },
  'first-sedan':    { passengers: 3, luggage: 3 },
};

const EXTRA_PASSENGER = envNum('PRICING_EXTRA_PASSENGER', 15);
const EXTRA_LUGGAGE   = envNum('PRICING_EXTRA_LUGGAGE', 8);

const AIRPORT_DEST: Record<string, string> = {
  'JFK - John F. Kennedy': 'John F. Kennedy International Airport, Jamaica, NY, USA',
  'LGA - LaGuardia': 'LaGuardia Airport, Queens, NY, USA',
  'EWR - Newark Liberty': 'Newark Liberty International Airport, NJ, USA',
  'HPN - Westchester County': 'Westchester County Airport, White Plains, NY, USA',
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

function perMileRate(vehicle: string): number {
  return VEHICLE_PER_MILE_USD[vehicle] ?? VEHICLE_PER_MILE_USD['business-sedan'];
}

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
  const rate = perMileRate(vehicle);
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

  let miles: number;
  let distanceSource: 'hourly_model' | 'distance_matrix' | 'straight_line_approx' = 'hourly_model';

  if (input.service === 'hourly') {
    const h = Math.max(2, Math.min(24, input.hours || 2));
    miles = Math.max(10, h * 12);
    distanceSource = 'hourly_model';
  } else if (!key) {
    return {
      incomplete: true,
      message: 'Price estimates need the server Google Maps key (see GOOGLE-APIS.md).',
    };
  } else if (input.service === 'airport') {
    const dest = AIRPORT_DEST[input.airport];
    const resolved = await resolveDrivingMilesForPricing(input.pickup, dest, key);
    if (!resolved) {
      return {
        incomplete: true,
        message:
          'Unable to calculate driving distance for this route. Check pick-up and airport, or contact us for a quote.',
      };
    }
    miles = resolved.miles;
    distanceSource = resolved.source;
  } else {
    const resolved = await resolveDrivingMilesForPricing(input.pickup, input.dropoff, key);
    if (!resolved) {
      return {
        incomplete: true,
        message:
          'Unable to calculate driving distance for this route. Check both addresses or contact us for a quote.',
      };
    }
    miles = resolved.miles;
    distanceSource = resolved.source;
  }

  const lines: { label: string; amount: number }[] = [];

  if (input.service === 'hourly') {
    // Hourly: show a single combined estimate (base + mileage model, no breakdown)
    const hourlyCharge = roundUsd2(BASE_FARE_USD + miles * rate);
    lines.push({ label: 'Trip estimate', amount: hourlyCharge });
  } else {
    // Point-to-point & airport: show base fare + distance charge separately
    const distanceMiles = Math.max(0, miles);
    const distanceCharge = roundUsd2(distanceMiles * rate);
    const distLabel =
      distanceSource === 'straight_line_approx'
        ? `Distance charge (~${Math.round(distanceMiles)} mi, route approximate)`
        : `Distance charge (${Math.round(distanceMiles)} mi)`;
    lines.push({ label: 'Base fare', amount: BASE_FARE_USD });
    lines.push({ label: distLabel, amount: distanceCharge });
  }

  const capacity = VEHICLE_CAPACITY[vehicle] ?? VEHICLE_CAPACITY['business-sedan'];

  if (input.passengers > capacity.passengers) {
    const n = input.passengers - capacity.passengers;
    lines.push({ label: `Additional passengers (${n})`, amount: n * EXTRA_PASSENGER });
  }
  if (input.luggage > capacity.luggage) {
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
