import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { WHATSAPP_BOOKING_URL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164, CONTACT_EMAIL_BOOKINGS } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Long Island to Teterboro Airport Car Service | TEB',
  description:
    'Long Island to Teterboro Airport (TEB) car service — Garden City, Great Neck, Huntington, Hamptons & all LI communities. Flat-rate private jet.',
  alternates: { canonical: `${getSiteUrl()}/services/routes/long-island-to-teterboro-car-service` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/routes/long-island-to-teterboro-car-service`,
    title: 'Long Island to Teterboro Airport Car Service | TEB | Eagle Eye',
    description:
      'Long Island to Teterboro Airport (TEB) car service — Garden City, Great Neck, Huntington, Hamptons & all LI communities. Flat-rate private jet.',
  },
};

const faqs = [
  {
    q: 'How long does it take to get from Long Island to Teterboro Airport (TEB)?',
    a: 'Travel time from Long Island to TEB varies significantly by origin. Nassau County communities like Garden City and Great Neck typically take 45–60 minutes. Mid-Suffolk areas such as Huntington or Smithtown run 55–75 minutes. The Hamptons and East End require 90–120 minutes or more depending on the season. Your chauffeur monitors live traffic and departs your Long Island address with enough buffer built in to ensure you arrive well ahead of your jet.',
  },
  {
    q: 'Do Hamptons clients use Teterboro Airport for private jets?',
    a: 'Yes — many Hamptons-based private aviation clients use TEB for flights departing toward the Northeast corridor, the Caribbean, and Europe. While East Hampton Airport (HTO) handles some local charter traffic, TEB offers a broader range of FBO facilities, longer runways suited to larger jets, and direct access to the full private aviation network. The 90–120 minute drive from the Hamptons to TEB is standard for clients taking long-haul charter or fractional-ownership flights.',
  },
  {
    q: 'Is there a flat rate from different Long Island communities to TEB?',
    a: 'Yes. All Eagle Eye Chauffeur rates are flat and confirmed at the time of booking. Whether you are in Garden City or East Hampton, your rate is locked when you reserve — no surge pricing, no post-trip additions, no dynamic fees based on traffic encountered en route. Different Long Island communities carry different flat rates based on distance and typical travel time; get an instant quote on our booking page.',
  },
  {
    q: 'Can you pick me up from Long Island very early for a private jet departure?',
    a: 'Yes. Eagle Eye Chauffeur is available 24/7. Long Island clients frequently book 4am and 5am pickups for early TEB departures. Your driver is confirmed the evening before with name, vehicle, and contact details. On the morning of travel, your chauffeur departs with ample time built in for LIE or Northern State traffic, even at early hours.',
  },
  {
    q: 'Can a group from Long Island travel together to TEB in one vehicle?',
    a: 'Yes. Eagle Eye Chauffeur offers luxury SUVs that comfortably accommodate up to 6 passengers with luggage, and we can arrange multiple vehicles for larger groups. If your party is traveling from the same Long Island address to TEB, we will coordinate a single vehicle or a multi-vehicle dispatch based on your group size and bag count. Contact us by phone, WhatsApp, or email to arrange group travel.',
  },
];

export default function LongIslandToTeterboroPage() {
  return (
    <>
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Routes', url: `${getSiteUrl()}/services/routes` },
        { name: 'Long Island to Teterboro Airport Car Service', url: `${getSiteUrl()}/services/routes/long-island-to-teterboro-car-service` },
      ]} />
      <ServiceJsonLd
        name="Long Island to Teterboro Airport Car Service"
        description="Flat-rate black car service from Long Island to Teterboro Airport (TEB). FBO meet & greet at Signature Aviation, Atlantic Aviation, and Meridian. Serves Nassau County, Suffolk County, and the Hamptons. 24/7."
        areaServed="Long Island, Nassau County, Suffolk County, NY"
        url={`${getSiteUrl()}/services/routes/long-island-to-teterboro-car-service`}
      />

      {/* ── HERO ── */}
      <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-sm uppercase tracking-widest mb-3">Private Jet Transfer</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-semibold mb-4">
            Long Island to Teterboro Airport Car Service
          </h1>
          <p className="text-lg text-brand-silver max-w-2xl mb-8">
            Flat-rate black car service from Garden City, Great Neck, Huntington, the Hamptons,
            and every Long Island community to Teterboro Airport (TEB) — the New York metro
            area&apos;s premier private aviation hub. FBO meet &amp; greet included. No surge
            pricing. Door-to-door from your Long Island address, 24/7.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {['Flat Rate', 'FBO Meet & Greet', 'Hamptons Covered', '24/7'].map((s) => (
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
            Long Island to Teterboro Airport — Routes &amp; Travel Times
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Travel times are estimates under normal conditions via the LIE, Northern State Parkway,
            and Queens Midtown or Lincoln Tunnel depending on origin. Summer Hamptons traffic and
            Friday LIE congestion can add 20–45 minutes. All pickups depart with buffer time built in.
          </p>
          <div className="space-y-3">
            {[
              { from: 'Manhasset → Teterboro Airport (TEB)', time: '40–55 min' },
              { from: 'Garden City → Teterboro Airport (TEB)', time: '45–60 min' },
              { from: 'Great Neck → Teterboro Airport (TEB)', time: '45–60 min' },
              { from: 'Hempstead → Teterboro Airport (TEB)', time: '50–65 min' },
              { from: 'Massapequa → Teterboro Airport (TEB)', time: '55–70 min' },
              { from: 'Huntington → Teterboro Airport (TEB)', time: '55–70 min' },
              { from: 'Smithtown → Teterboro Airport (TEB)', time: '65–80 min' },
              { from: 'East Hampton (Hamptons) → Teterboro Airport (TEB)', time: '90–120 min' },
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
            Why Long Island Private Aviation Clients Choose TEB
          </h2>
          <p className="text-brand-grey mb-8 max-w-2xl">
            Teterboro Airport is the preferred private jet gateway for Long Island&apos;s most
            frequent flyers. Here is why.
          </p>
          <div className="space-y-5">
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">No commercial traffic</strong> — TEB handles
                zero commercial flights. Every aircraft is private. The experience of arriving at
                TEB and walking directly from a premium FBO lobby into your waiting car — with no
                TSA, no gates, no baggage claim — is why private aviation clients use it over JFK
                or LGA for their charter and fractional ownership flights.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Multiple FBO options</strong> — TEB is served
                by Signature Aviation (North &amp; South), Atlantic Aviation, and Meridian. Your
                FBO is assigned by your aircraft operator. Eagle Eye Chauffeur confirms which FBO
                your jet is using and delivers you — or meets you — at the correct lobby.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Long Island to TEB via the LIE</strong> —
                The Long Island Expressway connects Nassau and Suffolk County directly into Queens
                and then through the Midtown Tunnel or Queens-Midtown corridor toward the Lincoln
                Tunnel into New Jersey. Your chauffeur selects the best routing based on live
                traffic on the day of your journey.
              </p>
            </div>
            <div>
              <p className="text-brand-grey text-sm leading-relaxed">
                <strong className="text-brand-black">Hamptons clients and off-season TEB access</strong> —
                While East Hampton Airport serves local prop charters, clients using midsize or large
                cabin jets — NetJets, Flexjet, VistaJet, or one-off charter — typically position
                through TEB. The 90–120 minute drive from the Hamptons to TEB is consistent and
                well-established for Long Island&apos;s private aviation community.
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
            Every Long Island to TEB transfer includes the following as standard — not an upgrade,
            not an add-on. All included in your flat rate.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Door-to-Door from Your Long Island Address',
                body: 'Pickup from your home in Garden City, Great Neck, Huntington, or the Hamptons — direct to TEB. No shared stops, no detours.',
              },
              {
                title: 'FBO Meet & Greet at TEB',
                body: 'On arrivals, your driver meets you in the FBO lobby with a name sign. You step off the aircraft and into your vehicle without a moment&apos;s delay.',
              },
              {
                title: 'Flat Rate — Confirmed at Booking',
                body: 'Your rate is locked when you book. Summer Hamptons pricing, Friday traffic, and early morning surcharges do not apply here.',
              },
              {
                title: 'Professional TLC-Licensed Chauffeur',
                body: 'Every Eagle Eye driver is TLC licensed and trained to a professional standard. Long Island routes — particularly LIE and Northern State — are well-known to our team.',
              },
              {
                title: 'Luxury Sedan or SUV',
                body: 'Premium black sedan or SUV — clean, maintained, and fully private. Select your vehicle at booking based on passenger count and luggage.',
              },
              {
                title: '24/7 Availability',
                body: 'Early morning TEB departures are standard. Your driver is confirmed the evening before regardless of pickup time — 4am, 5am, or 6am.',
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
            Why Choose Eagle Eye for Long Island to Teterboro
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Long Island private aviation clients need a service that matches the standard of their
            aircraft. Eagle Eye delivers that from your front door to the FBO lobby.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'All Long Island Communities Covered', body: 'Nassau County, Suffolk County, North Shore, South Shore, and the Hamptons — every Long Island origin is served.' },
              { title: 'Correct FBO Confirmed in Advance', body: 'TEB has multiple FBOs. We confirm Signature Aviation, Atlantic Aviation, or Meridian with you before departure day.' },
              { title: 'No Surge on Hamptons Routes', body: 'Your flat rate is confirmed at booking and does not increase for summer Hamptons travel or holiday weekend traffic.' },
              { title: 'Early Morning Pickups — No Exception', body: 'Private jets often depart before 7am. Eagle Eye operates around the clock with full confirmation the evening before.' },
              { title: 'Direct Driver Communication', body: 'Private jet schedules shift. If your departure changes, you reach your driver directly — not a call center.' },
              { title: 'Luggage Assistance at Both Ends', body: 'Your chauffeur handles bags at your Long Island address and at the TEB FBO. No lifting required on your part.' },
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
            Long Island to Teterboro — FAQ
          </h2>
          <p className="text-brand-grey mb-10 max-w-2xl">
            Common questions about Long Island to TEB private jet car service.
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
            Explore other Eagle Eye Chauffeur services for Long Island travelers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/services/routes/jfk-to-long-island-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">JFK to Long Island</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Commercial arrivals to Long Island
              </div>
            </Link>
            <Link
              href="/services/routes/manhattan-to-hamptons-car-service"
              className="bg-brand-offwhite border border-brand-light p-6 hover:border-brand-dark transition-colors"
            >
              <div className="font-semibold text-brand-black">Manhattan to Hamptons</div>
              <div className="text-sm text-brand-grey mt-2 leading-relaxed">
                Hamptons car service from NYC
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
            Ready to Book Your Long Island to TEB Transfer?
          </h2>
          <p className="text-brand-silver text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Flat rate. FBO meet &amp; greet. Nassau County to the Hamptons —
            Eagle Eye covers every Long Island community to Teterboro Airport.
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
