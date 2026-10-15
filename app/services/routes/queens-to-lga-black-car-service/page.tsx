import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Queens to LaGuardia Car Service | LGA Transfer',
  description:
    'Queens to LaGuardia Airport black car service — flat rates, professional chauffeur, door-to-door from Astoria, Flushing, Jamaica & all Queens. TLC.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/queens-to-lga-black-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'Queens to LaGuardia (LGA) Car Service | Eagle Eye',
    description: 'Flat-rate black car service from any Queens neighborhood to LaGuardia Airport. TLC licensed, no surge pricing, 24/7.',
    url: `${getSiteUrl()}/services/routes/queens-to-lga-black-car-service`,
  },
};

const faqs = [
  {
    q: 'How much is a Queens to LGA car service?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Because LaGuardia is located within Queens, many neighborhoods are among the shortest and most affordable airport transfers in New York City. Get an instant quote on our booking page by entering your Queens address and LGA as your destination. The price you see is the price you pay.',
  },
  {
    q: 'How close is Queens to LaGuardia Airport?',
    a: 'LaGuardia Airport is actually located in East Elmhurst, Queens — making it genuinely the home borough airport for Queens residents. Astoria and Jackson Heights are just 10–15 minutes away in normal traffic. Flushing and Long Island City typically run 15–25 minutes. Even Jamaica, on the opposite end of Queens, is usually under 35 minutes.',
  },
  {
    q: 'Do you go to both Terminal B and Terminal C at LGA?',
    a: 'Yes. Eagle Eye Chauffeur serves both of LaGuardia\'s newly rebuilt terminals — Terminal B (the award-winning central terminal) and Terminal C (Delta\'s hub). Our chauffeurs know the exact drop-off and pickup locations for each terminal and the most efficient approach routes to avoid airport circulation delays.',
  },
  {
    q: 'Can I book a Queens to LGA car service for early morning?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Early morning flights — 5am, 6am, even 4am departures — are fully covered. Your driver is confirmed the evening before every booking, so there are no last-minute surprises when your alarm goes off at 3:30am.',
  },
  {
    q: 'Is an LGA car service worth it for short Queens trips?',
    a: 'Absolutely. Even for a 10-minute drive from Astoria, a professional chauffeur service means door-to-terminal service, luggage handled for you, no parking stress, and a vehicle waiting exactly when you scheduled it. The convenience of a confirmed, professional pickup — especially for early morning flights — is worth far more than the short distance suggests.',
  },
  {
    q: 'How far is Queens from LaGuardia in miles?',
    a: 'Because LaGuardia is in East Elmhurst, northern Queens, it is only a few miles from most of the borough: Astoria and Jackson Heights are about 3 miles, Long Island City and Flushing about 5 miles, Forest Hills about 6 miles, and Jamaica — on the far side of Queens — about 9 miles. These are some of the shortest airport transfers anywhere in New York City.',
  },
  {
    q: 'Do you offer LGA-to-Queens pickups with meet and greet?',
    a: 'Yes. For arrivals, your chauffeur tracks your flight, meets you in the arrivals area of Terminal B or C with a name sign, helps with your luggage, and drives you straight home anywhere in Queens — with 60 minutes of complimentary wait time included after you land.',
  },
];


export default function QueensToLGABlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Queens to LaGuardia Black Car', url: `${getSiteUrl()}/services/routes/queens-to-lga-black-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Queens to LaGuardia Airport Black Car Service"
        description="Premium black car service from Queens to LaGuardia Airport (LGA). Flat rates, professional chauffeur, door-to-door from Astoria, Flushing, Jamaica, Jackson Heights and all Queens neighborhoods. TLC licensed, 24/7."
        areaServed="Queens, New York, NY"
        url={`${getSiteUrl()}/services/routes/queens-to-lga-black-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Route
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Queens to LaGuardia Airport Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            LaGuardia Airport is located right inside Queens — making this the most home-field
            airport transfer in New York City. Eagle Eye Chauffeur provides flat-rate, door-to-door
            black car service from every Queens neighborhood, with a professional TLC-licensed
            chauffeur and a confirmed price that never changes.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flight Tracking</div>
              <div className="text-brand-silver text-sm mt-1">Automatic delay adjustment</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flat Rate</div>
              <div className="text-brand-silver text-sm mt-1">Locked in at booking</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Every day, every hour</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">TLC Licensed</div>
              <div className="text-brand-silver text-sm mt-1">Professional &amp; insured</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Queens to LGA
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-8 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Route Details ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Queens to LGA — Neighborhoods, Distances &amp; Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            LaGuardia sits on the northern edge of Queens, in East Elmhurst — so much of the borough is
            practically next door. Astoria and Jackson Heights are only about 3 miles away, often 10–20 minutes to
            the terminal. Distances and times below are off-peak estimates; add time during morning rush and Friday
            afternoons.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Astoria → LGA', miles: '~3 miles', time: '10–20 min' },
              { from: 'Jackson Heights → LGA', miles: '~3 miles', time: '10–20 min' },
              { from: 'Long Island City → LGA', miles: '~5 miles', time: '15–25 min' },
              { from: 'Flushing → LGA', miles: '~5 miles', time: '15–25 min' },
              { from: 'Forest Hills → LGA', miles: '~6 miles', time: '20–30 min' },
              { from: 'Ridgewood → LGA', miles: '~7 miles', time: '20–35 min' },
              { from: 'Bayside → LGA', miles: '~8 miles', time: '20–30 min' },
              { from: 'Jamaica → LGA', miles: '~9 miles', time: '25–35 min' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
              >
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included in Every Queens to LGA Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Whether your ride is 10 minutes or 35, every Eagle Eye booking delivers the same
            professional standard from start to finish.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Real-time flight tracking',
                desc: 'We monitor your flight from the moment you book. If your departure shifts or your arrival delays, your chauffeur adjusts automatically — no calls, no rebooking required.',
              },
              {
                title: 'Meet &amp; greet at arrivals',
                desc: 'For LGA pickups, your chauffeur meets you in the arrivals area of Terminal B or Terminal C with a name sign, so you walk straight out to a confirmed face.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your chauffeur handles all bags — from your Queens front door to the terminal curb, or from the baggage carousel to the vehicle. No wrestling with suitcases alone.',
              },
              {
                title: 'Flat rate — no surge pricing',
                desc: 'Your fare is confirmed at booking and locked in permanently. Early morning, peak hours, bad weather — none of these change your price at Eagle Eye.',
              },
              {
                title: 'Luxury sedan or SUV',
                desc: 'Travel in a business-class sedan or full-size SUV — clean, spacious, and comfortable whether you are a solo traveler or a family with bags.',
              },
              {
                title: '24/7 availability',
                desc: 'LGA has many early and late flights. Eagle Eye operates round the clock — 4am pickups are just as confirmed and professional as a midday departure.',
              },
              {
                title: 'TLC licensed &amp; fully insured',
                desc: 'Every Eagle Eye chauffeur holds a New York TLC license and is fully insured — the required professional standard for luxury transportation in New York City.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 bg-brand-offwhite border border-brand-light">
                <span className="text-brand-black font-semibold mt-0.5">✓</span>
                <div>
                  <div
                    className="font-semibold text-brand-black mb-1"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <div className="text-sm text-brand-grey">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Queens Residents Choose Eagle Eye for LGA
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            LGA is close — and that closeness makes timing everything. Here is why a professional
            black car outperforms every alternative for Queens-to-LGA transfers.
          </p>
          <div className="bg-brand-white border border-brand-light p-8">
            <ul className="space-y-5 text-brand-grey">
              <li>
                <strong className="text-brand-black">LGA expertise — Terminal B and Terminal C covered.</strong>{' '}
                LaGuardia&apos;s new terminals have specific drop-off and pickup configurations that
                differ significantly from older airport layouts. Our chauffeurs know exactly where
                to pull in, which level to use, and how to avoid the notorious LGA traffic choke
                points during peak departure windows.
              </li>
              <li>
                <strong className="text-brand-black">No surge pricing — ever.</strong>{' '}
                Our flat rate is locked from the moment you book — your price during morning peak
                hours and afternoon departures is identical to the rate you confirmed at booking,
                weeks earlier.
              </li>
              <li>
                <strong className="text-brand-black">Short Queens trips demand precision timing.</strong>{' '}
                Some Queens neighborhoods are just 10–15 minutes from LGA — which means a driver
                who is five minutes late can cascade into a missed check-in window. Eagle Eye
                confirms your chauffeur the night before and monitors conditions to ensure on-time
                arrival, every time.
              </li>
              <li>
                <strong className="text-brand-black">Luggage assistance at the terminal curb.</strong>{' '}
                Your chauffeur pulls up at the departures curb, unloads your bags, and hands you
                off — no scrambling with suitcases while watching the clock. For arrivals, they
                meet you at baggage claim and carry out.
              </li>
              <li>
                <strong className="text-brand-black">Driver confirmed the night before.</strong>{' '}
                You receive your chauffeur&apos;s name, number, and vehicle details the evening
                before your pickup — not five minutes in advance. That confirmation means you can
                sleep the night before a 6am flight without any uncertainty.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Eagle Eye Benefits ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Eagle Eye for Queens to LGA
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            A professional black car service built for precision timing on short airport transfers.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — No Surge on Busy Departures', body: 'Your price is locked at booking and never changes — peak morning departures cost the same as midday.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
              { title: 'Door-to-Door from Your Queens Address', body: 'Your driver comes to your front door — not a nearby corner or main road.' },
              { title: 'Meet & Greet at Terminal B or C', body: 'For arrivals, your chauffeur meets you with a name sign in the LGA arrivals hall.' },
              { title: 'Driver Confirmed the Night Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details the evening before your flight.' },
              { title: 'LGA Terminal Expertise', body: 'Our drivers know exactly where to pull in and which level to use at Terminal B and Terminal C.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-4">
                <div className="flex items-start gap-3 mb-1">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Lock in your flat rate today.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Queens to LGA Black Car — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions about booking a Queens to LaGuardia Airport black car service.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Related Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Explore our full range of Queens and LaGuardia airport transportation.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/airport/lga"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">LGA Airport Service</div>
              <div className="text-sm text-brand-grey">
                All LaGuardia routes, terminals, and service details from any NYC origin.
              </div>
            </Link>
            <Link
              href="/services/areas/queens"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Queens Chauffeur Service</div>
              <div className="text-sm text-brand-grey">
                All Queens rides, hourly chauffeur, and neighborhood coverage.
              </div>
            </Link>
            <Link
              href="/services/routes/lga-to-manhattan-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">LGA to Manhattan</div>
              <div className="text-sm text-brand-grey">
                Arriving at LGA? Door-to-door service to any Manhattan address.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Queens to LaGuardia Black Car Service
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. No surge pricing. Professional TLC-licensed chauffeur from your Queens
            door to Terminal B or C — 24 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Reserve Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 px-10 border border-brand-silver text-brand-white font-medium hover:border-brand-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Prefer to call?{' '}
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="underline hover:text-brand-white transition-colors"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
            {' '}·{' '}
            <a
              href={`mailto:${CONTACT_EMAIL_BOOKINGS}`}
              className="underline hover:text-brand-white transition-colors"
            >
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
