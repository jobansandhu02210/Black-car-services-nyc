import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';
import UsOpenRelatedRoutes from '@/components/UsOpenRelatedRoutes';

export const metadata: Metadata = {
  title: 'Long Island to US Open | Car Service to Flushing Meadows',
  description:
    'Long Island to US Open car service — Nassau & Suffolk County pickups to the Billie Jean King National Tennis Center. Flat-rate, no surge, door-to-door.',
  keywords: [
    'Long Island to US Open',
    'Long Island US Open tennis car service',
    'Nassau County to US Open',
    'Suffolk County to US Open',
    'Long Island to Flushing Meadows',
    'Garden City to US Open',
    'Great Neck to US Open tennis',
  ],
  alternates: { canonical: `${getSiteUrl()}/us-open-2026/long-island-to-us-open` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/us-open-2026/long-island-to-us-open` },
};

const faqs = [
  { q: 'How long does it take to drive from Long Island to the US Open?', a: 'From western Nassau County (Garden City, Valley Stream, Elmont): approximately 25–35 minutes. From central Nassau (Great Neck, Manhasset, New Hyde Park): 30–40 minutes. From western Suffolk (Huntington, Babylon): 40–60 minutes. Flushing Meadows is in Queens, so Long Island is actually one of the closer origins to the tennis center. On session days, add 15–20 minutes and plan to depart early.' },
  { q: 'Is there a direct car service from Nassau County to the US Open?', a: 'Yes. Eagle Eye Chauffeur picks up from any Nassau County address — Garden City, Great Neck, Manhasset, Mineola, New Hyde Park, Port Washington, Roslyn, Valley Stream, and everywhere in between — and takes you directly to the Billie Jean King National Tennis Center.' },
  { q: 'What about Suffolk County pickups?', a: 'Yes. We serve all of Suffolk County including Huntington, Babylon, Smithtown, and Hauppauge. Longer drives than Nassau, but the same flat-rate, no-surge pricing applies.' },
  { q: 'Should I drive myself from Long Island to the US Open?', a: 'We generally advise against it. USTA parking fills early and is expensive, and the post-session exit — especially after a night session — can take an hour or more. A pre-booked car service drops you near the gate and picks you up at a pre-arranged spot afterward, skipping the lot entirely.' },
  { q: 'Can a group of Long Island fans book together?', a: 'Absolutely. Our Business Class SUVs seat 5–6 and First Class SUVs seat 6–7, with Sprinter vans for larger parties. A group from Long Island sharing one vehicle is cost-effective and stress-free compared to everyone driving and parking separately.' },
];

const liAreas = [
  { area: 'Nassau County', places: 'Garden City, Great Neck, Manhasset, New Hyde Park, Mineola, Valley Stream, Rockville Centre, Port Washington, Roslyn, Hicksville, Hempstead, Westbury' },
  { area: 'Suffolk County', places: 'Huntington, Babylon, Bay Shore, Smithtown, Commack, Hauppauge, Ronkonkoma, Patchogue' },
  { area: 'Queens-Adjacent', places: 'Floral Park, Elmont, New Hyde Park — the shortest transfers of any Long Island community' },
];

export default function LongIslandToUSOpenPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Long Island to US Open Car Service" description="Flat-rate car service from Nassau and Suffolk County, Long Island to the USTA Billie Jean King National Tennis Center for the US Open. All Long Island communities covered. No surge pricing." areaServed="Long Island, New York" url={`${siteUrl}/us-open-2026/long-island-to-us-open`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'US Open Transportation', url: `${siteUrl}/us-open-2026` }, { name: 'Long Island to US Open', url: `${siteUrl}/us-open-2026/long-island-to-us-open` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">US Open 2026 · Nassau &amp; Suffolk County</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Long Island to the US Open — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flat-rate chauffeur from any Long Island community — Nassau County and Suffolk County — to the Billie Jean King National Tennis Center. Flushing Meadows is in Queens, so Long Island is one of the closest origins of any market we serve. Door-to-door, no surge, pre-arranged post-match pickup.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ 25–60 min by location</span>
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

      <section className="bg-brand-offwhite py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((f) => (<div key={f.q} className="border-b border-brand-light pb-6"><h3 className="font-semibold text-brand-black mb-2">{f.q}</h3><p className="text-brand-grey text-sm leading-relaxed">{f.a}</p></div>))}
          </div>
        </div>
      </section>

      <UsOpenRelatedRoutes current="long-island-to-us-open" />

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Long Island → US Open Now</h2>
          <p className="text-brand-silver text-sm mb-6">All LI communities · Flat-rate · No surge · Group SUVs available</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-3 text-sm hover:bg-brand-offwhite transition-colors">Request a Quote</Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-brand-silver text-white font-semibold px-8 py-3 text-sm hover:border-brand-white transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
          </div>
          <Link href="/us-open-2026" className="text-brand-silver text-xs underline hover:text-brand-white">← All US Open routes</Link>
        </div>
      </section>
    </>
  );
}
