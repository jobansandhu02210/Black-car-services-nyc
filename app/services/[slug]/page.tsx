import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { getSiteUrl } from '@/lib/site';
import { siteKeywords } from '@/lib/seo';
import { WHATSAPP_BOOKING_URL } from '@/lib/contact';
import { ogDefaults } from '@/lib/og';

type ServiceEntry = {
  title: string;
  h1: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  heroSubtitle: string;
  includes: string[];
  useCases: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; href: string; sub: string }[];
  ctaHeading: string;
  ctaSubline: string;
};

const services: Record<string, ServiceEntry> = {
  'point-to-point': {
    title: 'Point-to-Point Transfers',
    h1: 'Point-to-Point Black Car Service NYC',
    seoTitle: 'Point-to-Point Car Service NYC | Direct Transfers | Eagle Eye',
    description: 'Direct, luxurious black car transportation within NYC and surrounding areas.',
    metaDescription:
      'Direct luxury point-to-point transfers in NYC. Door-to-door black car across all 5 boroughs, Long Island, NJ & CT. Flat rates, no surge. Book 24/7.',
    keywords: [
      'point to point car service NYC',
      'door to door black car Manhattan',
      'NYC private car transfer',
      'fixed rate chauffeur New York',
      'borough to borough car service',
      'direct car service NYC',
    ],
    image: '/service-point-to-point.jpg',
    heroSubtitle: 'Direct, door-to-door luxury transportation from any pickup to any destination — across Manhattan, all five boroughs, Long Island, New Jersey, Connecticut, and beyond. Flat rate, confirmed at booking.',
    includes: [
      'Door-to-door pickup at your exact address — hotel lobby, building entrance, or co-op',
      'Flat-rate pricing locked at booking — no surge, no hidden fees',
      'TLC-licensed, professional chauffeur',
      'Luxury sedan or SUV, always clean and maintained',
      'Luggage assistance at pickup and drop-off',
      'Driver confirmed the evening before your trip',
      '24/7 booking and support via phone or WhatsApp',
    ],
    useCases: [
      { title: 'Hotel to Office', desc: 'Arrive at your Manhattan business meeting in a luxury sedan with no parking stress and total peace of mind.' },
      { title: 'Apartment to Dinner', desc: 'Cross-borough rides from the Upper East Side to Williamsburg or downtown — no bridge traffic worries.' },
      { title: 'NYC to the Hamptons', desc: 'Long Island transfers with flat rates to East Hampton, Southampton, Bridgehampton, and all Hamptons destinations.' },
      { title: 'NYC to Connecticut', desc: 'Greenwich, Stamford, Westport, and Hartford. Direct service with a professional driver and no tolls surprises.' },
      { title: 'Groups of 2–6', desc: 'SUV transfers keep everyone together — no splitting up the party into separate vehicles.' },
      { title: 'Late-Night Returns', desc: 'After a show, dinner, or event — no surge pricing no matter the hour. Fixed price, door-to-door.' },
    ],
    faqs: [
      {
        q: 'What is point-to-point car service?',
        a: 'Point-to-point service means a direct, non-stop transfer from one specific address to another. Your driver picks you up at your door and drives you directly to your destination with no detours or shared rides.',
      },
      {
        q: 'How does point-to-point pricing work?',
        a: 'All rates are flat and confirmed at booking. Enter your pickup and destination on our booking page and you\'ll see an exact quote instantly. The price never changes due to traffic, time of day, or demand.',
      },
      {
        q: 'Do you serve all NYC boroughs for point-to-point transfers?',
        a: 'Yes. We serve all five boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island — plus Long Island, Westchester, New Jersey, Connecticut, and the Hamptons.',
      },
      {
        q: 'Can I book a point-to-point ride for someone else?',
        a: 'Absolutely. Book for a client, guest, or family member. Just provide the passenger name and contact details at booking. Your driver will be there with their name ready.',
      },
      {
        q: 'Is point-to-point better than an hourly booking?',
        a: 'Point-to-point is best when you have a single destination and need a direct transfer. Hourly hire is better when you have multiple stops, client visits, or a flexible schedule throughout the day.',
      },
    ],
    relatedLinks: [
      { label: 'Airport Transfers', href: '/services/airport', sub: 'JFK, LGA, EWR & HPN' },
      { label: 'Hourly Chauffeur', href: '/services/hourly', sub: 'By the hour, all day' },
      { label: 'Service Areas', href: '/services/areas', sub: 'All NYC & surrounding regions' },
    ],
    ctaHeading: 'Book Your Point-to-Point Black Car',
    ctaSubline: 'Instant quote. Flat rate. Door-to-door professional service.',
  },

  hourly: {
    title: 'Hourly Chauffeur Service',
    h1: 'Hourly Chauffeur Service NYC | Black Car Hire by the Hour',
    seoTitle: 'Hourly Chauffeur Service NYC | Car Hire by the Hour | Eagle Eye',
    description: 'Flexible hourly black car hire for meetings, events, roadshows, and city tours in NYC.',
    metaDescription:
      'Hire a NYC black car chauffeur by the hour — executive meetings, roadshows, events & city tours. Luxury sedan or SUV. Flexible scheduling. Book 24/7.',
    keywords: [
      'hourly chauffeur NYC',
      'chauffeur by the hour Manhattan',
      'NYC black car hourly hire',
      'executive day driver New York',
      'roadshow chauffeur NYC',
      'hourly car service New York City',
    ],
    image: '/service-hourly.jpg',
    heroSubtitle: 'Your driver — your schedule. Hire a professional chauffeur by the hour for back-to-back meetings, client tours, roadshows, events, or a full day across New York City. Your driver stays with you the entire booking.',
    includes: [
      'Dedicated chauffeur for the full duration of your booking',
      'Luxury sedan or SUV — choose your vehicle class',
      'Driver waits at every stop — no re-booking between appointments',
      'Real-time routing around NYC traffic and construction',
      'Professional discretion — ideal for client and VIP transfers',
      'Invoicing available for corporate accounts',
      '24/7 support via phone or WhatsApp',
    ],
    useCases: [
      { title: 'Executive Roadshows', desc: 'Multi-stop investor meetings across Midtown, Wall Street, and beyond. Your driver moves between locations seamlessly.' },
      { title: 'Back-to-Back Client Visits', desc: 'Finance, law, and corporate executives needing a reliable driver for a full morning or afternoon of office visits.' },
      { title: 'Corporate Event Days', desc: 'Board meetings, conference shuttles, offsite events. We coordinate multiple vehicles and drivers as needed.' },
      { title: 'City Tours for VIP Guests', desc: 'First-time visitors or international clients — show them New York in style with a knowledgeable professional driver.' },
      { title: 'Shopping & Personal Errands', desc: 'A few hours for luxury shopping on Fifth Avenue or Madison Avenue. Your driver loads bags and keeps you on schedule.' },
      { title: 'Medical Appointments', desc: 'Comfortable, stress-free transport for medical visits across Manhattan and the outer boroughs.' },
    ],
    faqs: [
      {
        q: 'What is the minimum booking for hourly chauffeur service?',
        a: 'Our standard minimum is 2 hours for hourly hire. For full-day bookings and roadshows, we recommend a 4–8 hour block. Contact us for specific requirements based on your itinerary.',
      },
      {
        q: 'Does the driver stay with me during stops?',
        a: 'Yes. With hourly hire, your chauffeur stays with you for the entire booking — waiting outside your meetings, appointments, or events. No need to call for a new car between stops.',
      },
      {
        q: 'Can I extend my hourly booking on the day?',
        a: 'Yes, subject to driver availability. Let your chauffeur or our team know as early as possible if you need to extend. We accommodate extensions whenever we can.',
      },
      {
        q: 'Can I book hourly service for a roadshow?',
        a: 'Absolutely. Roadshows are one of our most common hourly requests. We coordinate the full itinerary, multiple stops, and — if needed — multiple vehicles.',
      },
      {
        q: 'Is hourly chauffeur service available on weekends?',
        a: 'Yes. We operate 24/7, including all weekends and holidays. Hourly service is popular on weekends for events, shopping, and social engagements.',
      },
    ],
    relatedLinks: [
      { label: 'Corporate Travel', href: '/services/corporate', sub: 'Accounts & executive transport' },
      { label: 'Point-to-Point', href: '/services/point-to-point', sub: 'Direct transfers, flat rate' },
      { label: 'Special Events', href: '/services/special-events', sub: 'Weddings, galas, occasions' },
    ],
    ctaHeading: 'Book Your Hourly Chauffeur',
    ctaSubline: 'Driver stays with you all day. No re-booking between stops.',
  },

  airport: {
    title: 'NYC Airport Transfers',
    h1: 'NYC Airport Car Service | JFK, LGA, EWR & HPN Black Car Transfers',
    seoTitle: 'NYC Airport Transfer | JFK, LGA & EWR Car Service | Eagle Eye',
    description: 'Premium airport car service to JFK, LGA, EWR & HPN — meet-and-greet, real-time flight tracking, flat rates.',
    metaDescription:
      'NYC airport transfers to JFK, LGA, EWR & HPN. Real-time tracking, meet & greet, flat rates — no surge. Professional chauffeur at arrivals. 24/7.',
    keywords: [
      'JFK airport car service NYC',
      'LaGuardia black car service',
      'EWR airport transfer Manhattan',
      'HPN Westchester airport car',
      'NYC airport meet and greet',
      'private airport transfer New York',
    ],
    image: '/service-airport.jpg',
    heroSubtitle: 'Professional black car service to and from all New York City airports — JFK, LGA, EWR, and HPN. Real-time flight tracking, meet-and-greet at arrivals, flat rates with no surge pricing. Confirmed driver the night before.',
    includes: [
      'Meet-and-greet at arrivals — chauffeur with name sign at your terminal',
      'Real-time flight tracking — no extra charge for delays or early arrivals',
      'Flat-rate pricing locked at booking — no surge on early morning or late-night flights',
      'Door-to-door pickup at your Manhattan, Brooklyn, or NJ address',
      '60 minutes of complimentary wait time after your flight lands',
      'Correct terminal drop-off — we know every airline at every airport',
      'Luggage assistance at pickup and the airport terminal',
    ],
    useCases: [
      { title: 'JFK Arrivals & Departures', desc: 'All terminals. Business class sedan or SUV — confirmed driver, name sign at baggage claim. From all NYC neighborhoods and Long Island.' },
      { title: 'LaGuardia Airport (LGA)', desc: 'Manhattan\'s closest major airport. Fast, flat-rate service from anywhere in the city with no surge on morning departures.' },
      { title: 'Newark Airport (EWR)', desc: 'All tunnel tolls included. Service from all Manhattan neighborhoods and New Jersey. Real-time flight tracking at EWR.' },
      { title: 'Westchester Airport (HPN)', desc: 'White Plains, Westchester County. Private and commercial terminal service with professional meet-and-greet.' },
      { title: 'Early Morning Departures', desc: '4am, 5am, 6am flights — no surge pricing. Driver confirmed the night before so there\'s zero stress on departure day.' },
      { title: 'International Arrivals', desc: 'Long international flights with customs delays? We track them all. Your driver is there when you walk out — not a minute before.' },
    ],
    faqs: [
      {
        q: 'Do you track flights for airport pickups?',
        a: 'Yes — we monitor every flight in real time. If your flight is delayed, early, or diverted, your driver adjusts automatically at no extra charge. You never have to call us to update your pickup.',
      },
      {
        q: 'Where does the driver meet me at the airport?',
        a: 'For arrivals, your chauffeur meets you in the ground transportation area of your terminal with a sign displaying your name. You\'ll receive the exact meeting point and driver details before landing.',
      },
      {
        q: 'How much wait time is included after landing?',
        a: 'We include 60 minutes of complimentary wait time after your scheduled or actual arrival. This covers customs, baggage claim, and any terminal walking time.',
      },
      {
        q: 'Do you serve all terminals at JFK, LGA, and EWR?',
        a: 'Yes. We serve all terminals at JFK (1, 2, 4, 5, 7, 8), LaGuardia (B, C, D), and Newark (A, B, C). Your driver is assigned to your specific terminal based on your airline.',
      },
      {
        q: 'Is surge pricing charged for early morning or late-night airport rides?',
        a: 'Never. Our prices are flat and fixed at booking. A 4am departure to JFK costs the same as a 10am departure. Time of day, weather, and demand never affect your fare.',
      },
      {
        q: 'Can I book an airport transfer for someone else?',
        a: 'Yes. Book for a client, family member, or guest. Provide the passenger name and flight number and we\'ll handle everything from tracking to the terminal pickup.',
      },
    ],
    relatedLinks: [
      { label: 'JFK Airport Service', href: '/services/airport/jfk', sub: 'All JFK terminals' },
      { label: 'LGA Airport Service', href: '/services/airport/lga', sub: 'LaGuardia transfers' },
      { label: 'EWR Airport Service', href: '/services/airport/ewr', sub: 'Newark, tolls included' },
    ],
    ctaHeading: 'Book Your Airport Transfer',
    ctaSubline: 'Flight tracking included. Flat rate. Chauffeur waiting when you land.',
  },

  corporate: {
    title: 'Corporate Car Service NYC',
    h1: 'Corporate Car Service NYC | Executive Chauffeur for Business Travel',
    seoTitle: 'Corporate Car Service NYC | Executive Chauffeur | Eagle Eye',
    description: 'Premium corporate chauffeur service for executives, roadshows, and business travel in NYC.',
    metaDescription:
      'Corporate car service NYC — roadshows, board meetings, client transfers & corporate accounts. Discreet, punctual TLC-certified chauffeurs. Book 24/7.',
    keywords: [
      'corporate car service NYC',
      'executive transportation Manhattan',
      'business black car New York',
      'NYC roadshow chauffeur',
      'corporate account car service',
      'executive chauffeur New York City',
    ],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&q=80',
    heroSubtitle: 'From single executive transfers to full roadshows and board meeting logistics — Eagle Eye Chauffeur supports NYC corporate travel with discretion, precision, and a consistent premium experience.',
    includes: [
      'Corporate account setup with consolidated monthly invoicing',
      'Dedicated driver relationships for recurring executive clients',
      'Multi-vehicle coordination for roadshows and investor events',
      'Executive assistants and travel managers — we take the detail burden off you',
      'Discreet, professionally trained chauffeurs with NDA-level confidentiality',
      'All 4 NYC airports served — JFK, LGA, EWR, HPN',
      'Multi-stop itinerary management throughout the business day',
    ],
    useCases: [
      { title: 'Executive Roadshows', desc: 'Multi-day, multi-stop investor and client roadshows across Manhattan\'s financial district and Midtown. Full itinerary coordination.' },
      { title: 'Board Meetings & Law Firms', desc: 'Reliable executive transport to board meetings, investor presentations, and law firm appointments — never late, always professional.' },
      { title: 'Airport Pickups for VIP Guests', desc: 'Pick up international clients, board members, and executives from JFK, LGA, or EWR with meet-and-greet and name sign at arrivals.' },
      { title: 'Client Entertainment', desc: 'Restaurant transfers, event pickups, Broadway or sports events — your clients arrive in style and comfort.' },
      { title: 'Corporate Relocation Support', desc: 'Executives relocating to NYC need reliable ground transportation during the transition. We provide consistent, accountable service.' },
      { title: 'Recurring Corporate Accounts', desc: 'Many of our clients use Eagle Eye daily. We set up accounts with consolidated billing and dedicated driver assignments for regulars.' },
    ],
    faqs: [
      {
        q: 'Do you offer corporate accounts with invoicing?',
        a: 'Yes. We work with corporate travel managers, executive assistants, and CFOs to set up accounts with consolidated monthly invoicing. Contact us to arrange a corporate account.',
      },
      {
        q: 'Can the same driver be assigned to regular corporate rides?',
        a: 'Yes. For recurring corporate clients, we assign a preferred driver whenever possible. Consistency builds trust — your executive knows who is picking them up.',
      },
      {
        q: 'Do you sign NDAs or confidentiality agreements for corporate clients?',
        a: 'Yes. For high-profile executives, law firms, financial institutions, and M&A clients, we can execute standard NDAs. Confidentiality is non-negotiable for our team.',
      },
      {
        q: 'Can you coordinate multi-vehicle corporate events?',
        a: 'Absolutely. Roadshows, conference days, and corporate events requiring multiple vehicles and drivers are part of our core offering. We manage the full logistics.',
      },
      {
        q: 'What notice do you need for corporate bookings?',
        a: 'Standard corporate rides: 24 hours. Roadshows, multi-vehicle events, or complex itineraries: 48–72 hours or more. For recurring accounts, we handle the scheduling directly.',
      },
    ],
    relatedLinks: [
      { label: 'Hourly Chauffeur', href: '/services/hourly', sub: 'By the hour — driver stays all day' },
      { label: 'Airport Transfers', href: '/services/airport', sub: 'JFK, LGA, EWR & HPN' },
      { label: 'Special Events', href: '/services/special-events', sub: 'Galas, dinners, client entertainment' },
    ],
    ctaHeading: 'Set Up Your Corporate Account',
    ctaSubline: 'Dedicated drivers. Consolidated billing. Total discretion.',
  },

  'special-events': {
    title: 'Wedding & Event Chauffeur Service',
    h1: 'Wedding & Special Event Chauffeur Service NYC',
    seoTitle: 'Special Event Car Service NYC | Weddings & Galas | Eagle Eye',
    description: 'Luxury chauffeur service for weddings, proms, galas, concerts, and special occasions in NYC.',
    metaDescription:
      'Luxury car service for weddings, proms, galas & concerts in NYC. Professional chauffeur, elegant vehicles, no surge pricing. Book Eagle Eye now.',
    keywords: [
      'wedding car service NYC',
      'prom chauffeur New York',
      'gala black car Manhattan',
      'concert transportation NYC',
      'special event chauffeur',
      'luxury wedding transportation New York',
    ],
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80',
    heroSubtitle: 'Your special day deserves perfect transportation. Elegant luxury vehicles, professional chauffeurs, and coordinated arrivals and departures — so you focus on the moment, not the logistics.',
    includes: [
      'Pristine luxury sedan or SUV, detailed before every event',
      'Professional, formally dressed chauffeur',
      'On-time arrival — coordinated with your event schedule',
      'Complimentary wait time at the venue',
      'Luggage and floral arrangement assistance',
      'Multiple vehicles available for wedding parties and large groups',
      'Red-carpet curbside service and arrival coordination',
    ],
    useCases: [
      { title: 'Wedding Day Transportation', desc: 'Bridal party arrivals, ceremony to reception transfers, after-party pickups — coordinated across the full day with multiple vehicles if needed.' },
      { title: 'Wedding Rehearsal Dinner', desc: 'The night before your wedding, arrive at rehearsal dinners and welcome events with elegant, stress-free transportation.' },
      { title: 'Prom Night', desc: 'A memorable, safe night out. Luxury sedan or SUV for prom arrivals and returns — parents and students can trust the experience.' },
      { title: 'Galas & Black-Tie Events', desc: 'Metropolitan Museum Gala, charity galas, black-tie dinners — arrive in a vehicle that matches the dress code.' },
      { title: 'Concerts & Broadway Shows', desc: 'No parking, no surge pricing, no scramble after the show. Door-to-door black car service for Carnegie Hall, the Met, and Broadway.' },
      { title: 'Anniversaries & Milestones', desc: 'A special anniversary dinner, a milestone birthday, a graduation celebration — we make the ride part of the occasion.' },
    ],
    faqs: [
      {
        q: 'How far in advance should I book a wedding car service?',
        a: 'For weddings, we recommend booking at least 4–8 weeks in advance, especially for peak wedding season (May–October). Popular dates fill up quickly, so the sooner you reach out, the better.',
      },
      {
        q: 'Do you provide multiple vehicles for a wedding party?',
        a: 'Yes. We coordinate multiple vehicles for bridal parties, groomsmen, family members, and guest shuttles. We manage the full schedule so everyone arrives on time.',
      },
      {
        q: 'Is there surge pricing for New Year\'s Eve or holiday events?',
        a: 'No. All rates are flat and confirmed at booking. New Year\'s Eve, Valentine\'s Day, prom weekend — the rate you book is the rate you pay. No exceptions.',
      },
      {
        q: 'Can you accommodate decorations in the vehicle?',
        a: 'Yes, with advance notice. Floral arrangements, ribbons, and tasteful wedding decorations can be arranged. Let us know at booking and we\'ll make it happen.',
      },
      {
        q: 'What vehicles are best for a wedding?',
        a: 'Our First Class Sedan and First Class SUV are most popular for weddings — elegant, spotless, and professionally presented. For larger parties, our SUVs accommodate up to 6 passengers with bags.',
      },
    ],
    relatedLinks: [
      { label: 'Hourly Chauffeur', href: '/services/hourly', sub: 'By the hour for events' },
      { label: 'Corporate Events', href: '/services/corporate', sub: 'Galas & client entertainment' },
      { label: 'Fleet', href: '/fleet', sub: 'View all vehicle options' },
    ],
    ctaHeading: 'Book Your Event Chauffeur',
    ctaSubline: 'Elegant vehicle. Professional chauffeur. Perfect timing.',
  },

  'chauffeur-service': {
    title: 'Chauffeur Service',
    h1: 'NYC Chauffeur Service | Professional Black Car Chauffeur New York',
    seoTitle: 'NYC Chauffeur Service | Professional Black Car | Eagle Eye',
    description: 'Professional NYC chauffeur service with TLC-licensed drivers, luxury black cars, and flat-rate pricing across New York City.',
    metaDescription:
      'NYC chauffeur service — professional, background-checked drivers in luxury black cars across all boroughs, Long Island, NJ & CT. Flat rates. 24/7.',
    keywords: [
      'nyc chauffeur service',
      'chauffeur service new york',
      'professional chauffeur nyc',
      'black car chauffeur service manhattan',
      'luxury chauffeur new york city',
      'private chauffeur nyc',
      'chauffeur service near me nyc',
    ],
    image: '/service-point-to-point.jpg',
    heroSubtitle: 'A professional, uniformed chauffeur — at your door, on time, every time. Eagle Eye delivers the gold standard of chauffeur service across New York City and the entire tri-state area.',
    includes: [
      'TLC-licensed, uniformed professional chauffeur',
      'Late-model luxury sedan or SUV — spotless, every trip',
      'Real-time traffic monitoring and optimal routing',
      'Door-to-door luggage assistance',
      'Driver confirmed the evening before your trip',
      'Flat-rate pricing — no surge, no hidden fees',
      '24/7 booking and support via phone or WhatsApp',
    ],
    useCases: [
      { title: 'Daily Executive Commute', desc: 'Start every workday in a luxury sedan with a professional chauffeur — no parking, no stress, just comfort from door to desk.' },
      { title: 'Client & VIP Transport', desc: 'Impress your clients with a uniformed chauffeur at arrivals. Name-sign greeting, luggage handled, seamless experience.' },
      { title: 'Airport Transfers', desc: 'JFK, LGA, EWR, and HPN — your chauffeur monitors your flight and is there when you land, no matter the delay.' },
      { title: 'Hotel to Hotel', desc: 'Between properties in Manhattan or across boroughs — a discreet chauffeur who knows the city as well as you do.' },
      { title: 'Medical Appointments', desc: 'Reliable, punctual chauffeur service for hospital visits, specialist appointments, and treatments across NYC and NJ.' },
      { title: 'After Events & Galas', desc: 'Late-night returns from Lincoln Center, Carnegie Hall, or midtown events — your chauffeur waits, no surge pricing ever.' },
    ],
    faqs: [
      {
        q: 'What is a chauffeur service and how is it different from a taxi or rideshare?',
        a: 'A chauffeur service provides a professional, uniformed driver in a pre-booked luxury vehicle at a flat rate. Unlike taxis or rideshares, there is no surge pricing, no app matching uncertainty, and no shared rides. Your driver is confirmed in advance and held to a higher standard of professionalism.',
      },
      {
        q: 'Are your chauffeurs TLC-licensed?',
        a: 'Yes. Every Eagle Eye chauffeur holds a valid NYC TLC (Taxi & Limousine Commission) license, has passed a thorough background check, and is professionally trained for executive-level service.',
      },
      {
        q: 'Can I book a regular chauffeur for daily use?',
        a: 'Absolutely. We offer recurring bookings for executives, business travelers, and residents who need reliable daily transport. Contact us to set up a corporate or personal account with consolidated invoicing.',
      },
      {
        q: 'What vehicles are available for chauffeur service?',
        a: 'We offer Business Class Sedans (Cadillac CT6, Mercedes E-Class), Business Class SUVs (Chevrolet Suburban, GMC Yukon XL), First Class Sedans (Mercedes S-Class, BMW 7 Series), and First Class SUVs (Cadillac Escalade, Lincoln Navigator).',
      },
      {
        q: 'How far in advance should I book a chauffeur?',
        a: 'We recommend at least 4–6 hours in advance for standard rides, and 24 hours for peak times, airport transfers, or recurring bookings. Last-minute bookings are accepted based on availability.',
      },
    ],
    relatedLinks: [
      { label: 'Hourly Chauffeur Service', href: '/services/hourly', sub: 'Book your chauffeur by the hour' },
      { label: 'Corporate Car Service', href: '/services/corporate', sub: 'Accounts & executive travel' },
      { label: 'Airport Car Service', href: '/services/airport', sub: 'JFK, LGA, EWR & HPN' },
    ],
    ctaHeading: 'Book a Professional NYC Chauffeur',
    ctaSubline: 'Flat-rate pricing. Uniformed driver. Luxury vehicle confirmed.',
  },

  'long-distance': {
    title: 'Long-Distance Car Service',
    h1: 'Long-Distance Car Service NYC | Luxury Out-of-State Black Car Transfers',
    seoTitle: 'Long-Distance Car Service NYC | Hamptons, CT, NJ | Eagle Eye',
    description: 'Luxury long-distance car service from NYC to the Hamptons, Connecticut, New Jersey, Philadelphia, Washington D.C., and beyond.',
    metaDescription:
      'Long-distance car service from NYC — flat-rate to the Hamptons, Greenwich, Stamford, Princeton, Philadelphia & DC. No surge pricing. Book 24/7.',
    keywords: [
      'long distance car service nyc',
      'nyc to hamptons car service',
      'nyc to connecticut car service',
      'long distance chauffeur service new york',
      'nyc to philadelphia car service',
      'nyc to washington dc car service',
      'luxury out of state car service nyc',
    ],
    image: '/service-long-distance.jpg',
    heroSubtitle: 'Comfortable, flat-rate long-distance black car transfers from New York City to the Hamptons, Connecticut, New Jersey, Philadelphia, and beyond — no surprise fees, no surge pricing.',
    includes: [
      'Flat-rate pricing confirmed at booking — no surprises at drop-off',
      'Luxury sedan or full-size SUV for extended comfort',
      'Professional TLC-licensed chauffeur for the full journey',
      'Complimentary bottled water and luggage assistance',
      'Tolls and highway fees included in quoted rate',
      'Real-time traffic routing for fastest, smoothest route',
      '24/7 support via phone or WhatsApp throughout your journey',
    ],
    useCases: [
      { title: 'NYC to the Hamptons', desc: 'Flat-rate transfers to East Hampton, Southampton, Bridgehampton, Sag Harbor, and Montauk. No Uber surge on summer Fridays — ever.' },
      { title: 'NYC to Greenwich & Stamford', desc: 'Corporate and residential transfers to Greenwich, Stamford, Westport, Norwalk, and the Gold Coast of Connecticut.' },
      { title: 'NYC to Princeton & Morristown NJ', desc: 'Executive transfers to Princeton, Morristown, Parsippany, and the NJ pharma corridor — flat rate, no detours.' },
      { title: 'NYC to Philadelphia', desc: 'Direct luxury sedan or SUV service between Manhattan and Philadelphia — 95 miles, no stops, door-to-door comfort.' },
      { title: 'NYC to Washington D.C.', desc: 'Long-haul executive transfers to D.C. for federal meetings, lobbying, and government affairs. Discretion guaranteed.' },
      { title: 'NYC to Boston', desc: 'Door-to-door transfers from Manhattan or the airports to Boston — business class comfort the entire way.' },
    ],
    faqs: [
      {
        q: 'How is long-distance pricing calculated?',
        a: 'All long-distance rates are flat and confirmed at booking. You enter your pickup and destination, see the quote, and that price is locked in — no tolls added at the end, no surge for Friday evenings or holiday weekends.',
      },
      {
        q: 'What is the most popular long-distance route from NYC?',
        a: 'NYC to the Hamptons is our most popular long-distance route, especially during summer. We cover all Hamptons destinations — East Hampton, Southampton, Bridgehampton, Sag Harbor, Westhampton, and Montauk.',
      },
      {
        q: 'Can I make stops along the way on a long-distance trip?',
        a: 'Yes. Additional stops can be added to your booking. For multiple stops or a full-day itinerary, our hourly chauffeur service may be more cost-effective — contact us to discuss the best option.',
      },
      {
        q: 'Do you include tolls in your long-distance rates?',
        a: 'Yes. Our quoted flat rates include expected tolls and highway fees for the journey. There are no add-ons at drop-off.',
      },
      {
        q: 'Can I book a round-trip long-distance transfer?',
        a: 'Yes. Round-trip bookings are available and can be scheduled in advance. Your return driver will be confirmed separately so you have full coverage both ways.',
      },
    ],
    relatedLinks: [
      { label: 'NYC to Hamptons', href: '/services/routes/manhattan-to-hamptons-car-service', sub: 'Summer & year-round' },
      { label: 'NYC to Connecticut', href: '/services/routes/manhattan-to-connecticut-car-service', sub: 'Greenwich, Stamford & beyond' },
      { label: 'NYC to Philadelphia', href: '/services/routes/nyc-to-philadelphia', sub: 'Flat-rate direct transfer' },
    ],
    ctaHeading: 'Book Your Long-Distance Car Service',
    ctaSubline: 'Flat rate, confirmed at booking. No surge — ever.',
  },

  'limousine-service': {
    title: 'Limousine Service',
    h1: 'NYC Limousine Service | Luxury Limo & Car Service New York',
    seoTitle: 'NYC Limousine Service | Luxury Limo Manhattan | Eagle Eye',
    description: 'Premium NYC limousine service for special occasions, corporate events, airport transfers, and VIP nights out in New York City.',
    metaDescription:
      'NYC limousine service — premium luxury car in Manhattan and all five boroughs. Corporate, airport, weddings & nights out. TLC-licensed. Book 24/7.',
    keywords: [
      'nyc limousine service',
      'limo service new york',
      'limousine service nyc',
      'luxury limo service manhattan',
      'limo car service new york city',
      'nyc limo service near me',
      'limousine company new york',
    ],
    image: '/service-limousine.jpg',
    heroSubtitle: 'New York City\'s premier limousine service — luxury vehicles, professional chauffeurs, and seamless service for every occasion. From corporate events to galas, airport transfers to VIP nights out.',
    includes: [
      'TLC-licensed professional chauffeur — uniformed and discreet',
      'Luxury sedan, SUV, or Sprinter Van based on your group size',
      'Flat-rate pricing — no meter, no surge, no hidden fees',
      'Meet-and-greet service with name sign at airports',
      'Complimentary bottled water and luggage assistance',
      'Real-time flight tracking for airport limousine pickups',
      '24/7 booking and dispatch support',
    ],
    useCases: [
      { title: 'Corporate & Business Limo', desc: 'Professional limousine service for executives, client transport, roadshows, and investor meetings across Manhattan and NYC.' },
      { title: 'Airport Limo Service', desc: 'JFK, LGA, EWR, and HPN — luxury limo pickup with meet-and-greet, name sign, and real-time flight tracking.' },
      { title: 'Wedding Limousine', desc: 'Arrive in elegance on your most important day. Luxury sedan or SUV for the bridal party, guests, and couple.' },
      { title: 'Gala & Black-Tie Events', desc: 'Lincoln Center, Metropolitan Museum, Carnegie Hall — make your arrival as impressive as the event itself.' },
      { title: 'Prom Limo Service', desc: 'Safe, reliable, and stylish prom night transportation for students across NYC, Long Island, and Westchester.' },
      { title: 'VIP & Celebrity Transport', desc: 'Discreet, NDA-capable limousine service for high-profile clients, executives, and entertainment industry professionals.' },
    ],
    faqs: [
      {
        q: 'What is the difference between a limousine service and a regular car service?',
        a: 'A limousine service provides premium, pre-booked transportation with a professional chauffeur in a luxury vehicle — sedan, SUV, or Sprinter Van. Unlike standard car services or rideshares, limousine service is characterized by higher vehicle standards, professional uniformed drivers, and a focus on the passenger experience.',
      },
      {
        q: 'Do you offer stretch limousines?',
        a: 'Eagle Eye specializes in luxury black cars, SUVs, and Sprinter Vans rather than stretch limos. Our vehicles offer a more refined, modern luxury experience preferred by executives and discerning clients. For large groups, our Luxury Sprinter Van accommodates up to 14 passengers.',
      },
      {
        q: 'Can I book a limousine service for an airport pickup?',
        a: 'Yes. Our airport limousine service includes real-time flight tracking, meet-and-greet with a name sign, and luggage assistance at JFK, LGA, EWR, and HPN. Flat rate, no surge on delays.',
      },
      {
        q: 'How far in advance should I book a limousine for a special event?',
        a: 'For weddings, galas, and major events, we recommend booking at least 48–72 hours in advance. For high-demand dates (New Year\'s Eve, Met Gala, prom season), book as early as possible to secure availability.',
      },
      {
        q: 'Is limousine service available 24/7 in NYC?',
        a: 'Yes. Eagle Eye Chauffeur operates 24 hours a day, 7 days a week, 365 days a year — including holidays, early-morning airport runs, and late-night event returns.',
      },
    ],
    relatedLinks: [
      { label: 'Wedding Car Service', href: '/services/wedding', sub: 'Luxury bridal transportation' },
      { label: 'Airport Car Service', href: '/services/airport', sub: 'JFK, LGA, EWR & HPN' },
      { label: 'Hourly Chauffeur Service', href: '/services/hourly', sub: 'Book by the hour' },
    ],
    ctaHeading: 'Book NYC Limousine Service',
    ctaSubline: 'Premium limo and luxury car service. Flat rate. Professional chauffeur.',
  },

  'sprinter-van-service': {
    title: 'Sprinter Van Service',
    h1: 'NYC Sprinter Van Service | Luxury Group Transportation New York',
    seoTitle: 'NYC Sprinter Van Service | Luxury Group Transport | Eagle Eye',
    description: 'Luxury Mercedes-Benz Sprinter van service in NYC for corporate groups, airport shuttles, events, and VIP group transportation.',
    metaDescription:
      'NYC Sprinter van service — luxury group transport for up to 14 passengers. Corporate shuttles, airport groups & conference transfers. TLC-licensed. 24/7.',
    keywords: [
      'sprinter van service nyc',
      'luxury sprinter van new york',
      'group transportation nyc',
      'mercedes sprinter van service manhattan',
      'sprinter van rental nyc',
      'corporate shuttle service nyc',
      'group airport transfer nyc',
    ],
    image: '/service-sprinter-van.jpg',
    heroSubtitle: 'Mercedes-Benz Sprinter van service for groups of up to 14 passengers — corporate shuttles, airport group transfers, conference transportation, and event coordination across NYC and the tri-state area.',
    includes: [
      'Mercedes-Benz Sprinter Van — luxury-appointed, climate controlled',
      'Professional TLC-licensed driver with group transport experience',
      'Up to 14 passengers and 10+ pieces of luggage',
      'Flat-rate group pricing — split among passengers for excellent value',
      'Event coordination for multi-stop and multi-vehicle bookings',
      'Wi-Fi available on request for corporate groups',
      '24/7 support and real-time driver communication',
    ],
    useCases: [
      { title: 'Corporate Group Shuttles', desc: 'Office-to-airport, conference center transfers, and daily corporate commuter shuttles for NYC business teams.' },
      { title: 'Airport Group Transfers', desc: 'Groups arriving at JFK, LGA, EWR, or HPN — one vehicle, everyone together, no rideshare chaos at arrivals.' },
      { title: 'Conference & Convention Transport', desc: 'Jacob Javits Center, Midtown hotels, and convention venues — on-time Sprinter service for your entire team.' },
      { title: 'Wedding Party Transportation', desc: 'Move the entire bridal party in one luxury Sprinter. Coordinated pickup and drop-off for the whole wedding day.' },
      { title: 'Sports & Event Groups', desc: 'Yankees, Mets, Giants games — or concerts at MSG and Barclays Center. Group Sprinter service, door-to-venue.' },
      { title: 'Hamptons & Long Island Groups', desc: 'Summer Hamptons group transfers — one Sprinter beats five separate cars and saves everyone money.' },
    ],
    faqs: [
      {
        q: 'How many passengers does your Sprinter van hold?',
        a: 'Our Executive Sprinter Van holds up to 14 passengers with 10+ bags. For larger groups or multiple vehicles, contact us for a coordinated multi-vehicle quote.',
      },
      {
        q: 'Is Sprinter van service more cost-effective than multiple sedans?',
        a: 'Yes, for groups of 7 or more passengers, a single Sprinter Van is significantly more cost-effective than two or three separate vehicles — and keeps the group together.',
      },
      {
        q: 'Do you offer Sprinter van service for airport group pickups?',
        a: 'Yes. We provide meet-and-greet group airport service at JFK, LGA, EWR, and HPN. Your driver coordinates the luggage and ensures everyone is accounted for before departure.',
      },
      {
        q: 'Can you coordinate multiple Sprinter vans for large events?',
        a: 'Absolutely. For large conferences, weddings, or corporate events requiring multiple vehicles, we offer full fleet coordination with synchronized scheduling and dedicated dispatch support.',
      },
      {
        q: 'Is the Sprinter van available for long-distance group trips?',
        a: 'Yes. Our Sprinter Van is ideal for long-distance group transfers to the Hamptons, Connecticut, Philadelphia, and other destinations. Flat-rate group pricing confirmed at booking.',
      },
    ],
    relatedLinks: [
      { label: 'Corporate Car Service', href: '/services/corporate', sub: 'Executive & group accounts' },
      { label: 'Long-Distance Car Service', href: '/services/long-distance', sub: 'Hamptons, CT & beyond' },
      { label: 'View Full Fleet', href: '/fleet', sub: 'Sedans, SUVs & Sprinters' },
    ],
    ctaHeading: 'Book NYC Sprinter Van Service',
    ctaSubline: 'Luxury group transportation. Up to 14 passengers. Flat-rate pricing.',
  },

  'wedding-car-service': {
    title: 'Wedding Car Service',
    h1: 'NYC Wedding Car Service | Luxury Bridal Transportation New York',
    seoTitle: 'NYC Wedding Car Service | Bridal & Wedding Limo | Eagle Eye',
    description: 'Luxury wedding car service in NYC — professional chauffeurs, elegant vehicles, and coordinated bridal party transportation for your perfect day.',
    metaDescription:
      'NYC wedding car service — elegant black cars, SUVs & Sprinter vans for weddings, rehearsal dinners & receptions. TLC-licensed. Book Eagle Eye 24/7.',
    keywords: [
      'wedding car service nyc',
      'luxury wedding transportation new york',
      'bridal car service manhattan',
      'wedding limo service nyc',
      'wedding chauffeur new york city',
      'wedding black car service nyc',
      'bridal party transportation nyc',
    ],
    image: '/service-point-to-point.jpg',
    heroSubtitle: 'Arrive at your wedding in understated elegance. Eagle Eye Chauffeur provides luxury wedding car service across New York City — professional chauffeurs, pristine vehicles, and flawless coordination for your most important day.',
    includes: [
      'Uniformed, professional chauffeur — discreet and punctual',
      'Pristine luxury sedan, SUV, or Sprinter Van for the bridal party',
      'Coordinated multi-vehicle scheduling for the full wedding day',
      'Ribbons and decoration on request (white ribbon standard)',
      'Complimentary bottled water and luggage assistance',
      'Rehearsal dinner and next-day brunch transportation available',
      'Dedicated wedding coordinator for multi-stop logistics',
    ],
    useCases: [
      { title: 'Bride & Groom Transport', desc: 'A private luxury sedan or SUV exclusively for the couple — to the venue, from the reception, and to the hotel.' },
      { title: 'Bridal Party Shuttle', desc: 'Keep the entire bridal party together in a luxury Sprinter Van — hair & makeup to the ceremony, stress-free.' },
      { title: 'Guest Shuttle Service', desc: 'Hotel-to-venue and venue-to-hotel guest shuttles ensure every guest arrives on time and in comfort.' },
      { title: 'Rehearsal Dinner Transport', desc: 'The evening before the big day — professional transportation for the wedding party and immediate family.' },
      { title: 'Long Island & Westchester Weddings', desc: 'Catering halls, vineyards, and waterfront venues across Long Island, Westchester, and New Jersey — we cover them all.' },
      { title: 'NYC Venue Weddings', desc: 'The Plaza, Rainbow Room, Cipriani, and all Manhattan venues — your chauffeur knows every loading dock and entrance.' },
    ],
    faqs: [
      {
        q: 'How far in advance should I book wedding car service?',
        a: 'We strongly recommend booking 2–4 weeks in advance for weddings, and even earlier for peak seasons (May–October and December). Popular Saturday dates fill quickly — confirm your vehicles as soon as your venue is booked.',
      },
      {
        q: 'Can you handle transportation for the entire wedding party?',
        a: 'Yes. We specialize in coordinated multi-vehicle wedding transportation. From the bridal party to guest shuttles, we assign dedicated vehicles and a dispatch coordinator for the full day.',
      },
      {
        q: 'What vehicles are available for wedding transportation?',
        a: 'We offer Business Class Sedans, First Class Sedans (Mercedes S-Class, BMW 7 Series), First Class SUVs (Cadillac Escalade, Lincoln Navigator), and Luxury Sprinter Vans for groups. All vehicles are immaculately presented for your wedding day.',
      },
      {
        q: 'Do you decorate the vehicles for weddings?',
        a: 'Yes. A white ribbon bow on the hood is provided as standard. Additional decorations can be arranged on request — contact us when booking to discuss specifics.',
      },
      {
        q: 'Can you also arrange transportation for the rehearsal dinner?',
        a: 'Absolutely. We frequently provide transportation for rehearsal dinners, morning-after brunches, and honeymoon airport transfers as part of the full wedding weekend package.',
      },
    ],
    relatedLinks: [
      { label: 'Limousine Service', href: '/services/limousine-service', sub: 'Luxury limo for any occasion' },
      { label: 'Sprinter Van Service', href: '/services/sprinter-van-service', sub: 'Group bridal party transport' },
      { label: 'View Our Fleet', href: '/fleet', sub: 'Sedans, SUVs & Sprinters' },
    ],
    ctaHeading: 'Book Your NYC Wedding Car Service',
    ctaSubline: 'Luxury vehicles. Flawless coordination. Your perfect day deserves the best.',
  },
};

const slugs = Object.keys(services);

export async function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const s = services[params.slug];
  if (!s) return { title: 'Service' };
  const base = getSiteUrl();
  const path = `${base}/services/${params.slug}`;
  return {
    title: { absolute: s.seoTitle },
    description: s.metaDescription,
    keywords: [...siteKeywords, ...s.keywords],
    alternates: { canonical: path },
    openGraph: {
      ...ogDefaults,
      url: path,
      title: s.seoTitle,
      description: s.metaDescription,
      images: [{ url: s.image, width: 1200, height: 630, alt: `${s.title} — Eagle Eye Chauffeur NYC` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.seoTitle,
      description: s.metaDescription,
      images: [s.image],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = services[params.slug];
  if (!s) notFound();

  const base = getSiteUrl();
  const path = `${base}/services/${params.slug}`;

  return (
    <>
      <FaqJsonLd faqs={s.faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: base },
        { name: 'Services', url: `${base}/services` },
        { name: s.title, url: path },
      ]} />
      <ServiceJsonLd name={s.title} description={s.metaDescription} url={path} />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[340px] bg-brand-black">
        <Image
          src={s.image}
          alt={s.title}
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/80" />
        <div className="absolute inset-0 flex items-end pb-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-brand-white mb-3">
              {s.h1}
            </h1>
            <p className="text-brand-silver max-w-2xl leading-relaxed">{s.heroSubtitle}</p>
          </div>
        </div>
      </section>

      <div className="bg-brand-offwhite">

        {/* CTAs */}
        <section className="py-8 bg-brand-white border-b border-brand-light">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3">
            <Link href="/book" className="inline-flex items-center justify-center px-7 py-3 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-sm">
              Book Now — Instant Quote
            </Link>
            <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Book on WhatsApp
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center px-7 py-3 border border-brand-black text-brand-black font-medium hover:bg-brand-offwhite transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                  What&rsquo;s Included in Every Booking
                </h2>
                <ul className="space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-brand-grey text-sm">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
                  When to Book {s.title}
                </h2>
                <div className="space-y-4">
                  {s.useCases.map((uc) => (
                    <div key={uc.title} className="bg-brand-white border border-brand-light p-4">
                      <h3 className="font-semibold text-brand-black text-sm mb-1">{uc.title}</h3>
                      <p className="text-brand-grey text-sm">{uc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Eagle Eye Benefits */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              The Eagle Eye Chauffeur Difference
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Flat Rate — Locked at Booking', body: 'Your price is confirmed when you book and never changes — no surprises at the end of the ride.' },
                { title: 'TLC-Licensed Professional Driver', body: 'Every chauffeur is TLC-licensed, background-checked, and trained to a professional hospitality standard.' },
                { title: 'Luxury Sedan or SUV — Guaranteed', body: 'You travel in a premium, clean, maintained black car every time — confirmed before your trip.' },
                { title: 'Exact Door Pickup', body: 'Your driver comes to your building entrance, hotel lobby, or terminal — not a nearby corner.' },
                { title: 'Driver Confirmed the Evening Before', body: 'You receive your chauffeur\'s name, number, and vehicle details the night before — not minutes beforehand.' },
                { title: '24/7 Phone & WhatsApp Support', body: 'Real support before, during, and after your trip — by phone or WhatsApp, any hour of the day.' },
              ].map((item) => (
                <div key={item.title} className="bg-brand-white border border-brand-light p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-brand-black font-bold mt-0.5 shrink-0">✓</span>
                    <h3 className="font-semibold text-brand-black text-sm">{item.title}</h3>
                  </div>
                  <p className="text-brand-grey text-sm pl-6">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              {s.title} — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {s.faqs.map((faq) => (
                <div key={faq.q} className="bg-brand-white border border-brand-light p-5">
                  <h3 className="font-medium text-brand-black mb-1">{faq.q}</h3>
                  <p className="text-sm text-brand-grey leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-black mb-6">
              Related Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {s.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="bg-brand-white border border-brand-light p-5 hover:border-brand-dark transition-colors">
                  <div className="font-semibold text-brand-black">{link.label}</div>
                  <div className="text-sm text-brand-grey mt-1">{link.sub}</div>
                </Link>
              ))}
            </div>
            <p className="mt-4 text-sm text-brand-grey">
              <Link href="/services" className="hover:text-brand-black underline">
                ← View all services
              </Link>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black p-8 text-center">
              <h2 className="font-serif text-2xl font-semibold text-brand-white mb-3">
                {s.ctaHeading}
              </h2>
              <p className="text-brand-silver mb-6">{s.ctaSubline}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/book" className="inline-block py-3 px-8 bg-brand-white text-brand-black font-medium hover:bg-brand-offwhite transition-colors">
                  Book Now
                </Link>
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-[#25D366] text-white font-medium hover:bg-[#1ebe5d] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
