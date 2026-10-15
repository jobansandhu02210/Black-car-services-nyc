import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Morristown NJ Car Service | Airport & NYC Transfers',
  description:
    'Morristown NJ black car service — airport transfers to EWR & JFK, NYC rides, Morris County corporate travel. TLC-licensed chauffeurs, flat rates.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/morristown-nj` },
  openGraph: {
    ...ogDefaults,
    title: 'Morristown NJ Car Service | Airport & NYC Transfers | Eagle Eye',
    description:
      'Morristown NJ black car service — airport transfers to EWR & JFK, NYC rides, Morris County corporate travel. TLC-licensed chauffeurs, flat rates.',
    url: `${getSiteUrl()}/services/areas/morristown-nj`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long does it take from Morristown to Newark Airport (EWR)?',
    a: 'Morristown to Newark Liberty International Airport typically takes 35–50 minutes via I-287 and the New Jersey Turnpike. EWR is the closest major airport to Morris County and the most popular choice for Morristown-area residents and corporate travelers. Your chauffeur monitors traffic conditions and departs at the right time for your flight.',
  },
  {
    q: 'How long is the ride from Morristown to JFK Airport?',
    a: 'Morristown to JFK is approximately 55–75 minutes under normal conditions. We recommend allowing at least 3.5 hours before international departures from JFK. All tolls — New Jersey Turnpike, Lincoln or Holland Tunnel — are included in your flat rate confirmed at booking.',
  },
  {
    q: 'Do you offer black car service from Morristown to Manhattan?',
    a: 'Yes. Morristown to Midtown Manhattan typically takes 45–65 minutes depending on traffic and the specific Manhattan destination. We serve Morris County executives who prefer a comfortable, direct black car over the Morris & Essex rail line — particularly for client-facing appointments, early departures, or late returns.',
  },
  {
    q: 'Do you serve corporate offices in Morris County?',
    a: 'Yes. Morris County is home to dozens of major corporate headquarters — Honeywell, Conduent, Allied Signal, and many more. Eagle Eye provides corporate accounts and executive transportation for Morris County businesses needing regular airport transfers, client pick-ups, and inter-office travel.',
  },
  {
    q: 'Can I book hourly hire in Morristown for executive travel?',
    a: 'Absolutely. Hourly hire is available for Morristown and Morris County executives who need a dedicated chauffeur for a full day of meetings, site visits, or multi-stop corporate travel. Your driver stays with you for the entire booking period — no re-booking between stops.',
  },
  {
    q: 'What is the best airport for Morristown NJ residents?',
    a: 'For most Morristown travelers, Newark Liberty (EWR) is the clear choice — it offers extensive domestic and international service and is approximately 35–50 minutes from Morristown. JFK is a viable option for destinations with better service from Kennedy, typically 55–75 minutes away. We serve both.',
  },
  {
    q: 'How far is Morristown from Newark Airport and Manhattan?',
    a: 'Morristown is in Morris County, New Jersey — about 20 miles from Newark Liberty (EWR), roughly a 30–50 minute drive, and about 30 miles from Midtown Manhattan (50–80 minutes depending on tunnel traffic). JFK is roughly 40 miles and LaGuardia about 35 miles. Morristown Municipal Airport (MMU), a major private-jet hub, is just minutes away.',
  },
  {
    q: 'How much does a car service from Morristown cost?',
    a: 'Morristown transfers are billed as a flat rate confirmed at booking, with all tolls included and no surge. Whether it is a short EWR run, a Manhattan trip, or an FBO transfer at Morristown Airport, enter your destination on the booking page for an exact quote.',
  },
  {
    q: 'Do you serve private jet travelers at Morristown Airport (MMU)?',
    a: 'Yes. Morristown Municipal Airport (MMU) is one of the busiest private-aviation airports in the region, and we provide FBO-to-door and door-to-FBO transfers for private jet travelers, coordinating timing with your flight crew.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Morris County expertise',
    desc: 'We know the fastest routes from every Morristown neighborhood to EWR, JFK, and Manhattan — including I-287, Routes 10 and 24.',
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'No surge pricing for rush hour, bad weather, or holiday travel. Your rate is confirmed before you book.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every Eagle Eye driver is background-checked, licensed, and trained to the standard expected by Morris County executives.',
  },
  {
    title: 'All tolls included',
    desc: 'NJ Turnpike, I-287 tolls, Lincoln Tunnel — every applicable charge is built into your flat rate.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your driver&apos;s name and vehicle details the evening before — no last-minute uncertainty.',
  },
  {
    title: '24/7 availability',
    desc: 'Pre-dawn EWR departures and late-night JFK arrivals are handled with the same professional care as any daytime trip.',
  },
];

const services = [
  {
    title: 'EWR Airport Transfers',
    desc: 'Morristown to Newark Liberty — the fastest airport route from Morris County. Flat rate, tolls in.',
    href: '/services/airport/ewr',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate door-to-door from Morristown to JFK. All Turnpike and tunnel tolls included.',
    href: '/services/airport/jfk',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Morristown to LaGuardia with a professional chauffeur. No surge, flat rate at booking.',
    href: '/services/airport/lga',
  },
  {
    title: 'Morristown to NYC',
    desc: 'Direct from Morris County to any Manhattan address — corporate, leisure, events. Tolls included.',
    href: '/services/areas/manhattan',
  },
  {
    title: 'Corporate Executive Travel',
    desc: 'Corporate accounts for Morris County headquarters — consistent service, invoicing, multi-vehicle.',
    href: '/services/corporate',
  },
  {
    title: 'Hourly Hire',
    desc: 'A dedicated chauffeur for full-day executive travel, meetings, and multi-stop Morristown itineraries.',
    href: '/services/hourly',
  },
];

const nearbyAreas = [
  { name: 'Short Hills NJ', href: '/services/areas/short-hills-nj' },
  { name: 'Summit NJ', href: '/services/areas/summit-nj' },
  { name: 'Newark NJ', href: '/services/areas/newark-nj' },
  { name: 'Princeton NJ', href: '/services/areas/princeton-nj' },
  { name: 'EWR Airport', href: '/services/airport/ewr' },
  { name: 'Manhattan', href: '/services/areas/manhattan' },
  { name: 'New Jersey (All Areas)', href: '/services/areas/new-jersey' },
  { name: 'JFK Airport', href: '/services/airport/jfk' },
];

export default function MorristownNJPage() {
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
          { name: 'Morristown NJ', url: `${siteUrl}/services/areas/morristown-nj` },
        ]}
      />
      <ServiceJsonLd
        name="Morristown NJ Black Car Service"
        description="Premium black car and chauffeur service in Morristown, NJ. Airport transfers to EWR, JFK, and LGA. NYC and Manhattan rides, corporate travel for Morris County headquarters. Flat rates with all tolls included, TLC-licensed chauffeurs, available 24/7."
        areaServed="Morristown, Morris County, New Jersey"
        url={`${siteUrl}/services/areas/morristown-nj`}
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Morristown, NJ — Black Car Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Morristown NJ Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
            Professional chauffeur service from Morristown to EWR, JFK, LGA, and Manhattan.
            Serving Morris County executives, corporate campuses, and residential clients
            throughout one of New Jersey&apos;s most affluent business communities.
          </p>
          <p className="text-brand-silver max-w-2xl mb-10">
            Morristown is the corporate and cultural hub of Morris County — home to major
            Fortune 500 headquarters, a thriving downtown, and executives who need reliable,
            professional ground transportation. Eagle Eye Chauffeur provides the white-glove
            service that Morris County clients expect, with flat rates and no surprises.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Morristown NJ</div>
              <div className="text-brand-silver text-sm mt-1">Full area coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Morris County</div>
              <div className="text-brand-silver text-sm mt-1">Madison · Chatham · Florham</div>
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
            Morristown Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Airport transfers, corporate executive travel, Manhattan rides, and hourly hire —
            we cover every ground transportation need for Morristown and Morris County.
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
            Morristown Airport &amp; City Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Estimated travel times under normal conditions. Live traffic is monitored and your
            driver departs at the right time to make your flight comfortably.
          </p>
          <div className="space-y-3">
            {[
              { route: 'Morristown → EWR (Newark Liberty Airport)', time: '35–50 min' },
              { route: 'Morristown → JFK Airport', time: '55–75 min' },
              { route: 'Morristown → LGA (LaGuardia)', time: '60–75 min' },
              { route: 'Morristown → Midtown Manhattan', time: '45–65 min' },
              { route: 'Morristown → Financial District (NYC)', time: '50–70 min' },
              { route: 'Morristown → Short Hills NJ', time: '15–25 min' },
              { route: 'Morristown → Summit NJ', time: '20–30 min' },
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
            All rates are flat. Turnpike and tunnel tolls included.{' '}
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
            Why Morristown Executives Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Morris County is home to some of the country&apos;s largest corporate headquarters.
            The executives and professionals who work here have high expectations — and Eagle Eye
            meets them on every ride.
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
            Morristown &amp; Morris County — Corporate Hub of Northern NJ
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            Morristown is more than a historic town — it is the business center of Morris County,
            with major corporate campuses in Florham Park, Madison, and Parsippany that draw
            executive travelers who need dependable, professional transportation.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-8">
            <ul className="space-y-4 text-brand-grey">
              <li>
                <strong className="text-brand-black">Fortune 500 corporate campuses.</strong>{' '}
                Honeywell&apos;s global headquarters in Morris Plains, Conduent in Florham Park, and
                numerous other major companies line the Route 10 and I-287 corridors. Eagle Eye
                provides corporate accounts and regular executive transportation for these
                organizations.
              </li>
              <li>
                <strong className="text-brand-black">Morristown Airport alternative.</strong>{' '}
                Many Morris County executives fly from Morristown Airport (MMU) for private aviation,
                but rely on Eagle Eye for commercial flights from EWR — the most practical
                commercial airport for most Morristown-area travelers.
              </li>
              <li>
                <strong className="text-brand-black">Residential communities throughout Morris County.</strong>{' '}
                We serve Morristown, Madison, Chatham, Morris Township, Harding Township,
                Mendham, Bernardsville, and all surrounding communities with the same flat-rate
                professional service.
              </li>
              <li>
                <strong className="text-brand-black">An alternative to the Morris &amp; Essex Line.</strong>{' '}
                The NJ Transit commuter rail serves Morristown, but for early morning airport
                departures, late-night returns, or client-facing days that require door-to-door,
                Eagle Eye is the professional choice.
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
            Eagle Eye Chauffeur covers all of Morris County and surrounding NJ communities.
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
            Morristown NJ Black Car Service — Frequently Asked Questions
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
            Book Your Morristown Black Car
          </h2>
          <p className="text-brand-silver mb-3 max-w-xl mx-auto">
            Available 24/7 from every Morristown and Morris County address. Flat rates with all
            tolls included. Driver confirmed the night before. No surge pricing.
          </p>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Book online, call us, or message on WhatsApp — we respond around the clock,
            including for early morning EWR departures from Morris County.
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
