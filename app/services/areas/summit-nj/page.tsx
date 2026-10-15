import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Summit NJ Black Car Service | NYC & Airport Transfers',
  description:
    'Summit NJ black car service — airport transfers to EWR & JFK, door-to-door Manhattan rides. Union County luxury chauffeur, flat rates, TLC-licensed.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/summit-nj` },
  openGraph: {
    ...ogDefaults,
    title: 'Summit NJ Black Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Summit NJ black car service — airport transfers to EWR & JFK, door-to-door Manhattan rides. Union County luxury chauffeur, flat rates, TLC-licensed.',
    url: `${getSiteUrl()}/services/areas/summit-nj`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long does it take from Summit NJ to Newark Airport (EWR)?',
    a: 'Summit to Newark Liberty International Airport typically takes 20–30 minutes via I-78 and the Garden State Parkway or NJ Turnpike. EWR is the closest major commercial airport to Summit and the most popular choice for Union County residents. Your chauffeur monitors live traffic and departs at exactly the right time for your flight.',
  },
  {
    q: 'How long is the ride from Summit NJ to JFK Airport?',
    a: 'Summit to JFK is approximately 50–65 minutes depending on traffic and time of day. We recommend allowing at least 3 hours before international departures. All tunnel and bridge tolls are built into your flat rate — the price is confirmed before you travel and does not change.',
  },
  {
    q: 'Do you offer black car service from Summit to Manhattan?',
    a: 'Yes. Summit to Midtown Manhattan is typically 35–55 minutes via I-78 and the Lincoln Tunnel. Summit is one of New Jersey&apos;s most desirable commuter towns and many of our clients are finance and professional services executives who prefer a direct, comfortable car service over the NJ Transit Midtown Direct for important meetings or early starts.',
  },
  {
    q: 'Can I book early morning airport transfers from Summit NJ?',
    a: 'Yes — early morning airport pickups are among our most common Summit bookings. We operate 24/7 and your driver is confirmed the evening before. A 4 AM EWR pickup from Summit gets the same professional, on-time service as any other ride. No waiting, no uncertainty — your driver is at your door at the confirmed time.',
  },
  {
    q: 'Do you offer hourly hire for executives in Summit NJ?',
    a: 'Absolutely. Hourly hire is available for Summit and Union County executives who need a dedicated chauffeur for a full day of Manhattan meetings, multi-stop NJ travel, or client entertainment. Your driver stays with you for the entire booking period — no re-booking, no waiting between stops.',
  },
  {
    q: 'Do you serve neighboring towns like New Providence, Berkeley Heights, and Westfield?',
    a: 'Yes. Eagle Eye serves all of Union County and surrounding areas including New Providence, Berkeley Heights, Westfield, Springfield, Chatham, and Madison. Enter your exact address on the booking page for an instant flat-rate quote — we serve all of these communities.',
  },
  {
    q: 'How far is Summit NJ from Newark Airport and Manhattan?',
    a: 'Summit is about 15 miles from Newark Liberty (EWR) — roughly 20–35 minutes and the closest major airport — and about 22 miles from Midtown Manhattan (35–55 minutes via I-78 and the Lincoln Tunnel). JFK is farther at about 35 miles (50–75 minutes).',
  },
  {
    q: 'How much does a car service from Summit NJ cost?',
    a: 'Summit transfers are billed as a flat rate confirmed at booking, based on your address and destination, with all tunnel and bridge tolls included and no surge. Enter your trip on the booking page for an exact quote.',
  },
  {
    q: 'Which airport is best for Summit NJ travelers?',
    a: 'Newark Liberty (EWR) is the closest and most convenient airport for Summit and Union County — about 15 miles and 20–35 minutes — with the widest choice of domestic and international flights. JFK and LaGuardia are options for specific routes but involve a longer drive through or around Manhattan.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'EWR 20 minutes away',
    desc: 'Summit&apos;s proximity to Newark Liberty via I-78 makes it one of the most airport-convenient suburbs in all of New Jersey.',
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'No surge pricing for rush hour, early mornings, or holiday travel. Your price is confirmed before you book.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every Eagle Eye driver is background-checked, TLC-licensed, and trained to the standard that Summit clients expect.',
  },
  {
    title: 'All tolls included',
    desc: 'I-78, Garden State Parkway, Lincoln Tunnel — every applicable toll is built into your flat rate. No surprises.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Your chauffeur&apos;s name, photo, and vehicle details are confirmed the evening prior — not a last-minute assignment.',
  },
  {
    title: '24/7 availability',
    desc: 'Pre-dawn EWR departures, late-night Manhattan returns — Eagle Eye operates around the clock from Summit.',
  },
];

const services = [
  {
    title: 'EWR Airport Transfers',
    desc: 'Summit NJ to Newark Liberty — approximately 20 minutes. Flat rate, all tolls in, luggage assistance.',
    href: '/services/airport/ewr',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate door-to-door from Summit to JFK. All tunnel and bridge tolls included, flight tracking.',
    href: '/services/airport/jfk',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Summit to LaGuardia with a professional chauffeur. Flat rate, no surge pricing.',
    href: '/services/airport/lga',
  },
  {
    title: 'Manhattan Executive Commuter',
    desc: 'Direct from your Summit home or office to Midtown, Wall Street, or anywhere in Manhattan. Tolls included.',
    href: '/services/areas/manhattan',
  },
  {
    title: 'Corporate Travel',
    desc: 'Corporate accounts for Summit-area executives — consistent service, invoicing, dependable scheduling.',
    href: '/services/corporate',
  },
  {
    title: 'Hourly Hire',
    desc: 'A dedicated chauffeur for the full day — meetings, events, multi-stop executive travel from Summit NJ.',
    href: '/services/hourly',
  },
];

const nearbyAreas = [
  { name: 'Short Hills NJ', href: '/services/areas/short-hills-nj' },
  { name: 'Morristown NJ', href: '/services/areas/morristown-nj' },
  { name: 'Newark NJ', href: '/services/areas/newark-nj' },
  { name: 'Hoboken', href: '/services/areas/hoboken' },
  { name: 'EWR Airport', href: '/services/airport/ewr' },
  { name: 'Manhattan', href: '/services/areas/manhattan' },
  { name: 'New Jersey (All Areas)', href: '/services/areas/new-jersey' },
  { name: 'JFK Airport', href: '/services/airport/jfk' },
];

export default function SummitNJPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'New Jersey', url: `${siteUrl}/services/areas/new-jersey` },
          { name: 'Summit NJ', url: `${siteUrl}/services/areas/summit-nj` },
        ]}
      />
      <ServiceJsonLd
        name="Summit NJ Black Car Service"
        description="Premium black car and chauffeur service in Summit, New Jersey. Airport transfers to EWR, JFK, and LGA. Manhattan executive commuter rides, corporate travel, and hourly hire throughout Union County. Flat rates with all tolls included, TLC-licensed chauffeurs, available 24/7."
        areaServed="Summit, Union County, New Jersey"
        url={`${siteUrl}/services/areas/summit-nj`}
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Summit, NJ — Black Car Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Summit NJ Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
            Professional chauffeur service from Summit to EWR, JFK, LGA, and Manhattan.
            Serving Union County&apos;s executive community with flat-rate pricing, all tolls
            included, and a confirmed driver at your door 24/7.
          </p>
          <p className="text-brand-silver max-w-2xl mb-10">
            Summit is one of New Jersey&apos;s most desirable communities — a historic town with
            easy access to Manhattan and one of the shortest drives to Newark Liberty Airport in
            the entire state. Eagle Eye Chauffeur provides Summit residents with the professional
            black car service that matches their expectations: punctual, discreet, and priced
            with complete transparency from the moment you book.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Summit NJ</div>
              <div className="text-brand-silver text-sm mt-1">Full area coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Union County</div>
              <div className="text-brand-silver text-sm mt-1">New Providence · Westfield</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-dawn to late night</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">TLC Licensed</div>
              <div className="text-brand-silver text-sm mt-1">Professional &amp; insured</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Now — Flat Rate
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Summit NJ Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From EWR airport transfers and Manhattan executive commutes to hourly hire and
            event transportation — Eagle Eye serves every Summit and Union County travel need.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black text-lg mb-1">{s.title}</div>
                <div className="text-sm text-brand-grey">{s.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Summit Airport &amp; City Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Estimated travel times under normal conditions. Your driver monitors live traffic
            and departs at the optimal time. We recommend 3 hours for international departures.
          </p>
          <div className="space-y-3">
            {[
              { route: 'Summit → EWR (Newark Liberty Airport)', time: '20–30 min' },
              { route: 'Summit → JFK Airport', time: '50–65 min' },
              { route: 'Summit → LGA (LaGuardia)', time: '50–65 min' },
              { route: 'Summit → Midtown Manhattan', time: '35–55 min' },
              { route: 'Summit → Financial District (NYC)', time: '40–55 min' },
              { route: 'Summit → Short Hills NJ', time: '10–20 min' },
              { route: 'Summit → Morristown NJ', time: '20–30 min' },
            ].map((r) => (
              <div
                key={r.route}
                className="flex justify-between items-center bg-brand-offwhite border border-brand-light p-4"
              >
                <span className="font-medium text-brand-black text-sm">{r.route}</span>
                <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat. All tolls and road fees included.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Summit Residents Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Summit&apos;s residents are among the most discerning in the state. They expect a car
            service that is on time, professional, and completely transparent in its pricing.
            Here&apos;s exactly what Eagle Eye provides.
          </p>
          <ul className="space-y-3">
            {eaglEyeBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="flex items-start gap-3 bg-brand-white border border-brand-light p-4"
              >
                <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <span className="font-medium text-brand-black">{benefit.title} — </span>
                  <span className="text-brand-grey text-sm">{benefit.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Summit NJ — A Premier Commuter Town with Exceptional Airport Access
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            Summit&apos;s combination of a beautiful downtown, strong school system, and easy access
            to both Manhattan and Newark Airport has made it one of New Jersey&apos;s most sought-after
            communities. Eagle Eye Chauffeur understands this market and serves it accordingly.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-8">
            <ul className="space-y-4 text-brand-grey">
              <li>
                <strong className="text-brand-black">The NJ Transit alternative.</strong>{' '}
                Summit is served by NJ Transit&apos;s Morristown and Gladstone lines via the
                Midtown Direct — but for early morning airport departures, client-facing days,
                or late-night returns from Manhattan, a confirmed black car is the reliable
                choice. No crowded trains, no schedule dependencies.
              </li>
              <li>
                <strong className="text-brand-black">EWR — 20 minutes from Summit.</strong>{' '}
                Via I-78 and the NJ Turnpike extension, Newark Liberty International Airport is
                one of the shortest rides from Summit among all of NJ&apos;s upscale communities.
                Early morning domestic departures and international business flights are both
                well-served from EWR.
              </li>
              <li>
                <strong className="text-brand-black">Manhattan finance professionals.</strong>{' '}
                A significant portion of Summit&apos;s working population commutes to Wall Street,
                Midtown law firms, and corporate headquarters. Eagle Eye provides consistent
                door-to-door service — especially valuable on high-stakes client meeting days.
              </li>
              <li>
                <strong className="text-brand-black">All of Union County covered.</strong>{' '}
                Summit, New Providence, Berkeley Heights, Mountainside, Westfield, and Kenilworth
                — all served at the same flat rate with the same professional standard. Every
                address in Union County is a valid Eagle Eye pickup location.
              </li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-center"
            >
              Get an Instant Quote
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block py-3 px-8 border border-brand-light text-brand-black font-medium hover:border-brand-dark transition-colors text-center"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Nearby Service Areas
          </h2>
          <p className="text-brand-grey mb-8">
            Eagle Eye Chauffeur covers all of Union County and surrounding New Jersey communities.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-brand-white border border-brand-light p-4 text-sm font-medium text-brand-black hover:border-brand-dark transition-colors text-center"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Summit NJ Black Car Service — Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Book Your Summit NJ Black Car
          </h2>
          <p className="text-brand-silver mb-3 max-w-xl mx-auto">
            Available 24/7 from every Summit and Union County address. Flat rates with all tolls
            included. Driver confirmed the night before. No surge pricing.
          </p>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Book online, call us, or message on WhatsApp — we respond around the clock,
            including for pre-dawn EWR departures and late-night Manhattan returns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Get an Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors text-center"
            >
              Book on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Or email us at{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
