import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan to Hamptons Car Service | Flat Rate',
  description:
    'Manhattan to Hamptons car service — flat-rate black car, professional chauffeur, door-to-door service. No summer surge pricing. Southampton, East.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/manhattan-to-hamptons-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'Manhattan to Hamptons Car Service | Eagle Eye',
    description: 'Flat-rate black car service from Manhattan to all Hamptons villages. No summer surge pricing — ever. Professional chauffeur, door-to-door, 24/7.',
    url: `${getSiteUrl()}/services/routes/manhattan-to-hamptons-car-service`,
  },
};

const faqs = [
  {
    q: 'How much is a car service from Manhattan to the Hamptons?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, and no summer premium. The Hamptons is a long-distance route so pricing reflects the full door-to-door journey. Get an instant quote on our booking page by entering your Manhattan address and your specific Hamptons destination. The price you see is the price you pay, whether it\'s a Tuesday in October or a Summer Friday in July.',
  },
  {
    q: 'How long does it take from Manhattan to the Hamptons?',
    a: 'Typical drive times range from 2.5 hours to 4.5 hours depending on your specific Hamptons destination, day of week, and traffic conditions. Westhampton Beach is the closest at 2–3 hours; Montauk is the farthest at 3.5–5 hours. Summer Fridays are the heaviest — we recommend departing early morning (5–7am) to avoid the worst congestion. Your chauffeur monitors conditions in real time and selects the optimal route.',
  },
  {
    q: 'Do you serve all Hamptons villages and destinations?',
    a: 'Yes. We serve every Hamptons destination — Southampton, East Hampton, Bridgehampton, Sag Harbor, Westhampton Beach, Montauk, Water Mill, Amagansett, Sagaponack, Quogue, Hampton Bays, and all surrounding areas. There are no area surcharges or geographic restrictions. Any address in the Hamptons is covered.',
  },
  {
    q: 'Can I book a one-way or round-trip car service to the Hamptons?',
    a: 'Both options are available. Many clients book round-trip for the weekend — you\'re guaranteed a confirmed return pickup without scrambling for a driver on Sunday evening. We can also arrange a return pickup from your Hamptons address at any time, including early morning Monday departures back to the city.',
  },
  {
    q: 'Is Hamptons car service available for early morning departures?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Early morning departures — 4am, 5am, 6am — are popular for beating the Summer Friday traffic surge. Your driver can be at your Manhattan door before sunrise. We confirm driver details the evening before every booking.',
  },
  {
    q: 'Do you offer Hamptons car service from other NYC boroughs?',
    a: 'Yes. We provide Hamptons car service from Brooklyn, Queens, the Bronx, and Staten Island in addition to Manhattan. Simply enter your borough pickup address when booking and we\'ll provide an accurate flat-rate quote for your full door-to-door journey to the Hamptons.',
  },
];


export default function ManhattanToHamptonsPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Manhattan to Hamptons Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-hamptons-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Manhattan to Hamptons Car Service"
        description="Luxury black car service from Manhattan to all Hamptons villages — flat rates, no summer surge pricing, professional TLC-licensed chauffeur, door-to-door. Southampton, East Hampton, Bridgehampton, Sag Harbor, Montauk, Westhampton Beach and beyond."
        areaServed="Hamptons, Southampton, East Hampton, Montauk, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-hamptons-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC to the East End · Long Island
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Manhattan to Hamptons Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            The Hamptons run deserves a driver and vehicle worthy of the destination. Eagle Eye
            Chauffeur provides flat-rate, door-to-door black car service from any Manhattan address
            to your Hamptons property — no Summer Friday surge pricing, no surprises, no stress.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">No Surge</div>
              <div className="text-brand-silver text-sm mt-1">Summer Fridays included</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">All Hamptons</div>
              <div className="text-brand-silver text-sm mt-1">Every village served</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Early AM departures available</div>
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
              Book Hamptons Car Service
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

      {/* ── Destinations Grid ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Hamptons Destinations &amp; Estimated Drive Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every Hamptons village is covered — from Westhampton Beach to Montauk. Drive times are
            typical off-peak estimates; Summer Fridays can add 30–90 minutes depending on conditions.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Manhattan → Westhampton Beach', time: '2–3 hrs' },
              { from: 'Manhattan → Quogue & Hampton Bays', time: '2–3 hrs' },
              { from: 'Manhattan → Southampton', time: '2.5–3.5 hrs' },
              { from: 'Manhattan → Bridgehampton', time: '2.5–3.5 hrs' },
              { from: 'Manhattan → Water Mill', time: '2.5–3.5 hrs' },
              { from: 'Manhattan → Sagaponack', time: '2.5–3.5 hrs' },
              { from: 'Manhattan → East Hampton', time: '3–4 hrs' },
              { from: 'Manhattan → Sag Harbor', time: '3–4 hrs' },
              { from: 'Manhattan → Amagansett', time: '3–4 hrs' },
              { from: 'Manhattan → Montauk', time: '3.5–5 hrs' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex justify-between items-center"
              >
                <span className="font-medium text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Times are off-peak estimates. Summer Fridays: allow extra time or depart early AM.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get a flat-rate quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What&apos;s Included in Every Hamptons Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            A 3-hour door-to-door journey deserves a complete, premium experience — not an app ride
            inflated by surge pricing. Here is what every Eagle Eye booking includes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'No summer surge pricing',
                desc: 'Our flat rate is identical whether it\'s a Tuesday in October or a Summer Friday in July — the same confirmed price regardless of demand or season.',
              },
              {
                title: 'True door-to-door service',
                desc: 'From your Manhattan lobby or building entrance directly to your Hamptons property. No parking garages, no train stations, no stopping.',
              },
              {
                title: 'Work in the car',
                desc: 'A private, quiet back seat with Wi-Fi-capable hotspot means your 3-hour Hamptons run is productive time, not lost time.',
              },
              {
                title: 'Professional, discreet chauffeur',
                desc: 'TLC-licensed, background-checked, and trained to a white-glove standard. Your driver knows Long Island routes and handles luggage.',
              },
              {
                title: 'Spacious luxury vehicle',
                desc: 'Business-class sedan or full-size SUV — comfortable for passengers and generous with luggage space for weekend bags and gear.',
              },
              {
                title: 'Round-trip available',
                desc: 'Pre-arrange your return pickup so Sunday evening is handled. No scrambling for a driver — your return is confirmed when you book.',
              },
              {
                title: '24/7 availability',
                desc: 'Beat the Summer Friday traffic with a 5am departure — or return Monday morning before the city wakes up. We operate around the clock.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 bg-brand-offwhite border border-brand-light">
                <span className="text-brand-black font-semibold mt-0.5">✓</span>
                <div>
                  <div className="font-semibold text-brand-black mb-1">{item.title}</div>
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
            Why Clients Choose Eagle Eye for the Hamptons Run
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Summer Fridays, holiday weekends, and peak season demand make the Hamptons run one of
            the most important trips to plan in advance. Here is why a professional chauffeur service
            is the right choice.
          </p>
          <div className="bg-brand-white border border-brand-light p-8">
            <ul className="space-y-5 text-brand-grey">
              <li>
                <strong className="text-brand-black">Flat rate on Summer Fridays.</strong>{' '}
                Our flat rate is locked at booking — the same in July as in November. Clients who
                experience the certainty of a confirmed price rarely go back to anything else.
              </li>
              <li>
                <strong className="text-brand-black">No last-minute cancellations.</strong>{' '}
                Eagle Eye assigns your chauffeur in advance and confirms the evening before your
                departure. No uncertainty on the morning of a long trip.
              </li>
              <li>
                <strong className="text-brand-black">Return trips guaranteed.</strong>{' '}
                Book round-trip and your Sunday return is confirmed — no scrambling for a driver,
                no last-minute stress. Your return is locked in when you book.
              </li>
              <li>
                <strong className="text-brand-black">Use the travel time productively.</strong>{' '}
                With a professional chauffeur navigating, you are free to work, take calls, or arrive
                relaxed rather than frazzled from three hours on the LIE.
              </li>
              <li>
                <strong className="text-brand-black">Luggage handled end to end.</strong>{' '}
                Weekend bags, golf clubs, beach gear — your chauffeur loads and unloads at both ends
                of the trip. No trunk-fitting gymnastics required.
              </li>
              <li>
                <strong className="text-brand-black">Flexible pickup from any NYC borough.</strong>{' '}
                Brooklyn, Queens, the Bronx, Staten Island — we pick up across the city, not just
                Manhattan, for the same professional Hamptons service.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What Sets Eagle Eye Apart on the Hamptons Run
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Hamptons route rewards advance planning. Eagle Eye delivers a professional,
            confirmed service from booking to arrival — every time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed at booking and never changes — the same rate on a Summer Friday in July as on a Tuesday in October.' },
              { title: 'Driver Confirmed in Advance', body: 'Your chauffeur is assigned and confirmed the evening before your departure — not matched at the last minute.' },
              { title: 'Route Expertise', body: 'Our drivers know the Long Island Expressway, Sunrise Highway, and Hamptons routes — and how to navigate traffic windows strategically.' },
              { title: 'Luggage Handled End to End', body: 'Weekend bags, golf clubs, beach gear — your chauffeur loads and unloads at both ends of the trip.' },
              { title: 'Productive Travel Time', body: 'Work, take calls, or arrive relaxed — your back seat is private and quiet for the full journey.' },
              { title: 'Round-Trip Available', body: 'Book your return when you book your outbound. Your Sunday pickup is confirmed at the same flat rate.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-offwhite border border-brand-light p-5">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                  <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                </div>
                <p className="text-brand-grey text-sm pl-6">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Lock in your Summer Friday rate now.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get a flat-rate quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── From Other Boroughs ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Hamptons Car Service from All NYC Boroughs
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Hamptons run is not just for Manhattan. We pick up across all five boroughs — enter
            your address when booking for an accurate flat-rate quote.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { borough: 'Brooklyn', desc: 'Park Slope, Williamsburg, DUMBO, Brooklyn Heights & beyond' },
              { borough: 'Queens', desc: 'Astoria, Forest Hills, Flushing, Long Island City & beyond' },
              { borough: 'The Bronx', desc: 'Riverdale, Fordham, Co-op City & all Bronx neighborhoods' },
              { borough: 'Staten Island', desc: 'St. George, Tottenville & all Staten Island communities' },
            ].map((b) => (
              <div key={b.borough} className="bg-brand-white border border-brand-light p-5">
                <div className="font-semibold text-brand-black mb-1">{b.borough}</div>
                <div className="text-sm text-brand-grey">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Manhattan to Hamptons — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Everything you need to know about booking a car service from Manhattan to the Hamptons.
          </p>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-brand-offwhite border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{faq.q}</h3>
                <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Related Services
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Explore our full range of Hamptons and Long Island luxury transportation.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/areas/hamptons"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hamptons Service</div>
              <div className="text-sm text-brand-grey">
                All Hamptons routes, villages, and service details from any NYC origin.
              </div>
            </Link>
            <Link
              href="/services/areas/long-island"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Long Island Service</div>
              <div className="text-sm text-brand-grey">
                Nassau &amp; Suffolk County rides, flat rate, professional chauffeur.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Chauffeur</div>
              <div className="text-sm text-brand-grey">
                Keep your driver for the day — ideal for multi-stop Hamptons visits.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Manhattan to Hamptons Car Service
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. No summer surge. Professional chauffeur — door-to-door from Manhattan
            to any Hamptons village, 24 hours a day.
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
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
            {' '}·{' '}
            <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_EMAIL_BOOKINGS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
