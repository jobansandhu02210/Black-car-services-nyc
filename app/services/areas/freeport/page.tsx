import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Freeport Car Service | JFK & LGA Transfers Nassau',
  description:
    'Freeport NY black car service — flat-rate JFK, LGA & EWR airport transfers, Nautical Mile nights & Jones Beach runs. South Shore Nassau. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/freeport` },
  openGraph: {
    ...ogDefaults,
    title: 'Freeport Car Service | JFK & LGA Transfers Nassau | Eagle Eye',
    description:
      'Freeport NY black car service — flat-rate airport transfers plus Nautical Mile and Jones Beach runs. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/freeport`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Freeport to JFK Airport?',
    a: 'Freeport to JFK is typically 25–35 minutes via the Southern State Parkway and Belt Parkway under normal conditions. For international departures we recommend a 3-hour buffer and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'How far is Freeport from LaGuardia (LGA)?',
    a: 'Freeport to LaGuardia is usually 35–50 minutes via the Meadowbrook and Grand Central Parkways. Your flat rate is confirmed at booking with all parkway tolls included, and we track your flight so pickups line up with your arrival.',
  },
  {
    q: 'Do you provide car service to the Nautical Mile on Woodcleft Avenue?',
    a: 'Yes. We provide flat-rate drop-off and pre-scheduled return for the Freeport Nautical Mile — the Woodcleft Avenue waterfront strip of restaurants, bars, and fishing and party boats. Your chauffeur is confirmed for a set pickup point, so there is no parking hunt on a busy summer night.',
  },
  {
    q: 'Can you take us to Jones Beach from Freeport?',
    a: 'Yes. Freeport sits right at the top of the Meadowbrook State Parkway, so Jones Beach and the Jones Beach Theater are a quick, direct run. We handle flat-rate beach and concert drop-offs with room for gear, plus return pickups timed to your day or the end of the show.',
  },
  {
    q: 'Is there flat-rate car service from Freeport to Manhattan?',
    a: 'Yes. Freeport to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 45–60 minutes via the Southern State Parkway and Belt Parkway. A comfortable door-to-door alternative to the LIRR Babylon branch, which stops right in Freeport.',
  },
  {
    q: 'Which nearby South Shore communities do you serve?',
    a: 'We cover Freeport and the surrounding South Shore — Merrick, Baldwin, Roosevelt, Bellmore, Rockville Centre, and Wantagh — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Freeport fare is locked before you travel — no summer-weekend Nautical Mile surcharge, no surge for early airport departures.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Southern State, Meadowbrook, and Belt Parkway routing across the South Shore.',
  },
  {
    title: 'Close to JFK',
    desc: 'Freeport sits 25–35 minutes from JFK via the Belt Parkway — one of the shorter airport runs on the Nassau South Shore.',
  },
  {
    title: 'Nautical Mile & Jones Beach ready',
    desc: 'Drop-off and timed pickups for Woodcleft Avenue and the Jones Beach Theater, minutes up the Meadowbrook.',
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
    desc: 'Freeport to JFK — 25–35 minutes via the Belt Parkway. Flat-rate, all tolls included, meet-and-greet at every terminal with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Freeport to LaGuardia — 35–50 minutes via the Meadowbrook and Grand Central Parkways. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Freeport to Newark Liberty — flat-rate, roughly 50–70 minutes across the city, for transatlantic and select international routes.',
  },
  {
    title: 'Nautical Mile & Jones Beach',
    desc: 'Flat-rate drop-off and timed pickups for Woodcleft Avenue nights out and Jones Beach Theater concerts.',
  },
  {
    title: 'Freeport to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 45–60 minutes, flat rate, a relaxed alternative to the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for South Shore businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
];

const routes = [
  { label: 'Freeport → JFK Airport', time: '25–35 min' },
  { label: 'Freeport → LaGuardia (LGA)', time: '35–50 min' },
  { label: 'Freeport → Newark (EWR)', time: '50–70 min' },
  { label: 'Freeport → Manhattan (Midtown)', time: '45–60 min' },
  { label: 'Freeport → Manhattan (Downtown)', time: '40–55 min' },
  { label: 'Freeport → Jones Beach', time: '15–20 min' },
  { label: 'Freeport → Rockville Centre', time: '8–12 min' },
];

export default function FreeportPage() {
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
          { name: 'Freeport', url: `${siteUrl}/services/areas/freeport` },
        ]}
      />
      <ServiceJsonLd
        name="Freeport Car Service"
        description="Premium black car service in Freeport, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from the South Shore, plus Nautical Mile and Jones Beach runs. 24/7 availability."
        areaServed="Freeport, Nassau County, NY"
        url={`${siteUrl}/services/areas/freeport`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · South Shore · The Nautical Mile</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Freeport Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Freeport, the South Shore&apos;s waterfront
              village. JFK is 25–35 minutes, Manhattan is 45–60, and Jones Beach is a quick run up the
              Meadowbrook. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the restaurants and party boats of the Woodcleft Avenue Nautical Mile to the canals
              and the LIRR station downtown, Eagle Eye Chauffeur delivers a confirmed driver the night
              before, a flat rate locked at booking, and a late-model luxury vehicle at your door — for
              an early flight, a night on the water, or a concert at Jones Beach.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Freeport', label: 'Village' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~30 min', label: 'To JFK' },
                { stat: 'Jones Beach', label: 'Minutes Away' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Freeport Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to Nautical Mile nights and Jones Beach concerts,
              Eagle Eye delivers the full ground-transportation suite for Freeport. Every booking
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Freeport Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Freeport via the Southern State, Meadowbrook, and Belt Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Freeport Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Freeport&apos;s waterfront draws summer crowds while its neighborhoods keep a steady
              commuter rhythm, so travel needs run from quiet airport mornings to lively weekend
              nights. A flat rate confirmed at booking, a chauffeur confirmed the night before, and a
              luxury vehicle at the door is the standard Eagle Eye delivers on every Freeport pickup.
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
              Eagle Eye covers all of Freeport and extends across the Nassau South Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Merrick', 'Baldwin', 'Roosevelt', 'Bellmore',
                'Rockville Centre', 'Wantagh', 'Oceanside', 'Uniondale',
                'Hempstead', 'Massapequa', 'Long Beach', 'Garden City',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Freeport Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">25–35 min from Freeport</div>
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Freeport Ride</h2>
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
