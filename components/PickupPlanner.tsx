'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { AIRPORTS, isRushHour, type AirportCode } from '@/lib/airports';

const BUFFER_MIN = 30;
const AT_AIRPORT_MIN = { domestic: 120, international: 180 } as const;

const fieldClass =
  'w-full rounded-lg border border-brand-line bg-brand-white px-3.5 py-3 text-[15px] text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky';

const pad = (n: number) => String(n).padStart(2, '0');
const toDateParam = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const toTimeParam = (d: Date) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
const showTime = (d: Date) => d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
const showDay = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

/**
 * Departure planner: flight time + where you start → when to leave. Uses the upper end of the
 * drive-time range from lib/airports.ts (rush-hour range on weekday peaks) plus a fixed buffer.
 */
export function PickupPlanner({ airportCode }: { airportCode: AirportCode }) {
  const airport = AIRPORTS[airportCode];
  const [place, setPlace] = useState(airport.driveTimes[0].place);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [kind, setKind] = useState<'domestic' | 'international'>('domestic');

  const plan = useMemo(() => {
    if (!date || !time) return null;
    const departure = new Date(`${date}T${time}`);
    if (Number.isNaN(departure.getTime())) return null;
    const drive = airport.driveTimes.find((d) => d.place === place) ?? airport.driveTimes[0];
    const atTerminal = new Date(departure.getTime() - AT_AIRPORT_MIN[kind] * 60_000);
    // Judge traffic at the time you'd be on the road (start of an off-peak drive).
    const rush = isRushHour(new Date(atTerminal.getTime() - drive.off[1] * 60_000));
    const driveMax = rush ? drive.peak[1] : drive.off[1];
    const leaveMs = atTerminal.getTime() - (driveMax + BUFFER_MIN) * 60_000;
    const leave = new Date(Math.floor(leaveMs / 300_000) * 300_000); // round down to 5 minutes
    return { atTerminal, leave, rush, driveMax, drive };
  }, [airport, place, date, time, kind]);

  return (
    <div className="rounded-2xl bg-brand-white p-5 sm:p-7 ring-1 ring-brand-line">
      <p className="font-display text-lg font-bold text-brand-ink">When should I leave for {airport.shortName}?</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={`pp-place-${airport.code}`} className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
            Leaving from
          </label>
          <select id={`pp-place-${airport.code}`} className={fieldClass} value={place} onChange={(e) => setPlace(e.target.value)}>
            {airport.driveTimes.map((d) => (
              <option key={d.place} value={d.place}>
                {d.place}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`pp-date-${airport.code}`} className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
            Flight date
          </label>
          <input id={`pp-date-${airport.code}`} type="date" className={fieldClass} value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor={`pp-time-${airport.code}`} className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
            Departure time
          </label>
          <input id={`pp-time-${airport.code}`} type="time" className={fieldClass} value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <fieldset className="sm:col-span-2">
          <legend className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">Flight</legend>
          <div className="grid grid-cols-2 gap-1 rounded-lg bg-brand-tint p-1">
            {(['domestic', 'international'] as const).map((k) => (
              <button
                key={k}
                type="button"
                aria-pressed={kind === k}
                onClick={() => setKind(k)}
                className={clsx(
                  'rounded-md py-2 text-sm font-semibold font-display capitalize transition-colors',
                  kind === k ? 'bg-brand-white text-brand-blue shadow-sm' : 'text-brand-muted hover:text-brand-ink'
                )}
              >
                {k}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div aria-live="polite" className="mt-6">
        {plan ? (
          <div className="rounded-xl bg-brand-tint p-5">
            <p className="text-sm text-brand-muted">Be picked up by</p>
            <p className="font-display text-3xl font-bold text-brand-blue">
              {showTime(plan.leave)} <span className="text-base font-semibold text-brand-muted">{showDay(plan.leave)}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">
              That gets you to {airport.shortName} by {showTime(plan.atTerminal)} ({AT_AIRPORT_MIN[kind] / 60} hours before {kind === 'international' ? 'an' : 'a'} {kind}{' '}
              flight), allowing up to {plan.driveMax} minutes of {plan.rush ? 'rush-hour' : 'normal'} traffic from {plan.drive.place} and a{' '}
              {BUFFER_MIN}-minute cushion.
            </p>
            <Link
              href={`/book?service=airport&airport=${encodeURIComponent(airport.bookValue)}&date=${toDateParam(plan.leave)}&time=${toTimeParam(plan.leave)}`}
              className="mt-4 inline-flex rounded-lg bg-brand-blue px-5 py-2.5 font-display text-sm font-bold text-brand-white hover:bg-brand-blue-hover"
            >
              Book a pickup at {showTime(plan.leave)}
            </Link>
          </div>
        ) : (
          <p className="text-sm text-brand-muted">Enter your flight date and time to see when to leave.</p>
        )}
      </div>
      <p className="mt-3 text-xs text-brand-muted">
        A planning guide, not a guarantee: storms, holidays and stadium events can add time. Online bookings need two hours’ notice.
      </p>
    </div>
  );
}
