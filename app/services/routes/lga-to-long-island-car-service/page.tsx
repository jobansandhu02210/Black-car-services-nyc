import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'LGA to Long Island Car Service | Nassau & Suffolk',
  description:
    'LaGuardia Airport to Long Island car service — flat rate, flight tracking, TLC licensed. Nassau County, Suffolk County, and the Hamptons. Garden.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/lga-to-long-island-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/lga-to-long-island-car-service` },
};

const faqs = [
  {
    q: 'How much does a car service from LGA to Long Island cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering LaGuardia as your pickup and your Long Island destination.',
  },
  {
    q: 'How long does it take from LGA to Long Island?',
    a: 'LGA to Garden City is approximately 30–40 minutes; LGA to Great Neck 25–35 minutes; LGA to Huntington 40–55 minutes; LGA to Southampton 90–120 minutes. Your driver monitors traffic and takes the most efficient route via the Grand Central Parkway or LIE.',
  },
  {
    q: 'Does Eagle Eye track my flight at LaGuardia?',
    a: 'Yes. We track your LGA flight in real time. If your arrival is early or delayed, your driver adjusts accordingly. Your flat rate stays the same regardless.',
  },
  {
    q: 'Do you serve the Hamptons from LGA?',
    a: 'Yes. We serve the Hamptons including Southampton, East Hampton, Bridgehampton, Water Mill, and Sag Harbor. Hamptons runs from LGA are popular for summer Friday arrivals and Sunday returns.',
  },
  {
    q: 'Is LGA the best airport for Long Island destinations?',
    a: 'For most Nassau County destinations, yes — LGA is the closest NYC airport. It sits directly on the Grand Central Parkway with direct highway access to the LIE and Nassau County. JFK is an alternative for South Shore Long Island destinations.',
  },
  {
    q: 'Are tolls included in the LGA to Long Island rate?',
    a: 'Yes. All applicable tolls are included in your flat rate confirmed at booking. There are no add-on charges for bridge or tunnel tolls.',
  },
];


export default function LGAToLongIslandPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'LGA to Long Island Car Service', url: `${getSiteUrl()}/services/routes/lga-to-long-island-car-service` },
      ]} />
      <ServiceJsonLd
        name="LaGuardia Airport to Long Island Car Service"
        description="Premium black car service from LaGuardia Airport to Long Island. Flat rate, real-time flight tracking, 60-minute free wait. Nassau County, Suffolk County, and the Hamptons. TLC licensed. 24/7."
        areaServed="Long Island, Nassau County, Suffolk County, New York"
        url={`${getSiteUrl()}/services/routes/lga-to-long-island-car-service`}
      />

      {/* Hero — dark */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            LaGuardia Airport to Long Island Car Service
          </h1>
          <p className="text-lg text-brand-silver mb-8 max-w-2xl">
            LGA is the closest NYC airport to Nassau County — with direct highway access via the Grand
            Central Parkway and the Long Island Expressway. Eagle Eye Chauffeur provides flat-rate black
            car service from LaGuardia to all Long Island destinations, from Great Neck to the Hamptons,
            with real-time flight tracking and a professional chauffeur at arrivals.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All LGA Terminals', '60-Min Free Wait', 'Flight Tracking', 'TLC Licensed'].map((stat) => (
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
              Book LGA to Long Island
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

      {/* Popular destinations */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            LGA to Long Island — Destinations &amp; Travel Times
          </h2>

          <h3 className="font-semibold text-brand-black mb-3 mt-2">Nassau County</h3>
          <div className="space-y-3 mb-6">
            {[
              { from: 'LGA → Garden City', time: '30–40 min' },
              { from: 'LGA → Great Neck', time: '25–35 min' },
              { from: 'LGA → Manhasset', time: '25–35 min' },
              { from: 'LGA → Mineola', time: '30–40 min' },
              { from: 'LGA → Hempstead', time: '35–45 min' },
              { from: 'LGA → Rockville Centre', time: '35–50 min' },
            ].map((r) => (
              <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-brand-black mb-3">Suffolk County</h3>
          <div className="space-y-3 mb-6">
            {[
              { from: 'LGA → Melville', time: '40–55 min' },
              { from: 'LGA → Huntington', time: '40–55 min' },
              { from: 'LGA → Smithtown', time: '50–65 min' },
              { from: 'LGA → Hauppauge', time: '45–60 min' },
            ].map((r) => (
              <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>

          <h3 className="font-semibold text-brand-black mb-3">The Hamptons</h3>
          <div className="space-y-3">
            {[
              { from: 'LGA → Southampton', time: '90–120 min' },
              { from: 'LGA → East Hampton', time: '100–130 min' },
            ].map((r) => (
              <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
            <Link href="/book" className="underline">Get an instant quote →</Link>
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            What&apos;s Included in Every Booking
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              'Real-time LGA flight tracking',
              'Meet & greet at LGA arrivals',
              '60-minute free wait after landing',
              'Luggage assistance at arrivals',
              'Flat rate — same price regardless of traffic',
              'All tolls included (Grand Central Pkwy, LIE)',
              'Luxury sedan or SUV',
              'TLC licensed & insured',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand-black mt-0.5 shrink-0">&#10003;</span>
                <span className="text-brand-grey">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why LGA for Long Island */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why LGA Is the Best Airport for Long Island
          </h2>
          <ul className="space-y-4">
            <li className="text-brand-grey">
              <strong className="text-brand-black">Closest NYC airport to Nassau County</strong> — LGA sits on the Grand Central Parkway, which connects directly to the LIE and all major Nassau County arteries.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">No city traffic to fight through</strong> — unlike JFK or EWR, LGA exits directly onto Long Island highway infrastructure, bypassing Midtown entirely.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Direct route via Grand Central Pkwy / LIE</strong> — your driver takes the most efficient path depending on real-time traffic conditions.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Flat rate confirmed at booking</strong> — no matter what happens on the LIE, your price doesn&apos;t change. Book once, travel without worry.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Eagle Eye for LGA to Long Island
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Confirmed at Booking', body: 'Your price is locked when you book and never changes — no surprises at peak hours or in bad weather.' },
              { title: '60 Minutes Free Wait After Landing', body: 'Your driver waits up to 60 minutes after touchdown — no rushing through baggage claim.' },
              { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign in the arrivals hall — no walking with luggage.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and is familiar with Long Island routes and neighborhoods.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
              { title: 'Driver Confirmed the Night Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details the evening before your flight lands.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-4">
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
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            LGA to Long Island — FAQ
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                <p className="text-sm text-brand-grey">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/services/airport/lga" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">LGA Airport Service</div>
              <div className="text-sm text-brand-grey mt-1">Full LaGuardia terminal guide &amp; info</div>
            </Link>
            <Link href="/services/areas/long-island" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Long Island Car Service</div>
              <div className="text-sm text-brand-grey mt-1">All Long Island rides &amp; hourly service</div>
            </Link>
            <Link href="/services/routes/jfk-to-long-island-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">JFK to Long Island</div>
              <div className="text-sm text-brand-grey mt-1">Airport transfers from JFK to Long Island</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
            Book Your LGA to Long Island Car Service
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. Meet &amp; greet at arrivals. 60-minute free wait. All tolls included.
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
