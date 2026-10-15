import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Bay Shore Car Service | ISP, JFK & Fire Island Ferry',
  description:
    'Bay Shore NY black car service — flat-rate ISP, JFK, LGA & EWR transfers plus Fire Island ferry runs to Ocean Beach & the Pines. South Shore Suffolk. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/bay-shore` },
  openGraph: {
    ...ogDefaults,
    title: 'Bay Shore Car Service | ISP, JFK & Fire Island Ferry | Eagle Eye',
    description:
      'Bay Shore NY black car service — flat-rate airport transfers and Fire Island ferry runs to Ocean Beach, the Pines & Cherry Grove. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/bay-shore`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Can you take me to the Fire Island Ferries in Bay Shore?',
    a: 'Yes — Bay Shore is the main mainland terminal for Fire Island Ferries, with service to Ocean Beach, Fire Island Pines, Cherry Grove, Saltaire, Kismet, and Fair Harbor. We run flat-rate drop-offs to the Maple Avenue terminal with room for beach luggage and coolers, and can time your return pickup to the boat schedule.',
  },
  {
    q: 'How close is Bay Shore to Long Island MacArthur Airport (ISP)?',
    a: 'Very close — Bay Shore to MacArthur Airport (ISP) is typically just 10–15 minutes via Fifth Avenue and Sunrise Highway. It is one of the fastest airport runs on the South Shore and a strong option for the domestic routes ISP serves. We also provide flat-rate transfers to JFK, LGA, and EWR.',
  },
  {
    q: 'How long is the drive from Bay Shore to JFK Airport?',
    a: 'Bay Shore to JFK is typically 45–60 minutes via the Southern State Parkway and Belt Parkway. We recommend a 3-hour buffer for international departures and track your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you provide car service for Boulton Center and Main Street events?',
    a: 'Yes. We provide drop-off and pre-scheduled return for shows at the YMCA Boulton Center for the Performing Arts and dinners along the revitalized Main Street. Your chauffeur is confirmed for a set pickup point — no parking search downtown.',
  },
  {
    q: 'Is there flat-rate car service from Bay Shore to Manhattan?',
    a: 'Yes. Bay Shore to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 60–80 minutes via the Southern State Parkway and Belt Parkway. A comfortable door-to-door alternative to the LIRR Montauk branch, which stops right in Bay Shore.',
  },
  {
    q: 'Which nearby South Shore communities do you serve?',
    a: 'We cover Bay Shore and the surrounding Town of Islip — Brightwaters, Islip, West Islip, East Islip, Great River, Brentwood, and Central Islip — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Bay Shore fare is locked before you travel — no summer-weekend ferry surcharge, no surge for early airport departures.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with Sunrise Highway, the Southern State, and the Fifth Avenue run to the ferry terminal.',
  },
  {
    title: 'Minutes from MacArthur (ISP)',
    desc: 'Bay Shore sits 10–15 minutes from ISP — one of the quickest airport runs anywhere on the South Shore.',
  },
  {
    title: 'Fire Island ferry connections',
    desc: 'Drop-off at the Maple Avenue terminal for Ocean Beach, the Pines, and Cherry Grove — with return pickups timed to your boat.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early departures and ferry mornings.',
  },
  {
    title: 'All tolls included',
    desc: 'Southern State, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'MacArthur (ISP) Transfers',
    desc: 'Bay Shore to Long Island MacArthur Airport in 10–15 minutes — the fastest local airport option for the domestic routes it serves.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Bay Shore to JFK — 45–60 minutes via the Southern State and Belt Parkway. Flat-rate, all tolls included, meet-and-greet with flight tracking.',
  },
  {
    title: 'LGA & EWR Transfers',
    desc: 'Flat-rate transfers to LaGuardia and Newark Liberty, all tolls included, for the routes those airports serve best.',
  },
  {
    title: 'Fire Island Ferry Runs',
    desc: 'Drop-off at the Bay Shore ferry terminal for Ocean Beach, the Pines, Cherry Grove, and Saltaire, with return pickups timed to the schedule.',
  },
  {
    title: 'Bay Shore to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, a relaxed alternative to the LIRR Montauk branch.',
  },
  {
    title: 'Events, Corporate & Hourly',
    desc: 'Boulton Center nights, Main Street dinners, weddings, and by-the-hour hire for South Shore businesses and multi-stop itineraries.',
  },
];

const routes = [
  { label: 'Bay Shore → MacArthur (ISP)', time: '10–15 min' },
  { label: 'Bay Shore → JFK Airport', time: '45–60 min' },
  { label: 'Bay Shore → LaGuardia (LGA)', time: '50–65 min' },
  { label: 'Bay Shore → Newark (EWR)', time: '75–95 min' },
  { label: 'Bay Shore → Manhattan (Midtown)', time: '60–80 min' },
  { label: 'Bay Shore → Fire Island Ferry Terminal', time: '3–8 min' },
  { label: 'Bay Shore → Babylon', time: '10–15 min' },
];

export default function BayShorePage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Suffolk County', url: `${siteUrl}/services/areas/suffolk-county` },
          { name: 'Bay Shore', url: `${siteUrl}/services/areas/bay-shore` },
        ]}
      />
      <ServiceJsonLd
        name="Bay Shore Car Service"
        description="Premium black car service in Bay Shore, Suffolk County. Flat-rate airport transfers to ISP, JFK, LGA, and EWR, plus Fire Island ferry runs and Boulton Center event service. 24/7 availability."
        areaServed="Bay Shore, Suffolk County, NY"
        url={`${siteUrl}/services/areas/bay-shore`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · South Shore · Fire Island Ferry Hub</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Bay Shore Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Bay Shore, the mainland gateway to Fire
              Island. MacArthur Airport is just 10–15 minutes away, the ferries to Ocean Beach and
              the Pines leave from Maple Avenue, and all three NYC airports are covered. Flat rates,
              all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the Boulton Center and the Main Street restaurants to Southside Hospital and the
              Fire Island ferry terminal, Eagle Eye Chauffeur delivers a confirmed driver the night
              before, a flat rate locked at booking, and a late-model luxury vehicle at your door —
              for an early flight out of ISP, a summer ferry morning, or a night out downtown.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Bay Shore', label: 'Hamlet' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '~12 min', label: 'To ISP' },
                { stat: 'Fire Island', label: 'Ferry Hub' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Bay Shore Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From MacArthur and JFK airport transfers to Fire Island ferry runs and nights at the
              Boulton Center, Eagle Eye delivers the full ground-transportation suite for Bay Shore.
              Every booking includes a flat rate with all tolls, a TLC-licensed chauffeur, and your
              driver confirmed the night before.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Bay Shore Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Bay Shore via Sunrise Highway and the Southern State Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Bay Shore Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Bay Shore is both a busy commuter hub and the jumping-off point for a Fire Island
              summer, so travel needs range from weekday airport runs to packed weekend ferry
              mornings. A flat rate confirmed at booking, a chauffeur confirmed the night before, and
              a luxury vehicle at the door is the standard Eagle Eye delivers on every Bay Shore
              pickup.
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
              Eagle Eye covers all of Bay Shore and extends across the Town of Islip and the wider
              South Shore of Suffolk County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Brightwaters', 'Islip', 'West Islip', 'East Islip',
                'Great River', 'Brentwood', 'Central Islip', 'Oakdale',
                'Sayville', 'Babylon', 'Deer Park', 'Ronkonkoma',
              ].map((city) => (
                <div key={city} className="p-3 bg-brand-offwhite border border-brand-light text-sm text-brand-black text-center font-medium">
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Full Suffolk County coverage.{' '}
              <Link href="/services/areas/suffolk-county" className="underline">See all Suffolk County service areas →</Link>
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Bay Shore Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">45–60 min from Bay Shore</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
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
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Bay Shore Ride</h2>
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
