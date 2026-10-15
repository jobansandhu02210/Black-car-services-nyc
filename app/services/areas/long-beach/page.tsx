import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Long Beach Car Service | JFK & LGA Transfers Nassau',
  description:
    'Long Beach NY black car service — flat-rate JFK, LGA & EWR airport transfers from the barrier island. Boardwalk, beach & West End runs. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/long-beach` },
  openGraph: {
    ...ogDefaults,
    title: 'Long Beach Car Service | JFK & LGA Transfers Nassau | Eagle Eye',
    description:
      'Long Beach NY black car service — flat-rate airport transfers from the barrier island plus boardwalk and beach runs. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/long-beach`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Long Beach to JFK Airport?',
    a: 'Long Beach to JFK is typically 30–45 minutes via the Loop Parkway and Meadowbrook State Parkway to the Southern State and Belt Parkway, depending on traffic. As a barrier-island city, Long Beach has one bridge on and off, so we plan pickups with that in mind and confirm your flat rate at booking with all tolls included.',
  },
  {
    q: 'How far is Long Beach from LaGuardia (LGA)?',
    a: 'Long Beach to LaGuardia is usually 40–55 minutes via the Meadowbrook and Grand Central Parkways. We track your flight in real time so pickups line up with your arrival, and all parkway tolls are included in the flat rate.',
  },
  {
    q: 'Do you provide car service to the boardwalk and the beaches?',
    a: 'Yes. We provide flat-rate drop-off and pickup along the Long Beach boardwalk and to Nickerson Beach and Point Lookout, with room for beach gear — a relaxed way to enjoy a summer day without a parking-permit hunt on the island.',
  },
  {
    q: 'Can you handle a night out on the West End or Park Avenue?',
    a: 'Yes. We provide flat-rate rides to the West End bars and the Park Avenue restaurants, with a pre-scheduled return so nobody has to drive home. Your chauffeur is confirmed for a set pickup point.',
  },
  {
    q: 'Is there flat-rate car service from Long Beach to Manhattan?',
    a: 'Yes. Long Beach to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 50–70 minutes via the Meadowbrook and Belt Parkway — a comfortable door-to-door alternative to the LIRR Long Beach branch, which terminates in the city.',
  },
  {
    q: 'Which nearby barrier-island and South Shore communities do you serve?',
    a: 'We cover Long Beach and the surrounding communities — Lido Beach, Point Lookout, Island Park, Atlantic Beach, Oceanside, and Long Beach’s West End — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Long Beach fare is locked before you travel — no summer-weekend surcharge, no surge for early airport departures.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Loop Parkway, Meadowbrook, and the bridges on and off the barrier island.',
  },
  {
    title: 'Close to JFK',
    desc: 'Long Beach sits 30–45 minutes from JFK via the Meadowbrook and Belt Parkway — a short hop for a beach town.',
  },
  {
    title: 'Boardwalk, beach & nightlife ready',
    desc: 'Drop-off and timed pickups for the boardwalk, Nickerson Beach, and the West End and Park Avenue scene.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early airport departures.',
  },
  {
    title: 'All tolls included',
    desc: 'Meadowbrook, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Long Beach to JFK — 30–45 minutes via the Meadowbrook and Belt Parkway. Flat-rate, all tolls included, meet-and-greet with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Long Beach to LaGuardia — 40–55 minutes via the Meadowbrook and Grand Central Parkways. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Long Beach to Newark Liberty — flat-rate, roughly 55–70 minutes across the city, for transatlantic and select international routes.',
  },
  {
    title: 'Boardwalk & Beach Runs',
    desc: 'Flat-rate drop-off and timed pickups for the boardwalk, Nickerson Beach, and Point Lookout, with room for gear.',
  },
  {
    title: 'Long Beach to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 50–70 minutes, flat rate, a relaxed alternative to the LIRR.',
  },
  {
    title: 'Nightlife, Events & Hourly',
    desc: 'West End and Park Avenue nights, weddings, and by-the-hour hire for South Shore outings and multi-stop days.',
  },
];

const routes = [
  { label: 'Long Beach → JFK Airport', time: '30–45 min' },
  { label: 'Long Beach → LaGuardia (LGA)', time: '40–55 min' },
  { label: 'Long Beach → Newark (EWR)', time: '55–70 min' },
  { label: 'Long Beach → Manhattan (Midtown)', time: '50–70 min' },
  { label: 'Long Beach → Manhattan (Downtown)', time: '45–60 min' },
  { label: 'Long Beach → Point Lookout', time: '8–12 min' },
  { label: 'Long Beach → Rockville Centre', time: '12–18 min' },
];

export default function LongBeachPage() {
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
          { name: 'Long Beach', url: `${siteUrl}/services/areas/long-beach` },
        ]}
      />
      <ServiceJsonLd
        name="Long Beach Car Service"
        description="Premium black car service in Long Beach, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from the barrier island, plus boardwalk and beach runs. 24/7 availability."
        areaServed="Long Beach, Nassau County, NY"
        url={`${siteUrl}/services/areas/long-beach`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · South Shore · Barrier Island</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Long Beach Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Long Beach, Nassau&apos;s barrier-island
              beach city. JFK is 30–45 minutes, Manhattan is 50–70, and the boardwalk runs the length
              of town. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the 2.2-mile boardwalk and the beaches to the West End bars and the Park Avenue
              restaurants, Eagle Eye Chauffeur delivers a confirmed driver the night before, a flat
              rate locked at booking, and a late-model luxury vehicle at your door — for an early
              flight, a beach day, or a night out on the island.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Long Beach', label: 'City' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~35 min', label: 'To JFK' },
                { stat: 'Boardwalk', label: 'Beach City' },
              ].map((item) => (
                <div key={item.label} className="border border-brand-charcoal p-4 text-center">
                  <div className="font-serif text-xl font-semibold text-brand-white">{item.stat}</div>
                  <div className="text-brand-silver text-xs uppercase tracking-widest mt-1">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Long Beach Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to boardwalk and beach runs and nights on the West
              End, Eagle Eye delivers the full ground-transportation suite for Long Beach. Every
              booking includes a flat rate with all tolls, a TLC-licensed chauffeur, and your driver
              confirmed the night before.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.title} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-semibold text-brand-black mb-2">{s.title}</h3>
                  <p className="text-sm text-brand-grey">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Long Beach Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Long Beach via the Loop Parkway, Meadowbrook, and Belt Parkway. All tolls included. Flat rates confirmed at booking.</p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div key={r.label} className="bg-brand-offwhite border border-brand-light p-4 flex justify-between items-center">
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4"><Link href="/book" className="underline">Get a flat-rate quote →</Link></p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Long Beach Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Long Beach lives a double life — a summer beach destination and a year-round commuter
              city with one bridge on and off the island. A flat rate confirmed at booking, a
              chauffeur confirmed the night before, and a luxury vehicle at the door is the standard
              Eagle Eye delivers on every Long Beach pickup.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {eaglEyeBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-brand-white border border-brand-light p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{benefit.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Nearby Areas We Also Serve</h2>
            <p className="text-brand-grey mb-6">
              Eagle Eye covers all of Long Beach and extends across the barrier island and the Nassau
              South Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Lido Beach', 'Point Lookout', 'Island Park', 'Atlantic Beach',
                'Oceanside', 'Rockville Centre', 'Long Beach West End', 'Baldwin',
                'Freeport', 'Merrick', 'Hewlett', 'East Rockaway',
              ].map((city) => (
                <div key={city} className="p-3 bg-brand-offwhite border border-brand-light text-sm text-brand-black text-center font-medium">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Full Nassau County coverage.{' '}
              <Link href="/services/areas/nassau-county" className="underline">See all Nassau County service areas →</Link>
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Long Beach Car Service — FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-2">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/airport/jfk" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">30–45 min from Long Beach</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/rockville-centre" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Rockville Centre Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring South Shore village</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Long Beach Ride</h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">Flat rates confirmed at booking. Available 24/7. No surge pricing, ever.</p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts available. For priority scheduling and monthly billing, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">{CONTACT_EMAIL_BOOKINGS}</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">Get an Instant Quote</Link>
              <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">Book on WhatsApp</a>
              <a href={`tel:${CONTACT_PHONE_E164}`} className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors">Call {CONTACT_PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
