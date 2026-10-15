import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Great Neck Car Service | JFK & LGA Transfers Nassau',
  description:
    'Great Neck black car and chauffeur service — flat-rate JFK, LGA & EWR airport transfers from the Gold Coast North Shore. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/great-neck` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/areas/great-neck` },
};

const faqs = [
  {
    q: 'How long is the drive from Great Neck to JFK Airport?',
    a: 'Typically 25–40 minutes via the Long Island Expressway (LIE) and Belt Parkway. Great Neck is also conveniently close to LaGuardia — typically 20–30 minutes — making LGA a strong option for domestic flights.',
  },
  {
    q: 'Do you offer Great Neck to Manhattan black car service?',
    a: 'Yes. Daily executive car service from Great Neck to Midtown, the Financial District, and all Manhattan destinations. Flat rates confirmed at booking — door-to-door service, no LIRR transfers.',
  },
  {
    q: 'Do you serve all Great Neck villages?',
    a: 'Yes. Great Neck Plaza, Great Neck Estates, Kings Point, Saddle Rock, Russell Gardens, Kensington, and all villages on the Great Neck peninsula are fully covered.',
  },
  {
    q: 'Is there surge pricing for Great Neck rides during rush hour?',
    a: 'Never. Your price is flat and locked at booking regardless of traffic, time of day, or demand. A 5am JFK run costs the same confirmed rate as any other time.',
  },
  {
    q: 'How far is Great Neck from JFK and LaGuardia?',
    a: 'Great Neck is on the Nassau County North Shore, close to the Queens border — about 10 miles from LaGuardia (20–30 minutes) and about 18 miles from JFK (25–40 minutes). Its proximity to LGA makes it a strong option for domestic flights.',
  },
  {
    q: 'How much does a car service from Great Neck cost?',
    a: 'Great Neck transfers are billed as a flat rate confirmed at booking, based on your address and destination, with all tolls included and no surge. Enter your trip on the booking page for an exact quote.',
  },
  {
    q: 'What is the best way to get from Great Neck to a NYC airport?',
    a: 'A private car service is the most reliable option — door to door with no LIRR transfer at Jamaica for the JFK AirTrain, and a guaranteed pre-dawn pickup without depending on rideshare availability on the North Shore early in the morning.',
  },
];

const routes = [
  { label: 'Great Neck to LaGuardia (LGA)', miles: '~10 miles', time: '20–30 min' },
  { label: 'Great Neck to JFK Airport', miles: '~18 miles', time: '25–40 min' },
  { label: 'Great Neck to Manhattan (Midtown)', miles: '~16 miles', time: '30–55 min' },
  { label: 'Great Neck to Brooklyn', miles: '~20 miles', time: '45–60 min' },
  { label: 'Great Neck to Newark (EWR)', miles: '~26 miles', time: '60–80 min' },
  { label: 'Great Neck to Westchester (HPN)', miles: '~22 miles', time: '45–70 min' },
];

export default function GreatNeckPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Nassau County', url: `${siteUrl}/services/areas/nassau-county` },
          { name: 'Great Neck', url: `${siteUrl}/services/areas/great-neck` },
        ]}
      />
      <ServiceJsonLd
        name="Great Neck Car Service"
        description="Premium black car and chauffeur service in Great Neck, NY. Flat-rate airport transfers to JFK and LGA from the Gold Coast North Shore. Corporate travel and 24/7 availability."
        areaServed="Great Neck, Nassau County, NY"
        url={`${siteUrl}/services/areas/great-neck`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Gold Coast North Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Great Neck Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-8">
              Black car and chauffeur service on the Great Neck peninsula — Nassau County&apos;s Gold Coast North Shore. Flat-rate airport transfers to both JFK and LGA, executive rides into Manhattan, and 24/7 availability with no surge pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Great Neck Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Great Neck. All rates are flat — tolls included, no surge pricing.</p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div key={r.label} className="bg-brand-offwhite border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              <Link href="/book" className="underline">Get a flat-rate quote →</Link>
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Why Great Neck Residents Choose Eagle Eye</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Flat rate locked at booking', body: 'Confirmed price before you book — no surprises for rush hour, LIE traffic, or early morning runs.' },
                { title: 'TLC-licensed professional chauffeur', body: 'Background-checked, licensed, and confirmed the night before your trip.' },
                { title: 'Door-to-door on the peninsula', body: 'Pickup at your exact home or office address anywhere on the Great Neck peninsula.' },
                { title: 'Flight tracking', body: 'Your driver monitors your flight live — adjusts for delays or early landings at no charge.' },
                { title: 'Both JFK and LGA covered', body: 'Great Neck is well-placed for both airports. We serve whichever you are flying through.' },
                { title: '24/7 availability', body: 'Early departures and late arrivals are standard — no extra charge for off-hours service.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Great Neck Car Service — FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/areas/nassau-county" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities covered</div>
              </Link>
              <Link href="/services/airport/lga" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">LaGuardia (LGA) Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Closest airport for Great Neck</div>
              </Link>
              <Link href="/services/airport/jfk" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">Meet & greet, all terminals</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Great Neck Ride</h2>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">Flat rates confirmed at booking. Available 24/7 with no surge pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">
                Call {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
