export interface HamptonsOrigin {
  name: string;
  borough: string;
  description: string;
  driveOffsetMins: number; // offset from Midtown base time
  pickupNotes: string;    // practical pickup advice specific to this origin
  landmarks: string[];    // 4-6 specific buildings/streets/landmarks for pickup reference
}

export interface HamptonsDestination {
  name: string;
  description: string;
  knownFor: string;
  baseTimeMin: number; // minutes from Midtown, low end
  baseTimeMax: number; // minutes from Midtown, high end
  mainRoad: string;       // primary highway used
  beaches: string[];      // 3-4 notable beaches
  areas: string[];        // key sub-areas or estate sections
  hotels: string[];       // 3-4 notable hotels/resorts guests stay at
  drivingTip: string;     // traffic/seasonal tip for this specific destination
}

export const hamptonOrigins: Record<string, HamptonsOrigin> = {
  'soho': {
    name: 'SoHo',
    borough: 'Manhattan',
    description: 'SoHo, Manhattan — cast-iron loft district south of Houston Street',
    driveOffsetMins: 0,
    pickupNotes: "Your chauffeur meets you at your building entrance on Broadway, Prince St, Spring St, or West Broadway. SoHo has limited stopping on many cross streets — confirm your exact address at booking so the driver plans the approach.",
    landmarks: ["Broadway & Prince St", "Spring Street & Mercer", "West Broadway lofts", "SoHo Grand Hotel", "Mercer Hotel", "Canal Street corner"],
  },
  'east-village': {
    name: 'East Village',
    borough: 'Manhattan',
    description: 'East Village, Manhattan — between 14th St and Houston, east of 3rd Ave',
    driveOffsetMins: 5,
    pickupNotes: "East Village pickups work best on the numbered avenues (1st, 2nd, 3rd Ave) rather than the lettered avenues in Alphabet City. Your driver navigates to your specific address.",
    landmarks: ["St. Marks Place", "1st Avenue & 9th St", "2nd Avenue", "Astor Place", "Union Square (north end)", "Avenue A corridor"],
  },
  'west-village': {
    name: 'West Village',
    borough: 'Manhattan',
    description: 'West Village, Manhattan — cobblestone streets west of 7th Ave South',
    driveOffsetMins: 0,
    pickupNotes: "West Village has narrow, one-way cobblestone streets. Your driver will confirm the most accessible approach to your specific block — many streets require a specific turn sequence.",
    landmarks: ["Bleecker Street", "Charles Street", "Horatio Street", "West 4th St", "The Standard Highline (nearby)", "Pastis corner"],
  },
  'tribeca': {
    name: 'Tribeca',
    borough: 'Manhattan',
    description: 'Tribeca, Manhattan — luxury loft district below Canal Street',
    driveOffsetMins: 0,
    pickupNotes: "Tribeca has wide loft-building lobbies with easy street access. Most streets allow stopping. Confirm your exact address — the neighborhood spans from Chambers St to Canal St, Broadway to the Hudson.",
    landmarks: ["Greenwich Street lofts", "Hudson Street", "Chambers Street", "Tribeca Grand Hotel", "Canal Street & West Broadway", "Laight Street"],
  },
  'financial-district': {
    name: 'Financial District',
    borough: 'Manhattan',
    description: 'Financial District, Manhattan — Wall Street and lower Broadway',
    driveOffsetMins: 5,
    pickupNotes: "Wall Street area has heavy security restrictions around the NYSE and One World Trade. Your driver will confirm the exact meeting point — many clients meet at Brookfield Place lobby or the Fulton Center entrance.",
    landmarks: ["One World Trade Center", "Brookfield Place", "Wall Street & Broadway", "Fulton Center", "South Street Seaport", "Water Street"],
  },
  'lower-east-side': {
    name: 'Lower East Side',
    borough: 'Manhattan',
    description: 'Lower East Side, Manhattan — between the Bowery and the East River',
    driveOffsetMins: 5,
    pickupNotes: "Lower East Side pickups are straightforward on Delancey, Essex, or Orchard Street. Confirm your side of the street — many LES blocks are one-way.",
    landmarks: ["Delancey Street & Essex", "Orchard Street", "Essex Market area", "Rivington Street", "Williamsburg Bridge approach", "Allen Street"],
  },
  'chelsea': {
    name: 'Chelsea',
    borough: 'Manhattan',
    description: 'Chelsea, Manhattan — between 14th and 30th Streets, west of 6th Ave',
    driveOffsetMins: 0,
    pickupNotes: "Chelsea has easy curbside access on most streets. High Line-adjacent buildings on 10th Ave are a common pickup point. Confirm which side of the avenue you'll be exiting from.",
    landmarks: ["10th Avenue High Line access", "8th Avenue & 23rd St", "Chelsea Market (9th Ave)", "Hotel Americano", "23rd Street corridor", "28th Street & 7th Ave"],
  },
  'gramercy-park': {
    name: 'Gramercy Park',
    borough: 'Manhattan',
    description: 'Gramercy Park, Manhattan — elegant residential neighborhood around the private park',
    driveOffsetMins: 0,
    pickupNotes: "Gramercy Park pickups are typically on Irving Place or Lexington Avenue. The park itself is private — your driver meets you at your building entrance.",
    landmarks: ["Gramercy Park South", "Irving Place", "Lexington Ave & 21st St", "The Gramercy (hotel)", "21st Street corridor", "Park Avenue South"],
  },
  'flatiron': {
    name: 'Flatiron',
    borough: 'Manhattan',
    description: 'Flatiron District, Manhattan — around Broadway and 5th Ave near 23rd Street',
    driveOffsetMins: 0,
    pickupNotes: "The Flatiron District's main avenues (5th, Broadway, Park Ave South) have good traffic flow. For office pickups, confirm the building's entrance side — many have separate lobby doors on different streets.",
    landmarks: ["Flatiron Building (23rd & 5th)", "Park Avenue South", "Broadway & 23rd", "Madison Square Park", "6th Avenue corridor", "18th Street & 5th"],
  },
  'murray-hill': {
    name: 'Murray Hill',
    borough: 'Manhattan',
    description: 'Murray Hill, Manhattan — residential neighborhood between 30th and 40th Streets east',
    driveOffsetMins: 0,
    pickupNotes: "Murray Hill pickups are typically on Lexington or 3rd Avenue. Park Avenue has a center median, so your driver will confirm the correct approach for your block.",
    landmarks: ["Lexington Ave & 34th", "3rd Avenue & 38th", "Park Avenue south end", "34th Street east side", "36th Street townhouses", "Kips Bay Plaza"],
  },
  'midtown-manhattan': {
    name: 'Midtown Manhattan',
    borough: 'Manhattan',
    description: 'Midtown Manhattan — from 34th to 59th Street, hotels and corporate offices',
    driveOffsetMins: 0,
    pickupNotes: "Midtown pickup logistics depend on your exact block. For hotels, your driver meets in front. For offices, confirm the building lobby address — many Midtown towers have entrances on multiple streets.",
    landmarks: ["Grand Central Terminal", "Rockefeller Center", "Times Square (43rd-47th)", "Park Avenue & 50th", "5th Avenue flagship corridor", "Penn Station area"],
  },
  'hells-kitchen': {
    name: "Hell's Kitchen",
    borough: 'Manhattan',
    description: "Hell's Kitchen, Manhattan — west Midtown between 34th and 59th Streets",
    driveOffsetMins: 5,
    pickupNotes: "Hell's Kitchen has good access on 9th and 10th Avenues. Theater District pickups (47th-51st) are busiest before 8pm show times — allow extra time in the evening.",
    landmarks: ["9th Avenue & 46th St", "10th Avenue corridor", "52nd Street west side", "Restaurant Row (46th St)", "Port Authority area", "Clinton area residences"],
  },
  'upper-east-side': {
    name: 'Upper East Side',
    borough: 'Manhattan',
    description: 'Upper East Side, Manhattan — from 59th to 96th Street, east of Central Park',
    driveOffsetMins: 10,
    pickupNotes: "Upper East Side pickups are easy on any of the avenues (Madison, Park, Lexington, 3rd). For apartment buildings with doormen, your driver confirms the address and checks in at the front desk.",
    landmarks: ["Park Avenue & 72nd", "Madison Avenue boutique corridor", "Lenox Hill Hospital area", "86th Street cross-street", "Museum Mile (5th Ave)", "Carlyle Hotel"],
  },
  'upper-west-side': {
    name: 'Upper West Side',
    borough: 'Manhattan',
    description: 'Upper West Side, Manhattan — from 59th to 110th Street, west of Central Park',
    driveOffsetMins: 15,
    pickupNotes: "Upper West Side pickups are typically on Central Park West, Columbus, or Broadway. For prewar buildings, confirm the exact address as block numbers span 59th to 110th.",
    landmarks: ["Columbus Circle", "Central Park West", "Broadway & 79th", "The Dakota (72nd & CPW)", "Lincoln Center area", "96th Street corridor"],
  },
  'harlem': {
    name: 'Harlem',
    borough: 'Manhattan',
    description: 'Harlem, Manhattan — north of 110th Street, cultural heart of upper Manhattan',
    driveOffsetMins: 20,
    pickupNotes: "Harlem covers a wide area from 110th to 155th Street. Confirm your exact address — Central Harlem (Lenox/Adam Clayton Powell), East Harlem (3rd/Lexington), and West Harlem (Riverside Drive) have different access points.",
    landmarks: ["125th Street & Lenox Ave", "Marcus Garvey Park", "Sylvia's Restaurant area", "Adam Clayton Powell Jr Blvd", "Riverside Drive upper end", "East Harlem (3rd Ave corridor)"],
  },
  'battery-park-city': {
    name: 'Battery Park City',
    borough: 'Manhattan',
    description: 'Battery Park City, Manhattan — waterfront neighborhood at the southern tip of Manhattan',
    driveOffsetMins: 5,
    pickupNotes: "Battery Park City's residential towers have easy building-front access. The Esplanade and riverside buildings all face west — your driver confirms whether to approach from North End Ave or South End Ave.",
    landmarks: ["Brookfield Place (north)", "Battery Park City Esplanade", "North End Ave residential towers", "South End Ave buildings", "The Ritz-Carlton BPC", "Goldman Sachs HQ (nearby)"],
  },
  'nomad': {
    name: 'NoMad',
    borough: 'Manhattan',
    description: 'NoMad (North of Madison Square Park), Manhattan — design and hospitality district',
    driveOffsetMins: 0,
    pickupNotes: "NoMad pickups are smooth on Broadway or 5th Ave near Madison Square Park. Hotel pickups (Arlo, MADE, The NoMad Hotel) have designated staging areas.",
    landmarks: ["5th Ave & 28th St", "Broadway & 29th", "The NoMad Hotel", "Arlo NoMad", "Madison Square Park", "28th Street flower district"],
  },
  'williamsburg': {
    name: 'Williamsburg',
    borough: 'Brooklyn',
    description: 'Williamsburg, Brooklyn — creative neighborhood across the East River from Manhattan',
    driveOffsetMins: 15,
    pickupNotes: "Williamsburg pickups work well on Bedford Ave, Metropolitan Ave, or the waterfront (N 6th / N 7th). For Northside blocks near the bridge, your driver confirms the exact street direction.",
    landmarks: ["Bedford Avenue (L train)", "Wythe Avenue", "North 6th / 7th pier", "The Williamsburg Hotel", "Metropolitan Ave", "Graham Avenue corridor"],
  },
  'dumbo': {
    name: 'DUMBO',
    borough: 'Brooklyn',
    description: 'DUMBO, Brooklyn — Down Under the Manhattan Bridge Overpass, luxury loft district',
    driveOffsetMins: 15,
    pickupNotes: "DUMBO has easy street access under the bridge. Washington Street and Front Street both have good stopping areas. The cobblestones between the Manhattan and Brooklyn bridges are the neighborhood's iconic pickup backdrop.",
    landmarks: ["Washington & Front St (bridge view)", "One Brooklyn Bridge Park", "Front Street lofts", "Jay Street (main artery)", "York Street (DUMBO south end)", "Brooklyn Bridge Park entrance"],
  },
  'park-slope': {
    name: 'Park Slope',
    borough: 'Brooklyn',
    description: 'Park Slope, Brooklyn — tree-lined residential neighborhood adjacent to Prospect Park',
    driveOffsetMins: 20,
    pickupNotes: "Park Slope is accessed via Flatbush Ave or 4th Ave from the highway. Your driver confirms the cross street — the numbered streets run alphabetically, so 1st to 15th Street spans the neighborhood.",
    landmarks: ["Prospect Park West", "Grand Army Plaza", "5th Avenue (shops)", "7th Avenue", "Flatbush Avenue", "Berkeley Place"],
  },
  'brooklyn-heights': {
    name: 'Brooklyn Heights',
    borough: 'Brooklyn',
    description: 'Brooklyn Heights — historic promenade neighborhood with Manhattan views',
    driveOffsetMins: 15,
    pickupNotes: "Brooklyn Heights pickups are typically at building entrances on Pierrepont, Remsen, or Joralemon. The Promenade has no vehicle access — your driver meets you at the nearest address.",
    landmarks: ["The Promenade (foot of Remsen)", "Montague Street", "Pierrepont Street", "Henry Street", "Clark Street (1 Hotel Brooklyn Bridge)", "Court Street"],
  },
  'cobble-hill': {
    name: 'Cobble Hill',
    borough: 'Brooklyn',
    description: 'Cobble Hill, Brooklyn — quiet residential enclave south of Brooklyn Heights',
    driveOffsetMins: 15,
    pickupNotes: "Cobble Hill pickups are on Clinton, Henry, or Court Street. Many brownstones have stoops — your driver meets at the building entrance. Atlantic Avenue is the main artery.",
    landmarks: ["Clinton Street", "Henry Street", "Court Street", "Atlantic Avenue", "Kane Street", "Verandah Place"],
  },
  'long-island-city': {
    name: 'Long Island City',
    borough: 'Queens',
    description: 'Long Island City, Queens — Midtown-adjacent arts and residential district',
    driveOffsetMins: -10,
    pickupNotes: "LIC pickups are straightforward — most buildings are modern towers with lobby-front access on 44th/45th Drive or Jackson Ave. The neighborhood is directly adjacent to Midtown via the Queensboro Bridge.",
    landmarks: ["Jackson Avenue", "44th Drive (main LIC artery)", "Queens Plaza", "Court Square", "5Pointz area", "Gantry Plaza State Park"],
  },
  'astoria': {
    name: 'Astoria',
    borough: 'Queens',
    description: 'Astoria, Queens — diverse neighborhood along the north Queens waterfront',
    driveOffsetMins: 0,
    pickupNotes: "Astoria pickups are typically on Steinway Street, Ditmars Blvd, or 31st Street. The area is well-connected via the Triborough Bridge — confirm your street as Astoria spans several neighborhoods.",
    landmarks: ["Steinway Street", "31st Street corridor", "Ditmars Boulevard", "Astoria Park (near Triborough)", "Broadway (Queens)", "31st Ave strip"],
  },
  'jfk-airport': {
    name: 'JFK Airport',
    borough: 'Queens',
    description: 'John F. Kennedy International Airport — all terminals',
    driveOffsetMins: -20,
    pickupNotes: "For pickups starting at JFK (first leg to Hamptons), your driver meets you at Departures (upper level) at your terminal. Confirm your terminal and airline at booking — we plan departure time based on your Hamptons drive time plus check-in.",
    landmarks: ["JFK Terminal 1", "JFK Terminal 4 (Delta/Air France)", "JFK Terminal 5 (JetBlue)", "JFK Terminal 7 (British/Finnair)", "JFK Terminal 8 (American/BA)", "AirTrain Jamaica station"],
  },
  'lga-airport': {
    name: 'LaGuardia Airport',
    borough: 'Queens',
    description: 'LaGuardia Airport (LGA) — Terminal B and Terminal C',
    driveOffsetMins: -10,
    pickupNotes: "For pickups starting at LGA (heading to Hamptons after flying in), your driver meets you at the arrivals level. Terminal B (main terminal) and Terminal C (Delta) have separate pickup zones. Confirm your terminal at booking.",
    landmarks: ["LGA Terminal B (Central)", "LGA Terminal C (Delta)", "LGA Parking Garage pickup", "Grand Central Pkwy approach", "Marine Air Terminal (charter)", "Laguardia Link bus stop"],
  },
  'newark-airport': {
    name: 'Newark Airport',
    borough: 'New Jersey',
    description: 'Newark Liberty International Airport (EWR) — all terminals',
    driveOffsetMins: 20,
    pickupNotes: "EWR pickups for Hamptons-bound clients: your driver meets at Terminal A, B, or C arrivals. EWR to the Hamptons is a longer drive than from Manhattan due to routing through the Holland/Lincoln Tunnel and across the city.",
    landmarks: ["EWR Terminal A (United domestic)", "EWR Terminal B (United international)", "EWR Terminal C (United hub)", "Newark AirTrain connection", "P4 Parking pickup area", "EWR Marriott (adjacent hotel)"],
  },
};

export const hamptonDestinations: Record<string, HamptonsDestination> = {
  'southampton': {
    name: 'Southampton',
    description: 'Southampton is the classic Hamptons village — grand estates, pristine beaches, and the iconic Main Street shopping district.',
    knownFor: 'Estate homes, Gin Lane, Cooper\'s Beach, polo',
    baseTimeMin: 135,
    baseTimeMax: 165,
    mainRoad: "Montauk Highway (Route 27) east from the LIE",
    beaches: ["Coopers Beach (5-star)", "Cryder Beach", "Foster Memorial Beach", "Ponquogue Beach (nearby)"],
    areas: ["Gin Lane estates", "Meadow Lane", "Flying Point Road", "Agawam Lake", "North Sea Road"],
    hotels: ["The Southampton Inn", "Gurney's Star Island Resort", "Capri Hotel & Cabanas", "Atlantic Terrace (nearby Montauk)"],
    drivingTip: "Southampton traffic peaks Friday 3–8pm in summer. For afternoon departures, plan to leave NYC by 1pm or after 8pm. The LIE to Exit 70 (Manorville), then Route 27 east, is the standard route.",
  },
  'east-hampton': {
    name: 'East Hampton',
    description: 'East Hampton is the Hamptons\' premier village — home to celebrity estates, world-class restaurants, and Georgica Beach.',
    knownFor: 'Main Street boutiques, Georgica Pond, celebrity estates, Nick & Toni\'s',
    baseTimeMin: 165,
    baseTimeMax: 195,
    mainRoad: "Montauk Highway (Route 27) to East Hampton Main Street",
    beaches: ["Main Beach (EH flagship)", "Two Mile Hollow (locals)", "Wiborg Beach", "Georgica Beach (private/semi-private)"],
    areas: ["Further Lane estates", "Lily Pond Lane", "Georgica Pond area", "East Hampton Village Main St", "Wainscott adjacent"],
    hotels: ["The Baker House 1650", "The Maidstone", "East Hampton Inn", "Topping Rose House (Bridgehampton, nearby)"],
    drivingTip: "East Hampton is the most congested Hamptons village on summer Fridays. If possible, depart before 2pm or plan an 8pm+ NYC departure. The indirect route via 27A through North Sea and Bridgehampton sometimes saves time mid-summer.",
  },
  'sag-harbor': {
    name: 'Sag Harbor',
    description: 'Sag Harbor is a historic whaling village with a charming Main Street, independent bookshops, and the iconic Sag Harbor Cinema.',
    knownFor: 'Historic whaling village, Bay Street Theater, American Hotel, Long Wharf',
    baseTimeMin: 165,
    baseTimeMax: 195,
    mainRoad: 'Route 27 to Bridgehampton, then Sag Harbor Turnpike north',
    beaches: ['Long Beach (Sag Harbor)', 'Havens Beach', 'Noyac Bay beaches', 'East Hampton town beaches (nearby)'],
    areas: ['Main Street historic village', 'Long Wharf marina', "Baron's Cove waterfront", 'North Haven peninsula', 'Noyac Road residential'],
    hotels: ["Baron's Cove", 'Sag Harbor Inn', 'The American Hotel (historic)', 'Shelter Island House (ferry ride away)'],
    drivingTip: 'Sag Harbor sits slightly north of Route 27 — your driver takes the Bridgehampton-Sag Harbor Turnpike. Summer traffic is lighter here than East Hampton village. One of the calmer Hamptons destinations to reach by car.',
  },
  'montauk': {
    name: 'Montauk',
    description: 'Montauk is the easternmost tip of Long Island — known for surf culture, the famous Montauk Lighthouse, and an electric summer nightlife.',
    knownFor: 'Montauk Lighthouse, Gurney\'s resort, surf, Ditch Plains Beach, Ruschmeyer\'s',
    baseTimeMin: 195,
    baseTimeMax: 225,
    mainRoad: 'Montauk Highway (Route 27) all the way east to the tip of Long Island',
    beaches: ['Ditch Plains Beach (surf)', 'Kirk Park Beach', 'Gin Beach', 'Shadmoor State Park beach'],
    areas: ['Montauk village center', 'Ditch Plains neighborhood', "Gurney's resort complex", 'Hither Hills State Park', 'Camp Hero (lighthouse end)'],
    hotels: ["Gurney's Montauk Resort & Seawater Spa", 'Surf Lodge', 'Marram', 'Hero Beach Club'],
    drivingTip: 'Montauk is the furthest destination — 30–40 minutes beyond East Hampton. Leave NYC before noon or after 9pm on summer Fridays to avoid the worst congestion. The drive east of Amagansett clears significantly once past the Hamptons villages.',
  },
  'bridgehampton': {
    name: 'Bridgehampton',
    description: 'Bridgehampton sits between Southampton and East Hampton — known for the Bridgehampton polo club, farm stands, and quiet estate roads.',
    knownFor: 'Bridgehampton polo, Candy Kitchen diner, Peter Marino estate, farm stands',
    baseTimeMin: 150,
    baseTimeMax: 180,
    mainRoad: 'Montauk Highway (Route 27) through Water Mill to Bridgehampton',
    beaches: ['Sagg Main Beach', 'Mecox Beach', 'Scott Cameron Beach (nearby Sagaponack)', 'Bridgehampton Community House (pool)'],
    areas: ['Bridgehampton commons', 'Butter Lane estates', 'Millstone Road', 'Sagaponack border', 'Hayground Road'],
    hotels: ['Topping Rose House (premier boutique)', 'Bridgehampton Inn', 'Southampton hotels (10 min west)', 'East Hampton hotels (10 min east)'],
    drivingTip: 'Bridgehampton sits midway between Southampton and East Hampton on Route 27. Traffic through the Bridgehampton commons can slow on summer afternoons. Your driver monitors alternate routing via Butter Lane when Route 27 backs up.',
  },
  'water-mill': {
    name: 'Water Mill',
    description: 'Water Mill is a quiet hamlet between Southampton and Bridgehampton, known for its historic windmill, farm stands, and low-key luxury.',
    knownFor: 'Historic water mill, farm stands, Wolffer Estate Vineyard nearby',
    baseTimeMin: 145,
    baseTimeMax: 175,
    mainRoad: 'Montauk Highway (Route 27) between Southampton and Bridgehampton',
    beaches: ['Flying Point Beach', 'Mecox Beach', 'Sagaponack Beach (nearby)', 'Bridgehampton beaches (5 min)'],
    areas: ['Millstone Road estates', 'Halsey Lane farm country', 'Flying Point Road waterfront', 'Deerfield Road', 'Ocean Road south side'],
    hotels: ['Topping Rose House (Bridgehampton, 5 min)', 'The Southampton Inn (10 min west)', 'Water Mill estate rentals', 'Wolffer Estate area B&Bs'],
    drivingTip: 'Water Mill has no significant village congestion — Route 27 flows through smoothly. It is the calmest Hamptons hamlet to reach by car, sitting midpoint between Westhampton Beach and East Hampton.',
  },
  'westhampton-beach': {
    name: 'Westhampton Beach',
    description: 'Westhampton Beach is the first Hamptons stop heading east — closer to NYC, with a lively village main street and Dune Road beach access.',
    knownFor: 'Closest Hamptons village, Dune Road, Main Street restaurants, Rogers Beach',
    baseTimeMin: 110,
    baseTimeMax: 140,
    mainRoad: 'Sunrise Highway (Route 27A) east — fastest route from NYC',
    beaches: ['Rogers Beach (main public beach)', 'Lashley Beach', 'Cupsogue Beach County Park', 'Dune Road ocean-side access'],
    areas: ['Main Street village', 'Dune Road beachfront', 'Beach Lane estates', 'Quiogue', 'Remsenburg (quiet residential)'],
    hotels: ['Westhampton Beach House', 'The Inn at Quogue', 'Southampton hotels (20 min east)', 'Westhampton Beach estate rentals'],
    drivingTip: 'Westhampton Beach is the closest Hamptons village — 70–90 min from Midtown in normal traffic via Sunrise Highway (Route 27A). An excellent choice for summer Fridays: significantly less traffic than Southampton or East Hampton.',
  },
  'hampton-bays': {
    name: 'Hampton Bays',
    description: 'Hampton Bays offers laid-back Hamptons living with access to Shinnecock Bay, waterfront restaurants, and calm bay beaches.',
    knownFor: 'Shinnecock Bay, Ponquogue Beach, waterfront dining, Canoe Place Inn',
    baseTimeMin: 120,
    baseTimeMax: 150,
    mainRoad: 'Sunrise Highway east, then Montauk Highway through Hampton Bays',
    beaches: ['Ponquogue Beach', 'Meschutt Beach County Park', 'Tiana Beach', 'Red Creek Park beach'],
    areas: ['Shinnecock Bay waterfront', 'Newtown Road marina district', 'Canoe Place area', 'Cold Spring Pond', 'Tiana Shores estates'],
    hotels: ['Hampton Maid', 'Canoe Place Inn (historic)', 'Westhampton Beach hotels (nearby)', 'Southampton hotels (15 min east)'],
    drivingTip: 'Hampton Bays sits just east of Westhampton Beach along Shinnecock Bay. Montauk Highway through the center of town has traffic lights that slow the drive in summer. Via Sunrise Highway, the approach is smooth until the final village stretch.',
  },
  'amagansett': {
    name: 'Amagansett',
    description: 'Amagansett sits just east of East Hampton — a quieter, artsy village known for the famous Lobster Roll restaurant and Indian Wells Beach.',
    knownFor: 'Indian Wells Beach, The Lobster Roll (Lunch), Amagansett Farmer\'s Market',
    baseTimeMin: 175,
    baseTimeMax: 210,
    mainRoad: 'Montauk Highway (Route 27) east through East Hampton to Amagansett',
    beaches: ['Indian Wells Beach (town flagship)', 'Atlantic Avenue Beach', 'Maidstone Park Beach', 'White Sands Beach'],
    areas: ['Amagansett village center', 'Fresh Pond Lane estates', 'Further Lane south side', 'Marine Boulevard', 'Lanes Landing area'],
    hotels: ['The Roundtree Amagansett', 'Amagansett Beach & Tennis', 'East Hampton hotels (3 min west)', 'The Baker House 1650 (East Hampton)'],
    drivingTip: 'Amagansett is just 5 minutes east of East Hampton village on Route 27. Once through East Hampton, the road clears noticeably. Indian Wells Beach has limited parking — a chauffeur drop is a practical advantage over self-driving in summer.',
  },
};

export type HamptonsRouteData = {
  originSlug: string;
  destSlug: string;
  origin: HamptonsOrigin;
  destination: HamptonsDestination;
  driveTimeMin: number;
  driveTimeMax: number;
  driveTimeLabel: string;
};

export function parseHamptonsSlug(slug: string): HamptonsRouteData | null {
  for (const originSlug of Object.keys(hamptonOrigins)) {
    const prefix = `${originSlug}-to-`;
    if (slug.startsWith(prefix)) {
      const rest = slug.slice(prefix.length).replace(/-car-service$/, '');
      if (hamptonDestinations[rest]) {
        const origin = hamptonOrigins[originSlug];
        const destination = hamptonDestinations[rest];
        const driveMin = destination.baseTimeMin + origin.driveOffsetMins;
        const driveMax = destination.baseTimeMax + origin.driveOffsetMins;
        const toLabel = (mins: number) => {
          const h = Math.floor(mins / 60);
          const m = mins % 60;
          return m === 0 ? `${h}h` : `${h}h ${m}min`;
        };
        return {
          originSlug,
          destSlug: rest,
          origin,
          destination,
          driveTimeMin: driveMin,
          driveTimeMax: driveMax,
          driveTimeLabel: `${toLabel(driveMin)}–${toLabel(driveMax)}`,
        };
      }
    }
  }
  return null;
}

/**
 * High-value Hamptons origins we keep indexable (airports = real traveler intent,
 * plus the top Manhattan/Brooklyn origins). Every other origin still PARSES — so its
 * old URL 308-redirects to the Hamptons hub instead of 404ing — but is no longer
 * generated, listed in the sitemap, or internally linked. This removes ~180
 * near-duplicate template pages Google was leaving "Crawled – currently not indexed".
 * To bring an origin back, just add its slug to this set.
 */
export const KEPT_HAMPTONS_ORIGIN_SLUGS = new Set<string>([
  'jfk-airport',
  'lga-airport',
  'newark-airport',
  'midtown-manhattan',
  'upper-east-side',
  'brooklyn-heights',
]);

export function isKeptHamptonsOrigin(originSlug: string): boolean {
  return KEPT_HAMPTONS_ORIGIN_SLUGS.has(originSlug);
}

export function getAllHamptonsRouteSlugs(): string[] {
  const slugs: string[] = [];
  for (const originSlug of Object.keys(hamptonOrigins)) {
    if (!KEPT_HAMPTONS_ORIGIN_SLUGS.has(originSlug)) continue;
    for (const destSlug of Object.keys(hamptonDestinations)) {
      slugs.push(`${originSlug}-to-${destSlug}-car-service`);
    }
  }
  return slugs;
}

/** Human-readable label for a destination/origin slug (e.g. 'westhampton-beach' → 'Westhampton Beach'). */
export function hamptonsDestinationName(slug: string): string {
  return hamptonDestinations[slug]?.name ?? slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export function getHamptonsDestinationSlugs(): string[] {
  return Object.keys(hamptonDestinations);
}

/** Route page slug for an origin → destination pair. */
export function hamptonsRouteSlug(originSlug: string, destSlug: string): string {
  return `${originSlug}-to-${destSlug}-car-service`;
}

/**
 * Other pickup areas to link to from an origin→destination page: same-borough
 * origins first, then the rest, so every route page receives plenty of internal
 * links from its siblings (prevents orphaned programmatic pages).
 */
export function getRelatedHamptonsOrigins(originSlug: string, limit = 8): string[] {
  const borough = hamptonOrigins[originSlug]?.borough;
  // Only link to other KEPT origins, so route pages never link to a removed/redirecting page.
  const others = Object.keys(hamptonOrigins).filter(
    (o) => o !== originSlug && KEPT_HAMPTONS_ORIGIN_SLUGS.has(o),
  );
  const same = others.filter((o) => hamptonOrigins[o].borough === borough);
  const rest = others.filter((o) => hamptonOrigins[o].borough !== borough);
  return [...same, ...rest].slice(0, limit);
}

/** SEO-safe <title>/meta description for a Hamptons route (kept under ~65 / ~158 chars). */
export function buildHamptonsRouteMeta(route: HamptonsRouteData): { title: string; description: string } {
  const o = route.origin.name;
  const d = route.destination.name;
  const titleOptions = [
    `${o} to ${d} Car Service | Hamptons Transfer | Eagle Eye`,
    `${o} to ${d} Car Service | Eagle Eye`,
  ];
  const title = titleOptions.find((t) => t.length <= 65) ?? titleOptions[1];
  const descOptions = [
    `${o} to ${d} car service — flat-rate Hamptons chauffeur, door-to-door pickup, no surge. Drive time ${route.driveTimeLabel}. Book Eagle Eye.`,
    `${o} to ${d} car service — flat-rate chauffeur, door-to-door, no surge. Drive time ${route.driveTimeLabel}. Book Eagle Eye.`,
    `${o} to ${d} car service — flat-rate chauffeur, no surge. ${route.driveTimeLabel} drive. Book Eagle Eye.`,
  ];
  const description = descOptions.find((t) => t.length <= 158) ?? descOptions[descOptions.length - 1];
  return { title, description };
}
