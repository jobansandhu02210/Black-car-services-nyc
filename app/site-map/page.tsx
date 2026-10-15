import type { Metadata } from 'next';
import Link from 'next/link';
import { getSiteUrl } from '@/lib/site';
import { blogPosts } from '@/lib/blog-data';
import { ogDefaults } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Sitemap | Eagle Eye Chauffeur NYC',
  description: 'Full sitemap for Eagle Eye Chauffeur — NYC black car service, airport transfers, service areas, routes, and blog.',
  alternates: { canonical: `${getSiteUrl()}/site-map` },
  openGraph: { ...ogDefaults, url: `${getSiteUrl()}/site-map` },
  robots: { index: true, follow: true },
};

const airports = [
  { label: 'JFK Airport Car Service', href: '/services/airport/jfk' },
  { label: 'LaGuardia (LGA) Car Service', href: '/services/airport/lga' },
  { label: 'Newark (EWR) Car Service', href: '/services/airport/ewr' },
  { label: 'Westchester (HPN) Car Service', href: '/services/airport/hpn' },
  { label: 'Teterboro (TEB) Car Service', href: '/services/areas/teb-airport' },
];

const services = [
  { label: 'Point-to-Point Car Service', href: '/services/point-to-point' },
  { label: 'Hourly Chauffeur Hire', href: '/services/hourly' },
  { label: 'Airport Transfers', href: '/services/airport' },
  { label: 'Corporate Car Service', href: '/services/corporate' },
  { label: 'Special Events', href: '/services/special-events' },
  { label: 'Black Car Service NYC', href: '/black-car-service-nyc' },
  { label: 'NYC Car Service Pricing', href: '/pricing' },
];

const areas = [
  // Boroughs & regions
  { label: 'Manhattan', href: '/services/areas/manhattan' },
  { label: 'Brooklyn', href: '/services/areas/brooklyn' },
  { label: 'Queens', href: '/services/areas/queens' },
  { label: 'Bronx', href: '/services/areas/bronx' },
  { label: 'Staten Island', href: '/services/areas/staten-island' },
  { label: 'Long Island', href: '/services/areas/long-island' },
  { label: 'Nassau County', href: '/services/areas/nassau-county' },
  { label: 'Suffolk County', href: '/services/areas/suffolk-county' },
  { label: 'Westchester', href: '/services/areas/westchester' },
  { label: 'Hamptons', href: '/services/areas/hamptons' },
  { label: 'New Jersey', href: '/services/areas/new-jersey' },
  { label: 'Connecticut', href: '/services/areas/connecticut' },
  { label: 'Upstate NY', href: '/services/areas/upstate-ny' },
  // Manhattan neighborhoods
  { label: 'Midtown Manhattan', href: '/services/areas/midtown-manhattan' },
  { label: 'Upper East Side', href: '/services/areas/upper-east-side' },
  { label: 'Upper West Side', href: '/services/areas/upper-west-side' },
  { label: 'Financial District', href: '/services/areas/financial-district' },
  { label: 'SoHo', href: '/services/areas/soho' },
  { label: 'Tribeca', href: '/services/areas/tribeca' },
  { label: 'Chelsea', href: '/services/areas/chelsea' },
  { label: "Hell's Kitchen", href: '/services/areas/hells-kitchen' },
  { label: 'Greenwich Village', href: '/services/areas/greenwich-village' },
  { label: 'Flatiron', href: '/services/areas/flatiron' },
  { label: 'Lower Manhattan', href: '/services/areas/lower-manhattan' },
  { label: 'Battery Park City', href: '/services/areas/battery-park-city' },
  { label: 'Gramercy Park', href: '/services/areas/gramercy-park' },
  { label: 'Harlem', href: '/services/areas/harlem' },
  // Nassau County
  { label: 'Garden City', href: '/services/areas/garden-city' },
  { label: 'Great Neck', href: '/services/areas/great-neck' },
  { label: 'New Hyde Park', href: '/services/areas/new-hyde-park' },
  { label: 'Manhasset', href: '/services/areas/manhasset' },
  { label: 'Roslyn', href: '/services/areas/roslyn' },
  { label: 'Port Washington', href: '/services/areas/port-washington' },
  { label: 'Mineola', href: '/services/areas/mineola' },
  { label: 'Hicksville', href: '/services/areas/hicksville' },
  { label: 'Westbury', href: '/services/areas/westbury' },
  { label: 'Hempstead', href: '/services/areas/hempstead' },
  { label: 'Levittown', href: '/services/areas/levittown' },
  { label: 'Massapequa', href: '/services/areas/massapequa' },
  { label: 'Freeport', href: '/services/areas/freeport' },
  { label: 'Rockville Centre', href: '/services/areas/rockville-centre' },
  { label: 'Long Beach', href: '/services/areas/long-beach' },
  { label: 'Valley Stream', href: '/services/areas/valley-stream' },
  { label: 'Elmont', href: '/services/areas/elmont' },
  { label: 'Floral Park', href: '/services/areas/floral-park' },
  // Suffolk County
  { label: 'Huntington', href: '/services/areas/huntington' },
  { label: 'Babylon', href: '/services/areas/babylon' },
  { label: 'Bay Shore', href: '/services/areas/bay-shore' },
  { label: 'Smithtown', href: '/services/areas/smithtown' },
  { label: 'Commack', href: '/services/areas/commack' },
  { label: 'Hauppauge', href: '/services/areas/hauppauge' },
  { label: 'Ronkonkoma', href: '/services/areas/ronkonkoma' },
  { label: 'Patchogue', href: '/services/areas/patchogue' },
  { label: 'Hampton Bays', href: '/services/areas/hampton-bays' },
  { label: 'Westhampton Beach', href: '/services/areas/westhampton-beach' },
  // Westchester
  { label: 'White Plains', href: '/services/areas/white-plains' },
  { label: 'Yonkers', href: '/services/areas/yonkers' },
  { label: 'Scarsdale', href: '/services/areas/scarsdale' },
  { label: 'New Rochelle', href: '/services/areas/new-rochelle' },
  // Connecticut
  { label: 'Greenwich CT', href: '/services/areas/greenwich-ct' },
  { label: 'Stamford CT', href: '/services/areas/stamford-ct' },
  { label: 'Norwalk CT', href: '/services/areas/norwalk-ct' },
  // New Jersey
  { label: 'Hoboken NJ', href: '/services/areas/hoboken' },
  { label: 'Jersey City NJ', href: '/services/areas/jersey-city' },
  { label: 'Newark NJ', href: '/services/areas/newark-nj' },
  { label: 'Princeton NJ', href: '/services/areas/princeton-nj' },
  { label: 'Morristown NJ', href: '/services/areas/morristown-nj' },
  { label: 'Short Hills NJ', href: '/services/areas/short-hills-nj' },
  { label: 'Summit NJ', href: '/services/areas/summit-nj' },
];

const routes = [
  // Airport ⇄ Manhattan
  { label: 'JFK → Manhattan', href: '/services/routes/jfk-to-manhattan-black-car-service' },
  { label: 'Manhattan → JFK', href: '/services/routes/manhattan-to-jfk-black-car-service' },
  { label: 'LGA → Manhattan', href: '/services/routes/lga-to-manhattan-black-car-service' },
  { label: 'Manhattan → LGA', href: '/services/routes/manhattan-to-lga-black-car-service' },
  { label: 'EWR → Manhattan', href: '/services/routes/ewr-to-manhattan-black-car-service' },
  { label: 'Manhattan → EWR', href: '/services/routes/manhattan-to-ewr-black-car-service' },
  { label: 'JFK → Midtown Manhattan', href: '/services/routes/jfk-to-midtown-manhattan-black-car-service' },
  { label: 'JFK → Upper East Side', href: '/services/routes/jfk-to-upper-east-side-car-service' },
  // Boroughs ⇄ airports
  { label: 'Brooklyn → JFK', href: '/services/routes/brooklyn-to-jfk-black-car-service' },
  { label: 'Queens → JFK', href: '/services/routes/queens-to-jfk-black-car-service' },
  { label: 'Bronx → JFK', href: '/services/routes/bronx-to-jfk-black-car-service' },
  { label: 'Staten Island → JFK', href: '/services/routes/staten-island-to-jfk-black-car-service' },
  { label: 'Midtown → JFK', href: '/services/routes/midtown-to-jfk-black-car-service' },
  { label: 'Upper East Side → JFK', href: '/services/routes/upper-east-side-to-jfk-black-car-service' },
  { label: 'JFK → Brooklyn', href: '/services/routes/jfk-to-brooklyn' },
  { label: 'JFK → Queens', href: '/services/routes/jfk-to-queens-black-car-service' },
  { label: 'LGA → Brooklyn', href: '/services/routes/lga-to-brooklyn-black-car-service' },
  { label: 'LGA → Queens', href: '/services/routes/lga-to-queens-black-car-service' },
  { label: 'EWR → Brooklyn', href: '/services/routes/ewr-to-brooklyn-black-car-service' },
  { label: 'EWR → Queens', href: '/services/routes/ewr-to-queens-car-service' },
  { label: 'Queens → LGA', href: '/services/routes/queens-to-lga-black-car-service' },
  { label: 'Wall Street → JFK', href: '/services/routes/wall-street-to-jfk-car-service' },
  { label: 'Park Avenue → JFK', href: '/services/routes/park-avenue-to-jfk-car-service' },
  { label: 'Midtown → LGA', href: '/services/routes/midtown-to-lga-black-car-service' },
  { label: 'Midtown → EWR', href: '/services/routes/midtown-to-ewr-black-car-service' },
  // Borough ⇄ Manhattan
  { label: 'Manhattan → Brooklyn', href: '/services/routes/manhattan-to-brooklyn' },
  { label: 'Brooklyn → Manhattan', href: '/services/routes/brooklyn-to-manhattan-black-car-service' },
  { label: 'Bronx → Manhattan', href: '/services/routes/bronx-to-manhattan-black-car-service' },
  { label: 'Queens → Manhattan', href: '/services/routes/queens-to-manhattan-black-car-service' },
  { label: 'Staten Island → Manhattan', href: '/services/routes/staten-island-to-manhattan-black-car-service' },
  // Airport ⇄ Long Island & Westchester
  { label: 'JFK → Long Island', href: '/services/routes/jfk-to-long-island-car-service' },
  { label: 'LGA → Long Island', href: '/services/routes/lga-to-long-island-car-service' },
  { label: 'EWR → Long Island', href: '/services/routes/ewr-to-long-island-car-service' },
  { label: 'JFK → Westchester', href: '/services/routes/jfk-to-westchester-car-service' },
  { label: 'LGA → Westchester', href: '/services/routes/lga-to-westchester-car-service' },
  { label: 'NYC → Westchester', href: '/services/routes/nyc-to-westchester-car-service' },
  // Regional & long-distance
  { label: 'Manhattan → Hamptons', href: '/services/routes/manhattan-to-hamptons-car-service' },
  { label: 'Manhattan → Connecticut', href: '/services/routes/manhattan-to-connecticut-car-service' },
  { label: 'NYC → Boston', href: '/services/routes/nyc-to-boston' },
  { label: 'NYC → Philadelphia', href: '/services/routes/nyc-to-philadelphia' },
  { label: 'NYC → Washington DC', href: '/services/routes/nyc-to-washington-dc' },
  { label: 'NYC → Princeton, NJ', href: '/services/routes/nyc-to-princeton-nj-car-service' },
  // Teterboro (TEB)
  { label: 'Manhattan → Teterboro', href: '/services/routes/manhattan-to-teterboro-black-car-service' },
  { label: 'Teterboro → Manhattan', href: '/services/routes/teterboro-to-manhattan-black-car-service' },
  { label: 'New Jersey → Teterboro', href: '/services/routes/new-jersey-to-teterboro-car-service' },
  { label: 'Teterboro → New Jersey', href: '/services/routes/teterboro-to-new-jersey-car-service' },
  { label: 'Brooklyn → Teterboro', href: '/services/routes/brooklyn-to-teterboro-car-service' },
  { label: 'Long Island → Teterboro', href: '/services/routes/long-island-to-teterboro-car-service' },
  { label: 'Westchester → Teterboro', href: '/services/routes/westchester-to-teterboro-car-service' },
  { label: 'Connecticut → Teterboro', href: '/services/routes/connecticut-to-teterboro-car-service' },
  { label: 'Queens & Bronx → Teterboro', href: '/services/routes/queens-bronx-to-teterboro-car-service' },
  { label: 'All Routes (incl. Hamptons)', href: '/services/routes' },
];

function Section({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="font-serif text-xl font-semibold text-brand-black mb-4 pb-2 border-b border-brand-light">
        {title}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-brand-grey hover:text-brand-black hover:underline transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen">
      <section className="py-16 lg:py-20 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-semibold mb-3">Site Map</h1>
          <p className="text-brand-silver">Eagle Eye Chauffeur — all pages, services, routes, and areas.</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          <Section title="Main Pages" links={[
            { label: 'Home', href: '/' },
            { label: 'Book Now', href: '/book' },
            { label: 'Pricing & Rates', href: '/pricing' },
            { label: 'Our Fleet', href: '/fleet' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Blog', href: '/blog' },
            { label: 'Referral Program', href: '/referrals' },
            { label: 'MetLife Stadium Transportation', href: '/world-cup-2026' },
            { label: 'US Open Car Service', href: '/us-open-2026' },
          ]} />

          <Section title="Services" links={services} />
          <Section title="Airport Car Service" links={airports} />
          <Section title="Routes" links={routes} />
          <Section title="Service Areas" links={areas} />

          <div>
            <h2 className="font-serif text-xl font-semibold text-brand-black mb-4 pb-2 border-b border-brand-light">
              Blog & Guides
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-brand-grey hover:text-brand-black hover:underline transition-colors"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
