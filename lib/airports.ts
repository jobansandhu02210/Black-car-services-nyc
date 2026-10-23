/**
 * Single source for airport facts used by the airport pages, the Terminal Finder and the
 * Pickup-time planner. Terminal assignments change (JFK is mid-rebuild through 2027+):
 * re-check every few months and bump TERMINALS_CHECKED.
 *
 * Rules: only list an airline → terminal pair when it is well established. Airlines that are
 * changing terminals are marked `moving` and the UI tells travelers to check their airline
 * instead of guessing a destination terminal.
 */

export const TERMINALS_CHECKED = '2026-10-22';

export type AirportCode = 'JFK' | 'LGA' | 'EWR';

export type Terminal = { name: string; airlines: string; note: string };
export type AirlineTerminal = { airline: string; terminal: string; moving?: boolean };
/** Minutes: [min, max] off-peak and rush hour. Rounded public-map estimates. */
export type DriveTime = { place: string; miles: number; off: [number, number]; peak: [number, number] };

export type Airport = {
  code: AirportCode;
  name: string;
  shortName: string;
  /** Value expected by the airport <select> on /book. */
  bookValue: string;
  path: string;
  terminals: Terminal[];
  airlines: AirlineTerminal[];
  /** Where the driver meets arriving passengers (same promise at every airport). */
  meetingTip: string;
  driveTimes: DriveTime[];
};

// TODO(owner): confirm the meeting-point promise.
const MEETING_TIP =
  'We confirm the meeting point before you land: inside the arrivals hall after baggage claim, or at the curb once you have your bags.';

export const AIRPORTS: Record<AirportCode, Airport> = {
  JFK: {
    code: 'JFK',
    name: 'John F. Kennedy International Airport',
    shortName: 'JFK',
    bookValue: 'JFK - John F. Kennedy',
    path: '/services/airport/jfk',
    terminals: [
      {
        name: 'Terminal 4',
        airlines: 'Delta and many of its international partners.',
        note: 'The largest terminal at JFK. Arrivals and departures are on separate levels, so tell us whether you are flying out or landing.',
      },
      {
        name: 'Terminal 5',
        airlines: 'JetBlue and some of its partner airlines.',
        note: 'JetBlue’s home at JFK, right next to the new Terminal 6 that is opening in phases.',
      },
      {
        name: 'Terminal 8',
        airlines: 'American Airlines and oneworld partners, including British Airways.',
        note: 'On the north side of the airport, closest to the Van Wyck for trips back to Manhattan and the Bronx.',
      },
      {
        name: 'Terminal 1 and the New Terminal One',
        airlines: 'International airlines, moving from the old Terminal 1 to the New Terminal One as it opens.',
        note: 'The first gates of the New Terminal One are due to open from late 2026, with more added through 2030. Check your airline’s app for which building you are using.',
      },
      {
        name: 'Terminals 6 and 7',
        airlines: 'Airlines are moving out of Terminal 7 and into the new Terminal 6 in stages through 2026 and 2027.',
        note: 'If your airline used Terminal 7 before, confirm the terminal on your boarding pass the day before you fly.',
      },
    ],
    airlines: [
      { airline: 'Delta', terminal: 'Terminal 4' },
      { airline: 'Emirates', terminal: 'Terminal 4' },
      { airline: 'KLM', terminal: 'Terminal 4' },
      { airline: 'Virgin Atlantic', terminal: 'Terminal 4' },
      { airline: 'JetBlue', terminal: 'Terminal 5' },
      { airline: 'American Airlines', terminal: 'Terminal 8' },
      { airline: 'British Airways', terminal: 'Terminal 8' },
      { airline: 'Japan Airlines', terminal: 'Terminal 8' },
      { airline: 'Qatar Airways', terminal: 'Terminal 8' },
      { airline: 'Air France', terminal: 'Terminal 1', moving: true },
      { airline: 'Korean Air', terminal: 'Terminal 1', moving: true },
      { airline: 'Lufthansa', terminal: 'Terminal 1', moving: true },
      { airline: 'United', terminal: 'Terminal 7', moving: true },
    ],
    meetingTip: MEETING_TIP,
    driveTimes: [
      { place: 'Midtown Manhattan', miles: 16, off: [40, 55], peak: [60, 90] },
      { place: 'Lower Manhattan / FiDi', miles: 18, off: [40, 55], peak: [60, 90] },
      { place: 'Upper East Side', miles: 17, off: [40, 55], peak: [60, 90] },
      { place: 'Downtown Brooklyn', miles: 17, off: [35, 50], peak: [50, 80] },
      { place: 'Williamsburg', miles: 16, off: [35, 45], peak: [50, 75] },
      { place: 'Long Island City', miles: 14, off: [30, 40], peak: [45, 70] },
      { place: 'Jersey City / Hoboken', miles: 25, off: [50, 70], peak: [75, 110] },
      { place: 'Stamford, CT', miles: 40, off: [55, 75], peak: [80, 120] },
      { place: 'Princeton, NJ', miles: 65, off: [85, 110], peak: [110, 150] },
      { place: 'Philadelphia, PA', miles: 105, off: [120, 150], peak: [150, 210] },
    ],
  },
  LGA: {
    code: 'LGA',
    name: 'LaGuardia Airport',
    shortName: 'LaGuardia',
    bookValue: 'LGA - LaGuardia',
    path: '/services/airport/lga',
    terminals: [
      {
        name: 'Terminal A',
        airlines: 'A small number of airlines — check your boarding pass.',
        note: 'The restored 1940 Marine Air Terminal on the west side of the airport. It is separate from Terminals B and C, so getting the terminal right matters here.',
      },
      {
        name: 'Terminal B',
        airlines: 'American, United, Southwest, Air Canada and others.',
        note: 'The large central terminal, rebuilt and fully opened in 2022. Departures and arrivals use different roadway levels.',
      },
      {
        name: 'Terminal C',
        airlines: 'Delta.',
        note: 'Delta’s rebuilt terminal on the east side of the airport, the closest to the Grand Central Parkway exit toward Manhattan.',
      },
    ],
    airlines: [
      { airline: 'Delta', terminal: 'Terminal C' },
      { airline: 'American Airlines', terminal: 'Terminal B' },
      { airline: 'United', terminal: 'Terminal B' },
      { airline: 'Southwest', terminal: 'Terminal B' },
      { airline: 'Air Canada', terminal: 'Terminal B' },
    ],
    meetingTip: MEETING_TIP,
    driveTimes: [
      { place: 'Midtown Manhattan', miles: 9, off: [25, 35], peak: [45, 70] },
      { place: 'Upper East Side', miles: 8, off: [20, 30], peak: [40, 60] },
      { place: 'Lower Manhattan / FiDi', miles: 12, off: [30, 40], peak: [50, 75] },
      { place: 'Downtown Brooklyn', miles: 12, off: [30, 40], peak: [50, 70] },
      { place: 'Williamsburg', miles: 9, off: [25, 35], peak: [40, 60] },
      { place: 'Long Island City', miles: 6, off: [15, 25], peak: [30, 45] },
      { place: 'Riverdale, Bronx', miles: 12, off: [25, 35], peak: [45, 65] },
      { place: 'Jersey City / Hoboken', miles: 16, off: [40, 55], peak: [60, 90] },
      { place: 'Greenwich, CT', miles: 28, off: [40, 55], peak: [60, 90] },
      { place: 'Stamford, CT', miles: 32, off: [45, 60], peak: [70, 100] },
    ],
  },
  EWR: {
    code: 'EWR',
    name: 'Newark Liberty International Airport',
    shortName: 'Newark',
    bookValue: 'EWR - Newark Liberty',
    path: '/services/airport/ewr',
    terminals: [
      {
        name: 'Terminal A',
        airlines: 'American, JetBlue, Air Canada and some United flights.',
        note: 'The newest terminal at Newark, opened in January 2023, with its own roadway and pickup area separate from B and C.',
      },
      {
        name: 'Terminal B',
        airlines: 'Most international airlines other than United, such as Lufthansa and British Airways.',
        note: 'The older international terminal, due to be replaced by a new one in the years ahead. Arrivals come out on the lower level.',
      },
      {
        name: 'Terminal C',
        airlines: 'United, for most domestic and international flights.',
        note: 'United’s hub and the busiest terminal at Newark. A few United flights use Terminal A instead, so check your boarding pass.',
      },
    ],
    airlines: [
      { airline: 'United', terminal: 'Terminal C (a few flights use A)' },
      { airline: 'American Airlines', terminal: 'Terminal A' },
      { airline: 'JetBlue', terminal: 'Terminal A' },
      { airline: 'Air Canada', terminal: 'Terminal A' },
      { airline: 'Lufthansa', terminal: 'Terminal B' },
      { airline: 'British Airways', terminal: 'Terminal B' },
    ],
    meetingTip: MEETING_TIP,
    driveTimes: [
      { place: 'Midtown Manhattan', miles: 16, off: [35, 50], peak: [60, 90] },
      { place: 'Lower Manhattan / FiDi', miles: 16, off: [30, 45], peak: [55, 85] },
      { place: 'Upper East Side', miles: 20, off: [45, 60], peak: [70, 100] },
      { place: 'Downtown Brooklyn', miles: 20, off: [40, 55], peak: [65, 95] },
      { place: 'Jersey City', miles: 9, off: [15, 25], peak: [30, 45] },
      { place: 'Hoboken', miles: 12, off: [20, 30], peak: [35, 55] },
      { place: 'Short Hills, NJ', miles: 12, off: [20, 30], peak: [30, 50] },
      { place: 'Morristown, NJ', miles: 25, off: [30, 40], peak: [45, 70] },
      { place: 'Princeton, NJ', miles: 40, off: [45, 60], peak: [60, 90] },
      { place: 'Philadelphia, PA', miles: 85, off: [90, 105], peak: [120, 150] },
    ],
  },
};

/** "40–55 min", or "2–2.5 h" once the lower bound reaches two hours. */
export function formatRange([min, max]: [number, number]): string {
  if (min >= 120) {
    const h = (m: number) => String(Math.round((m / 60) * 2) / 2);
    return `${h(min)}–${h(max)} h`;
  }
  return `${min}–${max} min`;
}

/** Pickup-time planner: weekday 6–10 am and 2–8 pm count as rush hour. */
export function isRushHour(date: Date): boolean {
  const day = date.getDay();
  if (day === 0 || day === 6) return false;
  const h = date.getHours() + date.getMinutes() / 60;
  return (h >= 6 && h < 10) || (h >= 14 && h < 20);
}
