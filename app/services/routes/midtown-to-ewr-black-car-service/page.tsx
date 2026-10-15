import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Midtown Manhattan to Newark Airport Car Service | EWR',
  description:
    'Midtown Manhattan to Newark Airport (EWR) black car service — flat rate, tolls included, door-to-door from all Midtown locations. Professional.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/midtown-to-ewr-black-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/midtown-to-ewr-black-car-service`,
    title: 'Midtown Manhattan to Newark Airport Car Service | EWR | Eagle Eye',
    description: 'Flat-rate black car service from Midtown Manhattan to Newark Airport (EWR). Tolls included, no surge pricing, door-to-door professional chauffeur.',
  },
};

const faqs = [
  {
    q: 'How long does it take to drive from Midtown Manhattan to Newark Airport?',
    a: 'The drive from Midtown Manhattan to Newark Liberty International Airport (EWR) typically takes 30–45 minutes via the Lincoln Tunnel and the New Jersey Turnpike. Hudson Yards — the closest Midtown point to the tunnel — can reach EWR in as little as 25–40 minutes. During rush hour (7–9 AM, 4–7 PM), add 15–30 minutes. Our chauffeurs monitor traffic and select the best route — Lincoln Tunnel or Holland Tunnel — at the time of pickup.',
  },
  {
    q: 'Are tolls included in the Midtown to Newark Airport flat rate?',
    a: 'Yes. Eagle Eye Chauffeur fares to Newark Airport include all tolls — the Lincoln Tunnel toll, New Jersey Turnpike, and airport access fees are all built into your confirmed flat rate. There are no add-ons at the end of the trip. The price you see at booking is the complete, all-in price.',
  },
  {
    q: 'Is there a flat rate and no surge pricing from Midtown to EWR?',
    a: 'Yes. All Eagle Eye fares are flat rates confirmed at booking — never surge-priced, never metered. This is especially relevant for Newark Airport, where rideshare apps frequently add surge pricing at peak travel times. Our price is fixed the moment you reserve, regardless of demand, traffic, or time of day.',
  },
  {
    q: 'What is the route from Midtown to Newark Airport?',
    a: 'The primary route from Midtown Manhattan to Newark Airport is via the Lincoln Tunnel (from 34th–42nd Street access points) to the New Jersey Turnpike and then to EWR. For Midtown East or upper Midtown, the Holland Tunnel is sometimes faster depending on traffic. Our chauffeurs know both routes and select the best option in real time based on current conditions.',
  },
  {
    q: 'Why should I fly from Newark instead of JFK or LGA?',
    a: 'Newark Airport often offers cheaper flights — particularly on United Airlines, which uses EWR as a major hub — and international routes that are not available or as competitive from JFK or LGA. EWR also tends to have shorter security lines and a modern, well-organized terminal layout. For many Midtown travelers, the 30–45 minute black car ride to EWR is well worth the fare savings on transatlantic and international flights.',
  },
];

export default function MidtownToEWRPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Midtown to Newark Airport Black Car', url: `${getSiteUrl()}/services/routes/midtown-to-ewr-black-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Midtown Manhattan to Newark Airport (EWR) Black Car Service"
        description="Premium black car service from Midtown Manhattan to Newark Liberty International Airport. Flat-rate pricing with all tolls included, no surge pricing, door-to-door from Times Square, Grand Central, Penn Station, Hudson Yards and all Midtown locations. 24/7 availability."
        areaServed="Midtown Manhattan, Times Square, Hudson Yards, New York City, NY"
        url={`${getSiteUrl()}/services/routes/midtown-to-ewr-black-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Midtown Manhattan · Lincoln Tunnel · Newark Liberty Airport
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Midtown to Newark Airport Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Newark Airport offers some of the best international fares in the region — and Eagle Eye
            Chauffeur gets you there in 30–45 minutes with a flat rate that includes all tolls.
            No surge pricing. No Lincoln Tunnel surprises on your bill. Just a confirmed black car
            at your Midtown door, ready when you are.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">30–45 min</div>
              <div className="text-brand-silver text-sm mt-1">Midtown to EWR</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Tolls Included</div>
              <div className="text-brand-silver text-sm mt-1">All-in flat rate</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">No Surge</div>
              <div className="text-brand-silver text-sm mt-1">Fixed price at booking</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">International departures</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Midtown to EWR
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

      {/* ── Routes Table ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Midtown Pickup Locations to Newark Airport (EWR)
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            We serve every address in Midtown Manhattan. Estimated times are off-peak via the
            Lincoln Tunnel; rush-hour or Holland Tunnel routing may vary.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Times Square / Theater District → EWR', time: '30–45 min' },
              { from: 'Grand Central / Murray Hill → EWR', time: '35–50 min' },
              { from: 'Penn Station / 34th St → EWR', time: '30–45 min' },
              { from: 'Hudson Yards / West Side → EWR', time: '25–40 min' },
              { from: 'Rockefeller Center / Fifth Ave → EWR', time: '35–50 min' },
              { from: 'Midtown East (Park Ave) → EWR', time: '35–50 min' },
              { from: 'Bryant Park / Sixth Ave → EWR', time: '35–50 min' },
              { from: 'Columbus Circle / 59th St → EWR', time: '30–45 min' },
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
            All times are off-peak estimates. Tolls included in flat rate.{' '}
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
            What&apos;s Included in Every Midtown to Newark Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Midtown-to-EWR run crosses state lines and tunnels — here is everything your Eagle
            Eye flat rate covers, end to end.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'All tolls included',
                desc: 'Lincoln Tunnel, New Jersey Turnpike, and EWR airport access fees are all built into your flat rate. No toll add-ons at the end of the trip.',
              },
              {
                title: 'Door pickup at your Midtown address',
                desc: 'Hotel entrance, office lobby, or residence — your chauffeur arrives at your exact Midtown address, not a nearby corner.',
              },
              {
                title: 'Flat rate locked at booking',
                desc: 'No surge, no metering, no surprises. The price confirmed at booking is all-inclusive — every time.',
              },
              {
                title: 'Driver confirmed in advance',
                desc: 'Your chauffeur\'s name, vehicle, and contact details are sent before your pickup — for pre-booked and same-day rides alike.',
              },
              {
                title: 'Luxury sedan or executive SUV',
                desc: 'A clean, current-model black car — premium sedan or full-size SUV — for every trip. No surprises with the vehicle.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your chauffeur helps load bags at pickup and unloads at your EWR terminal check-in curb.',
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

      {/* ── Benefits ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Choose Eagle Eye for Midtown to Newark Airport
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Newark is the right airport for many Midtown travelers — especially on international
            routes. Here is why Eagle Eye is the right car service for the trip.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Tolls Are Truly Included', body: 'The Lincoln Tunnel toll, NJ Turnpike, and airport fees add real cost to EWR trips. Our flat rate absorbs all of it — no add-ons, no itemized surprises at the end.' },
              { title: 'No Rideshare Surge to EWR', body: 'Rideshare apps surge heavily on the EWR corridor, especially during peak travel windows. Our flat rate is locked at booking — the same price at 6 AM or 6 PM.' },
              { title: 'Fastest Route Selected in Real Time', body: 'Lincoln Tunnel or Holland Tunnel — our drivers monitor conditions and choose the best route for your pickup time, not a predetermined GPS path.' },
              { title: 'International Departure Ready', body: 'EWR handles major international routes via United, Emirates, Lufthansa, and more. We operate at 3 AM for red-eye departures that require early arrival.' },
              { title: 'No Parking at EWR Required', body: 'EWR airport parking is expensive for multi-day trips. A professional car service door-to-door eliminates parking cost and the shuttle ride entirely.' },
              { title: 'NJ Residents Return Pickup', body: 'Returning from Newark to Midtown? We handle arrivals at EWR with meet-and-greet service and the same flat-rate pricing in both directions.' },
            ].map((item) => (
              <div key={item.title} className="bg-brand-white border border-brand-light p-5">
                <div className="flex items-start gap-3 mb-2">
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
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Midtown to Newark Airport — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions from Midtown clients booking black car service to Newark Liberty Airport.
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

      {/* ── Related ── */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            Related Services
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/ewr-to-manhattan-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">EWR to Manhattan</div>
              <div className="text-sm text-brand-grey">Arrivals from Newark — meet &amp; greet</div>
            </Link>
            <Link
              href="/services/routes/midtown-to-jfk-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Midtown to JFK</div>
              <div className="text-sm text-brand-grey">Flat-rate black car from all Midtown</div>
            </Link>
            <Link
              href="/services/airport/ewr"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Newark Airport Service</div>
              <div className="text-sm text-brand-grey">All EWR terminals &amp; routes</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Midtown to Newark Airport Black Car
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. Tolls included. No surge. Professional chauffeur at your Midtown
            address — to EWR in 30–45 minutes.
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
