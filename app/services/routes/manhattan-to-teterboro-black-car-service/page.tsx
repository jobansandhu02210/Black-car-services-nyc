import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Manhattan to Teterboro Airport Car Service | TEB Car',
  description:
    'Manhattan to Teterboro Airport (TEB) black car service — flat rate, door-to-door, FBO meet & greet. Private jet transfers from all Manhattan.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/manhattan-to-teterboro-black-car-service` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/services/routes/manhattan-to-teterboro-black-car-service` },
  keywords: 'manhattan to teterboro airport car service, manhattan to TEB car service, NYC to teterboro black car',
};

const faqs = [
  {
    q: 'Is the rate from Manhattan to Teterboro Airport a flat rate?',
    a: 'Yes — your rate is confirmed at booking and never changes. No surge pricing during rush hour, no premium for early morning departures, no itemized extras at drop-off. The number you see when you book is the number you pay.',
  },
  {
    q: 'Can you handle early morning departures from TEB?',
    a: 'Absolutely. Private jet schedules are not bound by commercial hours, and neither is Eagle Eye. Pre-dawn pickups — 3am, 4am, or earlier — are fully covered. Your driver is confirmed the evening before with vehicle details and a direct contact number.',
  },
  {
    q: 'How does FBO pickup work when departing from Manhattan?',
    a: 'Your chauffeur picks you up at your Manhattan address — building door, hotel entrance, or office lobby — and drives directly to your FBO at Teterboro. We confirm the FBO in advance (Signature Aviation North, Signature South, Atlantic Aviation, or Meridian) and pull directly to the correct entrance. You walk in; your aircraft is ready.',
  },
  {
    q: 'What if I have a lot of luggage for my private jet?',
    a: 'Our SUV option — Cadillac Escalade or similar — handles substantial luggage loads comfortably. Golf bags, ski equipment, oversized cases, multiple bags — just note your luggage count at booking and we match you to the right vehicle. For very large loads or groups, we can coordinate multiple vehicles.',
  },
  {
    q: 'How far in advance should I book a Manhattan to TEB transfer?',
    a: 'We recommend booking at least 24 hours ahead. For early morning departures or multi-vehicle group trips, 48 hours is ideal. That said, we accommodate last-minute requests when capacity allows — reach us by phone or WhatsApp for urgent bookings.',
  },
  {
    q: 'How far is Teterboro Airport from Manhattan?',
    a: 'Teterboro (TEB) is in Bergen County, New Jersey, about 12 miles from Midtown Manhattan — typically a 15–30 minute drive via the Lincoln Tunnel or the George Washington Bridge, though it can run longer at peak tunnel times. It is the closest private-aviation airport to Manhattan, which is why so many private jet travelers use it.',
  },
  {
    q: 'How much does a car service from Manhattan to Teterboro cost?',
    a: 'It is a flat rate confirmed at booking, with all tolls included and no surge, coordinated to your FBO and flight time. For private-aviation clients we can also arrange multiple vehicles for a group arriving on one aircraft. Enter your Manhattan address on the booking page for an exact quote.',
  },
];

export default function ManhattanToTeterboroBlackCarPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Manhattan to Teterboro Black Car Service', url: `${getSiteUrl()}/services/routes/manhattan-to-teterboro-black-car-service` },
      ]} />
      <ServiceJsonLd
        name="Manhattan to Teterboro Airport Black Car Service"
        description="Premium black car service from Manhattan to Teterboro Airport (TEB). Flat-rate door-to-door transfers to all FBOs — Signature Aviation, Atlantic Aviation, and Meridian. 24/7 availability."
        areaServed="Manhattan, New York City, NY"
        url={`${getSiteUrl()}/services/routes/manhattan-to-teterboro-black-car-service`}
      />

      <div className="bg-brand-offwhite">

        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-grey text-sm uppercase tracking-widest mb-3">Private Jet Departures · Manhattan to TEB</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-black mb-4">
              Manhattan to Teterboro Airport Black Car Service
            </h1>
            <p className="text-lg text-brand-grey mb-4">
              Leave from your building door and arrive at the FBO lobby — no terminals, no TSA, no commercial airport chaos. Eagle Eye Chauffeur provides flat-rate black car service from every Manhattan neighborhood to Teterboro Airport (TEB), the closest private aviation gateway to New York City.
            </p>
            <p className="text-brand-grey mb-8">
              Your driver comes to your exact address. Your rate is locked at booking. Your chauffeur pulls directly to your FBO entrance — Signature Aviation, Atlantic Aviation, or Meridian — and your aircraft is steps away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors">
                Book Manhattan to TEB
              </Link>
              <Link href="/services/areas/teb-airport" className="inline-block py-3 px-8 border border-brand-black text-brand-black font-medium hover:bg-brand-white transition-colors">
                All TEB Services
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-3">
              Route Times: Manhattan Neighborhoods to TEB
            </h2>
            <p className="text-brand-grey mb-6">
              Teterboro is approximately 12 miles from Midtown Manhattan. These are typical estimates under normal traffic conditions — your driver will advise on timing based on your departure time and real-time conditions.
            </p>
            <div className="space-y-3">
              {[
                { from: 'Chelsea → TEB', miles: '~11 miles', time: '18–28 min' },
                { from: 'Upper West Side → TEB', miles: '~11 miles', time: '20–30 min' },
                { from: 'Midtown Manhattan → TEB', miles: '~12 miles', time: '15–25 min' },
                { from: 'Tribeca → TEB', miles: '~12 miles', time: '20–30 min' },
                { from: 'SoHo → TEB', miles: '~12 miles', time: '22–32 min' },
                { from: 'Upper East Side → TEB', miles: '~13 miles', time: '20–30 min' },
                { from: 'Financial District → TEB', miles: '~13 miles', time: '20–30 min' },
                { from: 'Harlem → TEB', miles: '~13 miles', time: '25–35 min' },
              ].map((r) => (
                <div key={r.from} className="bg-brand-white border border-brand-light p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="font-medium text-brand-black">{r.from}</span>
                  <span className="text-brand-grey text-sm tabular-nums">{r.miles} · {r.time}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-brand-grey mt-4">
              All rates are flat and confirmed at booking. No surge pricing — ever.{' '}
              <Link href="/book" className="underline">Get your rate →</Link>
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                What&apos;s Included in Every Manhattan to TEB Booking
              </h2>
              <ul className="space-y-4 text-brand-grey">
                <li><strong className="text-brand-black">Door-to-door pickup</strong> — your chauffeur arrives at your Manhattan address, building entrance, or hotel lobby. Not at a corner two blocks away.</li>
                <li><strong className="text-brand-black">Direct FBO delivery</strong> — we drive to your specific FBO entrance at TEB. Signature Aviation, Atlantic Aviation, or Meridian — confirmed at booking.</li>
                <li><strong className="text-brand-black">Flat-rate pricing</strong> — your rate is locked the moment you book. Rush hour, early morning, holiday — the price never changes.</li>
                <li><strong className="text-brand-black">Luggage assistance</strong> — full help with bags at your Manhattan address and at the FBO.</li>
                <li><strong className="text-brand-black">Driver confirmed in advance</strong> — chauffeur name, direct number, and vehicle details sent to you the evening before.</li>
                <li><strong className="text-brand-black">24/7 support</strong> — call or WhatsApp any time before, during, or after your transfer.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Why Eagle Eye for Manhattan to Teterboro
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'FBO-Experienced Chauffeurs', body: 'Our drivers know Teterboro — correct FBO entrance, proper protocol, discreet service. No commercial airport habits.' },
                { title: 'Flat Rate — No Surprises', body: 'Your price is confirmed at booking and locked in. Traffic, time of day, and demand never change it.' },
                { title: 'TLC-Licensed Professionals', body: 'Every Eagle Eye driver is background-checked, NYC TLC licensed, and held to a professional service standard on every trip.' },
                { title: 'Luxury Sedan or SUV', body: 'Business class sedan for solo travel. Cadillac Escalade for groups or heavy luggage. Always clean and well-maintained.' },
                { title: 'Pre-Dawn Departures Covered', body: 'Private jets fly at all hours. Eagle Eye operates 24/7 — your 4am TEB departure is handled with the same quality as midday.' },
                { title: 'Multi-Vehicle Coordination', body: 'Traveling with a team? We coordinate multiple vehicles to arrive together so no one waits at the FBO entrance.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-4">
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

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
              Manhattan to TEB — What to Expect
            </h2>
            <p className="text-brand-grey mb-4">
              Teterboro Airport is located in Bergen County, NJ — approximately 12 miles from Midtown Manhattan. Your driver typically takes the Lincoln Tunnel or George Washington Bridge depending on your Manhattan origin and real-time conditions. Both routes deliver you to TEB in 15–25 minutes under normal traffic.
            </p>
            <p className="text-brand-grey mb-4">
              Unlike commercial airports, there are no check-in lines or security queues at TEB FBOs — your chauffeur pulls directly to the FBO entrance. Plan for a smooth arrival: private jet departures move at your pace, not a published gate time.
            </p>
            <p className="text-brand-grey">
              We recommend scheduling pickup at least 30–45 minutes before your intended wheels-up time to allow for light traffic and luggage handling. Your driver will advise based on current conditions.
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Manhattan to TEB — FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related TEB Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link href="/services/routes/teterboro-to-manhattan-black-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB to Manhattan</div>
                <div className="text-sm text-brand-grey mt-1">FBO arrivals to any Manhattan address</div>
              </Link>
              <Link href="/services/areas/teb-airport" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">TEB Airport Service</div>
                <div className="text-sm text-brand-grey mt-1">All Teterboro routes &amp; FBOs</div>
              </Link>
              <Link href="/services/routes/new-jersey-to-teterboro-car-service" className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                <div className="font-semibold text-brand-black">NJ to TEB</div>
                <div className="text-sm text-brand-grey mt-1">Hoboken, Jersey City &amp; all NJ</div>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your Manhattan to TEB Black Car
              </h2>
              <p className="text-brand-silver mb-6">
                Flat rate. FBO delivery. Professional chauffeur at your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book" className="inline-flex items-center justify-center px-8 py-3 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                  Reserve Now
                </Link>
                <a
                  href={WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
