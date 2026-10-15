import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan Black Car Service | Luxury Chauffeur NYC',
  description:
    'Luxury black car across Manhattan — flat rates, TLC-licensed chauffeurs, JFK/LGA/EWR airport transfers, hourly hire. No surge pricing. Book Eagle Eye 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/areas/manhattan` },
  openGraph: {
    ...ogDefaults,
    title: 'Manhattan Black Car Service | Eagle Eye',
    description: 'Luxury black car service across all Manhattan neighborhoods. Flat rates, TLC-licensed chauffeurs, airport transfers, hourly hire, and corporate.',
    url: `${getSiteUrl()}/services/areas/manhattan`,
    siteName: 'Eagle Eye Chauffeur',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'Do you serve all of Manhattan for black car service?',
    a: 'Yes. We cover every Manhattan neighborhood — Midtown, Times Square, Financial District, Wall Street, Upper East Side, Upper West Side, Harlem, Chelsea, SoHo, Tribeca, Hudson Yards, Hell\'s Kitchen, and more. There are no area surcharges or neighborhood restrictions. Your flat rate is confirmed at booking regardless of which part of Manhattan you\'re in.',
  },
  {
    q: 'How much is a Manhattan black car service to JFK?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. Get an instant quote on our booking page by entering your Manhattan pickup address and JFK as the destination. The price you see is the price you pay, whether it\'s rush hour, bad weather, or a holiday weekend.',
  },
  {
    q: 'How is black car service in Manhattan priced?',
    a: 'All Eagle Eye rates are flat and locked at booking — your price is confirmed before your trip and never changes for rush hour, bad weather, early mornings, or events. Get an instant quote on our booking page and the price you see is the price you pay.',
  },
  {
    q: 'Can I book hourly black car service in Manhattan?',
    a: 'Absolutely. Our hourly hire service is designed for back-to-back Manhattan meetings, full-day roadshows, or multi-stop errands across the city. Your professional chauffeur stays with you for the entire booking period. Contact us or visit our booking page for hourly options.',
  },
  {
    q: 'How do I book a black car for a Manhattan airport transfer?',
    a: 'Book online via our booking page or message us on WhatsApp. Provide your Manhattan pickup address, destination airport, flight number, and departure time. We track your flight and confirm your driver\'s details the evening before. Curbside pickup or lobby meet-and-greet — just tell us your preference.',
  },
  {
    q: 'Is there a minimum booking for Manhattan black car rides?',
    a: 'Point-to-point rides — such as apartment to airport or hotel to office — have no minimum booking requirement. Hourly hire typically starts at a 2-hour minimum. Contact us for full details and we\'ll match you to the right service.',
  },
];

const eaglEyeBenefits = [
  { title: 'Flat rate locked at booking', desc: 'Your price is confirmed before you book — no changes for traffic, weather, rush hour, or demand.' },
  { title: 'TLC-licensed professional chauffeur', desc: 'Every driver is background-checked, licensed, and trained to a luxury service standard — consistent on every ride.' },
  { title: 'Luxury sedan or SUV', desc: 'Clean, well-maintained vehicles in the class you booked — confirmed vehicle class every time.' },
  { title: 'Door-to-door pickup', desc: 'Your chauffeur meets you at your building entrance or hotel lobby — exact address, every time.' },
  { title: 'Hourly hire available', desc: 'Keep your driver for the full day — meetings, errands, events, all Manhattan stops without re-booking.' },
  { title: 'Corporate accounts', desc: 'Monthly invoicing, corporate accounts, and multi-vehicle coordination for roadshows and events.' },
];

export default function ManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
          { name: 'Manhattan', url: `${getSiteUrl()}/services/areas/manhattan` },
        ]}
      />
      <ServiceJsonLd
        name="Manhattan Black Car Service"
        description="Luxury black car and chauffeur service throughout Manhattan, New York City. Airport transfers to JFK, LGA, EWR and HPN. Hourly hire, corporate travel, and point-to-point rides with flat-rate pricing and TLC-licensed chauffeurs."
        areaServed="Manhattan, New York, NY"
        url={`${getSiteUrl()}/services/areas/manhattan`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            NYC&apos;s Premier Luxury Black Car
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Black Car Service in New York
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Professional chauffeur service across every Manhattan neighborhood — from Midtown boardrooms
            to Financial District offices, Upper East Side residences to Hudson Yards events. Flat-rate
            pricing, no surge, a luxury vehicle at your door around the clock.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">All Manhattan</div>
              <div className="text-brand-silver text-sm mt-1">Every neighborhood served</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">4 Airports</div>
              <div className="text-brand-silver text-sm mt-1">JFK · LGA · EWR · HPN</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">Pre-dawn to late night</div>
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
              Book Now — Flat Rate
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

      {/* ── Services Grid ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Black Car Service Manhattan
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Whether you need a one-way transfer, a full day with a chauffeur, or coordinated corporate
            travel, we have a service tailored to every Manhattan need.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Transfers</div>
              <div className="text-sm text-brand-grey">
                JFK, LGA, EWR, HPN — flat rate, flight tracking, door-to-door pickup.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Black Car</div>
              <div className="text-sm text-brand-grey">
                Your chauffeur stays with you — meetings, errands, events, all day.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Executive transport, roadshows, investor visits, monthly invoicing.
              </div>
            </Link>
            <div className="bg-brand-white border border-brand-light p-6">
              <div className="font-semibold text-brand-black text-lg mb-1">Point-to-Point</div>
              <div className="text-sm text-brand-grey">
                Any Manhattan address to any destination — flat rate, no minimum.
              </div>
            </div>
            <div className="bg-brand-white border border-brand-light p-6">
              <div className="font-semibold text-brand-black text-lg mb-1">Special Events</div>
              <div className="text-sm text-brand-grey">
                Galas, concerts, Broadway, weddings — arrive in a luxury vehicle.
              </div>
            </div>
            <div className="bg-brand-white border border-brand-light p-6">
              <div className="font-semibold text-brand-black text-lg mb-1">Roadshows</div>
              <div className="text-sm text-brand-grey">
                Multi-stop Manhattan roadshows with a dedicated chauffeur all day.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Every Manhattan Neighborhood, Covered
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            From the northernmost reaches of Harlem to the southern tip at Battery Park — we serve
            every corner of the island with the same flat rate and the same professional standard.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              'Midtown & Times Square',
              'Financial District',
              'Wall Street',
              'Upper East Side',
              'Upper West Side',
              'Chelsea',
              'Meatpacking District',
              'SoHo',
              'Tribeca',
              'Gramercy & Flatiron',
              'Central Park West',
              'Harlem',
              'East Harlem',
              'Battery Park',
              'Hell\'s Kitchen',
              'Hudson Yards',
              'Carnegie Hill',
              'Yorkville',
              'Lower Manhattan',
              'Inwood & Washington Heights',
            ].map((n) => (
              <div
                key={n}
                className="bg-brand-offwhite border border-brand-light px-4 py-3 text-sm text-brand-black"
              >
                <span className="text-brand-charcoal mr-2">✓</span>
                {n}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Airport Routes ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Airport Black Car Transfers from Manhattan
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Flat-rate airport transfers to all four New York area airports. Your rate is confirmed at
            booking — no surge pricing regardless of time of day or traffic conditions.
          </p>
          <div className="space-y-3">
            {[
              {
                label: 'Manhattan to JFK Black Car',
                time: '35–50 min',
                href: '/services/routes/manhattan-to-jfk-black-car-service',
              },
              {
                label: 'JFK to Manhattan Black Car',
                time: '35–50 min',
                href: '/services/routes/jfk-to-manhattan-black-car-service',
              },
              {
                label: 'Manhattan to LGA Black Car',
                time: '20–30 min',
                href: '/services/routes/manhattan-to-lga-black-car-service',
              },
              {
                label: 'LGA to Manhattan Black Car',
                time: '20–30 min',
                href: '/services/routes/lga-to-manhattan-black-car-service',
              },
              {
                label: 'Manhattan to EWR Black Car',
                time: '30–45 min',
                href: '/services/routes/manhattan-to-ewr-black-car-service',
              },
              {
                label: 'EWR to Manhattan Black Car',
                time: '30–45 min',
                href: '/services/routes/ewr-to-manhattan-black-car-service',
              },
              {
                label: 'Manhattan to HPN (Westchester)',
                time: '50–70 min',
                href: '/services/airport',
              },
            ].map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="flex justify-between items-center bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors"
              >
                <span className="font-medium text-brand-black">{r.label}</span>
                <span className="text-brand-grey text-sm">{r.time}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            All rates are flat and confirmed at booking.{' '}
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
            What&apos;s Included in Every Manhattan Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every ride comes with the same professional standard — no add-on fees, no surprises.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Door-to-door pickup',
                desc: 'Your chauffeur arrives at your building entrance, hotel lobby, or office — not a nearby corner.',
              },
              {
                title: 'Flat-rate pricing',
                desc: 'Your price is confirmed at booking. Rush hour, rain, and high demand do not change it.',
              },
              {
                title: 'Driver confirmed in advance',
                desc: 'You receive your chauffeur\'s name, photo, and vehicle details the evening before your trip.',
              },
              {
                title: 'Luxury vehicle',
                desc: 'Business-class sedan or SUV — always clean, always the class you booked.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your chauffeur handles bags at pickup and drop-off — especially valuable for airport runs.',
              },
              {
                title: 'Flight tracking',
                desc: 'For airport pickups, we monitor your flight in real time and adjust timing accordingly.',
              },
              {
                title: '24/7 availability',
                desc: 'Pre-dawn departures, late-night returns, weekend events — we operate around the clock.',
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
            Why Manhattan Clients Choose Eagle Eye
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Manhattan is one of the busiest, most demanding urban environments in the world.
            Here&apos;s why discerning riders switch to Eagle Eye and stay.
          </p>
          <div className="bg-brand-white border border-brand-light p-8">
            <ul className="space-y-5 text-brand-grey">
              <li>
                <strong className="text-brand-black">No surge pricing — ever.</strong>{' '}
                Your rate is flat and locked at booking. Rush hour, rain, concerts, and events do not
                change your price.
              </li>
              <li>
                <strong className="text-brand-black">True luxury vehicles.</strong>{' '}
                We operate clean, late-model sedans and SUVs. You know exactly what you&apos;re getting
                before the booking is confirmed.
              </li>
              <li>
                <strong className="text-brand-black">TLC-licensed professional chauffeurs.</strong>{' '}
                Every driver is background-checked, TLC-certified, and trained to a white-glove service
                standard. Punctuality and discretion are non-negotiable.
              </li>
              <li>
                <strong className="text-brand-black">Confirmed driver the night before.</strong>{' '}
                For airport transfers and scheduled rides, you receive your driver&apos;s details in advance
                — not a last-minute assignment five minutes before pickup.
              </li>
              <li>
                <strong className="text-brand-black">Hourly hire with a real chauffeur model.</strong>{' '}
                When your day involves multiple Manhattan stops, your driver stays with you throughout —
                no re-booking, no waiting between stops.
              </li>
              <li>
                <strong className="text-brand-black">Corporate and event coordination.</strong>{' '}
                Multi-vehicle bookings, monthly invoicing, roadshow logistics — we handle the complexity
                so your team doesn&apos;t have to.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Why Eagle Eye ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            What Eagle Eye Black Car Delivers
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every booking comes with a complete professional service — from the confirmed driver
            the night before to luggage assistance at your destination.
          </p>
          <ul className="space-y-3">
            {eaglEyeBenefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-3 bg-brand-offwhite border border-brand-light p-4">
                <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <span className="font-medium text-brand-black">{benefit.title} — </span>
                  <span className="text-brand-grey text-sm">{benefit.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-sm text-brand-grey mt-4">
            Ready to book?{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get a flat-rate quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Manhattan Black Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Answers to the most common questions from Manhattan riders.
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
            Explore our full range of luxury transportation services across New York City.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/airport"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Airport Service</div>
              <div className="text-sm text-brand-grey">
                All NYC airports — JFK, LGA, EWR, HPN. Flat rates, flight tracking, 24/7.
              </div>
            </Link>
            <Link
              href="/services/hourly"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Hourly Hire</div>
              <div className="text-sm text-brand-grey">
                Keep your chauffeur for meetings, errands, or a full-day Manhattan schedule.
              </div>
            </Link>
            <Link
              href="/services/corporate"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Corporate Travel</div>
              <div className="text-sm text-brand-grey">
                Executive transport, roadshows, multi-vehicle events, monthly billing.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Manhattan Black Car
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. TLC-licensed chauffeur. Luxury vehicle at your Manhattan door — 24 hours a day,
            seven days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block py-3 px-10 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
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
