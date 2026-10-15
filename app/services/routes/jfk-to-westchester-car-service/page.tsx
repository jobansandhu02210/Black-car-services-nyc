import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'JFK to Westchester Car Service | Airport Transfer',
  description:
    'JFK Airport to Westchester car service — flat rates, real-time flight tracking, 60-min free wait, meet & greet at arrivals. White Plains.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/jfk-to-westchester-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/jfk-to-westchester-car-service` },
};

const faqs = [
  {
    q: 'How much is a car service from JFK to Westchester?',
    a: 'All rates are flat and confirmed at booking — no surge pricing, no hidden fees. JFK to Westchester is a popular long-haul airport transfer. Get an instant quote on our booking page by entering your JFK terminal and your Westchester destination.',
  },
  {
    q: 'How long does it take from JFK to Westchester?',
    a: 'Depending on your Westchester destination and traffic: White Plains is typically 50–70 minutes from JFK; Scarsdale 45–65 minutes; Yonkers 40–55 minutes; Greenwich CT 65–80 minutes. Your chauffeur monitors live traffic and takes the fastest available route.',
  },
  {
    q: 'Do you track my flight for a JFK to Westchester transfer?',
    a: 'Yes. We monitor your JFK arrival in real time. If your flight is delayed or arrives early, your driver adjusts automatically — no extra charge and no calls needed from you. You receive a WhatsApp message with your driver\'s info before you land.',
  },
  {
    q: 'Can you take me from JFK directly to a Westchester hotel or office?',
    a: 'Yes. We provide fully door-to-door service — from your JFK terminal directly to any Westchester address. Hotels, corporate parks, private residences, event venues — all covered. No stops, no shared rides.',
  },
  {
    q: 'Is JFK to Westchester car service available at 3am for early morning flights?',
    a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week, 365 days a year. Early morning departures and late-night arrivals for Westchester transfers are fully covered. Your rate is the same regardless of the hour.',
  },
  {
    q: 'How far is JFK from Westchester?',
    a: 'Westchester is roughly 22 to 35 miles north of JFK depending on the town. Yonkers and New Rochelle are the closest at about 22–25 miles (40–55 minutes), Scarsdale and Larchmont about 25–27 miles, and White Plains, Rye, and Port Chester about 30–33 miles (50–75 minutes). Greenwich, CT is about 35 miles.',
  },
  {
    q: 'Which is the closest Westchester town to JFK?',
    a: 'Yonkers is the closest major Westchester city to JFK — about 25 miles and 40–55 minutes — since it sits right on the New York City border. New Rochelle and Bronxville are also among the shortest transfers, while northern towns like Port Chester and the Connecticut border are farther.',
  },
];


export default function JFKToWestchesterPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'JFK to Westchester Car Service', url: `${getSiteUrl()}/services/routes/jfk-to-westchester-car-service` },
      ]} />
      <ServiceJsonLd
        name="JFK to Westchester Car Service"
        description="Premium black car service from JFK Airport to all Westchester County destinations. Flat rates, real-time flight tracking, 60-minute free wait, meet & greet at arrivals. 24/7 availability."
        areaServed="Westchester County, NY"
        url={`${getSiteUrl()}/services/routes/jfk-to-westchester-car-service`}
      />

      {/* ── DARK HERO ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm font-medium uppercase tracking-widest mb-4">
            JFK Airport Transfer · Westchester County
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold leading-tight mb-6">
            JFK to Westchester<br className="hidden lg:block" /> Car Service
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            Flying into JFK and heading to Westchester? Eagle Eye Chauffeur provides flat-rate, door-to-door
            black car service with a professional chauffeur waiting at your terminal — flight tracked, name sign
            ready, 60 minutes of free wait time included. No shared shuttles. No surge pricing. No stops.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10 border-t border-brand-charcoal pt-8">
            <div>
              <div className="text-3xl font-serif font-semibold text-brand-white">60 min</div>
              <div className="text-brand-silver text-sm mt-1">Free wait after landing</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-brand-white">24 / 7</div>
              <div className="text-brand-silver text-sm mt-1">Service availability</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-semibold text-brand-white">10+</div>
              <div className="text-brand-silver text-sm mt-1">Westchester destinations</div>
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
              Book JFK to Westchester
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
            Popular JFK to Westchester Routes
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Westchester is roughly 22 to 35 miles north of JFK — the drive runs up the Whitestone or Throgs Neck Bridge
            and the Hutchinson River Parkway or I-95. Distances and times below are estimates and vary with traffic;
            your chauffeur takes the fastest live-traffic route. Flat rates confirmed at booking — no surprises.
          </p>
          <div className="space-y-3">
            {[
              { from: 'JFK → Yonkers', dist: '~25 mi · 40–55 min', note: 'Closest major Westchester city to NYC' },
              { from: 'JFK → New Rochelle', dist: '~22 mi · 40–55 min', note: 'Sound Shore corridor, I-95 area' },
              { from: 'JFK → Bronxville', dist: '~24 mi · 45–60 min', note: 'Village, Pondfield Rd area' },
              { from: 'JFK → Scarsdale', dist: '~27 mi · 45–65 min', note: 'Residential village, Tuckahoe Rd corridor' },
              { from: 'JFK → Larchmont', dist: '~25 mi · 45–65 min', note: 'Shore road area, Long Island Sound' },
              { from: 'JFK → Mamaroneck', dist: '~27 mi · 45–65 min', note: 'Harbor area, Westchester Ave' },
              { from: 'JFK → White Plains', dist: '~32 mi · 50–70 min', note: 'Westchester\'s largest city; major corporate hub' },
              { from: 'JFK → Rye', dist: '~30 mi · 50–70 min', note: 'Boston Post Rd corridor' },
              { from: 'JFK → Port Chester', dist: '~33 mi · 55–75 min', note: 'Near CT border, King Street area' },
              { from: 'JFK → Greenwich, CT', dist: '~35 mi · 65–85 min', note: 'Cross-state; Merritt Pkwy access' },
            ].map((r) => (
              <div
                key={r.from}
                className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
              >
                <div>
                  <span className="font-semibold text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm ml-3">{r.note}</span>
                </div>
                <span className="text-brand-grey text-sm font-medium whitespace-nowrap tabular-nums">{r.dist}</span>
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
            Every JFK to Westchester transfer with Eagle Eye Chauffeur includes the following at no
            extra charge. This is the standard — not an upgrade.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Real-Time Flight Tracking',
                body: 'We monitor your JFK arrival live. Delayed or early — your driver adjusts automatically. No calls, no re-booking, no extra charge.',
              },
              {
                title: 'Meet & Greet at Arrivals',
                body: 'Your chauffeur waits with a name sign past baggage claim. No curbside scramble after a long flight.',
              },
              {
                title: '60-Min Complimentary Wait',
                body: 'You get 60 minutes of free wait time after your flight lands. Take your time clearing customs and collecting luggage.',
              },
              {
                title: 'Luggage Assistance',
                body: 'Your chauffeur loads and unloads all bags. No lifting required after a long journey.',
              },
              {
                title: 'Flat-Rate Pricing',
                body: 'Your price is confirmed at booking. It does not change due to traffic, time of day, or demand spikes.',
              },
              {
                title: 'Luxury Vehicle',
                body: 'Business-class sedan or premium SUV, always clean and professionally maintained. Water available on request.',
              },
              {
                title: '24 / 7 Availability',
                body: 'Red-eye arrivals, 3am pickups, holiday travel — we operate every day of the year with no rate increase for odd hours.',
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
            Why Choose Black Car Service for JFK to Westchester
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            The JFK-to-Westchester corridor is one of the longest and most unpredictable airport transfers
            in the New York metro. Here is why a black car service is the right choice.
          </p>
          <div className="space-y-7">
            <div>
              <h3 className="font-semibold text-brand-black mb-1">The distance demands a professional</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                JFK to White Plains is 30+ miles through some of the busiest highway corridors in the country —
                the Van Wyck, the Cross Bronx, I-87. A professional chauffeur knows every alternate route and
                navigates live traffic without you having to direct them — and knows Westchester streets
                and the fastest JFK exit routes well.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Price certainty after a long flight</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                After an international or transcontinental flight, the last thing you want is to watch an
                Prices change because of a traffic event elsewhere. Your Eagle Eye rate is locked the moment you
                book. It does not matter if the Cross Bronx is gridlocked — your price is exactly what was
                quoted.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">No confusion at the terminal</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                JFK arrivals can require navigating to specific pickup areas with luggage and standing in queues.
                With Eagle Eye, your chauffeur is at arrivals with your name on a sign. You walk out of
                baggage claim and straight into your vehicle. For families, frequent flyers, and business
                travelers, this matters.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Westchester is not a simple city drop</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                Westchester County has dozens of distinct towns, villages, and neighborhoods — from Yonkers
                on the city border to Peekskill 40 miles north. Our chauffeurs know the county and deliver
                to private driveways, gated communities, corporate campuses, and hotel lobbies without
                hesitation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-black mb-1">Privacy and comfort for the full journey</h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                A shared shuttle makes stops at multiple addresses and can stretch a 55-minute ride into
                two hours. Your Eagle Eye transfer is private, non-stop, and in a luxury vehicle. Work
                on your laptop, make calls, or simply decompress — the ride is yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EAGLE EYE ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Eagle Eye for JFK to Westchester
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            The JFK–Westchester corridor demands reliability, flat pricing, and a driver who knows
            the route. Eagle Eye delivers a professional black car experience from terminal to door.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises during peak hours.' },
              { title: 'Meet & Greet at JFK Arrivals', body: 'Your chauffeur waits with a name sign at the arrivals hall — no searching outside with luggage.' },
              { title: 'Real-Time Flight Tracking', body: 'We monitor your JFK arrival and adjust your driver automatically for any delay — at no extra charge.' },
              { title: 'Luggage Assistance', body: 'Your chauffeur loads and unloads all luggage at JFK and at your Westchester destination.' },
              { title: 'Luxury Sedan or SUV', body: 'You travel in a clean, premium black car every time — not an unknown vehicle assigned at the last minute.' },
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            JFK to Westchester Car Service — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about booking your JFK to Westchester black car transfer.
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
              href="/services/airport/jfk"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">JFK Airport Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                All JFK routes, terminals, and arrivals meet &amp; greet service.
              </div>
            </Link>
            <Link
              href="/services/areas/westchester"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Westchester County Service</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Local rides, corporate commutes, and hourly hire across Westchester.
              </div>
            </Link>
            <Link
              href="/services/routes/jfk-to-brooklyn"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">JFK to Brooklyn</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Flat-rate black car service from JFK to all Brooklyn neighborhoods.
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your JFK to Westchester Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. Professional chauffeur. Flight tracked. Name sign at arrivals.
            60 minutes of free wait time. Available 24 / 7 every day of the year.
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
