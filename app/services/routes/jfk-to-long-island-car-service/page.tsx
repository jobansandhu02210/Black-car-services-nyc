import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK to Long Island Car Service | Nassau & Suffolk',
  description:
    'JFK to Long Island car service — flat rates to Nassau County, Suffolk County & the Hamptons. Garden City, Hempstead, Great Neck, Huntington & more.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-long-island-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/jfk-to-long-island-car-service` },
};

const faqs = [
  {
    q: 'How much is a JFK to Long Island car service?',
    a: 'All rates are flat and vary by destination — confirmed at booking with no surge pricing and no hidden fees. Nassau County destinations are generally shorter transfers than eastern Suffolk County or the Hamptons. All tolls are included in your flat rate. Get an instant quote on our booking page by entering your JFK terminal and your Long Island address.',
  },
  {
    q: 'Do you go to Nassau County from JFK?',
    a: 'Yes. Eagle Eye Chauffeur provides JFK to Nassau County car service throughout the county — Garden City, Great Neck, Hempstead, Valley Stream, Lynbrook, Rockville Centre, Mineola, Westbury, Hicksville, Freeport, Long Beach, and all surrounding communities. Nassau County is the closest part of Long Island to JFK and can be reached in as little as 15–25 minutes from the airport.',
  },
  {
    q: 'Do you go to Suffolk County from JFK?',
    a: 'Yes. Eagle Eye Chauffeur serves all of Suffolk County from JFK — from the western towns of Huntington, Commack, and Smithtown to the East End including Southampton, East Hampton, Bridgehampton, and Montauk. Suffolk County routes are longer transfers, and we cover the full length of the island with flat rates confirmed at booking.',
  },
  {
    q: 'Is there service from JFK to the Hamptons?',
    a: 'Yes. Eagle Eye Chauffeur provides JFK to Hamptons car service year-round, including during summer peak season. Our rates are flat and confirmed at the time of booking — the same price in July as in January. We serve Southampton, East Hampton, Bridgehampton, Water Mill, Sag Harbor, Amagansett, and Montauk.',
  },
  {
    q: 'How long does JFK to Nassau County take?',
    a: 'JFK to Nassau County travel time depends on your specific destination. Valley Stream, which borders Queens, takes just 15–25 minutes. Garden City and Hempstead take 25–40 minutes. Great Neck on the North Shore takes 35–50 minutes. Your chauffeur monitors live traffic and takes the most efficient route — typically via the Belt Parkway or the Southern State Parkway depending on your destination.',
  },
];


export default function JFKToLongIslandPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Long Island Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-long-island-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK Airport to Long Island Car Service"
        description="Premium black car service from JFK Airport to all Long Island destinations — Nassau County, Suffolk County, and the Hamptons. Flat rates, flight tracking, meet & greet, 60-min free wait. TLC licensed. 24/7."
        areaServed="Long Island, Nassau County, Suffolk County, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-long-island-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            JFK Airport to Long Island Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from JFK Airport to Nassau County, Suffolk County, and the Hamptons.
            Meet &amp; greet at arrivals, 60-minute complimentary wait, real-time flight tracking.
            No summer surge. No shared shuttles. Door-to-door across all of Long Island.
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
            JFK to Long Island — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-4 max-w-2xl">
            Long Island is divided into two counties: Nassau County to the west and Suffolk County to the east.
            The Hamptons are located in eastern Suffolk County. All times are estimates and vary with traffic.
            Your chauffeur takes the fastest live-traffic route.
          </p>
          <div className="flex gap-6 mb-8 text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-black inline-block"></span>
              <span className="text-brand-grey font-medium">Nassau County</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-charcoal inline-block"></span>
              <span className="text-brand-grey font-medium">Suffolk County</span>
            </span>
          </div>
          <div className="space-y-3">
            {[
              { from: 'JFK → Valley Stream', time: '15–25 min', note: 'Nassau County — borders Queens', county: 'nassau' },
              { from: 'JFK → Hempstead', time: '25–35 min', note: 'Nassau County — Southern State corridor', county: 'nassau' },
              { from: 'JFK → Garden City', time: '25–40 min', note: 'Nassau County — corporate and retail hub', county: 'nassau' },
              { from: 'JFK → Great Neck', time: '35–50 min', note: 'Nassau County — North Shore, Long Island Sound', county: 'nassau' },
              { from: 'JFK → Huntington', time: '50–65 min', note: 'Suffolk County — North Shore village', county: 'suffolk' },
              { from: 'JFK → Commack', time: '50–65 min', note: 'Suffolk County — LIE and Sunken Meadow corridor', county: 'suffolk' },
              { from: 'JFK → Smithtown', time: '55–70 min', note: 'Suffolk County — Route 25 area', county: 'suffolk' },
              { from: 'JFK → Northport', time: '55–70 min', note: 'Suffolk County — North Shore harbor town', county: 'suffolk' },
              { from: 'JFK → Southampton', time: '80–100 min', note: 'Suffolk County — Hamptons South Fork', county: 'suffolk' },
              { from: 'JFK → Montauk', time: '120–150 min', note: 'Suffolk County — eastern tip of Long Island', county: 'suffolk' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${r.county === 'nassau' ? 'bg-brand-black' : 'bg-brand-charcoal'}`}></span>
                  <div>
                    <span className="font-semibold text-brand-black">{r.from}</span>
                    <span className="text-brand-grey text-sm ml-3">{r.note}</span>
                  </div>
                </div>
                <span className="text-brand-grey text-sm font-medium whitespace-nowrap pl-6 sm:pl-0">{r.time}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-5">
            All rates flat and confirmed at booking. All tolls included.{' '}
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
            Every JFK to Long Island transfer with Eagle Eye Chauffeur includes the following as standard —
            not an add-on, not an upgrade. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Real-Time Flight Tracking',
                body: 'We monitor your JFK arrival live. If your flight is delayed, diverted, or arrives early, your driver adjusts automatically — no calls needed, no rebooking, no extra charge.',
              },
              {
                title: 'Meet & Greet at Arrivals',
                body: 'Your chauffeur waits inside the terminal at baggage claim with a name sign. No searching for a curbside pickup lot after a long flight. Walk out of arrivals and straight to your vehicle.',
              },
              {
                title: '60-Minute Complimentary Wait',
                body: 'You receive 60 minutes of free wait time after your flight lands. Take your time clearing customs, collecting luggage, and gathering your group — your driver is not charging by the minute.',
              },
              {
                title: 'All Tolls Included',
                body: 'Every toll from JFK to your Long Island destination — Belt Parkway, Southern State Parkway, Midtown Tunnel — is included in your flat rate. No additions at the end of the ride.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your chauffeur loads and unloads all bags at JFK and at your Long Island destination. No lifting, no dragging heavy cases across parking lots.',
              },
              {
                title: 'Luxury Vehicle',
                body: 'Business-class sedan or premium SUV — always clean, professionally maintained, and fully private. No shared passengers, no intermediate stops.',
              },
              {
                title: 'Driver Confirmed Night Before',
                body: 'You receive your driver details the evening before arrival. Late flights, red-eye arrivals, early-morning connections — your Long Island transfer is locked in and confirmed.',
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
            Why Choose Eagle Eye for JFK to Long Island
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Long Island is 118 miles long and encompasses two counties, dozens of distinct communities,
            and the Hamptons. Eagle Eye Chauffeur covers it all — from Valley Stream to Montauk.
          </p>
          <div className="space-y-7">
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Long Island coverage from Nassau to Suffolk</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Nassau County and Suffolk County together span the full length of Long Island. Many car services
                cap out at Nassau County destinations. Eagle Eye covers the entire island — from the Nassau
                County communities bordering Queens (Valley Stream, Hempstead, Garden City) all the way east
                to Huntington, Smithtown, and the South Fork. One service, all of Long Island.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Hamptons routes available — no summer surge pricing</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Summer Friday afternoons and holiday weekends to the Hamptons are peak travel periods.
                Demand-based pricing can make costs
                unpredictable and extreme. Eagle Eye rates are flat year-round — the same rate in August
                as in February. Your JFK to Southampton or Montauk rate is locked at booking, no matter
                the season or the level of traffic on the Expressway.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Flight tracking for JFK arrivals</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                JFK is one of the busiest international airports in the United States, and delays and gate
                changes are common. Eagle Eye monitors your arriving flight in real time. Whether your
                connection lands early or your international flight is delayed by two hours, your chauffeur
                adjusts their timing automatically. You will receive a WhatsApp message with your driver
                details before you land.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">All tolls included in flat rate — no surprises</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Routes from JFK to Long Island pass through tolled corridors including the Belt Parkway
                and, for some destinations, the Midtown Tunnel or the Queens-Midtown crossings.
                All of these are included in your Eagle Eye flat rate. The number you confirm at booking
                is the number on your receipt — no adjustments after the fact.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Driver confirmed night before — no morning uncertainty</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Whether you land at 11pm after an international flight or at 6am on a red-eye, you will
                know your driver details the evening before your arrival. Name, vehicle, and contact — confirmed.
                No scrambling for a car at JFK, no waiting with luggage after a long flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye for JFK to Long Island
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Long Island routes — especially summer Hamptons runs — require flat rates, route knowledge,
            and a driver who knows the Island well. Eagle Eye delivers all three.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — flat rates even during peak summer Hamptons season.' },
              { title: 'All Tolls Included', body: 'All highway and bridge tolls on the route to your Long Island destination are included in your flat rate.' },
              { title: 'Meet & Greet at JFK Arrivals', body: 'Your chauffeur waits with a name sign at the arrivals hall — no walking with luggage.' },
              { title: 'Long Island Route Expertise', body: 'Our chauffeurs know Long Island roads and your neighborhood — not just what a map says.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your JFK arrival and adjust your driver automatically for any delay — at no extra charge.' },
              { title: 'Driver Confirmed the Night Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details the evening before your flight lands.' },
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
            JFK to Long Island Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your JFK to Long Island airport transfer.
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
              href="/services/areas/long-island"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Long Island Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                All Long Island rides, corporate transfers, and hourly hire.
              </div>
            </Link>
            <Link
              href="/services/areas/nassau-county"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Nassau County Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Garden City, Great Neck, Hempstead, Valley Stream, and all Nassau.
              </div>
            </Link>
            <Link
              href="/services/areas/suffolk-county"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Suffolk County Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Huntington, Smithtown, the Hamptons, Montauk, and all of eastern LI.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your JFK to Long Island Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. No summer surge. Flight tracked. Meet &amp; greet at arrivals.
            60-minute free wait. Nassau to Montauk — Eagle Eye covers all of Long Island.
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
