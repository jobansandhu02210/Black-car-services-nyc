import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Rockville Centre Car Service | JFK & LGA Transfers Nassau',
  description:
    'Rockville Centre (RVC) NY black car service — flat-rate JFK, LGA & EWR airport transfers from the South Shore. Downtown, Mercy Hospital & LIRR. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/rockville-centre` },
  openGraph: {
    ...ogDefaults,
    title: 'Rockville Centre Car Service | JFK & LGA Transfers | Eagle Eye',
    description:
      'Rockville Centre (RVC) NY black car service — flat-rate airport transfers plus downtown, hospital, and LIRR connections on the South Shore. No surge. Book 24/7.',
    url: `${getSiteUrl()}/services/areas/rockville-centre`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Rockville Centre to JFK Airport?',
    a: 'Rockville Centre (RVC) to JFK is typically 25–35 minutes via the Southern State Parkway and Belt Parkway under normal conditions. As a central South Shore village, RVC has quick access to all three NYC airports, and your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'How far is Rockville Centre from LaGuardia (LGA)?',
    a: 'Rockville Centre to LaGuardia is usually 35–45 minutes via the Meadowbrook and Grand Central Parkways. We track your flight in real time so pickups line up with your arrival, and all parkway tolls are included in the flat rate.',
  },
  {
    q: 'Do you provide car service to Mercy Hospital in Rockville Centre?',
    a: 'Yes. We provide reliable, flat-rate car service to and from Mercy Hospital (Mercy Medical Center) in Rockville Centre for appointments, discharges, and family visits — door-to-door, with your driver confirmed the night before.',
  },
  {
    q: 'Can you handle a night out in downtown Rockville Centre?',
    a: 'Yes. RVC has one of the liveliest downtowns on the South Shore, and we provide flat-rate rides to the restaurants and bars around Park Avenue and North Village Avenue, with a pre-scheduled return so nobody has to drive home.',
  },
  {
    q: 'Is there flat-rate car service from Rockville Centre to Manhattan?',
    a: 'Yes. Rockville Centre to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 45–60 minutes via the Southern State Parkway and Belt Parkway — a comfortable door-to-door alternative to the LIRR Babylon branch, which stops right in the village.',
  },
  {
    q: 'Which nearby South Shore communities do you serve?',
    a: 'We cover Rockville Centre and the surrounding South Shore — Oceanside, Lynbrook, Baldwin, Freeport, East Rockaway, and Long Beach — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Rockville Centre fare is locked before you travel — no parkway rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Southern State, Sunrise Highway, and Merrick Road routing across the South Shore.',
  },
  {
    title: 'Quick to all three airports',
    desc: 'From central RVC, JFK is 25–35 minutes and LGA is 35–45 — flat-rate, all tolls included.',
  },
  {
    title: 'Hospital & downtown ready',
    desc: 'Dependable service for Mercy Hospital and pre-scheduled pickups for RVC’s downtown restaurant and bar scene.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early airport departures.',
  },
  {
    title: 'All tolls included',
    desc: 'Southern State, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Rockville Centre to JFK — 25–35 minutes via the Belt Parkway. Flat-rate, all tolls included, meet-and-greet with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Rockville Centre to LaGuardia — 35–45 minutes via the Meadowbrook and Grand Central Parkways. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Rockville Centre to Newark Liberty — flat-rate, roughly 55–70 minutes across the city, for transatlantic and select international routes.',
  },
  {
    title: 'Hospital & Downtown Service',
    desc: 'Reliable, flat-rate rides for Mercy Hospital appointments and pre-scheduled pickups from the downtown RVC scene.',
  },
  {
    title: 'Rockville Centre to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 45–60 minutes, flat rate, a relaxed alternative to the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for South Shore businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
];

const routes = [
  { label: 'Rockville Centre → JFK Airport', time: '25–35 min' },
  { label: 'Rockville Centre → LaGuardia (LGA)', time: '35–45 min' },
  { label: 'Rockville Centre → Newark (EWR)', time: '55–70 min' },
  { label: 'Rockville Centre → Manhattan (Midtown)', time: '45–60 min' },
  { label: 'Rockville Centre → Manhattan (Downtown)', time: '40–55 min' },
  { label: 'Rockville Centre → Long Beach', time: '12–18 min' },
  { label: 'Rockville Centre → Garden City', time: '10–15 min' },
];

export default function RockvilleCentrePage() {
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
          { name: 'Rockville Centre', url: `${siteUrl}/services/areas/rockville-centre` },
        ]}
      />
      <ServiceJsonLd
        name="Rockville Centre Car Service"
        description="Premium black car service in Rockville Centre (RVC), Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from the South Shore, plus hospital and downtown service. 24/7 availability."
        areaServed="Rockville Centre, Nassau County, NY"
        url={`${siteUrl}/services/areas/rockville-centre`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · South Shore · Downtown RVC</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Rockville Centre Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Rockville Centre, one of the South Shore&apos;s
              most vibrant villages. JFK is 25–35 minutes, LGA is 35–45, and Manhattan is 45–60. Flat
              rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the restaurants and bars of the RVC downtown around Park Avenue to Mercy Hospital
              and the busy LIRR station, Eagle Eye Chauffeur delivers a confirmed driver the night
              before, a flat rate locked at booking, and a late-model luxury vehicle at your door —
              for an early flight, a hospital visit, or a night out.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Rockville Centre', label: 'Village' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~30 min', label: 'To JFK' },
                { stat: '24/7', label: 'Availability' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Rockville Centre Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to hospital runs and daily Manhattan commutes, Eagle
              Eye delivers the full ground-transportation suite for Rockville Centre. Every booking
              includes a flat rate with all tolls, a TLC-licensed chauffeur, and your driver confirmed
              the night before.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Rockville Centre Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Rockville Centre via the Southern State, Meadowbrook, and Belt Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Rockville Centre Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              RVC pairs a lively downtown with a major hospital and a steady commuter base, so travel
              needs run from early airport mornings to late nights out. A flat rate confirmed at
              booking, a chauffeur confirmed the night before, and a luxury vehicle at the door is the
              standard Eagle Eye delivers on every Rockville Centre pickup.
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
              Eagle Eye covers all of Rockville Centre and extends across the Nassau South Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Oceanside', 'Lynbrook', 'Baldwin', 'Freeport',
                'East Rockaway', 'Long Beach', 'Hewlett', 'Merrick',
                'Malverne', 'Valley Stream', 'Hempstead', 'Garden City',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Rockville Centre Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">25–35 min from RVC</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/long-beach" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Long Beach Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring South Shore beach city</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Rockville Centre Ride</h2>
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
