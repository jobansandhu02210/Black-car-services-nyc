import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Huntington Car Service | JFK Transfers Suffolk County',
  description:
    'Huntington NY black car service — flat-rate JFK, LGA & EWR airport transfers from Suffolk County\'s North Shore. Huntington Village, Cold Spring.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/huntington` },
  openGraph: {
    ...ogDefaults,
    title: 'Huntington Car Service | JFK Transfers Suffolk County | Eagle Eye',
    description:
      'Huntington NY black car service — flat-rate JFK, LGA & EWR airport transfers from Suffolk County\'s North Shore. No surge pricing. Book Eagle Eye 24/7.',
    url: `${getSiteUrl()}/services/areas/huntington`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Huntington to JFK Airport?',
    a: 'Huntington to JFK is typically 45–65 minutes via the Long Island Expressway (LIE) and Belt Parkway under normal conditions. During peak LIE congestion — especially Friday afternoons — allow up to 80 minutes. Your flat rate is confirmed at booking regardless of traffic, and we build appropriate buffer time into every airport pickup.',
  },
  {
    q: 'Do you serve Huntington Village, Cold Spring Harbor, and Melville?',
    a: 'Yes. We cover all of the Town of Huntington including Huntington Village, Huntington Station, Cold Spring Harbor, Lloyd Neck, Centerport, Northport, and the Melville corporate corridor — all under the same flat-rate standard, with the same driver-confirmed-the-night-before service.',
  },
  {
    q: 'Is there executive car service from Huntington to Manhattan?',
    a: 'Yes. Daily corporate car service from Huntington to Midtown Manhattan and all NYC destinations — flat rate, professional chauffeur, door-to-door. Many Melville-based executives at firms along the Route 110 corridor use Eagle Eye as a reliable alternative to the LIRR for client meetings and evening events in the city.',
  },
  {
    q: 'Do you offer Huntington to LaGuardia (LGA) transfers?',
    a: 'Yes. LGA is approximately 45–60 minutes from Huntington via the LIE and Northern State Parkway. For domestic flights, LGA is often the fastest option for Huntington travelers. All bridge and highway tolls are included in your flat rate — no surprises at drop-off.',
  },
  {
    q: 'What about Long Island MacArthur Airport (ISP)?',
    a: 'Islip MacArthur Airport is about 30–40 minutes from Huntington via the LIE, and can be a convenient option for select domestic carriers. We provide the same flat-rate, meet-and-greet service to ISP as we do to JFK, LGA, and EWR.',
  },
  {
    q: 'Can I book a car for a Cold Spring Harbor Laboratory or Melville business trip?',
    a: 'Yes. We regularly serve Cold Spring Harbor Laboratory visitors and Melville corporate offices along Route 110 — same-day airport connections, multi-stop corporate itineraries, and hourly hire for conferences and site visits.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your Huntington fare is locked before you travel — no LIE traffic surcharge, no weekend summer-traffic premium to the North Shore.',
  },
  {
    title: 'TLC-licensed chauffeur',
    desc: 'Background-checked, professionally trained, and experienced with Huntington\'s mix of village streets, private roads, and gated communities.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model luxury vehicles, always clean and inspected before every trip — the vehicle class you booked, every time.',
  },
  {
    title: 'Door-to-door across the Town of Huntington',
    desc: 'From Lloyd Neck waterfront estates to Melville corporate parks — your chauffeur arrives at your exact address, not a pickup zone.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before — essential for early JFK departures from the North Shore.',
  },
  {
    title: 'All tolls included',
    desc: 'LIE, Northern State, Belt Parkway, and NYC bridge tolls are built into your flat rate. No add-ons at drop-off.',
  },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Huntington to JFK — flat-rate, all tolls included, meet-and-greet at every terminal. Driver confirmed the evening before your flight.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Huntington to LaGuardia — 45–60 minutes via the LIE and Northern State. Strong domestic option with real-time flight tracking.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Huntington to Newark Liberty — flat-rate, approximately 75–95 minutes. Practical for international departures with limited JFK availability.',
  },
  {
    title: 'Long Island MacArthur (ISP)',
    desc: 'Huntington to Islip MacArthur Airport — 30–40 minutes, flat rate, same meet-and-greet standard as our major airport transfers.',
  },
  {
    title: 'Huntington to Manhattan',
    desc: 'Daily executive car service for Huntington and Melville professionals commuting to Midtown or Downtown NYC. Flat rate, door-to-door.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Melville corporate offices, Cold Spring Harbor Laboratory visitors, and multi-stop North Shore itineraries.',
  },
];

const routes = [
  { label: 'Huntington → JFK Airport', time: '45–65 min' },
  { label: 'Huntington → LaGuardia (LGA)', time: '45–60 min' },
  { label: 'Huntington → Newark (EWR)', time: '75–95 min' },
  { label: 'Huntington → Long Island MacArthur (ISP)', time: '30–40 min' },
  { label: 'Huntington → Manhattan (Midtown)', time: '70–90 min' },
  { label: 'Huntington → Brooklyn', time: '65–80 min' },
  { label: 'Huntington → Westchester (HPN)', time: '70–90 min' },
  { label: 'Huntington → Melville', time: '10–15 min' },
];

export default function HuntingtonPage() {
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
          { name: 'Huntington', url: `${siteUrl}/services/areas/huntington` },
        ]}
      />
      <ServiceJsonLd
        name="Huntington Car Service"
        description="Premium black car and chauffeur service in Huntington, Suffolk County. Flat-rate airport transfers to JFK, LGA, EWR, and ISP from the North Shore. Corporate travel for the Melville business corridor and 24/7 availability."
        areaServed="Huntington, Suffolk County, NY"
        url={`${siteUrl}/services/areas/huntington`}
      />

      <div className="bg-brand-offwhite">
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Suffolk County · North Shore</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">Huntington Car Service</h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Black car and chauffeur service throughout Huntington, Suffolk County&apos;s North Shore
              gateway. JFK is 45–65 minutes, Manhattan is 70–90 minutes, and the Melville corporate
              corridor is minutes away. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              From the harborfront of Cold Spring Harbor and the boutiques of Huntington Village to
              the Fortune 500 offices lining Route 110 in Melville, Eagle Eye Chauffeur serves the
              full Town of Huntington with the same standard: a confirmed driver the night before,
              a flat rate locked at booking, and a late-model luxury vehicle at your door — whether
              that&apos;s a pre-dawn JFK departure or a daily commute into the city.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Huntington', label: 'Town' },
                { stat: 'Suffolk County', label: 'County' },
                { stat: '24/7', label: 'Availability' },
                { stat: 'TLC Licensed', label: 'Chauffeurs' },
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Huntington Black Car Services</h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to daily Melville corporate commutes and hourly
              hire, Eagle Eye delivers the full ground transportation suite for Huntington. Every
              booking includes a flat rate with all tolls, a TLC-licensed chauffeur, and your
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Huntington Routes &amp; Travel Times</h2>
            <p className="text-brand-grey mb-6">Estimated travel times from Huntington via the LIE and Northern State Parkway. All tolls included. Flat rates confirmed at booking.</p>
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">Why Huntington Chooses Eagle Eye</h2>
            <p className="text-brand-grey mb-8">
              Huntington spans everything from Cold Spring Harbor&apos;s historic waterfront to the
              Route 110 corporate corridor in Melville — a mix that demands both discretion for
              residential pickups and reliability for business travel. A flat rate confirmed at
              booking, a chauffeur confirmed the night before, and a luxury vehicle at the door is
              the standard Eagle Eye delivers across all of it.
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
              Eagle Eye covers all of the Town of Huntington and extends seamlessly across Suffolk
              and Nassau Counties.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Cold Spring Harbor', 'Huntington Village', 'Melville', 'Lloyd Neck',
                'Centerport', 'Northport', 'Halesite', 'Greenlawn',
                'Commack', 'Smithtown', 'Great Neck', 'Roslyn',
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
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">Huntington Car Service — FAQ</h2>
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
                <div className="text-sm text-brand-grey mt-1">Meet & greet, all terminals</div>
              </Link>
              <Link href="/services/areas/suffolk-county" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Suffolk County Service</div>
                <div className="text-sm text-brand-grey mt-1">All Suffolk communities</div>
              </Link>
              <Link href="/services/areas/long-island" className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">Long Island Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Nassau & Suffolk Counties</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">Book Your Huntington Ride</h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">Flat rates confirmed at booking. Available 24/7. No surge pricing, ever.</p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts available for Melville offices. For priority scheduling and monthly billing, contact us at{' '}
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
