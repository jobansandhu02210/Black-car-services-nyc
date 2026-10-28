# Connecting the booking system — keys and services

Black Car Service (blackcarservicesnyc.com) uses the same booking system as Eagle Eye: the same
5-step form, the same price engine and the **same prices** (checked against Eagle Eye's live estimate API
on 2026-10-28). What it needs from outside is the same list of services. Do every step for the **new
domain**, with **new keys** — never paste Eagle Eye's keys into this site.

All values go in `.env.local` while you test on localhost (copy `.env.example` → `.env.local`, fill it in,
restart `npm run dev`), and in **Vercel → Settings → Environment Variables** when you deploy.

| What it powers | Service | Variables |
|---|---|---|
| Address suggestions + automatic price | Google Maps Platform | `PLACES_SERVER_API_KEY` |
| Booking / contact / invoice emails | Resend | `RESEND_API_KEY`, `EMAIL_FROM`, `BOOKING_NOTIFY_TO` |
| Inbox `info@blackcarservicesnyc.com` | Google Workspace | (DNS only) |
| Saved bookings + invoices | Postgres database | `DATABASE_URL` |
| Card payments on invoices | Stripe | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY` |
| Admin screens | — | `ADMIN_USERNAME`, `ADMIN_PASSWORD` |

---

## 1. Google Maps — auto address + auto price (do this first)

The booking form calls three Google APIs from the server:

| Google API | Used for |
|---|---|
| **Places API** | Address suggestions while typing (Autocomplete) and the chosen address (Place Details) |
| **Distance Matrix API** | Real driving miles → price = $120 base + miles × per-mile rate |
| **Geocoding API** | Backup if Distance Matrix fails (straight-line miles × 1.22) |

**Important (Google change, March 2025):** *Places API* and *Distance Matrix API* are now "legacy" and
**cannot be enabled in a brand-new Google Cloud project**. Existing projects that already use them keep
working. That gives two options:

**Option A — recommended now (no code change):** create a **new key inside Eagle Eye's existing Google
Cloud project**, where these APIs are already on.
1. [console.cloud.google.com](https://console.cloud.google.com) → select **Eagle Eye's project**.
2. **APIs & Services → Enabled APIs**: confirm **Places API**, **Distance Matrix API**, **Geocoding API**
   are listed (they should be — Eagle Eye uses them).
3. **APIs & Services → Credentials → Create credentials → API key**. Rename it
   "Black Car Service — server".
4. **API restrictions → Restrict key** → tick **Places API**, **Distance Matrix API**, **Geocoding API**.
   **Application restrictions → None** (the key stays on the server; the site checks which domains may
   call it).
5. Put it in `.env.local` as `PLACES_SERVER_API_KEY=…` and restart `npm run dev`.

The two sites then share a billing account and project, but have separate keys, so you can see and cap
each site's usage separately (Credentials → key → usage; APIs → Quotas).

**Option B — fully separate project (later):** a new project can only use the *new* APIs —
**Places API (New)** and **Routes API** (Compute Route Matrix). The site's code would need updating to
call those instead. Ask for this if you want the two businesses fully separate in Google Cloud.

Check it works: on `/book`, typing an address shows suggestions, and step 3 shows a price on every car.

## 2. Google Workspace — the `info@blackcarservicesnyc.com` inbox

You can add the new domain to the Workspace account you already pay for — no extra licence needed if you
use an alias.
1. [admin.google.com](https://admin.google.com) → **Account → Domains → Manage domains → Add a domain**.
2. Enter `blackcarservicesnyc.com`, choose **Secondary domain** → **Add domain & start verification**.
3. At your domain registrar's DNS, add the **TXT verification record** Google shows. Verify.
4. Add Google's mail record: **MX** `@` → `smtp.google.com`, priority **1** (remove any other MX on `@`).
5. **Users →** open your user → **Add alternate emails (aliases)** → `info@blackcarservicesnyc.com`.
   (Or create a separate user if someone else should own that inbox.)
6. **Apps → Google Workspace → Gmail → Authenticate email** → select the new domain → **Generate new
   record** → add that **DKIM TXT** (`google._domainkey`) at the registrar → **Start authentication**.
7. SPF: one **TXT** on `@`: `v=spf1 include:_spf.google.com ~all`.
8. DMARC (recommended): **TXT** `_dmarc` → `v=DMARC1; p=none; rua=mailto:info@blackcarservicesnyc.com`.

If the inbox address is not `info@…`, change `CONTACT_EMAIL_BOOKINGS` in `lib/contact.ts`.

## 3. Resend — sending the booking emails

Use the **same Resend account** as Eagle Eye, with a new domain and a new key.
1. [resend.com](https://resend.com) → **Domains → Add domain** → `blackcarservicesnyc.com`.
2. Add exactly the DNS records Resend shows (usually an **MX** and a **TXT (SPF)** on the `send`
   subdomain, and a **TXT (DKIM)** on `resend._domainkey`). These live on subdomains, so they **do not
   clash** with the Google Workspace records above.
3. Wait for **Verified**.
4. **API Keys → Create API key** → name "Black Car Service", permission **Sending access**, domain
   **blackcarservicesnyc.com** only.
5. In `.env.local`:
   ```
   RESEND_API_KEY=re_…
   EMAIL_FROM=Black Car Service <bookings@blackcarservicesnyc.com>
   BOOKING_NOTIFY_TO=info@blackcarservicesnyc.com
   ```
   Before the domain is verified you can test with `EMAIL_FROM=Black Car Service <onboarding@resend.dev>`
   (Resend then only delivers to your own Resend login email).

Check it works: submit a test booking on `/book` → you get the "new booking" email at
`BOOKING_NOTIFY_TO`, and the customer email address gets the confirmation.

## 4. Database — saved bookings and invoices

Create a **new, empty Postgres database** (same provider Eagle Eye uses is fine — e.g. Neon, Supabase,
Prisma Postgres, Vercel Postgres — but a separate database).
1. Copy its connection string into `.env.local` as `DATABASE_URL=postgresql://…`.
2. Create the tables:
   ```
   npx prisma db push
   ```
The admin screens (`/admin/bookings`, `/admin/invoice/new`) and invoice links need this.

## 5. Stripe — card payments on invoices

Create a **separate Stripe account** for this business (Stripe Dashboard → account menu → **New
account**), so payouts and statements are separate from Eagle Eye.
1. **Developers → API keys** → start with **Test mode** keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_…
   STRIPE_SECRET_KEY=sk_test_…
   ```
2. Test an invoice payment with Stripe's test card `4242 4242 4242 4242`, then switch to live keys at
   launch. (The site's security headers already allow Stripe.)

## 6. Admin login

Pick a new username and a long, unique password (not Eagle Eye's):
```
ADMIN_USERNAME=…
ADMIN_PASSWORD=…
```

## 7. At deploy (only when you say "deploy")

Add every variable above in Vercel, plus `NEXT_PUBLIC_SITE_URL=https://www.blackcarservicesnyc.com`.
Set `NEXT_PUBLIC_SITE_LIVE=true` only at the very end, then add GA4 / Search Console.

## Prices (same as Eagle Eye)

| | Business Sedan | Business SUV | First Class SUV | First Class Sedan |
|---|---|---|---|---|
| Base fare | $120 | $120 | $120 | $120 |
| Per mile | $5 | $6.50 | $8 | $16 |
| Hourly (shown on booking cards) | $110/hr | $120/hr | $130/hr | $210/hr |
| Extra passenger / bag over capacity | $15 / $8 | $15 / $8 | $15 / $8 | $15 / $8 |

Sprinters (by phone/WhatsApp): Executive $175/hr, Limo $200/hr, Jet $250/hr, 2-hour minimum.
Per-mile prices can be changed without code via the `PRICING_*` variables in `.env.example`.
