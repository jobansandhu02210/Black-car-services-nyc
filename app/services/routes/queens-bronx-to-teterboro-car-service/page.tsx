import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Queens & Bronx to Teterboro Airport Car Service',
  description:
    'Queens and Bronx to Teterboro Airport (TEB) black car service — flat rate, FBO meet & greet, door-to-door private jet transfers. Eagle Eye Chauffeur 24/7.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/queens-bronx-to-teterboro-car-service` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/queens-bronx-to-teterboro-car-service`,
    title: 'Queens & Bronx to Teterboro Airport Car Service | Eagle Eye',
    description:
      'Queens and Bronx to Teterboro Airport (TEB) black car service — flat rate, FBO meet & greet, door-to-door private jet transfers. Eagle Eye.',
  },
};

const faqs = [
  {
    q: 'How long does it take from Queens to Teterboro Airport (TEB)?',
    a: 'From western Queens neighborhoods like Astoria and Long Island City, the drive to Teterboro Airport runs 25–35 minutes in normal traffic — a quick cross-borough run via the Lincoln Tunnel or George Washington Bridge. Flushing and Forest Hills typically add 10–20 minutes. Jamaica, Queens is furthest at 40–55 minutes via the Van Wyck Expressway and Lincoln Tunnel corridor. Your chauffeur monitors live traffic and selects the best routing on the day of your transfer.',
  },
  {
    q: 'What is the best route from the Bronx to Teterboro Airport?',
    a: 'From the Bronx, the fastest route to TEB typically runs west across the Cross Bronx Expressway and over the George Washington Bridge into New Jersey, then south on Route 17 to Teterboro. Riverdale — the westernmost neighborhood in the Bronx — is closest to the GWB, putting TEB just 20–30 minutes away under normal conditions. Fordham and Pelham Bay areas run 25–45 minutes. Your chauffeur adjusts the exact routing based on live GWB and Cross Bronx traffic.',
  },
  {
    q: 'Is the fare from Queens or the Bronx to TEB a flat rate?',
    a: 'Yes. All Eagle Eye Chauffeur rides are flat rate, confirmed at booking. Whether you are in Astoria or Jamaica, Riverdale or Pelham Bay, your rate is locked when you reserve. There is no surge pricing, no dynamic adjustments, and no post-trip additions based on traffic encountered. The price you confirm is the price you pay.',
  },
  {
    q: 'Do you offer early morning black car service from Queens and the Bronx to TEB?',
    a: 'Yes. Eagle Eye Chauffeur operates 24/7. Early morning private jet departures from TEB — common before 7am — are fully covered from Queens and the Bronx. Your driver is confirmed the evening before with name, vehicle, and contact details. Pre-dawn trips from Astoria, LIC, Riverdale, and Flushing are some of our most reliable runs — traffic at those hours is minimal.',
  },
  {
    q: 'Can I book a car from multiple Queens or Bronx addresses to TEB in one trip?',
    a: 'Yes. If members of your party are traveling from different addresses in Queens or the Bronx to TEB on the same flight, Eagle Eye Chauffeur can arrange a multi-stop pickup route in a single vehicle or dispatch separate vehicles. Multi-stop routing is easiest when addresses are geographically close. Contact us by phone, WhatsApp, or email to plan a multi-origin transfer — we will confirm the best approach based on your departure time and addresses.',
  },
];

export default function QueensBronxToTeterboroPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Queens & Bronx to Teterboro Airport Car Service', url: `${getSiteUrl()}/services/routes/queens-bronx-to-teterboro-car-service` },
      ]} />
      <ServiceJsonLd
        name="Queens and Bronx to Teterboro Airport Car Service"
        description="Flat-rate black car service from Queens and the Bronx to Teterboro Airport (TEB). FBO meet & greet at Signature Aviation, Atlantic Aviation, and Meridian. Door-to-door from Astoria, LIC, Flushing, Jamaica, Riverdale, Fordham, and Pelham Bay. 24/7."
        areaServed="Queens, Bronx, New York City, NY"
        url={`${getSiteUrl()}/services/routes/queens-bronx-to-teterboro-car-service`}
      />

      {/* ── HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Private Jet Transfer</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Queens &amp; Bronx to Teterboro Airport Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from Queens and the Bronx to Teterboro Airport (TEB) —
            the New York metro area&apos;s 100% private aviation hub in Bergen County, New Jersey.
            FBO meet &amp; greet at Signature Aviation, Atlantic Aviation, or Meridian. No surge
            pricing. Door-to-door, 24/7. Western Queens and Riverdale are among the closest
            NYC neighborhoods to TEB.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['Flat Rate', 'FBO Meet & Greet', 'Queens & Bronx', '24/7'].map((s) => (
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
            Queens &amp; Bronx to Teterboro Airport — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Travel times are estimates under normal traffic. Bronx routes typically use the George
            Washington Bridge; Queens routes use the Lincoln Tunnel or Queens-Midtown corridor.
            Your chauffeur selects the best crossing based on live conditions on the day of
            your transfer.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Riverdale (Bronx) → Teterboro Airport (TEB)', time: '20–30 min' },
              { from: 'Astoria (Queens) → Teterboro Airport (TEB)', time: '25–35 min' },
              { from: 'Long Island City (Queens) → Teterboro Airport (TEB)', time: '25–35 min' },
              { from: 'Fordham (Bronx) → Teterboro Airport (TEB)', time: '25–35 min' },
              { from: 'Forest Hills (Queens) → Teterboro Airport (TEB)', time: '35–50 min' },
              { from: 'Flushing (Queens) → Teterboro Airport (TEB)', time: '35–50 min' },
              { from: 'Pelham Bay (Bronx) → Teterboro Airport (TEB)', time: '30–45 min' },
              { from: 'Jamaica (Queens) → Teterboro Airport (TEB)', time: '40–55 min' },
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
            Why Queens and Bronx clients use TEB — and what to expect when you arrive.
          </p>
          <div className="space-y-5">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">100% private aviation</strong> — Teterboro
                Airport operates no commercial flights. Every aircraft at TEB is a private jet or
                charter. This means no TSA security screening, no gate areas, no baggage claim, and
                no crowds. If you are traveling on a private jet or charter flight, your aircraft
                is at TEB.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">FBO operators at TEB</strong> — Teterboro
                is served by Signature Aviation (North &amp; South), Atlantic Aviation, and Meridian.
                Your aircraft operator or charter company assigns the FBO. Eagle Eye Chauffeur confirms
                which FBO your flight is using and delivers you to the correct lobby — or meets you
                there on arrival with a name sign.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Riverdale and western Queens are closest</strong> —
                Among all New York City neighborhoods, Riverdale in the Bronx and Astoria and Long
                Island City in Queens sit closest to TEB. Riverdale&apos;s proximity to the George
                Washington Bridge makes TEB a 20–30 minute transfer — one of the shortest private
                airport connections from any NYC borough.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Coordinate your schedule directly</strong> —
                Private jet departure and arrival times are not published in public databases.
                Eagle Eye Chauffeur coordinates your pickup time directly with you. If your flight
                time changes, reach out to us and we adjust immediately — there is no app queue
                or call center.
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
            Every Queens and Bronx to TEB booking includes the following as standard — not an
            upgrade, not an add-on. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Door-to-Door from Your Queens or Bronx Address',
                body: 'Your chauffeur arrives at your exact address — Astoria apartment, Flushing home, Riverdale co-op, or Pelham Bay house — and drives you directly to TEB.',
              },
              {
                title: 'FBO Meet & Greet at TEB',
                body: 'On arrivals, your driver meets you in the FBO lobby at the correct Teterboro terminal with a name sign. You walk off the aircraft and into your waiting car.',
              },
              {
                title: 'Flat Rate — Confirmed at Booking',
                body: 'Your rate is locked when you book. GWB or Lincoln Tunnel delays, time of day, and demand never change the price you confirmed.',
              },
              {
                title: 'Professional TLC-Licensed Chauffeur',
                body: 'Every Eagle Eye driver holds a NYC TLC license. Queens and Bronx routes — including Cross Bronx, LIE, GWB, and Lincoln Tunnel — are standard for our team.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Business-class sedan or premium SUV, always clean and well-maintained. Select your vehicle class at booking based on passenger count and luggage.',
              },
              {
                title: 'Driver Confirmed the Evening Before',
                body: 'You receive your chauffeur&apos;s name, vehicle details, and direct number the night before. No last-minute assignment, no uncertainty on your travel morning.',
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
            Why Choose Eagle Eye for Queens &amp; Bronx to Teterboro
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Private aviation clients from Queens and the Bronx need a car service that understands
            TEB — the FBOs, the timing, and the standard. Eagle Eye delivers.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Riverdale — Closest Bronx Neighborhood to TEB', body: 'Riverdale sits minutes from the George Washington Bridge, making it one of the fastest NYC neighborhoods to reach TEB — often under 30 minutes.' },
              { title: 'Western Queens — Short Run to TEB', body: 'Astoria and Long Island City are close to both the Lincoln Tunnel and the Queensboro Bridge, keeping TEB 25–35 minutes away in normal traffic.' },
              { title: 'Correct FBO Confirmed in Advance', body: 'TEB has three FBO operators. We confirm which one your aircraft is using — Signature Aviation, Atlantic Aviation, or Meridian — before your travel day.' },
              { title: 'No Surge Pricing — Ever', body: 'Your flat rate is confirmed at booking and never changes. GWB tolls, tunnel delays, and peak demand have no effect on your confirmed price.' },
              { title: 'Early Morning 24/7 Availability', body: 'Private jets often depart before dawn. Queens and Bronx pickups at 4am and 5am are standard — driver confirmed the night before.' },
              { title: 'Multi-Stop and Group Coordination', body: 'Traveling with others from different Queens or Bronx addresses? We coordinate multi-stop pickups or parallel vehicles for group TEB transfers.' },
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
            Queens &amp; Bronx to Teterboro — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about Queens and Bronx to TEB private jet car service.
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
            Explore other Eagle Eye Chauffeur routes for Queens and Bronx travelers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/queens-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Queens to JFK</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Commercial flight transfers from Queens
              </div>
            </Link>
            <Link
              href="/services/routes/bronx-to-jfk-black-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Bronx to JFK</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Commercial flight transfers from the Bronx
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
            Ready to Book Your Queens or Bronx to TEB Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. FBO meet &amp; greet. Astoria to Riverdale — Eagle Eye covers all Queens
            and Bronx neighborhoods to Teterboro Airport.
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
            <a href={`tel:${CONTACT_PHONE_E164}`} className="underline hover:text-brand-black transition-colors">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
