import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Norwalk CT Car Service | NYC & Airport Transfers',
  description:
    'Norwalk CT black car service — flat-rate transfers to JFK, LGA & EWR. South Norwalk (SoNo) to NYC Midtown, door-to-door. TLC-licensed chauffeur.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/norwalk-ct` },
  openGraph: {
    ...ogDefaults,
    title: 'Norwalk CT Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Norwalk CT black car service — flat-rate transfers to JFK, LGA & EWR. South Norwalk (SoNo) to NYC Midtown, door-to-door. TLC-licensed chauffeur.',
    url: `${getSiteUrl()}/services/areas/norwalk-ct`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Norwalk, CT to JFK Airport?',
    a: 'Norwalk to JFK Airport is typically 75–95 minutes via I-95 south and the Belt Parkway. During peak I-95 congestion, allow up to 105 minutes. We build buffer time into all airport scheduling and recommend a 3-hour lead before international departures. Your flat rate — with all tolls — is confirmed at booking.',
  },
  {
    q: 'How far is Norwalk to LaGuardia Airport (LGA)?',
    a: 'Norwalk to LaGuardia Airport is approximately 65–85 minutes via I-95 and the Whitestone or Throgs Neck Bridge. LGA is often the most practical domestic option for Norwalk travelers, particularly for American, Delta, and United. All bridge tolls and Merritt Parkway tolls are included in your flat rate.',
  },
  {
    q: 'Do you serve South Norwalk (SoNo) for black car pickup?',
    a: 'Yes. Eagle Eye serves all Norwalk neighborhoods including South Norwalk (SoNo), the Wall Street Norwalk area, Rowayton, East Norwalk, and all residential and commercial addresses throughout the city. Your pickup address is your boarding point — no shuttle, no shared vehicle.',
  },
  {
    q: 'Can I get a black car from Norwalk to Manhattan?',
    a: 'Absolutely. Norwalk to Midtown Manhattan is typically 60–80 minutes via I-95, making door-to-door executive car service a strong alternative to the Metro-North New Haven Line for travelers with luggage or who need point-to-point flexibility. Flat rate confirmed at booking, all tolls included.',
  },
  {
    q: 'Do you offer corporate black car accounts for Norwalk businesses?',
    a: 'Yes. Norwalk has a significant corporate presence along the I-95 corridor — including the Merritt 7 Corporate Park and dozens of technology, finance, and insurance firms. Eagle Eye offers corporate accounts with consolidated monthly billing and priority scheduling. Contact us to discuss your company&apos;s travel needs.',
  },
  {
    q: 'Do you offer event transportation in South Norwalk (SoNo)?',
    a: 'Yes. SoNo&apos;s restaurant and entertainment district, along with Norwalk&apos;s growing events calendar, makes event transportation a regular request. Eagle Eye provides professional chauffeur service for corporate dinners, private events, and group occasions in SoNo, Downtown Norwalk, and throughout Fairfield County.',
  },
  {
    q: 'How far is Norwalk, CT from the NYC airports?',
    a: 'Norwalk is in Fairfield County, Connecticut. Westchester County Airport (HPN) is the closest at about 15 miles (20–30 minutes). LaGuardia (LGA) is about 40 miles (50–75 minutes), JFK about 50 miles (70–95 minutes), and Newark (EWR) about 55 miles (70–95 minutes). Midtown Manhattan is roughly 45 miles.',
  },
  {
    q: 'How much does a car service from Norwalk cost?',
    a: 'Norwalk transfers are billed as a flat rate confirmed at booking, based on your address and destination, with all tolls included and no surge. Because it is a Connecticut run over the I-95 corridor, enter your trip on the booking page for an exact quote.',
  },
  {
    q: 'What is the best way to travel between Norwalk and NYC or the airports?',
    a: 'For business travel and airport connections, a private chauffeur is the most flexible option — door to door with no Metro-North schedule to catch, hourly hire available for meeting days, flight tracking on airport arrivals, and a flat rate with tolls included on the I-95 or Merritt Parkway route.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Your rate is locked before you book — no I-95 congestion surcharge, no demand pricing from Norwalk during peak hours.',
  },
  {
    title: 'TLC-licensed Norwalk chauffeur',
    desc: 'Background-checked, NYC TLC licensed, and experienced with Fairfield County&apos;s I-95 corridor and the Merritt Parkway routes.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model black car vehicles, clean and maintained — in the class you booked, always confirmed before your pickup.',
  },
  {
    title: 'Door-to-door across Norwalk',
    desc: 'From SoNo waterfront to Wall Street Norwalk, Rowayton, and East Norwalk — your chauffeur arrives at your exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details the evening before every trip — so early-morning departures and late events are stress-free.',
  },
  {
    title: 'All CT and NY tolls included',
    desc: 'Merritt Parkway, I-95, NYC bridges — every applicable toll on your route is built into your flat rate. No add-ons.',
  },
];

const routes = [
  { label: 'Norwalk → JFK Airport', time: '75–95 min' },
  { label: 'Norwalk → LGA Airport', time: '65–85 min' },
  { label: 'Norwalk → EWR Airport', time: '75–95 min' },
  { label: 'Norwalk → HPN Airport', time: '35–50 min' },
  { label: 'Norwalk → Midtown Manhattan', time: '60–80 min' },
  { label: 'Norwalk → Downtown Manhattan', time: '70–90 min' },
  { label: 'Norwalk → Stamford, CT', time: '15–25 min' },
  { label: 'Norwalk → Westport, CT', time: '10–20 min' },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Norwalk to JFK — flat-rate, all tolls included, approximately 75–95 minutes. For international departures, book with a 3-hour lead. Rate confirmed at booking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Norwalk to LaGuardia — 65–85 minutes via I-95. The most practical domestic option for Norwalk travelers on American, Delta, and United. All Merritt and bridge tolls included.',
  },
  {
    title: 'Norwalk to Manhattan',
    desc: 'Door-to-door executive car service from Norwalk and SoNo to Midtown or Downtown Manhattan — 60–80 minutes, flat rate, a stress-free Metro-North alternative.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Norwalk to Newark Liberty — flat-rate, approximately 75–95 minutes. A practical option for transatlantic routes and airlines with limited JFK or LGA presence.',
  },
  {
    title: 'SoNo Event Transportation',
    desc: 'Professional chauffeur service for SoNo restaurant events, corporate dinners, private occasions, and group transportation throughout Fairfield County.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Norwalk business travel — Merritt 7 office park, NYC client meetings, multi-stop executive days in the metro region.',
  },
];

export default function NorwalkCTPage() {
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
          { name: 'Norwalk', url: `${siteUrl}/services/areas/norwalk-ct` },
        ]}
      />
      <ServiceJsonLd
        name="Norwalk CT Black Car Service"
        description="Premium black car and chauffeur service in Norwalk, CT. Flat-rate airport transfers to JFK, LGA, EWR, and HPN. Executive car service from South Norwalk (SoNo) to NYC Midtown. Corporate accounts. TLC-licensed chauffeurs, 24/7 availability."
        areaServed="Norwalk, Fairfield County, Connecticut, CT"
        url={`${siteUrl}/services/areas/norwalk-ct`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Fairfield County · Norwalk, CT</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Norwalk CT Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car and chauffeur service in Norwalk, CT — from South Norwalk&apos;s
              SoNo waterfront to the Merritt 7 corporate corridor. JFK is 75–95 minutes.
              Manhattan is 60–80 minutes. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Norwalk sits squarely on the I-95 corridor between New York City and New Haven —
              a city with a vibrant waterfront district in SoNo, active corporate parks along
              the Merritt Parkway, and a Metro-North station connecting it to Grand Central.
              Eagle Eye Chauffeur serves every Norwalk address with a flat-rate, door-to-door
              professional standard. Your chauffeur is confirmed the evening before. Your
              rate is locked at booking. All tolls are included.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Norwalk', label: 'City' },
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
              Norwalk Black Car Services
            </h2>
            <p className="text-brand-grey mb-8">
              Eagle Eye provides the full professional ground transportation suite for Norwalk
              and SoNo — airport transfers at JFK, LGA, EWR, and HPN; Manhattan executive
              commutes; event transportation; and corporate hourly hire. Every booking includes
              a flat rate with all tolls and your driver confirmed in advance.
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
              Norwalk Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from Norwalk under normal conditions via I-95 and the Merritt
              Parkway. All routes are flat-rate with all CT and NY tolls included. We monitor
              live traffic and build buffer time into every airport booking.
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
              Why Norwalk Chooses Eagle Eye
            </h2>
            <p className="text-brand-grey mb-8">
              Norwalk commuters and business travelers have a choice — Metro-North to Grand Central
              or a door-to-door black car. For airport runs, early departures, or trips with luggage
              and meetings, a professional chauffeur with a flat rate and a confirmed arrival is
              in a different class. Eagle Eye delivers that standard consistently.
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
              Norwalk is centrally located in Fairfield County. Eagle Eye covers the full region
              from Greenwich to Westport and into Westchester County, New York.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Westport, CT', 'Darien, CT', 'Stamford, CT', 'New Canaan, CT',
                'Wilton, CT', 'Weston, CT', 'Fairfield, CT', 'Trumbull, CT',
                'Greenwich, CT', 'Cos Cob', 'Port Chester, NY', 'Rye, NY',
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
              Norwalk Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">75–95 min flat-rate from Norwalk</div>
              </Link>
              <Link
                href="/services/airport/lga"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">LaGuardia (LGA) Transfers</div>
                <div className="text-sm text-brand-grey mt-1">65–85 min — closest major airport</div>
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
              Book Your Norwalk Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from SoNo, Wall Street Norwalk, Rowayton, and all Norwalk
              neighborhoods. Flat rates confirmed at booking. All tolls included. Driver
              confirmed the evening before. No surge pricing.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts available for Norwalk businesses. For monthly billing and
              priority scheduling, contact{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
                {CONTACT_EMAIL_BOOKINGS}
              </a>.
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
