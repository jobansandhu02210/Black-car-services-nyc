import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan to LaGuardia Car Service | LGA Transfers',
  description:
    'Manhattan to LaGuardia (LGA) car service — flat rates, door-to-door pickup from any Manhattan address. NYC\'s closest major airport. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to LGA?',
    a: 'All rates are flat and confirmed at booking — no surge, tolls included. Because LaGuardia is the closest airport to Manhattan, these are among the most affordable NYC airport transfers. Get an exact quote by entering your Manhattan address and LGA as the destination on the booking page.',
  },
  {
    q: 'How far is LaGuardia from Manhattan, and how early should I leave?',
    a: 'LaGuardia is about 8 miles from Midtown Manhattan — the closest of the three major airports (JFK and EWR are both about 15 miles). The drive is typically 20–40 minutes, but during rush hour (7–9am and 5–8pm) allow 35–50 minutes. We recommend scheduling your pickup at least 2.5 hours before a domestic departure to cover the drive plus check-in and security.',
  },
  {
    q: 'Will my chauffeur come to my hotel or apartment in Manhattan?',
    a: 'Yes. Your driver picks you up directly at your Manhattan address — hotel, apartment, or office. Just step outside when your driver arrives and you are on your way.',
  },
  {
    q: 'Which terminal at LGA do I depart from?',
    a: 'After LaGuardia\'s rebuild, Terminal B serves American, United, Southwest, Alaska, and most carriers, while Terminal C serves Delta. Provide your airline at booking and your chauffeur drops you at the correct terminal.',
  },
  {
    q: 'What is the fastest route from Manhattan to LGA?',
    a: 'A private black car is consistently the fastest door-to-door option — your chauffeur monitors live traffic and typically takes the Queens-Midtown Tunnel to the Grand Central Parkway, or the RFK/Triborough Bridge depending on your neighborhood. Public transit (the subway plus the LaGuardia Link bus) takes considerably longer and requires a transfer.',
  },
  {
    q: 'Do you cover early-morning departures to LGA?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7 at the same flat rate, and we confirm your driver the evening before — so a 4am or 5am pickup for an early flight is fully covered with no last-minute uncertainty.',
  },
  {
    q: 'How far in advance should I book a car to LGA from Manhattan?',
    a: 'Booking a few hours ahead is usually enough, and we accept same-day requests 24/7. For rush-hour or early-morning departures, and to guarantee your preferred vehicle, we recommend booking the night before.',
  },
];


export default function ManhattanToLGABlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to LGA Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to LGA Black Car Service"
        description="Premium black car service from Manhattan to LaGuardia Airport. Flat rates, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-lga-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to LaGuardia Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              LaGuardia is the closest major airport to Manhattan — and with Eagle Eye Chauffeur,
              getting there is effortless. Flat-rate black car service from any Manhattan address,
              professional chauffeur at your door, and a price that does not move regardless of traffic or time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to LGA
              </Link>
              <Link href="/services/airport/lga" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All LGA Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Routes from Manhattan to LGA
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Midtown Manhattan → LGA', time: '20–30 min' },
                { from: 'Financial District / Wall Street → LGA', time: '25–40 min' },
                { from: 'Times Square / Theater District → LGA', time: '20–30 min' },
                { from: 'Upper East Side → LGA', time: '20–30 min' },
                { from: 'Upper West Side → LGA', time: '25–35 min' },
                { from: 'Chelsea / Meatpacking District → LGA', time: '25–35 min' },
                { from: 'SoHo / Tribeca → LGA', time: '25–40 min' },
                { from: 'Harlem → LGA', time: '20–30 min' },
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
              Why Eagle Eye for Manhattan to LGA
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during rush hour.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Door-to-Door Pickup', body: 'Your driver comes directly to your Manhattan address — no walking to a corner or curbside zone.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before departure.' },
                { title: 'Pre-Dawn Availability Guaranteed', body: 'Early morning LGA departures are fully covered. Your flat rate never changes regardless of the hour.' }
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address on time, every time.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic and rush hour never change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and drop-off at the terminal.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-brand-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-white mb-2">
              LaGuardia Terminal Guide — Where Your Driver Drops You Off
            </h2>
            <p className="text-brand-silver mb-6 text-sm">Curbside drop-off at the departures level of your airline&apos;s terminal.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-charcoal text-brand-white">
                    <th className="text-left p-3 font-semibold">Terminal</th>
                    <th className="text-left p-3 font-semibold">Airlines</th>
                    <th className="text-left p-3 font-semibold">Departures Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">Terminal B</td>
                    <td className="p-3 text-brand-grey">American, United, Southwest, Alaska &amp; most carriers</td>
                    <td className="p-3 text-brand-grey">New 2022 building — curbside drop at departures level</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">Terminal C</td>
                    <td className="p-3 text-brand-grey">Delta (all Delta flights)</td>
                    <td className="p-3 text-brand-grey">Separate building — dedicated Delta departures curbside</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pb-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              Manhattan Neighborhoods We Pick Up From
            </h2>
            <p className="text-brand-grey mb-6 text-sm">We pick up from any Manhattan address. Browse popular neighborhoods below.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'Midtown Manhattan', desc: 'Hotels, offices, and business addresses in the heart of NYC.', href: '/services/areas/midtown-manhattan' },
                { name: 'Upper East Side', desc: 'Residential buildings, consulates, and luxury hotels.', href: '/services/areas/upper-east-side' },
                { name: 'Financial District', desc: 'Wall Street, World Trade Center, and lower Manhattan.', href: '/services/areas/financial-district' },
                { name: 'SoHo', desc: 'Cast-iron loft buildings and boutique hotels.', href: '/services/areas/soho' },
                { name: 'Tribeca', desc: 'Celebrity-favored residential neighborhood in lower Manhattan.', href: '/services/areas/tribeca' },
                { name: 'Upper West Side', desc: 'Columbus Circle area to the Hudson River.', href: '/services/areas/upper-west-side' },
                { name: 'Chelsea', desc: 'Gallery district and west side residential and hotel corridor.', href: '/services/areas/chelsea' },
                { name: 'Greenwich Village', desc: 'NYU area and west village townhouses.', href: '/services/areas/greenwich-village' },
              ].map((area) => (
                <Link key={area.name} href={area.href} className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors">
                  <div className="font-semibold text-brand-black text-sm mb-1">{area.name}</div>
                  <p className="text-brand-grey text-xs">{area.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/lga-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">Arrivals — meet &amp; greet service</div>
              </Link>
              <Link href="/services/airport/lga" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LGA Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All LGA routes &amp; terminals</div>
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
              Manhattan to LGA Black Car — FAQ
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
                Book Your Manhattan to LGA Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. Flat rate. Professional chauffeur at your door.</p>
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
