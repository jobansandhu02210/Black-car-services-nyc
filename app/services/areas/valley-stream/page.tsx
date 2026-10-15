import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Valley Stream Car Service | JFK Transfers Nassau',
  description:
    'Valley Stream NY black car service — flat-rate JFK airport transfers in 15–20 min, plus LGA & EWR. Green Acres Mall area, on the Queens border. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/valley-stream` },
  openGraph: {
    ...ogDefaults,
    title: 'Valley Stream Car Service | JFK Transfers Nassau | Eagle Eye',
    description:
      'Valley Stream NY black car service — flat-rate JFK transfers in as little as 15 minutes, plus LGA & EWR, from the Queens border. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/valley-stream`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How close is Valley Stream to JFK Airport?',
    a: 'Valley Stream is one of the closest Nassau County communities to JFK — typically just 15–20 minutes via the Belt Parkway or Southern State Parkway. Sitting right on the Queens/Nassau border, it is among the shortest airport runs in all of Nassau, which makes it a favorite base for early-morning departures.',
  },
  {
    q: 'How far is Valley Stream from LaGuardia (LGA)?',
    a: 'Valley Stream to LaGuardia is usually 30–40 minutes via the Belt and Grand Central Parkways. We track your flight in real time so pickups line up with your arrival, and all parkway tolls are included in the flat rate.',
  },
  {
    q: 'Do you serve the Green Acres Mall and the Rockaway Avenue area?',
    a: 'Yes. We cover all of Valley Stream, including the Green Acres Mall, the Rockaway Avenue and Merrick Road corridors, and the Gibson and Mill Brook neighborhoods — under the same flat-rate standard, with your driver confirmed the night before.',
  },
  {
    q: 'Is there a flat-rate car service from Valley Stream to Manhattan?',
    a: 'Yes. Valley Stream to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 35–50 minutes via the Belt Parkway — a comfortable door-to-door alternative to the LIRR, whose Valley Stream station is a junction for the Babylon, Long Beach, and Far Rockaway branches.',
  },
  {
    q: 'Do you serve the Five Towns and the Queens border nearby?',
    a: 'Yes. We cover Valley Stream and the neighboring communities of Elmont, Lynbrook, Malverne, and the Five Towns (Hewlett, Woodmere, Cedarhurst, Lawrence), plus the Queens line at Rosedale — all under the same flat-rate standard.',
  },
  {
    q: 'Do you offer corporate accounts for Valley Stream businesses?',
    a: 'Yes. Businesses along the Sunrise Highway and Rockaway Avenue corridors use Eagle Eye for consolidated monthly billing, priority scheduling, and airport runs for visiting staff and clients. Your driver is confirmed the night before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Valley Stream fare is locked before you travel — no surge for early JFK departures, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked, professionally trained, and fluent in the Belt Parkway and Southern State routing that keeps Valley Stream pickups quick.',
  },
  {
    title: 'One of the closest towns to JFK',
    desc: 'From Valley Stream, JFK is often 15–20 minutes door-to-door — one of the shortest airport runs anywhere in Nassau.',
  },
  {
    title: 'Door-to-door across the village',
    desc: 'From Green Acres and Rockaway Avenue to the Gibson and Mill Brook neighborhoods — your chauffeur arrives at your exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for pre-dawn JFK and LGA departures.',
  },
  {
    title: 'All tolls included',
    desc: 'Belt Parkway, Southern State, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Valley Stream to JFK in as little as 15–20 minutes via the Belt Parkway — flat-rate, all tolls included, meet-and-greet at every terminal with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Valley Stream to LaGuardia — typically 30–40 minutes via the Belt and Grand Central Parkways. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Valley Stream to Newark Liberty — flat-rate, roughly 45–60 minutes across the city, for transatlantic and select international routes.',
  },
  {
    title: 'Valley Stream to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 35–50 minutes, flat rate, a comfortable alternative to the LIRR junction.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Sunrise Highway and Rockaway Avenue businesses — client meetings and multi-stop NYC runs.',
  },
  {
    title: 'Point-to-Point Across the Area',
    desc: 'Direct transfers between Valley Stream and neighboring communities — Elmont, Lynbrook, Malverne, and the Five Towns.',
  },
];

const routes = [
  { label: 'Valley Stream → JFK Airport', time: '15–20 min' },
  { label: 'Valley Stream → LaGuardia (LGA)', time: '30–40 min' },
  { label: 'Valley Stream → Newark (EWR)', time: '45–60 min' },
  { label: 'Valley Stream → Manhattan (Midtown)', time: '35–50 min' },
  { label: 'Valley Stream → Manhattan (Downtown)', time: '30–45 min' },
  { label: 'Valley Stream → Brooklyn', time: '20–35 min' },
  { label: 'Valley Stream → Green Acres Mall', time: '3–8 min' },
];

export default function ValleyStreamPage() {
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
          { name: 'Valley Stream', url: `${siteUrl}/services/areas/valley-stream` },
        ]}
      />
      <ServiceJsonLd
        name="Valley Stream Car Service"
        description="Premium black car service in Valley Stream, Nassau County. JFK airport transfers in as little as 15 minutes, plus LGA and EWR. TLC-licensed, 24/7 availability."
        areaServed="Valley Stream, Nassau County, NY"
        url={`${siteUrl}/services/areas/valley-stream`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Closest to JFK · Queens Border</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Valley Stream Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Valley Stream, on the Nassau/Queens border.
              JFK is often just 15–20 minutes away, Manhattan is 35–50, and LGA and EWR are both
              covered. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the Green Acres Mall and the Rockaway Avenue corridor to the residential streets of
              Gibson and Mill Brook, Eagle Eye Chauffeur delivers a confirmed driver the night before,
              a flat rate locked at booking, and a late-model luxury vehicle at your door — whether it
              is a pre-dawn JFK departure or a run into the city.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Valley Stream', label: 'Village' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~15 min', label: 'To JFK' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Valley Stream Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK airport transfers in under half an hour to daily Manhattan commutes and hourly
              hire, Eagle Eye delivers the full ground-transportation suite for Valley Stream. Every
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Valley Stream Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Valley Stream via the Belt Parkway and Southern State. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Valley Stream Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Valley Stream&apos;s spot on the Queens border makes it one of the quickest towns to the
              airport, and its neighborhoods keep a steady commuter rhythm. A flat rate confirmed at
              booking, a chauffeur confirmed the night before, and a luxury vehicle at the door is the
              standard Eagle Eye delivers on every Valley Stream pickup.
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
              Eagle Eye covers all of Valley Stream and extends across southwestern Nassau County and
              the neighboring Queens line.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Elmont', 'Lynbrook', 'Malverne', 'Hewlett',
                'Woodmere', 'Cedarhurst', 'Franklin Square', 'Rosedale',
                'Rockville Centre', 'Oceanside', 'West Hempstead', 'Lawrence',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Valley Stream Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">15–20 min from Valley Stream</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/elmont" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Elmont Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring community near JFK</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Valley Stream Ride</h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">JFK in 15 minutes. Flat rates. No surge pricing, ever. Available 24/7.</p>
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
