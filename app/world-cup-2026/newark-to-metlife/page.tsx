import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Newark to MetLife Stadium | World Cup 2026 Car Service',
  description:
    'Newark Airport (EWR) to MetLife Stadium — the closest airport, ~10 miles / 15 min. Flat-rate World Cup 2026, game & concert transfers. Meet & greet, no surge.',
  keywords: [
    'Newark Airport to MetLife Stadium',
    'EWR to MetLife Stadium',
    'EWR to MetLife World Cup 2026',
    'Newark airport MetLife car service',
    'closest airport to MetLife Stadium',
    'Newark to MetLife chauffeur',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/newark-to-metlife` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/world-cup-2026/newark-to-metlife`,
    title: 'Newark to MetLife Stadium | World Cup 2026 Car Service | Eagle Eye',
    description:
      'EWR is the closest airport to MetLife — ~10 miles, ~15 minutes. Flat-rate, flight-tracked transfers for World Cup 2026, games & concerts, with post-event pickup.',
  },
};

const faqs = [
  {
    q: 'How far is Newark Airport from MetLife Stadium, and how long is the drive?',
    a: 'Newark Liberty International Airport (EWR) is approximately 10 miles from MetLife Stadium — the closest major airport. The drive is typically 15–25 minutes up the New Jersey Turnpike to NJ Route 3. On event days and during the World Cup, allow extra time for stadium traffic, but EWR remains the fastest airport option for MetLife.',
  },
  {
    q: 'Do you provide EWR to MetLife transfers for the 2026 World Cup?',
    a: 'Yes. MetLife Stadium hosts eight FIFA World Cup 26 matches, including the Final on Sunday, July 19, 2026, and Newark is the closest airport to the stadium — a major advantage on match days. We run flat-rate, flight-tracked transfers from EWR straight to the gates or your hotel, with a pre-arranged post-match pickup. Book early; World Cup demand will be extreme.',
  },
  {
    q: 'Should I fly into Newark for a MetLife event?',
    a: 'If you are choosing an airport specifically for events at MetLife, EWR is the best choice. It is about 10 miles from the stadium, versus roughly 18 miles from LGA and 28 from JFK — the transfer is shorter, faster, and usually cheaper, which matters most on a busy World Cup or concert day.',
  },
  {
    q: 'Can I go directly from EWR to MetLife Stadium?',
    a: 'Yes. Eagle Eye offers direct airport-to-stadium transfers — we meet you at arrivals with a name sign, load your luggage, and take you straight to MetLife. No hotel stop required if you are heading directly to an event, and we hold your bags in the vehicle during the match if needed.',
  },
  {
    q: 'What if my flight into Newark is delayed?',
    a: 'We track your flight in real time. If it is delayed, your driver adjusts pickup timing automatically at no extra charge — important when you are connecting straight to a game or a World Cup match.',
  },
  {
    q: 'Where does the car drop off and pick up at MetLife on event days?',
    a: 'On major event and World Cup days there is a security perimeter and managed traffic around MetLife, and permitted drop-off points shift with the event plan. Your chauffeur uses the closest authorized drop to the gates and pre-arranges a specific post-event pickup point, then contacts you on WhatsApp when it is time to walk out.',
  },
  {
    q: 'Can you take me from EWR to my hotel first, then to MetLife?',
    a: 'Yes. Multi-leg bookings are available — EWR to hotel, then hotel to MetLife on event day — or EWR straight to the stadium if you are heading directly there. We coordinate the whole itinerary under one flat-rate account.',
  },
];

export default function NewarkToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Newark Airport to MetLife Stadium Car Service" description="Direct flat-rate transfer from Newark Liberty Airport (EWR) to MetLife Stadium for the 2026 World Cup, games, and concerts. The closest airport to MetLife — ~10 miles, meet & greet, flight tracking, no surge pricing." areaServed="Newark, New Jersey" url={`${siteUrl}/world-cup-2026/newark-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'MetLife Stadium Transportation', url: `${siteUrl}/world-cup-2026` }, { name: 'Newark to MetLife', url: `${siteUrl}/world-cup-2026/newark-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">MetLife Stadium · Closest Airport · World Cup 2026</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Newark Airport (EWR) to MetLife Stadium — Transfer
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            EWR is the closest major airport to MetLife Stadium — just 10 miles, about 15 minutes up the
            NJ Turnpike. The fastest airport-to-stadium transfer for any World Cup match, game, or concert.
            Meet &amp; greet at arrivals, flat-rate pricing, no surge. Host of the World Cup Final on July 19, 2026.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>📍 ~10 miles to MetLife</span>
            <span>⏱ ~15 min (non-event)</span>
            <span>✈️ Closest airport to stadium</span>
            <span>🛬 Meet &amp; greet at arrivals</span>
            <span>🔒 Flat rate — no surge</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">EWR → MetLife: The Fastest Transfer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Only ~10 Miles Away', body: 'MetLife Stadium is closer to Newark Airport than any other major airport. The drive is 15–25 minutes — you can land and be at the stadium in under an hour even accounting for baggage.' },
              { title: 'Direct Airport-to-Stadium', body: 'No connections. No train transfers. No baggage shuttles. We meet you at EWR arrivals with a name sign and take you directly to the MetLife gates.' },
              { title: 'Flight Tracked Automatically', body: 'Your driver monitors your inbound flight live. Landing early or delayed — your driver adjusts at no extra charge.' },
              { title: 'Luggage Handled', body: 'Coming straight from the airport with bags? Your chauffeur assists with luggage from arrivals to vehicle, with plenty of room in our SUVs for gear and a group.' },
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
              { stat: '~10 miles', label: 'From Newark (EWR) — the closest airport' },
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
            2026. Newark&apos;s proximity makes it the smartest arrival airport for match days, and reliable
            ground transportation will still be at a premium. Eagle Eye is booking World Cup transfers now —
            lock in a flat-rate, flight-tracked chauffeur from EWR to the stadium or your hotel, with a
            pre-arranged pickup for the trip back.
          </p>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Newark to MetLife on Event Day: What to Expect
          </h2>
          <div className="space-y-4 text-brand-grey text-sm leading-relaxed">
            <p>
              Newark to MetLife is the shortest airport run of them all — about 10 miles north on the New
              Jersey Turnpike to NJ Route 3, which leads straight into the Meadowlands Sports Complex. Both
              the airport and the stadium sit on the same side of the Hudson, so there is no bridge or tunnel
              crossing and no city traffic to fight through.
            </p>
            <p>
              On major event days, and above all for the World Cup, expect a security perimeter, managed
              traffic, and moving road closures around the stadium. Permitted drop-off points shift with the
              event plan, so your driver uses the closest authorized drop to the gates and pre-arranges a
              specific post-event pickup — then messages you on WhatsApp when it is time to walk out.
            </p>
            <p>
              For a World Cup match, plan to be at the stadium 2–3 hours before kickoff for screening and fan
              zones. Because your fare is a flat rate locked at booking, event-day traffic never changes your
              price — and unlike a rideshare, your driver is already waiting when the final whistle blows.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">Newark to MetLife — FAQ</h2>
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
              { label: 'JFK to MetLife', href: '/world-cup-2026/jfk-to-metlife' },
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
          <h2 className="font-serif text-2xl font-semibold mb-3">Book EWR → MetLife Now</h2>
          <p className="text-brand-silver text-sm mb-6">Meet &amp; greet · Flat-rate · Direct to stadium · No surge · World Cup 2026</p>
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
