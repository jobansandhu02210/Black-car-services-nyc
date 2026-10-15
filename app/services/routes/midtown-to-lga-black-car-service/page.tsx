import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Midtown Manhattan to LGA Car Service',
  description:
    'Midtown Manhattan to LaGuardia Airport black car service — flat rate, 20–30 min, door-to-door pickup from Times Square, Grand Central & all.',
  alternates: {
    canonical: `${getSiteUrl()}/services/routes/midtown-to-lga-black-car-service`,
  },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/midtown-to-lga-black-car-service`,
    title: 'Midtown Manhattan to LGA Car Service | Eagle Eye',
    description: 'Midtown to LaGuardia Airport — the shortest airport run in NYC. Flat-rate black car, 20–30 min, door-to-door from Times Square, Grand Central & all.',
  },
};

const faqs = [
  {
    q: 'What is the fastest way to get from Midtown to LaGuardia Airport?',
    a: 'A professional black car is the fastest and most reliable way to get from Midtown Manhattan to LaGuardia Airport. LGA is only 8 miles from Midtown — the closest of the three major NYC airports — and in normal traffic the drive takes just 20–30 minutes. A dedicated chauffeur picks you up at your door, knows the fastest route at that moment (typically the Queensboro Bridge or the Queens-Midtown Tunnel to the Grand Central Parkway), and gets you to your terminal without any transfers or rideshare detours.',
  },
  {
    q: 'Is there a flat rate from Midtown Manhattan to LaGuardia?',
    a: 'Yes. Every Eagle Eye Chauffeur fare is a flat rate confirmed at booking — no meter, no surge, no surprises. The price you see when you reserve is exactly what you pay, regardless of traffic or time of day. This is particularly valuable for the Midtown-to-LGA route, where rideshare surge pricing during rush hour can double or triple the expected fare.',
  },
  {
    q: 'What time should I leave Midtown for a LaGuardia flight?',
    a: 'For domestic departures requiring standard check-in, we recommend allowing 90 minutes from pickup to gate — so a 1.5-hour buffer from your departure time. In good traffic, the Midtown-to-LGA drive takes 20–30 minutes, leaving comfortable time for security. During rush hour (7–9 AM, 4–7 PM), the drive can extend to 35–50 minutes, so add time accordingly. We always recommend booking a slightly early pickup — there is never a penalty for arriving at LGA with extra time.',
  },
  {
    q: 'Can I book a same-day black car from Midtown to LGA?',
    a: 'Yes, same-day bookings are accepted subject to vehicle availability. For last-minute trips, WhatsApp or call us directly — it is the fastest way to confirm availability and get a driver dispatched. For critical flights, we always recommend booking at least a few hours in advance to guarantee a vehicle.',
  },
  {
    q: 'Is LaGuardia really the closest airport to Midtown Manhattan?',
    a: 'Yes — LaGuardia is by far the closest airport to Midtown Manhattan, located just 8 miles away in Queens. JFK is approximately 16 miles from Midtown, and Newark Airport (EWR) is approximately 16 miles via the Lincoln Tunnel. When you have a domestic flight and time matters, LGA is almost always the right choice for Midtown travelers — and a professional black car makes the short trip completely stress-free.',
  },
];

export default function MidtownToLGAPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: getSiteUrl() },
          { name: 'Services', url: `${getSiteUrl()}/services` },
          { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
          { name: 'Midtown to LGA Black Car Service', url: `${getSiteUrl()}/services/routes/midtown-to-lga-black-car-service` },
        ]}
      />
      <ServiceJsonLd
        name="Midtown Manhattan to LaGuardia Airport Black Car Service"
        description="Premium black car service from Midtown Manhattan to LaGuardia Airport (LGA). Flat-rate pricing, 20–30 minute door-to-door service, 24/7 availability from Times Square, Grand Central, Rockefeller Center, Penn Station and all Midtown locations."
        areaServed="Midtown Manhattan, Times Square, Grand Central, New York City, NY"
        url={`${getSiteUrl()}/services/routes/midtown-to-lga-black-car-service`}
      />

      {/* ── Hero ── */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver uppercase tracking-widest text-xs font-medium mb-4">
            Midtown Manhattan · The Closest Airport Run in NYC
          </p>
          <h1 className="font-serif text-4xl lg:text-6xl font-semibold text-brand-white mb-5 leading-tight">
            Midtown Manhattan to LaGuardia Airport
          </h1>
          <p className="text-brand-silver text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
            LaGuardia is the closest airport to Midtown — just 8 miles away. Eagle Eye Chauffeur
            gets you there in 20–30 minutes with a flat-rate black car, door-to-door pickup at
            your Midtown address, and a professional chauffeur who knows every route. No surge.
            No uncertainty. Just a clean, fast airport run.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-brand-charcoal mb-10">
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">20–30 min</div>
              <div className="text-brand-silver text-sm mt-1">Midtown to LGA</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">8 miles</div>
              <div className="text-brand-silver text-sm mt-1">Closest NYC airport</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">Flat Rate</div>
              <div className="text-brand-silver text-sm mt-1">No surge, ever</div>
            </div>
            <div className="bg-brand-black px-6 py-5">
              <div className="font-serif text-2xl font-semibold text-brand-white">24/7</div>
              <div className="text-brand-silver text-sm mt-1">All hours, any day</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-center"
            >
              Book Midtown to LGA
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
            Midtown Pickup Locations to LaGuardia Airport
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            We pick up at every address in Midtown. Estimated times are off-peak; rush-hour traffic
            on the Queensboro Bridge can add 10–20 minutes.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Times Square / Theater District → LGA', time: '20–30 min' },
              { from: 'Grand Central Terminal → LGA', time: '20–30 min' },
              { from: 'Rockefeller Center / Fifth Ave → LGA', time: '22–32 min' },
              { from: 'Penn Station / Koreatown → LGA', time: '22–32 min' },
              { from: 'Hudson Yards / West Side → LGA', time: '25–35 min' },
              { from: 'Midtown East (Park Ave) → LGA', time: '20–28 min' },
              { from: 'Columbus Circle / Upper West Side border → LGA', time: '25–35 min' },
              { from: 'Bryant Park / Sixth Ave → LGA', time: '20–28 min' },
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
            Times are off-peak estimates. Rush-hour may add 15–25 minutes — book early.{' '}
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
            What&apos;s Included in Every Midtown to LGA Booking
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Even a 20-minute ride deserves the full professional experience. Here is exactly
            what every Eagle Eye booking includes on the Midtown-to-LGA route.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Door pickup at your Midtown address',
                desc: 'Hotel entrance, office lobby, apartment building — your chauffeur pulls up to your exact address, not a corner or curbside zone.',
              },
              {
                title: 'Flat rate confirmed at booking',
                desc: 'No surge pricing during rush hour, no meter running in traffic. The price you see is the price you pay — every time.',
              },
              {
                title: 'Driver confirmed in advance',
                desc: 'For same-day and pre-booked rides alike, you receive your chauffeur details before pickup — no guessing who is coming.',
              },
              {
                title: 'Luxury sedan or executive SUV',
                desc: 'A clean, premium black car every trip. Business-class sedan or full-size SUV with climate control and charging.',
              },
              {
                title: 'Luggage assistance',
                desc: 'Your driver loads bags and helps you to the terminal curb at LaGuardia — including the new Terminal B.',
              },
              {
                title: '24/7 availability',
                desc: 'Early morning flights, midday departures, late-night returns — Eagle Eye operates at every hour LaGuardia operates.',
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
            Why Choose a Black Car for Midtown to LaGuardia
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            LGA is close — but the short distance does not mean the trip is simple. Traffic,
            surge pricing, and unreliable pickups make a professional chauffeur the smarter choice.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'No Surge Pricing at Rush Hour', body: 'The Midtown-to-LGA corridor is one of the most surge-prone rideshare routes in NYC during commute hours. Our flat rate never changes — not at 8 AM or 5 PM.' },
              { title: 'LGA Is 8 Miles from Midtown', body: 'No NYC airport is closer to Midtown than LaGuardia. A professional black car makes the 20–30 minute trip comfortable, predictable, and stress-free.' },
              { title: 'No Rideshare Pool Stops', body: 'Unlike rideshare pool or shared shuttles, your Eagle Eye black car goes directly from your Midtown door to your LGA terminal — no detours.' },
              { title: 'New LGA Terminal Knowledge', body: 'LaGuardia\'s new Terminal B transformed the airport. Our drivers know exactly where to drop off for every airline and terminal.' },
              { title: 'Same-Day Bookings Welcome', body: 'Need a last-minute black car to LGA? Call or WhatsApp us. We dispatch quickly for time-sensitive departures when availability permits.' },
              { title: 'Reliable Flight-Timing Expertise', body: 'We monitor your flight departure and account for LGA check-in and security times when recommending your pickup window.' },
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
            Midtown to LGA — FAQ
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Everything you need to know about booking a black car from Midtown Manhattan to LaGuardia.
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
              href="/services/routes/lga-to-manhattan-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">LGA to Manhattan</div>
              <div className="text-sm text-brand-grey">Arrivals — meet &amp; greet at LaGuardia</div>
            </Link>
            <Link
              href="/services/routes/midtown-to-jfk-black-car-service"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">Midtown to JFK</div>
              <div className="text-sm text-brand-grey">Flat-rate black car from all Midtown</div>
            </Link>
            <Link
              href="/services/airport/lga"
              className="bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black text-lg mb-1">LGA Airport Service</div>
              <div className="text-sm text-brand-grey">All LaGuardia terminals &amp; routes</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-black py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Book Your Midtown to LaGuardia Black Car
          </h2>
          <p className="text-brand-silver text-lg mb-8 max-w-xl mx-auto">
            20–30 minutes. Flat rate. No surge. Professional chauffeur at your Midtown
            door — to LGA in the time it takes to finish a coffee.
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
