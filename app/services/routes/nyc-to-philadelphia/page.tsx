import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'NYC to Philadelphia Car Service | Private Chauffeur',
  description:
    'NYC to Philadelphia car service — flat-rate private chauffeur from Manhattan, Brooklyn, JFK, LGA, or EWR to Philadelphia. ~1.5–2 hours.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/nyc-to-philadelphia`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'NYC to Philadelphia Car Service | Eagle Eye',
    description: 'Flat-rate private chauffeur from NYC to Philadelphia. All tolls included, no surge pricing, door-to-door. 24/7.',
    url: `${getSiteUrl()}/services/routes/nyc-to-philadelphia`,
  },
};

const faqs = [
  {
    q: 'How far is NYC from Philadelphia, and how long does the drive take?',
    a: 'New York City to Philadelphia is about 95 miles, almost entirely on the New Jersey Turnpike (I-95). The drive from Midtown Manhattan to Center City is typically 1.5–2 hours under normal conditions; rush hour adds 30–45 minutes. It is one of the most popular long-distance routes on the Northeast Corridor and often simpler by car than dealing with airport transfers at both ends.',
  },
  {
    q: 'How much does car service from NYC to Philadelphia cost?',
    a: 'Eagle Eye Chauffeur uses flat-rate pricing for all routes including NYC to Philadelphia — tolls included, no surge pricing. Get an instant quote on our booking page by entering your exact pickup and drop-off.',
  },
  {
    q: 'Is it better to take Amtrak or car service from NYC to Philly?',
    a: 'Amtrak from Penn Station to 30th Street Station takes about 1h 10min on Acela and starts around $80–$150. For two or more passengers, a private car service is often comparable in total cost — with the added benefit of door-to-door pickup, no station transfers, and full privacy. For corporate travel with luggage, car service is almost always the better choice.',
  },
  {
    q: 'What areas of Philadelphia do you serve?',
    a: 'We serve all Philadelphia destinations — Center City, Old City, University City, the Philadelphia Navy Yard, PHL Airport, and suburban areas including King of Prussia, Main Line, and the Philadelphia suburbs.',
  },
  {
    q: 'Can I book a same-day NYC to Philadelphia car service?',
    a: 'Yes, subject to availability. We recommend booking at least 2–4 hours in advance for same-day long-distance trips. Call or WhatsApp us directly for urgent same-day requests.',
  },
  {
    q: 'Do you pick up at JFK, LGA, or EWR for Philadelphia runs?',
    a: 'Yes. Direct airport-to-Philadelphia transfers are available from all NYC-area airports. We meet you at arrivals and take you directly to your Philadelphia destination — no connections.',
  },
];

export default function NYCToPhiladelphiaPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd
        name="NYC to Philadelphia Car Service"
        description="Flat-rate private chauffeur from New York City to Philadelphia. Door-to-door, NJ Turnpike tolls included, no surge pricing. ~1.5–2 hours."
        areaServed="New York City, NY"
        url={`${siteUrl}/services/routes/nyc-to-philadelphia`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Routes', url: `${siteUrl}/services/routes` },
          { name: 'NYC to Philadelphia', url: `${siteUrl}/services/routes/nyc-to-philadelphia` },
        ]}
      />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-4">Long-Distance Route · Door-to-Door · All Tolls Included</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-5">
            NYC to Philadelphia Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Flat-rate private chauffeur from New York City to Philadelphia. Pickup at any NYC address or direct from JFK, LGA, or EWR — door-to-door to Center City, University City, or anywhere in Greater Philadelphia.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-10">
            <span>📍 ~95 miles</span>
            <span>⏱ ~1.5–2 hours</span>
            <span>🛣 NJ Turnpike tolls included</span>
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
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10 text-center">NYC to Philadelphia vs. Other Options</h2>
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
                  ['Amtrak Acela', '~1h 10min', '$80–$150+', 'No — Penn St to 30th St'],
                  ['NJ Transit + SEPTA', '~2h 30min', '$20–$30', 'No — multiple transfers'],
                  ['Bus (Greyhound)', '~2h 30min', '$15–$40', 'No — bus terminals only'],
                  ['Eagle Eye Chauffeur', '~1.5–2 hrs', 'Flat rate (2–6 pax shared)', '✓ Yes — door-to-door'],
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

      <section className="bg-brand-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-4">
            The NYC to Philadelphia Drive: What to Expect
          </h2>
          <p className="text-brand-grey leading-relaxed mb-4">
            New York City to Philadelphia is about 95 miles, running almost entirely down the New Jersey
            Turnpike (I-95). Door to door it is typically a 1.5 to 2 hour drive; the main variables are
            getting out of the city — the Holland or Lincoln Tunnel, or the George Washington Bridge — and
            the final approach into Center City via I-95 or the Vine Street Expressway (I-676). Your
            chauffeur watches traffic live and times the departure to keep the trip smooth.
          </p>
          <p className="text-brand-grey leading-relaxed mb-4">
            A private car makes the most sense as a same-day round trip — leave Manhattan in the morning,
            spend the day in Philadelphia meetings, and return the same evening without an overnight. Unlike
            Amtrak, there is no station-to-station transfer at either end, no luggage limit, and no fixed
            timetable — you leave from your door and arrive directly at your Philadelphia address. It is a
            popular route for law firms, Comcast Center and Center City corporate travel, and University City
            (Penn, Drexel, CHOP) visits.
          </p>
          <p className="text-brand-grey leading-relaxed">
            We pick up from any NYC address or directly from JFK, LGA, or EWR, and drop anywhere in Greater
            Philadelphia — Center City, Rittenhouse, Old City, University City, the Navy Yard, the South
            Philadelphia sports complex (Citizens Bank Park, Lincoln Financial Field, Wells Fargo Center),
            PHL Airport, and suburbs like King of Prussia and the Main Line. First Class SUVs are recommended
            for groups and luggage; Sprinter vans are available for larger parties.
          </p>
        </div>
      </section>

      <section className="bg-brand-offwhite py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">NYC to Philadelphia FAQ</h2>
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
              { label: 'NYC to Boston', href: '/services/routes/nyc-to-boston' },
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
          <h2 className="font-serif text-3xl font-semibold mb-4">Book NYC to Philadelphia Now</h2>
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
