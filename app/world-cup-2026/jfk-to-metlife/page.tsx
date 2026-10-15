import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK to MetLife Stadium | World Cup 2026 Car Service',
  description:
    'JFK to MetLife Stadium car service — ~28 miles, direct World Cup 2026, game & concert transfers. Meet & greet all terminals, flat-rate. No surge.',
  keywords: [
    'JFK to MetLife Stadium',
    'JFK airport MetLife Stadium car service',
    'JFK to MetLife World Cup 2026',
    'JFK airport to MetLife chauffeur',
    'JFK to New Jersey MetLife stadium',
    'international arrivals JFK MetLife Stadium',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/jfk-to-metlife` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/world-cup-2026/jfk-to-metlife`,
    title: 'JFK to MetLife Stadium | World Cup 2026 Car Service | Eagle Eye',
    description:
      'Direct flat-rate transfer from JFK to MetLife Stadium — ~28 miles, meet & greet at all terminals, flight tracked, post-event pickup. World Cup 2026, games & concerts.',
  },
};

const faqs = [
  {
    q: 'How far is MetLife Stadium from JFK, and how long does the drive take?',
    a: 'MetLife Stadium in East Rutherford, NJ is about 28 miles from JFK — typically a 45–60 minute drive, crossing the city to New Jersey. On event days and during the World Cup, allow extra time: plan to leave JFK at least 90 minutes before you need to be at the stadium, more for a World Cup match. Your chauffeur tracks your flight and live traffic and plans the route accordingly.',
  },
  {
    q: 'Do you provide JFK to MetLife transfers for the 2026 World Cup?',
    a: 'Yes. MetLife Stadium hosts eight FIFA World Cup 26 matches, including the Final on Sunday, July 19, 2026, and JFK is the region\'s main international gateway for arriving fans. We meet you at baggage claim, handle your luggage, and take you directly to the stadium or your Manhattan hotel — flat rate, flight tracked, with a pre-arranged post-match pickup. Book early; World Cup demand will be extreme.',
  },
  {
    q: 'Do you offer meet and greet at JFK?',
    a: 'Yes. Your chauffeur meets you inside the terminal at baggage claim with a name sign, assists with luggage, and escorts you to the vehicle. We serve all JFK terminals — T1, T4, T5, T7, and T8 — and track international arrivals so your driver waits through customs delays at no extra charge.',
  },
  {
    q: 'Can I go directly from JFK to MetLife Stadium for an event?',
    a: 'Yes. We handle direct JFK-to-stadium transfers. If your flight lands with enough time before kickoff or showtime, your driver takes you straight to MetLife. We monitor your flight and adjust pickup timing so you make it — and hold your bags in the vehicle during the event if needed.',
  },
  {
    q: 'What about JFK to hotel, then hotel to MetLife on event day?',
    a: 'Yes — multi-leg bookings are available. Many visitors book JFK to a Manhattan hotel on arrival, then a separate Manhattan-to-MetLife transfer on event day. We coordinate both under one account, so your ground transportation for the whole trip is handled.',
  },
  {
    q: 'Where does the car drop off and pick up at MetLife on event days?',
    a: 'On major event and World Cup days there is a security perimeter and managed traffic around MetLife, and permitted drop-off points shift with the event plan. Your chauffeur uses the closest authorized drop to the gates and pre-arranges a specific post-event pickup point, then contacts you on WhatsApp when it is time to walk out.',
  },
  {
    q: 'How much does JFK to MetLife car service cost?',
    a: 'Eagle Eye uses flat-rate pricing confirmed at booking with no surge. The fare depends on your vehicle class (sedan, SUV, or Sprinter for groups) and any added stops. Get an instant quote on our booking page — the price is locked, even on a World Cup Final night.',
  },
];

export default function JFKToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="JFK Airport to MetLife Stadium Car Service" description="Direct flat-rate transfer from JFK International Airport to MetLife Stadium for the 2026 World Cup, games, and concerts. ~28 miles, meet & greet at all JFK terminals, flight tracking, no surge pricing." areaServed="New York City, NY" url={`${siteUrl}/world-cup-2026/jfk-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'MetLife Stadium Transportation', url: `${siteUrl}/world-cup-2026` }, { name: 'JFK to MetLife', url: `${siteUrl}/world-cup-2026/jfk-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">MetLife Stadium · International Arrivals · World Cup 2026</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            JFK Airport to MetLife Stadium — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flying into JFK for a World Cup match, game, or concert at MetLife? We meet you at baggage
            claim and take you directly to MetLife Stadium or your Manhattan hotel — about 28 miles,
            flat-rate, no surge, all terminals covered.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>📍 ~28 miles to MetLife</span>
            <span>⏱ ~45–60 min (non-event)</span>
            <span>✈️ All JFK terminals</span>
            <span>🛬 Meet &amp; greet at arrivals</span>
            <span>🔄 Flight tracked live</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Arriving at JFK for a MetLife Event</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Met at Baggage Claim', body: 'Your chauffeur is inside the terminal at arrivals with a name sign. After clearing customs and collecting baggage, you are met and escorted to your vehicle — no stress after a long flight.' },
              { title: 'Direct to MetLife or Hotel', body: 'Heading straight to a match or show? Direct to MetLife. Checking in first? Hotel pickup on event day. We handle both and coordinate your itinerary.' },
              { title: 'Delayed International Flights', body: 'JFK international arrivals can be delayed by customs processing. We track everything and your driver waits — no extra charge for tracked delays.' },
              { title: 'Group Travel Welcome', body: 'Travelling with a group? Our SUVs accommodate 5–7 passengers with luggage, and Sprinter vans handle larger parties arriving together for the World Cup.' },
            ].map((i) => (
              <div key={i.title} className="border border-brand-light bg-brand-offwhite p-6">
                <h3 className="font-semibold text-brand-black mb-2">{i.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold mb-8">World Cup 2026 at MetLife Stadium</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {[
              { stat: '8 matches', label: 'Hosted at MetLife, group stage through the Final' },
              { stat: 'July 19, 2026', label: 'The FIFA World Cup 26 Final' },
              { stat: '~82,500', label: 'Stadium capacity' },
              { stat: '~28 miles', label: 'From JFK Airport' },
            ].map((s) => (
              <div key={s.label} className="border border-brand-charcoal p-6">
                <div className="font-serif text-2xl font-semibold text-brand-white mb-1">{s.stat}</div>
                <div className="text-brand-silver text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="text-brand-silver text-sm leading-relaxed">
            MetLife Stadium — playing as &ldquo;New York New Jersey Stadium&rdquo; during the tournament — is the
            centerpiece venue of FIFA World Cup 26, hosting matches through the Final on Sunday, July 19,
            2026. As the region&apos;s primary international gateway, JFK will bring in fans from around the
            world, and reliable ground transportation on match days will be at a premium. Eagle Eye is
            booking World Cup transfers now — lock in a flat-rate, flight-tracked chauffeur from JFK to the
            stadium or your hotel, with a pre-arranged pickup for the trip back.
          </p>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            JFK to MetLife on Event Day: What to Expect
          </h2>
          <div className="space-y-4 text-brand-grey text-sm leading-relaxed">
            <p>
              JFK to MetLife is about 28 miles, and the route crosses from Queens into New Jersey — typically
              the Belt Parkway and Verrazzano-Narrows Bridge through Staten Island to the New Jersey Turnpike,
              or the BQE to the George Washington Bridge, before joining NJ Route 3 toward the Meadowlands.
              Your chauffeur picks the faster of the two based on live traffic and the time of day.
            </p>
            <p>
              On major event days, and above all for the World Cup, expect a security perimeter, managed
              traffic, and moving road closures around the stadium. Permitted drop-off points shift with the
              event plan, so your driver uses the closest authorized drop to the gates and pre-arranges a
              specific post-event pickup — then messages you on WhatsApp when it is time to walk out.
            </p>
            <p>
              Coming straight from an international arrival, build in a buffer: customs and baggage at JFK can
              run long, and a World Cup crowd at MetLife means arriving 2–3 hours before kickoff. Because your
              fare is a flat rate locked at booking, none of that traffic or delay changes your price, and
              your driver is already waiting when you land and again when the match ends.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">JFK to MetLife — FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-brand-light pb-6">
                <h3 className="font-semibold text-brand-black mb-2">{f.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-10 border-t border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-brand-grey mb-4">Other MetLife Stadium routes:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Manhattan to MetLife', href: '/world-cup-2026/manhattan-to-metlife' },
              { label: 'Newark to MetLife', href: '/world-cup-2026/newark-to-metlife' },
              { label: 'LGA to MetLife', href: '/world-cup-2026/lga-to-metlife' },
              { label: 'Long Island to MetLife', href: '/world-cup-2026/long-island-to-metlife' },
              { label: 'NYC Hotel to MetLife', href: '/world-cup-2026/nyc-hotel-to-metlife' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm border border-brand-light bg-brand-white px-4 py-2 text-brand-black hover:border-brand-dark transition-colors">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book JFK → MetLife Now</h2>
          <p className="text-brand-silver text-sm mb-6">Meet &amp; greet · All terminals · Flat-rate · No surge · World Cup 2026</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-3 text-sm hover:bg-brand-offwhite transition-colors">Request a Quote</Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-brand-silver text-white font-semibold px-8 py-3 text-sm hover:border-brand-white transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
          </div>
          <Link href="/world-cup-2026" className="text-brand-silver text-xs underline hover:text-brand-white">← All MetLife Stadium routes</Link>
        </div>
      </section>
    </>
  );
}
