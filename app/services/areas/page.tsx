import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: {
    absolute: 'NYC Black Car Service Areas | Boroughs, LI, NJ & CT | Eagle Eye',
  },
  description:
    'Eagle Eye Chauffeur serves NYC boroughs, Long Island, Westchester, NJ, Connecticut & the Hamptons. Flat-rate black car & airport transfers, 24/7.',
  keywords: siteKeywords,
  alternates: { canonical: `${getSiteUrl()}/services/areas` },
  openGraph: {
    ...ogDefaults,
    url: `${getSiteUrl()}/services/areas`,
    title: 'NYC Service Areas | Manhattan, Brooklyn & Beyond | Eagle Eye',
    description:
      'Eagle Eye Chauffeur serves all NYC boroughs, Long Island, Westchester, NJ & CT. Premium black car service, flat rates, 24/7 availability.',
  },
};

const boroughs = [
  { href: '/services/areas/manhattan', title: 'Manhattan', blurb: 'Midtown, Downtown, Upper East Side, Upper West Side, Financial District, SoHo, Tribeca, Harlem & more.' },
  { href: '/services/areas/brooklyn', title: 'Brooklyn', blurb: 'Williamsburg, DUMBO, Park Slope, Brooklyn Heights, Flatbush, Carroll Gardens & beyond.' },
  { href: '/services/areas/queens', title: 'Queens', blurb: 'Long Island City, Astoria, Flushing, Jackson Heights, Forest Hills, Jamaica & more.' },
  { href: '/services/areas/bronx', title: 'The Bronx', blurb: 'Riverdale, Fordham, Pelham Bay, Mott Haven, Soundview & beyond.' },
  { href: '/services/areas/staten-island', title: 'Staten Island', blurb: 'St. George, Great Kills, Tottenville, Stapleton, Snug Harbor & more.' },
];

const manhattanNeighborhoods = [
  { href: '/services/areas/midtown-manhattan', title: 'Midtown Manhattan', blurb: 'Corporate hub, Times Square, Rockefeller Center, Grand Central, Penn Station & Hudson Yards.' },
  { href: '/services/areas/financial-district', title: 'Financial District', blurb: 'Wall Street, NYSE, One World Trade, Fulton Center, South Street Seaport & Battery Park.' },
  { href: '/services/areas/upper-east-side', title: 'Upper East Side', blurb: 'Museum Mile, Park Avenue, Fifth Avenue, Lenox Hill, Yorkville & Carnegie Hill.' },
  { href: '/services/areas/upper-west-side', title: 'Upper West Side', blurb: 'Lincoln Center, Central Park West, Columbia University, Amsterdam Ave & Riverside Park.' },
  { href: '/services/areas/tribeca', title: 'Tribeca', blurb: 'Premium residential, Hudson Square, SoHo border, Battery Park access & private events.' },
  { href: '/services/areas/soho', title: 'SoHo', blurb: 'Luxury shopping, boutique hotels, NoLIta, Little Italy, Hudson Square & Lower East Side.' },
  { href: '/services/areas/chelsea', title: 'Chelsea', blurb: 'High Line, Chelsea Market, Hudson Yards, Meatpacking District & West Side galleries.' },
  { href: '/services/areas/hells-kitchen', title: "Hell's Kitchen", blurb: 'Theater District, Broadway, Javits Center, Columbus Circle, Penn Station & Times Square.' },
  { href: '/services/areas/greenwich-village', title: 'Greenwich Village', blurb: 'West Village, NYU, Washington Square Park, SoHo border & Meatpacking District.' },
  { href: '/services/areas/flatiron', title: 'Flatiron District', blurb: 'Madison Square Park, NoMad, Union Square, tech offices, MSG & Gramercy.' },
  { href: '/services/areas/battery-park-city', title: 'Battery Park City', blurb: 'Brookfield Place, World Trade Center, Hudson River, Liberty Street & Tribeca.' },
  { href: '/services/areas/lower-manhattan', title: 'Lower Manhattan', blurb: 'Financial District, Battery Park, City Hall, Chinatown, Brooklyn Bridge & Seaport.' },
  { href: '/services/areas/gramercy-park', title: 'Gramercy Park', blurb: 'Murray Hill, Kips Bay, Irving Place, Stuyvesant Town & Union Square.' },
  { href: '/services/areas/harlem', title: 'Harlem', blurb: 'Central Harlem, East Harlem, West Harlem, Apollo Theater, 125th Street & Hamilton Heights.' },
];

const surrounding = [
  { href: '/services/areas/long-island', title: 'Long Island', blurb: 'Nassau County, Suffolk County, Garden City, Great Neck, Huntington & all LI communities.' },
  { href: '/services/areas/westchester', title: 'Westchester County', blurb: 'White Plains, Yonkers, Scarsdale, Tarrytown, New Rochelle, Rye, Bronxville & more.' },
  { href: '/services/areas/new-jersey', title: 'New Jersey', blurb: 'Hoboken, Jersey City, Newark, Princeton, Morristown, Summit, Short Hills & beyond.' },
  { href: '/services/areas/connecticut', title: 'Connecticut', blurb: 'Greenwich, Stamford, Westport, Fairfield, New Haven, Hartford & surrounding CT.' },
  { href: '/services/areas/hamptons', title: 'The Hamptons', blurb: 'East Hampton, Southampton, Bridgehampton, Sag Harbor, Montauk, Quogue & all Hamptons.' },
  { href: '/services/areas/nassau-county', title: 'Nassau County', blurb: 'Garden City, Great Neck, Hempstead, Mineola, Rockville Centre, Manhasset & more.' },
  { href: '/services/areas/suffolk-county', title: 'Suffolk County', blurb: 'Huntington, Babylon, Brentwood, Bay Shore, Smithtown, Patchogue & beyond.' },
  { href: '/services/areas/upstate-ny', title: 'Upstate New York', blurb: 'Hudson Valley, Catskills, Albany, Poughkeepsie, Newburgh & upstate destinations.' },
];

const westchesterCities = [
  { href: '/services/areas/white-plains', title: 'White Plains', blurb: 'Westchester County seat, major corporate hub, close to HPN airport.' },
  { href: '/services/areas/yonkers', title: 'Yonkers', blurb: 'Largest Westchester city, south Westchester, close to NYC & LGA.' },
  { href: '/services/areas/scarsdale', title: 'Scarsdale', blurb: 'Affluent suburb, finance executives, HPN nearby, Metro-North alternative.' },
  { href: '/services/areas/new-rochelle', title: 'New Rochelle', blurb: 'Sound Shore waterfront, LGA via Whitestone, Iona University area.' },
];

const newJerseyCities = [
  { href: '/services/areas/hoboken', title: 'Hoboken', blurb: 'Waterfront community, Manhattan access, EWR 20–35 min.' },
  { href: '/services/areas/jersey-city', title: 'Jersey City', blurb: 'Newport/Exchange Place finance district, EWR nearby, Liberty State Park.' },
  { href: '/services/areas/newark-nj', title: 'Newark', blurb: 'Gateway to EWR, Broad Street corporate corridor, Prudential Center events.' },
  { href: '/services/areas/princeton-nj', title: 'Princeton', blurb: 'Princeton University, Route 1 pharma/biotech corridor, EWR primary airport.' },
  { href: '/services/areas/morristown-nj', title: 'Morristown', blurb: 'Morris County Fortune 500 HQs, Florham Park & Madison coverage.' },
  { href: '/services/areas/short-hills-nj', title: 'Short Hills', blurb: 'Millburn/Essex County, affluent suburb, EWR 20–30 min away.' },
  { href: '/services/areas/summit-nj', title: 'Summit', blurb: 'Union County, executive commuters, NJ Transit alternative, EWR 25 min.' },
];

const connecticutCities = [
  { href: '/services/areas/greenwich-ct', title: 'Greenwich, CT', blurb: 'Hedge funds, private equity, all 4 NYC airports, Back Country estates.' },
  { href: '/services/areas/stamford-ct', title: 'Stamford, CT', blurb: 'Major corporate hub (UBS, Charter), Merritt 7 corridor, JFK & LGA transfers.' },
  { href: '/services/areas/norwalk-ct', title: 'Norwalk, CT', blurb: 'SoNo waterfront, Merritt 7 corporate park, Westport-adjacent, I-95 corridor.' },
];

const longIslandCities = [
  { href: '/services/areas/garden-city', title: 'Garden City', blurb: 'Affluent Nassau village, Roosevelt Field, Adelphi University, close to LGA & JFK.' },
  { href: '/services/areas/great-neck', title: 'Great Neck', blurb: 'North Shore estates, LIRR Port Washington branch, minutes from LGA.' },
  { href: '/services/areas/manhasset', title: 'Manhasset', blurb: 'North Shore village, Miracle Mile shopping, Long Island Jewish Medical Center nearby.' },
  { href: '/services/areas/roslyn', title: 'Roslyn', blurb: 'North Shore village, Nassau County, close to Port Washington & LGA.' },
  { href: '/services/areas/port-washington', title: 'Port Washington', blurb: 'North Shore, LIRR branch terminus, Sands Point estates.' },
  { href: '/services/areas/hempstead', title: 'Hempstead', blurb: "Nassau County's largest village, Hofstra University, central Long Island hub." },
  { href: '/services/areas/mineola', title: 'Mineola', blurb: 'Nassau County seat, major LIRR hub, Winthrop Hospital.' },
  { href: '/services/areas/hicksville', title: 'Hicksville', blurb: 'Central Nassau, one of the busiest LIRR stations on Long Island.' },
  { href: '/services/areas/westbury', title: 'Westbury', blurb: 'Central Nassau, NYCB Theatre, close to Roosevelt Field & major highways.' },
  { href: '/services/areas/floral-park', title: 'Floral Park', blurb: 'Nassau/Queens border village, LIRR access, minutes from JFK.' },
  { href: '/services/areas/new-hyde-park', title: 'New Hyde Park', blurb: 'Queens border, Long Island Jewish Medical Center, close to JFK & LGA.' },
  { href: '/services/areas/elmont', title: 'Elmont', blurb: 'Home of Belmont Park & UBS Arena, Nassau/Queens border, closest LI town to JFK.' },
  { href: '/services/areas/valley-stream', title: 'Valley Stream', blurb: 'Nassau/Queens border community, minutes from JFK Airport.' },
  { href: '/services/areas/rockville-centre', title: 'Rockville Centre', blurb: 'South Shore Nassau village, Mercy Hospital, LIRR Babylon branch.' },
  { href: '/services/areas/freeport', title: 'Freeport', blurb: "South Shore, the Nautical Mile, Nassau County's waterfront dining district." },
  { href: '/services/areas/long-beach', title: 'Long Beach', blurb: 'Barrier island beach city, South Shore Nassau, LIRR direct to Manhattan.' },
  { href: '/services/areas/massapequa', title: 'Massapequa', blurb: 'South Shore Nassau, Sunrise Highway corridor, Bethpage State Park nearby.' },
  { href: '/services/areas/levittown', title: 'Levittown', blurb: 'Iconic Nassau County suburb, central Long Island, Hempstead Turnpike corridor.' },
  { href: '/services/areas/babylon', title: 'Babylon', blurb: 'South Shore Suffolk, LIRR Babylon branch terminus, close to Jones Beach & Robert Moses.' },
  { href: '/services/areas/bay-shore', title: 'Bay Shore', blurb: 'South Shore Suffolk, Fire Island ferry terminal, Southern State Parkway access.' },
  { href: '/services/areas/huntington', title: 'Huntington', blurb: 'North Shore Suffolk, Huntington Village & Cold Spring Harbor, LIE corridor.' },
  { href: '/services/areas/commack', title: 'Commack', blurb: 'Central Suffolk, Sunken Meadow & Northern State Parkway access.' },
  { href: '/services/areas/smithtown', title: 'Smithtown', blurb: 'Central Suffolk township, Long Island Expressway & Route 25 corridor.' },
  { href: '/services/areas/hauppauge', title: 'Hauppauge', blurb: "Long Island's largest industrial/business park, central Suffolk corporate hub." },
  { href: '/services/areas/ronkonkoma', title: 'Ronkonkoma', blurb: 'Long Island MacArthur Airport (ISP), major LIRR hub, central Suffolk.' },
  { href: '/services/areas/patchogue', title: 'Patchogue', blurb: 'South Shore Suffolk, Fire Island ferry access, revitalized downtown waterfront.' },
  { href: '/services/areas/hampton-bays', title: 'Hampton Bays', blurb: 'Gateway to the Hamptons, western Suffolk South Fork.' },
  { href: '/services/areas/westhampton-beach', title: 'Westhampton Beach', blurb: 'Western Hamptons gateway village, Suffolk County South Fork.' },
];

const airports = [
  { href: '/services/airport/jfk', title: 'JFK Airport Car Service', blurb: 'All terminals. Meet-and-greet, flight tracking, flat rates to all NYC neighborhoods.' },
  { href: '/services/airport/lga', title: 'LaGuardia (LGA) Car Service', blurb: 'Terminals B, C & D. Fastest airport to Manhattan — no surge on morning flights.' },
  { href: '/services/airport/ewr', title: 'Newark (EWR) Car Service', blurb: 'All tolls included. Flat rate from Manhattan, NJ, and Brooklyn to EWR.' },
  { href: '/services/airport/hpn', title: 'Westchester (HPN) Car Service', blurb: 'Commercial and private terminal. Westchester County Airport service.' },
  { href: '/services/areas/teb-airport', title: 'Teterboro (TEB) Car Service', blurb: 'Private aviation only. FBO lobby meet & greet at Signature, Atlantic & Meridian. 12 miles from Midtown.' },
];

export default function AreasIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: getSiteUrl() },
        { name: 'Services', url: `${getSiteUrl()}/services` },
        { name: 'Service Areas', url: `${getSiteUrl()}/services/areas` },
      ]} />

      <div className="bg-brand-offwhite">

        {/* Hero */}
        <section className="py-16 lg:py-24 bg-brand-black text-brand-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-4">
              NYC Black Car Service Areas
            </h1>
            <p className="text-lg text-brand-silver max-w-2xl leading-relaxed">
              Eagle Eye Chauffeur provides flat-rate black car service across New York City and the entire surrounding region — all five boroughs, Long Island, Westchester, New Jersey, Connecticut, and the Hamptons. Professional, licensed, 24/7.
            </p>
          </div>
        </section>

        {/* NYC Boroughs */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              New York City Boroughs
            </h2>
            <p className="text-brand-grey text-sm mb-8">All five boroughs served with flat-rate black car service, 24/7 availability.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {boroughs.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="block bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors group"
                >
                  <h3 className="font-serif text-xl font-semibold text-brand-black group-hover:underline mb-2">{a.title}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-brand-black">View service page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Manhattan Neighborhoods */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              Manhattan Neighborhoods
            </h2>
            <p className="text-brand-grey text-sm mb-8">Dedicated service pages for every major Manhattan neighborhood — corporate, residential, and event travel.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {manhattanNeighborhoods.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="block bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors group"
                >
                  <h3 className="font-semibold text-brand-black group-hover:underline mb-2 text-sm">{a.title}</h3>
                  <p className="text-xs text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-brand-black">View page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Airport Services */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              NYC Airport Black Car Service
            </h2>
            <p className="text-brand-grey text-sm mb-8">Dedicated pages for JFK, LaGuardia, Newark, and Westchester airports — meet-and-greet, flight tracking, flat rates.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {airports.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="block bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors group"
                >
                  <h3 className="font-semibold text-brand-black group-hover:underline mb-2">{a.title}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-black">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Surrounding Region */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">
              NYC &amp; Surrounding Region
            </h2>
            <p className="text-brand-grey text-sm mb-8">Long Island, Westchester, New Jersey, Connecticut, the Hamptons, and upstate New York. Same professional service, same flat rates.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {surrounding.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className="block bg-brand-white border border-brand-light p-6 hover:border-brand-dark transition-colors group"
                >
                  <h3 className="font-semibold text-brand-black group-hover:underline mb-2">{a.title}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-brand-black">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Westchester Cities */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Westchester Cities</h2>
            <p className="text-brand-grey text-sm mb-8">Dedicated pages for key Westchester communities — close to HPN airport, Metro-North corridor, and Manhattan.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {westchesterCities.map((a) => (
                <Link key={a.href} href={a.href} className="block bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors group">
                  <h3 className="font-semibold text-brand-black group-hover:underline mb-2 text-sm">{a.title}</h3>
                  <p className="text-xs text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-brand-black">View page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* New Jersey Cities */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">New Jersey Cities</h2>
            <p className="text-brand-grey text-sm mb-8">Flat-rate black car service from Hoboken to Princeton — airport transfers, corporate travel, and door-to-door rides.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {newJerseyCities.map((a) => (
                <Link key={a.href} href={a.href} className="block bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors group">
                  <h3 className="font-semibold text-brand-black group-hover:underline mb-2 text-sm">{a.title}</h3>
                  <p className="text-xs text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-brand-black">View page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Connecticut Cities */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Connecticut Cities</h2>
            <p className="text-brand-grey text-sm mb-8">Fairfield County communities with direct service to all NYC airports and Manhattan — flat rates, no surprise charges.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {connecticutCities.map((a) => (
                <Link key={a.href} href={a.href} className="block bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors group">
                  <h3 className="font-semibold text-brand-black group-hover:underline mb-2 text-sm">{a.title}</h3>
                  <p className="text-xs text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-brand-black">View page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Long Island Communities */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-2">Long Island Communities</h2>
            <p className="text-brand-grey text-sm mb-8">Dedicated pages for Nassau &amp; Suffolk County towns — flat-rate airport transfers and Manhattan car service.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {longIslandCities.map((a) => (
                <Link key={a.href} href={a.href} className="block bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors group">
                  <h3 className="font-semibold text-brand-black group-hover:underline mb-2 text-sm">{a.title}</h3>
                  <p className="text-xs text-brand-grey leading-relaxed">{a.blurb}</p>
                  <span className="mt-3 inline-block text-xs font-medium text-brand-black">View page →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Trust section */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-white border border-brand-light p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                Why Eagle Eye Chauffeur in Every Area
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Flat Rates, No Surge', desc: 'Your quoted price is locked at booking. Traffic, weather, and demand never change it — no matter the area.' },
                  { title: 'TLC Licensed & Insured', desc: 'Every vehicle and driver is licensed and fully insured. We operate as a professional black car service under NYC regulations.' },
                  { title: 'Driver Confirmed in Advance', desc: 'You receive your driver\'s name, photo, and vehicle details the evening before your trip — not minutes before pickup.' },
                  { title: '24/7 Availability', desc: 'Early morning JFK flights, late-night returns from the Hamptons — we operate around the clock, every day of the year.' },
                  { title: 'Door-to-Door Service', desc: 'Your chauffeur comes to your building entrance — hotel lobbies, co-ops, doorman buildings, and private residences.' },
                  { title: '24/7 Support', desc: 'Call or WhatsApp any time before, during, or after your ride. A real person answers.' },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="font-semibold text-brand-black mb-1 text-sm">{item.title}</h3>
                    <p className="text-brand-grey text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                Book Your Black Car — Any Area
              </h2>
              <p className="text-brand-silver mb-6">Flat rate. Professional chauffeur. No surge pricing — ever.</p>
              <Link href="/book" className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                Get an Instant Quote
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
