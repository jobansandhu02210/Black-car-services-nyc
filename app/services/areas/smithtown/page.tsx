import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Smithtown Car Service | JFK, ISP & LGA Transfers Suffolk',
  description:
    'Smithtown NY black car service — flat-rate JFK, LGA, EWR & MacArthur (ISP) airport transfers from the North Shore of Suffolk. Corporate & 24/7. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/smithtown` },
  openGraph: {
    ...ogDefaults,
    title: 'Smithtown Car Service | JFK, ISP & LGA Transfers | Eagle Eye',
    description:
      'Smithtown NY black car service — flat-rate airport transfers to JFK, LGA, EWR & MacArthur (ISP) from the Suffolk North Shore. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/smithtown`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Smithtown to JFK Airport?',
    a: 'Smithtown to JFK is typically 55–75 minutes via the Long Island Expressway (LIE) and the Belt Parkway, depending on traffic. For international departures we recommend a 3-hour buffer and monitor your flight in real time so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Is MacArthur Airport (ISP) close to Smithtown?',
    a: 'Yes. Long Island MacArthur Airport (ISP) in Ronkonkoma is about 15–20 minutes from Smithtown via Route 111 or Veterans Memorial Highway — a fast, convenient option for the domestic routes it serves. We also provide flat-rate transfers to JFK, LGA, and EWR.',
  },
  {
    q: 'Do you serve all of Smithtown, including St. James and Nesconset?',
    a: 'Yes. We cover the whole Town of Smithtown — Smithtown proper near the Bull statue at Route 25 and 25A, plus St. James, Nesconset, Kings Park, Head of the Harbor, and the Village of the Branch — under the same flat-rate standard, with your driver confirmed the night before.',
  },
  {
    q: 'Can you drive to Sunken Meadow State Park and the North Shore beaches?',
    a: 'Yes. Sunken Meadow State Park on the Long Island Sound is a short run up the Sunken Meadow Parkway from Smithtown, and we provide flat-rate drop-offs for the beach, the boardwalk, and golf outings, with return pickups on your schedule.',
  },
  {
    q: 'Is there executive car service from Smithtown to Manhattan?',
    a: 'Yes. Smithtown to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 70–90 minutes via the LIE — a comfortable door-to-door alternative to driving in and parking, popular with North Shore professionals and corporate travelers.',
  },
  {
    q: 'Which nearby North Shore communities do you serve?',
    a: 'We cover Smithtown and the surrounding communities — Commack, Kings Park, Nesconset, St. James, Hauppauge, and Head of the Harbor — all under the same flat-rate standard, with your driver confirmed the evening before every trip.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Smithtown fare is locked before you travel — no LIE rush-hour surcharge, no weekend premium.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the LIE, Route 25/25A, and the Sunken Meadow Parkway routing across the North Shore.',
  },
  {
    title: 'MacArthur (ISP) about 15–20 minutes',
    desc: 'A quick run to ISP for domestic departures — plus flat-rate transfers to all three NYC-area airports.',
  },
  {
    title: 'North Shore convenience',
    desc: 'From the Bull statue and Main Street to St. James and Nesconset, your chauffeur arrives at your exact Smithtown address.',
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
    desc: 'Smithtown to JFK via the LIE — flat-rate, all tolls included, meet-and-greet at every terminal with real-time flight tracking.',
  },
  {
    title: 'MacArthur (ISP) Transfers',
    desc: 'Smithtown to Long Island MacArthur Airport in about 15–20 minutes — the fast, local option for the domestic routes it serves.',
  },
  {
    title: 'LGA & EWR Transfers',
    desc: 'Flat-rate transfers to LaGuardia and Newark Liberty, all tolls included, for the routes those airports serve best.',
  },
  {
    title: 'Smithtown to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, a relaxed alternative to driving in or the LIRR.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for North Shore businesses — client meetings, multi-stop NYC runs, and event travel.',
  },
  {
    title: 'Point-to-Point Across LI',
    desc: 'Direct transfers between Smithtown and neighboring communities — Commack, Kings Park, St. James, and Hauppauge.',
  },
];

const routes = [
  { label: 'Smithtown → MacArthur (ISP)', time: '15–20 min' },
  { label: 'Smithtown → JFK Airport', time: '55–75 min' },
  { label: 'Smithtown → LaGuardia (LGA)', time: '60–80 min' },
  { label: 'Smithtown → Newark (EWR)', time: '85–110 min' },
  { label: 'Smithtown → Manhattan (Midtown)', time: '70–90 min' },
  { label: 'Smithtown → Sunken Meadow State Park', time: '10–15 min' },
  { label: 'Smithtown → Commack', time: '8–12 min' },
];

export default function SmithtownPage() {
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
          { name: 'Smithtown', url: `${siteUrl}/services/areas/smithtown` },
        ]}
      />
      <ServiceJsonLd
        name="Smithtown Car Service"
        description="Premium black car service in Smithtown, Suffolk County. Flat-rate airport transfers to ISP, JFK, LGA, and EWR from the North Shore. Corporate travel and 24/7 availability."
        areaServed="Smithtown, Suffolk County, NY"
        url={`${siteUrl}/services/areas/smithtown`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · North Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Smithtown Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout the Town of Smithtown, on Suffolk&apos;s North
              Shore. MacArthur Airport is 15–20 minutes away, JFK is 55–75, and Manhattan is 70–90.
              Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the landmark Bull statue where Route 25 meets 25A and the Main Street shops to St.
              James, Nesconset, and Sunken Meadow State Park on the Sound, Eagle Eye Chauffeur delivers
              a confirmed driver the night before, a flat rate locked at booking, and a late-model
              luxury vehicle at your door — for an early flight, a corporate run, or a day at the beach.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Smithtown', label: 'Township' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '~18 min', label: 'To ISP' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Smithtown Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From MacArthur and JFK airport transfers to daily Manhattan commutes and hourly hire,
              Eagle Eye delivers the full ground-transportation suite for Smithtown. Every booking
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Smithtown Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Smithtown via the LIE, Route 25/25A, and the Sunken Meadow Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Smithtown Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Smithtown&apos;s North Shore villages and steady commuter base make for airport, business,
              and weekend travel year-round. A flat rate confirmed at booking, a chauffeur confirmed
              the night before, and a luxury vehicle at the door is the standard Eagle Eye delivers on
              every Smithtown pickup.
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
              Eagle Eye covers all of Smithtown and extends across the North Shore of Suffolk County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'St. James', 'Nesconset', 'Kings Park', 'Commack',
                'Hauppauge', 'Head of the Harbor', 'Village of the Branch', 'Fort Salonga',
                'Stony Brook', 'Lake Grove', 'Ronkonkoma', 'Northport',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Smithtown Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Flat-rate from Smithtown</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/areas/commack" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Commack Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring central-Suffolk hamlet</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Smithtown Ride</h2>
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
