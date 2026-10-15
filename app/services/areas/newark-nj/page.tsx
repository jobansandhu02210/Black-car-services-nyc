import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Newark NJ Black Car Service | Airport Transfers EWR',
  description:
    'Newark NJ black car service — EWR airport transfers, JFK & LGA rides, corporate travel, Prudential Center events. TLC-licensed chauffeurs, flat.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/newark-nj` },
  openGraph: {
    ...ogDefaults,
    title: 'Newark NJ Black Car Service | Airport Transfers EWR | Eagle Eye',
    description:
      'Newark NJ black car service — EWR airport transfers, JFK & LGA rides, corporate travel, Prudential Center events. TLC-licensed chauffeurs, flat.',
    url: `${getSiteUrl()}/services/areas/newark-nj`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long does it take from Newark to EWR Airport by black car?',
    a: 'Newark city center to Newark Liberty International Airport (EWR) is typically 10–20 minutes depending on traffic conditions and your pickup location. Your chauffeur monitors live conditions and will time departure to ensure you arrive with comfort to spare. EWR\'s proximity to Newark makes it an exceptionally convenient airport connection.',
  },
  {
    q: 'Do you offer black car service from Newark to JFK or LaGuardia?',
    a: 'Yes. We run flat-rate rides from Newark, NJ to JFK Airport (approximately 45–60 minutes) and to LaGuardia (approximately 40–55 minutes). All Lincoln Tunnel and Holland Tunnel tolls are included in your flat rate. Confirm your quote on the booking page before you travel.',
  },
  {
    q: 'Do you offer corporate black car accounts for Newark businesses?',
    a: 'Yes. Newark&apos;s Broad Street business corridor and Ironbound district are home to corporate offices and firms that rely on professional ground transportation. We offer corporate accounts with consistent scheduling, invoicing, and dedicated support for teams that need regular executive transportation.',
  },
  {
    q: 'Can I book a black car for an event at the Prudential Center?',
    a: 'Absolutely. Concerts, Devils games, boxing events — we handle event night transportation from Newark and surrounding areas. Book your pickup time in advance for a reliable, comfortable departure from the arena without waiting in cab lines.',
  },
  {
    q: 'Do you serve the entire Newark area, including the Ironbound and North Newark?',
    a: 'Yes — we serve all Newark neighborhoods including the Ironbound/East Ward, Downtown Newark, the Broad Street corridor, North Newark, Weequahic, and the areas surrounding Newark Penn Station. Enter your specific address on the booking page for an instant quote.',
  },
  {
    q: 'Is hourly hire available in Newark and Essex County?',
    a: 'Yes. Hourly hire is available for Newark-based executives who need a dedicated chauffeur for a full day of meetings, multi-stop travel, or client entertainment. Your driver stays with you for the entire booking period with no re-booking required between stops.',
  },
  {
    q: 'How far is Newark from the airport and Manhattan?',
    a: 'Downtown Newark is only about 3 miles from Newark Liberty Airport (EWR) — a 10–15 minute drive — and about 12 miles from Midtown Manhattan (25–45 minutes via the Holland or Lincoln Tunnel). JFK is roughly 25 miles and LaGuardia about 16 miles.',
  },
  {
    q: 'How much does a car service in Newark cost?',
    a: 'Newark transfers are billed as a flat rate confirmed at booking, with all tunnel and airport tolls included and no surge. Whether it is a short EWR run or a trip into Manhattan, enter your destination on the booking page for an exact quote.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'EWR right at your door',
    desc: 'Newark sits minutes from Newark Liberty International — one of the most convenient airport connections in the entire NJ metro area.',
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'No surge pricing for concert nights, early morning flights, or Newark rush hour. Your price is confirmed before you travel.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every Eagle Eye driver is background-checked, TLC-licensed, and held to a strict professional service standard.',
  },
  {
    title: 'All tolls included',
    desc: 'New Jersey Turnpike, Lincoln Tunnel, Holland Tunnel — every applicable toll is built into your flat rate.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your chauffeur&apos;s name and vehicle details in advance for every scheduled trip.',
  },
  {
    title: '24/7 phone & WhatsApp support',
    desc: 'We are reachable around the clock — including for early morning EWR departures and late-night Prudential Center returns.',
  },
];

const services = [
  {
    title: 'EWR Airport Transfers',
    desc: 'Newark to Newark Liberty — the shortest airport run we operate. Flat rate, luggage assistance.',
    href: '/services/airport/ewr',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate door-to-door from Newark NJ to JFK. All tolls included, flight tracking.',
    href: '/services/airport/jfk',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Newark to LaGuardia with a professional chauffeur. No surge pricing.',
    href: '/services/airport/lga',
  },
  {
    title: 'Corporate Car Service',
    desc: 'Executive transportation for Newark&apos;s Broad Street corridor and Ironbound businesses.',
    href: '/services/corporate',
  },
  {
    title: 'Event Transportation',
    desc: 'Prudential Center events, concerts, Devils games — arrive and depart in a luxury black car.',
    href: '/book',
  },
  {
    title: 'Hourly Hire',
    desc: 'A dedicated chauffeur for the full day — meetings, site visits, multi-stop executive travel.',
    href: '/services/hourly',
  },
];

const nearbyAreas = [
  { name: 'Jersey City', href: '/services/areas/jersey-city' },
  { name: 'Hoboken', href: '/services/areas/hoboken' },
  { name: 'Morristown NJ', href: '/services/areas/morristown-nj' },
  { name: 'Short Hills NJ', href: '/services/areas/short-hills-nj' },
  { name: 'Summit NJ', href: '/services/areas/summit-nj' },
  { name: 'EWR Airport', href: '/services/airport/ewr' },
  { name: 'Manhattan', href: '/services/areas/manhattan' },
  { name: 'New Jersey (All Areas)', href: '/services/areas/new-jersey' },
];

export default function NewarkNJPage() {
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
          { name: 'Newark NJ', url: `${siteUrl}/services/areas/newark-nj` },
        ]}
      />
      <ServiceJsonLd
        name="Newark NJ Black Car Service"
        description="Premium black car and chauffeur service in Newark, New Jersey. Airport transfers to EWR, JFK, and LGA. Corporate travel, event transportation, and hourly hire. Flat rates with all tolls included, TLC-licensed chauffeurs, available 24/7."
        areaServed="Newark, Essex County, New Jersey"
        url={`${siteUrl}/services/areas/newark-nj`}
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Newark, NJ — Black Car Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Newark NJ Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
            Professional chauffeur service from Newark to EWR, JFK, LGA, and Manhattan.
            Flat-rate pricing, all tolls included, TLC-licensed chauffeurs available around
            the clock. Newark&apos;s gateway to luxury ground transportation.
          </p>
          <p className="text-brand-silver max-w-2xl mb-10">
            Newark sits at the center of New Jersey&apos;s transportation network — minutes from
            Newark Liberty International Airport and with direct road access to Manhattan, the
            Jersey Shore, and the entire metro region. Eagle Eye Chauffeur serves Newark&apos;s
            corporate community, residents, event-goers, and travelers who need a professional
            black car service they can count on.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Newark NJ</div>
              <div className="text-brand-silver text-sm mt-1">Full city coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Near EWR</div>
              <div className="text-brand-silver text-sm mt-1">Newark Liberty minutes away</div>
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
            Newark Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From rapid EWR airport connections to corporate travel and Prudential Center event
            nights, Eagle Eye serves every Newark ground transportation need.
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
            Newark Airport &amp; City Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Estimated travel times under typical conditions. Your chauffeur monitors live traffic
            and departs at the optimal time for your flight.
          </p>
          <div className="space-y-3">
            {[
              { route: 'Newark → EWR (Newark Liberty Airport)', time: '10–20 min' },
              { route: 'Newark → JFK Airport', time: '45–60 min' },
              { route: 'Newark → LGA (LaGuardia)', time: '40–55 min' },
              { route: 'Newark → Midtown Manhattan', time: '25–40 min' },
              { route: 'Newark → Financial District (NYC)', time: '25–40 min' },
              { route: 'Newark → Morristown NJ', time: '30–40 min' },
              { route: 'Newark → Princeton NJ', time: '45–60 min' },
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
            All rates are flat and confirmed at booking. Tolls included.{' '}
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
            Why Newark Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Newark is New Jersey&apos;s largest city and its transportation hub. Our clients here
            range from corporate executives and business travelers to residents heading to major
            events or catching early morning flights at EWR.
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
            Newark&apos;s Gateway to EWR and the Entire Metro
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            No city in New Jersey has a more direct connection to a major international airport
            than Newark does to EWR. We also serve Newark&apos;s business community, the vibrant
            Ironbound dining district, and the Prudential Center entertainment complex.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-8">
            <ul className="space-y-4 text-brand-grey">
              <li>
                <strong className="text-brand-black">EWR — minutes from your door.</strong>{' '}
                Newark Liberty International Airport is one of the region&apos;s three major airports
                and sits just minutes from the city center. Eagle Eye gets you there quickly,
                comfortably, and without the uncertainty of rideshare surge pricing.
              </li>
              <li>
                <strong className="text-brand-black">Broad Street &amp; Corporate Travel.</strong>{' '}
                Newark&apos;s downtown business corridor is home to law firms, financial institutions,
                and professional services companies. Eagle Eye provides corporate accounts for
                regular executive transportation and client transfer needs.
              </li>
              <li>
                <strong className="text-brand-black">Prudential Center events.</strong>{' '}
                Concert nights and NHL Devils games mean heavy street traffic and long cab queues.
                Pre-book a pickup time with Eagle Eye and your black car is ready and waiting
                when you exit — no standing in line.
              </li>
              <li>
                <strong className="text-brand-black">All of Newark, all neighborhoods.</strong>{' '}
                Ironbound, University Heights, Forest Hill, Vailsburg, the Meadowlands corridor —
                we serve every Newark address with the same flat rate and the same professional
                standard.
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
            Eagle Eye Chauffeur covers all of Essex County and the greater New Jersey metro area.
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
            Newark NJ Black Car Service — Frequently Asked Questions
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
            Book Your Newark Black Car
          </h2>
          <p className="text-brand-silver mb-3 max-w-xl mx-auto">
            Available 24/7 from every Newark address. Flat rates with all tolls included.
            Driver confirmed the night before. No surge pricing.
          </p>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Book online, call us, or message on WhatsApp — we respond around the clock,
            including for early morning EWR departures and late-night event returns.
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
