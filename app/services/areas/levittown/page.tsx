import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Levittown Car Service | JFK & LGA Transfers Nassau',
  description:
    'Levittown NY black car service — flat-rate JFK, LGA & EWR airport transfers from central Nassau County. Bethpage State Park golf runs. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/levittown` },
  openGraph: {
    ...ogDefaults,
    title: 'Levittown Car Service | JFK & LGA Transfers Nassau | Eagle Eye',
    description:
      'Levittown NY black car service — flat-rate airport transfers to JFK, LGA & EWR from central Nassau, plus Bethpage golf runs. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/levittown`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Levittown to JFK Airport?',
    a: 'Levittown to JFK is typically 30–45 minutes via the Wantagh State Parkway and the Southern State and Belt Parkway, depending on traffic. Sitting in central Nassau, Levittown has quick access to all three NYC airports, and your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'How far is Levittown from LaGuardia (LGA)?',
    a: 'Levittown to LaGuardia is usually 35–50 minutes via the Meadowbrook and Grand Central Parkways. We track your flight in real time so pickups line up with your arrival, and all parkway tolls are included in the flat rate.',
  },
  {
    q: 'Can you drive golfers to Bethpage State Park?',
    a: 'Yes. Bethpage State Park and its famous Black Course — host of the U.S. Open and PGA Championship — are minutes from Levittown. We provide flat-rate, early-morning drop-offs for tee times and can arrange the return pickup, with room for clubs and gear.',
  },
  {
    q: 'Is there a flat-rate car service from Levittown to Manhattan?',
    a: 'Yes. Levittown to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 45–65 minutes via the Southern State Parkway and Belt Parkway. A comfortable door-to-door alternative to driving to the LIRR at Hicksville or Wantagh and transferring.',
  },
  {
    q: 'Do you serve the whole Levittown area, including the Village Green?',
    a: 'Yes. We cover all of Levittown — from the Village Green and Hempstead Turnpike to the residential streets off Newbridge Road and Gardiners Avenue — under the same flat-rate standard, with your driver confirmed the night before.',
  },
  {
    q: 'Which nearby central-Nassau communities do you serve?',
    a: 'We cover Levittown and the surrounding communities — Hicksville, Wantagh, Bethpage, East Meadow, Seaford, and Farmingdale — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Levittown fare is locked before you travel — no parkway rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Wantagh, Southern State, and Meadowbrook Parkway routing across central Nassau.',
  },
  {
    title: 'Quick to all three airports',
    desc: 'Central Nassau puts JFK at 30–45 minutes and LGA at 35–50 — flat-rate, all tolls included.',
  },
  {
    title: 'Bethpage golf ready',
    desc: 'Early tee-time drop-offs at Bethpage State Park with room for clubs — and a return pickup on your schedule.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early airport departures and tee times.',
  },
  {
    title: 'All tolls included',
    desc: 'Southern State, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Levittown to JFK — 30–45 minutes via the Wantagh and Belt Parkway. Flat-rate, all tolls included, meet-and-greet with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Levittown to LaGuardia — 35–50 minutes via the Meadowbrook and Grand Central Parkways. Flat rate, no surge.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Levittown to Newark Liberty — flat-rate, roughly 55–75 minutes across the city, for transatlantic and select international routes.',
  },
  {
    title: 'Bethpage Golf Runs',
    desc: 'Early tee-time drop-offs and return pickups at Bethpage State Park, minutes away — sedans and SUVs with room for clubs.',
  },
  {
    title: 'Levittown to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — 45–65 minutes, flat rate, a relaxed alternative to the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for central-Nassau businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
];

const routes = [
  { label: 'Levittown → JFK Airport', time: '30–45 min' },
  { label: 'Levittown → LaGuardia (LGA)', time: '35–50 min' },
  { label: 'Levittown → Newark (EWR)', time: '55–75 min' },
  { label: 'Levittown → Manhattan (Midtown)', time: '45–65 min' },
  { label: 'Levittown → Manhattan (Downtown)', time: '45–60 min' },
  { label: 'Levittown → Bethpage State Park', time: '8–12 min' },
  { label: 'Levittown → Hicksville', time: '6–10 min' },
];

export default function LevittownPage() {
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
          { name: 'Levittown', url: `${siteUrl}/services/areas/levittown` },
        ]}
      />
      <ServiceJsonLd
        name="Levittown Car Service"
        description="Premium black car service in Levittown, Nassau County. Flat-rate airport transfers to JFK, LGA, and EWR from central Long Island, plus Bethpage golf runs. 24/7 availability."
        areaServed="Levittown, Nassau County, NY"
        url={`${siteUrl}/services/areas/levittown`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Central Long Island</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Levittown Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Levittown, the quintessential central-Nassau
              suburb. JFK is 30–45 minutes, LGA is 35–50, and the Black Course at Bethpage State Park
              is minutes away. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the Village Green and Hempstead Turnpike to the tree-lined streets off Newbridge
              Road, Eagle Eye Chauffeur delivers a confirmed driver the night before, a flat rate
              locked at booking, and a late-model luxury vehicle at your door — for an early flight, a
              tee time at Bethpage, or a run into the city.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Levittown', label: 'Hamlet' },
                { stat: 'Nassau County', label: 'County' },
                { stat: '~35 min', label: 'To JFK' },
                { stat: 'Bethpage', label: 'Minutes Away' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Levittown Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to Bethpage golf runs and daily Manhattan commutes,
              Eagle Eye delivers the full ground-transportation suite for Levittown. Every booking
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Levittown Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Levittown via the Wantagh, Southern State, and Meadowbrook Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Levittown Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Levittown&apos;s family neighborhoods and central location make for steady airport,
              commuter, and weekend travel. A flat rate confirmed at booking, a chauffeur confirmed
              the night before, and a luxury vehicle at the door is the standard Eagle Eye delivers on
              every Levittown pickup.
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
              Eagle Eye covers all of Levittown and extends across central Nassau County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Hicksville', 'Wantagh', 'Bethpage', 'East Meadow',
                'Seaford', 'Farmingdale', 'Bellmore', 'Salisbury',
                'Westbury', 'Massapequa', 'Plainview', 'Hempstead',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Levittown Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">30–45 min from Levittown</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/hicksville" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Hicksville Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring central-Nassau hub</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Levittown Ride</h2>
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
