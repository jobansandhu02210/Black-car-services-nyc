import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'LGA to Westchester Car Service | Airport Transfers',
  description:
    'LaGuardia Airport to Westchester car service — flat rate, flight tracking, TLC licensed. White Plains, Scarsdale, Yonkers, New Rochelle, Rye.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/lga-to-westchester-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/lga-to-westchester-car-service` },
};

const faqs = [
  {
    q: 'How much does a car service from LGA to Westchester cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering LaGuardia as your pickup and your Westchester destination.',
  },
  {
    q: 'How long does it take from LGA to Westchester?',
    a: 'LGA to White Plains is approximately 30–50 minutes via I-678 North and I-95 depending on traffic. Yonkers and New Rochelle are 25–40 minutes. Rye and Greenwich can run 40–55 minutes. Your driver monitors real-time conditions and takes the optimal route.',
  },
  {
    q: 'Does Eagle Eye track my flight at LaGuardia?',
    a: 'Yes. We track your LGA flight in real time. If your arrival is early or delayed, your driver adjusts accordingly. Your flat rate stays the same regardless.',
  },
  {
    q: 'Do you serve Greenwich, CT from LGA?',
    a: 'Yes. Greenwich and Stamford are natural extensions of the Westchester corridor and we serve them regularly. The route from LGA via I-95 connects directly to lower Fairfield County.',
  },
  {
    q: 'Why do some Westchester travelers prefer LGA over Westchester Airport (HPN)?',
    a: 'LGA offers significantly more airline options and nonstop routes than HPN. While HPN is convenient for some, many Westchester residents fly into LGA and use a car service to complete the trip home — avoiding the hassle of renting a car.',
  },
  {
    q: 'Is this service good for corporate travelers to Westchester?',
    a: 'Yes. Westchester County is home to major corporate headquarters including IBM and PepsiCo. We regularly serve business travelers arriving at LGA for meetings in White Plains, Armonk, Purchase, and surrounding corporate campuses. Book in advance for guaranteed availability.',
  },
  {
    q: 'How far is LaGuardia from White Plains and Westchester?',
    a: 'LaGuardia is about 22 miles from White Plains (roughly 30–50 minutes via the Whitestone Bridge and Hutchinson River Parkway). Yonkers and New Rochelle are closer at about 12–18 miles (25–40 minutes), while Rye and the Connecticut border run about 25 miles (40–55 minutes).',
  },
  {
    q: 'What is the driving distance from LGA to specific Westchester towns?',
    a: 'Approximate distances from LaGuardia: Yonkers ~12 miles, New Rochelle ~15 miles, Scarsdale ~18 miles, White Plains ~22 miles, Rye ~25 miles, and Greenwich, CT ~28 miles. All are flat-rate transfers with tolls included and no surge.',
  },
];


export default function LGAToWestchesterPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'LGA to Westchester Car Service', url: `${getSiteUrl()}/services/routes/lga-to-westchester-car-service` },
      ]} />
      <ServiceJsonLd
        name="LaGuardia Airport to Westchester Car Service"
        description="Premium black car service from LaGuardia Airport to Westchester County. Flat rate, real-time flight tracking, 60-minute free wait. White Plains, Scarsdale, Yonkers, New Rochelle, Rye, Greenwich CT and more. TLC licensed. 24/7."
        areaServed="Westchester County, New York"
        url={`${getSiteUrl()}/services/routes/lga-to-westchester-car-service`}
      />

      {/* Hero — dark */}
      <section className="bg-brand-black py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs uppercase tracking-widest mb-3 font-medium">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
            LaGuardia Airport to Westchester Car Service
          </h1>
          <p className="text-lg text-brand-silver mb-8 max-w-2xl">
            Whether you&apos;re heading to a corporate campus in White Plains, a residential address in
            Scarsdale, or across the border to Greenwich, Eagle Eye Chauffeur provides flat-rate
            black car service from LaGuardia directly to Westchester County — with real-time flight
            tracking, a professional chauffeur, and 60 minutes of free wait time included.
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
              Book LGA to Westchester
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
            LGA to Westchester — Destinations &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-6">
            From LGA, your driver heads north via I-678 and I-95 — a direct corridor into Westchester County.
          </p>
          <div className="space-y-3">
            {[
              { from: 'LGA → Yonkers', time: '25–40 min' },
              { from: 'LGA → New Rochelle', time: '25–40 min' },
              { from: 'LGA → White Plains', time: '30–50 min' },
              { from: 'LGA → Scarsdale', time: '30–45 min' },
              { from: 'LGA → Ardsley', time: '35–50 min' },
              { from: 'LGA → Hartsdale', time: '35–50 min' },
              { from: 'LGA → Tarrytown', time: '40–55 min' },
              { from: 'LGA → Rye', time: '40–55 min' },
              { from: 'LGA → Greenwich, CT', time: '45–65 min' },
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
              'Luxury sedan or SUV',
              'TLC licensed & insured',
              'Corporate billing available',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand-black mt-0.5 shrink-0">&#10003;</span>
                <span className="text-brand-grey">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Corporate focus */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Corporate Travel to Westchester from LGA
          </h2>
          <ul className="space-y-4">
            <li className="text-brand-grey">
              <strong className="text-brand-black">Westchester is a major corporate hub</strong> — IBM, PepsiCo, and dozens of Fortune 500 companies are headquartered in White Plains, Armonk, and Purchase. Reliable airport transfers are essential.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Why LGA over HPN (Westchester Airport)</strong> — LGA offers far more airline options, more direct routes, and better pricing. Many executives prefer LGA and rely on ground transport to reach their Westchester destinations.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Confirmed driver before you land</strong> — your chauffeur is assigned and confirmed the night before. No scrambling for a car after a long flight.
            </li>
            <li className="text-brand-grey">
              <strong className="text-brand-black">Recurring account bookings</strong> — businesses needing regular LGA to Westchester transfers can set up ongoing account arrangements. Contact us to discuss.
            </li>
          </ul>
        </div>
      </section>

      {/* Why Eagle Eye */}
      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
            Why Eagle Eye for LGA to Westchester
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Confirmed at Booking', body: 'Your price is locked when you book and never changes — no surprises at peak hours or in bad weather.' },
              { title: '60 Minutes Free Wait After Landing', body: 'Your driver waits up to 60 minutes after touchdown — no rushing through baggage claim.' },
              { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign in the arrivals hall — no walking with luggage.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and knows the Westchester road network well.' },
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
            LGA to Westchester — FAQ
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
            <Link href="/services/areas/westchester" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">Westchester Car Service</div>
              <div className="text-sm text-brand-grey mt-1">All Westchester rides &amp; hourly service</div>
            </Link>
            <Link href="/services/routes/nyc-to-westchester-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
              <div className="font-semibold text-brand-black">NYC to Westchester</div>
              <div className="text-sm text-brand-grey mt-1">City-to-suburb car service</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
            Book Your LGA to Westchester Car Service
          </h2>
          <p className="text-brand-silver mb-8">
            Flat rate. Meet &amp; greet at arrivals. 60-minute free wait. Professional chauffeur.
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
