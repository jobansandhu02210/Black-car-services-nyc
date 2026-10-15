import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';
import UsOpenRelatedRoutes from '@/components/UsOpenRelatedRoutes';

export const metadata: Metadata = {
  title: 'Manhattan to US Open | Car Service to Flushing Meadows',
  description:
    'Manhattan to US Open car service — flat-rate chauffeur from any hotel or address in Manhattan to the Billie Jean King National Tennis Center. ~30–45 minutes.',
  keywords: [
    'Manhattan to US Open',
    'Manhattan to US Open tennis car service',
    'NYC to US Open',
    'car service Manhattan to Billie Jean King Tennis Center',
    'Midtown Manhattan to Flushing Meadows',
    'Manhattan to US Open chauffeur',
  ],
  alternates: { canonical: `${getSiteUrl()}/us-open-2026/manhattan-to-us-open` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/us-open-2026/manhattan-to-us-open` },
};

const faqs = [
  { q: 'How long does it take to drive from Manhattan to the US Open?', a: 'On a normal day, 30–45 minutes from Midtown Manhattan via the Grand Central Parkway or LIE. On session days — especially before a night session — allow 45–60 minutes and plan to arrive early.' },
  { q: 'What is the best way to get from Manhattan to the US Open?', a: 'Pre-booked private car service is the most reliable option. The LIRR and 7 train are workable but get extremely crowded after night sessions, and rideshares surge the moment a match ends. A flat-rate chauffeur from Eagle Eye locks your price at booking and provides door-to-door service from any Manhattan address.' },
  { q: 'How much does car service from Manhattan to the US Open cost?', a: 'Eagle Eye uses flat-rate pricing confirmed at booking with no surge. Price depends on your exact Manhattan pickup location and vehicle class. Get an instant quote on our booking page.' },
  { q: 'Do you pick up from Manhattan hotels?', a: 'Yes. We offer concierge-style hotel pickup from any Manhattan hotel — Midtown, Times Square, Upper East Side, Tribeca, Financial District, or anywhere in the borough. Your driver is at the hotel entrance at your scheduled time.' },
  { q: 'Can I get a post-match pickup from the US Open back to Manhattan?', a: 'Yes — and this is where car service matters most. Night sessions often run past 11pm, and both the LIRR platform and Uber/Lyft demand spike the moment matches end. We pre-arrange your post-match pickup point and your driver waits, contacting you via WhatsApp when you are ready.' },
];

export default function ManhattanToUSOpenPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Manhattan to US Open Car Service" description="Flat-rate chauffeur from Manhattan to the USTA Billie Jean King National Tennis Center for the US Open. Door-to-door from any Manhattan hotel or address. No surge pricing." areaServed="Manhattan, New York" url={`${siteUrl}/us-open-2026/manhattan-to-us-open`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'US Open Transportation', url: `${siteUrl}/us-open-2026` }, { name: 'Manhattan to US Open', url: `${siteUrl}/us-open-2026/manhattan-to-us-open` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">US Open 2026 · Flushing Meadows, Queens</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Manhattan to the US Open — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flat-rate chauffeur from any Manhattan hotel, residence, or office to the Billie Jean King National Tennis Center. Approximately 30–45 minutes from Midtown. No surge pricing — your fare is locked at booking.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~30–45 min from Midtown</span>
            <span>💰 Flat rate — no surge</span>
            <span>🚪 Door-to-door pickup</span>
            <span>📱 Post-match pickup included</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Request a Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Why Take a Car from Manhattan to the US Open?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Pickup at Your Hotel Door', body: 'Your chauffeur meets you at the hotel entrance or lobby, loads your bags, and takes you directly to Flushing Meadows — no walking to a subway platform with gear.' },
              { title: 'No Surge After a Night Session', body: 'Rideshares surge the instant a night session ends and thousands of fans request rides at once. Your pre-booked Eagle Eye price never changes, regardless of demand.' },
              { title: 'Any Manhattan Address', body: 'Times Square, Upper East Side, Tribeca, Financial District, Chelsea — we pick up from anywhere. Not just Midtown.' },
              { title: 'Session-Day Traffic Planned In', body: 'Your driver factors in Grand Central Parkway and LIE traffic around session start times and plans departure so you arrive with time to spare.' },
            ].map((i) => (
              <div key={i.title} className="border border-brand-light bg-brand-offwhite p-6">
                <h3 className="font-semibold text-brand-black mb-2">{i.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">FAQ</h2>
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

      <UsOpenRelatedRoutes current="manhattan-to-us-open" />

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book Manhattan → US Open Now</h2>
          <p className="text-brand-silver text-sm mb-6">Flat-rate · Door-to-door · Post-match pickup · No surge</p>
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
