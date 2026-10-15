import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  WHATSAPP_BOOKING_URL,
} from '@/lib/contact';
import {
  parseHamptonsSlug,
  isKeptHamptonsOrigin,
  getAllHamptonsRouteSlugs,
  getHamptonsDestinationSlugs,
  getRelatedHamptonsOrigins,
  hamptonOrigins,
  hamptonsDestinationName,
  hamptonsRouteSlug,
  buildHamptonsRouteMeta,
} from '@/lib/hamptons-routes-data';
import { ogDefaults } from '@/lib/og';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllHamptonsRouteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = parseHamptonsSlug(slug);
  // Removed (low-value) origins redirect, so don't emit metadata for them.
  if (!route || !isKeptHamptonsOrigin(route.originSlug)) return {};

  const { origin, destination } = route;
  const { title, description } = buildHamptonsRouteMeta(route);

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${origin.name} to ${destination.name} car service`,
      `${origin.name} to ${destination.name} chauffeur`,
      `${origin.name} to ${destination.name} Hamptons`,
      `${origin.name} Hamptons car service`,
      `${destination.name} car service from ${origin.name}`,
      `${destination.name} transportation from NYC`,
      `Hamptons car service ${origin.name}`,
      `${destination.name} chauffeur service`,
    ],
    alternates: { canonical: `${getSiteUrl()}/services/routes/${slug}` },
    openGraph: {
      ...ogDefaults,
      url: `${getSiteUrl()}/services/routes/${slug}`,
      title,
      description,
    },
  };
}

export default async function HamptonsRoutePage({ params }: Props) {
  const { slug } = await params;
  const route = parseHamptonsSlug(slug);

  if (!route) notFound();

  // Low-value origins we no longer publish (de-duplication): 308-redirect their old
  // URLs to the Hamptons hub so Google consolidates them instead of flagging them.
  if (!isKeptHamptonsOrigin(route.originSlug)) {
    permanentRedirect('/services/areas/hamptons');
  }

  const { origin, destination, driveTimeLabel } = route;
  const siteUrl = getSiteUrl();

  // Approximate driving distance (miles) from Manhattan to each Hamptons destination.
  const destMiles: Record<string, number> = {
    'southampton': 90,
    'east-hampton': 100,
    'sag-harbor': 100,
    'montauk': 120,
    'bridgehampton': 95,
    'water-mill': 92,
    'westhampton-beach': 80,
    'hampton-bays': 85,
    'amagansett': 105,
  };
  const miles = destMiles[route.destSlug];

  const faqs = [
    ...(miles
      ? [{
          q: `How far is ${destination.name} from New York City?`,
          a: `${destination.name} is approximately ${miles} miles from Manhattan, on the eastern end of Long Island — a drive of about ${driveTimeLabel}. The distance from other NYC pickup points varies slightly, and summer Friday and weekend traffic on the Long Island Expressway can extend the time considerably, which is why a flat-rate chauffeur that monitors live traffic is the most reliable option.`,
        }]
      : []),
    {
      q: `How long does it take to drive from ${origin.name} to ${destination.name}?`,
      a: `The drive from ${origin.name} to ${destination.name} typically takes ${driveTimeLabel} depending on traffic and time of day. Summer weekends and Friday afternoons can add significant time — your Eagle Eye chauffeur monitors live traffic and plans the optimal route and departure time.`,
    },
    {
      q: `How much does car service from ${origin.name} to ${destination.name} cost?`,
      a: `Eagle Eye Chauffeur uses flat-rate pricing confirmed at booking — no surge pricing, no hidden fees. Your fare is locked in before your driver arrives. For an exact quote, use our booking page and enter ${origin.name} as pickup and ${destination.name} as drop-off.`,
    },
    {
      q: `What is the best way to get from ${origin.name} to ${destination.name}?`,
      a: `For comfort and reliability, pre-booked private car service is the best option for the ${origin.name} to ${destination.name} trip. The Hamptons are not easily accessible by public transit, and rideshare surge pricing on summer weekends can be unpredictable. A flat-rate chauffeur locks in your price and provides door-to-door service from ${origin.name} directly to your ${destination.name} destination.`,
    },
    {
      q: `Do you offer round-trip service from ${origin.name} to ${destination.name}?`,
      a: `Yes. We offer both one-way and round-trip transfers. For round trips, you can book both legs at once — your return price is also flat-rate and confirmed at booking. Many guests book one-way out on a Friday and one-way return on a Sunday.`,
    },
    {
      q: `Can I book an early morning or late evening pickup from ${origin.name}?`,
      a: `Yes — Eagle Eye Chauffeur operates 24/7 at the same flat rate. Pre-dawn Friday departures from ${origin.name} to beat the Hamptons traffic are common. Your price does not change based on the time of day.`,
    },
    {
      q: `Do you serve multiple passengers and luggage from ${origin.name}?`,
      a: `Yes. Our Business Class SUVs accommodate up to 5 passengers with luggage, and First Class SUVs seat up to 7. For weekend Hamptons trips with bags, an SUV is recommended. Specify your passenger count and luggage needs when booking.`,
    },
    {
      q: `Is car service cheaper than the Hampton Jitney or the LIRR to ${destination.name}?`,
      a: `For a solo traveler packing light, the LIRR Montauk branch or the Hampton Jitney can be lower cost per seat — but both run on fixed schedules with stops, no door-to-door service, and no luggage help, and you still need a taxi at the ${destination.name} end. For couples, families, or groups with weekend bags, a flat-rate private chauffeur from ${origin.name} to your exact ${destination.name} address is usually the better value once you split the fare and count the time saved.`,
    },
    {
      q: `When should I leave ${origin.name} to avoid summer Hamptons traffic?`,
      a: `On summer Fridays, eastbound traffic toward ${destination.name} builds from early afternoon into the evening, so leaving before noon or after 9 PM makes a real difference. Sunday afternoons and holiday Mondays are the worst heading back west. Your Eagle Eye chauffeur watches live conditions and recommends a departure window when you book.`,
    },
    {
      q: `Can the driver make stops on the way to ${destination.name}?`,
      a: `Yes. Many guests add a stop on the ${origin.name} to ${destination.name} run — a farm stand, a North or South Fork winery, lunch, or a grocery run before check-in. Let us know when booking and we will build it into your itinerary at the same transparent flat rate.`,
    },
  ];

  // Link to EVERY other destination from this pickup area (not just a slice) so no route page is orphaned.
  const relatedDests = getHamptonsDestinationSlugs().filter((d) => d !== route.destSlug);
  const relatedOrigins = getRelatedHamptonsOrigins(route.originSlug);

  return (
    <>
      <ServiceJsonLd
        name={`${origin.name} to ${destination.name} Car Service`}
        description={`Flat-rate luxury car service from ${origin.name} to ${destination.name}. Professional chauffeur, door-to-door, no surge pricing. Drive time ${driveTimeLabel}.`}
        areaServed={`${origin.borough}, New York`}
        url={`${siteUrl}/services/routes/${slug}`}
      />
      <FaqJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: siteUrl },
          { name: 'Routes', url: `${siteUrl}/services/routes` },
          { name: `${origin.name} to ${destination.name}`, url: `${siteUrl}/services/routes/${slug}` },
        ]}
      />

      {/* HERO */}
      <section className="bg-brand-black text-brand-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-4">
            {origin.borough} · Hamptons Car Service · Eagle Eye Chauffeur
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl mb-5">
            {origin.name} to {destination.name} Car Service
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl leading-relaxed mb-4">
            Flat-rate luxury chauffeur from {origin.description} directly to {destination.name}. No surge pricing — your fare is confirmed at booking.
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-brand-silver mb-10">
            <span>⏱ {driveTimeLabel} drive</span>
            <span>💰 Flat rate — locked at booking</span>
            <span>🚪 Door-to-door pickup</span>
            <span>🧳 Luggage assistance</span>
            <span>24/7 availability</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors text-center"
            >
              Get Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors text-center"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${CONTACT_PHONE_E164}`}
              className="inline-block border border-brand-dark text-brand-silver font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-silver transition-colors text-center"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ROUTE DETAILS */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Origin */}
            <div className="border border-brand-light bg-brand-offwhite p-8">
              <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-3">Pickup</p>
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">{origin.name}</h2>
              <p className="text-brand-grey leading-relaxed text-sm mb-4">{origin.description}. Your Eagle Eye chauffeur picks you up at your exact address — home, hotel, or office.</p>
              <div className="text-sm text-brand-grey space-y-1">
                <div className="flex gap-3"><span className="text-brand-silver w-20 shrink-0">Borough</span><span>{origin.borough}</span></div>
                <div className="flex gap-3"><span className="text-brand-silver w-20 shrink-0">Pickup</span><span>Door-to-door at your address</span></div>
                <div className="flex gap-3"><span className="text-brand-silver w-20 shrink-0">Vehicle</span><span>Sedan or SUV — your choice</span></div>
              </div>
            </div>

            {/* Destination */}
            <div className="border border-brand-light bg-brand-offwhite p-8">
              <p className="text-brand-silver text-xs tracking-widest uppercase font-medium mb-3">Destination</p>
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">{destination.name}</h2>
              <p className="text-brand-grey leading-relaxed text-sm mb-4">{destination.description}</p>
              <div className="text-sm text-brand-grey space-y-1">
                <div className="flex gap-3"><span className="text-brand-silver w-20 shrink-0">Drive time</span><span>{driveTimeLabel} from {origin.name}</span></div>
                {miles && <div className="flex gap-3"><span className="text-brand-silver w-20 shrink-0">Distance</span><span>≈{miles} miles from Manhattan</span></div>}
                <div className="flex gap-3"><span className="text-brand-silver w-20 shrink-0">Known for</span><span>{destination.knownFor}</span></div>
                <div className="flex gap-3"><span className="text-brand-silver w-20 shrink-0">Drop-off</span><span>Exact address, estate, or hotel</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY EAGLE EYE */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-10 text-center">
            Why Choose Eagle Eye for the {origin.name} to {destination.name} Run
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Flat Rate — No Surge',
                body: `Your ${origin.name} to ${destination.name} fare is locked at booking. Friday afternoon, summer weekend, holiday weekend — the price never changes based on demand.`,
              },
              {
                title: 'Door-to-Door from ' + origin.name,
                body: `Pickup at your exact ${origin.name} address — no walking to a pickup zone, no rideshare hunting. Your chauffeur is at your door at the scheduled time.`,
              },
              {
                title: 'Traffic-Smart Routing',
                body: `The ${origin.name} to ${destination.name} route can vary significantly by traffic. Your driver monitors live conditions and selects the fastest route — LIE, Sunrise Highway, or Southern State.`,
              },
              {
                title: 'Luggage & Weekend Bags',
                body: 'Heading to the Hamptons for the weekend? Our SUVs have plenty of room for luggage, beach gear, and groceries. Your chauffeur assists with loading and unloading.',
              },
              {
                title: 'TLC Licensed & Insured',
                body: 'Every Eagle Eye chauffeur holds a valid NYC TLC license and commercial insurance. Professional, uniformed, and trained for executive and residential clients.',
              },
              {
                title: 'Round-Trip Available',
                body: `Book your ${origin.name} outbound and ${destination.name} return in one transaction. Both legs are flat-rate and confirmed — no renegotiating on Sunday evening.`,
              },
            ].map((item) => (
              <div key={item.title} className="bg-brand-white border border-brand-light p-6">
                <h3 className="font-semibold text-brand-black mb-2">{item.title}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DESTINATION */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold mb-8">About {destination.name}</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="font-semibold text-brand-silver uppercase tracking-widest text-xs mb-4">Beaches</h3>
              <ul className="space-y-2">
                {destination.beaches.map((b) => (
                  <li key={b} className="text-brand-silver text-sm border-b border-brand-charcoal pb-2">{b}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-silver uppercase tracking-widest text-xs mb-4">Key Areas</h3>
              <ul className="space-y-2">
                {destination.areas.map((a) => (
                  <li key={a} className="text-brand-silver text-sm border-b border-brand-charcoal pb-2">{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-silver uppercase tracking-widest text-xs mb-4">Where Guests Stay</h3>
              <ul className="space-y-2">
                {destination.hotels.map((h) => (
                  <li key={h} className="text-brand-silver text-sm border-b border-brand-charcoal pb-2">{h}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-charcoal pt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-brand-silver text-xs uppercase tracking-widest font-semibold mb-2">Main Road</p>
              <p className="text-brand-silver text-sm">{destination.mainRoad}</p>
            </div>
            <div>
              <p className="text-brand-silver text-xs uppercase tracking-widest font-semibold mb-2">Traffic & Timing Tip</p>
              <p className="text-brand-silver text-sm">{destination.drivingTip}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PICKUP FROM ORIGIN */}
      <section className="bg-brand-offwhite py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold text-brand-black mb-4">
            Getting Picked Up in {origin.name}
          </h2>
          <p className="text-brand-grey text-sm max-w-2xl mb-8 leading-relaxed">{origin.pickupNotes}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {origin.landmarks.map((lm) => (
              <div key={lm} className="bg-brand-white border border-brand-light px-4 py-3 text-sm text-brand-black flex gap-2">
                <span className="text-brand-charcoal shrink-0">→</span>
                <span>{lm}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DRIVE */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-6">
            The Drive: {origin.name} to {destination.name}
          </h2>
          <div className="space-y-4 text-brand-grey text-sm leading-relaxed">
            <p>
              {origin.name} to {destination.name} is {miles ? `approximately ${miles} miles` : 'a straight run east across Long Island'} — about {driveTimeLabel} in normal conditions. From {origin.name}, your chauffeur heads east across Long Island, typically via the Long Island Expressway (LIE) or the Southern State Parkway before joining Sunrise Highway (Route 27), the main artery to the East End. Your driver picks the fastest combination based on live traffic that day.
            </p>
            <p>
              The final approach into {destination.name} runs along {destination.mainRoad}. {destination.drivingTip}
            </p>
            <p>
              Timing is everything on this route. Summer Friday afternoons and holiday weekends can add well over an hour eastbound, and Sunday evenings back it up heading west. Because your fare is a flat rate locked at booking, that traffic never changes your price — your chauffeur simply plans the departure window and route to keep the {origin.name} to {destination.name} trip as smooth as possible.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-brand-offwhite py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black mb-3 text-center">
            Ways to Get from {origin.name} to {destination.name}
          </h2>
          <p className="text-brand-grey text-sm text-center max-w-2xl mx-auto mb-10">
            How a private chauffeur compares to the other common ways to reach {destination.name} from the {origin.borough} area.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Private Chauffeur', best: true, body: `Door-to-door from your exact ${origin.name} address to your ${destination.name} destination. Flat rate, luggage assistance, your own schedule, and live traffic routing the whole way.` },
              { title: 'LIRR (Montauk Branch)', best: false, body: `Station-to-station on the Montauk line, often with a change at Jamaica or Babylon. Lower per-seat cost, but no door-to-door service, limited luggage room, and a taxi still needed at the ${destination.name} end.` },
              { title: 'Hampton Jitney', best: false, body: `A comfortable coach with fixed stops and a set schedule. Fine for a solo traveler packing light, but you are tied to departure times and drop points rather than your own door.` },
              { title: 'Rideshare (Uber / Lyft)', best: false, body: `Possible but unpredictable for a ${miles ? `${miles}-mile` : 'long East End'} trip — summer surge pricing spikes the fare and long-haul drivers can be hard to find on peak weekends.` },
            ].map((o) => (
              <div key={o.title} className={`border p-6 ${o.best ? 'bg-brand-black text-brand-white border-brand-black' : 'bg-brand-white border-brand-light'}`}>
                <h3 className={`font-semibold mb-2 ${o.best ? 'text-brand-white' : 'text-brand-black'}`}>{o.title}{o.best ? ' ✓' : ''}</h3>
                <p className={`text-sm leading-relaxed ${o.best ? 'text-brand-silver' : 'text-brand-grey'}`}>{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-brand-black text-center mb-12">
            {origin.name} to {destination.name} — FAQ
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-brand-light pb-8">
                <h3 className="font-semibold text-brand-black mb-3">{faq.q}</h3>
                <p className="text-brand-grey text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER DESTINATIONS */}
      {relatedDests.length > 0 && (
        <section className="bg-brand-offwhite py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              More Hamptons Routes from {origin.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedDests.map((dest) => (
                <Link
                  key={dest}
                  href={`/services/routes/${hamptonsRouteSlug(route.originSlug, dest)}`}
                  className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors group text-sm"
                >
                  <span className="font-medium text-brand-black group-hover:underline">
                    {origin.name} → {hamptonsDestinationName(dest)}
                  </span>
                </Link>
              ))}
            </div>
            {relatedOrigins.length > 0 && (
              <>
                <h2 className="font-serif text-2xl font-semibold text-brand-black mt-12 mb-6">
                  Other Pickup Areas to {destination.name}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {relatedOrigins.map((o) => (
                    <Link
                      key={o}
                      href={`/services/routes/${hamptonsRouteSlug(o, route.destSlug)}`}
                      className="bg-brand-white border border-brand-light p-4 hover:border-brand-dark transition-colors group text-sm"
                    >
                      <span className="font-medium text-brand-black group-hover:underline">
                        {hamptonOrigins[o].name} → {destination.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
            <div className="mt-4">
              <Link href="/services/areas/hamptons" className="text-sm text-brand-grey hover:text-brand-black underline">
                All Hamptons car service routes
              </Link>
            </div>
            <div className="mt-4">
              <Link href="/services/routes" className="text-sm text-brand-grey hover:text-brand-black underline">
                ← All Eagle Eye Chauffeur routes
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-brand-black text-brand-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-4">
            Book {origin.name} to {destination.name} Now
          </h2>
          <p className="text-brand-silver mb-8 leading-relaxed">
            Flat rate · Door-to-door · {driveTimeLabel} · No surge pricing · 24/7 available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-block bg-brand-white text-brand-black font-semibold px-8 py-4 text-sm tracking-wide hover:bg-brand-offwhite transition-colors"
            >
              Get Instant Quote
            </Link>
            <a
              href={WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-silver text-brand-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-brand-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
