import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Brooklyn to JFK Car Service | Black Car Transfer',
  description:
    'Brooklyn to JFK black car service — flat-rate, door-to-door, flight tracking, no surge. Just 8–14 miles from most Brooklyn neighborhoods.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/brooklyn-to-jfk-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/brooklyn-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Brooklyn to JFK?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your Brooklyn address and JFK as the destination.',
  },
  {
    q: 'How long does it take from Brooklyn to JFK?',
    a: 'Brooklyn is the closest NYC borough to JFK — just 10-15 miles depending on your neighborhood. The drive takes 20-35 minutes in normal traffic. During peak hours, allow 40-55 minutes.',
  },
  {
    q: 'Do you pick up from all Brooklyn neighborhoods?',
    a: 'Yes. We serve all of Brooklyn — DUMBO, Williamsburg, Park Slope, Downtown Brooklyn, Brooklyn Heights, Bay Ridge, Sheepshead Bay, Flatbush, Crown Heights, Bushwick, and more.',
  },
  {
    q: 'Is black car service from Brooklyn to JFK worth it over the subway?',
    a: 'The JFK AirTrain requires a transfer and takes 60-90 minutes door-to-terminal. Black car service from most Brooklyn neighborhoods takes 20-35 minutes, door-to-terminal, with your luggage handled. For most travelers, the time saved and convenience is well worth the difference.',
  },
  {
    q: 'Can I get a black car from Brooklyn for an early morning JFK flight?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning departures from Brooklyn are fully covered — your driver is confirmed the evening before.',
  },
  {
    q: 'Which Brooklyn neighborhoods are closest to JFK?',
    a: 'The southern and eastern neighborhoods are closest: East New York and Bushwick are about 7 miles, and Sheepshead Bay, Marine Park, Canarsie, and Flatbush are roughly 8–9 miles — often under 20 minutes to the terminal. Northern and western areas like DUMBO, Williamsburg, and Bay Ridge are around 13–14 miles.',
  },
  {
    q: 'How much does a car service from Brooklyn to JFK cost?',
    a: 'It is a flat rate confirmed at booking, based on your specific Brooklyn neighborhood and vehicle class, with all tolls included and no surge. Because Brooklyn is the closest borough to JFK, these are among the most affordable NYC airport transfers — enter your address on the booking page for an exact quote.',
  },
  {
    q: 'Do you also do JFK-to-Brooklyn pickups with meet and greet?',
    a: 'Yes. For arrivals, your chauffeur tracks your flight, meets you at baggage claim in your terminal with a name sign, helps with your luggage, and drives you straight home to Brooklyn — with 60 minutes of complimentary wait time included after you land.',
  },
];


export default function BrooklynToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Brooklyn to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/brooklyn-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Brooklyn to JFK Black Car Service"
        description="Premium black car service from Brooklyn to JFK Airport. Flat rates, door-to-door pickup from all Brooklyn neighborhoods. 24/7 availability."
        areaServed="Brooklyn, New York City, NY"
        url={`${getSiteUrl()}/services/routes/brooklyn-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Brooklyn to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Brooklyn is the closest NYC borough to JFK — and Eagle Eye Chauffeur makes the most of it.
              Flat-rate black car pickup from any Brooklyn neighborhood, professional chauffeur at your door,
              and a price that does not surge at 5am on a Monday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Brooklyn to JFK
              </Link>
              <Link href="/services/airport/jfk" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All JFK Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Brooklyn Is the Closest Borough to JFK
            </h2>
            <p className="text-brand-grey leading-relaxed mb-4">
              Of all five boroughs, Brooklyn sits closest to John F. Kennedy International Airport — most neighborhoods are
              just 8 to 14 miles away, a 15 to 35 minute drive in normal traffic via the Belt Parkway, which hugs the
              southern edge of Brooklyn straight to the JFK exits. Southern and eastern neighborhoods like Sheepshead Bay,
              Marine Park, Canarsie, and East New York are the closest of all, often under 20 minutes; DUMBO, Williamsburg,
              and Bay Ridge on the north and west sides run a little longer.
            </p>
            <p className="text-brand-grey leading-relaxed mb-8">
              That proximity makes Brooklyn one of the most affordable boroughs for a flat-rate JFK transfer — and a
              private car still beats the AirTrain-plus-subway, which requires a transfer at Jamaica or Broadway Junction
              and can take 60 to 90 minutes with luggage. Your Eagle Eye chauffeur picks you up at your door, watches the
              Belt Parkway traffic live, and takes you straight to your terminal.
            </p>
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Distances &amp; Drive Times: Brooklyn Neighborhoods to JFK
            </h2>
            <div className="space-y-3">
              {[
                { from: 'Bushwick / East New York → JFK', miles: '~7 miles', time: '15–25 min' },
                { from: 'Sheepshead Bay / Marine Park → JFK', miles: '~8 miles', time: '15–25 min' },
                { from: 'Crown Heights / Flatbush → JFK', miles: '~9 miles', time: '15–25 min' },
                { from: 'Park Slope / Prospect Heights → JFK', miles: '~11 miles', time: '20–30 min' },
                { from: 'Downtown Brooklyn / Fort Greene → JFK', miles: '~12 miles', time: '20–30 min' },
                { from: 'DUMBO / Brooklyn Heights → JFK', miles: '~13 miles', time: '20–30 min' },
                { from: 'Williamsburg / Greenpoint → JFK', miles: '~14 miles', time: '20–35 min' },
                { from: 'Bay Ridge / Dyker Heights → JFK', miles: '~14 miles', time: '25–35 min' },
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
              Why Eagle Eye for Brooklyn to JFK
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises on early mornings or peak hours.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional hospitality standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Door-to-Door from Your Brooklyn Address', body: 'Your driver picks you up at your exact address and takes you directly to your JFK terminal.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before — full peace of mind.' },
                { title: 'Real-Time Flight Tracking', body: 'For JFK arrivals, we monitor your flight and adjust pickup timing automatically — no calls needed.' },
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Brooklyn address, not a nearby corner.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking and never changes due to traffic or demand.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps load and unload bags at every stop.</li>
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
              Brooklyn to JFK Black Car — FAQ
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
                Book Your Brooklyn to JFK Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. No surge. Professional chauffeur at your Brooklyn door.</p>
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
