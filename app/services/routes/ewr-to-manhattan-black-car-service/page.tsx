import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Newark Airport to Manhattan Car Service | EWR Tolls',
  description:
    'Newark Airport (EWR) to Manhattan car service — flat rates, all tolls included, real-time flight tracking, meet & greet at arrivals. Professional.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a black car from Newark Airport to Manhattan?',
    a: 'All rates are flat and confirmed at booking — all tolls included, no surge, no hidden fees. For reference, a taxi from EWR to Midtown typically runs $60–90 plus tolls, and an Uber ranges from about $50–80 and can exceed $120 with surge; a pre-booked black car is often the more predictable and comfortable choice. Get an exact quote by entering your EWR terminal and Manhattan destination on the booking page.',
  },
  {
    q: 'How far is Newark Airport from Manhattan, and how long does it take?',
    a: 'Newark Liberty (EWR) is about 15 miles from Midtown Manhattan and about 14 miles from Lower Manhattan and the Financial District. The drive is typically 30–50 minutes depending on your destination and the tunnel used; morning rush (7–9am) and evening peak (4–7pm) can add 20–30 minutes. EWR is actually the closest of the three major airports to Lower Manhattan and the west side.',
  },
  {
    q: 'Are tolls included in the EWR to Manhattan price?',
    a: 'Yes — every toll is included in your flat rate: the EWR airport egress fee and either the Lincoln Tunnel or Holland Tunnel. There are no toll surcharges or add-ons at drop-off. The price you see at booking is the price you pay.',
  },
  {
    q: 'Where does my chauffeur meet me at Newark Airport?',
    a: 'Your chauffeur meets you in the ground transportation area of your terminal (A, B, or C) with a name sign. You receive a WhatsApp message with the exact meeting point before landing, so there is no searching or walking to a remote rideshare lot.',
  },
  {
    q: 'Do you track flights at Newark Liberty Airport?',
    a: 'Yes. We monitor your EWR flight in real time and adjust pickup automatically for any delays or early arrivals — at no extra charge — and include 60 minutes of complimentary wait time after you land.',
  },
  {
    q: 'Which route do you take from EWR to Manhattan?',
    a: 'Your chauffeur selects the fastest route based on real-time traffic — typically the New Jersey Turnpike to the Lincoln Tunnel for Midtown and uptown destinations, or the Holland Tunnel for Lower Manhattan, SoHo, Tribeca, and the Financial District.',
  },
  {
    q: 'Is Newark (EWR) or JFK better for getting to Manhattan?',
    a: 'It depends where in Manhattan you are going. For Lower Manhattan, the Financial District, and the west side, Newark (EWR) is often the closest and most convenient. For the east side, JFK can be comparable. Both are well under an hour by car outside of peak traffic, and EWR is frequently the quicker choice into Downtown.',
  },
];


export default function EWRToManhattanBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Newark Airport to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport to Manhattan Black Car Service"
        description="Premium black car service from Newark Liberty Airport (EWR) to Manhattan. Flat rates, tolls included, flight tracking, meet & greet. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/ewr-to-manhattan-black-car-service`}
      />
      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Newark Airport to Manhattan Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-6">
              EWR to Manhattan, done right. Flat-rate black car service from Newark Liberty Airport
              to any Manhattan neighborhood — all tolls included, professional chauffeur waiting at arrivals,
              and a price that does not change when traffic backs up on the turnpike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book EWR to Manhattan
              </Link>
              <Link href="/services/airport/ewr" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All EWR Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Popular Routes from EWR to Manhattan
            </h2>
            <div className="space-y-3">
              {[
                { from: 'EWR → Midtown Manhattan', time: '30–45 min' },
                { from: 'EWR → Financial District / Wall Street', time: '30–45 min' },
                { from: 'EWR → Times Square / Theater District', time: '30–45 min' },
                { from: 'EWR → Chelsea / Meatpacking District', time: '30–45 min' },
                { from: 'EWR → Upper East Side', time: '40–55 min' },
                { from: 'EWR → Upper West Side', time: '40–55 min' },
                { from: 'EWR → SoHo / Tribeca', time: '30–45 min' },
                { from: 'EWR → Harlem', time: '45–60 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">All rates are flat. Tolls included. No surge pricing — ever. <Link href="/book" className="underline">Get an instant quote →</Link></p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for Newark Airport to Manhattan
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat Rate — All Tolls Included', body: 'Your price includes all tunnel and airport tolls. What you see at booking is what you pay — nothing added at the end.' },
                { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
                { title: 'Meet & Greet at Arrivals', body: 'Your chauffeur waits with a name sign at your EWR terminal — Terminals A, B, and C all covered.' },
                { title: 'Real-Time Flight Tracking', body: 'We monitor your EWR arrival and adjust your driver automatically for any delay — at no extra charge.' },
                { title: 'No Hidden Fees', body: 'All tolls and tips are included in your flat rate. No surprise charges when you arrive at your destination.' },
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
                <li><strong className="text-brand-black">Real-time flight tracking</strong> — we monitor your EWR arrival and adjust pickup for delays at no extra charge.</li>
                <li><strong className="text-brand-black">Meet &amp; greet at arrivals</strong> — your chauffeur waits with a name sign past baggage claim in your terminal.</li>
                <li><strong className="text-brand-black">All tolls included</strong> — Lincoln Tunnel, Holland Tunnel, and airport tolls are in your quoted price. Zero hidden fees.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your price is confirmed at booking and never changes due to traffic or demand.</li>
                <li><strong className="text-brand-black">Complimentary wait time</strong> — 60 minutes of free wait time after your flight lands.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your ride.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Newark Airport to Manhattan — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              Newark Liberty Airport (EWR) is located in New Jersey, approximately 16 miles from Midtown Manhattan.
              The drive takes 30–45 minutes in normal traffic via the Lincoln Tunnel or Holland Tunnel,
              depending on your destination and real-time conditions.
            </p>
            <p className="text-brand-grey mb-4">
              EWR has three terminals: A (United), B (American, British Airways, others), and C (United).
              Your chauffeur meets you at the ground transportation area of your terminal with a name sign.
            </p>
            <p className="text-brand-grey">
              During peak hours, the approach to the Lincoln Tunnel can add 20–30 minutes. We build this
              into our scheduling so your driver is never rushed.
            </p>
          </div>
        </section>

        <section className="pb-16 bg-brand-offwhite">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              Newark Airport — Terminal Guide
            </h2>
            <p className="text-brand-grey mb-6 text-sm">Your driver meets you at Ground Transportation Level 1 of your terminal. Provide your terminal and flight number at booking — we track your flight live and adjust for delays.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-black text-brand-white">
                    <th className="text-left p-3 font-semibold">Terminal</th>
                    <th className="text-left p-3 font-semibold">Airlines</th>
                    <th className="text-left p-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">Terminal A</td>
                    <td className="p-3 text-brand-grey">United domestic short-haul, some international</td>
                    <td className="p-3 text-brand-grey">Ground Transportation Level 1 — AirTrain connects all terminals</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-3 font-medium text-brand-black">Terminal B</td>
                    <td className="p-3 text-brand-grey">United international, Air Canada, Lufthansa (some)</td>
                    <td className="p-3 text-brand-grey">AirTrain accessible — follow signs to Ground Transportation</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-3 font-medium text-brand-black">Terminal C</td>
                    <td className="p-3 text-brand-grey">United hub (majority of flights), most United gates</td>
                    <td className="p-3 text-brand-grey">Most EWR departures use Terminal C — Ground Transportation Level 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-brand-grey text-sm mt-4">All tolls (Holland Tunnel or Lincoln Tunnel) are included in your flat rate from EWR to Manhattan. No hidden charges. Your driver meets you at Ground Transportation Level 1.</p>
          </div>
        </section>

        <section className="pb-16 bg-brand-charcoal">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="font-serif text-2xl font-semibold text-brand-white mb-8">
              How It Works — EWR to Manhattan
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Book in advance', body: 'Provide your flight number, terminal, and pickup address. We confirm your driver and flat rate immediately.' },
                { step: '2', title: 'Driver tracks your flight', body: 'We monitor live flight data. If your flight is early or delayed, your driver adjusts automatically at no extra charge.' },
                { step: '3', title: 'Meet your driver at arrivals', body: 'Your chauffeur waits at the arrivals level with a name sign. Text us when you land and we&apos;ll confirm the exact meeting point.' },
                { step: '4', title: 'Door to door to Manhattan', body: 'Flat rate, no meter running, no surprises. Your price was confirmed at booking.' },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-3">
                  <div className="w-10 h-10 bg-brand-white text-brand-black font-bold flex items-center justify-center text-lg shrink-0">{item.step}</div>
                  <div>
                    <div className="font-semibold text-brand-white mb-1">{item.title}</div>
                    <p className="text-brand-silver text-sm">{item.body}</p>
                  </div>
                </div>
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
              <Link href="/services/routes/manhattan-to-ewr-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Manhattan to EWR</div>
                <div className="text-sm text-brand-grey mt-1">Departures — door-to-door service</div>
              </Link>
              <Link href="/services/airport/ewr" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">EWR Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All EWR routes &amp; terminals</div>
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
              Newark Airport to Manhattan Black Car — FAQ
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
                Book Your Newark Airport to Manhattan Black Car
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. All tolls included. Chauffeur waiting when you land.</p>
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
