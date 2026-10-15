import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Bronx to JFK Airport Car Service | Eagle Eye NYC',
  description:
    'Bronx to JFK Airport black car service — flat rates, professional chauffeur, door-to-door from Riverdale, Fordham, Co-op City, Parkchester & all.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/bronx-to-jfk-black-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    title: 'Bronx to JFK Airport Car Service | Eagle Eye',
    description: 'Flat-rate black car service from any Bronx neighborhood to JFK Airport. TLC licensed, all tolls included, no surge pricing, 24/7.',
    url: `${getSiteUrl()}/services/routes/bronx-to-jfk-black-car-service`,
  },
};

const faqs = [
  {
    q: 'How much is a Bronx to JFK car service?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, ever. The Bronx-to-JFK route involves bridge tolls and a longer distance than other boroughs, and our flat rate includes all of those costs. What you see when you book is what you pay — nothing more. Get an instant quote on our booking page by entering your Bronx address and JFK as your destination.',
  },
  {
    q: 'How long does it take from the Bronx to JFK?',
    a: 'The Bronx is the farthest NYC borough from JFK, so plan for 40–70 minutes depending on your neighborhood and traffic conditions. Mott Haven in the South Bronx runs 35–50 minutes, Fordham and Tremont 40–55 minutes, and more northern neighborhoods like Riverdale, Co-op City, Pelham Bay, and City Island run 45–70 minutes. We always recommend building in buffer time for early morning flights.',
  },
  {
    q: 'Do you cover all Bronx neighborhoods for JFK transfers?',
    a: 'Yes. Eagle Eye Chauffeur serves every Bronx neighborhood — Riverdale, Fordham, Co-op City, Parkchester, Mott Haven, Pelham Bay, Tremont, City Island, Highbridge, Concourse, Norwood, Woodlawn, Morris Park, Soundview, Hunts Point, and beyond. There are no geographic restrictions or neighborhood surcharges within the Bronx.',
  },
  {
    q: 'Are tolls included in the Bronx to JFK price?',
    a: 'Yes. Our flat rate includes all bridge and tunnel tolls on the Bronx-to-JFK route — whether the driver takes the Triborough (RFK) Bridge, Throgs Neck, Whitestone, or another route. There are no itemized toll add-ons or surcharges. The price confirmed at booking is your complete all-in price.',
  },
  {
    q: 'Can I book a Bronx to JFK pickup for early morning flights?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week. Early morning departures — 4am, 5am, 6am — from the Bronx to JFK are fully covered. Given the longer drive time from the Bronx, we work with you to determine the ideal pickup time based on your flight and terminal. Your driver is confirmed the evening before, so there are no last-minute uncertainties.',
  },
];


export default function BronxToJFKBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Bronx to JFK Black Car', url: `${getSiteUrl()}/services/routes/bronx-to-jfk-black-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Bronx to JFK Airport Black Car Service"
        description="Premium black car service from the Bronx to JFK Airport. Flat rates with all tolls included, real-time flight tracking, door-to-door from Riverdale, Fordham, Co-op City, Parkchester and all Bronx neighborhoods. TLC licensed, 24/7."
        areaServed="Bronx, New York, NY"
        url={`${getSiteUrl()}/services/routes/bronx-to-jfk-black-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Route
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Bronx to JFK Airport Black Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            The Bronx-to-JFK run is one of New York&apos;s longer airport transfers — and one of the
            most important to get right. Eagle Eye Chauffeur provides flat-rate, door-to-door black
            car service from every Bronx neighborhood, with all tolls included, a TLC-licensed
            chauffeur at your door, and a price that never surges at 4am.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flight Tracking</div>
              <div className="text-brand-silver text-sm mt-1">Automatic delay adjustment</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flat Rate</div>
              <div className="text-brand-silver text-sm mt-1">All tolls included</div>
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
              Book Bronx to JFK
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
            Bronx to JFK — Neighborhoods &amp; Estimated Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Every Bronx neighborhood is covered. Times below are typical off-peak estimates —
            allow additional time during morning rush hour and Friday afternoons. We factor in
            buffer time when calculating your ideal pickup window.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Riverdale → JFK', time: '45–60 min' },
              { from: 'Fordham → JFK', time: '40–55 min' },
              { from: 'Co-op City → JFK', time: '45–60 min' },
              { from: 'Parkchester → JFK', time: '40–55 min' },
              { from: 'Mott Haven → JFK', time: '35–50 min' },
              { from: 'Pelham Bay → JFK', time: '45–65 min' },
              { from: 'Tremont → JFK', time: '40–55 min' },
              { from: 'City Island → JFK', time: '50–70 min' },
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
            All rates are flat and confirmed at booking — tolls included, no surge pricing.{' '}
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
            What&apos;s Included in Every Bronx to JFK Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            A longer airport transfer demands an even higher standard of service. Here is everything
            that comes standard with every Eagle Eye Bronx-to-JFK booking.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Real-time flight tracking',
                desc: 'We monitor your flight from the moment you book. If your departure shifts or your arrival delays, your chauffeur adjusts automatically — no calls, no rebooking required from you.',
              },
              {
                title: 'Meet &amp; greet at arrivals',
                desc: 'For JFK pickups, your chauffeur meets you in the arrivals hall of your terminal with a name sign — T1, T2, T4, T5, T7, or T8 — just past baggage claim.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your chauffeur handles all bags at both ends of the journey. From your Bronx front door to the terminal curb, or from baggage claim to the vehicle — all handled.',
              },
              {
                title: 'Flat rate — all tolls included',
                desc: 'Your fare is confirmed at booking and includes all bridge and tunnel tolls on the route. No itemized toll add-ons, no hidden surcharges — ever.',
              },
              {
                title: 'Luxury sedan or SUV',
                desc: 'Travel in a business-class sedan or full-size SUV — clean, spacious, and comfortable for a 45-60 minute ride with your luggage fully accommodated.',
              },
              {
                title: '24/7 availability',
                desc: 'Early morning departures and late-night arrivals are fully covered. Eagle Eye operates around the clock — a 4am pickup from Riverdale is just as confirmed as noon.',
              },
              {
                title: 'TLC licensed &amp; fully insured',
                desc: 'Every Eagle Eye chauffeur holds a New York TLC license and is fully insured — the professional standard required for luxury transportation in New York City.',
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
            Why Bronx Residents Choose Eagle Eye for JFK
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The Bronx is the borough farthest from JFK — which makes reliability, flat pricing,
            and toll transparency more important here than anywhere else. Here is why Eagle Eye
            is the right choice.
          </p>
          <div className="bg-brand-white border border-brand-light p-8">
            <ul className="space-y-5 text-brand-grey">
              <li>
                <strong className="text-brand-black">No bridge or tunnel markup — all tolls included in your flat rate.</strong>{' '}
                The Bronx-to-JFK route involves multiple toll structures depending on the bridge
                used. Eagle Eye quotes you one flat rate that covers the complete journey —
                driver, vehicle, and all tolls — with nothing added at the end.
              </li>
              <li>
                <strong className="text-brand-black">Bronx traffic expertise for every route.</strong>{' '}
                Major Deegan, Cross Bronx, Bruckner, Whitestone Bridge, Triborough — our chauffeurs
                know the Bronx road network and select the optimal route based on real-time
                conditions. You are not relying on an algorithm that picks the same highway at 7am
                as it does at midnight.
              </li>
              <li>
                <strong className="text-brand-black">Flight tracking with automatic adjustment for delays.</strong>{' '}
                For longer routes like Bronx to JFK, even a 30-minute flight delay can turn an
                early pickup into unnecessary waiting. Eagle Eye monitors your flight in real time
                and adjusts your chauffeur&apos;s schedule accordingly — you are never paying for
                a driver who arrived too early because of a delay you had no control over.
              </li>
              <li>
                <strong className="text-brand-black">Door-to-door from any Bronx address.</strong>{' '}
                Whether you are in Riverdale by the Hudson or City Island on the Sound, Mott Haven
                or Co-op City — your chauffeur comes to your front door. No walking to a corner,
                no curbside zone, no car service that only covers parts of the borough.
              </li>
              <li>
                <strong className="text-brand-black">TLC licensed and fully insured on every booking.</strong>{' '}
                Eagle Eye chauffeurs hold New York TLC licenses and carry commercial insurance that
                meets NYC standards for professional transportation. Every ride is backed by the
                licensing and insurance framework that sets professional black car apart from
                peer-to-peer transportation apps.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Eagle Eye Benefits ── */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3">
            Why Eagle Eye for Bronx to JFK
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            On a longer route like Bronx to JFK, reliability, flat pricing, and toll transparency
            matter more than ever. Here is what Eagle Eye delivers every time.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'All Tolls Included', body: 'Every toll on the Bronx-to-JFK route is included in your flat rate. One price covers the complete journey — driver, vehicle, and all tolls.' },
              { title: 'Bronx Route Expertise', body: 'Our chauffeurs know the Major Deegan, Cross Bronx, Bruckner, and Whitestone Bridge routes and choose the fastest combination in real time.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your flight and adjust your chauffeur\'s schedule for delays automatically — at no extra charge.' },
              { title: 'Door-to-Door from Any Bronx Address', body: 'Your driver comes to your front door — from Riverdale to City Island, Mott Haven to Co-op City.' },
              { title: 'TLC Licensed & Fully Insured', body: 'Every Eagle Eye driver holds a NYC TLC license and carries commercial insurance — meeting the professional standard for licensed transportation.' },
              { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, vehicle, and contact details the night before — zero uncertainty on the morning of your flight.' },
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
            Book with confidence — your flat rate is waiting.{' '}
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
            Bronx to JFK Black Car — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Common questions about booking a Bronx to JFK Airport black car service.
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
            Explore our full range of Bronx and JFK airport transportation.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/airport/jfk"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">JFK Airport Service</div>
              <div className="text-sm text-brand-grey">
                All JFK routes, terminals, and service details from any NYC origin.
              </div>
            </Link>
            <Link
              href="/services/areas/bronx"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Bronx Chauffeur Service</div>
              <div className="text-sm text-brand-grey">
                All Bronx rides, hourly chauffeur, and neighborhood coverage.
              </div>
            </Link>
            <Link
              href="/services/routes/queens-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Queens to JFK</div>
              <div className="text-sm text-brand-grey">
                Flat-rate black car service from all Queens neighborhoods to JFK.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Bronx to JFK Black Car Service
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            Flat rate. All tolls included. No surge pricing. TLC-licensed chauffeur from your
            Bronx door to JFK — 24 hours a day, every day.
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
