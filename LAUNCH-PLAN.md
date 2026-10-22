# Black Car Service — lean launch plan

Domain: **blackcarservicesnyc.com** · Brand: **Black Car Service** · Phone: **(929) 710-1444**

## Positioning (working assumption — confirm)
Eagle Eye is Manhattan/Long Island/Hamptons luxury chauffeur. This brand is
**"NYC airports + long-distance door-to-door"**: JFK/LGA/EWR transfers, and private
intercity rides from NYC to New Jersey, Connecticut, Philadelphia and Washington, DC —
the alternative to Amtrak/flying for 1–4 hour trips. No Long Island, Hamptons,
Westchester or event pages. This keeps the two sites from competing for the same queries.

## Launch page set (16 indexable URLs)

| # | URL | Primary keyword (one page per intent) | Source in template |
|---|-----|---------------------------------------|--------------------|
| 1 | `/` | black car service NYC | `app/page.tsx` — full rewrite |
| 2 | `/book` | book black car NYC | keep flow, rewrite copy |
| 3 | `/fleet` | (brand / vehicles) | rewrite + **new photos** |
| 4 | `/about` | (brand) | full rewrite — real owner/licensing facts |
| 5 | `/contact` | (brand) | rewrite |
| 6 | `/pricing` | black car service rates NYC | **only if you publish prices** — else drop |
| 7 | `/services/airport` | NYC airport car service | hub, rewrite |
| 8 | `/services/airport/jfk` | JFK car service | rewrite |
| 9 | `/services/airport/lga` | LaGuardia car service | rewrite |
| 10 | `/services/airport/ewr` | Newark airport car service | rewrite |
| 11 | `/services/long-distance` | long distance car service NYC | `[slug]` entry, rewrite |
| 12 | `/services/routes/nyc-to-philadelphia` | NYC to Philadelphia car service | rewrite (PA) |
| 13 | `/services/routes/nyc-to-washington-dc` | NYC to DC car service | rewrite (DC) |
| 14 | `/services/areas/new-jersey` | NYC to New Jersey car service | rewrite (NJ) |
| 15 | `/services/areas/connecticut` | NYC to Connecticut car service | rewrite (CT) |
| 16–17 | `/privacy`, `/terms` | — | new legal business name |

Internal links: home → all of 7–15; airport hub ↔ JFK/LGA/EWR; long-distance hub ↔ 12–15;
each route/state page links to the airport page most relevant to it (EWR for NJ/PA/DC, LGA/JFK for CT).
Every page gets ≥ 2 contextual links in. Titles ≤ 65 chars, descriptions ≤ 158, self-canonical,
`openGraph: { ...ogDefaults, … }`.

**Cannibalization fix:** `/black-car-service-nyc` targets the same keyword as the home page
(and the brand/domain). Delete it and let `/` own "black car service NYC".

## Phase 2 (add slowly, one at a time, each with real local detail)
Hourly / as-directed · Corporate accounts · Teterboro (TEB) · Princeton NJ · Stamford/Greenwich CT ·
NYC → PHL airport · NYC → Baltimore · New Haven. Only add a page when you can write
something genuinely specific (real drive times, tolls, pickup points, actual rides done).

## Prune before launch (delete, not noindex)
- `app/services/areas/*` — all 71 except `new-jersey`, `connecticut`
- `app/services/routes/*` — all except `nyc-to-philadelphia`, `nyc-to-washington-dc`; remove the
  Hamptons template (`[slug]`, `lib/hamptons-routes-data.ts`)
- `app/services/[slug]` — keep only `long-distance` (drop point-to-point, hourly, airport dup,
  corporate, special-events, chauffeur-service, limousine, sprinter, wedding)
- `app/services/wedding`, `executive-vip`, `corporate-roadshow`, `airport/hpn`
- `app/blog` + `lib/blog-data.ts` (62 Eagle Eye posts), `us-open-2026/`, `world-cup-2026/`
- `app/black-car-service-nyc` (cannibalizes home), `app/site-map`
- Referrals/promo: `app/referrals`, `app/admin/referrals`, `app/api/referrals`, `app/go`,
  `lib/referral-*`, `lib/referrals.ts`, `lib/tracking.ts` driver list, `PromoCodeField`, `CopyCodeButton`
- `app/tip` + `app/api/tip` (unless you want tipping)
- `components/UberCalculator.tsx` (Eagle Eye's prices), `UsOpenRelatedRoutes.tsx`
- Rebuild `app/sitemap.ts`, `Header`/`Footer` nav and `/services` index to list only the set above.
- Keep (if you'll use them): `/admin/bookings`, `/admin/invoice`, `/invoice/[token]`, booking/charge APIs.

## Done in this pass
- `lib/site.ts`: `SITE_NAME`, `SITE_NAME_LONG`, `SITE_DOMAIN`, logo switches (text wordmark until new logo).
- `lib/contact.ts`: new phone/WhatsApp, second Eagle Eye line removed, placeholder email.
- `components/JsonLd.tsx`: service-area business (no address/geo/founder/social), NYC/NJ/CT/PA/DC + 3 airports.
- Root metadata, OG defaults, default description, header/footer/splash, all transactional
  emails + Stripe descriptions, Places host allowlist, `.env.example`.

## Still needed from you
1. Email inbox (placeholder `info@blackcarservicesnyc.com` is in `lib/contact.ts`).
2. WhatsApp — same as (929) 710-1444? (assumed yes)
3. Office address — assumed **none** → service-area business. Tell me if there is a real staffed office.
4. Confirm the positioning above (airports + long-distance NJ/CT/PA/DC).
5. Pricing: publish rates or quote-only? Your own rates for `lib/booking-estimate-server.ts`.
6. Legal business name + TLC base/license for `/terms`, `/privacy`, `/about`.
7. Logo, favicon, OG image and your own fleet photos (everything in `public/` is Eagle Eye's).
