import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'LaGuardia to Manhattan Car Service | LGA Flat Rate',
  description:
    'LaGuardia (LGA) to Manhattan car service — flat rates, real-time flight tracking, meet & greet at arrivals. NYC\'s closest airport to Midtown. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from LGA to Manhattan?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, tolls included. Because LaGuardia is the closest airport to Manhattan, these are among the most affordable NYC airport transfers. Get an exact quote by entering your LGA terminal and Manhattan destination on the booking page.',
  },
  {
    q: 'How far is LaGuardia from Manhattan, and how long does it take?',
    a: 'LaGuardia is about 8 miles from Midtown Manhattan — the closest of New York\'s three major airports (JFK is about 15 miles and Newark about 15 miles). The drive is typically 20–40 minutes in normal traffic; during peak hours (7–9am and 5–8pm) allow 35–50 minutes. For Midtown and Upper Manhattan, LGA is usually the fastest airport by car.',
  },
  {
    q: 'Where does my chauffeur meet me at LaGuardia?',
    a: 'Your chauffeur meets you in the arrivals area of your terminal with a name sign, and you receive a WhatsApp message with the exact meeting point before you land — so there is no searching and no taxi queue.',
  },
  {
    q: 'Which LGA terminal will I arrive in, and does it matter?',
    a: 'LaGuardia has two main terminals after its recent rebuild: Terminal B (American, United, Southwest, Alaska, and most carriers) and Terminal C (Delta). Provide your airline at booking and your driver is assigned to the correct terminal, with the exact meeting spot sent via WhatsApp before you land.',
  },
  {
    q: 'Do you track flights at LGA?',
    a: 'Yes. We monitor your LaGuardia flight in real time and adjust pickup automatically for any delays or early arrivals — at no extra charge — with 60 minutes of complimentary wait time after you land.',
  },
  {
    q: 'Is black car service from LGA faster than taking a taxi?',
    a: 'The drive time is the same, but the experience is completely different: your chauffeur is already waiting when you clear baggage claim, with no taxi queue, no surge, and help with your luggage — versus lining up at the taxi stand or walking to the rideshare lot.',
  },
  {
    q: 'Can I book LGA black car service for early morning or red-eye arrivals?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7 at the same flat rate. Red-eye and early morning arrivals at LaGuardia are fully covered, with your driver confirmed in advance.',
  },
];


export default function LGAToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'LGA to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="LGA to Manhattan Black Car Service"
        description="Premium black car service from LaGuardia Airport to Manhattan. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/lga-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              LaGuardia to Manhattan Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              LaGuardia is NYC&apos;s closest major airport to Midtown — just 9 miles away. Make the most
              of that proximity with a flat-rate black car service that has a professional chauffeur
              waiting the moment you clear baggage claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book LGA to Manhattan
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
              Popular Routes from LGA to Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { from: 'LGA → Midtown Manhattan', time: '20–30 min' },
                { from: 'LGA → Financial District / Wall Street', time: '25–40 min' },
                { from: 'LGA → Times Square / Theater District', time: '20–30 min' },
                { from: 'LGA → Upper East Side', time: '20–30 min' },
                { from: 'LGA → Upper West Side', time: '25–35 min' },
                { from: 'LGA → Chelsea / Meatpacking District', time: '25–35 min' },
                { from: 'LGA → SoHo / Tribeca', time: '25–40 min' },
                { from: 'LGA → Harlem', time: '20–30 min' },
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
              Why Eagle Eye for LGA to Manhattan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during peak hours.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign past baggage claim — no searching for your ride.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your LGA arrival and adjust your driver automatically for any delay — at no extra charge.' },
                { title: '60 Minutes Complimentary Wait', body: 'No rushing once you land — your driver waits up to 60 minutes after touchdown at no extra charge.' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              LGA to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              LaGuardia is just 9 miles from Midtown Manhattan — the closest major airport to the city center.
              In normal traffic, the ride takes 20–30 minutes. During peak hours, allow 35–50 minutes.
            </p>
            <p className="text-brand-grey mb-4">
              LGA was recently renovated. Terminal B (Delta, American) and Terminal C/D (United, Southwest) both
              have clear arrivals areas. Your driver sends the exact meeting spot via WhatsApp before you land.
            </p>
            <p className="text-brand-grey">
              The route to Manhattan typically uses the Grand Central Parkway to the Queens-Midtown Tunnel or
              the Triborough Bridge, depending on your destination and real-time traffic.
            </p>
          </div>
        </section>

        <section className="pb-16 bg-brand-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-white mb-2">
              LaGuardia Terminal Guide — Where Your Driver Meets You
            </h2>
            <p className="text-brand-silver mb-6 text-sm">LGA has two terminals. Your chauffeur sends the exact meeting spot via WhatsApp before you land.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-charcoal text-brand-white">
                    <th className="text-left p-3 font-semibold">Terminal</th>
                    <th className="text-left p-3 font-semibold">Airlines</th>
                    <th className="text-left p-3 font-semibold">Arrivals Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">Terminal B</td>
                    <td className="p-3 text-brand-grey">American, United, Southwest, Alaska &amp; most carriers</td>
                    <td className="p-3 text-brand-grey">New 2022 building — ride-share &amp; car service at designated zones</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">Terminal C</td>
                    <td className="p-3 text-brand-grey">Delta (all Delta flights)</td>
                    <td className="p-3 text-brand-grey">Separate building from Terminal B — separate pickup area</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              How Your LGA Arrival Pickup Works
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Book in advance', body: 'Provide your flight number, LGA terminal, and arrival time when booking. Your flat rate is confirmed instantly.' },
                { step: '2', title: 'Driver tracks your flight live', body: 'We monitor your LaGuardia arrival in real time — early or delayed, your chauffeur adjusts automatically at no extra charge.' },
                { step: '3', title: 'Meet your driver at arrivals', body: 'Your chauffeur waits with a name sign in the arrivals area. You receive a WhatsApp message with the exact meeting point before you land.' },
                { step: '4', title: 'Door-to-door to your Manhattan destination', body: 'Ride in a luxury black car to any Manhattan address. Flat rate — confirmed at booking, never changes.' },
              ].map((item) => (
                <div key={item.step} className="bg-brand-white border border-brand-light p-5 flex gap-5 items-start">
                  <div className="shrink-0 w-8 h-8 bg-brand-black text-brand-white font-semibold flex items-center justify-center text-sm">{item.step}</div>
                  <div>
                    <div className="font-semibold text-brand-black mb-1">{item.title}</div>
                    <p className="text-brand-grey text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              Manhattan Neighborhoods We Serve from LGA
            </h2>
            <p className="text-brand-grey mb-6 text-sm">We serve every Manhattan neighborhood. Browse popular destinations below.</p>
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
              <Link href="/services/routes/manhattan-to-lga-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to LGA</div>
                <div className="text-sm text-brand-grey mt-1">Departures — door-to-door service</div>
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
              LGA to Manhattan Black Car — FAQ
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
                Book Your LGA to Manhattan Black Car
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
