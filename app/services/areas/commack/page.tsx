import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Commack Car Service | JFK, ISP & LGA Transfers Suffolk',
  description:
    'Commack NY black car service — flat-rate JFK, LGA, EWR & MacArthur (ISP) airport transfers from central Long Island. Corporate & 24/7. No surge pricing.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/commack` },
  openGraph: {
    ...ogDefaults,
    title: 'Commack Car Service | JFK, ISP & LGA Transfers | Eagle Eye',
    description:
      'Commack NY black car service — flat-rate airport transfers to JFK, LGA, EWR & MacArthur (ISP) from central Suffolk. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/commack`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Commack to JFK Airport?',
    a: 'Commack to JFK is typically 50–70 minutes via the Long Island Expressway (LIE) and the Belt Parkway or Grand Central Parkway, depending on traffic. For international departures we recommend a 3-hour buffer and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Is MacArthur Airport (ISP) close to Commack?',
    a: 'Yes. Long Island MacArthur Airport (ISP) in Ronkonkoma is about 15 minutes from Commack via Veterans Memorial Highway (Route 454) — a fast, low-stress option for the domestic routes it serves. We also provide flat-rate transfers to JFK, LGA, and EWR.',
  },
  {
    q: 'Do you serve both the Huntington and Smithtown sides of Commack?',
    a: 'Yes. Commack straddles the Towns of Huntington and Smithtown, and we cover all of it — from the Jericho Turnpike and Commack Road corridors to the neighborhoods near Hoyt Farm Nature Preserve and Mayfair Shopping Center — under the same flat-rate standard.',
  },
  {
    q: 'Is there executive car service from Commack to Manhattan?',
    a: 'Yes. Commack to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 60–80 minutes via the LIE. A comfortable door-to-door alternative to driving in and parking, popular with central-Long-Island professionals and corporate travelers.',
  },
  {
    q: 'Do you offer corporate accounts for Commack businesses?',
    a: 'Yes. Commack sits at the center of Long Island near major office and medical corridors, and businesses here use Eagle Eye for consolidated monthly billing, priority scheduling, and airport runs for visiting staff and clients. Your driver is confirmed the night before every trip.',
  },
  {
    q: 'Which nearby central-Long-Island communities do you serve?',
    a: 'We cover Commack and the surrounding towns — Smithtown, Kings Park, Hauppauge, Dix Hills, East Northport, and Nesconset — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Commack fare is locked before you travel — no LIE rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the LIE, Jericho Turnpike, and Veterans Memorial Highway routing across central Long Island.',
  },
  {
    title: 'MacArthur (ISP) about 15 minutes',
    desc: 'Commack sits close to ISP for quick domestic departures — and we run flat-rate transfers to all three NYC-area airports too.',
  },
  {
    title: 'Central-Island convenience',
    desc: 'From the Huntington side to the Smithtown side, your chauffeur arrives at your exact Commack address — home or office.',
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
    desc: 'Commack to JFK via the LIE — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking.',
  },
  {
    title: 'MacArthur (ISP) Transfers',
    desc: 'Commack to Long Island MacArthur Airport in about 15 minutes — the fast, local option for the domestic routes it serves.',
  },
  {
    title: 'LGA & EWR Transfers',
    desc: 'Flat-rate transfers to LaGuardia and Newark Liberty, all tolls included, for the routes those airports serve best.',
  },
  {
    title: 'Commack to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, a relaxed alternative to driving in or the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for central-Island businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
  {
    title: 'Point-to-Point Across LI',
    desc: 'Direct transfers between Commack and neighboring communities — Smithtown, Huntington, Hauppauge, and the North Shore.',
  },
];

const routes = [
  { label: 'Commack → MacArthur (ISP)', time: '12–18 min' },
  { label: 'Commack → JFK Airport', time: '50–70 min' },
  { label: 'Commack → LaGuardia (LGA)', time: '55–75 min' },
  { label: 'Commack → Newark (EWR)', time: '80–105 min' },
  { label: 'Commack → Manhattan (Midtown)', time: '60–80 min' },
  { label: 'Commack → Huntington', time: '12–18 min' },
  { label: 'Commack → Smithtown', time: '8–12 min' },
];

export default function CommackPage() {
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
          { name: 'Commack', url: `${siteUrl}/services/areas/commack` },
        ]}
      />
      <ServiceJsonLd
        name="Commack Car Service"
        description="Premium black car service in Commack, Suffolk County. Flat-rate airport transfers to ISP, JFK, LGA, and EWR from central Long Island. Corporate travel and 24/7 availability."
        areaServed="Commack, Suffolk County, NY"
        url={`${siteUrl}/services/areas/commack`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · Central Long Island</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Commack Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Commack, at the geographic center of Long
              Island. MacArthur Airport is about 15 minutes away, JFK is 50–70, and Manhattan is
              60–80. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Spanning the Huntington and Smithtown town lines along Jericho Turnpike and Commack
              Road, Commack is a hub for central-Island families and businesses. Eagle Eye Chauffeur
              delivers a confirmed driver the night before, a flat rate locked at booking, and a
              late-model luxury vehicle at your door — for an early flight, a corporate run into the
              city, or a night out.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Commack', label: 'Hamlet' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '~15 min', label: 'To ISP' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Commack Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From MacArthur and JFK airport transfers to daily Manhattan commutes and hourly hire,
              Eagle Eye delivers the full ground-transportation suite for Commack. Every booking
              includes a flat rate with all tolls, a TLC-licensed chauffeur, and your driver
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Commack Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Commack via the LIE, Jericho Turnpike, and Veterans Memorial Highway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Commack Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Commack&apos;s central location makes it a natural base for airport runs in every
              direction and corporate travel into the city. A flat rate confirmed at booking, a
              chauffeur confirmed the night before, and a luxury vehicle at the door is the standard
              Eagle Eye delivers on every Commack pickup.
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
              Eagle Eye covers all of Commack and extends across central Suffolk County and the North
              Shore.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Smithtown', 'Kings Park', 'Hauppauge', 'Dix Hills',
                'East Northport', 'Nesconset', 'Northport', 'St. James',
                'Huntington', 'Islandia', 'Ronkonkoma', 'Central Islip',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Commack Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Flat-rate from Commack</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/areas/smithtown" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Smithtown Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring North Shore town</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Commack Ride</h2>
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
