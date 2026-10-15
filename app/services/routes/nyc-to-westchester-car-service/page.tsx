import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'NYC to Westchester Car Service | Airport Transfers',
  description:
    'NYC to Westchester car service — flat-rate black car, professional chauffeur, door-to-door from Manhattan, Brooklyn, Queens or the Bronx. White.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/nyc-to-westchester-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/nyc-to-westchester-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from NYC to Westchester?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, no hidden fees. Pricing varies by your NYC pickup location and Westchester destination. Get an instant quote on our booking page by entering your addresses.',
  },
  {
    q: 'How long does NYC to Westchester take?',
    a: 'From Midtown Manhattan, expect 25–65 minutes depending on your Westchester destination and traffic. White Plains is typically 35–50 minutes; Yonkers 25–40 minutes; Greenwich/Stamford 45–65 minutes. Your chauffeur monitors live traffic throughout.',
  },
  {
    q: 'Which Westchester towns do you serve?',
    a: 'We serve all of Westchester County — White Plains, Scarsdale, Rye, Yonkers, New Rochelle, Bronxville, Larchmont, Mamaroneck, Port Chester, Tarrytown, Ossining, Peekskill, and across the Connecticut border to Greenwich and Stamford.',
  },
  {
    q: 'Do you offer corporate car service to Westchester offices?',
    a: 'Yes. Eagle Eye Chauffeur is a preferred corporate transportation provider for professionals commuting between NYC and Westchester business districts. Monthly accounts and invoicing are available. Contact us at info@eagleeyechauffeur.com to set up an account.',
  },
  {
    q: 'Can you pick up from JFK or LGA and go directly to Westchester?',
    a: 'Yes. Airport-to-Westchester is one of our most popular routes. We track your flight and pick you up at arrivals with a name sign, then drive directly to your Westchester address — no stops, no shared rides.',
  },
];


export default function NYCToWestchesterPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'NYC to Westchester Car Service', url: `${getSiteUrl()}/services/routes/nyc-to-westchester-car-service` },
      ]} />
      <ServiceJsonLd
        name="NYC to Westchester Car Service"
        description="Luxury black car service from New York City to all Westchester County destinations. Flat rates, professional chauffeur, door-to-door. Corporate accounts available. 24/7 availability."
        areaServed="Westchester County, NY"
        url={`${getSiteUrl()}/services/routes/nyc-to-westchester-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
            NYC · Manhattan · Brooklyn · Queens · Bronx → Westchester County
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold leading-tight mb-6">
            NYC to Westchester<br className="hidden lg:block" /> Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Eagle Eye Chauffeur connects all five NYC boroughs to every corner of Westchester County with
            flat-rate, door-to-door black car service. Corporate commutes, airport connections, special
            events — your professional chauffeur handles the drive so you don&apos;t have to.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 border-t border-brand-charcoal pt-8">
            <div>
              <div className="text-3xl font-serif font-semibold text-brand-white">25 min</div>
              <div className="text-brand-silver text-sm mt-1">Manhattan to Yonkers</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-brand-white">14+</div>
              <div className="text-brand-silver text-sm mt-1">Westchester destinations</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-brand-white">24 / 7</div>
              <div className="text-brand-silver text-sm mt-1">Service availability</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-brand-white">0</div>
              <div className="text-brand-silver text-sm mt-1">Surge pricing — ever</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-4 px-10 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors text-center"
            >
              Book NYC to Westchester
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-4 px-10 border border-brand-white text-brand-white font-semibold hover:bg-brand-charcoal transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-4">
            Or call us: <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">{CONTACT_PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>

      {/* ── ROUTES GRID ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Popular NYC to Westchester Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Times shown are from Midtown Manhattan in normal traffic conditions. Pickup from other boroughs
            will vary. All rates are flat and confirmed at booking.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Manhattan → Yonkers', time: '25–40 min', note: 'Closest Westchester city; I-87 or Henry Hudson Pkwy' },
              { from: 'Manhattan → Scarsdale', time: '35–45 min', note: 'Bronx River Pkwy; residential village' },
              { from: 'Manhattan → White Plains', time: '35–50 min', note: 'Westchester\'s CBD; Mamaroneck Ave corridor' },
              { from: 'Manhattan → New Rochelle', time: '30–45 min', note: 'I-95 Sound Shore; Iona University area' },
              { from: 'Manhattan → Bronxville', time: '30–45 min', note: 'Pondfield Rd village; Metro North hub' },
              { from: 'Manhattan → Larchmont / Mamaroneck', time: '35–50 min', note: 'Shore communities; Palmer Ave area' },
              { from: 'Manhattan → Rye / Port Chester', time: '40–55 min', note: 'Near CT border; Boston Post Rd' },
              { from: 'Manhattan → Tarrytown / Sleepy Hollow', time: '40–55 min', note: 'Hudson River towns; I-87 / Route 9' },
              { from: 'Manhattan → Ossining / Peekskill', time: '50–65 min', note: 'Upper Westchester; Taconic corridor' },
              { from: 'Manhattan → Greenwich, CT', time: '45–65 min', note: 'Cross-state; I-95 or Merritt Pkwy' },
              { from: 'Manhattan → Stamford, CT', time: '50–70 min', note: 'Major CT business hub; I-95 corridor' },
              { from: 'Brooklyn → White Plains', time: '55–75 min', note: 'Via BQE / I-87 or Cross Bronx' },
              { from: 'Queens → Scarsdale', time: '50–70 min', note: 'Via Whitestone Bridge or Throgs Neck' },
              { from: 'Bronx → Yonkers', time: '20–35 min', note: 'Closest borough-to-Westchester route' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-semibold text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm ml-3">{r.note}</span>
                </div>
                <span className="text-brand-grey text-sm font-medium whitespace-nowrap">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-5">
            All rates flat and confirmed at booking.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            What&apos;s Included in Every Booking
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Every NYC to Westchester transfer with Eagle Eye Chauffeur includes the following at no
            extra charge. This is the standard — not an upgrade.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Professional Licensed Chauffeur',
                body: 'TLC-licensed, background-checked, and trained in hospitality. A dedicated professional black car service — not a personal vehicle.',
              },
              {
                title: 'Flat-Rate Pricing',
                body: 'Your price is confirmed at booking and does not change due to traffic, time of day, events, or demand. What you see is what you pay.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your chauffeur loads and unloads all bags. Ideal for business travelers, families, and anyone returning from a trip with heavy luggage.',
              },
              {
                title: 'Luxury Vehicle',
                body: 'Business-class sedan or premium SUV, always clean and professionally maintained. Water available on request. Private — no shared rides.',
              },
              {
                title: 'Door-to-Door Service',
                body: 'We pick you up at your exact NYC address and drop you at your exact Westchester destination — not a nearby corner or garage.',
              },
              {
                title: 'Airport Connection Ready',
                body: 'Need to go from JFK or LGA to Westchester? We track your flight and pick you up at arrivals, then drive straight to your Westchester address.',
              },
              {
                title: '24 / 7 Availability',
                body: 'Early corporate departures, late-night returns, weekend events — we operate every day of the year with no rate increase for odd hours.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-brand-black font-bold text-xl mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <div className="font-semibold text-brand-black">{item.title}</div>
                  <div className="text-brand-grey text-sm mt-1 leading-relaxed">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE BLACK CAR ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Choose Black Car Service for NYC to Westchester
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            The NYC-to-Westchester commute is one of the most common professional routes in the metro area —
            and one of the most frequently done the wrong way. Here is why a black car service is the right
            choice.
          </p>
          <div className="space-y-7">
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Corporate commuters deserve a professional service</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                If you are commuting between a Manhattan office and Westchester headquarters two or three times
                a week, a professional black car is built for you. Eagle Eye&apos;s monthly corporate accounts
                give you a predictable, flat rate every time with a consistent, professional driver —
                confirmed at 8am and 6pm, every day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">The route crosses multiple highway systems</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Depending on origin and destination, NYC-to-Westchester can cross the Cross Bronx Expressway,
                the Major Deegan, the Saw Mill River Parkway, the Bronx River Parkway, or I-95. A professional
                chauffeur knows which combination is fastest at any given time and navigates without prompting.
                You arrive on time, every time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Privacy for calls and focused work</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                The 35–55-minute window between Manhattan and Westchester is premium productive time. In a
                private black car, you can run client calls, review decks, or simply think without the noise
                and unpredictability of a crowded train.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">By-the-hour option for multi-stop days</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Need to visit three Westchester offices in one day and return to the city? Our hourly hire option
                keeps the vehicle and chauffeur with you the entire time. No rebooking between stops — your
                driver waits and moves with you throughout the day.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Reliability for events, appointments, and flights</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Whether you are heading to a wedding in Tarrytown, a medical appointment in White Plains, or
                connecting through JFK, your Eagle Eye chauffeur is confirmed at booking. No last-minute
                cancellations, no uncertainty when you need to leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye for NYC to Westchester
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The NYC–Westchester corridor rewards a pre-booked professional service. Flat pricing,
            a confirmed driver, and Westchester route knowledge make every run reliable.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises at 8am or 6pm commute peaks.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver is licensed, background-checked, and knows the fastest Westchester routes in real time.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — confirmed before your trip, not assigned at the last minute.' },
              { title: 'Door-to-Door Service', body: 'Pickup at your exact NYC address, drop-off at your exact Westchester destination — not a nearby corner or garage.' },
              { title: 'Corporate Accounts Available', body: 'Monthly corporate accounts give regular commuters a predictable flat rate with a consistent driver every trip.' },
              { title: 'Driver Confirmed in Advance', body: 'You receive your chauffeur\'s name, vehicle, and contact details before your pickup day begins.' },
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
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            NYC to Westchester Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your NYC to Westchester black car service.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-6">
            More questions? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-black transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>{' '}
            or call{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-black transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>.
          </p>
        </div>
      </section>

      {/* ── RELATED ROUTES / SERVICES ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Related Routes &amp; Services
          </h2>
          <p className="text-brand-grey mb-8">
            Explore other Eagle Eye Chauffeur services you may need.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/areas/westchester"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Westchester County Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Local rides, hourly hire, and all Westchester destinations covered.
              </div>
            </Link>
            <Link
              href="/services/routes/jfk-to-westchester-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">JFK to Westchester</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Flight tracking, meet &amp; greet, 60-min free wait. Direct airport transfer.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Corporate Car Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Monthly accounts, invoicing, and priority scheduling for business clients.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your NYC to Westchester Car Service?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. Professional chauffeur. Door to door from any NYC borough to anywhere in
            Westchester County. Corporate accounts welcome. Available 24 / 7 every day of the year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-4 px-12 bg-brand-white text-brand-black font-semibold hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-4 px-12 border border-brand-white text-brand-white font-semibold hover:bg-brand-charcoal transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-6">
            Call or text:{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
