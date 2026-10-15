import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';
import UsOpenRelatedRoutes from '@/components/UsOpenRelatedRoutes';

export const metadata: Metadata = {
  title: 'NYC Hotel to US Open 2026 | Chauffeur Service',
  description:
    'NYC hotel to US Open chauffeur service. Concierge pickup from any Manhattan hotel — Times Square, Midtown, Tribeca, UES. Flat-rate, post-match return.',
  keywords: [
    'NYC hotel to US Open',
    'Manhattan hotel to US Open tennis',
    'hotel shuttle US Open tennis',
    'Times Square to US Open',
    'Midtown hotel to Billie Jean King Tennis Center',
    'NYC hotel chauffeur US Open 2026',
  ],
  alternates: { canonical: `${getSiteUrl()}/us-open-2026/nyc-hotel-to-us-open` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/us-open-2026/nyc-hotel-to-us-open` },
};

const hotels = [
  { area: 'Times Square / Midtown', examples: 'Marriott Marquis, Westin Times Square, Renaissance, Hilton Midtown, Sheraton Times Square' },
  { area: 'Midtown East', examples: 'Grand Hyatt, Waldorf Astoria, Four Seasons 57th St, The Pierre, Loews Regency' },
  { area: 'Upper East Side', examples: 'The Carlyle, Mark Hotel, The Surrey, Loews Regency' },
  { area: 'Lower Manhattan / Tribeca', examples: 'Four Seasons Downtown, Conrad NY, Arlo SoHo, Walker Hotel' },
];

const faqs = [
  { q: 'Do you pick up directly from hotel lobbies in NYC?', a: 'Yes. We offer concierge-style hotel pickup — your chauffeur is at the hotel entrance or lobby at your scheduled time. We coordinate with hotel security and concierge desks for smooth departure.' },
  { q: 'Which NYC hotels do you serve for US Open transfers?', a: 'We serve every hotel in Manhattan — Times Square, Midtown, Upper East Side, Upper West Side, Tribeca, SoHo, Financial District, and all areas. Enter your hotel address on the booking page for an instant quote.' },
  { q: 'How much is a hotel-to-tennis-center car service for the US Open?', a: 'Rates depend on your hotel location and vehicle class. All prices are flat — confirmed at booking with no surge. Hotels near Midtown typically see a 30–45 minute transit time and competitive rates.' },
  { q: 'Can you return me to my NYC hotel after a session?', a: 'Yes — and this is the most important part of session-day planning. Night sessions often run past 11pm, and both the LIRR and rideshares get overwhelmed the moment matches end. We pre-arrange your post-match pickup from Flushing Meadows. Your driver waits and contacts you via WhatsApp when you are ready.' },
  { q: 'Can I book a full day — hotel pickup, session, and hotel return?', a: 'Yes. A full session-day package covers hotel pickup, drop at the tennis center, wait or return during the session, and post-match hotel return. Contact us to arrange a full-day package with your driver.' },
  { q: 'Do hotel concierges recommend Eagle Eye for US Open transport?', a: 'Eagle Eye Chauffeur is available for any NYC hotel guest. If your hotel concierge does not already have our information, contact us directly — we are available 24/7 and work alongside hotel concierge teams.' },
];

export default function NYCHotelToUSOpenPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="NYC Hotel to US Open Chauffeur Service" description="Concierge-style hotel pickup from any Manhattan hotel to the USTA Billie Jean King National Tennis Center for the US Open. Flat-rate, no surge, post-match hotel return. Serving Times Square, Midtown, Tribeca, and all NYC hotels." areaServed="Manhattan, New York" url={`${siteUrl}/us-open-2026/nyc-hotel-to-us-open`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'US Open Transportation', url: `${siteUrl}/us-open-2026` }, { name: 'NYC Hotel to US Open', url: `${siteUrl}/us-open-2026/nyc-hotel-to-us-open` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">US Open 2026 · Concierge Hotel Pickup</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            NYC Hotel to the US Open — Chauffeur Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Staying in a Manhattan hotel for the US Open? Eagle Eye Chauffeur picks you up at your hotel entrance and takes you directly to the Billie Jean King National Tennis Center — approximately 30–45 minutes from Midtown. Flat-rate, no surge, with pre-arranged post-match return.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~30–45 min from Midtown</span>
            <span>🏨 Any NYC hotel</span>
            <span>🔄 Post-match return available</span>
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
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hotels We Serve for US Open 2026</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {hotels.map((h) => (
              <div key={h.area} className="border border-brand-light bg-brand-offwhite p-5">
                <h3 className="font-semibold text-brand-black mb-2 text-sm">{h.area}</h3>
                <p className="text-brand-grey text-xs leading-relaxed">{h.examples}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-brand-silver text-xs">Don&apos;t see your hotel? We serve all Manhattan hotels — enter your address on the booking page for an instant quote.</p>
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

      <UsOpenRelatedRoutes current="nyc-hotel-to-us-open" />

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Hotel → US Open Now</h2>
          <p className="text-brand-silver text-sm mb-6">Any NYC hotel · Flat-rate · Post-match return · No surge</p>
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
