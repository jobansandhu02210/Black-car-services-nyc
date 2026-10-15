import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan to JFK Car Service',
  description:
    'Manhattan to JFK black car service — flat rates, flight monitoring, door-to-door pickup. Professional chauffeurs, no surge pricing. Book Eagle Eye.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Manhattan to JFK?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your Manhattan pickup address and JFK as the destination.',
  },
  {
    q: 'How early should I book my Manhattan to JFK black car?',
    a: 'We recommend booking at least 24 hours in advance. For early morning departures (before 6am), booking 48 hours ahead ensures your preferred vehicle is available.',
  },
  {
    q: 'Will my chauffeur come to my building door?',
    a: 'Yes. Your chauffeur picks you up directly at your Manhattan address — apartment building, hotel, or office. Step outside when your driver arrives and you are on your way.',
  },
  {
    q: 'What if I have a lot of luggage for JFK?',
    a: 'Our SUV option (Cadillac Escalade or similar) handles large luggage loads comfortably. Just mention your bag count when booking and we match you to the right vehicle.',
  },
  {
    q: 'Do you cover early morning flights from JFK?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Pre-dawn pickups — even 3am or 4am — are fully available. Your driver will be confirmed the evening before your trip.',
  },
  {
    q: 'How early should I leave for JFK from Midtown?',
    a: 'We recommend scheduling pickup at least 3 hours before your departure time. The drive is typically 35–50 minutes, but during peak hours (7–9am and 5–8pm) allow 60–75 minutes. We help you plan the right departure time when you book.',
  },
  {
    q: 'What is the best route to JFK from Manhattan?',
    a: 'Your chauffeur selects the fastest route in real time — typically the Queens-Midtown Tunnel to the Van Wyck Expressway, or the Brooklyn Bridge to the Belt Parkway, depending on your pickup location and current traffic conditions.',
  },
  {
    q: 'Do you track my departing flight for drop-off timing?',
    a: 'Yes. For departures we monitor flight status so if your flight time changes we can adjust pickup if needed. Your confirmed driver will also have your flight details and will reach out if anything requires attention.',
  },
  {
    q: 'How early should I leave for JFK from Manhattan?',
    a: 'Allow 90 minutes for off-peak travel, 2+ hours for morning rush (7–9am) or afternoon peak (3–6pm). For international flights, add extra buffer. Your driver will advise on departure time when you confirm your flight details.',
  },
  {
    q: 'Which route do you take from Manhattan to JFK?',
    a: 'The route depends on traffic — typically the Queens-Midtown Tunnel and the Van Wyck Expressway, or the Brooklyn-Queens Expressway depending on your Manhattan location. Your driver monitors live traffic and selects the fastest approach.',
  },
  {
    q: 'How far is Manhattan from JFK?',
    a: 'JFK is about 14 to 17 miles from Manhattan depending on your neighborhood — roughly 14 miles from Lower Manhattan and the Financial District, about 15 miles from Midtown, and up to 17 miles from the Upper West Side. The drive is typically 35–60 minutes.',
  },
  {
    q: 'How much does a car service from Manhattan to JFK cost?',
    a: 'It is a flat rate confirmed at booking, based on your Manhattan neighborhood and vehicle class, with all tolls included and no surge — even during rush hour. A pre-booked black car is often comparable to a surge-priced Uber and far more predictable than a metered taxi. Enter your address on the booking page for an exact quote.',
  },
];


export default function ManhattanToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to JFK Black Car Service"
        description="Premium black car service from Manhattan to JFK Airport. Flat rates, door-to-door pickup, 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-jfk-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to JFK Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              Start your trip the right way. Door-to-door black car service from any Manhattan address
              to JFK Airport — flat rate confirmed at booking, professional chauffeur at your door,
              and plenty of time to make your flight stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to JFK
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
              Manhattan to JFK: Distances &amp; Drive Times
            </h2>
            <p className="text-brand-grey mb-6 max-w-2xl">
              JFK is about 14–17 miles from most of Manhattan — roughly a 35–60 minute drive depending on your
              neighborhood and traffic. Downtown and East Side neighborhoods are usually a touch faster than the far West
              Side and Upper West Side. Times below are off-peak estimates; add time for weekday rush hours.
            </p>
            <div className="space-y-3">
              {[
                { from: 'Financial District / Wall Street → JFK', miles: '~14 miles', time: '35–50 min' },
                { from: 'SoHo / Tribeca → JFK', miles: '~14 miles', time: '35–50 min' },
                { from: 'Chelsea / Meatpacking District → JFK', miles: '~14 miles', time: '35–50 min' },
                { from: 'Midtown Manhattan → JFK', miles: '~15 miles', time: '35–50 min' },
                { from: 'Times Square / Theater District → JFK', miles: '~15 miles', time: '40–55 min' },
                { from: 'Upper East Side → JFK', miles: '~15 miles', time: '40–55 min' },
                { from: 'Harlem / East Harlem → JFK', miles: '~16 miles', time: '45–60 min' },
                { from: 'Upper West Side → JFK', miles: '~17 miles', time: '45–60 min' },
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
              Why Eagle Eye for Manhattan to JFK
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during rush hour or early morning departures.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Door-to-Door Pickup', body: 'Your driver comes to your exact Manhattan address — building entrance, hotel lobby, or office door.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before — full peace of mind.' },
                { title: 'Pre-Dawn Availability Guaranteed', body: 'Early morning JFK departures are fully covered. Your flat rate never changes regardless of the hour.' }
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
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address, not a nearby corner.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. Traffic, time of day, and demand do not change it.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — you receive your driver details the evening before, not minutes before pickup.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — your chauffeur helps with bags at pickup and drop-off.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Manhattan to JFK — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              JFK Airport is 16 miles from Midtown Manhattan. In normal traffic, the drive takes 35–50 minutes.
              During peak hours — weekday mornings (7–9am) and evenings (5–8pm) — allow 60–75 minutes.
              We recommend scheduling pickup at least 3 hours before your departure time.
            </p>
            <p className="text-brand-grey mb-4">
              Your chauffeur takes the most efficient route in real-time — typically the Queens-Midtown Tunnel
              or the Brooklyn Bridge to the Belt Parkway, depending on current conditions.
            </p>
            <p className="text-brand-grey">
              Terminal drop-off is curbside at departures. Your driver pulls directly to your airline terminal.
            </p>
          </div>
        </section>

        <section className="pb-16 bg-brand-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-white mb-2">
              JFK Terminal Guide — Where Your Driver Drops You Off
            </h2>
            <p className="text-brand-silver mb-6 text-sm">Curbside drop-off at the departures level. Your driver goes directly to your airline&apos;s terminal.</p>
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
                    <td className="p-3 font-medium text-brand-black">T1</td>
                    <td className="p-3 text-brand-grey">Lufthansa, JAL, Air Canada &amp; international carriers</td>
                    <td className="p-3 text-brand-grey">Curbside drop at departures level</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">T4</td>
                    <td className="p-3 text-brand-grey">Delta (main hub), Air France, KLM, Cathay Pacific</td>
                    <td className="p-3 text-brand-grey">Large multi-airline terminal — check your airline&apos;s counter</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">T5</td>
                    <td className="p-3 text-brand-grey">JetBlue (all domestic &amp; Caribbean flights)</td>
                    <td className="p-3 text-brand-grey">Compact, single-airline terminal</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">T7</td>
                    <td className="p-3 text-brand-grey">British Airways, Finnair, Korean Air</td>
                    <td className="p-3 text-brand-grey">Departures Level — follow terminal signs</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">T8</td>
                    <td className="p-3 text-brand-grey">American Airlines, British Airways (shared with T7)</td>
                    <td className="p-3 text-brand-grey">Departures Level — American check-in on Level 3</td>
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
                { name: 'Brooklyn', desc: 'DUMBO, Brooklyn Heights, Park Slope, and beyond.', href: '/services/areas/brooklyn' },
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
              Manhattan to JFK Black Car — FAQ
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
                Book Your Manhattan to JFK Black Car
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
