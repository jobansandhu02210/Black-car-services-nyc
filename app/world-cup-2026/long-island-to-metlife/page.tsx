import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Long Island to MetLife Stadium | Car Service',
  description:
    'Long Island to MetLife Stadium car service for games, concerts & events. Nassau and Suffolk pickups — flat-rate, no surge. Garden City, Great Neck & more.',
  keywords: [
    'Long Island to MetLife Stadium',
    'Long Island MetLife car service',
    'Nassau County to MetLife Stadium',
    'Suffolk County to MetLife',
    'Long Island MetLife Stadium transfer',
    'Garden City to MetLife',
    'Great Neck to MetLife Stadium',
  ],
  alternates: { canonical: `${getSiteUrl()}/world-cup-2026/long-island-to-metlife` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/world-cup-2026/long-island-to-metlife` },
};

const faqs = [
  { q: 'How far is Long Island from MetLife Stadium?', a: 'It depends where on Long Island you start, because MetLife Stadium is in East Rutherford, New Jersey — on the far west side of the metro area, so the drive crosses the entire city. Western Nassau (Garden City, Valley Stream) is about 30–35 miles; central Nassau (Great Neck, Manhasset) about 28–32 miles; western Suffolk (Huntington, Babylon) about 50 miles; central Suffolk (Hauppauge, Smithtown) about 60 miles; and the Hamptons roughly 110–130 miles.' },
  { q: 'How long does it take to drive from Long Island to MetLife Stadium?', a: 'From western Nassau County (Garden City, Valley Stream, Elmont): approximately 45–60 minutes in normal traffic. From central Nassau (Great Neck, Manhasset, New Hyde Park): 50–70 minutes. From western Suffolk (Huntington, Babylon): 60–85 minutes; central Suffolk runs 75–100 minutes. On World Cup match days and big concerts, add 45+ minutes — the whole route crosses New York City, which backs up badly around events, so plan to depart early.' },
  { q: 'When is the World Cup at MetLife Stadium?', a: 'MetLife Stadium (branded "New York New Jersey Stadium" for the tournament) hosts 8 matches during the 2026 FIFA World Cup, including the World Cup Final on Sunday, July 19, 2026 — the single highest-demand transportation day of the tournament. The tournament runs June 11 through July 19, 2026, and demand for cars, hotels, and parking across the NY/NJ area peaks on match days.' },
  { q: 'What is the best route from Long Island to MetLife?', a: 'There are two main paths, both crossing NYC: the Long Island Expressway (I-495) through the Queens-Midtown Tunnel and across Manhattan to the Lincoln Tunnel, or the Throgs Neck / Whitestone Bridge to the Cross Bronx Expressway and George Washington Bridge. Both are heavily trafficked; your chauffeur monitors live conditions and picks the faster crossing on the day. This cross-city complexity is exactly why a professional driver beats self-driving for this trip.' },
  { q: 'Should I drive myself from Long Island to MetLife?', a: 'We generally advise against it for big events. Beyond the cross-city drive, MetLife Stadium parking fills hours before kickoff or showtime, event parking passes must be bought in advance, and the post-event exit can take 90+ minutes to clear the lot. A pre-booked car service drops you at the gate and picks you up at a pre-arranged spot afterward — no parking, no exit crawl.' },
  { q: 'How much does car service from Long Island to MetLife cost?', a: 'It is a flat rate confirmed at booking, based on your Long Island town and the event date, with tolls included and no surge — even on World Cup Final weekend. Because it is a long cross-metro run (and longer from Suffolk or the Hamptons), enter your address on the booking page for an exact quote.' },
  { q: 'Can a group of Long Island fans book together?', a: 'Absolutely. Our Business Class SUVs seat 5–6 and First Class SUVs seat 6–7, with Sprinter vans for larger parties of up to 14+. A group from Long Island sharing one vehicle is far more cost-effective and less stressful than everyone driving separately and hunting for parking — and one flat rate covers the whole group round trip.' },
];

const liDistances = [
  { from: 'Great Neck (near Queens border)', miles: '~28 miles', time: '40–60 min' },
  { from: 'Valley Stream / Elmont', miles: '~30 miles', time: '45–65 min' },
  { from: 'Garden City / Mineola', miles: '~35 miles', time: '45–65 min' },
  { from: 'Hicksville / Westbury', miles: '~40 miles', time: '55–75 min' },
  { from: 'Huntington (western Suffolk)', miles: '~50 miles', time: '60–85 min' },
  { from: 'Hauppauge / Smithtown', miles: '~60 miles', time: '75–100 min' },
  { from: 'The Hamptons (Southampton)', miles: '~115 miles', time: '2.5–3.5 hrs' },
];

const liAreas = [
  { area: 'Nassau County', places: 'Garden City, Great Neck, Manhasset, New Hyde Park, Mineola, Valley Stream, Rockville Centre, Port Washington, Roslyn, Hicksville, Hempstead, Westbury' },
  { area: 'Suffolk County', places: 'Huntington, Babylon, Bay Shore, Smithtown, Commack, Hauppauge, Ronkonkoma, Patchogue' },
  { area: 'The Hamptons', places: 'Southampton, East Hampton, Hampton Bays, Westhampton Beach, Montauk' },
];

export default function LongIslandToMetLifePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Long Island to MetLife Stadium Car Service" description="Flat-rate car service from Nassau and Suffolk County, Long Island to MetLife Stadium for games, concerts, and events. All Long Island communities covered. No surge pricing." areaServed="Long Island, New York" url={`${siteUrl}/world-cup-2026/long-island-to-metlife`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'MetLife Stadium Transportation', url: `${siteUrl}/world-cup-2026` }, { name: 'Long Island to MetLife', url: `${siteUrl}/world-cup-2026/long-island-to-metlife` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">MetLife Stadium · Nassau &amp; Suffolk County</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Long Island to MetLife Stadium — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flat-rate chauffeur from any Long Island community — Nassau County, Suffolk County, and the Hamptons — to MetLife Stadium for games, concerts, and events. Door-to-door, no surge, pre-arranged post-event pickup.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ 45–80 min by location</span>
            <span>📍 All LI communities</span>
            <span>👥 Groups welcome</span>
            <span>🔒 Flat rate — no surge</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Context: the LI → NJ journey + World Cup */}
      <section className="bg-brand-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-4">
            Long Island to MetLife Stadium: The Cross-Metro Trip Made Simple
          </h2>
          <p className="text-brand-grey leading-relaxed mb-4">
            MetLife Stadium sits in East Rutherford, New Jersey — on the far west side of the metropolitan area. For a
            Long Island fan, that means the trip crosses the entire city: down the Long Island Expressway, through Queens,
            and either across Manhattan via the Queens-Midtown and Lincoln Tunnels or over the Throgs Neck/Whitestone
            Bridge to the Cross Bronx Expressway and George Washington Bridge. It is one of the more traffic-sensitive
            drives in the region — and on a World Cup match day, every one of those crossings is under pressure.
          </p>
          <p className="text-brand-grey leading-relaxed mb-4">
            That is exactly why a pre-booked chauffeur beats driving yourself for this route. Your driver monitors both
            crossings in real time and takes the faster one, you skip the sold-out stadium parking and the 90-minute
            post-event exit crawl, and your price is locked in at booking with no surge — even on the busiest days of the
            tournament.
          </p>
          <p className="text-brand-grey leading-relaxed">
            <strong className="text-brand-black">World Cup 2026 note:</strong> MetLife Stadium hosts 8 matches, including
            the <strong className="text-brand-black">Final on Sunday, July 19, 2026</strong>. Demand for cars and parking
            across the NY/NJ area will peak on match days, so Long Island fans should book their transportation as early
            as possible.
          </p>
        </div>
      </section>

      {/* Distances */}
      <section className="bg-brand-offwhite py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-3">
            Distances &amp; Drive Times: Long Island to MetLife Stadium
          </h2>
          <p className="text-brand-grey mb-8">
            Approximate driving distance and time to MetLife Stadium from across Long Island (normal traffic — match days
            and concerts run considerably longer, which is why we recommend departing early and letting your chauffeur
            handle the routing).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-brand-white border border-brand-light">
              <thead>
                <tr className="bg-brand-black text-brand-white">
                  <th className="text-left p-4 font-medium">From</th>
                  <th className="text-left p-4 font-medium">Distance</th>
                  <th className="text-left p-4 font-medium">Typical drive time</th>
                </tr>
              </thead>
              <tbody>
                {liDistances.map((d, i) => (
                  <tr key={d.from} className={i % 2 ? 'bg-brand-offwhite' : 'bg-brand-white'}>
                    <td className="p-4 font-medium text-brand-black">{d.from}</td>
                    <td className="p-4 text-brand-grey tabular-nums">{d.miles}</td>
                    <td className="p-4 text-brand-grey tabular-nums">{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Long Island Areas We Serve</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {liAreas.map((a) => (
              <div key={a.area} className="border border-brand-light bg-brand-offwhite p-5">
                <h3 className="font-semibold text-brand-black mb-2 text-sm">{a.area}</h3>
                <p className="text-brand-grey text-xs leading-relaxed">{a.places}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event-day strategy */}
      <section className="bg-brand-black text-brand-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold mb-8">Match-Day &amp; Event Timing from Long Island</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Depart early</div>
              <p className="text-brand-silver text-sm leading-relaxed">Because the route crosses the whole city, leave 2.5–3 hours before kickoff or showtime — the tunnels and bridges into New Jersey back up hours ahead of a MetLife event.</p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Dropped at the gate</div>
              <p className="text-brand-silver text-sm leading-relaxed">Your chauffeur drops you close to the entrance rather than a distant parking lot — no shuttle, no long walk, no pass to pre-purchase.</p>
            </div>
            <div className="border border-brand-charcoal p-5">
              <div className="font-semibold text-brand-white mb-2">Stress-free exit</div>
              <p className="text-brand-silver text-sm leading-relaxed">Skip the 90-minute post-event parking crawl. Your driver waits at a pre-arranged spot and has you back on the road home to Long Island while others are still idling in the lot.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">Long Island to MetLife Stadium — FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (<div key={f.q} className="border-b border-brand-light pb-6"><h3 className="font-semibold text-brand-black mb-2">{f.q}</h3><p className="text-brand-grey text-sm leading-relaxed">{f.a}</p></div>))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Long Island → MetLife Now</h2>
          <p className="text-brand-silver text-sm mb-6">All LI communities · Flat-rate · No surge · Group SUVs available</p>
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
