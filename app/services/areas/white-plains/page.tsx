import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'White Plains NY Black Car Service | Airport & NYC',
  description:
    'White Plains black car service — flat-rate airport transfers to HPN, JFK & LGA. Door-to-door from White Plains to NYC Midtown. TLC-licensed.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/white-plains` },
  openGraph: {
    ...ogDefaults,
    title: 'White Plains NY Black Car Service | Airport & NYC | Eagle Eye',
    description:
      'White Plains black car service — flat-rate airport transfers to HPN, JFK & LGA. Door-to-door from White Plains to NYC Midtown. TLC-licensed.',
    url: `${getSiteUrl()}/services/areas/white-plains`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'How far is White Plains from HPN (Westchester County Airport)?',
    a: 'Westchester County Airport is just minutes from White Plains — typically 8–15 minutes depending on your exact address and traffic on I-287. As the county seat and closest major city to HPN, White Plains residents enjoy the shortest airport transfers in the region. Eagle Eye picks you up at your door and drops you curbside.',
  },
  {
    q: 'How long does it take to get from White Plains to JFK Airport?',
    a: 'White Plains to JFK Airport is typically 50–70 minutes under normal conditions via the Hutchinson River Parkway and Belt Parkway. During peak hours, allow 75–90 minutes. We recommend arriving 3 hours before international departures. Your rate is flat and confirmed at booking — no surge pricing regardless of traffic.',
  },
  {
    q: 'Do you offer White Plains to LaGuardia (LGA) black car service?',
    a: 'Yes. White Plains to LaGuardia Airport is approximately 40–55 minutes via I-87 and the Cross Bronx Expressway. LGA is a strong choice for domestic flights from White Plains, especially for morning departures when the highways are clearer. All tolls are included in your flat rate.',
  },
  {
    q: 'Can I get a black car from White Plains to Midtown Manhattan?',
    a: 'Absolutely. White Plains is one of the most popular Westchester corridors for daily executive commutes into Manhattan. The ride to Midtown is typically 35–55 minutes via I-87 or the Bronx River Parkway. Your chauffeur meets you at your building entrance — no parking, no stress, no Metro-North delays.',
  },
  {
    q: 'Do you offer corporate accounts for White Plains businesses?',
    a: 'Yes. White Plains is Westchester County&apos;s corporate hub — home to IBM, PepsiCo, Regeneron, and dozens of major headquarters. Eagle Eye offers corporate account arrangements with consolidated monthly billing and priority scheduling for companies that need reliable executive ground transportation throughout the month.',
  },
  {
    q: 'Can I book Eagle Eye by the hour for meetings or events in White Plains?',
    a: 'Yes. Hourly hire is available for executives who need a chauffeur on standby for meetings in White Plains, Westchester, or during NYC trips. Your vehicle and driver remain with you for the full duration — ideal for multi-stop corporate days or special events. Contact us to arrange.',
  },
];

const eaglEyeBenefits = [
  {
    title: 'Flat rate locked at booking',
    desc: 'Your confirmed price never changes for traffic, time of day, or demand — not even for the Hutchinson River Parkway at rush hour.',
  },
  {
    title: 'TLC-licensed White Plains chauffeur',
    desc: 'Every driver is background-checked, licensed by the NYC TLC, and trained to a standard befitting Westchester County&apos;s executive community.',
  },
  {
    title: 'Luxury sedan or SUV',
    desc: 'Clean, late-model black car vehicles in the class you booked — confirmed before your pickup, never a downgrade at the last minute.',
  },
  {
    title: 'Exact door pickup in White Plains',
    desc: 'Your chauffeur arrives at your building entrance, home, or hotel in White Plains — not a nearby corner. Corporate lobbies and residential estates.',
  },
  {
    title: 'Driver confirmed the night before',
    desc: 'You receive your chauffeur&apos;s name and details the evening before — no morning-of scramble, no last-minute assignment anxiety.',
  },
  {
    title: '24/7 phone & WhatsApp support',
    desc: 'Reach us any time by phone or WhatsApp — including pre-dawn HPN departures and last-minute executive travel needs.',
  },
];

const routes = [
  { label: 'White Plains → HPN Airport', time: '8–15 min' },
  { label: 'White Plains → JFK Airport', time: '50–70 min' },
  { label: 'White Plains → LGA Airport', time: '40–55 min' },
  { label: 'White Plains → EWR Airport', time: '55–75 min' },
  { label: 'White Plains → Midtown Manhattan', time: '35–55 min' },
  { label: 'White Plains → Downtown Manhattan', time: '45–65 min' },
  { label: 'White Plains → Grand Central Terminal', time: '35–50 min' },
  { label: 'White Plains → Stamford, CT', time: '20–35 min' },
];

const services = [
  {
    title: 'HPN Airport Transfers',
    desc: 'White Plains sits minutes from Westchester County Airport. Skip the parking garage — door-to-door service to HPN departures and arrivals.',
  },
  {
    title: 'JFK Airport Transfers',
    desc: 'Flat-rate black car from White Plains to JFK, all terminals. Recommended lead time 3 hours before international departures.',
  },
  {
    title: 'LGA Airport Transfers',
    desc: 'White Plains to LaGuardia via I-87 — typically 40–55 minutes. Strong choice for domestic flights on American, Delta, and United.',
  },
  {
    title: 'NYC Corporate Transfers',
    desc: 'Daily executive car service from White Plains corporate campuses and offices to Midtown and Downtown Manhattan. Flat rates, no surprises.',
  },
  {
    title: 'Hourly Executive Hire',
    desc: 'Chauffeur on standby for multi-stop corporate days, board meetings, or client entertainment in White Plains and Westchester County.',
  },
  {
    title: 'EWR Airport Transfers',
    desc: 'White Plains to Newark Liberty Airport via I-287 and the Goethals or Bayonne bridge. All tolls included in your flat rate.',
  },
];

export default function WhitePlainsPage() {
  const siteUrl = getSiteUrl();
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Services', url: `${siteUrl}/services` },
          { name: 'Service Areas', url: `${siteUrl}/services/areas` },
          { name: 'Westchester', url: `${siteUrl}/services/areas/westchester` },
          { name: 'White Plains', url: `${siteUrl}/services/areas/white-plains` },
        ]}
      />
      <ServiceJsonLd
        name="White Plains Black Car Service"
        description="Premium black car and chauffeur service in White Plains, NY. Flat-rate airport transfers to HPN, JFK, LGA, and EWR. Corporate executive transport to NYC Midtown. TLC-licensed chauffeurs, 24/7 availability, no surge pricing."
        areaServed="White Plains, Westchester County, New York, NY"
        url={`${siteUrl}/services/areas/white-plains`}
      />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Westchester County · White Plains, NY</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-5">
              White Plains Black Car Service
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl mb-4">
              Professional black car and chauffeur service in White Plains, NY — Westchester County&apos;s
              corporate hub. Minutes from HPN Airport, 35–55 minutes to Midtown Manhattan, flat-rate
              airport transfers to JFK and LGA. No surge pricing. 24/7.
            </p>
            <p className="text-brand-silver max-w-2xl mb-8">
              White Plains is the seat of Westchester County and home to some of the region&apos;s most
              demanding executive travelers. Whether you need a 5am pickup for an HPN departure, a
              reliable daily run into Midtown, or a corporate account for your team&apos;s travel —
              Eagle Eye Chauffeur delivers a consistent, flat-rate, professional service with your
              driver confirmed the evening before.
            </p>

            {/* Stats bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { stat: 'White Plains', label: 'City' },
                { stat: 'Westchester', label: 'County' },
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
              White Plains Black Car Services
            </h2>
            <p className="text-brand-grey mb-8">
              From executive airport transfers to corporate hourly hire, Eagle Eye Chauffeur
              provides the full range of professional ground transportation for White Plains
              residents and businesses. Every service includes a flat rate, a TLC-licensed
              chauffeur, and your driver confirmed the evening before.
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
              White Plains Routes &amp; Travel Times
            </h2>
            <p className="text-brand-grey mb-6">
              Estimated travel times from White Plains under normal conditions. All routes are
              flat-rate with all tolls included. We monitor live traffic and build appropriate
              buffer time into every airport booking.
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
              All rates are flat. All tolls included. No surge pricing.{' '}
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
              Why White Plains Executives Choose Eagle Eye
            </h2>
            <p className="text-brand-grey mb-8">
              White Plains is home to IBM, PepsiCo, Heineken USA, and Regeneron — executives who
              travel on tight schedules and can&apos;t afford uncertainty. A black car service
              built on flat rates, confirmed chauffeurs, and 24/7 reliability is the standard
              this community demands.
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
              Eagle Eye Chauffeur covers all of Westchester County and extends service into
              Connecticut and the broader tri-state region.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                'Scarsdale', 'Harrison', 'Rye', 'Greenburgh',
                'Tarrytown', 'Elmsford', 'Valhalla', 'Ardsley',
                'Stamford, CT', 'Greenwich, CT', 'Yonkers', 'New Rochelle',
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
              Full Westchester coverage.{' '}
              <Link href="/services/areas/westchester" className="underline">
                See all Westchester service areas →
              </Link>
            </p>
          </div>
        </section>

        {/* Common Routes Table */}
        <section className="py-14 bg-brand-offwhite">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Common Routes from White Plains</h2>
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
                    <td className="p-4 text-brand-black font-medium">LGA Airport</td>
                    <td className="p-4 text-brand-grey">35–50 min</td>
                    <td className="p-4 text-brand-grey">Airport Transfer (closest airport)</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-4 text-brand-black font-medium">JFK Airport</td>
                    <td className="p-4 text-brand-grey">55–70 min</td>
                    <td className="p-4 text-brand-grey">Airport Transfer</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-4 text-brand-black font-medium">EWR Airport</td>
                    <td className="p-4 text-brand-grey">65–85 min</td>
                    <td className="p-4 text-brand-grey">Airport Transfer</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-4 text-brand-black font-medium">HPN Airport (Westchester)</td>
                    <td className="p-4 text-brand-grey">20–30 min</td>
                    <td className="p-4 text-brand-grey">Local Airport</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-4 text-brand-black font-medium">Manhattan (Midtown)</td>
                    <td className="p-4 text-brand-grey">40–55 min</td>
                    <td className="p-4 text-brand-grey">Point-to-Point</td>
                  </tr>
                  <tr className="bg-brand-offwhite">
                    <td className="p-4 text-brand-black font-medium">Teterboro Airport (TEB)</td>
                    <td className="p-4 text-brand-grey">40–55 min</td>
                    <td className="p-4 text-brand-grey">Private Aviation</td>
                  </tr>
                  <tr className="bg-brand-white">
                    <td className="p-4 text-brand-black font-medium">Greenwich CT</td>
                    <td className="p-4 text-brand-grey">25–40 min</td>
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
              White Plains Car Service — Frequently Asked Questions
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
                href="/services/airport/hpn"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">HPN Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">Westchester County Airport — minutes from White Plains</div>
              </Link>
              <Link
                href="/services/airport/jfk"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">JFK Airport Transfers</div>
                <div className="text-sm text-brand-grey mt-1">50–70 min flat-rate from White Plains</div>
              </Link>
              <Link
                href="/services/areas/westchester"
                className="bg-brand-offwhite border border-brand-light p-5 hover:border-brand-dark transition-colors"
              >
                <div className="font-semibold text-brand-black">Westchester Car Service</div>
                <div className="text-sm text-brand-grey mt-1">Full county coverage — all communities</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand-black text-brand-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Book Your White Plains Black Car
            </h2>
            <p className="text-brand-silver mb-3 max-w-xl mx-auto">
              Available 24/7 from White Plains and all of Westchester County. Flat rates confirmed
              at booking. Your driver confirmed the evening before. No surge pricing at any hour.
            </p>
            <p className="text-brand-silver mb-8 max-w-xl mx-auto">
              Corporate accounts available for White Plains businesses. Contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline">
                {CONTACT_EMAIL_BOOKINGS}
              </a>{' '}
              to discuss account setup and priority scheduling.
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
