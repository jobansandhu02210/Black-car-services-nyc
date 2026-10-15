import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Stamford CT Car Service | NYC & Airport Transfers',
  description:
    'Stamford CT black car service — flat-rate transfers to JFK, LGA, EWR & HPN. Stamford to NYC Midtown door-to-door. TLC-licensed chauffeur for.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/stamford-ct` },
  openGraph: {
    ...ogDefaults,
    title: 'Stamford CT Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Stamford CT black car service — flat-rate transfers to JFK, LGA, EWR & HPN. Stamford to NYC Midtown door-to-door. TLC-licensed chauffeur for.',
    url: `${getSiteUrl()}/services/areas/stamford-ct`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Stamford, CT to JFK Airport?',
    a: 'Stamford to JFK Airport is typically 70–90 minutes via I-95 south and the Belt Parkway. During peak hours, allow up to 100 minutes. We build appropriate buffer time into all scheduling and recommend a 3-hour lead before international departures. Your flat rate is confirmed at booking — all applicable tolls included.',
  },
  {
    q: 'How far is Stamford to LaGuardia Airport (LGA)?',
    a: 'Stamford to LaGuardia Airport is approximately 65–85 minutes via I-95 and the Whitestone or Throgs Neck Bridge. LGA is a strong domestic option for Stamford travelers — American, Delta, and United all have significant operations. All bridge and Merritt Parkway tolls are included in your flat rate.',
  },
  {
    q: 'Do you offer Stamford to HPN (Westchester County Airport) car service?',
    a: 'Yes. Stamford to Westchester County Airport (HPN) in White Plains is typically 30–45 minutes via I-287 east. HPN is a convenient, less-congested alternative for Stamford business travelers — particularly for early morning departures when airport parking and security lines are minimal.',
  },
  {
    q: 'Can I get a black car from Stamford to Midtown Manhattan?',
    a: 'Yes. Stamford to Midtown Manhattan is one of the most active corporate corridor routes in Fairfield County — typically 50–70 minutes via I-95. Eagle Eye provides daily executive car service for Stamford corporate professionals who need door-to-door service to NYC offices, client meetings, and events.',
  },
  {
    q: 'Do you offer corporate accounts and monthly billing for Stamford companies?',
    a: 'Yes. Stamford is home to UBS, WWE, Charter Communications, Synchrony, and a long list of major corporate headquarters along the I-95 corridor. Eagle Eye offers corporate account arrangements with consolidated monthly billing, priority scheduling, and dedicated support. Contact us to discuss your company&apos;s travel program needs.',
  },
  {
    q: 'Can I book a black car for an early morning Stamford to JFK run?',
    a: 'Absolutely. Pre-dawn airport pickups are standard for Eagle Eye — no premium charge for early departures. Your chauffeur is confirmed the evening before with their name, vehicle, and contact details. For Stamford to JFK, we recommend scheduling your pickup at least 3 hours before your departure time.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Stamford corporate travelers have expense reports to submit. Your rate is locked at booking — no I-95 surge, no dynamic pricing, no surprises on the bill.',
  },
  {
    title: 'TLC-licensed Stamford chauffeur',
    desc: 'Background-checked, NYC TLC licensed, and experienced with the professional expectations of Stamford&apos;s financial and corporate community.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model luxury vehicles in the class you booked — always clean, maintained, and confirmed before your pickup.',
  },
  {
    title: 'Door-to-door across Stamford',
    desc: 'From Downtown Stamford towers and the Harbor Point waterfront to North Stamford residences — your chauffeur arrives at your exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before every trip — essential for pre-dawn departures and executive travel.',
  },
  {
    title: 'All CT and NY tolls included',
    desc: 'Merritt Parkway, I-95, NYC bridges and tunnels — every toll on your route is included in your flat rate. Nothing added at drop-off.',
  },
];

const routes = [
  { label: 'Stamford → JFK Airport', time: '70–90 min' },
  { label: 'Stamford → LGA Airport', time: '65–85 min' },
  { label: 'Stamford → EWR Airport', time: '65–85 min' },
  { label: 'Stamford → HPN Airport', time: '30–45 min' },
  { label: 'Stamford → Midtown Manhattan', time: '50–70 min' },
  { label: 'Stamford → Downtown Manhattan', time: '60–80 min' },
  { label: 'Stamford → Greenwich, CT', time: '12–20 min' },
  { label: 'Stamford → Norwalk, CT', time: '15–25 min' },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Stamford to JFK — flat-rate, all tolls included. Typically 70–90 minutes. Recommended for international departures with a 3-hour lead time. Your rate confirmed at booking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Stamford to LaGuardia — 65–85 minutes via I-95. Strong domestic choice for American, Delta, and United. All Merritt Parkway and NYC bridge tolls included.',
  },
  {
    title: 'HPN Airport Transfers',
    desc: 'Stamford to Westchester County Airport — 30–45 minutes via I-287. A quieter, often faster option for Stamford business travelers who want to avoid the major NYC airport crowds.',
  },
  {
    title: 'Stamford to Manhattan',
    desc: 'Daily executive car service from Stamford corporate offices and residences to Midtown and Downtown Manhattan. Door-to-door, flat rate, 50–70 minutes.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Stamford to Newark Liberty — flat-rate, all tolls included. Practical for transatlantic departures and airlines with limited JFK presence.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Stamford executive days — multi-stop NYC meetings, investor days, corporate events, and client entertainment.',
  },
];

export default function StamfordCTPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Connecticut', url: `${siteUrl}/services/areas/connecticut` },
          { name: 'Stamford', url: `${siteUrl}/services/areas/stamford-ct` },
        ]}
      />
      <ServiceJsonLd
        name="Stamford CT Black Car Service"
        description="Premium black car and chauffeur service in Stamford, CT. Flat-rate airport transfers to JFK, LGA, EWR, and HPN. Executive car service to NYC Midtown. Corporate accounts with monthly billing. TLC-licensed chauffeurs, 24/7 availability."
        areaServed="Stamford, Fairfield County, Connecticut, CT"
        url={`${siteUrl}/services/areas/stamford-ct`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Fairfield County · Stamford, CT</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Stamford CT Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car and chauffeur service in Stamford, Connecticut — Fairfield
              County&apos;s corporate capital. JFK is 70–90 minutes. Manhattan is 50–70 minutes.
              HPN is 30–45 minutes. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Stamford is one of the most active corporate markets on the East Coast — UBS, WWE,
              Charter Communications, Synchrony Financial, and scores of financial and technology
              firms operate from Downtown Stamford and the surrounding I-95 corridor. Eagle Eye
              Chauffeur provides the professional ground transportation these executives need:
              flat rates confirmed at booking, a chauffeur confirmed the night before, and luxury
              vehicles that match the standard of the companies they represent.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Stamford', label: 'City' },
                { stat: 'Fairfield County', label: 'County' },
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
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                Get an Instant Quote
              </Link>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                Book on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Stamford Black Car Services
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye Chauffeur covers the complete range of professional ground transportation
              for Stamford — airport transfers at JFK, LGA, EWR, and HPN, executive Manhattan
              commutes, and corporate hourly hire. Every booking includes a flat rate with all
              tolls and your chauffeur confirmed the night before.
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

        {/* Popular routes */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Stamford Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from Stamford under normal conditions via I-95 and the
              Merritt Parkway. All routes are flat-rate with all CT and NY tolls included.
              We monitor live traffic and adjust scheduling for airport runs.
            </p>
            <div className="space-y-3">
              {routes.map((r) => (
                <div
                  key={r.label}
                  className="bg-brand-offwhite border border-brand-light p-4 flex justify-between items-center"
                >
                  <span className="font-medium text-brand-black text-sm">{r.label}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All rates are flat. All CT and NY tolls included.{' '}
              <Link href="/book" className="underline">
                Get an instant quote →
              </Link>
            </p>
          </div>
        </section>

        {/* Why Eagle Eye */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Why Stamford Executives Choose Eagle Eye
            </h2>
            <p className="text-brand-grey mb-8">
              Stamford is Connecticut&apos;s leading corporate city — and its executives hold
              transportation to the same standard as everything else. Surge pricing and
              last-minute uncertainty don&apos;t work when you have a 7am JFK flight or a critical
              client meeting in Midtown. Eagle Eye delivers what Stamford requires: a locked
              rate, a confirmed driver, and a professional vehicle on time.
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

        {/* Nearby areas */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Nearby Areas We Also Serve
            </h2>
            <p className="text-brand-grey mb-6">
              Eagle Eye covers all of Fairfield County and connects into Westchester County,
              New York — serving the full I-95 corridor between New York City and New Haven.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Greenwich, CT', 'Darien, CT', 'New Canaan, CT', 'Westport, CT',
                'Norwalk, CT', 'Wilton, CT', 'Fairfield, CT', 'Trumbull, CT',
                'White Plains, NY', 'Port Chester, NY', 'Rye, NY', 'Harrison, NY',
              ].map((city) => (
                <div
                  key={city}
                  className="p-3 bg-brand-offwhite border border-brand-light text-sm text-brand-black text-center font-medium"
                >
                  {city}
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              Full Fairfield County coverage.{' '}
              <Link href="/services/areas/connecticut" className="underline">
                See all Connecticut service areas →
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Stamford Car Service — Frequently Asked Questions
            </h2>
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

        {/* Related services */}
        <section className="py-16 bg-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/services/airport/jfk"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">70–90 min flat-rate from Stamford</div>
              </Link>
              <Link
                href="/services/airport/lga"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">LaGuardia (LGA) Transfers</div>
                <div className="text-sm text-brand-grey mt-1">65–85 min — strong domestic choice</div>
              </Link>
              <Link
                href="/services/areas/connecticut"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Connecticut Car Service</div>
                <div className="text-sm text-brand-grey mt-1">All Fairfield County communities covered</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your Stamford Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from Downtown Stamford and all surrounding neighborhoods. Flat rates
              confirmed at booking. All CT and NY tolls included. Driver confirmed the night before.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts and monthly billing available for Stamford companies. Contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
                {CONTACT_EMAIL_BOOKINGS}
              </a>{' '}
              to set up your travel program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
              >
                Get an Instant Quote
              </Link>
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
              >
                Book on WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_PHONE_E164}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
              >
                Call {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
