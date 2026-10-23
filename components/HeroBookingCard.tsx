'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { clsx } from 'clsx';

type Mode = 'airport' | 'point-to-point';

/** Values must match the AIRPORTS list in app/book/page.tsx. */
const AIRPORT_OPTIONS = [
  { value: 'JFK - John F. Kennedy', label: 'JFK — John F. Kennedy' },
  { value: 'LGA - LaGuardia', label: 'LGA — LaGuardia' },
  { value: 'EWR - Newark Liberty', label: 'EWR — Newark Liberty' },
];

const inputClass =
  'w-full rounded-lg border border-brand-line bg-brand-white px-3.5 py-3 text-[15px] text-brand-ink placeholder:text-brand-muted/80 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent-soft';

/**
 * Hero trip card: collects the basics and hands off to /book with the fields prefilled
 * (the booking page reads them from the query string). No price is shown here until the
 * owner decides whether rates are public.
 */
export function HeroBookingCard() {
  const router = useRouter();
  const [mode, setMode] = useState<Mode>('airport');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [airport, setAirport] = useState(AIRPORT_OPTIONS[0].value);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams({ service: mode });
    if (pickup.trim()) params.set('pickup', pickup.trim());
    if (mode === 'airport') params.set('airport', airport);
    else if (dropoff.trim()) params.set('dropoff', dropoff.trim());
    if (date) params.set('date', date);
    if (time) params.set('time', time);
    router.push(`/book?${params.toString()}`);
  }

  return (
    <form
      onSubmit={submit}
      className="w-full rounded-2xl bg-brand-white p-5 sm:p-6 shadow-[0_20px_50px_-20px_rgb(19_35_43/0.35)] ring-1 ring-brand-line"
      aria-label="Start a booking"
    >
      <div role="tablist" aria-label="Trip type" className="grid grid-cols-2 gap-1 rounded-lg bg-brand-tint p-1 mb-5">
        {([
          ['airport', 'Airport'],
          ['point-to-point', 'City to city'],
        ] as [Mode, string][]).map(([value, label]) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={mode === value}
            onClick={() => setMode(value)}
            className={clsx(
              'rounded-md py-2 text-sm font-semibold font-display transition-colors',
              mode === value ? 'bg-brand-white text-brand-accent shadow-sm' : 'text-brand-muted hover:text-brand-ink'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        <div>
          <label htmlFor="hero-pickup" className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
            Pick-up
          </label>
          <input
            id="hero-pickup"
            className={inputClass}
            placeholder="Address, hotel or office"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            autoComplete="street-address"
          />
        </div>

        {mode === 'airport' ? (
          <div>
            <label htmlFor="hero-airport" className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
              Airport
            </label>
            <select id="hero-airport" className={inputClass} value={airport} onChange={(e) => setAirport(e.target.value)}>
              {AIRPORT_OPTIONS.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div>
            <label htmlFor="hero-dropoff" className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
              Destination
            </label>
            <input
              id="hero-dropoff"
              className={inputClass}
              placeholder="e.g. Philadelphia, Stamford, Washington DC"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="hero-date" className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
              Date
            </label>
            <input id="hero-date" type="date" className={inputClass} value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <label htmlFor="hero-time" className="block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5">
              Time
            </label>
            <input id="hero-time" type="time" className={inputClass} value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-brand-accent py-3.5 font-display text-[15px] font-bold text-brand-white hover:bg-brand-accent-hover transition-colors"
      >
        Get my price
      </button>
      <p className="mt-3 text-center text-xs text-brand-muted">No account needed. You confirm before anything is booked.</p>
    </form>
  );
}
