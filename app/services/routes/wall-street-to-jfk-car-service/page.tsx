import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Wall Street to JFK Car Service | FiDi Car',
  description:
    'Wall Street to JFK black car service — flat rate, door-to-door pickup from Financial District, FiDi & lower Manhattan. Professional chauffeurs.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/wall-street-to-jfk-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'Wall Street to JFK Car Service | FiDi Car | Eagle Eye',
    description: 'Flat-rate black car service from Wall Street, FiDi & lower Manhattan to JFK Airport. No surge pricing — ever. Professional chauffeur, 24/7.',
    url: `${getSiteUrl()}/services/routes/wall-street-to-jfk-car-service`,
  },
};

const faqs = [
  {
    q: 'How far is Wall Street from JFK, and how long does it take?',
    a: 'Wall Street and the Financial District are approximately 14 miles from JFK Airport. The drive typically takes 35–50 minutes in normal traffic via the Brooklyn-Queens Expressway or the Belt Parkway. During the morning rush hour (7–9 AM), allow 50–70 minutes. Pre-market departures before 6 AM can clear the trip in under 35 minutes. We monitor traffic conditions and your chauffeur selects the fastest route at the time of pickup.',
  },
  {
    q: 'Is there a flat rate from the Financial District to JFK?',
    a: 'Yes. Eagle Eye Chauffeur operates on flat rates confirmed at the time of booking — not metered, not surge-priced. The rate you see when you reserve is the rate you pay, regardless of traffic, time of day, or demand. This is especially important for finance professionals who need cost certainty for expense reporting.',
  },
  {
    q: 'Do you accommodate early morning pre-market departures from FiDi?',
    a: 'Absolutely. We operate 24 hours a day, 7 days a week. Many of our Wall Street and Financial District clients book 4 AM, 5 AM, or 6 AM pickups for early morning flights before markets open. Your driver is confirmed the evening before, and we guarantee arrival at your door on schedule regardless of the hour.',
  },
  {
    q: 'Can I book a black car for executive travel from Wall Street?',
    a: 'Yes — corporate and executive travel is our primary clientele in the Financial District. We support corporate accounts with monthly consolidated invoicing, multi-passenger bookings, and executive sedan or SUV options. Contact us directly to set up a business account for your firm or fund.',
  },
  {
    q: 'Why not drive myself or park near Wall Street for a flight?',
    a: 'Parking in the Financial District and Lower Manhattan is among the most expensive and scarce in the city. A round-trip to JFK including airport parking can quickly exceed the cost of a professional car service — with none of the productivity or comfort. Your chauffeur picks you up at the building door, handles luggage, and has you to JFK without the stress of traffic or parking.',
  },
];

export default function WallStreetToJFKPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Wall Street to JFK Car Service', url: `${getSiteUrl()}/services/routes/wall-street-to-jfk-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Wall Street to JFK Car Service"
        description="Premium black car service from Wall Street, Financial District, and FiDi to JFK Airport. Flat-rate pricing, door-to-door executive chauffeur, 24/7 availability for pre-market and early morning departures."
        areaServed="Financial District, Wall Street, Lower Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/wall-street-to-jfk-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Financial District · FiDi · Lower Manhattan
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Wall Street to JFK Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            When markets open at 9:30, your flight can&apos;t wait. Eagle Eye Chauffeur provides
            flat-rate, door-to-door black car service from the NYSE, Financial District, and all
            of FiDi to JFK Airport — available at 4 AM for the early departures that define the
            finance world.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">35–50 min</div>
              <div className="text-brand-silver text-sm mt-1">Wall St to JFK</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flat Rate</div>
              <div className="text-brand-silver text-sm mt-1">No surge, ever</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-market departures</div>
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
              Book Wall Street to JFK
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

      {/* ── Routes Table ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Financial District to JFK — Pickup Locations &amp; Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            We pick up at every address in the Financial District. Estimated times are off-peak;
            allow additional time during morning rush or after a market event.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Wall St / NYSE → JFK Airport', time: '35–50 min' },
              { from: 'One World Trade Center → JFK Airport', time: '35–50 min' },
              { from: 'Fulton Center / Fulton St → JFK Airport', time: '35–50 min' },
              { from: 'South Street Seaport → JFK Airport', time: '35–50 min' },
              { from: 'Broad St / Exchange Place → JFK Airport', time: '35–50 min' },
              { from: 'Water Street Corridor → JFK Airport', time: '35–50 min' },
              { from: 'Bowling Green / Battery Park → JFK Airport', time: '35–50 min' },
              { from: 'Rector St / Trinity Place → JFK Airport', time: '35–50 min' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex justify-between items-center"
              >
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Times are off-peak estimates. Traffic varies — book early morning for pre-market
            certainty.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get a flat-rate quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included in Every Wall Street to JFK Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Finance professionals expect precision and no surprises. Every Eagle Eye booking delivers
            exactly that — from the moment you confirm to wheels-down at JFK.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Building door pickup',
                desc: 'Your chauffeur arrives at your FiDi building entrance — not a block away, not at a curbside zone. Door-to-door, literally.',
              },
              {
                title: 'Flat rate locked at booking',
                desc: 'Your price is confirmed when you reserve. No surge pricing, no metered uncertainty. Ideal for corporate expense reporting.',
              },
              {
                title: 'Driver confirmed the evening before',
                desc: 'You receive your chauffeur\'s name, vehicle, and contact the night before — no morning anxiety about whether your ride is coming.',
              },
              {
                title: 'Luxury sedan or executive SUV',
                desc: 'Travel in a clean, premium black car every time. Business class sedan or full-size SUV with ample luggage space.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your chauffeur handles bags from lobby to trunk and from trunk to check-in curb at JFK — no juggling required.',
              },
              {
                title: '24/7 availability — including 4 AM',
                desc: 'Pre-market departures, red-eyes, dawn flights. We are operating at every hour finance requires — any day of the year.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 bg-brand-offwhite border border-brand-light">
                <span className="text-brand-black font-semibold mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-brand-black mb-1">{item.title}</div>
                  <div className="text-sm text-brand-grey">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Wall Street Professionals Choose Eagle Eye Chauffeur
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Financial District operates on precision timing. Your transportation should too.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'No Parking Stress in FiDi', body: 'Parking in the Financial District is among the scarcest and most expensive in Manhattan. A chauffeur eliminates the cost and time entirely.' },
              { title: 'Flat Rate for Expense Reports', body: 'Finance teams need predictable costs. Our confirmed flat rate requires no receipt surprises or surge-pricing disputes on corporate cards.' },
              { title: 'Pre-Market Flight Coverage', body: 'We specialize in early-morning departures — 4 AM, 5 AM, 6 AM. Your driver arrives on time, every time, regardless of hour.' },
              { title: 'Executive Billing & Accounts', body: 'Corporate accounts with monthly invoicing, multi-passenger coordination, and detailed trip records for compliance and reporting.' },
              { title: 'Work-Ready Back Seat', body: 'Review decks, take calls, or decompress in a quiet, private cabin — not a rideshare pool with strangers and unpredictable vehicles.' },
              { title: 'Driver Assigned in Advance', body: 'Your chauffeur is confirmed the night before departure — not matched moments before pickup. Reliability when the stakes are high.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-white border border-brand-light p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Wall Street to JFK — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Financial District clients booking JFK car service.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/jfk-to-manhattan-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">JFK to Manhattan</div>
              <div className="text-sm text-brand-grey">Arrivals — meet &amp; greet at JFK</div>
            </Link>
            <Link
              href="/services/routes/midtown-to-jfk-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Midtown to JFK</div>
              <div className="text-sm text-brand-grey">Flat-rate black car from all Midtown</div>
            </Link>
            <Link
              href="/services/airport/jfk"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">All JFK terminals &amp; routes</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Wall Street to JFK Black Car
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. No surge. Confirmed chauffeur at your FiDi building — any hour, any day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Reserve Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-10 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Prefer to call?{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
            {' '}·{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
