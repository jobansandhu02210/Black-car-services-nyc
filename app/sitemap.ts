import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';
import { blogPosts } from '@/lib/blog-data';
import { getAllHamptonsRouteSlugs } from '@/lib/hamptons-routes-data';

const base = getSiteUrl();

// Stable last-modified date for static pages. Bump this ONLY when page content
// actually changes — do NOT use `new Date()`, which re-stamps every URL on every
// build and destroys the freshness signal Google uses to prioritize re-crawls.
// (Blog pages below use each post's real publish date instead of this constant.)
const LAST_UPDATED = new Date('2026-08-22');

export default function sitemap(): MetadataRoute.Sitemap {
  const services = [
    'point-to-point',
    'hourly',
    'airport',
    'corporate',
    'special-events',
    'chauffeur-service',
    'long-distance',
    'limousine-service',
    'sprinter-van-service',
  ];

  const pages: MetadataRoute.Sitemap = [
    { url: base, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/black-car-service-nyc`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/pricing`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/fleet`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/book`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/site-map`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacy`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: LAST_UPDATED, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/services/wedding`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/corporate-roadshow`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/world-cup-2026`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/world-cup-2026/manhattan-to-metlife`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/world-cup-2026/newark-to-metlife`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/world-cup-2026/jfk-to-metlife`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/world-cup-2026/lga-to-metlife`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/world-cup-2026/long-island-to-metlife`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/world-cup-2026/nyc-hotel-to-metlife`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/us-open-2026`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/us-open-2026/lga-to-us-open`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/us-open-2026/jfk-to-us-open`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/us-open-2026/ewr-to-us-open`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/us-open-2026/manhattan-to-us-open`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/us-open-2026/long-island-to-us-open`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/us-open-2026/nyc-hotel-to-us-open`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/referrals`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/corporate-accounts`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/executive-vip`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const airportPages: MetadataRoute.Sitemap = [
    { url: `${base}/services/airport/jfk`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/airport/lga`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/airport/ewr`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/airport/hpn`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const areaPages: MetadataRoute.Sitemap = [
    { url: `${base}/services/areas`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/manhattan`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/brooklyn`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/queens`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/bronx`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/staten-island`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/teb-airport`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/areas/westchester`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/long-island`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/new-jersey`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/hamptons`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/nassau-county`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/suffolk-county`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/connecticut`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/upstate-ny`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    // Manhattan neighborhood pages
    { url: `${base}/services/areas/midtown-manhattan`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/financial-district`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/soho`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/tribeca`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/upper-east-side`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/upper-west-side`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/chelsea`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/hells-kitchen`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/greenwich-village`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/flatiron`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/battery-park-city`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/lower-manhattan`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/gramercy-park`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/harlem`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    // New Jersey city pages
    { url: `${base}/services/areas/hoboken`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/jersey-city`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/newark-nj`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/princeton-nj`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/morristown-nj`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/short-hills-nj`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/summit-nj`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    // Westchester city pages
    { url: `${base}/services/areas/white-plains`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/yonkers`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/scarsdale`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/new-rochelle`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    // Connecticut city pages
    { url: `${base}/services/areas/greenwich-ct`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/areas/stamford-ct`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/norwalk-ct`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    // Nassau County city pages
    { url: `${base}/services/areas/garden-city`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/great-neck`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/new-hyde-park`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/areas/mineola`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/manhasset`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/long-beach`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/valley-stream`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/areas/rockville-centre`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/port-washington`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/roslyn`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/hicksville`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/westbury`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/hempstead`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/levittown`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/massapequa`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/freeport`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/elmont`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/floral-park`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    // Suffolk County city pages
    { url: `${base}/services/areas/huntington`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/babylon`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/bay-shore`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/smithtown`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/hampton-bays`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/westhampton-beach`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/services/areas/patchogue`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/ronkonkoma`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/hauppauge`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/services/areas/commack`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const routePages: MetadataRoute.Sitemap = [
    { url: `${base}/services/routes`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/routes/manhattan-to-brooklyn`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/services/routes/jfk-to-brooklyn`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/jfk-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/manhattan-to-jfk-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/lga-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/manhattan-to-lga-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/ewr-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/manhattan-to-ewr-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/brooklyn-to-jfk-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/midtown-to-jfk-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/upper-east-side-to-jfk-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    // New high-value routes
    { url: `${base}/services/routes/lga-to-brooklyn-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/ewr-to-brooklyn-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/jfk-to-queens-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/manhattan-to-hamptons-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-westchester-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/jfk-to-westchester-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/brooklyn-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.85 },
    // New borough & long-distance routes
    { url: `${base}/services/routes/queens-to-jfk-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/queens-to-lga-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/bronx-to-jfk-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/staten-island-to-jfk-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/staten-island-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/jfk-to-long-island-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/manhattan-to-connecticut-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/lga-to-queens-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/ewr-to-long-island-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/jfk-to-midtown-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/jfk-to-upper-east-side-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    // New borough & airport routes
    { url: `${base}/services/routes/bronx-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/queens-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/lga-to-long-island-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/lga-to-westchester-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/ewr-to-queens-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    // Teterboro Airport (TEB) routes
    { url: `${base}/services/routes/manhattan-to-teterboro-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/teterboro-to-manhattan-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/new-jersey-to-teterboro-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/teterboro-to-new-jersey-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/services/routes/brooklyn-to-teterboro-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/long-island-to-teterboro-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/westchester-to-teterboro-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/connecticut-to-teterboro-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/queens-bronx-to-teterboro-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-boston`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-philadelphia`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services/routes/nyc-to-washington-dc`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.9 },
    // Corporate corridor routes
    { url: `${base}/services/routes/wall-street-to-jfk-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/park-avenue-to-jfk-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/midtown-to-lga-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/midtown-to-ewr-black-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/services/routes/nyc-to-princeton-nj-car-service`, lastModified: LAST_UPDATED, changeFrequency: 'monthly', priority: 0.95 },
  ];

  const highValueBlogSlugs = new Set([
    'jfk-to-manhattan-best-car-service-airport-transfer',
    'complete-guide-nyc-airport-transfers-jfk-lga-ewr-hpn',
    'chauffeur-vs-rideshare-nyc-which-is-better',
    'nyc-corporate-car-service-executive-travel',
    'jfk-airport-pickup-meet-and-greet-service',
    'lga-car-service-best-airport-transfer-nyc',
    'newark-airport-car-service-ewr-to-manhattan',
    'nyc-chauffeur-service-cost-pricing-guide',
    'black-car-service-vs-taxi-nyc-which-is-better',
    'nyc-corporate-black-car-service-executive-guide',
    'corporate-car-service-account-nyc-guide',
    'executive-chauffeur-vs-rideshare-for-business-travel',
    'nyc-roadshow-car-service-guide-investment-banking',
    'best-car-service-for-wall-street-executives-nyc',
    'executive-airport-transfer-guide-nyc',
    'best-airport-to-fly-into-nyc-jfk-lga-ewr-guide',
    'jfk-to-laguardia-transfer-distance-options',
    'jfk-to-newark-airport-transfer-options',
    'laguardia-to-newark-airport-transfer-guide',
    'how-far-is-jfk-from-manhattan-travel-times-guide',
    'luxury-chauffeur-service-near-me-nyc-guide',
  ]);

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: highValueBlogSlugs.has(post.slug) ? 0.85 : 0.7,
  }));

  const hamptonsRoutePages: MetadataRoute.Sitemap = getAllHamptonsRouteSlugs().map((slug) => ({
    url: `${base}/services/routes/${slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    ...pages,
    ...servicePages,
    ...airportPages,
    ...areaPages,
    ...routePages,
    ...hamptonsRoutePages,
    ...blogPages,
  ];
}
