import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK to Brooklyn Car Service',
  description:
    'JFK to Brooklyn black car service — real-time flight tracking, meet & greet at arrivals. Professional chauffeurs to Williamsburg, Park Slope, DUMBO.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-brooklyn` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/jfk-to-brooklyn` },
};

const faqs = [
  {
    q: 'How much does a car service from JFK to Brooklyn cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your JFK terminal and Brooklyn destination.',
  },
  {
    q: 'How long does JFK to Brooklyn take?',
    a: 'JFK to most Brooklyn neighborhoods takes 20–35 minutes in normal traffic. JFK is the closest major airport to Brooklyn — just 12–16 miles via the Belt Parkway. Rush hour (7–9am and 5–8pm) can add 15–25 minutes.',
  },
  {
    q: 'What route does the driver take from JFK to Brooklyn?',
    a: 'The most common route is via the Belt Parkway — connecting JFK directly to Brooklyn neighborhoods without going through Manhattan. For neighborhoods like Greenpoint or Williamsburg, the driver may take the Van Wyck to the Jackie Robinson Parkway. Your chauffeur uses real-time traffic to pick the fastest path.',
  },
  {
    q: 'Is JFK the best airport for travel to Brooklyn?',
    a: 'Yes. JFK is the closest major airport to Brooklyn — 12–16 miles depending on your neighborhood. That is significantly closer than LGA (20–30 min by car) or EWR (45–60 min). If your flight schedule is flexible, JFK is the best choice when traveling to Brooklyn.',
  },
  {
    q: 'Will the driver wait for me if my flight is delayed?',
    a: 'Yes. We track every JFK arrival in real time. If your flight is delayed, your chauffeur adjusts automatically. You receive a 60-minute grace period after landing at no extra charge. You never land to find no one waiting.',
  },
  {
    q: 'Can I book a JFK to Brooklyn ride for early morning or late night?',
    a: 'Absolutely. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Red-eye arrivals at 2am or pre-dawn departures at 4am are fully covered.',
  },
];


export default function JFKToBrooklynPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Brooklyn Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-brooklyn` },
      ]} />
      <ServiceJsonLd
        name="JFK to Brooklyn Car Service"
        description="Premium black car service from JFK Airport to Brooklyn. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Brooklyn, New York City, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-brooklyn`}
      />

      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Brooklyn Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The best airport transfer for Brooklyn residents and visitors. JFK is the closest major
              airport to Brooklyn — just 12–16 miles via the Belt Parkway. Flat-rate black car
              service with real-time flight tracking and meet &amp; greet at arrivals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book JFK to Brooklyn
              </Link>
              <Link href="/services/airport/jfk" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All JFK Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Routes from JFK to Brooklyn
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → Williamsburg', time: '20–30 min' },
                { from: 'JFK → Downtown Brooklyn', time: '20–30 min' },
                { from: 'JFK → DUMBO', time: '20–30 min' },
                { from: 'JFK → Park Slope', time: '20–30 min' },
                { from: 'JFK → Brooklyn Heights', time: '20–30 min' },
                { from: 'JFK → Greenpoint', time: '25–40 min' },
                { from: 'JFK → Sunset Park', time: '20–30 min' },
                { from: 'JFK → Coney Island', time: '15–25 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat — confirmed at booking. Gratuity and tolls included. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for JFK to Brooklyn
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises on peak hours or early mornings.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign past baggage claim — no hunting for your ride at the curb.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your JFK arrival and adjust your driver automatically for delays — at no extra charge.' },
                { title: 'Direct Belt Parkway Route', body: 'From JFK to Brooklyn without going through Manhattan — faster and more direct.' },
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
                What Is Included in Every JFK to Brooklyn Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your JFK arrival. If your flight is delayed, your chauffeur adjusts automatically at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your driver waits with a name sign past baggage claim. No hunting for your ride at the curb.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic, time of day, and demand never change it.</li>
                <li><strong className="text-brand-black">Direct Belt Parkway route</strong> — from JFK to Brooklyn without going through Manhattan. Faster, more direct.</li>
                <li><strong className="text-brand-black">60 minutes free wait time</strong> — after your flight lands, no rushing. Your driver waits without extra charge.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — Business Class Sedan or SUV, always clean and professional.</li>
                <li><strong className="text-brand-black">24/7 availability</strong> — early morning arrivals and late-night flights covered.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              JFK to Brooklyn — Why JFK Is the Best Airport for Brooklyn Travelers
            </h2>
            <p className="text-brand-grey mb-4">
              Of the three major New York City airports, JFK is consistently the closest to Brooklyn.
              At 12–16 miles depending on your neighborhood, it is roughly half the distance from
              Brooklyn to Newark Liberty (EWR) and meaningfully closer than LaGuardia (LGA).
            </p>
            <p className="text-brand-grey mb-4">
              The Belt Parkway provides a direct connection from JFK to Brooklyn without routing through
              Manhattan traffic — making JFK transfers faster and more predictable than other airports.
              Williamsburg, DUMBO, Park Slope, and Downtown Brooklyn are typically 20–30 minutes from
              JFK in normal traffic.
            </p>
            <p className="text-brand-grey">
              Brooklyn Heights, Cobble Hill, and Carroll Gardens are among the closest Brooklyn destinations
              to JFK. Neighborhoods in northern Brooklyn — Greenpoint, Bushwick, Bed-Stuy — are slightly
              further at 30–40 minutes, but still a faster and easier ride than from any other NYC airport.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/brooklyn-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn to JFK</div>
                <div className="text-sm text-brand-grey mt-1">Departures from all Brooklyn neighborhoods</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All JFK routes &amp; terminals</div>
              </Link>
              <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn Car Service</div>
                <div className="text-sm text-brand-grey mt-1">All Brooklyn rides, hourly &amp; one-way</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              JFK to Brooklyn Car Service — FAQ
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
                Book Your JFK to Brooklyn Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. Flat rate. Professional chauffeur waiting when you land.</p>
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
