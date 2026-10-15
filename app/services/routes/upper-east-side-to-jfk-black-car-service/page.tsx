import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Upper East Side to JFK Car Service',
  description:
    'Upper East Side to JFK black car service — door-to-door pickup, real-time flight tracking. Professional chauffeurs from UES to JFK Airport. Book 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/upper-east-side-to-jfk-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/upper-east-side-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from the Upper East Side to JFK?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your Upper East Side address and JFK as the destination.',
  },
  {
    q: 'How long does it take from the Upper East Side to JFK?',
    a: 'The Upper East Side is approximately 18 miles from JFK. In normal traffic, the drive takes 40-55 minutes. During peak hours, allow 60-75 minutes. We recommend scheduling pickup at least 3 hours before departure.',
  },
  {
    q: 'Do you pick up from UES apartments and co-ops?',
    a: 'Yes. Your chauffeur comes directly to your building entrance — doorman buildings, co-ops, and walk-ups. Your driver takes your luggage and gets you on your way.',
  },
  {
    q: 'What is the best route from the Upper East Side to JFK?',
    a: 'Your driver takes the most efficient route in real time — typically the Queens-Midtown Tunnel or the Queensboro Bridge to the Long Island Expressway or Belt Parkway, depending on traffic conditions.',
  },
  {
    q: 'Can I book a round-trip black car — JFK arrival and UES departure?',
    a: 'Yes. Book both legs separately or contact us to set up a coordinated round-trip. Each booking is confirmed independently so schedule changes on either end are handled cleanly.',
  },
];


export default function UpperEastSideToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Upper East Side to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/upper-east-side-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Upper East Side to JFK Black Car Service"
        description="Premium black car service from the Upper East Side to JFK Airport. Flat rates, door-to-door building pickup, 24/7 availability."
        areaServed="Upper East Side, Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/upper-east-side-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Upper East Side to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              From Park Avenue to the East River, 60th to 96th Street — Eagle Eye Chauffeur picks
              you up at your building entrance and delivers you to JFK in a luxury sedan or SUV.
              Flat-rate pricing, no surge, and a chauffeur confirmed the night before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Upper East Side to JFK
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
              Popular Routes from Upper East Side to JFK
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Upper East Side (60s–70s) → JFK', time: '40–50 min' },
                { from: 'Upper East Side (80s–90s) → JFK', time: '40–55 min' },
                { from: 'Carnegie Hill / Yorkville → JFK', time: '40–55 min' },
                { from: 'Lenox Hill → JFK', time: '40–50 min' },
                { from: 'Upper East Side → JFK (SUV)', time: '40–55 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat and confirmed at booking. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for Upper East Side to JFK
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no morning surge on the Upper East Side.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Building Entrance Pickup', body: 'Your driver comes to your building entrance — doorman buildings, co-ops, and walk-ups all welcome.' },
                { title: 'Driver Waits — No Pressure to Rush', body: 'Your driver is patient and professional. No anxiety about making it to the car in time.' },
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
                <li><strong className="text-brand-black">Building entrance pickup</strong> — your chauffeur comes to your UES building door, including doorman buildings and co-ops.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic, time of day, and demand never change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before your trip.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps load bags from your building to the vehicle.</li>
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
              Upper East Side to JFK Black Car — FAQ
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
                Book Your Upper East Side to JFK Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. Building entrance pickup. No surge pricing.</p>
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
