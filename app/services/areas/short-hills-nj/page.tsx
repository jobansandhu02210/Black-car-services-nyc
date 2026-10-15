import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Short Hills NJ Car Service | NYC & Airport Transfers',
  description:
    'Short Hills NJ black car service — EWR airport transfers (very close), JFK & NYC rides. Millburn luxury car service, flat rates, TLC-licensed.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/short-hills-nj` },
  openGraph: {
    ...ogDefaults,
    title: 'Short Hills NJ Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Short Hills NJ black car service — EWR airport transfers (very close), JFK & NYC rides. Millburn luxury car service, flat rates, TLC-licensed.',
    url: `${getSiteUrl()}/services/areas/short-hills-nj`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long does it take from Short Hills to Newark Airport (EWR)?',
    a: 'Short Hills to Newark Liberty International Airport is typically 20–30 minutes — one of the shortest airport connections in all of New Jersey. The Garden State Parkway and I-78 provide a direct, fast route from the Millburn/Short Hills area to EWR. Your chauffeur monitors live traffic and departs at the right time every time.',
  },
  {
    q: 'How long is the ride from Short Hills to JFK Airport?',
    a: 'Short Hills to JFK is approximately 45–65 minutes, depending on traffic and the time of day. We recommend allowing at least 3 hours before international departures. All tunnel tolls and applicable road tolls are included in your flat rate — confirmed before you book.',
  },
  {
    q: 'Do you provide black car service from Short Hills to Manhattan?',
    a: 'Yes. Short Hills to Midtown Manhattan typically takes 30–50 minutes via I-78 and the Lincoln Tunnel. Many of our Short Hills clients are finance and executive professionals who commute regularly to Manhattan and prefer a door-to-door luxury car over the NJ Transit Midtown Direct line for client days, early meetings, or late returns.',
  },
  {
    q: 'Do you serve executive commuters and finance professionals in Short Hills?',
    a: 'Yes — Short Hills and Millburn are among the most affluent communities in New Jersey, and a significant portion of our clients here are Wall Street and Midtown finance executives. We offer a consistent, white-glove service that matches the expectations of Short Hills residents. Corporate accounts are available for regular commuter travel.',
  },
  {
    q: 'Can you arrange black car service for galas and events in Short Hills?',
    a: 'Absolutely. We handle event transportation for galas, charity dinners, Manhattan theatre nights, and private events throughout Short Hills and Millburn. Pre-book your round trip and your chauffeur will be waiting at your return time — no searching for a car at the end of the evening.',
  },
  {
    q: 'Is there extra cost for Short Hills or Millburn addresses?',
    a: 'No. Millburn, Short Hills, and surrounding Essex County communities are all served at a flat rate confirmed at booking. All applicable tolls are included. There are no area surcharges, zip code fees, or hidden charges on any Eagle Eye ride.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'EWR minutes from your door',
    desc: 'Short Hills sits closer to Newark Liberty Airport than almost any other affluent NJ suburb — a significant advantage for frequent flyers.',
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'No surge pricing, ever. Your price is confirmed before you book and never changes for traffic, weather, or events.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every Eagle Eye driver is background-checked, TLC-licensed, and trained to the discretionary service standard that Short Hills clients expect.',
  },
  {
    title: 'All tolls included',
    desc: 'Garden State Parkway, I-78, Lincoln Tunnel — every applicable toll is built into your flat rate. No surprises.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your driver&apos;s name and vehicle details the evening prior — not a last-minute automated assignment.',
  },
  {
    title: '24/7 availability',
    desc: 'Early morning EWR departures, late Manhattan event returns — we operate around the clock from Short Hills.',
  },
];

const services = [
  {
    title: 'EWR Airport Transfers',
    desc: 'Short Hills to Newark Liberty — one of the shortest airport connections in NJ. Flat rate, tolls in.',
    href: '/services/airport/ewr',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate door-to-door from Short Hills to JFK. All tunnel and bridge tolls included.',
    href: '/services/airport/jfk',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Short Hills to LaGuardia with a professional chauffeur. Flat rate confirmed at booking.',
    href: '/services/airport/lga',
  },
  {
    title: 'Manhattan Executive Commuter',
    desc: 'Door-to-door from Short Hills to Wall Street, Midtown, or any Manhattan address. Tolls included.',
    href: '/services/areas/manhattan',
  },
  {
    title: 'Event & Gala Service',
    desc: 'Arrive in style at Manhattan venues, galas, and charity events — then return to Short Hills in comfort.',
    href: '/book',
  },
  {
    title: 'Hourly Hire',
    desc: 'A dedicated chauffeur for the full day — meetings, shopping, multi-stop executive travel from Short Hills.',
    href: '/services/hourly',
  },
];

const nearbyAreas = [
  { name: 'Summit NJ', href: '/services/areas/summit-nj' },
  { name: 'Morristown NJ', href: '/services/areas/morristown-nj' },
  { name: 'Newark NJ', href: '/services/areas/newark-nj' },
  { name: 'Hoboken', href: '/services/areas/hoboken' },
  { name: 'EWR Airport', href: '/services/airport/ewr' },
  { name: 'Manhattan', href: '/services/areas/manhattan' },
  { name: 'New Jersey (All Areas)', href: '/services/areas/new-jersey' },
  { name: 'JFK Airport', href: '/services/airport/jfk' },
];

export default function ShortHillsNJPage() {
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
          { name: 'Short Hills NJ', url: `${siteUrl}/services/areas/short-hills-nj` },
        ]}
      />
      <ServiceJsonLd
        name="Short Hills NJ Black Car Service"
        description="Premium black car and chauffeur service in Short Hills and Millburn, NJ. Airport transfers to EWR (very close), JFK, and LGA. Executive Manhattan commuter rides, event transportation, and hourly hire. Flat rates with all tolls included, TLC-licensed chauffeurs, 24/7."
        areaServed="Short Hills, Millburn, Essex County, New Jersey"
        url={`${siteUrl}/services/areas/short-hills-nj`}
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Short Hills &amp; Millburn, NJ — Black Car Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Short Hills NJ Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
            Professional chauffeur service from Short Hills and Millburn to EWR, JFK, LGA,
            and Manhattan. One of New Jersey&apos;s most affluent communities — served with the
            level of discretion and precision it deserves.
          </p>
          <p className="text-brand-silver max-w-2xl mb-10">
            Short Hills residents have a distinct advantage: Newark Liberty Airport (EWR) is
            just 20–30 minutes away via I-78. Pair that with Eagle Eye&apos;s flat-rate pricing,
            confirmed chauffeurs, and 24/7 availability — and you have the most reliable
            airport and city car service in Essex County.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Short Hills NJ</div>
              <div className="text-brand-silver text-sm mt-1">Short Hills &amp; Millburn</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Millburn</div>
              <div className="text-brand-silver text-sm mt-1">Essex County NJ</div>
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
            Short Hills Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From rapid EWR connections for frequent flyers to executive Manhattan commutes and
            gala-night transportation, Eagle Eye covers every Short Hills travel need.
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
            Short Hills Airport &amp; City Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Estimated travel times under normal conditions. Your driver monitors live traffic
            and departs at the optimal time for your flight.
          </p>
          <div className="space-y-3">
            {[
              { route: 'Short Hills → EWR (Newark Liberty Airport)', time: '20–30 min' },
              { route: 'Short Hills → JFK Airport', time: '45–65 min' },
              { route: 'Short Hills → LGA (LaGuardia)', time: '45–60 min' },
              { route: 'Short Hills → Midtown Manhattan', time: '30–50 min' },
              { route: 'Short Hills → Financial District (NYC)', time: '35–50 min' },
              { route: 'Short Hills → Morristown NJ', time: '15–25 min' },
              { route: 'Short Hills → Summit NJ', time: '10–20 min' },
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
            All rates are flat. All tolls and Parkway fees included.{' '}
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
            Why Short Hills Residents Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Short Hills is one of New Jersey&apos;s most exclusive communities. Our clients here
            expect punctuality, discretion, and a vehicle that matches the occasion. Here&apos;s
            what Eagle Eye delivers on every booking.
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
            Short Hills &amp; Millburn — An Exceptional Location for Airport Travel
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            Few New Jersey communities enjoy the geographic advantage that Short Hills has when it
            comes to air travel. We know the local streets, the EWR terminal layouts, and the
            fastest routes between Short Hills and every airport in the metro area.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-8">
            <ul className="space-y-4 text-brand-grey">
              <li>
                <strong className="text-brand-black">EWR — a 20-minute ride.</strong>{' '}
                Newark Liberty International is the closest major airport to Short Hills and
                Millburn. For domestic flights and most international routes, it is the most
                convenient option in the metro area. Our Short Hills-to-EWR run departs precisely
                on time, every time.
              </li>
              <li>
                <strong className="text-brand-black">Executive Manhattan commuter service.</strong>{' '}
                Short Hills is home to a significant concentration of Wall Street partners, hedge
                fund managers, and senior executives. Eagle Eye provides the level of service
                that matches this clientele — confirmed driver, clean luxury vehicle, and complete
                discretion on every ride.
              </li>
              <li>
                <strong className="text-brand-black">Gala and event transportation.</strong>{' '}
                Manhattan&apos;s gala circuit, charity events, and restaurant reservations bring
                Short Hills residents into the city regularly. Eagle Eye handles the full round
                trip — we pick you up at your door and return you home after the event.
              </li>
              <li>
                <strong className="text-brand-black">All of Millburn Township.</strong>{' '}
                Short Hills, Millburn, and neighboring Livingston and Maplewood are all served
                at the same flat rate and the same professional standard. No area is too far,
                no address is a surcharge.
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
            Eagle Eye Chauffeur covers all of Essex County and surrounding NJ communities.
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
            Short Hills NJ Black Car Service — Frequently Asked Questions
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
            Book Your Short Hills Black Car
          </h2>
          <p className="text-brand-silver mb-3 max-w-xl mx-auto">
            Available 24/7 from every Short Hills and Millburn address. Flat rates with all tolls
            included. Driver confirmed the night before. No surge pricing.
          </p>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Book online, call us, or message on WhatsApp — we respond around the clock,
            including for early morning EWR departures and late-night Manhattan returns.
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
