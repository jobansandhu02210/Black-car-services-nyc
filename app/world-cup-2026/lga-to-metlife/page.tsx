import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'LaGuardia to MetLife Stadium | World Cup 2026 Car Service',
  description:
    'LaGuardia (LGA) to MetLife Stadium — ~18 miles, direct World Cup 2026, game & concert transfers. Meet & greet at Terminal B & C, flat-rate. No surge.',
  keywords: [
    'LaGuardia to MetLife Stadium',
    'LGA to MetLife Stadium',
    'LGA to MetLife World Cup 2026',
    'LaGuardia airport MetLife car service',
    'LGA to New Jersey MetLife',
    'LaGuardia to MetLife chauffeur',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/lga-to-metlife` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/world-cup-2026/lga-to-metlife`,
    title: 'LaGuardia to MetLife Stadium | World Cup 2026 Car Service | Eagle Eye',
    description:
      'Direct flat-rate transfer from LGA to MetLife Stadium — ~18 miles, meet & greet at Terminal B & C, flight tracked, post-event pickup. World Cup 2026, games & concerts.',
  },
};

const faqs = [
  {
    q: 'How far is MetLife Stadium from LaGuardia, and how long does the drive take?',
    a: 'MetLife Stadium in East Rutherford, NJ is about 18 miles from LaGuardia (LGA) — typically a 30–45 minute drive over the George Washington Bridge or through the Lincoln Tunnel. On event days, allow 60+ minutes and depart early; for a World Cup match, plan even more. Your chauffeur watches live traffic and picks the fastest crossing.',
  },
  {
    q: 'Do you provide LGA to MetLife transfers for the 2026 World Cup?',
    a: 'Yes. MetLife Stadium hosts eight FIFA World Cup 26 matches, including the Final on Sunday, July 19, 2026. LaGuardia is a convenient domestic gateway for fans arriving from within North America, and we run flat-rate, flight-tracked transfers from LGA straight to the stadium or your Manhattan hotel, with a pre-arranged post-match pickup. Book early — World Cup demand will be intense.',
  },
  {
    q: 'Is there a direct transfer from LGA to MetLife?',
    a: 'Yes. Eagle Eye offers direct, no-connection transfers from LGA Terminal B or C to MetLife Stadium — no AirTrain, no NJ Transit, no bus. Just one vehicle, door-to-door, with your driver handling the whole route.',
  },
  {
    q: 'Where does my driver meet me at LaGuardia?',
    a: 'Your chauffeur meets you inside the terminal at arrivals with a name sign. We serve the newly rebuilt Terminal B and Terminal C at LGA, and we track your flight so your driver is there when you land — and waits at no extra charge if you are delayed.',
  },
  {
    q: 'Can I go from LGA to my Manhattan hotel first, then to MetLife on event day?',
    a: 'Yes. Many guests book LGA to a hotel on arrival day, then a separate Manhattan-to-MetLife transfer on event day. We coordinate both bookings under one account and can assign the same driver for the trip.',
  },
  {
    q: 'Where does the car drop off and pick up at MetLife on event days?',
    a: 'On major event and World Cup days there is a security perimeter and managed traffic around MetLife, and permitted drop-off points shift with the event plan. Your chauffeur uses the closest authorized drop to the gates and pre-arranges a specific post-event pickup point, then contacts you on WhatsApp when it is time to walk out.',
  },
  {
    q: 'How much does LGA to MetLife car service cost?',
    a: 'Eagle Eye uses flat-rate pricing confirmed at booking with no surge. The fare depends on your vehicle class (sedan, SUV, or Sprinter for groups) and any added stops. Get an instant quote on our booking page — the price is locked, even on a World Cup Final night.',
  },
];

export default function LGAToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="LaGuardia Airport to MetLife Stadium Car Service" description="Direct flat-rate transfer from LaGuardia Airport (LGA) to MetLife Stadium for the 2026 World Cup, games, and concerts. ~18 miles, meet & greet at Terminal B & C, flight tracking, no surge pricing." areaServed="New York City, NY" url={`${siteUrl}/world-cup-2026/lga-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'MetLife Stadium Transportation', url: `${siteUrl}/world-cup-2026` }, { name: 'LGA to MetLife', url: `${siteUrl}/world-cup-2026/lga-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">MetLife Stadium · LaGuardia Airport Transfer · World Cup 2026</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            LaGuardia (LGA) to MetLife Stadium — Transfer
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Direct, no-connection transfer from LaGuardia to MetLife Stadium — about 18 miles, roughly
            35 minutes on a normal day. Meet &amp; greet at the rebuilt Terminal B or C, flat-rate pricing,
            no surge ever. Host of the 2026 World Cup Final on July 19, 2026.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>📍 ~18 miles to MetLife</span>
            <span>⏱ ~35 min (non-event)</span>
            <span>✈️ Terminal B &amp; C covered</span>
            <span>🛬 Meet &amp; greet at arrivals</span>
            <span>🔒 Flat rate — no surge</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">LGA to MetLife — What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Newly Rebuilt Terminals', body: 'LGA Terminal B and Terminal C are both modern, and the pickup flow for chauffeur services is clear. Your driver knows exactly where to meet you.' },
              { title: 'No Connections', body: 'No AirTrain, no NJ Transit transfers. LGA to MetLife is a direct drive over the George Washington Bridge or through the Lincoln Tunnel — single vehicle, door-to-door.' },
              { title: 'Flight Delay Protected', body: 'LGA is known for weather delays. We track your flight and adjust automatically — your driver is never at the airport before you arrive.' },
              { title: 'Direct to Stadium or Hotel', body: 'Arriving day-of-event? Straight to MetLife. Arriving early? To your hotel. Either way, one booking handles it.' },
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
              { stat: '~18 miles', label: 'From LaGuardia (LGA)' },
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
            2026. LaGuardia is an easy domestic gateway for fans flying in from around North America, and
            reliable ground transportation on match days will be at a premium. Eagle Eye is booking World
            Cup transfers now — lock in a flat-rate, flight-tracked chauffeur from LGA to the stadium or your
            hotel, with a pre-arranged pickup for the trip back.
          </p>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            LGA to MetLife on Event Day: What to Expect
          </h2>
          <div className="space-y-4 text-brand-grey text-sm leading-relaxed">
            <p>
              LaGuardia to MetLife is about 18 miles. From LGA, your chauffeur typically heads to the George
              Washington Bridge via the Grand Central Parkway and Cross Bronx Expressway, or crosses into
              Manhattan over the RFK (Triborough) Bridge and takes the Lincoln Tunnel, before joining NJ Route
              3 toward the Meadowlands. The driver chooses the faster crossing based on live traffic that day.
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">LGA to MetLife — FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (<div key={f.q} className="border-b border-brand-light pb-6"><h3 className="font-semibold text-brand-black mb-2">{f.q}</h3><p className="text-brand-grey text-sm leading-relaxed">{f.a}</p></div>))}
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
              { label: 'JFK to MetLife', href: '/world-cup-2026/jfk-to-metlife' },
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
          <h2 className="font-serif text-2xl font-semibold mb-3">Book LGA → MetLife Now</h2>
          <p className="text-brand-silver text-sm mb-6">Meet &amp; greet · Direct transfer · Flat-rate · No surge · World Cup 2026</p>
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
