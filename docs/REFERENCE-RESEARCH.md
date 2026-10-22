# Reference research — ridelux.com · detaileddrivers.com · nobleblackcarservice.com · blacklane.com

Collected 2026-10-22 from the live sites (homepage + key inner pages + sitemaps + robots + a visual look at each homepage). Use for **structure, SEO patterns and design inspiration ONLY — never copy their text, images, code or schema wording.** Re-verify with the browser if you need more detail.

> **Source of truth for which pages exist = `LAUNCH-PLAN.md`** (positioning: NYC airports + long-distance door-to-door; no Long Island/Hamptons/Westchester/event pages). Where the sitemap/location ideas in §3 conflict with it, LAUNCH-PLAN.md wins. This doc is for patterns: heading structure, schema, design, creative ideas.

## 1. What each site does (verified)

### Ridelux — ridelux.com  (US-wide, ~40 URLs)
- Title `Professional Chauffeur Services in the US | Ridelux` (51) · description 134 chars · H1 `Your Personal Chauffeur Service`
- H2s: Comfort, privacy and luxury · Intercity Rides · The Ridelux difference · Our Services (very light heading hierarchy, no H3, ~1,500 words)
- JSON-LD: only Organization + ContactPoint + WebSite (thin — a gap we can beat)
- Sitemap (40 URLs): home, about, faq, locations, then **city hub → service sub-pages**, e.g. `/boston`, `/boston/airport-car-service`, `/boston/car-service-logan-airport`, `/boston/executive-car-service`, `/boston/van-transportation-services`, plus one page per airport in a metro (LAX, Burbank, Long Beach, John Wayne, Ontario)
- robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot (AI-answer visibility)
- **Design (closest to our wanted look):** white page, calm teal-blue primary (`#19647b`), near-black text (`#1e1e1e`), grey `#646e73`, light `#f5f5f5`; font Mukta. Full-bleed hero photo with a diagonal cut and a **white booking card overlaid** (tabs *Point to point / Hourly*, pick-up, destination, date/time, "add a return trip", big blue button **GET MY PRICES**). Directly under the hero a **4-item trust row** with icons: *Pricing — taxes and tolls included · Chauffeurs — vehicle confirmed before pickup · Checkout — no account required to book · Cancellation — free up to 24 hours*. Popular intercity rides shown as cards with distance | duration (e.g. NYC → Hamptons 95 miles | 2h).

### Detailed Drivers — detaileddrivers.com  (national, 1,389 URLs)
- Title `Chauffeur Service | Detailed Drivers` · description 159 chars **with price + phone** (`…from $120/hr — all-in pricing, no surge, 24/7 dispatch… Book (888) 420-0177`) · H1 `Chauffeur Service`
- Home H2s: For people who are never late · Black Car & Chauffeur Services · Luxury Black Cars, SUVs & Sprinter Vans · Corporate Car Service & Executive Transportation · Cities We Serve · Book Your Chauffeur Service Today. H3s = vehicle names (E-Class, Escalade, S-Class, Sprinter).
- JSON-LD (rich): Organization, PostalAddress, OfferCatalog, Offer, Service, City, WebSite; location pages add LocalBusiness, AggregateRating, AggregateOffer, BreadcrumbList, FAQPage, SpeakableSpecification.
- **NYC page (`/locations/new-york`, ~2,470 words) H2 blueprint:** Where NYC chauffeur service operates · How much does car service NYC cost? · NYC airport car service and black car rates · Chauffeur service NYC for a full business day (H3: Executive schedules / Roadshows / Sensitive travel) · **How does black car service NYC compare with Uber and transit?** · NYC event transportation · How to book NYC car service (H3 steps: Send the itinerary / Choose the vehicle / Review the estimate / Receive ride details) · NYC car service FAQs (7 Q as H3) · New York service guides.
- Navigation: mega-menu with a one-line description under each item (Services / Fleet / Locations / Corporate / Company) and a black **Book now** button; separate `/rates` page.
- Sitemap is **programmatic at scale** (e.g. 37 LA pages, 21 NY pages, "industries/*", "international/*"). They have domain authority. **Do NOT copy this scale** — Eagle Eye's index collapsed after mass-generating ~230 near-duplicate template pages.
- Design: black/white, Oswald condensed uppercase headings. (Not our look.)

### Noble Black Car Service — nobleblackcarservice.com  (NYC-only, 54 URLs) ← best structural model
- Title `NYC Black Car Service | Airport Transfers & Chauffeurs | Noble` (62) · description 150 · H1 `NYC Black Car Service`
- Home schema: LocalBusiness + PostalAddress + GeoCoordinates + OpeningHoursSpecification + City/State areaServed + WebSite + Organization + ContactPoint + BreadcrumbList + FAQPage (5 Q).
- Home H2s are editorial/branded (*More than a driver. · Glide, don't travel. · For assistants, planners, and travel managers who need it done right. · The House Of Noble · A ride for every part of your day. · New York and beyond.*) + a keyword H2 (*NYC black car service for your next airport transfer.*) + FAQ.
- **JFK page (`/airports/jfk`, ~3,100 words)** — title `JFK Car Service to & from Manhattan | Noble Black Car` (53), H1 `JFK Car Service NYC`. H2 skeleton:
  1. How Much Does Car Service to JFK Cost? → 2. Car Service to JFK — Rates & Pricing → 3. Comparing airport transfer options → 4. **All JFK Terminals — Where Your Driver Meets You** (H3 per terminal: T1, T4, T5, T7, T8 + "Not sure which terminal?") → 5. JFK Drive Times & Routes by Neighborhood → 6. An exact quote for your itinerary → 7. JFK Black Car Service Fleet — Vehicles & Capacity (H3 per vehicle) → 8. Corporate JFK Car Service in NYC → 9. When to Book JFK Car Service → 10. JFK FAQs (**10 questions as H3**, written as real search queries: "How much is a car service from Manhattan to JFK?", "Is it cheaper to get a cab or Uber from JFK?", "What if my JFK flight is delayed?") → 11. How to Book (HowTo) → 12. Related JFK and NYC Airport Resources.
  JSON-LD on that page: BreadcrumbList, Service, LocalBusiness, **Airport + City (areaServed)**, Offer ×3, WebPage, **SpeakableSpecification**, **HowTo (4 steps)**, **FAQPage (10 Q)**.
- **Sitemap (54 URLs, the model for a lean launch):** `/`, `/book`, `/quote`, `/pricing`, `/contact`, `/reservation-tracker`, `/services/airport-transfer`, `/airports/jfk|laguardia|newark`, `/locations/brooklyn|queens`, `/services/hourly|long-distance|wedding|teterboro`, `/fleet` + 5 vehicle pages, `/corporate`, `/corporate/accounts`, `/about`, `/about/team`, `/about/safety`, `/testimonials`, `/faq`, `/blog/...`
- Transparency/trust: booking policies, cancellation policy, child-seat policy (with price), reservation tracker, team + safety pages (E-E-A-T).
- Design: cinematic black + gold (`#d4af37`) — **not our look**; copy the *anatomy*, not the style.

### Blacklane — blacklane.com  (global, ~1,800 EN URLs)
- Title `The Global Chauffeur Service | Blacklane` (40) · H1 `Your chauffeur awaits.` · very little copy (~360 words) · schema: Organization/WebSite/WebPage only.
- Short emotional H3 microcopy: *Arrive at your best · Smooth landings, every time · Seize the day · Between cities, done better · Corporate travel, simplified · Step in. Breathe out.*
- Airport page: title `Book Your Private Airport Transfer Service in the US` (52), H1 `Airport transfers across the US and the globe`, H2s (Discover our service classes · Private airport transfers across the US · Airport transfer in global cities · Get to or from the airport · Airport shuttle booking · FAQs), 9-Q FAQPage, three vehicle classes: **Business Class / First Class / Business Van-SUV**.
- Sitemap = enterprise scale (1,327 country/city pages, 279 city-to-city). Don't copy.
- **Design (palette reference):** blue `#0f63bd`, light blue tints `#e7f0ff / #b4d2ff`, deep ink `#0f1319`, lots of white space, photo-led, calm and corporate. Cookie-consent banner overlays the first screen.

## 2. What to take from each
| Take | From |
|---|---|
| Hero with white booking card + **"Get my price"** button; 4-item trust row under it; popular routes with distance/time | Ridelux |
| Calm corporate blue palette, whitespace, short emotional microcopy, 3 service classes | Blacklane |
| **Lean NYC sitemap + airport page anatomy + HowTo/FAQ/Speakable/Airport schema + policy/safety/team pages** | Noble |
| "Compare vs Uber and transit" section, 4-step booking H3s, mega-menu with descriptions, dedicated rates page, price/phone in meta description | Detailed Drivers |
| AI crawlers allowed in robots.txt | Ridelux |

## 3. SEO blueprint for the new site
- **Title ≤ 62 chars** (`Primary keyword | Brand`), **meta description 140–158 chars** (benefit + proof + CTA; phone or "from $X" only if the owner approves publishing prices). Self-canonical on every page. Exactly **one H1** per page containing the page's primary keyword in natural wording.
- **Heading logic:** H2 = the questions/intents people search (cost, terminals, drive times, vs Uber, how to book, FAQs); H3 = repeatable units under an H2 (one per terminal / vehicle / step / FAQ question). No generic H2s like "Why choose us" without a keyword/benefit.
- **Page anatomy — airport page (target 1,800–3,000 unique words):** H1 `{Airport} Car Service NYC` → 40–60 word answer-first intro → H2 cost/price factors (table) → H2 vs Uber/taxi/transit (table) → H2 terminals & exact meeting points (H3 per terminal) → H2 drive times by neighborhood (table) → H2 vehicles & capacity (H3 per class) → H2 corporate/executive transfers → H2 when to book + what's included + policies → H2 how to book (4 H3 steps) → H2 FAQs (8–10 H3 questions) → H2 related airports/routes (internal links).
- **Page anatomy — home:** H1 `NYC Black Car Service` (+ short tagline) → hero booking widget → trust row → H2 airport transfers (3 airport cards) → H2 services (hourly / corporate / point-to-point) → H2 fleet classes → H2 how booking works (4 steps) → H2 popular NYC routes with times → H2 corporate & travel managers → H2 areas we serve → H2 FAQ → final CTA.
- **Structured data per page type:** *Sitewide* Organization + LocalBusiness (**service-area business — omit street address/geo unless there is a real staffed office**) + WebSite. *Airport pages* BreadcrumbList + Service (provider, areaServed Airport+City, Offer) + HowTo + FAQPage + SpeakableSpecification. *Location/service pages* Service + FAQPage + BreadcrumbList. *Fleet pages* Service/Offer. *Blog* BlogPosting with a named Person author. **AggregateRating/Review only when backed by real, verifiable third-party reviews.** Validate every JSON-LD block against the schema.org vocabulary (valid types only).
- **AI-answer (GEO/AEO):** answer-first paragraphs, comparison tables, question-style H3s, FAQPage + Speakable, allow GPTBot/ClaudeBot/PerplexityBot in robots.
- **E-E-A-T:** About + Team (real named people) + Safety page, real license/insurance info, real reviews, named blog authors, honest policies page.
- **Internal links:** every page ≥ 2 contextual inbound links; airport ↔ airport comparisons ("JFK vs LGA vs EWR"), airport → fleet → book; no orphans.
- **Lean launch sitemap (≈ 35–40 URLs, flat keyword-clean URLs):** `/` · `/book` · `/quote` · `/pricing` (only if owner approves) · `/contact` · `/airports/jfk` · `/airports/laguardia` · `/airports/newark` · `/services/airport-transfer` · `/services/hourly-chauffeur` · `/services/corporate-car-service` · `/services/long-distance` · `/fleet` + 3–5 vehicle pages · `/locations/manhattan|brooklyn|queens` (+ 2–3 more only with real local detail) · `/corporate` · `/about` · `/about/safety` · `/faq` · `/blog` + 3–6 cornerstone posts · `/privacy` · `/terms`. Add more pages only one at a time, each with genuinely unique local content.

## 4. Design system direction (white + calm blue)
- Palette **A "Calm Corporate"**: white `#FFFFFF` · section tint `#F3F7FB` · calm blue `#2E5E8C` (hover `#244B70`) · navy text `#14263A` · muted text `#5B6B7C` · light-blue accent `#DCE9F5` · border `#E3EAF1`. (Alt: Blacklane-style brighter blue `#0F63BD` + tint `#E7F0FF`.) Keep WCAG AA contrast. Define as Tailwind tokens, not hard-coded hex.
- Layout: hero with booking card (Ridelux pattern, but our own composition), 4-item trust row, generous whitespace, card grids for airports/fleet, numbered 4-step "how it works", sticky mobile "Call / WhatsApp / Book" bar (already in the template).
- Type: modern, very readable (propose a heading/body pairing; avoid generic defaults).
- Photos: no Eagle Eye photos. Use the owner's real cars/photos or properly licensed images; mark TODO until supplied.

## 5. "Creative & different" ideas (propose, get approval, build one at a time)
1. **Terminal Finder** — pick airport + airline → shows the terminal, exact meeting point and walking tip (interactive, unique data, linkable, great for featured snippets).
2. **Pickup-time planner** — enter flight time + neighborhood → recommended pickup/leave time with traffic buffers (HowTo-schema-friendly).
3. **Hero booking card with live estimate** using the existing `/api/booking/estimate` (owner decides whether prices are shown publicly).
4. **"Booking for someone else" flow** for executive assistants/travel managers (share itinerary, one invoice) — Noble targets this audience in copy; we can make it a real feature + `/corporate` page.
5. **Distinct brand voice + visual signature:** calm, plain-spoken microcopy (Blacklane-style short lines) and a subtle NYC skyline line-art motif in blue, instead of the black/gold "luxury" cliché.

## 6. Do NOT
- Copy any competitor's text, images, code, schema wording or brand names.
- Mass-generate template pages (Detailed Drivers/Blacklane scale) on a new domain.
- Invent reviews, ratings, license numbers, addresses, years in business or prices.
- Use a fake street address or map pin.
- Target the same primary angle/pages as Eagle Eye — pick a different positioning so the two sites don't compete.
