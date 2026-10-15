import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'NYC to Boston Car Service | Private Chauffeur',
  description:
    'NYC to Boston car service — flat-rate private chauffeur from Manhattan, Brooklyn, JFK, LGA, or EWR to Boston. ~4 hours door-to-door. No surge.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/nyc-to-boston`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'NYC to Boston Car Service | Eagle Eye',
    description: 'Flat-rate private chauffeur from NYC to Boston. All tolls included, no surge pricing, door-to-door service. 24/7.',
    url: `${getSiteUrl()}/services/routes/nyc-to-boston`,
  },
};

const faqs = [
  {
    q: 'How far is NYC from Boston, and how long does the drive take?',
    a: 'New York City to Boston is about 215 miles, almost entirely on I-95 through Connecticut and Rhode Island. Door to door it is typically a 3.5–4.5 hour drive; weekday traffic through Connecticut (around Bridgeport, New Haven, and Hartford) can add 30–60 minutes. We recommend a morning or mid-evening departure for the best drive times.',
  },
  {
    q: 'How much does car service from NYC to Boston cost?',
    a: 'Eagle Eye Chauffeur uses flat-rate pricing for all long-distance routes including NYC to Boston. Your fare is confirmed at booking with no surge pricing and all tolls included. Get an instant quote on our booking page.',
  },
  {
    q: 'Is it better to take Amtrak or a car service from NYC to Boston?',
    a: 'Amtrak Acela from Penn Station to South Station takes about 3h 30min and starts around $150+ each way. A private car service is comparable in price for two or more passengers, offers door-to-door convenience, no station transfers, no luggage limitations, and complete privacy throughout the journey.',
  },
  {
    q: 'What is included in the NYC to Boston car service price?',
    a: 'Your flat rate includes the full door-to-door ride, all tolls (I-95, Connecticut Turnpike), and any highway fees. No hidden charges. Gratuity is optional.',
  },
  {
    q: 'Can I be picked up at JFK, LGA, or EWR for the NYC to Boston run?',
    a: 'Yes. We offer direct airport-to-Boston transfers. Your driver meets you at arrivals with a name sign and takes you straight to your Boston destination — hotel, office, or residence.',
  },
  {
    q: 'Do you offer NYC to Boston round trips?',
    a: 'Yes. Both legs are flat-rate and confirmed at booking. Same driver for both legs can be arranged on request.',
  },
];

export default function NYCToBostonPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd
        name="NYC to Boston Car Service"
        description="Flat-rate private chauffeur from New York City to Boston. Door-to-door, all tolls included, no surge pricing. Business and First Class vehicles available."
        areaServed="New York City, NY"
        url={`${siteUrl}/services/routes/nyc-to-boston`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Routes', url: `${siteUrl}/services/routes` },
          { name: 'NYC to Boston', url: `${siteUrl}/services/routes/nyc-to-boston` },
        ]}
      />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-4">Long-Distance Route · Door-to-Door · All Tolls Included</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-5">
            NYC to Boston Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Flat-rate private chauffeur from New York City to Boston. Pickup at any Manhattan, Brooklyn, or Queens address — or direct from JFK, LGA, or EWR. Door-to-door to your Boston hotel, office, or residence.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-10">
            <span>📍 ~215 miles</span>
            <span>⏱ ~3.5–4.5 hrs</span>
            <span>🛣 All tolls included</span>
            <span>💰 Flat rate — no surge</span>
            <span>🚪 Door-to-door</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors text-center">Get Instant Quote</Link>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors text-center">Call {CONTACT_PHONE_DISPLAY}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10 text-center">NYC to Boston vs. Other Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-black text-brand-white text-left">
                  <th className="px-5 py-3 font-semibold">Option</th>
                  <th className="px-5 py-3 font-semibold">Time</th>
                  <th className="px-5 py-3 font-semibold">Cost (per person)</th>
                  <th className="px-5 py-3 font-semibold">Door-to-Door?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-light">
                {[
                  ['Amtrak Acela', '~3h 30min', '$150–$300+', 'No — Penn St to South St'],
                  ['Bus (Greyhound / FlixBus)', '~4h 30min', '$20–$50', 'No — bus depot only'],
                  ['Flight (BOS)', '~1h + 2–3hr airport', '$150–$400+', 'No — airport transfers extra'],
                  ['Eagle Eye Chauffeur', '~3.5–4.5 hrs', 'Flat rate (2–6 pax shared)', '✓ Yes — door-to-door'],
                ].map(([opt, time, cost, door]) => (
                  <tr key={opt} className={opt.includes('Eagle') ? 'bg-brand-black text-brand-white' : 'bg-brand-white'}>
                    <td className={`px-5 py-3 font-semibold ${opt.includes('Eagle') ? 'text-brand-white' : 'text-brand-black'}`}>{opt}</td>
                    <td className={`px-5 py-3 ${opt.includes('Eagle') ? 'text-brand-silver' : 'text-brand-grey'}`}>{time}</td>
                    <td className={`px-5 py-3 ${opt.includes('Eagle') ? 'text-brand-silver' : 'text-brand-grey'}`}>{cost}</td>
                    <td className={`px-5 py-3 ${opt.includes('Eagle') ? 'text-green-400 font-medium' : 'text-brand-grey'}`}>{door}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-4">
            The NYC to Boston Drive: What to Expect
          </h2>
          <p className="text-brand-grey leading-relaxed mb-4">
            New York City to Boston is roughly 215 miles — almost entirely along I-95, up through Connecticut, Rhode
            Island, and into Massachusetts. Door to door it is typically a 3.5 to 4.5 hour drive; the main variable is
            Connecticut, where I-95 around Bridgeport, New Haven, and Hartford can add 30 to 60 minutes on a weekday. Your
            chauffeur watches traffic live and can reroute onto I-91 or the Merritt Parkway when the shoreline backs up.
          </p>
          <p className="text-brand-grey leading-relaxed mb-4">
            A private car makes the most sense when you are traveling as a small group, carrying luggage or equipment,
            working en route, keeping a meeting schedule at both ends, or making a stop along the way (Greenwich, New
            Haven, Providence). Unlike the Acela, there is no station-to-station transfer, no luggage limit, and no
            fixed timetable — you leave from your door when you want and arrive at your Boston address directly.
          </p>
          <p className="text-brand-grey leading-relaxed">
            We pick up from any NYC address or directly from JFK, LGA, or EWR, and drop at any Boston destination — a
            hotel in Back Bay, an office in the Financial District or the Seaport, a home in Cambridge or Brookline, or
            a venue in Kendall Square. First Class SUVs are recommended for the distance and luggage; Sprinter vans are
            available for larger groups.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">NYC to Boston FAQ</h2>
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

      <section className="bg-brand-offwhite py-8 border-t border-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-brand-grey mb-4">Other long-distance routes:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'NYC to Philadelphia', href: '/services/routes/nyc-to-philadelphia' },
              { label: 'NYC to Washington DC', href: '/services/routes/nyc-to-washington-dc' },
              { label: 'Manhattan to Connecticut', href: '/services/routes/manhattan-to-connecticut-car-service' },
              { label: 'Manhattan to Hamptons', href: '/services/routes/manhattan-to-hamptons-car-service' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-sm border border-brand-light bg-brand-white px-4 py-2 text-brand-black hover:border-brand-dark transition-colors">
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-brand-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Book NYC to Boston Now</h2>
          <p className="text-brand-silver mb-8">Flat rate · All tolls included · Door-to-door · No surge</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors">Get Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
