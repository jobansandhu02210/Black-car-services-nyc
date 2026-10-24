/**
 * Single source for the fleet: vehicle classes, the models in each, and their photos
 * (public/fleet/*.jpg, 960×540, white background). Used by /fleet, the home page and /book.
 * Capacities must match VEHICLE_CAPACITY in lib/booking-estimate-server.ts.
 *
 * Note: these photos are the same files eagleeyechauffeur.com uses (owner's choice, 2026-10-24).
 * TODO(owner): replace with photos of your own cars before launch to keep the two sites distinct.
 */

export type VehicleClassId = 'business-sedan' | 'business-suv' | 'first-sedan' | 'first-suv';

export type FleetModel = { name: string; image: string };

export type FleetClass = {
  id: VehicleClassId;
  name: string;
  passengers: number;
  bags: number;
  body: string;
  bestFor: string;
  models: FleetModel[];
};

export const FLEET_CLASSES: FleetClass[] = [
  {
    id: 'business-sedan',
    name: 'Business Sedan',
    passengers: 3,
    bags: 3,
    body: 'Comfortable, quiet and understated — the car most of our airport and city-to-city rides use.',
    bestFor: 'Solo travelers, couples, most airport rides',
    models: [
      { name: 'Mercedes-Benz E-Class', image: '/fleet/mercedes-e-class.jpg' },
      { name: 'Cadillac CT6', image: '/fleet/cadillac-ct6.jpg' },
      { name: 'Cadillac XT6', image: '/fleet/cadillac-xt6.jpg' },
      { name: 'Cadillac Lyriq', image: '/fleet/cadillac-lyriq.jpg' },
    ],
  },
  {
    id: 'business-suv',
    name: 'Business SUV',
    passengers: 6,
    bags: 6,
    body: 'A full-size SUV with a third row and real cargo space behind it.',
    bestFor: 'Families, small teams, ski and golf bags, long trips',
    models: [
      { name: 'Chevrolet Suburban', image: '/fleet/chevrolet-suburban.jpg' },
      { name: 'GMC Yukon XL', image: '/fleet/gmc-yukon-xl.jpg' },
    ],
  },
  {
    id: 'first-sedan',
    name: 'First Class Sedan',
    passengers: 3,
    bags: 3,
    body: 'A flagship sedan with the quietest cabin and the most rear legroom we offer.',
    bestFor: 'Client pickups, executives, a long ride to DC',
    models: [
      { name: 'Mercedes-Benz S-Class', image: '/fleet/mercedes-s-class.jpg' },
      { name: 'BMW 7 Series', image: '/fleet/bmw-7-series.jpg' },
    ],
  },
  {
    id: 'first-suv',
    name: 'First Class SUV',
    passengers: 6,
    bags: 6,
    body: 'Our most spacious car, in a top-trim luxury SUV.',
    bestFor: 'VIP groups, families who want the most room',
    models: [
      { name: 'Cadillac Escalade', image: '/fleet/cadillac-escalade.jpg' },
      { name: 'Lincoln Navigator', image: '/fleet/lincoln-navigator.jpg' },
    ],
  },
];

/** Sprinters are quoted on request (not in the online booking form). Capacities per owner's fleet. */
export const SPRINTERS = [
  {
    name: 'Executive Sprinter',
    seats: 'Up to 14 passengers',
    image: '/fleet/executive-sprinter.jpg',
    body: 'Forward-facing seats and room for luggage — for teams, conference transfers and big family airport runs.',
  },
  {
    name: 'Limo Sprinter',
    seats: 'Up to 18 passengers',
    image: '/fleet/limo-sprinter.jpg',
    body: 'Side-facing lounge seating for a group that wants to travel together and talk on the way.',
  },
  {
    name: 'Jet Sprinter',
    seats: 'Up to 13 passengers',
    image: '/fleet/jet-sprinter.jpg',
    body: 'Captain’s chairs and a private-jet style cabin for clients and special occasions.',
  },
];

/** One representative photo per class (first model listed). */
export function classPhoto(id: VehicleClassId): FleetModel {
  return FLEET_CLASSES.find((c) => c.id === id)!.models[0];
}
