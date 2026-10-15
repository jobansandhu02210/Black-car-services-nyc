import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { FaqJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import {
  WHATSAPP_BOOKING_URL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'NYC Car Service Pricing & Rates | Flat-Rate Black Car',
  description:
    'Eagle Eye Chauffeur NYC pricing — flat-rate black car, no surge pricing. Rates for JFK, LGA, EWR airport transfers, corporate rides & hourly hire.',
  alternates: { canonical: `${getSiteUrl()}/pricing` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/pricing`,
    title: 'NYC Car Service Pricing & Rates | Eagle Eye Chauffeur',
    description:
      'Flat-rate black car service pricing in NYC. Airport transfers, corporate rides, hourly hire — no surge pricing. Get an instant quote.',
  },
};

const faqs = [
  {
    q: 'Are there any hidden fees in your pricing?',
    a: 'No. Your quoted price includes the ride and all tolls. There are no hidden fees, no airport surcharges, and no fuel surcharges added at the end. What you see at booking is what you pay. Gratuity is optional and appreciated but never required.',
  },
  {
    q: 'Do you charge surge pricing?',
    a: 'Never. Eagle Eye Chauffeur is a flat-rate service. Your fare is locked the moment you book and does not change based on traffic, weather, time of day, or demand. This is fundamentally different from rideshare apps like Uber or Lyft.',
  },
  {
    q: 'What is included in an airport transfer price?',
    a: 'All airport transfers include the ride, all tolls, real-time flight tracking, and meet-and-greet service at arrivals with a name sign and luggage assistance. No extras, no surprises.',
  },
  {
    q: 'Are tolls included in the quoted price?',
    a: 'Yes. All tolls — including NJ Turnpike for Newark trips, bridge and tunnel tolls for NYC, and airport fees — are included in your quoted price.',
  },
  {
    q: 'How do I get an exact price?',
    a: 'Use our online booking form to get an instant flat-rate quote for your specific route, vehicle class, and date. Or call / WhatsApp us and we will give you a quote immediately.',
  },
  {
    q: 'What is the difference between Business Class and First Class?',
    a: 'Business Class includes luxury sedans (Lincoln, Cadillac) and mid-size SUVs — ideal for airport transfers and corporate rides. First Class includes premium full-size SUVs (Escalade, Suburban) with maximum interior space and amenities — ideal for VIP clients, groups, or long-distance rides.',
  },
  {
    q: 'Do you charge extra for early morning or late night rides?',
    a: 'No. Eagle Eye Chauffeur operates 24/7 at the same flat rate regardless of time. A 4 AM airport pickup costs the same as a midday ride.',
  },
];

const routes = [
  { from: 'JFK Airport', to: 'Midtown Manhattan', time: '45–75 min', note: 'Most popular route' },
  { from: 'JFK Airport', to: 'Brooklyn', time: '25–50 min', note: 'Flat rate, tolls included' },
  { from: 'JFK Airport', to: 'Long Island (Nassau)', time: '30–50 min', note: 'No bridge tolls' },
  { from: 'LaGuardia (LGA)', to: 'Midtown Manhattan', time: '20–40 min', note: 'Closest airport to Midtown' },
  { from: 'LaGuardia (LGA)', to: 'Brooklyn', time: '30–50 min', note: 'Flat rate' },
  { from: 'Newark (EWR)', to: 'Midtown Manhattan', time: '30–50 min', note: 'NJ Turnpike tolls included' },
  { from: 'Newark (EWR)', to: 'Brooklyn', time: '40–60 min', note: 'All tolls included' },
  { from: 'Manhattan', to: 'Hamptons', time: '2–3 hrs', note: 'Weekend / event service' },
  { from: 'Manhattan', to: 'Westchester', time: '30–60 min', note: 'Corporate commuter route' },
  { from: 'Manhattan', to: 'Greenwich CT', time: '45–75 min', note: 'Finance corridor' },
];

const vehicles = [
  {
    class: 'Business Class Sedan',
    capacity: 'Up to 3 passengers',
    luggage: '3 standard bags',
    best: 'Airport transfers, corporate rides, solo executives',
    examples: 'Lincoln Continental, Cadillac CT6',
  },
  {
    class: 'Business Class SUV',
    capacity: 'Up to 6 passengers',
    luggage: '6 standard bags',
    best: 'Families, small groups, airport with extra luggage',
    examples: 'Cadillac Escalade, Lincoln Navigator',
  },
  {
    class: 'First Class SUV',
    capacity: 'Up to 6 passengers',
    luggage: '6+ standard bags',
    best: 'VIP clients, long-distance rides, maximum comfort',
    examples: 'Cadillac Escalade ESV, Chevrolet Suburban',
  },
  {
    class: 'First Class Sedan',
    capacity: 'Up to 3 passengers',
    luggage: '3 standard bags',
    best: 'Top executives, high-profile events, discretion required',
    examples: 'Mercedes S-Class, BMW 7 Series',
  },
];

export default function PricingPage() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'Pricing', url: `${siteUrl}/pricing` },
  ];

  return (
    <>
      <ServiceJsonLd
        name="NYC Black Car Service Pricing"
        description="Flat-rate black car service pricing in New York City. Airport transfers to JFK, LGA, and EWR, corporate rides, hourly hire, and point-to-point service — all with no surge pricing."
        areaServed="New York City, NY"
        url={`${siteUrl}/pricing`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm tracking-widest uppercase mb-4 font-medium">
            No Surge · No Hidden Fees · Price Locked at Booking
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mb-6">
            NYC Car Service Pricing
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-10">
            Eagle Eye Chauffeur uses flat-rate pricing — your fare is confirmed at booking and never changes. No surge pricing, no hidden fees, no metered surprises. All tolls included.
          </p>
          <Link
            href="/book"
            className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors"
          >
            Get My Instant Quote
          </Link>
        </div>
      </section>

      {/* HOW PRICING WORKS */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { step: '1', title: 'Enter Your Route', body: 'Input your pickup, drop-off, date, and time on our booking page.' },
              { step: '2', title: 'Get a Flat Quote', body: 'Your all-inclusive price appears instantly — tolls, meet & greet, everything.' },
              { step: '3', title: 'Price Never Changes', body: 'Once confirmed, your fare is locked. No surprises at drop-off.' },
            ].map((s) => (
              <div key={s.step} className="bg-brand-white border border-brand-light p-8">
                <div className="w-10 h-10 bg-brand-black text-brand-white rounded-full flex items-center justify-center font-semibold text-sm mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-brand-black mb-2">{s.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VEHICLE CLASSES */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black">Vehicle Classes & Capacity</h2>
            <p className="mt-4 text-brand-grey max-w-xl mx-auto text-sm leading-relaxed">
              Choose the class that fits your group size and occasion. All vehicles are late-model, immaculate, and driven by TLC-licensed professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {vehicles.map((v) => (
              <div key={v.class} className="border border-brand-light bg-brand-offwhite p-8">
                <h3 className="font-semibold text-brand-black text-lg mb-4">{v.class}</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex gap-3"><dt className="text-brand-silver w-28 shrink-0">Passengers</dt><dd className="text-brand-grey">{v.capacity}</dd></div>
                  <div className="flex gap-3"><dt className="text-brand-silver w-28 shrink-0">Luggage</dt><dd className="text-brand-grey">{v.luggage}</dd></div>
                  <div className="flex gap-3"><dt className="text-brand-silver w-28 shrink-0">Best for</dt><dd className="text-brand-grey">{v.best}</dd></div>
                  <div className="flex gap-3"><dt className="text-brand-silver w-28 shrink-0">Examples</dt><dd className="text-brand-grey">{v.examples}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES ESTIMATE TABLE */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-semibold text-brand-black">Popular NYC Routes — Drive Times</h2>
            <p className="mt-3 text-brand-grey text-sm">
              Pricing depends on your exact route and vehicle class. Use our booking page for an instant flat-rate quote.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-brand-white">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left px-5 py-3 font-semibold">From</th>
                  <th className="text-left px-5 py-3 font-semibold">To</th>
                  <th className="text-left px-5 py-3 font-semibold">Typical Drive</th>
                  <th className="text-left px-5 py-3 font-semibold">Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-light">
                {routes.map((r) => (
                  <tr key={`${r.from}-${r.to}`} className="hover:bg-brand-offwhite transition-colors">
                    <td className="px-5 py-3 text-brand-black font-medium">{r.from}</td>
                    <td className="px-5 py-3 text-brand-grey">{r.to}</td>
                    <td className="px-5 py-3 text-brand-grey">{r.time}</td>
                    <td className="px-5 py-3 text-brand-silver text-xs">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-brand-silver text-center">
            Drive times are estimates based on typical traffic conditions. Your flat-rate fare is calculated on your specific route — get an instant quote below.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-brand-white py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-10">
            What Is Included in Every Ride
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Flat-rate price, confirmed at booking',
              'All tolls and bridge fees',
              'Meet & greet at airport arrivals',
              'Name sign at arrivals',
              'Luggage assistance',
              'Real-time flight tracking',
              'Professional TLC-licensed chauffeur',
              'Luxury late-model vehicle',
              'No surge pricing — ever',
              '24/7 availability at same rate',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-brand-grey">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-offwhite py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            Pricing FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-brand-light pb-8">
                <h3 className="font-semibold text-brand-black mb-3">{faq.q}</h3>
                <p className="text-brand-grey leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Get Your Flat-Rate Quote Now
          </h2>
          <p className="text-brand-silver mb-8 leading-relaxed">
            Enter your pickup and drop-off and get an instant price — no account needed, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors"
            >
              Get Instant Quote
            </Link>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors"
            >
              Call {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
