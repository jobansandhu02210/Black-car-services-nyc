import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Princeton NJ Car Service | NYC & Airport Transfers',
  description:
    'Princeton NJ black car service — airport transfers to EWR & JFK, NYC rides, Princeton University & Route 1 corporate campuses. TLC-licensed.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/princeton-nj` },
  openGraph: {
    ...ogDefaults,
    title: 'Princeton NJ Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Princeton NJ black car service — airport transfers to EWR & JFK, NYC rides, Princeton University & Route 1 corporate campuses. TLC-licensed.',
    url: `${getSiteUrl()}/services/areas/princeton-nj`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long does it take from Princeton NJ to Newark Airport (EWR)?',
    a: 'Princeton to Newark Liberty International Airport typically takes 35–50 minutes via the New Jersey Turnpike. EWR is the closest major airport to Princeton and the most popular choice for our Central NJ clients — particularly for business travel and international flights. Your chauffeur monitors live conditions and departs at the right time for your flight.',
  },
  {
    q: 'How long is the ride from Princeton to JFK Airport?',
    a: 'Princeton to JFK is approximately 60–80 minutes under normal traffic conditions. We recommend allowing at least 3.5 hours before international departures. All applicable tolls — New Jersey Turnpike, toll bridges — are included in your flat rate confirmed at booking.',
  },
  {
    q: 'Do you provide car service from Princeton to Manhattan?',
    a: 'Yes. Princeton to Midtown Manhattan typically takes 60–75 minutes via the New Jersey Turnpike and Lincoln Tunnel. We serve Princeton residents, corporate professionals, and university visitors who prefer a comfortable, direct black car over the train into New York City. All tolls are included.',
  },
  {
    q: 'Do you serve Princeton University for campus car service?',
    a: 'Yes. We provide car service for Princeton University faculty, administrators, visiting scholars, and guests — including transfers to and from EWR, JFK, and LGA, and direct rides to and from Manhattan. University guests can be met at Nassau Hall or any campus address. Book online or contact us directly.',
  },
  {
    q: 'Do you serve Route 1 corporate campuses near Princeton?',
    a: 'Yes. The Route 1 corridor between Princeton and New Brunswick is home to major pharmaceutical, biotech, and technology company campuses — including Johnson & Johnson, Bristol Myers Squibb, and many others. We serve executive transportation needs for these companies and offer corporate accounts for regular travel.',
  },
  {
    q: 'What airports do you serve from Princeton, NJ?',
    a: 'From Princeton we serve all four major New York area airports: Newark Liberty (EWR, closest — 35–50 min), JFK International (60–80 min), LaGuardia (LGA, 65–80 min), and Westchester County Airport (HPN, 90–110 min). EWR is generally the most convenient for Central NJ travelers.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Central NJ specialist',
    desc: 'We know the Route 1 corridor, the Turnpike exchanges, and the fastest routes from Princeton to EWR, JFK, and Manhattan.',
  },
  {
    title: 'Flat rate locked at booking',
    desc: 'Your price is confirmed before you travel — no surge pricing, no toll surprises. Turnpike tolls are always included.',
  },
  {
    title: 'TLC-licensed professional chauffeur',
    desc: 'Every Eagle Eye driver is background-checked, TLC-licensed, and held to a white-glove service standard.',
  },
  {
    title: 'Door-to-door at your exact address',
    desc: 'Home in Princeton Junction, campus on Nassau Street, or a Route 1 corporate campus — we come to your door.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your driver&apos;s name, photo, and vehicle details in advance — no morning uncertainty.',
  },
  {
    title: '24/7 availability',
    desc: 'Early morning EWR departures, late-night arrivals — we operate around the clock for Princeton-area clients.',
  },
];

const services = [
  {
    title: 'EWR Airport Transfers',
    desc: 'Princeton to Newark Liberty — the most direct airport connection from Central NJ. Flat rate, tolls in.',
    href: '/services/airport/ewr',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate door-to-door from Princeton to JFK. All Turnpike and bridge tolls included.',
    href: '/services/airport/jfk',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Princeton to LaGuardia with a professional chauffeur. Flat rate confirmed before you travel.',
    href: '/services/airport/lga',
  },
  {
    title: 'Princeton to NYC Car Service',
    desc: 'Direct from Princeton to any Manhattan address. Corporate, leisure, or university travel.',
    href: '/services/areas/manhattan',
  },
  {
    title: 'Corporate & University Travel',
    desc: 'Corporate accounts for Route 1 campuses and Princeton University — executive-level service.',
    href: '/services/corporate',
  },
  {
    title: 'Hourly Hire',
    desc: 'Dedicated chauffeur for Princeton-area meetings, campus visits, or full-day executive travel.',
    href: '/services/hourly',
  },
];

const nearbyAreas = [
  { name: 'Morristown NJ', href: '/services/areas/morristown-nj' },
  { name: 'Summit NJ', href: '/services/areas/summit-nj' },
  { name: 'Short Hills NJ', href: '/services/areas/short-hills-nj' },
  { name: 'Newark NJ', href: '/services/areas/newark-nj' },
  { name: 'EWR Airport', href: '/services/airport/ewr' },
  { name: 'Manhattan', href: '/services/areas/manhattan' },
  { name: 'New Jersey (All Areas)', href: '/services/areas/new-jersey' },
  { name: 'JFK Airport', href: '/services/airport/jfk' },
];

export default function PrincetonNJPage() {
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
          { name: 'Princeton NJ', url: `${siteUrl}/services/areas/princeton-nj` },
        ]}
      />
      <ServiceJsonLd
        name="Princeton NJ Black Car Service"
        description="Premium black car and chauffeur service in Princeton, NJ. Airport transfers to EWR, JFK, and LGA. NYC rides, Princeton University transfers, and corporate service for Route 1 campuses. Flat rates with all tolls included, TLC-licensed chauffeurs, 24/7."
        areaServed="Princeton, Mercer County, Central New Jersey"
        url={`${siteUrl}/services/areas/princeton-nj`}
      />

      {/* Hero */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Princeton, NJ — Black Car Service
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Princeton NJ Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-6 leading-relaxed">
            Professional chauffeur service from Princeton to EWR, JFK, LGA, and Manhattan.
            Serving Princeton University, Route 1 corporate campuses, and residential clients
            throughout Central New Jersey. Flat rates, all tolls included, 24/7.
          </p>
          <p className="text-brand-silver max-w-2xl mb-10">
            Princeton sits at the heart of New Jersey&apos;s pharma, biotech, and academic corridor.
            Whether you need an early morning EWR transfer from your Princeton Junction home,
            a sedan for a visiting scholar, or regular executive transportation for a Route 1
            campus, Eagle Eye Chauffeur is Central NJ&apos;s trusted luxury car service.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Princeton NJ</div>
              <div className="text-brand-silver text-sm mt-1">Full area coverage</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Central NJ</div>
              <div className="text-brand-silver text-sm mt-1">Mercer &amp; Middlesex Counties</div>
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
            Princeton Black Car Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From EWR airport transfers for early morning departures to corporate campus transportation
            along the Route 1 corridor, we cover every need for Princeton-area travelers and businesses.
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
            Princeton Airport &amp; City Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Estimated travel times under normal traffic. Your driver monitors live conditions and
            departs at the optimal time for your flight.
          </p>
          <div className="space-y-3">
            {[
              { route: 'Princeton → EWR (Newark Liberty Airport)', time: '35–50 min' },
              { route: 'Princeton → JFK Airport', time: '60–80 min' },
              { route: 'Princeton → LGA (LaGuardia)', time: '65–80 min' },
              { route: 'Princeton → Midtown Manhattan', time: '60–75 min' },
              { route: 'Princeton → Financial District (NYC)', time: '65–80 min' },
              { route: 'Princeton → Morristown NJ', time: '40–55 min' },
              { route: 'Princeton → Newark NJ', time: '40–55 min' },
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
            All rates are flat. NJ Turnpike and all tolls included.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* Transit Comparison */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold mb-3">
            Black Car vs. NJ Transit from Princeton
          </h2>
          <p className="text-brand-silver mb-8 max-w-2xl">
            Princeton is served by the NJ Transit Princeton Junction station on the Northeast Corridor. For some trips, the train works well. For airport transfers and professional travel, the comparison changes.
          </p>
          <div className="space-y-4">
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">EWR via NJ Transit — viable in limited scenarios</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                NJ Transit connects Princeton Junction to Newark Liberty Airport via the Northeast Corridor with a transfer to the AirTrain at the EWR station. This works for mid-day travel with minimal luggage. Total journey time is typically 55–70 minutes from Princeton Junction to the terminal — similar to a black car. However, the train requires parking at Princeton Junction, scheduling around train times, managing luggage on platforms, and hoping the service runs on time. Eagle Eye picks you up at your exact address — home, office, or campus building.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">JFK and LGA — no practical transit option</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Reaching JFK from Princeton by transit requires NJ Transit to Newark Penn Station, then NJ Transit to Manhattan Penn Station, then the A train to Howard Beach and the JFK AirTrain — a 2.5-to-3-hour journey. There is no practical transit route to LaGuardia from Central NJ. A black car from Princeton to JFK takes 60–80 minutes door-to-terminal.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Princeton to Manhattan</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                The NJ Transit Princeton Junction to New York Penn Station train takes approximately 70–80 minutes and requires a walk or ride to the station. A black car from Princeton to Midtown takes 60–75 minutes door-to-door, with no parking, no transfers, and no luggage handling. For executives, university guests, and visitors arriving or departing from specific Manhattan addresses, the black car is often the faster and always the more comfortable option.
              </p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Corporate and campus travel</div>
              <p className="text-brand-silver text-sm leading-relaxed">
                Route 1 pharmaceutical and biotech campuses are not served by NJ Transit at the campus level — they are typically a drive from any station. Eagle Eye provides door-to-campus pickup and drop-off for Route 1 executives and Princeton University visitors, eliminating the need for a rental car or parking at the station.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Princeton Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Princeton&apos;s executive and academic community expects a certain standard — from the
            quality of the vehicle to the professionalism of the driver. Here&apos;s what we deliver.
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
            Princeton University, Route 1 &amp; Central NJ Corporate Travel
          </h2>
          <p className="text-brand-grey mb-6 max-w-2xl">
            Princeton&apos;s unique blend of world-class university, pharmaceutical giants, and affluent
            residential neighborhoods creates a diverse set of black car service needs. Eagle Eye
            understands all of them.
          </p>
          <div className="bg-brand-offwhite border border-brand-light p-8">
            <ul className="space-y-4 text-brand-grey">
              <li>
                <strong className="text-brand-black">Princeton University guests &amp; faculty.</strong>{' '}
                We transport visiting scholars, conference attendees, board members, and
                administrators between campus, EWR, JFK, and Manhattan. University guests are
                met at specific campus buildings — Nassau Hall, Frist Campus Center, or wherever
                you specify.
              </li>
              <li>
                <strong className="text-brand-black">Route 1 pharma &amp; biotech corridor.</strong>{' '}
                The stretch of US Route 1 from Princeton south through New Brunswick and north
                through Plainsboro is home to some of the world&apos;s largest pharmaceutical and
                biotech campuses. Eagle Eye provides corporate accounts and dedicated executive
                transportation for these companies.
              </li>
              <li>
                <strong className="text-brand-black">EWR — the natural Princeton airport.</strong>{' '}
                For Central NJ travelers, Newark Liberty is typically 20–30 minutes closer than JFK
                and offers strong international service. Our Princeton-to-EWR run is one of our
                most-booked Central NJ routes.
              </li>
              <li>
                <strong className="text-brand-black">Princeton Junction, West Windsor &amp; beyond.</strong>{' '}
                We serve all of Mercer County and surrounding Middlesex, Somerset, and Monmouth
                Counties. Enter your address on the booking page for an instant flat-rate quote.
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
            Eagle Eye Chauffeur covers all of Central New Jersey and the full metro area.
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

      {/* Common Routes Table */}
      <section className="bg-brand-offwhite py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Princeton</h2>
          <p className="text-brand-grey text-sm mb-6">Estimated drive times in normal traffic — flat rate confirmed at booking.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left p-4 font-medium">Destination</th>
                  <th className="text-left p-4 font-medium">Est. Drive Time</th>
                  <th className="text-left p-4 font-medium">Service</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">EWR Airport</td>
                  <td className="p-4 text-brand-grey">45–60 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer (closest airport to Princeton)</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">JFK Airport</td>
                  <td className="p-4 text-brand-grey">75–90 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">LGA Airport</td>
                  <td className="p-4 text-brand-grey">75–90 min</td>
                  <td className="p-4 text-brand-grey">Airport Transfer</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">Manhattan (Midtown)</td>
                  <td className="p-4 text-brand-grey">65–80 min</td>
                  <td className="p-4 text-brand-grey">Long Distance</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">Manhattan (Financial District)</td>
                  <td className="p-4 text-brand-grey">65–80 min</td>
                  <td className="p-4 text-brand-grey">Long Distance</td>
                </tr>
                <tr className="bg-brand-offwhite">
                  <td className="p-4 text-brand-black font-medium">Newark (city)</td>
                  <td className="p-4 text-brand-grey">45–60 min</td>
                  <td className="p-4 text-brand-grey">Point-to-Point</td>
                </tr>
                <tr className="bg-brand-white">
                  <td className="p-4 text-brand-black font-medium">Philadelphia (PHL area)</td>
                  <td className="p-4 text-brand-grey">50–65 min</td>
                  <td className="p-4 text-brand-grey">Long Distance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Princeton NJ Black Car Service — Frequently Asked Questions
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
            Book Your Princeton Black Car
          </h2>
          <p className="text-brand-silver mb-3 max-w-xl mx-auto">
            Available 24/7 from every Princeton-area address. Flat rates with all tolls included.
            Driver confirmed the night before. No surge pricing.
          </p>
          <p className="text-brand-silver mb-8 max-w-xl mx-auto">
            Book online, call us, or message on WhatsApp — we respond around the clock,
            including for early morning EWR departures from Central NJ.
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
