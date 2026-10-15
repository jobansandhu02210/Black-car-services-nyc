import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Massapequa Car Service | JFK & LGA Transfers Nassau',
  description:
    'Massapequa NY black car service — flat-rate JFK, LGA & EWR airport transfers from the South Shore. Massapequa Preserve & Tobay Beach area. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/massapequa` },
  openGraph: {
    ...ogDefaults,
    title: 'Massapequa Car Service | JFK & LGA Transfers Nassau | Eagle Eye',
    description:
      'Massapequa NY black car service — flat-rate airport transfers to JFK, LGA & EWR from the South Shore, plus Tobay Beach runs. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/massapequa`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Massapequa to JFK Airport?',
    a: 'Massapequa to JFK is typically 30–45 minutes via the Southern State Parkway and Belt Parkway under normal conditions. For international departures we recommend a 3-hour buffer and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'How far is Massapequa from LaGuardia (LGA)?',
    a: 'Massapequa to LaGuardia is usually 40–50 minutes via the Meadowbrook and Grand Central Parkways. We track your flight in real time so pickups line up with your arrival, and all parkway tolls are included in the flat rate.',
  },
  {
    q: 'Do you serve both Massapequa and Massapequa Park?',
    a: 'Yes. We cover all of Massapequa and the incorporated Village of Massapequa Park — from the Sunrise Highway and Merrick Road corridors to the neighborhoods around Massapequa Preserve and Park Boulevard — under the same flat-rate standard, with your driver confirmed the night before.',
  },
  {
    q: 'Can you drive us to Tobay Beach or Jones Beach?',
    a: 'Yes. Tobay Beach and Jones Beach are a quick run down the Wantagh and Ocean Parkways from Massapequa, and we provide flat-rate beach drop-offs with room for gear, plus return pickups timed to your day or an evening concert at the Jones Beach Theater.',
  },
  {
    q: 'Is there a flat-rate car service from Massapequa to Manhattan?',
    a: 'Yes. Massapequa to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 50–70 minutes via the Southern State Parkway and Belt Parkway — a comfortable door-to-door alternative to the LIRR Babylon branch, which stops in both Massapequa and Massapequa Park.',
  },
  {
    q: 'Which nearby South Shore communities do you serve?',
    a: 'We cover Massapequa and the surrounding South Shore — Massapequa Park, Seaford, Wantagh, Amityville, Farmingdale, and North Massapequa — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Massapequa fare is locked before you travel — no parkway rush-hour surcharge, no summer-weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Southern State, Sunrise Highway, and Wantagh Parkway routing across the South Shore.',
  },
  {
    title: 'Close to JFK',
    desc: 'Massapequa sits 30–45 minutes from JFK via the Belt Parkway — one of the shorter airport runs on the Nassau South Shore.',
  },
  {
    title: 'Beach & preserve ready',
    desc: 'Drop-offs at Tobay Beach and Jones Beach, plus easy access to Massapequa Preserve — with return pickups on your schedule.',
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
    desc: 'Massapequa to JFK — 30–45 minutes via the Southern State and Belt Parkway. Flat-rate, all tolls included, meet-and-greet with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Massapequa to LaGuardia — 40–50 minutes via the Meadowbrook and Grand Central Parkways. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Massapequa to Newark Liberty — flat-rate, roughly 60–80 minutes across the city, for transatlantic and select international routes.',
  },
  {
    title: 'Tobay & Jones Beach Runs',
    desc: 'Flat-rate drop-off and timed pickups for Tobay Beach, Jones Beach, and the Jones Beach Theater, with room for gear.',
  },
  {
    title: 'Massapequa to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 50–70 minutes, flat rate, a relaxed alternative to the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for South Shore businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
];

const routes = [
  { label: 'Massapequa → JFK Airport', time: '30–45 min' },
  { label: 'Massapequa → LaGuardia (LGA)', time: '40–50 min' },
  { label: 'Massapequa → Newark (EWR)', time: '60–80 min' },
  { label: 'Massapequa → Manhattan (Midtown)', time: '50–70 min' },
  { label: 'Massapequa → MacArthur (ISP)', time: '30–40 min' },
  { label: 'Massapequa → Jones Beach / Tobay', time: '15–25 min' },
  { label: 'Massapequa → Wantagh', time: '6–10 min' },
];

export default function MassapequaPage() {
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
          { name: 'Massapequa', url: `${siteUrl}/services/areas/massapequa` },
        ]}
      />
      <ServiceJsonLd
        name="Massapequa Car Service"
        description="Premium black car service in Massapequa, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from the South Shore, plus Tobay and Jones Beach runs. 24/7 availability."
        areaServed="Massapequa, Nassau County, NY"
        url={`${siteUrl}/services/areas/massapequa`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · South Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Massapequa Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Massapequa and Massapequa Park, on Nassau&apos;s
              South Shore. JFK is 30–45 minutes, Manhattan is 50–70, and Tobay Beach is a quick run
              down the Wantagh Parkway. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the trails of Massapequa Preserve and the shops along Park Boulevard to the Sunrise
              Highway corridor and the LIRR stations, Eagle Eye Chauffeur delivers a confirmed driver
              the night before, a flat rate locked at booking, and a late-model luxury vehicle at your
              door — for an early flight, a beach day, or a run into the city.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Massapequa', label: 'Hamlet & Village' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~35 min', label: 'To JFK' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Massapequa Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to Tobay Beach runs and daily Manhattan commutes,
              Eagle Eye delivers the full ground-transportation suite for Massapequa. Every booking
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Massapequa Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Massapequa via the Southern State, Sunrise Highway, and Wantagh Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Massapequa Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Massapequa&apos;s family neighborhoods, beach access, and steady commuter base make for
              travel needs that run from early airport mornings to summer beach days. A flat rate
              confirmed at booking, a chauffeur confirmed the night before, and a luxury vehicle at
              the door is the standard Eagle Eye delivers on every Massapequa pickup.
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
              Eagle Eye covers all of Massapequa and extends across the Nassau South Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Massapequa Park', 'North Massapequa', 'Seaford', 'Wantagh',
                'Amityville', 'Farmingdale', 'Bethpage', 'Bellmore',
                'Levittown', 'Merrick', 'Copiague', 'Plainedge',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Massapequa Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">30–45 min from Massapequa</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/babylon" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Babylon Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring South Shore village</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Massapequa Ride</h2>
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
