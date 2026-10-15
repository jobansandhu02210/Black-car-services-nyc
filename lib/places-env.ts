/**
 * Server-side Places key (never import this file from client components).
 * Order: dedicated server key → legacy names → public key (still readable on server in Next.js).
 */
export function getPlacesServerApiKey(): string {
  return (
    process.env.PLACES_SERVER_API_KEY?.trim() ||
    process.env.GOOGLE_PLACES_SERVER_KEY?.trim() ||
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ||
    ''
  );
}

export function isPlacesConfigured(): boolean {
  return getPlacesServerApiKey().length > 0;
}
