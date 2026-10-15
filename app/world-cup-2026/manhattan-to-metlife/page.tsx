import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan to MetLife Stadium | World Cup 2026 Car Service',
  description:
    'Manhattan to MetLife Stadium car service — ~10 miles, flat-rate chauffeur for World Cup 2026, games & concerts. Door-to-door, post-event pickup. No surge.',
  keywords: [
    'Manhattan to MetLife Stadium',
    'Manhattan to MetLife car service',
    'MetLife Stadium World Cup 2026 car service',
    'NYC to MetLife Stadium',
    'Manhattan MetLife Stadium chauffeur',
    'Times Square to MetLife Stadium',
    'World Cup 2026 final transportation',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/manhattan-to-metlife` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/world-cup-2026/manhattan-to-metlife`,
    title: 'Manhattan to MetLife Stadium | World Cup 2026 Car Service | Eagle Eye',
    description:
      'Flat-rate chauffeur from any Manhattan address to MetLife Stadium — ~10 miles, door-to-door, post-event pickup, no surge. World Cup 2026, games & concerts.',
  },
};

const faqs = [
  {
    q: 'How far is MetLife Stadium from Manhattan, and how long does it take?',
    a: 'MetLife Stadium in East Rutherford, NJ is roughly 10 miles from Midtown Manhattan via the Lincoln Tunnel and NJ Route 3. On a normal day the drive is about 20–30 minutes; on event days — and especially for the World Cup — allow 45–75 minutes and plan to arrive early. Your chauffeur monitors live traffic and plans the departure time and route (Lincoln Tunnel or George Washington Bridge) accordingly.',
  },
  {
    q: 'Do you provide car service to MetLife for the 2026 World Cup?',
    a: 'Yes. MetLife Stadium hosts eight FIFA World Cup 26 matches, culminating in the Final on Sunday, July 19, 2026. We provide flat-rate, door-to-door transfers from any Manhattan hotel or address to the stadium for every match, with a pre-arranged post-match pickup so you are not stranded in the crowd afterward. Book early — demand around the Final and the New York/New Jersey matches will be extreme.',
  },
  {
    q: 'What is the best way to get from Manhattan to MetLife?',
    a: 'Pre-booked private car service is the most reliable option. NJ Transit runs event trains from Secaucus, but they are crowded and slow to clear after big events, and rideshares surge heavily on game and concert nights. A flat-rate chauffeur from Eagle Eye locks your price at booking and gives you door-to-door service from any Manhattan address, with luggage help and a driver who waits for you afterward.',
  },
  {
    q: 'How much does car service from Manhattan to MetLife cost?',
    a: 'Eagle Eye uses flat-rate pricing confirmed at booking with no surge. The fare depends on your exact Manhattan pickup location and vehicle class (sedan, SUV, or Sprinter for groups). Get an instant quote on our booking page — the price you see is locked, even on a World Cup Final night.',
  },
  {
    q: 'Where does the car drop off and pick up at MetLife on event days?',
    a: 'On major event and World Cup days there is a security perimeter around MetLife, and permitted drop-off and pickup points change with the event plan. Your chauffeur uses the closest authorized drop point to the gates and pre-arranges a specific post-event pickup spot, then contacts you by WhatsApp when it is time to walk out — no hunting for a car in a packed lot.',
  },
  {
    q: 'How early should I leave Manhattan for a World Cup match at MetLife?',
    a: 'For a World Cup match, plan to arrive at the stadium 2–3 hours before kickoff — security screening, fan zones, and road management around MetLife take time. From Manhattan that usually means leaving 3–4 hours before kickoff. We will recommend an exact departure window based on your seat location, the match, and live traffic.',
  },
  {
    q: 'Do you pick up from Manhattan hotels?',
    a: 'Yes. We offer concierge-style pickup from any Manhattan hotel or residence — Midtown, Times Square, Upper East Side, Tribeca, the Financial District, or anywhere in the borough. Your driver is at the entrance at your scheduled time and helps with bags and gear.',
  },
  {
    q: 'Can you handle groups going to MetLife together?',
    a: 'Yes. For families, corporate suites, and fan groups we offer First Class SUVs (up to 7) and Sprinter vans for larger parties, so everyone travels together from Manhattan and leaves together after the match — one flat rate, one pickup, one driver.',
  },
];

export default function ManhattanToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Manhattan to MetLife Stadium Car Service" description="Flat-rate chauffeur from Manhattan to MetLife Stadium for the 2026 World Cup, games, and concerts. Door-to-door from any Manhattan hotel or address, ~10 miles, post-event pickup, no surge pricing." areaServed="Manhattan, New York" url={`${siteUrl}/world-cup-2026/manhattan-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'MetLife Stadium Transportation', url: `${siteUrl}/world-cup-2026` }, { name: 'Manhattan to MetLife', url: `${siteUrl}/world-cup-2026/manhattan-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">MetLife Stadium · East Rutherford, NJ · World Cup 2026</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Manhattan to MetLife Stadium — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flat-rate chauffeur from any Manhattan hotel, residence, or office to MetLife Stadium —
            about 10 miles and 25 minutes from Midtown on a normal day. Host of eight 2026 World Cup
            matches, including the Final on July 19, 2026. No surge pricing — your fare is locked at booking.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>📍 ~10 miles from Midtown</span>
            <span>⏱ ~25 min (non-event)</span>
            <span>💰 Flat rate — no surge</span>
            <span>🚪 Door-to-door pickup</span>
            <span>📱 Post-event pickup included</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Why Take a Car from Manhattan to MetLife?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Pickup at Your Hotel Door', body: 'Your chauffeur meets you at the hotel entrance or lobby, loads your bags, and takes you directly to MetLife — no walking to Secaucus or a train platform with gear.' },
              { title: 'No Surge After the Event', body: 'On the return, rideshares surge on big game and concert nights and can be nearly impossible to get. Your pre-booked Eagle Eye price never changes, regardless of demand.' },
              { title: 'Any Manhattan Address', body: 'Times Square, Upper East Side, Tribeca, Financial District, Chelsea — we pick up from anywhere in the borough, not just Midtown.' },
              { title: 'Event-Day Traffic Planned In', body: 'Your driver factors in stadium traffic, road closures, and the Lincoln Tunnel vs. GWB decision, and plans departure time so you arrive with time to spare.' },
              { title: 'Driver Waits for You', body: 'Your chauffeur stays through the event and is pre-positioned for your post-match pickup — you leave when you are ready, not when a rideshare finally appears.' },
              { title: 'Groups Travel Together', body: 'SUVs and Sprinter vans keep families, suites, and fan groups in one vehicle, one flat rate, from Manhattan to the gates and back.' },
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
              { stat: '~10 miles', label: 'From Midtown Manhattan' },
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
            2026. Manhattan is the natural base for fans, and demand for reliable ground transportation on
            match days will be unlike anything the region has seen. Eagle Eye is booking World Cup transfers
            now — lock in a flat-rate, door-to-door chauffeur from your Manhattan hotel to every match, with
            a pre-arranged pickup for the walk back.
          </p>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Manhattan to MetLife on Event Day: What to Expect
          </h2>
          <div className="space-y-4 text-brand-grey text-sm leading-relaxed">
            <p>
              The drive from Manhattan to MetLife is short — about 10 miles — but event-day timing is
              everything. From Midtown, the fastest route is usually the Lincoln Tunnel to NJ Route 3 West,
              which leads directly toward the Meadowlands Sports Complex; from Upper Manhattan, the George
              Washington Bridge to I-95 can be quicker. Your chauffeur watches live conditions and picks
              the better of the two on the day.
            </p>
            <p>
              On major event days, and above all for the World Cup, expect a security perimeter, managed
              traffic patterns, and moving road closures around the stadium. Permitted drop-off points shift
              with the event plan, so your driver uses the closest authorized drop to the gates and
              pre-arranges a specific post-event pickup spot — then messages you on WhatsApp when it is time
              to walk out, so you are not searching a packed lot for a car.
            </p>
            <p>
              For a World Cup match, plan to be at the stadium 2–3 hours before kickoff for screening and the
              fan zones, which typically means leaving Manhattan 3–4 hours ahead. Because your fare is a flat
              rate locked at booking, none of that traffic changes your price — and unlike a rideshare, your
              driver is already waiting when the final whistle blows.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">Manhattan to MetLife — FAQ</h2>
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
              { label: 'Newark to MetLife', href: '/world-cup-2026/newark-to-metlife' },
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
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Manhattan → MetLife Now</h2>
          <p className="text-brand-silver text-sm mb-6">Flat-rate · Door-to-door · Post-event pickup · No surge · World Cup 2026</p>
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
