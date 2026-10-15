import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Queens to Manhattan Car Service',
  description:
    'Queens to Manhattan black car service — flat rates, no surge pricing, TLC licensed chauffeurs. Astoria, Flushing, Jamaica, Forest Hills, Long.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/queens-to-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/queens-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a car service from Queens to Manhattan cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your Queens address and Manhattan destination.',
  },
  {
    q: 'How long does it take from Queens to Manhattan by black car?',
    a: 'Long Island City and Astoria to Midtown is typically 10–25 minutes — the shortest of any outer borough. Flushing to Midtown runs 30–45 minutes; Jamaica to Midtown 35–50 minutes. Your driver takes the fastest route in real time.',
  },
  {
    q: 'Do you serve all Queens neighborhoods?',
    a: 'Yes. We pick up from every Queens neighborhood — Astoria, Flushing, Jamaica, Forest Hills, Long Island City, Bayside, Jackson Heights, Richmond Hill, Ozone Park, Howard Beach, Woodside, Sunnyside, and more.',
  },
  {
    q: 'Can I book a one-way trip from Queens to Manhattan?',
    a: 'Absolutely. One-way point-to-point trips are our most common booking type. Book online for an instant confirmation and flat-rate quote.',
  },
  {
    q: 'Is Queens to Manhattan car service available 24/7?',
    a: 'Yes. Eagle Eye Chauffeur operates around the clock. Early morning departures, late-night returns, and overnight rides are all fully covered with a confirmed driver.',
  },
  {
    q: 'Can I connect a Queens to Manhattan trip with an airport ride?',
    a: 'Yes. We can chain pickups — for example, picking up in Queens, dropping at JFK or LGA, then continuing to Manhattan. Contact us to arrange a multi-stop booking.',
  },
  {
    q: 'How far is Queens from Manhattan?',
    a: 'It depends on the neighborhood, since western Queens sits right across the East River from Manhattan. Long Island City is only about 3 miles from Midtown, Astoria and Sunnyside about 5 miles, Forest Hills about 8 miles, and eastern neighborhoods like Bayside and Jamaica roughly 12–13 miles. Drive times run from about 10 minutes up to 50 minutes in traffic.',
  },
  {
    q: 'How much does a car service from Queens to Manhattan cost?',
    a: 'It is a flat rate confirmed at booking, based on your Queens neighborhood, destination, and vehicle class, with all tolls included and no surge — even during rush hour. Hourly hire is also available for multi-stop days in the city. Enter your trip on the booking page for an exact quote.',
  },
];


export default function QueensToManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Queens to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/queens-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Queens to Manhattan Black Car Service"
        description="Premium black car service from Queens to Manhattan. Flat rates, no surge pricing, TLC licensed chauffeurs. All Queens neighborhoods including Astoria, Flushing, Jamaica, Forest Hills, and Long Island City."
        areaServed="Queens, New York City, NY"
        url={`${getSiteUrl()}/services/routes/queens-to-manhattan-black-car-service`}
      />

      {/* Hero — dark */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            Queens to Manhattan Car Service
          </h1>
          <p className="text-lg text-brand-silver mb-8 max-w-2xl">
            Queens is NYC&apos;s closest borough to Midtown by distance — Long Island City and Astoria
            are minutes from the city. Eagle Eye Chauffeur delivers flat-rate black car service from
            any Queens neighborhood directly to your Manhattan destination, with a professional
            chauffeur and a price confirmed before you book.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All Queens Neighborhoods', 'Flat Rate', '24/7', 'TLC Licensed'].map((stat) => (
              <div key={stat} className="border border-brand-charcoal px-4 py-3 text-center">
                <span className="text-brand-white text-sm font-medium">{stat}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Queens to Manhattan
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-white text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-center"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      {/* Popular sub-routes */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
            Queens to Manhattan: Distances &amp; Drive Times
          </h2>
          <p className="text-brand-grey mb-6">
            Queens is the borough closest to Midtown by geography — Long Island City sits just across the East River (about
            3 miles via the Queensboro/59th Street Bridge or Queens-Midtown Tunnel), and western Queens neighborhoods are
            minutes from the crossings. Times below are off-peak estimates.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Long Island City → Midtown Manhattan', miles: '~3 miles', time: '10–20 min' },
              { from: 'Astoria → Midtown Manhattan', miles: '~5 miles', time: '15–25 min' },
              { from: 'Sunnyside → Midtown Manhattan', miles: '~5 miles', time: '15–25 min' },
              { from: 'Forest Hills → Midtown Manhattan', miles: '~8 miles', time: '20–35 min' },
              { from: 'Flushing → Midtown Manhattan', miles: '~10 miles', time: '30–45 min' },
              { from: 'Jamaica → Midtown Manhattan', miles: '~12 miles', time: '35–50 min' },
              { from: 'Bayside → Midtown Manhattan', miles: '~13 miles', time: '35–50 min' },
              { from: 'Howard Beach → Midtown Manhattan', miles: '~13 miles', time: '35–50 min' },
            ].map((r) => (
              <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
            <Link href="/book" className="underline">Get an instant quote →</Link>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Book Online', desc: 'Enter your Queens pickup address and Manhattan destination. Get an instant flat-rate quote — no surprises.' },
              { step: '2', title: 'Driver Confirmed', desc: 'Your TLC-licensed chauffeur is assigned and confirmed in advance. You receive driver details before pickup.' },
              { step: '3', title: 'Door-to-Door', desc: 'Your driver arrives at your exact Queens address and drops you at your Manhattan destination. Luggage assistance included.' },
            ].map((item) => (
              <div key={item.step} className="bg-brand-offwhite border border-brand-light p-6">
                <div className="text-3xl font-serif font-semibold text-brand-black mb-3">{item.step}</div>
                <div className="font-semibold text-brand-black mb-2">{item.title}</div>
                <p className="text-sm text-brand-grey">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Eagle Eye for Queens to Manhattan
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Confirmed at Booking', body: 'Your price is locked when you book and never changes — no surprises in peak hours or bad weather.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
              { title: 'Exact Door Pickup', body: 'Your driver comes to your Queens address — not a nearby corner or curbside zone.' },
              { title: 'Driver Confirmed in Advance', body: 'You receive your driver details before your pickup day — not minutes before arrival.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-white border border-brand-light p-4">
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Queens to Manhattan — FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                <p className="text-sm text-brand-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/routes/queens-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Queens to JFK</div>
              <div className="text-sm text-brand-grey mt-1">Airport transfers from Queens to JFK</div>
            </Link>
            <Link href="/services/routes/queens-to-lga-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Queens to LGA</div>
              <div className="text-sm text-brand-grey mt-1">Airport transfers from Queens to LaGuardia</div>
            </Link>
            <Link href="/services/areas/queens" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Queens Car Service</div>
              <div className="text-sm text-brand-grey mt-1">All Queens rides &amp; hourly service</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
            Book Your Queens to Manhattan Car Service
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. Professional chauffeur. Instant confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Reserve Now
            </Link>
            <Link
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-white text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              WhatsApp Us
            </Link>
          </div>
          <p className="text-brand-silver mt-6 text-sm">
            Or call{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
