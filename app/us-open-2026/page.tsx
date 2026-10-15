import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'US Open Car Service 2026 | Billie Jean King Tennis Center | Eagle Eye',
  },
  description:
    'US Open car service to the Billie Jean King National Tennis Center, Flushing Meadows. Flat-rate chauffeur from Manhattan, JFK, LGA & EWR. No surge, ever.',
  keywords: [
    'US Open car service',
    'US Open tennis transportation',
    'car service to Billie Jean King National Tennis Center',
    'car service to Arthur Ashe Stadium',
    'US Open Flushing Meadows car service',
    'US Open parking alternative',
    'US Open shuttle NYC',
    'how to get to the US Open tennis',
    'US Open black car service',
    'US Open 2026 transportation',
  ],
  alternates: { canonical: `${getSiteUrl()}/us-open-2026` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/us-open-2026`,
    title: 'US Open Car Service 2026 | Eagle Eye Chauffeur',
    description:
      'Flat-rate chauffeur service to the US Open at the Billie Jean King National Tennis Center. Manhattan, JFK, LGA, EWR & Long Island pickups. No surge, pre-arranged post-match pickup.',
    images: [{ url: `${getSiteUrl()}/og-image.jpg`, width: 1200, height: 630, alt: 'US Open Car Service' }],
  },
};

const eventTypes = [
  { title: 'Day Sessions', note: 'Matches from ~11am', desc: 'Beat the morning rush into Flushing Meadows — arrive relaxed, not stressed about parking or the 7 train.' },
  { title: 'Night Sessions', note: 'Prime-time matches, ~7pm start', desc: 'The biggest matches of the tournament. Sessions run late — we pre-arrange your pickup so you are not stuck in the exit crowd at midnight.' },
  { title: 'Fan Week & Qualifying', note: 'Aug 23–29, 2026', desc: 'Lower-cost tickets, same great tennis. We serve every day of the tournament, not just the finals.' },
  { title: 'Suites & Corporate Hospitality', note: 'SUVs & Sprinter vans', desc: 'Client entertainment and group outings to the US Open. Keep your group together in one vehicle, one flat rate.' },
];

const transitComparison = [
  {
    option: 'LIRR to Mets–Willets Point',
    cost: '~$10–17 round-trip',
    time: '20–25 min from Penn Station',
    pain: 'Direct and reasonably fast, but trains are packed after night sessions end and it is a walk from the platform to security.',
    rating: '⭐⭐⭐',
  },
  {
    option: '7 Train (Subway)',
    cost: '~$5.90 round-trip',
    time: '25–35 min from Midtown',
    pain: 'Cheapest option, but standing-room-only after night matches with tens of thousands of fans exiting at once.',
    rating: '⭐⭐',
  },
  {
    option: 'Uber / Lyft',
    cost: '$60–180+ surge',
    time: '20–45 min',
    pain: 'Massive surge pricing the moment a night session ends — everyone requests a ride within the same 10 minutes.',
    rating: '⭐',
  },
  {
    option: 'Drive & Park',
    cost: '$30–75 parking',
    time: '60–120 min to exit',
    pain: 'USTA lot exit gridlock after night sessions is notorious — an hour or more just to leave the parking lot.',
    rating: '⭐',
  },
  {
    option: 'Eagle Eye Chauffeur',
    cost: 'Flat rate — locked at booking',
    time: '15–45 min by origin',
    pain: '✓ No surge. ✓ Door-to-door. ✓ Pre-arranged post-match pickup point. ✓ Skip the LIRR crowd and lot gridlock entirely.',
    rating: '⭐⭐⭐⭐⭐',
  },
];

const routePages = [
  { label: 'LaGuardia (LGA) → US Open', href: '/us-open-2026/lga-to-us-open', time: '~15–20 min', desc: 'The closest airport — fastest transfer to Flushing Meadows' },
  { label: 'JFK Airport → US Open', href: '/us-open-2026/jfk-to-us-open', time: '~20–30 min', desc: 'Direct from international arrivals' },
  { label: 'Manhattan → US Open', href: '/us-open-2026/manhattan-to-us-open', time: '~30–45 min', desc: 'From any Midtown or downtown hotel' },
  { label: 'Newark (EWR) → US Open', href: '/us-open-2026/ewr-to-us-open', time: '~45–60 min', desc: 'Direct transfer for international arrivals' },
  { label: 'Long Island → US Open', href: '/us-open-2026/long-island-to-us-open', time: '~30–50 min', desc: 'Nassau & Suffolk County pickups' },
  { label: 'NYC Hotel → US Open', href: '/us-open-2026/nyc-hotel-to-us-open', time: '~30–45 min', desc: 'Concierge-style hotel pickup' },
];

const faqs = [
  {
    q: 'When is the US Open 2026?',
    a: 'The 2026 US Open runs from Sunday, August 23 through Sunday, September 13, at the USTA Billie Jean King National Tennis Center in Flushing Meadows, Queens. Fan Week and qualifying run August 23–29, with the main draw beginning Sunday, August 30.',
  },
  {
    q: 'How far is the US Open from Manhattan?',
    a: 'The Billie Jean King National Tennis Center is approximately 10–12 miles from Midtown Manhattan. The drive takes 30–45 minutes without traffic via the Grand Central Parkway or LIE, though session days add time — plan extra buffer for a night session start.',
  },
  {
    q: 'What is the closest airport to the US Open?',
    a: 'LaGuardia (LGA) is the closest major airport, roughly 15–20 minutes away. JFK is approximately 20–30 minutes. Newark (EWR) is the furthest of the three NYC airports at 45–60 minutes, but still a practical option for international arrivals.',
  },
  {
    q: 'How much does car service to the US Open cost?',
    a: 'Eagle Eye Chauffeur uses flat-rate pricing confirmed at booking — no surge, no surprises regardless of session demand. Rates depend on your exact pickup location, vehicle class, and timing. Get an instant quote on our booking page.',
  },
  {
    q: 'Can you pick me up after a night session ends?',
    a: 'Yes — and this is where car service matters most at the US Open. Night sessions often run past 11pm, and the exit from the USTA parking lots and the LIRR platform gets extremely congested all at once. We pre-arrange a post-match pickup point and your chauffeur stays in contact via WhatsApp, so you skip the gridlock entirely.',
  },
  {
    q: 'Will car service to the US Open surge price like Uber or Lyft?',
    a: 'No. Rideshare apps apply steep surge pricing the moment a session ends and thousands of fans request rides simultaneously. Eagle Eye Chauffeur locks your price at booking, so what you quote is what you pay, no matter how in-demand rides are that night.',
  },
  {
    q: 'Do you serve every day of the tournament, or just the finals?',
    a: 'Every day — Fan Week, qualifying, every round, and both finals weekends. Same flat-rate, door-to-door service whether you are going to a first-round day session or the championship match.',
  },
  {
    q: 'Can you handle groups, suite holders, or corporate hospitality?',
    a: 'Yes. Our Business Class SUVs seat 5–6 and First Class SUVs seat 6–7; Sprinter vans handle larger groups. Ideal for suite holders, corporate hospitality guests, and client entertainment. Contact us to plan multi-vehicle group transport.',
  },
];

export default function USOpenPage() {
  const siteUrl = getSiteUrl();
  const breadcrumbs = [
    { name: 'Home', url: siteUrl },
    { name: 'US Open Transportation', url: `${siteUrl}/us-open-2026` },
  ];

  return (
    <>
      <ServiceJsonLd
        name="US Open Car Service"
        description="Flat-rate chauffeur service to the USTA Billie Jean King National Tennis Center in Flushing Meadows, Queens, for the US Open. Pickups from Manhattan, JFK, LGA, EWR, and Long Island. No surge pricing."
        areaServed="New York City Metro Area"
        url={`${siteUrl}/us-open-2026`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-brand-charcoal/80 border border-brand-dark text-brand-silver text-xs font-semibold px-4 py-2 mb-6 tracking-wide uppercase">
            US Open 2026 · Aug 23 – Sept 13 · Flushing Meadows, Queens
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            US Open Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Flat-rate chauffeur service to the USTA Billie Jean King National Tennis Center for every session of the 2026 US Open. No surge pricing, no parking-lot gridlock, no fighting the crowd for the LIRR. Just a professional driver waiting at your door.
          </p>
          <p className="text-brand-silver text-sm mb-10 max-w-xl">
            Serving Manhattan, JFK, LaGuardia (LGA), Newark (EWR), Long Island, and all NYC hotels.
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
            <div><div className="text-2xl font-bold">Aug 23 – Sept 13</div><div className="text-brand-silver mt-1">2026 Tournament Dates</div></div>
            <div><div className="text-2xl font-bold">~15 min</div><div className="text-brand-silver mt-1">From LaGuardia (LGA)</div></div>
            <div><div className="text-2xl font-bold">Flat Rate</div><div className="text-brand-silver mt-1">No Surge, Ever</div></div>
            <div><div className="text-2xl font-bold">24/7</div><div className="text-brand-silver mt-1">Booking Available</div></div>
          </div>
        </div>
      </section>

      {/* EVENTS WE SERVE */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Every Session of the US Open
          </h2>
          <p className="text-brand-grey text-sm mb-8 max-w-2xl">
            Day session, night session, qualifying, or the finals — we get you to Flushing Meadows and back in comfort, no lot traffic, no surge, no post-match scramble.
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
            How to Get to the US Open — Honest Comparison
          </h2>
          <p className="text-brand-grey text-sm mb-8 max-w-2xl">
            Every option ranked by real session-day conditions — not normal-day travel times.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white text-left">
                  <th className="px-4 py-3 font-semibold">Option</th>
                  <th className="px-4 py-3 font-semibold">Cost</th>
                  <th className="px-4 py-3 font-semibold">Drive Time</th>
                  <th className="px-4 py-3 font-semibold">Session-Day Reality</th>
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
            US Open Transportation FAQ
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
          <h2 className="font-serif text-3xl font-semibold mb-4">Request Your US Open Transfer</h2>
          <p className="text-brand-silver mb-8">Flat-rate pricing · No surge · Door-to-door · Pre-arranged post-match pickup</p>
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
