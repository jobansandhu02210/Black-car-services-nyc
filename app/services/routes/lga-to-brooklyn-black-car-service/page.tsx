import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'LGA to Brooklyn Car Service | LaGuardia Car',
  description:
    'LaGuardia to Brooklyn car service — flat rates, real-time flight tracking, meet & greet at arrivals. Professional TLC-licensed chauffeur, no surge.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/lga-to-brooklyn-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/lga-to-brooklyn-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a car service from LGA to Brooklyn cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your LGA terminal and Brooklyn destination.',
  },
  {
    q: 'Where does my chauffeur meet me at LaGuardia Airport?',
    a: 'Your chauffeur meets you in the arrivals area with a name sign, just past baggage claim. We cover Terminal B and Terminal C/D. You get a WhatsApp message with the exact meeting spot before you land.',
  },
  {
    q: 'How long does it take from LGA to Brooklyn?',
    a: 'Depending on your Brooklyn destination and traffic, expect 25–50 minutes. Williamsburg and DUMBO are typically 25–35 minutes; Park Slope and Bay Ridge can be 35–50 minutes in normal traffic.',
  },
  {
    q: 'Do you serve all Brooklyn neighborhoods?',
    a: 'Yes. We serve every Brooklyn neighborhood — Williamsburg, DUMBO, Park Slope, Brooklyn Heights, Bay Ridge, Flatbush, Bushwick, Sunset Park, and more. No area surcharges.',
  },
  {
    q: 'What if my LGA flight is delayed?',
    a: 'We track your flight in real time and adjust your pickup automatically. No extra charge for delays, and 60 minutes of complimentary wait time is included after you land. Your driver is always there when you land.',
  },
  {
    q: 'How far is LaGuardia from Brooklyn?',
    a: 'LaGuardia is in northern Queens, so it is about 9 to 15 miles from Brooklyn depending on the neighborhood. North Brooklyn — Bushwick, Williamsburg, DUMBO — is closest at roughly 9–11 miles, while southern neighborhoods like Bay Ridge are about 15 miles. The drive typically takes 25–55 minutes via the BQE.',
  },
  {
    q: 'How much does a car service from LGA to Brooklyn cost?',
    a: 'It is a flat rate confirmed at booking, based on your Brooklyn neighborhood and vehicle class, with all tolls included and no surge. A pre-booked black car with meet-and-greet is often comparable to a surge-priced rideshare and far more predictable after a flight. Enter your destination on the booking page for an exact quote.',
  },
];


export default function LGAToBrooklynBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'LGA to Brooklyn Black Car Service', url: `${getSiteUrl()}/services/routes/lga-to-brooklyn-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="LGA to Brooklyn Black Car Service"
        description="Premium black car service from LaGuardia Airport to Brooklyn. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Brooklyn, New York City, NY"
        url={`${getSiteUrl()}/services/routes/lga-to-brooklyn-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              LaGuardia to Brooklyn Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Eagle Eye Chauffeur provides flat-rate black car
              service from LaGuardia Airport directly to any Brooklyn neighborhood — with a professional
              chauffeur waiting at arrivals the moment you clear baggage claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book LGA to Brooklyn
              </Link>
              <Link href="/services/airport/lga" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All LGA Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              LGA to Brooklyn: Distances &amp; Drive Times
            </h2>
            <p className="text-brand-grey mb-6 max-w-2xl">
              LaGuardia is in northern Queens, so the drive to Brooklyn crosses the borough — typically 9 to 15 miles
              via the BQE or Grand Central Parkway depending on your neighborhood. North Brooklyn (Williamsburg, Bushwick,
              DUMBO) is closest; southern neighborhoods like Bay Ridge run a little longer. Times are off-peak estimates.
            </p>
            <div className="space-y-3">
              {[
                { from: 'LGA → Bushwick', miles: '~9 miles', time: '25–40 min' },
                { from: 'LGA → Williamsburg', miles: '~10 miles', time: '25–35 min' },
                { from: 'LGA → DUMBO / Brooklyn Heights', miles: '~11 miles', time: '30–40 min' },
                { from: 'LGA → Downtown Brooklyn', miles: '~11 miles', time: '30–45 min' },
                { from: 'LGA → Park Slope', miles: '~12 miles', time: '30–45 min' },
                { from: 'LGA → Flatbush / Prospect Park', miles: '~13 miles', time: '35–50 min' },
                { from: 'LGA → Sunset Park', miles: '~13 miles', time: '35–50 min' },
                { from: 'LGA → Bay Ridge', miles: '~15 miles', time: '40–55 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat and confirmed at booking. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for LGA to Brooklyn
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during peak hours.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign past baggage claim — no searching for your ride.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your LGA arrival and adjust your driver automatically for any delay — at no extra charge.' },
                { title: '60 Minutes Complimentary Wait', body: 'No rushing once you land — your driver waits up to 60 minutes after touchdown at no extra charge.' }
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

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                What Is Included in Every LGA to Brooklyn Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your LGA arrival and adjust pickup for delays or early landings at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic and demand never change it.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/airport/lga" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All LGA routes &amp; terminals</div>
              </Link>
              <Link href="/services/routes/lga-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Midtown &amp; all neighborhoods</div>
              </Link>
              <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn Service</div>
                <div className="text-sm text-brand-grey mt-1">All Brooklyn rides &amp; hourly</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              LGA to Brooklyn — FAQ
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

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your LGA to Brooklyn Car Service
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. No surge pricing. Chauffeur waiting when you land.</p>
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Reserve Now
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
