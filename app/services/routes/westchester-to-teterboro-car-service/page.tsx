import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Westchester to Teterboro Airport Car Service | TEB',
  description:
    'Westchester to Teterboro Airport (TEB) car service — White Plains, Scarsdale, Yonkers, New Rochelle & all Westchester. Flat-rate private jet.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/westchester-to-teterboro-car-service` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/westchester-to-teterboro-car-service`,
    title: 'Westchester to Teterboro Airport Car Service | TEB | Eagle Eye',
    description:
      'Westchester to Teterboro Airport (TEB) car service — White Plains, Scarsdale, Yonkers, New Rochelle & all Westchester. Flat-rate private jet.',
  },
};

const faqs = [
  {
    q: 'Should Westchester clients use Teterboro (TEB) or White Plains Airport (HPN)?',
    a: 'It depends on your aircraft and route. Westchester County Airport (HPN) is closer to White Plains and Scarsdale and handles smaller jets well. Teterboro Airport (TEB) offers larger ramp capacity, more FBO options — Signature Aviation, Atlantic Aviation, and Meridian — and is the preferred gateway for larger cabin jets, fractional ownership programs like NetJets and Flexjet, and transatlantic departures. Many Westchester-based private aviation clients use TEB for their primary travel and HPN for shorter regional hops. Eagle Eye Chauffeur serves both.',
  },
  {
    q: 'How long does it take from White Plains to Teterboro Airport (TEB)?',
    a: 'White Plains to TEB typically takes 20–35 minutes in normal traffic. The route runs south on I-87 (New York State Thruway) or via the Sprain Brook Parkway to the Cross County Parkway, crossing into New Jersey via the George Washington Bridge or the Tappan Zee Bridge depending on traffic. Scarsdale and Harrison are similar in time. Your chauffeur monitors live conditions and adjusts the crossing in real time.',
  },
  {
    q: 'Do you serve corporate Westchester executives for recurring TEB transfers?',
    a: 'Yes. Eagle Eye Chauffeur works with Westchester corporate clients on both one-off and recurring TEB transfers. Corporate accounts with regular travel patterns can be arranged with consistent vehicle assignments, consolidated billing, and a dedicated point of contact. If you or your company have recurring private aviation needs from Westchester to TEB, contact our team to discuss a corporate account.',
  },
  {
    q: 'What is the flat rate from Westchester to TEB?',
    a: 'All Eagle Eye Chauffeur rates are flat and confirmed at the time of booking — no surge pricing, no tolls added after the fact, no dynamic adjustments. Your rate is locked when you reserve. Different Westchester communities carry different flat rates based on distance and typical drive time; get an instant quote on our booking page by entering your exact Westchester address.',
  },
  {
    q: 'Can you pick me up very early from Westchester for a TEB departure?',
    a: 'Yes. Eagle Eye Chauffeur is available 24/7. Early morning private jet departures from TEB are well-handled from Westchester — the route is typically clear of significant congestion before 7am, making 4am and 5am Westchester pickups among the most straightforward transfers we operate. Your driver is confirmed the evening before with all details.',
  },
];

export default function WestchesterToTeterboroPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Westchester to Teterboro Airport Car Service', url: `${getSiteUrl()}/services/routes/westchester-to-teterboro-car-service` },
      ]} />
      <ServiceJsonLd
        name="Westchester to Teterboro Airport Car Service"
        description="Flat-rate black car service from Westchester County to Teterboro Airport (TEB). Serves White Plains, Scarsdale, Yonkers, New Rochelle, Harrison, Larchmont, Rye, and Bronxville. FBO meet & greet included. 24/7."
        areaServed="Westchester County, NY"
        url={`${getSiteUrl()}/services/routes/westchester-to-teterboro-car-service`}
      />

      {/* ── HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Private Jet Transfer</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Westchester to Teterboro Airport Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from White Plains, Scarsdale, Yonkers, New Rochelle,
            and every Westchester community to Teterboro Airport (TEB) — Bergen County&apos;s
            private aviation hub. TEB is the preferred gateway for Westchester&apos;s most
            frequent private aviation travelers. Door-to-door, FBO meet &amp; greet, 24/7.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['Flat Rate', 'FBO Meet & Greet', 'TEB or HPN', '24/7'].map((s) => (
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
            Westchester to Teterboro Airport — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Travel times are estimates under normal traffic via I-87, the Sprain Brook Parkway,
            and the George Washington Bridge or Tappan Zee crossing into New Jersey. Your chauffeur
            selects the optimal crossing on the day of travel based on live traffic.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Yonkers → Teterboro Airport (TEB)', time: '20–30 min' },
              { from: 'White Plains → Teterboro Airport (TEB)', time: '20–35 min' },
              { from: 'Scarsdale → Teterboro Airport (TEB)', time: '25–35 min' },
              { from: 'New Rochelle → Teterboro Airport (TEB)', time: '25–35 min' },
              { from: 'Harrison → Teterboro Airport (TEB)', time: '25–35 min' },
              { from: 'Bronxville → Teterboro Airport (TEB)', time: '25–35 min' },
              { from: 'Larchmont → Teterboro Airport (TEB)', time: '30–40 min' },
              { from: 'Rye → Teterboro Airport (TEB)', time: '30–40 min' },
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

      {/* ── TEB vs HPN ── */}
      <section className="bg-brand-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-2">
            TEB vs. HPN: Which Airport for Westchester Private Aviation?
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Westchester clients often have a choice between Teterboro (TEB) and White Plains
            Westchester County Airport (HPN). Here is how they differ.
          </p>
          <div className="space-y-5">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">TEB for larger jets and longer routes</strong> —
                Teterboro&apos;s longer runways and full private FBO facilities make it the standard
                gateway for large-cabin jets, heavy aircraft, and transatlantic-capable charters.
                Fractional ownership programs including NetJets, Flexjet, and VistaJet commonly position
                through TEB for Westchester-area clients. If your aircraft is a midsize, super-midsize,
                or large cabin jet, TEB is typically the assigned airport.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">HPN for light jets and regional charters</strong> —
                Westchester County Airport (HPN) is closer for White Plains and Scarsdale clients and
                handles light jets and turboprops efficiently. For regional hops and smaller aircraft,
                HPN is often more convenient — and Eagle Eye serves HPN as well.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Travel time advantage for TEB</strong> —
                Southern Westchester communities like Yonkers, Bronxville, and New Rochelle can reach
                TEB in 20–30 minutes — competitive with HPN and sometimes faster when GWB traffic
                is lighter than Hutchinson Parkway congestion on the way to White Plains.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Eagle Eye serves both</strong> — Whether your
                aircraft is at TEB or HPN, Eagle Eye Chauffeur provides the same flat-rate, FBO
                meet-and-greet service. Confirm your FBO when booking and we handle the rest.
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
            Every Westchester to TEB transfer includes the following as standard — not an upgrade,
            not an add-on. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Door-to-Door from Your Westchester Address',
                body: 'Pickup from your White Plains office, Scarsdale home, or New Rochelle residence — direct to the TEB FBO. No shared stops.',
              },
              {
                title: 'FBO Meet & Greet at TEB',
                body: 'On arrivals, your driver waits in the FBO lobby at Signature Aviation, Atlantic Aviation, or Meridian with a name sign. Walk off the jet and into your car.',
              },
              {
                title: 'Flat Rate — Confirmed at Booking',
                body: 'Your rate is locked when you book. Westchester rush hour and bridge traffic do not change the price you confirmed.',
              },
              {
                title: 'Professional TLC-Licensed Chauffeur',
                body: 'Every Eagle Eye driver holds a NYC TLC license and knows every Westchester route — I-87, Sprain Brook, Cross County, GWB — by heart.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Business-class sedan or premium SUV, always clean and well-maintained. The vehicle class that matches the standard of your private aviation experience.',
              },
              {
                title: 'Driver Confirmed the Evening Before',
                body: 'You receive your chauffeur&apos;s name, vehicle, and contact number the night before — not a last-minute assignment on the morning of travel.',
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
            Why Choose Eagle Eye for Westchester to Teterboro
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Westchester executives using private aviation need a transfer that matches the
            professionalism of their flight experience — from their front door to the FBO lobby.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Southern Westchester — Short Drive to TEB', body: 'Yonkers, Bronxville, and New Rochelle clients can reach TEB in 20–30 minutes — one of the fastest private airport connections in the region.' },
              { title: 'Corporate Account Available', body: 'Westchester executives with recurring TEB travel can arrange consolidated billing, consistent vehicle assignment, and a dedicated point of contact.' },
              { title: 'Serves Both TEB and HPN', body: 'Eagle Eye operates to Teterboro and White Plains Airport. Book whichever FBO your aircraft operator assigns — we cover both.' },
              { title: 'No Surge on GWB or Rush Hour', body: 'Your flat rate is confirmed at booking and never changes based on bridge traffic, GWB tolls, or time of day.' },
              { title: 'Early Morning Pickups — 24/7', body: 'Private jet departures before 7am are standard from Westchester. Your driver is confirmed the night before with full details.' },
              { title: 'Direct Driver Communication', body: 'If your jet time changes, reach your driver directly. No ticket queue, no app — the person answering is the person driving.' },
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
            Westchester to Teterboro — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about Westchester to TEB private jet car service.
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
            Explore other Eagle Eye Chauffeur routes for Westchester travelers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/lga-to-westchester-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">LGA to Westchester</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                LGA arrivals directly to Westchester
              </div>
            </Link>
            <Link
              href="/services/routes/nyc-to-westchester-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">NYC to Westchester</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Manhattan to Westchester County
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
            Ready to Book Your Westchester to TEB Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. FBO meet &amp; greet. White Plains to Yonkers — Eagle Eye covers
            every Westchester community to Teterboro Airport.
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
