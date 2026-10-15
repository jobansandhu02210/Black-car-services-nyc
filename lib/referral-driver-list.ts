import { normalizePromoCode } from '@/lib/referral-utils';

/** Canonical drivers + promo codes (must match prisma/seed.ts). Used when DB is unavailable. */
export const DRIVER_PROMOS = [
  { stableId: 'driver-joban', name: 'Joban', code: 'JOBAN' },
  { stableId: 'driver-robin', name: 'Robin', code: 'ROBIN' },
  { stableId: 'driver-yuvi', name: 'Yuvi', code: 'YUVI' },
  { stableId: 'driver-dilawar', name: 'Dilawar', code: 'DILAWAR' },
  { stableId: 'driver-harsh', name: 'Harsh', code: 'HARSH' },
] as const;

export function findDriverPromoByCode(raw: string) {
  const code = normalizePromoCode(raw);
  if (!code) return null;
  const row = DRIVER_PROMOS.find((d) => d.code === code);
  return row ?? null;
}

export function isKnownDriverPromoCode(raw: string): boolean {
  return findDriverPromoByCode(raw) !== null;
}
