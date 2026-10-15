import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan to Brooklyn Car Service',
  description:
    'Manhattan to Brooklyn car service — no surge pricing. Williamsburg, DUMBO, Park Slope, Barclays Center, Brooklyn Heights. Professional chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-brooklyn` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/manhattan-to-brooklyn` },
};

const faqs = [
  {
    q: 'How much does Manhattan to Brooklyn car service cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your Manhattan pickup and Brooklyn destination.',
  },
  {
    q: 'How long does the drive from Manhattan to Brooklyn take?',
    a: 'Most Manhattan to Brooklyn trips take 15–35 minutes depending on the neighborhoods and time of day. Midtown to Williamsburg or DUMBO is typically 15–20 minutes in light traffic. Rush hour (5–8pm) can add 15–20 minutes, especially via the Brooklyn Bridge or Manhattan Bridge.',
  },
  {
    q: 'Which bridge does the driver take from Manhattan to Brooklyn?',
    a: 'Your chauffeur uses real-time traffic data to select the fastest bridge. Common options are the Brooklyn Bridge (best for Brooklyn Heights, DUMBO, Carroll Gardens), the Manhattan Bridge (best for Williamsburg, Flatbush), and the Williamsburg Bridge (fastest to Williamsburg and Greenpoint). Toll bridges (Hugh Carey Tunnel) are also used when traffic warrants it.',
  },
  {
    q: 'Can I book a Manhattan to Brooklyn car service for late night?',
    a: 'Yes. Eagle Eye Chauffeur runs 24/7. Late-night rides from Manhattan restaurants, shows, or events to Brooklyn are a specialty — no surge pricing no matter the hour.',
  },
  {
    q: 'Is car service better than the subway for Manhattan to Brooklyn?',
    a: 'For professionals, groups, or anyone traveling with luggage, car service is far more comfortable. Door-to-door service, no transfers, no waiting on platforms, and a professional driver who knows the fastest route. For solo travelers on a budget, the subway is faster on a map but not always in practice during rush hour.',
  },
  {
    q: 'Can I get a car from Brooklyn back to Manhattan too?',
    a: 'Absolutely. We serve both directions. Book a Brooklyn to Manhattan car service via our booking page, or arrange a return trip at the time of booking.',
  },
];


export default function ManhattanToBrooklynPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to Brooklyn Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-brooklyn` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to Brooklyn Car Service"
        description="Professional black car service from Manhattan to Brooklyn. Flat rates, no surge pricing. Serving Williamsburg, DUMBO, Park Slope, and all Brooklyn neighborhoods."
        areaServed="Manhattan, NY; Brooklyn, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-brooklyn`}
      />

      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to Brooklyn Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Cross-borough in comfort. Professional black car service from any Manhattan neighborhood
              to anywhere in Brooklyn — Williamsburg, DUMBO, Park Slope, Barclays Center, and beyond.
              Flat rates, no surge pricing, and a chauffeur who knows every bridge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to Brooklyn
              </Link>
              <Link href="/services/areas/brooklyn" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All Brooklyn Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Routes from Manhattan to Brooklyn
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown → Williamsburg', time: '15–25 min' },
                { from: 'Midtown → DUMBO', time: '15–25 min' },
                { from: 'Midtown → Park Slope', time: '20–35 min' },
                { from: 'Midtown → Barclays Center', time: '20–35 min' },
                { from: 'Financial District → Brooklyn Heights', time: '10–20 min' },
                { from: 'Upper East Side → Williamsburg', time: '20–35 min' },
                { from: 'Upper East Side → Greenpoint', time: '20–35 min' },
                { from: 'Midtown → Coney Island', time: '35–55 min' },
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
              Why Eagle Eye for Manhattan to Brooklyn
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — same rate for shows, late nights, and rush hour.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and is trained to a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Exact Door Pickup', body: 'Your driver comes to your Manhattan address and drops you at your Brooklyn destination — door to door.' },
                { title: 'SUV Options for Groups', body: 'Groups up to 6 travel together in a single SUV — no need to split up.' },
                { title: 'No Surge Pricing — Ever', body: 'Events at Barclays Center, late nights, bad weather — your flat rate never changes regardless of demand.' },
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
                When to Book Manhattan to Brooklyn Car Service
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Concert &amp; events at Barclays Center</strong> — no surge pricing after the show, no scramble for a ride.</li>
                <li><strong className="text-brand-black">Business meetings in DUMBO or Downtown Brooklyn</strong> — arrive on time in a professional vehicle.</li>
                <li><strong className="text-brand-black">Dinner in Williamsburg</strong> — cross the bridge in style without worrying about parking.</li>
                <li><strong className="text-brand-black">Late-night returns from Manhattan</strong> — no surge pricing at 1am, no unsafe wait for a cab.</li>
                <li><strong className="text-brand-black">Groups of 3–6</strong> — SUV options keep the group together without splitting into multiple rides.</li>
                <li><strong className="text-brand-black">Clients &amp; guests</strong> — impress visitors with professional service from your Manhattan office to their Brooklyn hotel.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Manhattan to Brooklyn — How It Works
            </h2>
            <p className="text-brand-grey mb-4">
              Manhattan and Brooklyn are separated by the East River, crossed by three iconic bridges:
              the Brooklyn Bridge (pedestrian-friendly, best for Brooklyn Heights and Carroll Gardens),
              the Manhattan Bridge (fastest to Williamsburg and Flatbush), and the Williamsburg Bridge
              (great for North Brooklyn). For Sunset Park and Bay Ridge, drivers use the Battery Tunnel.
            </p>
            <p className="text-brand-grey mb-4">
              Your Eagle Eye chauffeur monitors real-time traffic across all crossings and picks the
              fastest route based on current conditions — no guessing, no apps you have to manage.
              Simply get in the car and arrive where you need to be.
            </p>
            <p className="text-brand-grey">
              Peak hours (7–9am and 5–8pm) add 15–20 minutes to most Manhattan-Brooklyn trips.
              Late night (after 11pm) is typically the fastest — most bridges clear quickly once
              the evening rush subsides.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/jfk-to-brooklyn" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK to Brooklyn</div>
                <div className="text-sm text-brand-grey mt-1">Airport transfers to all Brooklyn neighborhoods</div>
              </Link>
              <Link href="/services/routes/brooklyn-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn to JFK</div>
                <div className="text-sm text-brand-grey mt-1">Departures from all Brooklyn neighborhoods</div>
              </Link>
              <Link href="/services/areas/brooklyn" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Brooklyn Car Service</div>
                <div className="text-sm text-brand-grey mt-1">All Brooklyn rides — hourly &amp; one-way</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan to Brooklyn Car Service — FAQ
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
                Book Your Manhattan to Brooklyn Ride
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. Flat rate. No surge — ever.</p>
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
