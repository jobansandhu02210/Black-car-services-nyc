import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK to Manhattan Car Service',
  description:
    'JFK to Manhattan black car service — flat rates, real-time flight tracking, meet & greet at arrivals. Professional chauffeurs, no surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much does a black car service from JFK to Manhattan cost?',
    a: 'All rates are flat and confirmed at booking — no surge pricing. Get an instant quote on our booking page by entering your JFK terminal and Manhattan destination.',
  },
  {
    q: 'What makes Eagle Eye black car service different for JFK to Manhattan?',
    a: 'Eagle Eye uses professional, licensed chauffeurs in luxury sedans and SUVs. Your price is locked at booking — no surge pricing, ever. We track your flight and meet you at arrivals with a name sign. Confirmed the night before, with 24/7 phone and WhatsApp support.',
  },
  {
    q: 'Where will my chauffeur meet me at JFK?',
    a: 'Your chauffeur meets you in the arrivals hall with a name sign, just past baggage claim. You receive a WhatsApp message with the exact meeting point before you land.',
  },
  {
    q: 'What if my JFK flight is delayed?',
    a: 'We track your flight in real time. If your flight is delayed, we adjust your pickup automatically at no extra charge. You will never land to find no driver waiting.',
  },
  {
    q: 'Can I book a JFK to Manhattan black car for early morning or late night?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Red-eye arrivals and pre-dawn departures are fully covered.',
  },
  {
    q: 'How long does JFK to Manhattan take?',
    a: 'The drive from JFK to Midtown Manhattan is typically 35–50 minutes in normal traffic. During peak hours — weekday mornings (7–9am) and evenings (5–8pm) — allow 60–75 minutes. JFK is 16 miles from Midtown via the Van Wyck Expressway.',
  },
  {
    q: 'Do you pick up at all JFK terminals?',
    a: 'Yes. Eagle Eye Chauffeur covers all JFK terminals — T1, T4, T5, T7, and T8. When you book, provide your terminal and airline and your chauffeur will meet you at the correct arrivals area with a name sign.',
  },
  {
    q: 'Is there a meet and greet at JFK arrivals?',
    a: 'Yes. Every Eagle Eye pickup at JFK includes a full meet and greet. Your chauffeur waits in the arrivals hall past baggage claim with a sign bearing your name. You also receive a WhatsApp message with the exact meeting point before you land.',
  },
  {
    q: 'What happens if my JFK flight is delayed?',
    a: 'We track your incoming flight in real time. If your arrival is delayed, your driver adjusts their pickup time automatically — no rebooking, no extra charge. Your flat rate applies regardless of how long the delay is.',
  },
  {
    q: 'Do you meet at all JFK terminals?',
    a: 'Yes. We serve Terminal 1, 4, 5, 7, and 8 at JFK. Provide your terminal and flight number at booking. Your driver meets you at the Ground Transportation level of your specific terminal with a name sign.',
  },
];


export default function JFKToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK to Manhattan Black Car Service"
        description="Premium black car service from JFK Airport to Manhattan. Flat rates, real-time flight tracking, meet & greet at arrivals. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              JFK to Manhattan Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              The most-traveled airport route in New York City — done right. Flat-rate black car service
              from JFK Airport to any Manhattan neighborhood. Flight tracking, meet &amp; greet, and a
              professional chauffeur waiting the moment you clear baggage claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book JFK to Manhattan
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
              Popular Routes from JFK to Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { from: 'JFK → Midtown Manhattan', time: '35–50 min' },
                { from: 'JFK → Financial District / Wall Street', time: '35–50 min' },
                { from: 'JFK → Times Square / Theater District', time: '40–50 min' },
                { from: 'JFK → Chelsea / Meatpacking District', time: '35–50 min' },
                { from: 'JFK → Upper East Side', time: '40–55 min' },
                { from: 'JFK → Upper West Side', time: '45–60 min' },
                { from: 'JFK → SoHo / Tribeca', time: '35–50 min' },
                { from: 'JFK → Harlem / East Harlem', time: '45–60 min' },
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
              Why Eagle Eye for JFK to Manhattan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during peak hours.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign past baggage claim — no searching for your ride at the curb.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your JFK arrival and adjust your driver automatically for any delay — at no extra charge.' },
                { title: 'Flexible Cancellation', body: 'Plans change — contact us directly and we will work with you. No automated penalty systems.' },
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your JFK arrival and adjust pickup if your flight is delayed or early. No extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim. No curbside hunting.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking. It does not change due to traffic, time of day, or demand.</li>
                <li><strong className="text-brand-black">Luxury vehicle</strong> — business sedan or SUV, always clean and well-maintained.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands. No rush to get out fast.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              JFK to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              JFK Airport is located in Queens, approximately 16 miles southeast of Midtown Manhattan.
              Drive time is typically 35–50 minutes in normal traffic. Peak hours — weekday mornings
              (7–9am) and evenings (5–8pm) — can extend the ride to 60–75 minutes.
            </p>
            <p className="text-brand-grey mb-4">
              Your chauffeur takes the most efficient route depending on real-time traffic — typically
              the Van Wyck Expressway to the Queens-Midtown Tunnel or the Belt Parkway to the Brooklyn Bridge,
              depending on your Manhattan destination.
            </p>
            <p className="text-brand-grey">
              All JFK terminal pickups are handled at the arrivals level. Your driver will send you the exact
              meeting spot via WhatsApp before you land.
            </p>
          </div>
        </section>

        <section className="pb-16 bg-brand-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-white mb-2">
              JFK Terminal Guide — Where Your Driver Meets You
            </h2>
            <p className="text-brand-silver mb-6 text-sm">All pickups are at the arrivals level. Your chauffeur sends the exact meeting spot via WhatsApp before you land.</p>
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
                    <td className="p-3 font-medium text-brand-black">T1</td>
                    <td className="p-3 text-brand-grey">Lufthansa, JAL, Air Canada &amp; international carriers</td>
                    <td className="p-3 text-brand-grey">Ground floor arrivals — follow signs to exits</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">T4</td>
                    <td className="p-3 text-brand-grey">Delta (main hub), Air France, KLM, Cathay Pacific</td>
                    <td className="p-3 text-brand-grey">Follow signs to Ground Transportation after baggage claim</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">T5</td>
                    <td className="p-3 text-brand-grey">JetBlue (all domestic &amp; Caribbean flights)</td>
                    <td className="p-3 text-brand-grey">Compact terminal — quick exit to arrivals</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">T7</td>
                    <td className="p-3 text-brand-grey">British Airways, Finnair, Korean Air</td>
                    <td className="p-3 text-brand-grey">Ground Transportation Level 1</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">T8</td>
                    <td className="p-3 text-brand-grey">American Airlines, British Airways (shared with T7)</td>
                    <td className="p-3 text-brand-grey">Level 1 pickup area — follow arrivals signage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              How Your JFK Arrival Pickup Works
            </h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Book in advance', body: 'Provide your flight number, JFK terminal, and arrival time when booking. Your flat rate is confirmed instantly.' },
                { step: '2', title: 'Driver tracks your flight live', body: 'We monitor your JFK arrival in real time — if your flight is early or delayed, your chauffeur adjusts automatically at no extra charge.' },
                { step: '3', title: 'Meet your driver at arrivals', body: 'Your chauffeur waits in the arrivals hall with a name sign, just past baggage claim. You also receive a WhatsApp message with the exact meeting point before you land.' },
                { step: '4', title: 'Door-to-door to your Manhattan destination', body: 'Sit back and ride in a luxury black car to any Manhattan address. Flat rate — confirmed at booking, never changes.' },
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
              Manhattan Neighborhoods We Serve from JFK
            </h2>
            <p className="text-brand-grey mb-6 text-sm">We serve every Manhattan neighborhood and beyond. Browse popular destinations below.</p>
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
              <Link href="/services/routes/manhattan-to-jfk-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to JFK</div>
                <div className="text-sm text-brand-grey mt-1">Departures — door-to-door service</div>
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
              JFK to Manhattan Black Car Service — FAQ
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
                Book Your JFK to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Instant confirmation. No surge pricing. Professional chauffeur waiting when you land.</p>
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
