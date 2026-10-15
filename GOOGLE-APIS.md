# Google Places for address autocomplete (Book page)

The booking form loads suggestions through **your Next.js server** (`/api/places/*`), not the Maps JavaScript widget in the browser. That way:

- The API key stays **server-only** (`PLACES_SERVER_API_KEY`).
- You do **not** depend on **HTTP referrer** rules on the key, so redeploys, `www` vs non-`www`, localhost ports, and `*.vercel.app` previews stop breaking autocomplete.

## 1. Google Cloud project

1. [Google Cloud Console](https://console.cloud.google.com/) → select or create a project.
2. **Billing** must be linked (Maps Platform uses a monthly credit; see [pricing](https://mapsplatform.google.com/pricing/)).

## 2. Enable APIs

**APIs & Services** → **Library** → enable:

| API | Used for |
|-----|----------|
| **Places API** | Place Autocomplete + Place Details (server JSON API) |
| **Distance Matrix API** | Preferred: real driving miles for per-mile booking estimates |
| **Geocoding API** | Fallback: if Matrix is off or denied, approximate miles (straight-line × factor) |

You do **not** need Maps JavaScript API for the Book page autocomplete anymore.

**Important:** If the key is restricted to **Places API only**, Distance Matrix calls fail and estimates used to fall back to a short default route. Enable **Distance Matrix API** and **Geocoding API** on the same project and add them to the key’s **API restrictions** (see below).

## 3. Create a server API key

1. **APIs & Services** → **Credentials** → **Create credentials** → **API key**.
2. **API restrictions**: **Restrict key** → select **Places API**, **Distance Matrix API**, and **Geocoding API** (all three on one server key).
3. **Application restrictions**: **None** (recommended for this server key).  
   The key is only on Vercel / your server, not in client bundles. Our `/api/places/*` routes also check that requests come from allowed hosts (see below).

## 4. Add the key to the app

**Local** — `.env.local` (same folder as `package.json`):

```env
PLACES_SERVER_API_KEY=AIzaSy...your_key_here
```

You can also use `GOOGLE_PLACES_SERVER_KEY` as an alias. If neither is set, the app will try `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` on the server (only works for Places REST if that key is **not** limited to HTTP referrers).

Set `NEXT_PUBLIC_SITE_URL=https://www.yourdomain.com` so `/api/places/*` accepts your production host even if it differs from the defaults.

Restart `npm run dev`.

**Vercel** — Project → **Settings** → **Environment Variables**:

- Name: `PLACES_SERVER_API_KEY`  
- Value: same key  
- Environments: Production, Preview, Development as needed  

Redeploy after saving.

## 5. Allowed hosts (security)

By default, `/api/places/*` accepts requests when the browser’s **Referer** / **Origin** host is:

- `localhost` / `127.0.0.1` (any port)
- `*.vercel.app`
- `eagleeyechauffeur.com` and `*.eagleeyechauffeur.com`

To allow another domain, set:

```env
PLACES_ALLOWED_HOST_SUFFIXES=example.com,another.com
```

## Troubleshooting

- **No suggestions, no “powered by Google” line**  
  `PLACES_SERVER_API_KEY` is missing or the deployment wasn’t rebuilt after adding it.

- **403 Forbidden** on `/api/places/config`  
  You’re opening the site from a hostname not in the allowlist; add it via `PLACES_ALLOWED_HOST_SUFFIXES` or use an allowed domain.

- **502 / error text from Google**  
  Billing, Places API not enabled, or key API restrictions don’t include **Places API**.

- **REQUEST_DENIED when the old browser key is reused**  
  Keys restricted to **HTTP referrers** often **fail** for server `fetch()` (no referrer is sent). Use a **separate** key for `PLACES_SERVER_API_KEY` with **Application restrictions = None** and **API restrictions** including **Places**, **Distance Matrix**, and **Geocoding**.

- **Booking estimate far too low (e.g. ~14 mi for a long trip)**  
  Distance Matrix was not returning a route (key missing APIs or billing). Enable **Distance Matrix** and **Geocoding** on the key; the app uses Matrix first, then Geocoding + approximate miles if Matrix fails.

- **Contact page embed map**  
  Unrelated to this key; embeds can keep using a normal Google Maps embed URL (or Maps Embed API if required).

Official docs: [Place Autocomplete](https://developers.google.com/maps/documentation/places/web-service/autocomplete), [Place Details](https://developers.google.com/maps/documentation/places/web-service/details).

---

## Optional: Google Analytics & Search Console

See previous sections in your internal docs or `.env.example` for `NEXT_PUBLIC_GA_ID` and Search Console verification in `app/layout.tsx`.
