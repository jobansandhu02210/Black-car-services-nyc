# Black Car Services NYC — project notes (read first)

New NYC black car / chauffeur website. **Started as a copy of the Eagle Eye Chauffeur codebase** (Next.js 14 App Router, TypeScript, Tailwind, Prisma). It is a *separate business/brand*: separate repo, Vercel project, domain, analytics, email, payments and database.

## Brand facts
Brand **Black Car Service** · domain **blackcarservicesnyc.com** · phone (929) 710-1444. Brand constants live in `lib/site.ts` (`SITE_NAME`, `SITE_DOMAIN`) and `lib/contact.ts` — import them, never hardcode. Service-area business (no office address). Lean page set + prune list: `LAUNCH-PLAN.md`.
**Design/SEO reference research (Ridelux, Detailed Drivers, Noble, Blacklane): `docs/REFERENCE-RESEARCH.md`** — heading blueprints, schema map, design direction, creative ideas. `LAUNCH-PLAN.md` stays the source of truth for WHICH pages exist; the research doc says HOW to build them.

## STATUS: PRE-LAUNCH TEMPLATE — REBRAND IN PROGRESS (shared layout/schema/emails done; page copy not yet)
Everything in `app/`, `components/` and `lib/` still says "Eagle Eye Chauffeur" (~1,400 mentions) and still contains Eagle Eye's phone, email, founder name, prices and copy. **Nothing here may go live as-is.**

### Safety rails already in place
- `next.config.js` sends `X-Robots-Tag: noindex, nofollow` on every page until `NEXT_PUBLIC_SITE_LIVE=true` is set. Do NOT set it until the rebrand + rewrite is done and the real domain is attached.
- `lib/site.ts` falls back to `http://localhost:3000` (never Eagle Eye's domain). Set `NEXT_PUBLIC_SITE_URL` in Vercel and `.env.local`.
- No secrets were copied. Create NEW keys for: database, Stripe, Resend (email), Google Maps/Places, GA4/GTM, admin password. Never reuse Eagle Eye's.

## Working rules
- **Do not deploy or push live changes until the user explicitly says "deploy".** Work on localhost first.
- **Content must be genuinely different from Eagle Eye.** Same page structure is fine; same words/photos are not. Two near-identical sites = Google keeps one and drops the other. Rewrite copy, FAQs, titles, descriptions, images and the brand voice.
- **Start LEAN.** Eagle Eye's Google index collapsed (108 pages deindexed, 81 "Crawled – not indexed") because ~234 near-duplicate Hamptons template pages + 74 area pages + 51 route pages were mass-generated on a young domain. For this site, launch with a small set of strong, unique pages (home, airport pages JFK/LGA/EWR, booking/quote, fleet, about, contact, 5–10 key service/area pages) and add pages slowly, each with real local detail. Prune the template before launch: `app/services/areas/*` (74 towns), `app/services/routes/*` (incl. Hamptons template via `lib/hamptons-routes-data.ts` — `KEPT_HAMPTONS_ORIGIN_SLUGS` controls coverage), `app/blog` (62 Eagle Eye posts in `lib/blog-data.ts`), `us-open-2026/`, `world-cup-2026/`.
- Remove or neutralize Eagle-specific features: referrals / driver promo codes (`lib/referral-driver-list.ts`), `/go/`, `/tip`, admin dispatch pages if not needed.

## Rebrand checklist (single source of truth first)
1. Put brand name, phone, email, WhatsApp number, address/service-area model into `lib/contact.ts` + `lib/site.ts`, then replace hardcoded "Eagle Eye" strings (grep `Eagle Eye`, `eagleeye`, phone `9299196499`, `Joban Sandhu`).
2. `components/JsonLd.tsx`: new LocalBusiness data. **No fake street address / fake geo pin.** If there is no real staffed office, model as a service-area business (omit street address).
3. `app/layout.tsx` metadata, `public/og-image.jpg`, logo, favicons, `public/*` fleet/service photos → new brand assets.
4. Pricing: `lib/booking-estimate-server.ts` (rates, VEHICLE_CAPACITY) → set the new business's own rates. Eagle Eye's rules (e.g. "don't publish flat prices") do not automatically apply — ask the user.
5. Env vars + services: new Prisma DB (`prisma/`), Stripe, Resend domain (SPF/DKIM), GA4, Search Console, Google Ads.
6. Legal pages (`/privacy`, `/terms`) must show the new legal business name; site info must match real TLC license/insurance paperwork.

## Technical lessons carried over from Eagle Eye (keep these)
- **Open Graph:** Next.js does NOT deep-merge `openGraph`. Any page-level `openGraph` must spread the shared defaults: `openGraph: { ...ogDefaults, url, title, description }` (`lib/og.ts`). Otherwise og:type/site_name/locale/image vanish.
- **Schema.org:** only use valid types. (`Neighborhood` is NOT a schema.org type — use `AdministrativeArea`.) Validate JSON-LD before launch.
- **WhatsApp links** use `https://api.whatsapp.com/send?phone=…` (wa.me 302-redirects and is flagged by SEO crawlers). `GtagLeadEvents` matches both hosts.
- **Images:** photos as q≈88 JPEG (≤ ~300 KB). Palette-quantized PNG bands badly on dark car photos.
- **Titles ≤ 65 chars, meta descriptions ≤ 158 chars.** Every page needs a self-canonical via `alternates.canonical`.
- **Never create two pages targeting the same keyword** (keyword cannibalization). One page per intent.
- **Internal linking:** no orphan pages; every indexable page needs ≥ 2 contextual links in.
- **Don't build in a folder while another dev server uses the same `.next`.**

## Deploy (only when told)
GitHub: `jobansandhu02210/Black-car-services-nyc` (private) → Vercel project (new, separate from Eagle Eye) → domain added in Vercel → DNS at registrar. Launch order: rebrand → prune → rewrite → set `NEXT_PUBLIC_SITE_URL` → deploy preview → review → set `NEXT_PUBLIC_SITE_LIVE=true` → submit sitemap in Search Console.
