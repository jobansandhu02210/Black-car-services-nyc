import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Greenwich CT Car Service | NYC & Airport Transfers',
  description:
    'Greenwich CT black car service — flat-rate transfers to JFK, LGA, EWR & HPN. Greenwich to NYC Midtown, door-to-door. TLC-licensed chauffeur for hedge.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/greenwich-ct` },
  openGraph: {
    ...ogDefaults,
    title: 'Greenwich CT Car Service | NYC & Airport Transfers | Eagle Eye',
    description:
      'Greenwich CT black car service — flat-rate transfers to JFK, LGA, EWR & HPN. Greenwich to NYC Midtown, door-to-door. TLC-licensed chauffeur for hedge.',
    url: `${getSiteUrl()}/services/areas/greenwich-ct`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How long is the drive from Greenwich, CT to JFK Airport?',
    a: 'Greenwich to JFK Airport is typically 60–80 minutes under normal conditions via I-95 south and the Belt Parkway. During peak I-95 congestion, allow up to 90 minutes. We build appropriate buffer time into all scheduling and recommend a 3-hour lead before international departures. Your flat rate is confirmed at booking — all tolls included.',
  },
  {
    q: 'How far is Greenwich to LaGuardia Airport (LGA)?',
    a: 'Greenwich to LaGuardia Airport is typically 55–75 minutes via I-95 and the Whitestone or Triborough Bridge approach. LGA is a strong domestic option for Greenwich travelers, especially for American, Delta, and United flights. All tolls — including Merritt Parkway and NYC bridge tolls — are included in your flat rate.',
  },
  {
    q: 'Can Eagle Eye take me from Greenwich to HPN (Westchester County Airport)?',
    a: 'Yes. Greenwich to Westchester County Airport (HPN) in White Plains is typically 25–40 minutes via I-684 or the Merritt Parkway. HPN is an excellent option for Greenwich travelers who prefer shorter security lines and easy parking for guests. Eagle Eye provides door-to-terminal service.',
  },
  {
    q: 'Do you offer Greenwich to Midtown Manhattan car service?',
    a: 'Yes. Greenwich to Midtown Manhattan is one of the most popular corporate routes in the tri-state region — typically 45–65 minutes via I-95 through the Bronx and into the Midtown tunnel approach. Eagle Eye provides daily executive car service for Greenwich hedge fund and finance professionals commuting to their NYC offices.',
  },
  {
    q: 'Do you offer corporate and hedge fund accounts for Greenwich clients?',
    a: 'Yes. Greenwich is home to one of the densest concentrations of hedge funds and private equity firms in the world — Point72, Bridgewater, AQR, Man Group, and dozens of others. Eagle Eye offers corporate account arrangements with consolidated monthly billing, priority scheduling, and dedicated support for investment management and finance firms whose professionals travel frequently.',
  },
  {
    q: 'How long does it take from Greenwich to Newark Airport (EWR)?',
    a: 'Greenwich to Newark Liberty Airport is typically 55–75 minutes via I-95 and the Goethals or Bayonne Bridge. EWR is a practical choice for transatlantic departures and for airlines with limited JFK or LGA presence — particularly on European and some Latin American routes. All tolls included in your flat rate.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate confirmed at booking',
    desc: 'Greenwich finance professionals value certainty. Your rate is locked before you book — no I-95 surge, no dynamic pricing based on demand.',
  },
  {
    title: 'TLC-licensed executive chauffeur',
    desc: 'Background-checked, NYC TLC licensed, and trained for the discretion and professionalism that Greenwich&apos;s investment community demands.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Late-model luxury vehicles in immaculate condition — Mercedes S-Class or Suburban class. Always the vehicle you booked.',
  },
  {
    title: 'Door-to-door across Greenwich',
    desc: 'From Back Country estates on Round Hill Road to Greenwich Avenue and the waterfront — your chauffeur arrives at your exact address.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'Name, vehicle, and contact details sent the evening before every trip — so early-morning departures are stress-free.',
  },
  {
    title: 'All tolls and fees included',
    desc: 'I-95, Merritt Parkway, NYC bridges, tunnels — every toll on your route is built into your flat rate. No add-ons.',
  },
];

const routes = [
  { label: 'Greenwich → JFK Airport', time: '60–80 min' },
  { label: 'Greenwich → LGA Airport', time: '55–75 min' },
  { label: 'Greenwich → EWR Airport', time: '55–75 min' },
  { label: 'Greenwich → HPN Airport', time: '25–40 min' },
  { label: 'Greenwich → Midtown Manhattan', time: '45–65 min' },
  { label: 'Greenwich → Downtown Manhattan', time: '55–75 min' },
  { label: 'Greenwich → Stamford, CT', time: '12–20 min' },
  { label: 'Greenwich → White Plains, NY', time: '25–40 min' },
];

const services = [
  {
    title: 'JFK Airport Transfers',
    desc: 'Greenwich to JFK — flat-rate, all tolls included. Recommended for international departures. Your driver confirmed the evening before, your rate locked at booking.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'Greenwich to LaGuardia — 55–75 minutes via I-95. Strong domestic option, particularly for American, Delta, and United. All Merritt Parkway and bridge tolls included.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'Greenwich to Newark Liberty — flat-rate, approximately 55–75 minutes. Practical for transatlantic routes and airlines with limited JFK presence.',
  },
  {
    title: 'HPN Airport Transfers',
    desc: 'Greenwich to Westchester County Airport — 25–40 minutes via I-684. A convenient, quieter alternative for regional and connecting flights.',
  },
  {
    title: 'Greenwich to Manhattan',
    desc: 'Daily executive car service for Greenwich finance professionals commuting to Midtown or Downtown NYC offices. Flat rate, door-to-door, 45–65 minutes.',
  },
  {
    title: 'Corporate & Hourly Hire',
    desc: 'Dedicated chauffeur by the hour for Greenwich hedge fund and corporate executives — investor meetings, board days, client entertainment, multi-stop NYC runs.',
  },
];

export default function GreenwichCTPage() {
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
          { name: 'Greenwich', url: `${siteUrl}/services/areas/greenwich-ct` },
        ]}
      />
      <ServiceJsonLd
        name="Greenwich CT Black Car Service"
        description="Premium black car and chauffeur service in Greenwich, CT. Flat-rate airport transfers to JFK, LGA, EWR, and HPN. Executive car service to NYC Midtown. Corporate and hedge fund accounts. TLC-licensed chauffeurs, 24/7 availability."
        areaServed="Greenwich, Fairfield County, Connecticut, CT"
        url={`${siteUrl}/services/areas/greenwich-ct`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Fairfield County · Greenwich, CT</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              Greenwich CT Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car and chauffeur service in Greenwich, Connecticut — America&apos;s
              hedge fund capital. JFK is 60–80 minutes. Manhattan is 45–65 minutes. All four
              area airports covered. Flat rates, all tolls included, 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              Greenwich is the most demanding market in the tri-state region — a community of
              senior finance and investment professionals who travel constantly and expect
              flawless execution. Eagle Eye Chauffeur provides the professional ground
              transportation Greenwich demands: a confirmed driver the night before, a flat
              rate locked at booking, luxury vehicles, and the discretion to match. Whether
              it&apos;s a 5am JFK departure from Back Country or a daily Midtown Manhattan commute
              from Greenwich Avenue, the standard never changes.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'Greenwich', label: 'Town' },
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
              Greenwich Black Car Services
            </h2>
            <p className="text-brand-grey mb-8">
              From JFK and LGA airport transfers to daily Manhattan executive commutes and
              corporate hourly hire, Eagle Eye delivers the full professional ground transportation
              suite for Greenwich. Every booking includes a flat rate with all tolls, a
              TLC-licensed chauffeur, and your driver confirmed the night before.
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
              Greenwich Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from Greenwich under normal conditions via I-95 and the
              Merritt Parkway. All routes are flat-rate with every applicable toll included.
              We monitor live traffic and build buffer time into all airport bookings.
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
              Why Greenwich Chooses Eagle Eye
            </h2>
            <p className="text-brand-grey mb-8">
              Greenwich hedge fund and private equity professionals operate at the highest
              level of the financial world — and their ground transportation needs to match.
              Surge pricing and uncertainty are unacceptable. A flat rate confirmed at booking,
              a chauffeur confirmed the night before, and a luxury vehicle at the door is the
              minimum standard Eagle Eye delivers every time.
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
              Eagle Eye covers all of Fairfield County and extends service seamlessly into
              Westchester County, New York, and the tri-state airport network.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Stamford, CT', 'Darien, CT', 'New Canaan, CT', 'Westport, CT',
                'Norwalk, CT', 'Cos Cob', 'Riverside', 'Old Greenwich',
                'White Plains, NY', 'Scarsdale, NY', 'Rye, NY', 'Port Chester, NY',
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

        {/* Common Routes Table */}
        <section className="py-14 bg-brand-offwhite">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from Greenwich</h2>
            <p className="text-brand-grey text-sm mb-6">Estimated drive times in normal traffic — flat rate confirmed at booking.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-black text-brand-white">
                    <th className="text-left p-4 font-medium">Destination</th>
                    <th className="text-left p-4 font-medium">Est. Drive Time</th>
                    <th className="text-left p-4 font-medium">Service</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-brand-white">
                    <td className="p-4 text-brand-black font-medium">HPN Airport (Westchester)</td>
                    <td className="p-4 text-brand-grey">25–35 min</td>
                    <td className="p-4 text-brand-grey">Closest Airport</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-4 text-brand-black font-medium">JFK Airport</td>
                    <td className="p-4 text-brand-grey">70–90 min</td>
                    <td className="p-4 text-brand-grey">Airport Transfer</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-4 text-brand-black font-medium">LGA Airport</td>
                    <td className="p-4 text-brand-grey">60–80 min</td>
                    <td className="p-4 text-brand-grey">Airport Transfer</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-4 text-brand-black font-medium">EWR Airport</td>
                    <td className="p-4 text-brand-grey">75–95 min</td>
                    <td className="p-4 text-brand-grey">Airport Transfer</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-4 text-brand-black font-medium">Manhattan (Midtown)</td>
                    <td className="p-4 text-brand-grey">50–70 min</td>
                    <td className="p-4 text-brand-grey">Point-to-Point</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-4 text-brand-black font-medium">Teterboro Airport (TEB)</td>
                    <td className="p-4 text-brand-grey">45–60 min</td>
                    <td className="p-4 text-brand-grey">Private Aviation</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-4 text-brand-black font-medium">White Plains</td>
                    <td className="p-4 text-brand-grey">20–35 min</td>
                    <td className="p-4 text-brand-grey">Point-to-Point</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Greenwich Car Service — Frequently Asked Questions
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
                <div className="text-sm text-brand-grey mt-1">60–80 min flat-rate from Greenwich</div>
              </Link>
              <Link
                href="/services/airport/lga"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">LaGuardia (LGA) Transfers</div>
                <div className="text-sm text-brand-grey mt-1">55–75 min — strong domestic option</div>
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
              Book Your Greenwich Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from every Greenwich neighborhood and estate. Flat rates confirmed
              at booking. All CT and NY tolls included. Driver confirmed the evening before.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate and hedge fund accounts available. For priority scheduling and monthly
              billing, contact us at{' '}
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
