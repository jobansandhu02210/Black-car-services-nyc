'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { AIRPORTS, TERMINALS_CHECKED, type AirportCode } from '@/lib/airports';

const OTHER = '__other__';

const selectClass =
  'w-full rounded-lg border border-brand-line bg-brand-white px-3.5 py-3 text-[15px] text-brand-ink focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-sky';

function checkedLabel(): string {
  const [y, m, d] = TERMINALS_CHECKED.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

/** Airline → terminal lookup for JFK, LGA and EWR, read from lib/airports.ts. */
export function TerminalFinder({ initialAirport }: { initialAirport: AirportCode }) {
  const [code, setCode] = useState<AirportCode>(initialAirport);
  const [airline, setAirline] = useState('');
  const airport = AIRPORTS[code];
  const match = airport.airlines.find((a) => a.airline === airline);

  return (
    <div className="rounded-2xl bg-brand-tint p-5 sm:p-7 ring-1 ring-brand-line">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-lg font-bold text-brand-ink">Terminal Finder</p>
        <div role="tablist" aria-label="Airport" className="flex gap-1 rounded-lg bg-brand-white p-1 ring-1 ring-brand-line">
          {(Object.keys(AIRPORTS) as AirportCode[]).map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={code === c}
              onClick={() => {
                setCode(c);
                setAirline('');
              }}
              className={clsx(
                'rounded-md px-3 py-1.5 font-display text-sm font-bold transition-colors',
                code === c ? 'bg-brand-blue text-brand-white' : 'text-brand-muted hover:text-brand-ink'
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <label htmlFor={`tf-airline-${code}`} className="mt-5 block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
        Your airline at {airport.shortName}
      </label>
      <select id={`tf-airline-${code}`} className={selectClass} value={airline} onChange={(e) => setAirline(e.target.value)}>
        <option value="">Choose an airline</option>
        {airport.airlines.map((a) => (
          <option key={a.airline} value={a.airline}>
            {a.airline}
          </option>
        ))}
        <option value={OTHER}>My airline isn’t listed</option>
      </select>

      <div aria-live="polite" className="mt-5 min-h-[7rem]">
        {match && (
          <div className="rounded-xl bg-brand-white p-5 ring-1 ring-brand-line">
            <p className="text-sm text-brand-muted">{match.airline} at {airport.shortName}</p>
            <p className="mt-1 font-display text-2xl font-bold text-brand-blue">{match.terminal}</p>
            {match.moving && (
              <p className="mt-2 rounded-md bg-brand-sky px-3 py-2 text-sm text-brand-ink">
                This airline is changing terminals during 2026–27. Check the terminal on your boarding pass or in the airline’s
                app the day before you fly.
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-brand-muted">{airport.meetingTip}</p>
          </div>
        )}
        {airline === OTHER && (
          <div className="rounded-xl bg-brand-white p-5 ring-1 ring-brand-line">
            <p className="text-sm leading-relaxed text-brand-muted">
              Your boarding pass or the airline’s app shows the terminal. Add your flight number when you book and we will
              check it before pickup. {airport.meetingTip}
            </p>
          </div>
        )}
        {!airline && (
          <p className="text-sm text-brand-muted">Pick your airline to see the terminal and where to meet your driver.</p>
        )}
      </div>
      <p className="mt-3 text-xs text-brand-muted">
        Terminal information last checked {checkedLabel()}. Airlines do move — your boarding pass is always right.
      </p>
    </div>
  );
}
