import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';
import UsOpenRelatedRoutes from '@/components/UsOpenRelatedRoutes';

export const metadata: Metadata = {
  title: 'Newark (EWR) to US Open | Airport Car Service',
  description:
    'Newark Airport to US Open car service — direct transfer to the Billie Jean King National Tennis Center. ~45–60 minutes, meet & greet, flat-rate, no surge.',
  keywords: [
    'EWR to US Open',
    'Newark to US Open tennis',
    'Newark airport US Open car service',
    'EWR to Billie Jean King National Tennis Center',
    'Newark to Flushing Meadows car service',
    'EWR airport to US Open chauffeur',
  ],
  alternates: { canonical: `${getSiteUrl()}/us-open-2026/ewr-to-us-open` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/us-open-2026/ewr-to-us-open` },
};

const faqs = [
  { q: 'How long is the drive from Newark Airport to the US Open?', a: 'Newark Liberty International Airport (EWR) to the USTA Billie Jean King National Tennis Center is typically 45–60 minutes, crossing Manhattan or Brooklyn to reach Queens. It is the longest of the three NYC airport transfers, so we build extra buffer time into every booking.' },
  { q: 'Should I fly into EWR for the US Open?', a: 'If EWR offers your best international flight option, it is still a very workable choice — the transfer just takes longer than LGA or JFK. We monitor traffic on both the Van Wyck and Long Island Expressway approaches to pick the fastest route on the day.' },
  { q: 'Do you offer meet and greet at Newark?', a: 'Yes. Your chauffeur meets you inside the terminal at baggage claim with a name sign, assists with luggage, and escorts you to the vehicle. We serve all EWR terminals — A, B, and C.' },
  { q: 'Can I go directly from EWR to the US Open for a session?', a: 'Yes, if your flight lands with enough buffer time. Given the longer transfer, we recommend landing at least 3 hours before a session start. We monitor your flight and adjust pickup timing accordingly.' },
  { q: 'What about EWR to hotel, then hotel to the US Open on session day?', a: 'This is often the smarter plan for EWR arrivals — check into your Manhattan hotel first, then take a shorter hotel-to-tennis-center transfer on session day. We handle both legs with the same flat-rate service.' },
];

export default function EWRToUSOpenPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd name="Newark Airport to US Open Car Service" description="Direct flat-rate transfer from Newark Liberty International Airport to the USTA Billie Jean King National Tennis Center for the US Open. Meet & greet at all EWR terminals, flight tracking, no surge pricing." areaServed="New York City, NY" url={`${siteUrl}/us-open-2026/ewr-to-us-open`} />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteUrl }, { name: 'US Open Transportation', url: `${siteUrl}/us-open-2026` }, { name: 'EWR to US Open', url: `${siteUrl}/us-open-2026/ewr-to-us-open` }]} />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">US Open 2026 · International Arrivals</div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-6">
            Newark Airport to the US Open — Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-3">
            Flying into EWR for the US Open? We meet you at baggage claim and take you directly to the Billie Jean King National Tennis Center or your Manhattan hotel — flat-rate, no surge, all terminals covered.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-8">
            <span>⏱ ~45–60 min to Flushing Meadows</span>
            <span>✈️ All EWR terminals</span>
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
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-8">Arriving at Newark for the US Open</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Met at Baggage Claim', body: 'Your chauffeur is inside the terminal at arrivals with a name sign. After clearing customs and collecting baggage, you are met and escorted to your vehicle — no stress after a long flight.' },
              { title: 'Hotel First, Tennis Center Second', body: 'Given the longer transfer from EWR, many travelers check into a Manhattan hotel first, then take a shorter ride to Flushing Meadows on session day. We coordinate both legs.' },
              { title: 'Delayed International Flights', body: 'EWR international arrivals can be delayed by customs processing. We track everything and your driver waits — no extra charge for tracked delays.' },
              { title: 'Group Travel Welcome', body: 'Travelling with a group? Our SUVs accommodate 5–7 passengers with luggage, and Sprinter vans handle larger parties arriving together.' },
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

      <UsOpenRelatedRoutes current="ewr-to-us-open" />

      <section className="bg-brand-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-semibold mb-3">Book EWR → US Open Now</h2>
          <p className="text-brand-silver text-sm mb-6">Meet &amp; greet · All terminals · Flat-rate · No surge</p>
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
