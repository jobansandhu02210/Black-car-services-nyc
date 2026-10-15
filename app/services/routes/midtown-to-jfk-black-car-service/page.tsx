import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Midtown Manhattan to JFK Car Service',
  description:
    'Midtown to JFK black car service — door-to-door pickup from hotels, offices, apartments. No surge pricing. Professional chauffeurs. Book Eagle Eye.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/midtown-to-jfk-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/midtown-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Midtown to JFK?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your Midtown address and JFK as the destination.',
  },
  {
    q: 'How far is Midtown Manhattan from JFK, and how long does the drive take?',
    a: 'Midtown Manhattan to JFK is approximately 15 miles via the Queens-Midtown Tunnel and the Long Island Expressway to the Van Wyck, or the Queensboro Bridge. In normal traffic it takes 35–50 minutes; during morning rush hour (7–9am), allow 55–70 minutes. Your driver monitors live traffic and picks the fastest route to make your flight.',
  },
  {
    q: 'Do you pick up from Midtown hotels?',
    a: 'Yes. We pick up directly at hotel entrances, apartment buildings, and offices throughout Midtown. Your driver pulls up to your exact address.',
  },
  {
    q: 'Can I book a black car for a corporate departure from Midtown?',
    a: 'Absolutely. We handle corporate accounts with monthly invoicing, multi-passenger bookings, and executive SUV options. Contact us to set up a business account.',
  },
  {
    q: 'What if my Midtown meeting runs late and I need to rush to JFK?',
    a: 'Call or WhatsApp us and we will do our best to accommodate a schedule change. As long as a vehicle is available, we can adjust pickup times.',
  },
];


export default function MidtownToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Midtown to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/midtown-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Midtown Manhattan to JFK Black Car Service"
        description="Premium black car service from Midtown Manhattan to JFK Airport. Flat-rate pricing, hotel and office pickup, 24/7 availability."
        areaServed="Midtown Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/midtown-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Midtown Manhattan to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The most requested departure route in NYC — Midtown to JFK, done professionally.
              Flat-rate pricing, pickup directly at your hotel or office entrance, and a confirmed
              chauffeur the night before your flight. No surge. No uncertainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Midtown to JFK
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
              Popular Routes from Midtown to JFK
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Times Square / Theater District → JFK', time: '40–50 min' },
                { from: 'Grand Central / Murray Hill → JFK', time: '35–45 min' },
                { from: 'Penn Station / Hudson Yards → JFK', time: '40–55 min' },
                { from: 'Rockefeller Center / Fifth Ave → JFK', time: '40–50 min' },
                { from: 'Park Avenue / Midtown East → JFK', time: '35–45 min' },
                { from: 'Javits Center / West Side → JFK', time: '40–55 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat. Gratuity and tolls included. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for Midtown to JFK
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no unpredictability at peak hours.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Hotel Entrance or Building Door Pickup', body: 'Your driver picks you up directly at your address — no walking to a curbside zone with luggage.' },
                { title: 'Invoicing & Corporate Accounts', body: 'We support corporate accounts, multi-passenger bookings, and detailed invoicing for business travel.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details the night before departure.' }
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
                What Is Included in Every Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Hotel and office door pickup</strong> — your chauffeur pulls up directly to your Midtown entrance.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic does not change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before your trip.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps load bags from hotel lobby or building entrance.</li>
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
              <Link href="/services/routes/jfk-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — meet &amp; greet service</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All JFK routes &amp; terminals</div>
              </Link>
              <Link href="/services/areas/manhattan" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan Service</div>
                <div className="text-sm text-brand-grey mt-1">All Manhattan rides &amp; hourly</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Midtown to JFK Black Car — FAQ
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
                Book Your Midtown to JFK Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. No surge. Professional chauffeur at your Midtown address.</p>
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
