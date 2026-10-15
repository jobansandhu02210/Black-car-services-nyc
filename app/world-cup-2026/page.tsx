import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'MetLife Stadium Car Service | NYC & NJ Transport | Eagle Eye',
  },
  description:
    'MetLife Stadium car service — flat-rate from Manhattan, JFK, LGA & EWR for World Cup 2026, games & concerts. No surge, door-to-door, post-event pickup.',
  keywords: [
    'MetLife Stadium car service',
    'MetLife Stadium transportation',
    'MetLife Stadium chauffeur',
    'car service to MetLife Stadium',
    'MetLife Stadium black car service',
    'Giants game car service MetLife',
    'MetLife Stadium concert transportation',
    'how to get to MetLife Stadium',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/world-cup-2026`,
    title: 'MetLife Stadium Car Service | Eagle Eye Chauffeur',
    description:
      'Flat-rate chauffeur service to MetLife Stadium for games, concerts and events. Manhattan, JFK, EWR, LGA & Long Island pickups. No surge, pre-arranged post-event pickup.',
    images: [{ url: `${getSiteUrl()}/og-image.jpg`, width: 1200, height: 630, alt: 'MetLife Stadium Car Service' }],
  },
};

const eventTypes = [
  { title: 'NFL Games', note: 'Giants & Jets home games', desc: 'Every home Sunday, Monday, and Thursday night. Skip the lot traffic — we drop you at the gate.' },
  { title: 'Concerts & Tours', note: 'Stadium shows & festivals', desc: 'Major stadium tours and summer concert series. Door-to-door from any NYC hotel or address.' },
  { title: 'Big Matches & Events', note: 'Soccer, motorsport & more', desc: 'International friendlies, championship matches, and marquee one-off events at the Meadowlands.' },
  { title: 'Group & Corporate', note: 'SUVs & Sprinter vans', desc: 'Suites, hospitality, and team outings. Keep your group together in one vehicle, one flat rate.' },
];

const transitComparison = [
  {
    option: 'NJ Transit Train',
    cost: '~$11–15 round-trip',
    time: '35 min from Penn St.',
    pain: 'Event trains only, packed on big nights, long post-event platform waits, no door-to-door',
    rating: '⭐⭐',
  },
  {
    option: 'Direct Bus (NYC–MetLife)',
    cost: '~$15–30 round-trip',
    time: '45–75 min',
    pain: 'Crowds, standing room only on the return, drops at the stadium perimeter',
    rating: '⭐⭐',
  },
  {
    option: 'Uber / Lyft',
    cost: '$90–250+ surge',
    time: '25–60 min',
    pain: 'Surge pricing on event nights, unpredictable wait, no guaranteed pickup after the show',
    rating: '⭐',
  },
  {
    option: 'Drive & Park',
    cost: '$40–80 parking',
    time: '45–90 min to exit',
    pain: 'Post-event gridlock takes 60–90 minutes to clear the lots. Rarely worth it.',
    rating: '⭐',
  },
  {
    option: 'Eagle Eye Chauffeur',
    cost: 'Flat rate — locked at booking',
    time: '20–50 min by origin',
    pain: '✓ No surge. ✓ Door-to-door. ✓ Pre-arranged post-event pickup. ✓ Skip the queues.',
    rating: '⭐⭐⭐⭐⭐',
  },
];

const routePages = [
  { label: 'Manhattan → MetLife', href: '/world-cup-2026/manhattan-to-metlife', time: '~25 min', desc: 'From any Midtown or downtown hotel' },
  { label: 'Newark Airport → MetLife', href: '/world-cup-2026/newark-to-metlife', time: '~15 min', desc: 'Closest airport — fastest transfer' },
  { label: 'JFK Airport → MetLife', href: '/world-cup-2026/jfk-to-metlife', time: '~50 min', desc: 'Direct from international arrivals' },
  { label: 'LaGuardia → MetLife', href: '/world-cup-2026/lga-to-metlife', time: '~35 min', desc: 'No connections, door-to-door' },
  { label: 'Long Island → MetLife', href: '/world-cup-2026/long-island-to-metlife', time: '~45–60 min', desc: 'Nassau & Suffolk County pickups' },
  { label: 'NYC Hotel → MetLife', href: '/world-cup-2026/nyc-hotel-to-metlife', time: '~25 min', desc: 'Concierge-style hotel pickup' },
];

const faqs = [
  {
    q: 'How far is MetLife Stadium from Manhattan?',
    a: 'MetLife Stadium is approximately 8 miles from Midtown Manhattan in East Rutherford, New Jersey. The drive takes 20–35 minutes without traffic, though event days add time — plan an extra 30–45 minutes of arrival buffer for a sold-out game or concert.',
  },
  {
    q: 'How much does car service from Manhattan to MetLife cost?',
    a: 'Eagle Eye Chauffeur uses flat-rate pricing confirmed at booking — no surge, no surprises. Rates depend on your exact pickup location, vehicle class, and timing. Get an instant quote on our booking page.',
  },
  {
    q: 'Can you drop me right at the stadium gate?',
    a: 'Yes. Your chauffeur takes you door-to-door to the MetLife Stadium drop-off nearest your gate, so you skip the long walk from the outer lots or the train station.',
  },
  {
    q: 'Will car service to MetLife surge price on event nights?',
    a: 'No. Rideshare apps like Uber and Lyft apply surge pricing on big game and concert nights — a typical ride can double or triple. Eagle Eye Chauffeur locks your price at booking, so what you quote is what you pay, no matter the demand.',
  },
  {
    q: 'Can you pick me up after the game or concert at MetLife?',
    a: 'Yes. We coordinate a pre-arranged post-event pickup point near the stadium. Your chauffeur stays in contact via WhatsApp and is ready when you exit — no waiting in rideshare queues or NJ Transit lines.',
  },
  {
    q: 'Do you handle NFL games, concerts, and other events?',
    a: 'Yes. We serve every event at MetLife Stadium — Giants and Jets home games, stadium concert tours, international soccer matches, and one-off marquee events. Same flat-rate, door-to-door service for all of them.',
  },
  {
    q: 'Can you handle groups and corporate outings?',
    a: 'Yes. Our Business Class SUVs seat 5–6 and First Class SUVs seat 6–7; Sprinter vans handle larger groups. Ideal for suite holders, hospitality guests, and team outings. Contact us to plan multi-vehicle group transport.',
  },
];

export default function MetLifeStadiumPage() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'MetLife Stadium Transportation', url: `${siteUrl}/world-cup-2026` },
  ];

  return (
    <>
      <ServiceJsonLd
        name="MetLife Stadium Car Service"
        description="Flat-rate chauffeur service to MetLife Stadium, East Rutherford NJ, for NFL games, concerts, and major events. Pickups from Manhattan, JFK, EWR, LGA, and Long Island. No surge pricing."
        areaServed="New York–New Jersey Metro Area"
        url={`${siteUrl}/world-cup-2026`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-charcoal/80 border border-brand-dark text-brand-silver text-xs font-semibold px-4 py-2 mb-6 tracking-wide uppercase">
            MetLife Stadium · East Rutherford, NJ · Games · Concerts · Events
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            MetLife Stadium Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Flat-rate chauffeur service to MetLife Stadium for Giants &amp; Jets games, concerts, and major events. No surge pricing, no parking nightmare, no crowded trains. Just a professional driver waiting at your door.
          </p>
          <p className="text-brand-silver text-sm mb-10 max-w-xl">
            Serving Manhattan, JFK, Newark (EWR), LaGuardia (LGA), Long Island, and all NYC hotels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors text-center">
              Request a Quote
            </Link>
            <Link href="/book" className="inline-block bg-brand-charcoal border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-dark transition-colors text-center">
              Book Online
            </Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors text-center">
              Call {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-brand-charcoal border-y border-brand-dark text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
            <div><div className="text-2xl font-bold">~8 mi</div><div className="text-brand-silver mt-1">From Midtown</div></div>
            <div><div className="text-2xl font-bold">82,500</div><div className="text-brand-silver mt-1">Stadium Capacity</div></div>
            <div><div className="text-2xl font-bold">Flat Rate</div><div className="text-brand-silver mt-1">No Surge, Ever</div></div>
            <div><div className="text-2xl font-bold">24/7</div><div className="text-brand-silver mt-1">Booking Available</div></div>
          </div>
        </div>
      </section>

      {/* EVENTS WE SERVE */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Every Event at MetLife Stadium
          </h2>
          <p className="text-brand-grey text-sm mb-8 max-w-2xl">
            Whatever brings you to East Rutherford, we get you there and back in comfort — no lot traffic, no surge, no post-event scramble.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {eventTypes.map((e) => (
              <div key={e.title} className="border border-brand-light bg-brand-offwhite p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-brand-black">{e.title}</h3>
                  <span className="text-brand-silver text-xs shrink-0 ml-2">{e.note}</span>
                </div>
                <p className="text-brand-grey text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSIT PAIN COMPARISON */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            How to Get to MetLife Stadium — Honest Comparison
          </h2>
          <p className="text-brand-grey text-sm mb-8 max-w-2xl">
            Every option ranked by real event-day conditions — not normal-day commutes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white text-left">
                  <th className="px-4 py-3 font-semibold">Option</th>
                  <th className="px-4 py-3 font-semibold">Cost</th>
                  <th className="px-4 py-3 font-semibold">Drive Time</th>
                  <th className="px-4 py-3 font-semibold">Event-Day Reality</th>
                  <th className="px-4 py-3 font-semibold text-center">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-light">
                {transitComparison.map((t, i) => (
                  <tr key={t.option} className={i === transitComparison.length - 1 ? 'bg-brand-black text-white' : 'bg-brand-white'}>
                    <td className={`px-4 py-4 font-semibold ${i === transitComparison.length - 1 ? 'text-brand-white' : 'text-brand-black'}`}>{t.option}</td>
                    <td className={`px-4 py-4 ${i === transitComparison.length - 1 ? 'text-brand-silver' : 'text-brand-grey'}`}>{t.cost}</td>
                    <td className={`px-4 py-4 ${i === transitComparison.length - 1 ? 'text-brand-silver' : 'text-brand-grey'}`}>{t.time}</td>
                    <td className={`px-4 py-4 text-xs leading-relaxed ${i === transitComparison.length - 1 ? 'text-brand-silver' : 'text-brand-grey'}`}>{t.pain}</td>
                    <td className="px-4 py-4 text-center">{t.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROUTE PAGES */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Book by Your Origin — Pick Your Route
          </h2>
          <p className="text-brand-grey text-sm mb-8">
            Select where you are travelling from for exact pricing and route details.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {routePages.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="border border-brand-light bg-brand-offwhite p-6 hover:border-brand-dark transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-brand-black group-hover:underline">{r.label}</h3>
                  <span className="text-brand-silver text-sm shrink-0 ml-2">{r.time}</span>
                </div>
                <p className="text-brand-grey text-sm">{r.desc}</p>
                <span className="inline-block mt-3 text-xs text-brand-black font-medium group-hover:underline">See route details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            MetLife Stadium Transport FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-brand-light pb-8">
                <h3 className="font-semibold text-brand-black mb-3">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-brand-black text-brand-white py-14 lg:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Request Your MetLife Stadium Transfer</h2>
          <p className="text-brand-silver mb-8">Flat-rate pricing · No surge · Door-to-door · Pre-arranged post-event pickup</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors">
              Request a Quote
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
