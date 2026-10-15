import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Hicksville Car Service | JFK, LGA & ISP Transfers Nassau',
  description:
    'Hicksville NY black car service — flat-rate JFK, LGA, EWR & MacArthur (ISP) airport transfers from central Nassau. LIRR hub & Broadway Mall area. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/hicksville` },
  openGraph: {
    ...ogDefaults,
    title: 'Hicksville Car Service | JFK, LGA & ISP Transfers | Eagle Eye',
    description:
      'Hicksville NY black car service — flat-rate airport transfers to JFK, LGA, EWR & ISP from central Nassau County. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/hicksville`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Hicksville to JFK Airport?',
    a: 'Hicksville to JFK is typically 35–50 minutes via the Northern State Parkway or LIE and the Belt Parkway, depending on traffic. Sitting in central Nassau, Hicksville has balanced access to all three NYC airports, and your flat rate is confirmed at booking with all tolls included.',
  },
  {
    q: 'Do you provide car service to and from the Hicksville LIRR station?',
    a: 'Yes. Hicksville has one of the busiest LIRR stations on Long Island — a junction for the Ronkonkoma and Port Jefferson lines — and we provide flat-rate connections for travelers who prefer a door-to-door car over the train, or a reliable pickup meeting an arriving train.',
  },
  {
    q: 'Is MacArthur Airport (ISP) convenient from Hicksville?',
    a: 'Yes. Long Island MacArthur Airport (ISP) is about 30 minutes east via the LIE — a practical option for the domestic routes it serves. We provide flat-rate transfers to ISP, JFK, LGA, and EWR from Hicksville.',
  },
  {
    q: 'Do you serve the Broadway Mall and Old Country Road area?',
    a: 'Yes. We cover all of Hicksville, including the Broadway Mall and the Old Country Road retail corridor, plus the residential neighborhoods off Route 106/107 — under the same flat-rate standard, with your driver confirmed the night before.',
  },
  {
    q: 'Is there executive car service from Hicksville to Manhattan?',
    a: 'Yes. Hicksville to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 50–70 minutes via the LIE — a comfortable door-to-door alternative to the LIRR for professionals and corporate travelers.',
  },
  {
    q: 'Which nearby central-Nassau communities do you serve?',
    a: 'We cover Hicksville and the surrounding communities — Levittown, Jericho, Plainview, Bethpage, Syosset, and Westbury — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Hicksville fare is locked before you travel — no LIE or Northern State rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the LIE, Northern State Parkway, and Route 106/107 routing across central Nassau.',
  },
  {
    title: 'Balanced access to every airport',
    desc: 'Central Nassau means JFK, LGA, EWR, and ISP are all within reach — flat-rate, all tolls included.',
  },
  {
    title: 'A reliable LIRR alternative',
    desc: 'Skip the change at the Hicksville hub — a door-to-door car with your driver confirmed the night before.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early airport departures.',
  },
  {
    title: 'All tolls included',
    desc: 'LIE, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Hicksville to JFK — 35–50 minutes via the Northern State and Belt Parkway. Flat-rate, all tolls included, meet-and-greet with flight tracking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Hicksville to LaGuardia — flat-rate via the Northern State and Grand Central Parkway, for the domestic routes LGA serves best.',
  },
  {
    title: 'MacArthur (ISP) & EWR Transfers',
    desc: 'MacArthur (ISP) about 30 minutes east, plus flat-rate transfers to Newark Liberty, all tolls included.',
  },
  {
    title: 'Hicksville to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, a relaxed alternative to the LIRR hub.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for central-Nassau businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
  {
    title: 'Point-to-Point Across LI',
    desc: 'Direct transfers between Hicksville and neighboring communities — Jericho, Plainview, Bethpage, Syosset, and Westbury.',
  },
];

const routes = [
  { label: 'Hicksville → JFK Airport', time: '35–50 min' },
  { label: 'Hicksville → LaGuardia (LGA)', time: '35–50 min' },
  { label: 'Hicksville → MacArthur (ISP)', time: '28–38 min' },
  { label: 'Hicksville → Newark (EWR)', time: '65–85 min' },
  { label: 'Hicksville → Manhattan (Midtown)', time: '50–70 min' },
  { label: 'Hicksville → Jericho', time: '6–10 min' },
  { label: 'Hicksville → Bethpage', time: '8–12 min' },
];

export default function HicksvillePage() {
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
          { name: 'Hicksville', url: `${siteUrl}/services/areas/hicksville` },
        ]}
      />
      <ServiceJsonLd
        name="Hicksville Car Service"
        description="Premium black car service in Hicksville, Nassau County. Flat-rate airport transfers to JFK, LGA, EWR, and ISP from central Long Island. Corporate travel and 24/7 availability."
        areaServed="Hicksville, Nassau County, NY"
        url={`${siteUrl}/services/areas/hicksville`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Nassau County · Central Long Island · LIRR Hub</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Hicksville Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Hicksville, a central-Nassau crossroads with
              balanced access to every airport. JFK and LGA are 35–50 minutes, MacArthur is about 30,
              and Manhattan is 50–70. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the Broadway Mall and the Old Country Road corridor to the busy LIRR junction that
              anchors the town, Eagle Eye Chauffeur delivers a confirmed driver the night before, a
              flat rate locked at booking, and a late-model luxury vehicle at your door — for an early
              flight, a corporate run into the city, or a night out.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Hicksville', label: 'Hamlet' },
                { stat: 'Nassau County', label: 'County' },
                { stat: 'All Airports', label: 'In Reach' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hicksville Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK, LGA, and MacArthur airport transfers to daily Manhattan commutes and hourly
              hire, Eagle Eye delivers the full ground-transportation suite for Hicksville. Every
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Hicksville Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Hicksville via the LIE and Northern State Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Hicksville Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Hicksville&apos;s central position and commuter-hub energy make it a natural base for
              airport runs in every direction and corporate travel into the city. A flat rate
              confirmed at booking, a chauffeur confirmed the night before, and a luxury vehicle at
              the door is the standard Eagle Eye delivers on every Hicksville pickup.
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
              Eagle Eye covers all of Hicksville and extends across central Nassau County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Levittown', 'Jericho', 'Plainview', 'Bethpage',
                'Syosset', 'Westbury', 'Old Bethpage', 'Carle Place',
                'Woodbury', 'Farmingdale', 'East Meadow', 'Mineola',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Hicksville Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">35–50 min from Hicksville</div>
              </Link>
              <Link href="/services/areas/nassau-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Nassau County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Nassau communities</div>
              </Link>
              <Link href="/services/areas/westbury" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Westbury Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring central-Nassau village</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Hicksville Ride</h2>
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
