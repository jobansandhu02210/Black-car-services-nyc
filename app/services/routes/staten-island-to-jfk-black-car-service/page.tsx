import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Staten Island to JFK Car Service | Airport Transfer',
  description:
    'Staten Island to JFK Airport black car service — flat rates including Verrazano toll, professional chauffeur, door-to-door. St. George.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/staten-island-to-jfk-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/staten-island-to-jfk-black-car-service` },
};

const faqs = [
  {
    q: 'How much is a Staten Island to JFK car service?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, no hidden fees. Crucially, the Verrazano-Narrows Bridge toll is fully included in your flat rate. There are no surprise add-ons when you arrive at the toll plaza. Get an instant quote on our booking page by entering your Staten Island address and JFK as your destination.',
  },
  {
    q: 'How far is Staten Island from JFK, and how long does it take?',
    a: 'Staten Island to JFK is roughly 20–25 miles via the Verrazzano-Narrows Bridge and the Belt Parkway. Travel time ranges from 45 to 70 minutes depending on your pickup neighborhood and traffic conditions. St. George and Stapleton are closest to the Verrazano Bridge and typically reach JFK in 45–60 minutes. Tottenville in the south of the island adds 10–15 minutes. Your chauffeur monitors live traffic and takes the fastest available route via the Verrazano-Narrows Bridge and Belt Parkway.',
  },
  {
    q: 'Is the Verrazano-Narrows Bridge toll included in the rate?',
    a: 'Yes. The Verrazano-Narrows Bridge toll is included in your flat rate — no exceptions and no additions at the end of the ride. Eagle Eye Chauffeur includes all bridge and tunnel tolls in every confirmed booking. What you see at booking is what you pay.',
  },
  {
    q: 'Do you serve all Staten Island neighborhoods?',
    a: 'Yes. Eagle Eye Chauffeur picks up from all Staten Island neighborhoods — from St. George, Stapleton, and New Brighton in the north to Great Kills, Eltingville, Huguenot, and Tottenville in the south, and everything in between including New Dorp, Richmond, and Rossville. If you live on Staten Island, we come to your door.',
  },
  {
    q: 'Is early morning Staten Island to JFK service available?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Early morning departures from Staten Island — 3am, 4am, 5am — are fully covered. Your driver is confirmed the evening before your ride so you can sleep soundly knowing your car is booked and ready. Rates do not increase for early hours.',
  },
];


export default function StatenIslandToJFKPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Staten Island to JFK Black Car Service', url: `${getSiteUrl()}/services/routes/staten-island-to-jfk-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Staten Island to JFK Black Car Service"
        description="Premium black car service from Staten Island to JFK Airport. Flat rates including Verrazano toll, door-to-door from all SI neighborhoods. TLC licensed. 24/7 availability."
        areaServed="Staten Island, New York, NY"
        url={`${getSiteUrl()}/services/routes/staten-island-to-jfk-black-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Staten Island to JFK Airport Black Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Door-to-door black car service from every Staten Island neighborhood to JFK Airport.
            Flat rate with the Verrazano-Narrows Bridge toll included — no surprises at the end of your ride.
            TLC-licensed chauffeur. Available 24/7.
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
            Staten Island to JFK — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            All times are estimated and depend on traffic. Your chauffeur routes via the Verrazano-Narrows
            Bridge and Belt Parkway, monitoring live traffic for the fastest path to JFK.
            The Verrazano toll is included in every flat rate.
          </p>
          <div className="space-y-3">
            {[
              { from: 'St. George → JFK', time: '45–60 min', note: 'North Shore; closest to the Verrazano Bridge' },
              { from: 'Stapleton → JFK', time: '45–60 min', note: 'North Shore waterfront neighborhood' },
              { from: 'New Dorp → JFK', time: '50–65 min', note: 'Mid-island commercial corridor' },
              { from: 'Great Kills → JFK', time: '50–65 min', note: 'South Shore, near Great Kills Harbor' },
              { from: 'Eltingville → JFK', time: '50–65 min', note: 'South Shore, Amboy Rd area' },
              { from: 'Huguenot → JFK', time: '50–65 min', note: 'South Shore residential area' },
              { from: 'Richmond → JFK', time: '50–65 min', note: 'Central island, Richmond Ave corridor' },
              { from: 'Tottenville → JFK', time: '55–70 min', note: 'Southernmost tip of Staten Island' },
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
            Every Staten Island to JFK transfer with Eagle Eye Chauffeur includes the following — standard,
            not an upgrade. No hidden charges when you arrive at the toll.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'All Bridge & Tunnel Tolls Included',
                body: 'The Verrazano-Narrows Bridge toll — the biggest variable cost on this route — is fully included in your flat rate. What you see at booking is the total you pay.',
              },
              {
                title: 'Door-to-Door Pickup',
                body: 'Your chauffeur arrives at your Staten Island address. No walking to a corner, no pin-drop confusion — straight from your front door to JFK departures.',
              },
              {
                title: 'Real-Time Flight Tracking',
                body: 'We monitor your departure flight. If your flight changes or there is an issue, we adjust your pickup timing accordingly — no extra charge.',
              },
              {
                title: 'Driver Confirmed the Night Before',
                body: 'You receive your driver details the evening before your ride. Early morning departures are stress-free — you know your car is booked and confirmed.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your chauffeur loads and unloads all bags. No struggling with heavy suitcases up and down your driveway.',
              },
              {
                title: 'Luxury Vehicle',
                body: 'Business-class sedan or premium SUV, always clean and professionally maintained. Water available on request.',
              },
              {
                title: '24/7 Availability',
                body: 'Pre-dawn departures, red-eye travel days, holiday mornings — Eagle Eye operates every day of the year at the same flat rate.',
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
            Why Choose Eagle Eye for Staten Island to JFK
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Staten Island is the only NYC borough connected to the rest of the city primarily by bridge.
            That geography shapes everything about an airport run — and Eagle Eye is built for it.
          </p>
          <div className="space-y-7">
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Verrazano toll included — no surprise at the bridge</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                The Verrazano-Narrows Bridge toll is one of the highest in the New York metro area.
                Some services add tolls on top of their quoted fare, creating an unpleasant
                surprise at the end of the ride. Eagle Eye includes every toll in your confirmed flat rate.
                The number you see at booking is the number you pay — period.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Staten Island pickup expertise — every neighborhood, every street</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                From the North Shore ferry terminals in St. George to the quiet residential streets of Tottenville,
                Eagle Eye chauffeurs know Staten Island. No fumbling with addresses, no incorrect GPS routes,
                no calling you for directions. Your driver arrives at your exact address on time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Flight tracking for smooth departures</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                We monitor your outbound flight in real time. If your departure is impacted by gate changes,
                delays, or schedule shifts, we coordinate with you proactively. You focus on your trip;
                we handle the logistics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">24/7 for early Staten Island departures</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Many JFK flights depart at 6am, 7am, or earlier. That means a Staten Island pickup at 3am or 4am.
                Eagle Eye operates around the clock with the same flat rate, and your driver is confirmed
                the evening before so there are no last-minute cancellations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Your driver confirmed the night before</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Eagle Eye sends you your
                chauffeur details the evening before your ride. You know exactly who is coming, what vehicle
                to expect, and when they will arrive — no morning anxiety before an important flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye for Staten Island to JFK
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Staten Island to JFK route involves the Verrazano-Narrows Bridge toll — with Eagle Eye,
            that toll is fully included in your flat rate with nothing added at the end.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'All Tolls Included', body: 'The Verrazano-Narrows Bridge toll and all other tolls are fully included in your flat rate. No surprise additions.' },
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises at peak hours or early mornings.' },
              { title: 'TLC-Licensed Professional Chauffeur', body: 'Every driver holds a NYC TLC license and meets a professional standard on every trip.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
              { title: 'Door-to-Door from Your Staten Island Address', body: 'Your driver comes to your exact address — not a corner or main road.' },
              { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details the night before — zero uncertainty.' },
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
            Staten Island to JFK Black Car — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your Staten Island to JFK Airport transfer.
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
              href="/services/airport/jfk"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">JFK Airport Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                All JFK routes, terminals, and arrivals meet &amp; greet service.
              </div>
            </Link>
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
              href="/services/routes/brooklyn-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Brooklyn to JFK</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Flat-rate black car from all Brooklyn neighborhoods to JFK.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your Staten Island to JFK Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. Verrazano toll included. Professional TLC-licensed chauffeur at your door.
            Available 24/7 — every neighborhood, every hour.
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
