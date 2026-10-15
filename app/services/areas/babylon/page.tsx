import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Babylon Car Service | JFK, ISP & Fire Island Transfers',
  description:
    'Babylon Village NY black car service — flat-rate JFK, LGA, EWR & ISP airport transfers, Fire Island beach runs & Argyle Theatre nights. South Shore. No surge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/babylon` },
  openGraph: {
    ...ogDefaults,
    title: 'Babylon Car Service | JFK, ISP & Fire Island Transfers | Eagle Eye',
    description:
      'Babylon Village NY black car service — flat-rate airport transfers, Fire Island beach runs, and Argyle Theatre event rides. No surge. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/babylon`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Babylon to JFK Airport?',
    a: 'Babylon to JFK is typically 40–55 minutes via the Southern State Parkway and Belt Parkway under normal conditions. For international departures we recommend a 3-hour buffer and monitor your flight in real time, so your driver adjusts automatically for early landings or delays.',
  },
  {
    q: 'Do you serve Long Island MacArthur Airport (ISP) from Babylon?',
    a: 'Yes. MacArthur Airport (ISP) in Ronkonkoma is about 20 minutes from Babylon Village via Deer Park Avenue and the LIE — a fast, convenient option for the domestic routes it serves. We provide flat-rate transfers to ISP, JFK, LGA, and EWR.',
  },
  {
    q: 'Can you drive us to Robert Moses, Captree, or the Fire Island beaches?',
    a: 'Yes. Babylon is the mainland gateway to the barrier beaches — the Robert Moses Causeway leads to Robert Moses State Park and Captree State Park, and the Fire Island ferries are a short hop away. We run flat-rate beach and boat-basin drop-offs with room for coolers and gear, and can arrange timed return pickups.',
  },
  {
    q: 'Do you provide car service for Argyle Theatre and Main Street events?',
    a: 'Yes. We provide drop-off and pre-scheduled return for shows at the Argyle Theatre on Main Street and dinner along Deer Park Avenue and around Argyle Park. Your chauffeur is confirmed for a set pickup point — no parking search downtown.',
  },
  {
    q: 'Is there flat-rate car service from Babylon to Manhattan?',
    a: 'Yes. Babylon to Midtown or Downtown Manhattan is a flat rate confirmed at booking, typically 55–75 minutes via the Southern State Parkway and Belt Parkway or LIE. A comfortable door-to-door alternative to the LIRR Babylon branch, which terminates right in the village.',
  },
  {
    q: 'Which nearby South Shore communities do you serve?',
    a: 'We cover Babylon Village and the wider Town of Babylon — West Babylon, North Babylon, Lindenhurst, Copiague, Amityville, and Deer Park — plus neighboring Bay Shore and Islip, all under the same flat-rate standard with your driver confirmed the evening before.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Babylon fare is locked before you travel — no summer-weekend beach surcharge, no surge for early airport departures.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked and professionally trained, experienced with the Southern State, Sunrise Highway, and Robert Moses Causeway routing across the South Shore.',
  },
  {
    title: 'ISP, JFK, LGA & EWR covered',
    desc: 'MacArthur (ISP) is about 20 minutes away; we also run flat-rate transfers to all three NYC-area airports.',
  },
  {
    title: 'Beach & Fire Island ready',
    desc: 'Drop-offs at Robert Moses, Captree, and the Fire Island ferries with room for luggage and coolers — plus timed return pickups.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — ideal for early departures and beach mornings.',
  },
  {
    title: 'All tolls included',
    desc: 'Southern State, Belt Parkway, and NYC bridge/tunnel tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Babylon to JFK — 40–55 minutes via the Southern State and Belt Parkway. Flat-rate, all tolls included, meet-and-greet with real-time flight tracking.',
  },
  {
    title: 'MacArthur (ISP) Transfers',
    desc: 'Babylon to Long Island MacArthur Airport in about 20 minutes — the fast, local option for the domestic routes it serves.',
  },
  {
    title: 'LGA & EWR Transfers',
    desc: 'Flat-rate transfers to LaGuardia and Newark Liberty, all tolls included, for the routes those airports serve best.',
  },
  {
    title: 'Fire Island & Beach Runs',
    desc: 'Drop-off at Robert Moses, Captree, and the Fire Island ferries, with return pickups timed to your day on the water.',
  },
  {
    title: 'Babylon to Manhattan',
    desc: 'Door-to-door executive car service to Midtown or Downtown — flat rate, a relaxed alternative to the LIRR Babylon branch.',
  },
  {
    title: 'Events, Corporate & Hourly',
    desc: 'Argyle Theatre nights, Main Street dinners, weddings, and by-the-hour hire for South Shore businesses and multi-stop trips.',
  },
];

const routes = [
  { label: 'Babylon → MacArthur (ISP)', time: '18–25 min' },
  { label: 'Babylon → JFK Airport', time: '40–55 min' },
  { label: 'Babylon → LaGuardia (LGA)', time: '45–60 min' },
  { label: 'Babylon → Newark (EWR)', time: '70–90 min' },
  { label: 'Babylon → Manhattan (Midtown)', time: '55–75 min' },
  { label: 'Babylon → Robert Moses / Captree', time: '15–20 min' },
  { label: 'Babylon → Bay Shore', time: '10–15 min' },
];

export default function BabylonPage() {
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
          { name: 'Babylon', url: `${siteUrl}/services/areas/babylon` },
        ]}
      />
      <ServiceJsonLd
        name="Babylon Car Service"
        description="Premium black car service in Babylon Village, Suffolk County. Flat-rate airport transfers to ISP, JFK, LGA, and EWR, plus Fire Island beach runs and Argyle Theatre event service. 24/7 availability."
        areaServed="Babylon, Suffolk County, NY"
        url={`${siteUrl}/services/areas/babylon`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · South Shore · Beach Gateway</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Babylon Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Babylon Village, the South Shore&apos;s
              gateway to the barrier beaches. MacArthur Airport is about 20 minutes away, JFK is
              40–55, and the Robert Moses Causeway is minutes from downtown. Flat rates, all tolls
              included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the waterfall at Argyle Park and the Argyle Theatre on Main Street to the Captree
              boat basin and the Fire Island ferries, Eagle Eye Chauffeur delivers a confirmed driver
              the night before, a flat rate locked at booking, and a late-model luxury vehicle at
              your door — for an early flight, a beach day, or a night out downtown.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Babylon', label: 'Village' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '~20 min', label: 'To ISP' },
                { stat: 'Fire Island', label: 'Gateway' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Babylon Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From MacArthur and JFK airport transfers to Fire Island beach runs and nights at the
              Argyle Theatre, Eagle Eye delivers the full ground-transportation suite for Babylon.
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Babylon Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Babylon Village via the Southern State Parkway, Sunrise Highway, and Robert Moses Causeway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Babylon Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Babylon&apos;s walkable village, its beach-town summers, and its steady commuter base
              make for travel needs that run from quiet airport mornings to busy weekend nights. A
              flat rate confirmed at booking, a chauffeur confirmed the night before, and a luxury
              vehicle at the door is the standard Eagle Eye delivers on every Babylon pickup.
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
              Eagle Eye covers all of Babylon Village and the wider Town of Babylon across the South
              Shore of Suffolk County.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'West Babylon', 'North Babylon', 'Lindenhurst', 'Copiague',
                'Amityville', 'Deer Park', 'Bay Shore', 'Wyandanch',
                'Wheatley Heights', 'Islip', 'Brightwaters', 'Massapequa',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Babylon Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">40–55 min from Babylon</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/areas/bay-shore" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Bay Shore Service</div>
                <div className="text-sm text-brand-grey mt-1">Neighboring Fire Island ferry town</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Babylon Ride</h2>
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
