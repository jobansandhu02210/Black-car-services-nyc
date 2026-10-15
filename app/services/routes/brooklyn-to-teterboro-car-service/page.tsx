import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Brooklyn to Teterboro Airport Car Service | TEB',
  description:
    'Brooklyn to Teterboro Airport (TEB) black car service — flat rate, door-to-door, FBO meet & greet from all Brooklyn neighborhoods. Private jet.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/brooklyn-to-teterboro-car-service` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/brooklyn-to-teterboro-car-service`,
    title: 'Brooklyn to Teterboro Airport Car Service | TEB | Eagle Eye',
    description:
      'Brooklyn to Teterboro Airport (TEB) black car service — flat rate, door-to-door, FBO meet & greet from all Brooklyn neighborhoods. Private jet.',
  },
};

const faqs = [
  {
    q: 'How long does it take to drive from Brooklyn to Teterboro Airport (TEB)?',
    a: 'From most Brooklyn neighborhoods, the drive to Teterboro Airport (TEB) takes 30–50 minutes under normal traffic. DUMBO, Williamsburg, and Carroll Gardens are closest, typically 30–45 minutes via the Brooklyn-Battery Tunnel or Holland Tunnel through lower Manhattan. Bay Ridge and Sheepshead Bay can add another 10–15 minutes. Your chauffeur monitors live traffic and takes the most efficient bridge or tunnel route available.',
  },
  {
    q: 'Is the rate from Brooklyn to TEB a flat rate?',
    a: 'Yes. All Eagle Eye Chauffeur rides are flat rate, confirmed at the time of booking. Your rate never changes due to traffic, time of day, or demand. The price you confirm when you book is the price you pay — no surge, no hidden fees, no post-trip adjustments.',
  },
  {
    q: 'Do you offer early morning service from Brooklyn for private jet departures?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning private jet departures from TEB are fully covered — your driver is confirmed the evening before with name, vehicle, and contact details. Many private aviation clients departing from TEB prefer a 4am or 5am pickup; this is standard for us.',
  },
  {
    q: 'Which bridge or tunnel do you use from Brooklyn to Teterboro?',
    a: 'The most common routes from Brooklyn to TEB use the Brooklyn-Battery Tunnel into lower Manhattan and then the Holland Tunnel or Lincoln Tunnel into New Jersey, continuing north on Route 3 or NJ-17 to TEB. Your chauffeur monitors live traffic conditions and selects the most efficient crossing — whether that is the Verrazano, Holland, or Lincoln Tunnel — on the day of your ride.',
  },
  {
    q: 'Can you book a black car from Brooklyn to TEB for a group?',
    a: 'Yes. Eagle Eye Chauffeur offers both sedan and SUV vehicles, and can arrange multiple vehicles for larger groups traveling from Brooklyn to TEB. When booking, specify your passenger count and luggage so we can assign the right vehicle class. Group bookings can be coordinated by emailing or calling our team directly.',
  },
];

export default function BrooklynToTeterboroPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Brooklyn to Teterboro Airport Car Service', url: `${getSiteUrl()}/services/routes/brooklyn-to-teterboro-car-service` },
      ]} />
      <ServiceJsonLd
        name="Brooklyn to Teterboro Airport Car Service"
        description="Flat-rate black car service from Brooklyn to Teterboro Airport (TEB). FBO meet & greet at Signature Aviation, Atlantic Aviation, and Meridian. Door-to-door from all Brooklyn neighborhoods. 24/7."
        areaServed="Brooklyn, New York City, NY"
        url={`${getSiteUrl()}/services/routes/brooklyn-to-teterboro-car-service`}
      />

      {/* ── HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Private Jet Transfer</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Brooklyn to Teterboro Airport Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from every Brooklyn neighborhood to Teterboro Airport (TEB) —
            Bergen County&apos;s 100% private aviation airport. Your chauffeur meets you at the FBO
            lobby with a name sign. No surge pricing, no commercial terminals, no guesswork.
            Door-to-door, 24/7.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['Flat Rate', 'FBO Meet & Greet', '24/7', 'TLC Licensed'].map((s) => (
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
            Brooklyn to Teterboro Airport — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Travel times are estimates under normal traffic. Rush hour, bridge traffic, and tunnel
            delays can add 10–20 minutes. Your chauffeur monitors live conditions and selects the
            best crossing — Holland Tunnel, Lincoln Tunnel, or Verrazano-Narrows — on the day of
            your transfer.
          </p>
          <div className="space-y-3">
            {[
              { from: 'DUMBO → Teterboro Airport (TEB)', time: '30–45 min' },
              { from: 'Williamsburg → Teterboro Airport (TEB)', time: '30–45 min' },
              { from: 'Carroll Gardens → Teterboro Airport (TEB)', time: '30–45 min' },
              { from: 'Park Slope → Teterboro Airport (TEB)', time: '35–50 min' },
              { from: 'Brooklyn Heights → Teterboro Airport (TEB)', time: '35–50 min' },
              { from: 'Flatbush → Teterboro Airport (TEB)', time: '40–55 min' },
              { from: 'Bay Ridge → Teterboro Airport (TEB)', time: '40–55 min' },
              { from: 'Sheepshead Bay → Teterboro Airport (TEB)', time: '50–65 min' },
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
            All rates flat and confirmed at booking. No surge pricing — ever.{' '}
            <Link href="/book" className="underline hover:text-brand-black transition-colors">
              Get an instant quote →
            </Link>
          </p>
        </div>
      </section>

      {/* ── ABOUT TEB ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            About Teterboro Airport (TEB)
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            What makes TEB different from JFK, LGA, and EWR — and why it matters for your transfer.
          </p>
          <div className="space-y-5">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">100% private aviation</strong> — Teterboro Airport
                handles no commercial flights. Every aircraft that lands or departs at TEB is a private
                jet or charter. This means no TSA security lines, no gate areas, no baggage carousels,
                and no crowds. Your experience begins the moment you step out of the car.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">FBO operators at TEB</strong> — Teterboro is served
                by three Fixed Base Operators: Signature Aviation (North &amp; South terminals),
                Atlantic Aviation, and Meridian. Your FBO is determined by your aircraft operator or
                charter company. Eagle Eye Chauffeur drops you at — or collects you from — the correct
                FBO lobby, where your driver will be waiting with a name sign.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">No standard flight tracking for private manifests</strong> —
                Unlike commercial flights, private jet schedules are not published in public databases.
                We coordinate directly with you to confirm your departure or arrival time and build in
                appropriate travel time from your Brooklyn address. If your departure time changes,
                contact us directly and we adjust your pickup.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">12 miles from Midtown Manhattan</strong> — TEB is
                remarkably close to Manhattan and Brooklyn relative to JFK or EWR. From Brooklyn,
                most neighborhoods can reach TEB in 30–50 minutes via the Holland or Lincoln Tunnel.
                Early departures are especially manageable when there is no tunnel congestion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-brand-offwhite py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            What&apos;s Included in Every Booking
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Every Brooklyn to TEB booking includes the following as standard — not an upgrade, not an
            add-on. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Door-to-Door from Your Brooklyn Address',
                body: 'Your chauffeur arrives at your exact Brooklyn address — DUMBO loft, Williamsburg brownstone, or Bay Ridge home. No walking to a corner, no shared pickups, no pin drops.',
              },
              {
                title: 'FBO Meet & Greet at TEB',
                body: 'On arrival transfers, your driver meets you in the FBO lobby at Signature Aviation, Atlantic Aviation, or Meridian with a name sign. You walk off the aircraft and into your waiting car.',
              },
              {
                title: 'Flat Rate — Confirmed at Booking',
                body: 'Your rate is locked the moment you book. Monday morning or Saturday midnight — the rate never changes due to demand, traffic, or time of day.',
              },
              {
                title: 'Professional TLC-Licensed Chauffeur',
                body: 'Every Eagle Eye driver holds a NYC TLC license. Your driver is a professional, not a gig-economy contractor, and knows every bridge and tunnel route from Brooklyn to Bergen County.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Business-class sedan or premium SUV — clean, well-maintained, and fully private. Select your vehicle class at booking based on your passenger count and luggage.',
              },
              {
                title: 'Driver Confirmed the Evening Before',
                body: 'You receive your chauffeur&apos;s name, vehicle details, and direct number before your travel day. No uncertainty, no last-minute assignment.',
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

      {/* ── BENEFITS CARDS ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            Why Choose Eagle Eye for Brooklyn to Teterboro
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Private aviation clients have zero tolerance for late arrivals. Eagle Eye Chauffeur
            is built around the reliability that TEB transfers demand.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'No Surge Pricing — Ever', body: 'Your flat rate is confirmed at booking and never increases — not at 4am, not on peak travel days, not due to bridge traffic.' },
              { title: 'Correct FBO Drop-Off', body: 'TEB has multiple FBOs. We confirm which one your aircraft operator uses and drop you at the right lobby — not the wrong building.' },
              { title: 'All Brooklyn Neighborhoods Covered', body: 'DUMBO, Williamsburg, Park Slope, Bay Ridge, Sheepshead Bay, Flatbush, Crown Heights — every Brooklyn neighborhood is served.' },
              { title: 'Early Morning Availability', body: 'Private jet departures often leave before 7am. Eagle Eye operates 24/7 and your driver is confirmed the night before, regardless of how early your jet departs.' },
              { title: 'Direct Communication', body: 'Private jet schedules change. If your departure shifts, contact your driver directly — there is no call center, no ticket queue, no app delay.' },
              { title: 'Luggage Assistance Included', body: 'Your chauffeur loads and unloads every bag at both your Brooklyn address and the TEB FBO. You do not lift anything unless you choose to.' },
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
            Brooklyn to Teterboro — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about Brooklyn to TEB private jet car service.
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
            Explore other Eagle Eye Chauffeur routes you may need.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/brooklyn-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Brooklyn to JFK</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Commercial flight transfers from Brooklyn
              </div>
            </Link>
            <Link
              href="/services/routes/manhattan-to-teterboro-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Manhattan to Teterboro</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                TEB transfers from all Manhattan neighborhoods
              </div>
            </Link>
            <Link
              href="/services/areas/teb-airport"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">All TEB Services</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Every Teterboro Airport route &amp; FBO
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-black text-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-white mb-4">
            Ready to Book Your Brooklyn to TEB Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. FBO meet &amp; greet. No surge. Your chauffeur at your Brooklyn door —
            confirmed the night before.
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
