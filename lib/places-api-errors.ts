/**
 * Turn Google Places web service messages into short fix hints for operators.
 */
export function userFacingPlacesError(googleMessage?: string): string {
  if (!googleMessage) return 'Google Places request failed.';
  if (/referrer? restrictions cannot be used with this api/i.test(googleMessage)) {
    return (
      'This key is restricted to websites (HTTP referrers). Address search on this site runs on the server and needs a separate key: ' +
      'Google Cloud → Credentials → Create API key → Application restrictions: None → API restrictions: Places API only. ' +
      'Add it in Vercel as PLACES_SERVER_API_KEY. See GOOGLE-APIS.md.'
    );
  }
  return googleMessage;
}
