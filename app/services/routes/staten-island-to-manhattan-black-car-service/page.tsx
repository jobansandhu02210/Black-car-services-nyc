import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Staten Island to Manhattan Car Service | Eagle Eye NYC',
  description:
    'Staten Island to Manhattan black car service — flat rate including Verrazano toll, professional chauffeur, door-to-door to Midtown, Financial.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/staten-island-to-manhattan-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/staten-island-to-manhattan-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a Staten Island to Manhattan car service?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, no hidden fees. The Verrazano-Narrows Bridge toll is fully included in your flat rate. There is no additional charge when you cross the bridge. Get an instant quote on our booking page by entering your Staten Island address and your Manhattan destination.',
  },
  {
    q: 'How long does it take from Staten Island to Manhattan by car?',
    a: 'Travel time from Staten Island to Manhattan ranges from 35 to 65 minutes depending on your pickup neighborhood, your Manhattan destination, and traffic. St. George and Stapleton in the north of the island reach Midtown in approximately 35–50 minutes via the Verrazano and Brooklyn-Queens Expressway or Staten Island Expressway. Tottenville in the south adds 15–20 minutes. By comparison, the Staten Island Ferry plus subway takes 30–45 minutes from St. George alone — and only door-to-terminal in Whitehall, not to Midtown or the Financial District.',
  },
  {
    q: 'Is the Verrazano Bridge toll included in the rate?',
    a: 'Yes. The Verrazano-Narrows Bridge toll is included in your confirmed flat rate. Eagle Eye Chauffeur includes all bridge and tunnel tolls in every booking. The price you see when you reserve is the total price you pay — no additions at the toll plaza.',
  },
  {
    q: 'Is black car service better than the Staten Island Ferry for commuters?',
    a: 'It depends on your destination and priorities. The Staten Island Ferry is free but only travels between St. George and Whitehall Terminal in Lower Manhattan. If your destination is Midtown, the Upper East Side, or anywhere that requires a subway transfer, a black car is significantly faster and more direct — door-to-door with no transfers, no waiting on platforms, and no carrying luggage through turnstiles. For a business meeting, a corporate event, or a trip with baggage, black car service is the clear choice.',
  },
  {
    q: 'Can I book a Staten Island to Manhattan car service for a corporate event?',
    a: 'Yes. Eagle Eye Chauffeur is available for corporate events, business meetings, client pickups, and hourly-hire arrangements across Manhattan. For regular corporate commuters or executives who need reliable door-to-door service with professional presentation, we offer standing booking arrangements. Contact us directly by phone, email, or WhatsApp to discuss your corporate needs.',
  },
];


export default function StatenIslandToManhattanPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Staten Island to Manhattan Black Car Service', url: `${getSiteUrl()}/services/routes/staten-island-to-manhattan-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Staten Island to Manhattan Black Car Service"
        description="Premium black car service from Staten Island to Manhattan. Flat rates including Verrazano toll, door-to-door to Midtown, Financial District, Wall Street. TLC licensed. 24/7 availability."
        areaServed="Staten Island, New York, NY"
        url={`${getSiteUrl()}/services/routes/staten-island-to-manhattan-black-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Staten Island to Manhattan Black Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Direct black car service from any Staten Island neighborhood to Midtown, Financial District,
            Wall Street, and every corner of Manhattan. Flat rate with the Verrazano-Narrows Bridge toll
            included. Skip the ferry and subway — door-to-door service all the way.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['Flight Tracking', 'Flat Rate', '24/7', 'TLC Licensed'].map((s) => (
              <div key={s} className="border border-brand-charcoal p-3 text-center text-sm font-medium">{s}</div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Book Now
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-medium"
            >
              WhatsApp Booking
            </a>
          </div>
          <p className="text-brand-silver text-sm mt-5">
            Or call us:{' '}
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-white transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>

      {/* ── ROUTES TABLE ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Staten Island to Manhattan — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            All times are estimates and vary with traffic. Your chauffeur takes the fastest live-traffic
            route — typically via the Verrazano-Narrows Bridge and the BQE or Staten Island Expressway.
            All tolls are included in your confirmed flat rate.
          </p>
          <div className="space-y-3">
            {[
              { from: 'St. George → Midtown', time: '35–50 min', note: 'North Shore; most direct path to Manhattan' },
              { from: 'Stapleton → Lower Manhattan', time: '35–50 min', note: 'North Shore; close to Verrazano' },
              { from: 'New Dorp → Midtown', time: '45–60 min', note: 'Mid-island, Richmond Ave corridor' },
              { from: 'Great Kills → Financial District', time: '45–60 min', note: 'South Shore to Wall Street area' },
              { from: 'Eltingville → Midtown', time: '45–60 min', note: 'South Shore, Amboy Rd area' },
              { from: 'Richmond → Midtown', time: '50–65 min', note: 'Central island, Richmond Ave' },
              { from: 'Huguenot → Wall Street', time: '50–65 min', note: 'South Shore to Financial District' },
              { from: 'Tottenville → Midtown', time: '45–65 min', note: 'Southernmost tip; via SI Expressway' },
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
            All rates flat and confirmed at booking. Verrazano toll included.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            What&apos;s Included in Every Booking
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Every Staten Island to Manhattan transfer with Eagle Eye Chauffeur includes the following
            as standard. No hidden charges. No toll add-ons. No surprises.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'All Bridge & Tunnel Tolls Included',
                body: 'The Verrazano-Narrows Bridge toll is included in your flat rate. No additions when you cross — what you see at booking is the total you pay.',
              },
              {
                title: 'Door-to-Door Service',
                body: 'Your chauffeur comes to your Staten Island door and delivers you to your Manhattan destination — no transfers, no intermediate stops, no subway stairs with luggage.',
              },
              {
                title: 'Flat-Rate Pricing',
                body: 'Your price is confirmed at booking and does not change due to traffic, rush-hour demand, or surge events. The Staten Island Expressway gridlock does not cost you extra.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your chauffeur handles all bags — loaded at your door and unloaded at your Manhattan destination. Ideal for business travel, hotel check-ins, and airport connections.',
              },
              {
                title: 'Professional Chauffeur',
                body: 'TLC-licensed, professionally presented driver with knowledge of Staten Island neighborhoods and the fastest routes across the Verrazano to your Manhattan destination.',
              },
              {
                title: 'Luxury Vehicle',
                body: 'Business-class sedan or premium SUV, always clean and maintained. Private ride — no shared passengers, no unplanned stops.',
              },
              {
                title: '24/7 Availability',
                body: 'Early morning business meetings, late-night returns from Manhattan events — Eagle Eye operates every hour of every day at the same flat rate.',
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

      {/* ── WHY CHOOSE ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Choose Black Car Service for Staten Island to Manhattan
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            For commuters, business travelers, and anyone needing a reliable, direct connection from
            Staten Island to Manhattan, black car service offers advantages the ferry simply cannot match.
          </p>
          <div className="space-y-7">
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Door-to-door — no ferry, no subway</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                The Staten Island Ferry terminates at Whitehall Terminal in Lower Manhattan. If your
                destination is Midtown, the Upper West Side, or any other neighborhood, you still need
                the subway — with your bags, in a crowd, on a schedule. Eagle Eye takes you directly
                from your front door to your exact Manhattan address. One vehicle. Zero transfers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Verrazano toll included — no surprise charges</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                The Verrazano-Narrows Bridge carries one of the highest E-ZPass toll rates in the
                New York metro. Eagle Eye includes every toll in your confirmed flat rate at the time of
                booking. No adjustments, no additions, no end-of-ride sticker shock.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Flat rate — no surge pricing during rush hours</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Rush-hour traffic between Staten Island and Manhattan is notorious — the Staten Island
                Expressway and the Gowanus corridor can be severely congested during peak times.
                Your Eagle Eye rate is fixed the moment you book and does not respond to demand signals
                or traffic conditions. Morning commute or Friday afternoon — same price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Luggage assistance for commuters and travelers</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Whether you are heading to a hotel in Midtown with full suitcases or commuting to a
                Manhattan office with a laptop bag and dry cleaning, your chauffeur handles the loading
                and unloading. No heaving bags through ferry terminals or down subway steps.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Professional presentation for business meetings</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Arriving at a client meeting or a Wall Street appointment in a clean luxury vehicle
                with a professional chauffeur makes a different impression than stepping off a
                crowded ferry. Eagle Eye provides the standard of service that matches the importance
                of your Manhattan engagements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye for Staten Island to Manhattan
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Professional black car service on the Staten Island–Manhattan corridor means all tolls
            included, flat rate locked at booking, and a confirmed driver before your day begins.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'All Tolls Included', body: 'The Verrazano-Narrows Bridge toll and all other tolls are included in your flat rate. No additions at the end of the ride.' },
              { title: 'Flat Rate — No Surge During Rush Hour', body: 'Your price is locked at booking and never changes — even during morning and evening commute hours.' },
              { title: 'Door-to-Door Service', body: 'Your driver picks you up at your exact Staten Island address and delivers you to your exact Manhattan destination.' },
              { title: 'Direct to Any Manhattan Destination', body: 'No transfers — your chauffeur drives you door to door without stops or detours.' },
              { title: 'Luggage Assistance', body: 'Your chauffeur loads and unloads all bags — no stairs, no platforms, no self-service.' },
              { title: 'Professional Presentation', body: 'Arrive at business meetings in a luxury vehicle with a formally dressed, TLC-licensed chauffeur.' },
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Staten Island to Manhattan Black Car — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your Staten Island to Manhattan car service.
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

      {/* ── RELATED LINKS ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Related Routes &amp; Services
          </h2>
          <p className="text-brand-grey mb-8">
            Explore other Eagle Eye Chauffeur services you may need.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/areas/staten-island"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Staten Island Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                All Staten Island rides, corporate transfers, and hourly hire.
              </div>
            </Link>
            <Link
              href="/services/routes/staten-island-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Staten Island to JFK</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Flat-rate airport transfer with Verrazano toll included.
              </div>
            </Link>
            <Link
              href="/services/areas/manhattan"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Manhattan Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Corporate rides, hotel transfers, and hourly hire across Manhattan.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your Staten Island to Manhattan Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. Verrazano toll included. No surge. Door-to-door to any Manhattan destination.
            Professional TLC-licensed chauffeur. Available 24/7.
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
