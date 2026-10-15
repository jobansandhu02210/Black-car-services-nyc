import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Newark Airport to Long Island Car Service',
  description:
    'Newark Airport (EWR) to Long Island — flat rate, all tolls included (Lincoln Tunnel), flight tracking, meet & greet. Nassau County, Suffolk County.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/ewr-to-long-island-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/ewr-to-long-island-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from EWR to Long Island?',
    a: 'All rates are flat and confirmed at booking — no surge pricing and no hidden fees. The Lincoln Tunnel and all highway and bridge tolls are included in your flat rate. Nassau County destinations are generally shorter transfers than eastern Suffolk County or the Hamptons. Get an instant quote on our booking page by entering your EWR terminal and your Long Island address.',
  },
  {
    q: 'Are Lincoln Tunnel tolls included in the EWR to Long Island rate?',
    a: 'Yes. The Lincoln Tunnel toll and all other highway and bridge costs along the EWR to Long Island route are fully included in your Eagle Eye flat rate. No toll charges are added after the trip, and no adjustments are made to the price you confirm at booking. The number you see is the number on your receipt.',
  },
  {
    q: 'Is it better to fly into EWR or JFK for Long Island?',
    a: 'It depends on your Long Island destination and the price difference between flights. JFK is closer to Nassau County and western Suffolk County. EWR can be a good choice if the flight price is meaningfully lower — Eagle Eye Chauffeur connects you door-to-door from EWR to any Long Island address, all tolls included, making the comparison straightforward. Both airports work well with professional car service.',
  },
  {
    q: 'Do you serve the Hamptons from Newark Airport?',
    a: 'Yes. Eagle Eye Chauffeur provides EWR to Hamptons car service year-round, with no summer surge pricing. The Hamptons — Southampton, East Hampton, Bridgehampton, Sag Harbor, and Montauk — are popular destinations from Newark for travelers who find better flight options there. Your flat rate is the same in July as in January.',
  },
  {
    q: 'How long does EWR to Nassau County take?',
    a: 'EWR to Nassau County travel time depends on your specific destination. Valley Stream and Hempstead, which are in western Nassau closest to Queens, take approximately 45–60 minutes from EWR under normal traffic. Garden City is similar. Great Neck on the North Shore takes 55–70 minutes. All times include the Lincoln Tunnel crossing and vary with traffic on the I-495 Long Island Expressway or other routes.',
  },
];


export default function EWRToLongIslandPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'EWR to Long Island Car Service', url: `${getSiteUrl()}/services/routes/ewr-to-long-island-car-service` },
      ]} />
      <ServiceJsonLd
        name="Newark Airport to Long Island Car Service"
        description="Flat-rate black car service from Newark Airport (EWR) to all Long Island destinations — Nassau County, Suffolk County, and the Hamptons. All tolls included, flight tracking, meet & greet, TLC licensed, 24/7."
        areaServed="Long Island, Nassau County, Suffolk County, NY"
        url={`${getSiteUrl()}/services/routes/ewr-to-long-island-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Route</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Newark Airport to Long Island Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from Newark Airport (EWR) to Nassau County, Suffolk County,
            and the Hamptons. All tolls included — Lincoln Tunnel, highways, and bridges. Real-time
            flight tracking, meet &amp; greet at Terminals A, B &amp; C. No summer surge. TLC licensed, 24/7.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['All Tolls Included', 'Flight Tracking', '24/7', 'TLC Licensed'].map((s) => (
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
            EWR to Long Island — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Travel times are estimates from Newark Airport under normal traffic conditions.
            Routes pass through the Lincoln Tunnel and typically continue via the I-495
            Long Island Expressway or the Belt Parkway depending on your destination.
            Your chauffeur monitors live traffic and takes the fastest available route.
          </p>
          <div className="space-y-3">
            {[
              { from: 'EWR → Garden City', time: '45–60 min' },
              { from: 'EWR → Great Neck', time: '55–70 min' },
              { from: 'EWR → Hempstead', time: '45–60 min' },
              { from: 'EWR → Valley Stream', time: '50–65 min' },
              { from: 'EWR → Huntington', time: '65–85 min' },
              { from: 'EWR → Smithtown', time: '70–90 min' },
              { from: 'EWR → Commack', time: '65–80 min' },
              { from: 'EWR → Northport', time: '70–85 min' },
              { from: 'EWR → Southampton', time: '110–130 min' },
              { from: 'EWR → Montauk', time: '150–180 min' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <span className="font-semibold text-brand-black">{r.from}</span>
                <span className="text-brand-grey text-sm font-medium whitespace-nowrap">{r.time}</span>
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
            Every EWR to Long Island booking with Eagle Eye Chauffeur includes the following as
            standard — not an add-on, not an upgrade. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Real-Time Flight Tracking',
                body: 'We monitor your EWR arrival live. If your flight is delayed, diverted, or arrives early, your driver adjusts automatically — no calls needed, no rebooking, and no extra charge for waiting on a delayed flight.',
              },
              {
                title: 'Meet & Greet at Terminals A, B & C',
                body: 'Your chauffeur meets you inside at the arrivals hall with a name sign. Terminal A, B, or C — just include your terminal in your booking and your driver will be at the correct arrivals area.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your chauffeur loads and unloads all bags at EWR and at your Long Island destination. No lifting heavy luggage, no dragging cases through a parking structure after a long flight.',
              },
              {
                title: 'All Tolls Included (Lincoln Tunnel & Bridges)',
                body: 'The Lincoln Tunnel, the New York State Thruway, and all highway and bridge tolls along your EWR to Long Island route are included in your flat rate. No additions after the trip.',
              },
              {
                title: 'Flat Rate Confirmed at Booking',
                body: 'Your rate is locked the moment you book. Summer Friday rates to the Hamptons are the same as winter Tuesday rates. No peak pricing, no dynamic re-pricing, no adjustments after the journey.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Business-class sedan or premium SUV — always clean, professionally maintained, and fully private. Select your vehicle class at booking based on group size and luggage volume.',
              },
              {
                title: '24/7 Availability',
                body: 'EWR to Long Island service is available around the clock. Early morning arrivals, late-night international flights, and red-eye connections are all covered. Driver confirmed the night before.',
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
            Why Choose Eagle Eye for EWR to Long Island
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Newark Airport is a major international hub that offers competitive flight options for
            Long Island travelers. Eagle Eye Chauffeur connects EWR to every Long Island destination
            with professional, flat-rate service — from Garden City to Montauk.
          </p>
          <div className="space-y-7">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">All tolls included</strong> — Lincoln Tunnel and all highway and bridge costs are in your flat rate, no surprises at the end of the journey. The price you confirm at booking is the price you pay, every time.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">EWR as the smart choice for Long Island</strong> — sometimes cheaper flights land at Newark, and travelers should not have to choose between a better fare and a comfortable transfer home. Eagle Eye connects you door-to-door from EWR to any Long Island address, making Newark a genuinely competitive option.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Flight tracking for EWR arrivals</strong> — your driver adjusts to delays automatically. Newark handles significant international traffic with associated arrival variability. Eagle Eye monitors your flight and ensures your driver is at the terminal when you actually land, not when your original schedule said you would.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">No summer surge for Hamptons runs</strong> — flat rate is the same whether it&apos;s a Tuesday in February or a summer Friday in August. Eagle Eye rates are locked at booking, year-round, regardless of demand.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Nassau to Suffolk — full Long Island coverage</strong> — from Garden City to Montauk, all covered. Many car services limit Long Island service to Nassau County destinations. Eagle Eye covers the full length of the island, including eastern Suffolk County and the Hamptons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye for EWR to Long Island
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Newark to Long Island is a longer route — flat pricing, toll transparency, and route
            knowledge matter more here than on any short-haul transfer.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — All Tolls Included', body: 'The Lincoln Tunnel and all highway costs are included in your flat rate. What you see at booking is your final price.' },
              { title: 'Long Island Route Expertise', body: 'Our chauffeurs know Long Island roads and neighborhoods — not just what a navigation app suggests.' },
              { title: 'All Tolls Included', body: 'Lincoln Tunnel and all highway and bridge costs are fully included — nothing billed separately.' },
              { title: 'Luggage Assistance', body: 'Your chauffeur loads and unloads all bags at EWR and at your Long Island destination.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your EWR arrival and adjust your driver automatically for any delay — at no extra charge.' },
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
            EWR to Long Island Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your Newark Airport to Long Island black car transfer.
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
              href="/services/airport/ewr"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Newark Airport Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                EWR arrivals &amp; departures
              </div>
            </Link>
            <Link
              href="/services/areas/long-island"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Long Island Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Nassau &amp; Suffolk County coverage
              </div>
            </Link>
            <Link
              href="/services/routes/jfk-to-long-island-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">JFK to Long Island</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                JFK airport Long Island transfers
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your EWR to Long Island Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. All tolls included. Flight tracked. No summer surge.
            Garden City to Montauk — Eagle Eye covers all of Long Island from Newark.
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
