import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'NYC to Washington DC Car Service | Private Chauffeur',
  description:
    'NYC to Washington DC car service — flat-rate private chauffeur from Manhattan, Brooklyn, JFK, LGA, or EWR to Washington DC. ~4–5 hours.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/nyc-to-washington-dc`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'NYC to Washington DC Car Service | Eagle Eye',
    description: 'Flat-rate private chauffeur from NYC to Washington DC. All tolls included, no surge pricing, door-to-door. 24/7.',
    url: `${getSiteUrl()}/services/routes/nyc-to-washington-dc`,
  },
};

const faqs = [
  {
    q: 'How far is NYC from Washington DC, and how long does the drive take?',
    a: 'New York City to Washington DC is about 225 miles down I-95 through New Jersey, Delaware, and Maryland. Door to door it is typically a 4–5 hour drive; traffic through the Baltimore-Washington corridor can add 30–90 minutes during peak hours. Early morning departures (before 7 AM) typically have the smoothest run.',
  },
  {
    q: 'How much does car service from NYC to Washington DC cost?',
    a: 'Eagle Eye Chauffeur uses flat-rate pricing for all long-distance routes — NYC to Washington DC included. Tolls on the New Jersey Turnpike, Delaware Turnpike, and I-95 Maryland are all included in your quoted price. Get an instant quote on our booking page.',
  },
  {
    q: 'Is it better to fly, take Amtrak, or use a car service from NYC to DC?',
    a: 'Flying from LGA or DCA takes about 1 hour in the air but 3–4 hours door-to-door when you account for airport time. Amtrak Acela takes about 2h 45min from Penn Station to Union Station and costs $150–$350+. For executives, private car service offers full door-to-door convenience, complete privacy, no airport security, no bag limits, and competitive pricing when two or more passengers are sharing.',
  },
  {
    q: 'What areas of DC do you serve?',
    a: 'We serve all Washington DC destinations — Capitol Hill, Georgetown, Dupont Circle, Foggy Bottom, K Street corridor, Ronald Reagan DCA Airport, Dulles International (IAD), and northern Virginia suburbs including Arlington, McLean, and Tysons Corner.',
  },
  {
    q: 'Can you pick up at JFK, LGA, or EWR for the DC run?',
    a: 'Yes. Direct airport-to-DC transfers are available. We meet you at arrivals at any NYC-area airport and drive you directly to your Washington DC destination — no connections.',
  },
  {
    q: 'Do you offer round trips from NYC to DC?',
    a: 'Yes. Both the outbound and return legs are flat-rate and confirmed at booking. Many corporate clients book a same-day round trip — morning departure from NYC, evening return — for a full day of meetings in DC without overnight hotel costs.',
  },
  {
    q: 'Is the NYC to DC car service available for same-day round trips?',
    a: 'Yes. Same-day round trips are one of our most popular bookings for the NYC–DC corridor — executives attending Capitol Hill meetings, lobbying appointments, or law firm visits and returning the same evening. Your driver waits in DC during the day or returns to NYC and comes back for the evening pickup, depending on your preference.',
  },
];

export default function NYCToWashingtonDCPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <ServiceJsonLd
        name="NYC to Washington DC Car Service"
        description="Flat-rate private chauffeur from New York City to Washington DC. Door-to-door, all tolls included, no surge pricing. ~4–5 hours. Business and First Class vehicles."
        areaServed="New York City, NY"
        url={`${siteUrl}/services/routes/nyc-to-washington-dc`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Routes', url: `${siteUrl}/services/routes` },
          { name: 'NYC to Washington DC', url: `${siteUrl}/services/routes/nyc-to-washington-dc` },
        ]}
      />

      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-4">Long-Distance Route · Door-to-Door · All Tolls Included</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-5">
            NYC to Washington DC Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Flat-rate private chauffeur from New York City to Washington DC. Pickup at any NYC address or direct from JFK, LGA, or EWR — door-to-door to the Capitol, K Street, Georgetown, or Reagan National.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-10">
            <span>📍 ~225 miles</span>
            <span>⏱ ~4–5 hours</span>
            <span>🛣 All tolls included (NJ, DE, MD)</span>
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
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10 text-center">NYC to DC — Why Private Car Wins for Executives</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Work the Entire Ride', body: 'No TSA, no boarding, no middle seat. The 4–5 hour NYC to DC drive is productive time — calls, prep, rest. A private cabin beats every other option.' },
              { title: 'All Tolls Included', body: 'NJ Turnpike, Delaware Memorial Bridge, Maryland tolls — all included in your flat rate. The price you see is the price you pay.' },
              { title: 'Same-Day Round Trip', body: 'One of the most requested routes: leave NYC at 7 AM, full day of DC meetings, return evening. Your driver handles the entire day, no re-booking.' },
            ].map((i) => (
              <div key={i.title} className="border border-brand-light bg-brand-offwhite p-6">
                <h3 className="font-semibold text-brand-black mb-2">{i.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-brand-black mb-4">
            The NYC to DC Drive: What to Expect
          </h2>
          <p className="text-brand-grey leading-relaxed mb-4">
            New York City to Washington DC is about 225 miles, running down I-95 through New Jersey, Delaware, and
            Maryland. Door to door it is typically a 4 to 5 hour drive; the biggest variable is the Baltimore-Washington
            corridor, where I-95 and the Beltway can add 30 to 90 minutes during peak hours. Your chauffeur monitors
            traffic live and can take the I-95 Express Lanes or reroute to keep you on schedule.
          </p>
          <p className="text-brand-grey leading-relaxed mb-4">
            This is one of the most popular corporate routes we run, especially as a same-day round trip — leave
            Manhattan before 7 AM, spend the day in DC meetings, and return the same evening without an overnight hotel.
            Unlike the Acela or a flight, you work privately the entire way, carry whatever you need, and skip station
            transfers and airport security at both ends.
          </p>
          <p className="text-brand-grey leading-relaxed">
            We pick up from any NYC address or directly from JFK, LGA, or EWR, and drop anywhere in the DC area — Capitol
            Hill, the K Street corridor, Georgetown, Dupont Circle, Reagan National (DCA) or Dulles (IAD), and the
            northern Virginia suburbs (Arlington, McLean, Tysons Corner). First Class SUVs are recommended for the
            distance; Sprinter vans are available for delegations.
          </p>
        </div>
      </section>

      <section className="bg-brand-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-8">NYC to Washington DC FAQ</h2>
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
              { label: 'NYC to Philadelphia', href: '/services/routes/nyc-to-philadelphia' },
              { label: 'Manhattan to Connecticut', href: '/services/routes/manhattan-to-connecticut-car-service' },
              { label: 'NYC to Westchester', href: '/services/routes/nyc-to-westchester-car-service' },
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
          <h2 className="font-serif text-3xl font-semibold mb-4">Book NYC to Washington DC Now</h2>
          <p className="text-brand-silver mb-8">Flat rate · All tolls included · Door-to-door · No surge · Same-day round trips</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm hover:bg-brand-offwhite transition-colors">Get Quote</Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm hover:border-brand-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
