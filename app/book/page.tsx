'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GooglePlacesAutocomplete } from '@/components/GooglePlacesAutocomplete';
import { VehiclePhoto } from '@/components/VehiclePhoto';
import { classPhoto } from '@/lib/fleet';
import { CONTACT_EMAIL_BOOKINGS, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';

type ServiceType = 'point-to-point' | 'hourly' | 'airport';
type VehicleType = 'business-sedan' | 'first-suv' | 'first-sedan' | 'sprinter';

/** Names used in booking emails. */
const SERVICE_LABELS: Record<ServiceType, string> = {
  'point-to-point': 'Point-to-Point',
  hourly: 'By the hour',
  airport: 'Airport Transfer',
};

const SERVICE_TABS: { id: ServiceType; label: string }[] = [
  { id: 'airport', label: 'Airport' },
  { id: 'point-to-point', label: 'City to city' },
  { id: 'hourly', label: 'By the hour' },
];

const VEHICLE_LABELS: Record<VehicleType, string> = {
  'business-sedan': 'Executive Sedan',
  'first-suv': 'First Class SUV',
  'first-sedan': 'First Class Sedan',
  sprinter: 'Sprinter Van',
};

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts. Hourly rates are shown on
// the vehicle rows for "By the hour" bookings; every total comes from /api/booking/estimate.
const VEHICLE_META: Record<VehicleType, { passengers: number; luggage: number; description: string; hourlyRate: number }> = {
  'business-sedan': { passengers: 3,  luggage: 3,  description: 'The everyday choice for one or two travelers', hourlyRate: 110 },
  'first-suv':      { passengers: 6,  luggage: 6,  description: 'Room for a family, a team or a lot of luggage', hourlyRate: 130 },
  'first-sedan':    { passengers: 3,  luggage: 3,  description: 'Quieter, more legroom — for clients and executives', hourlyRate: 180 },
  sprinter:         { passengers: 14, luggage: 14, description: 'For groups and teams traveling together', hourlyRate: 200 },
};

const VEHICLE_TYPES = Object.keys(VEHICLE_LABELS) as VehicleType[];

const AIRPORT_CHOICES = [
  { value: 'JFK - John F. Kennedy', code: 'JFK', name: 'Kennedy' },
  { value: 'LGA - LaGuardia', code: 'LGA', name: 'LaGuardia' },
  { value: 'EWR - Newark Liberty', code: 'EWR', name: 'Newark' },
];
const AIRPORTS = AIRPORT_CHOICES.map((a) => a.value);

type EstimateLine = { label: string; amount: number };

type BookingEstimate =
  | { incomplete: true; message: string }
  | { incomplete: false; amount: number; label: string; lines: EstimateLine[] };

const STEPS = ['Your trip', 'Your car', 'Your details'];

const labelClass = 'block text-xs font-semibold uppercase tracking-wide text-brand-muted mb-1.5';
const fieldClass =
  'w-full rounded-xl border border-brand-line bg-brand-white px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-muted/80 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent-soft';

const money = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;

/** − value + control for passengers, bags and hours. */
function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (n: number) => void;
}) {
  const buttonClass =
    'flex h-9 w-9 items-center justify-center rounded-full bg-brand-white text-lg text-brand-ink ring-1 ring-brand-line transition-colors hover:ring-brand-accent disabled:cursor-not-allowed disabled:opacity-40';
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-brand-tint px-4 py-3">
      <span className="text-sm font-medium text-brand-ink">{label}</span>
      <div className="flex items-center gap-3">
        <button type="button" aria-label={`Fewer: ${label}`} disabled={value <= min} onClick={() => onChange(value - 1)} className={buttonClass}>
          −
        </button>
        <span aria-live="polite" className="w-6 text-center font-semibold tabular-nums text-brand-ink">
          {value}
        </span>
        <button type="button" aria-label={`More: ${label}`} disabled={value >= max} onClick={() => onChange(value + 1)} className={buttonClass}>
          +
        </button>
      </div>
    </div>
  );
}

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>('airport');
  const [airportDirection, setAirportDirection] = useState<'to' | 'from'>('to');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [airport, setAirport] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [hours, setHours] = useState(2);

  // Earliest pickup = now + 2 hours. Set after mount so server and browser render the same HTML.
  const [minPickupDate, setMinPickupDate] = useState<Date | null>(null);
  const minDateStr = minPickupDate?.toLocaleDateString('en-CA'); // YYYY-MM-DD in local time
  const minTimeStr = minPickupDate?.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); // HH:MM local

  const [vehicle, setVehicle] = useState<VehicleType | null>(null);
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);
  const [flightNumber, setFlightNumber] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [placesServerEnabled, setPlacesServerEnabled] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingGuestCopyIssue, setBookingGuestCopyIssue] = useState<string | null>(null);
  const [estimate, setEstimate] = useState<BookingEstimate | null>(null);
  const [estimateLoading, setEstimateLoading] = useState(false);
  const [allEstimates, setAllEstimates] = useState<Record<VehicleType, BookingEstimate | null>>({
    'business-sedan': null,
    'first-suv': null,
    'first-sedan': null,
    sprinter: null,
  });
  const [allEstimatesLoading, setAllEstimatesLoading] = useState(false);

  // Prefill from links and the home-page trip card (/book?service=…&pickup=…&airport=…&date=…&time=…).
  // Read once on mount from window.location so the page can stay statically rendered.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const s = q.get('service');
    if (s === 'airport' || s === 'point-to-point' || s === 'hourly') setService(s);
    const a = q.get('airport');
    const validAirport = !!a && AIRPORTS.includes(a);
    if (validAirport) setAirport(a);
    const pick = (q.get('pickup') ?? '').slice(0, 300);
    const drop = (q.get('dropoff') ?? '').slice(0, 300);
    setPickup(pick);
    setDropoff(drop);

    const earliest = new Date(Date.now() + 2 * 60 * 60 * 1000);
    setMinPickupDate(earliest);
    const d = q.get('date');
    const t = q.get('time');
    const hasDate = !!d && /^\d{4}-\d{2}-\d{2}$/.test(d);
    const hasTime = !!t && /^\d{2}:\d{2}$/.test(t);
    setDate(hasDate ? d : earliest.toLocaleDateString('en-CA'));
    if (hasTime) setTime(t);
    else if (!hasDate) setTime(earliest.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));

    // The home-page card already collected the whole trip: go straight to choosing a car.
    const routeDone = !!pick && ((s === 'airport' && validAirport) || (s === 'point-to-point' && !!drop));
    if (routeDone && hasDate && hasTime) setStep(2);
  }, []);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim());

  const hasRequiredLocations =
    (service === 'point-to-point' && pickup.trim() && dropoff.trim()) ||
    (service === 'airport' && pickup.trim() && airport.trim()) ||
    service === 'hourly';

  // Estimate for the chosen vehicle (shown in the trip panel)
  useEffect(() => {
    if (step < 2 || !vehicle) {
      setEstimate(null);
      setEstimateLoading(false);
      return;
    }

    let cancelled = false;
    const t = setTimeout(async () => {
      setEstimateLoading(true);
      try {
        const res = await fetch('/api/booking/estimate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({
            service,
            vehicle,
            pickup,
            dropoff,
            airport,
            hours,
            passengers,
            luggage,
            customerEmail: customerEmail.trim(),
            customerPhone: customerPhone.trim(),
          }),
        });
        const data = (await res.json()) as BookingEstimate | { error?: string };
        if (cancelled) return;
        if (!res.ok) {
          const msg =
            typeof (data as { error?: string }).error === 'string'
              ? (data as { error: string }).error
              : 'Could not calculate an estimate. Try again in a moment.';
          setEstimate({ incomplete: true, message: msg });
          return;
        }
        setEstimate(data as BookingEstimate);
      } catch {
        if (!cancelled) {
          setEstimate({
            incomplete: true,
            message: 'Could not reach the server. Check your connection and try again.',
          });
        }
      } finally {
        if (!cancelled) setEstimateLoading(false);
      }
    }, 300);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [step, service, vehicle, pickup, dropoff, airport, hours, passengers, luggage, customerEmail, customerPhone]);

  // Prices for every vehicle on the car step
  useEffect(() => {
    if (service === 'hourly' || step !== 2) return;
    if (!hasRequiredLocations) {
      setAllEstimates({ 'business-sedan': null, 'first-suv': null, 'first-sedan': null, sprinter: null });
      setAllEstimatesLoading(false);
      return;
    }
    let cancelled = false;
    setAllEstimatesLoading(true);
    Promise.all(
      VEHICLE_TYPES.map((v) =>
        fetch('/api/booking/estimate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ service, vehicle: v, pickup, dropoff, airport, hours, passengers, luggage }),
        })
          .then((r) => (r.ok ? r.json() : { incomplete: true, message: 'Could not estimate' }))
          .catch(() => ({ incomplete: true, message: 'Could not estimate' }))
      )
    ).then((results) => {
      if (cancelled) return;
      const estimates = {} as Record<VehicleType, BookingEstimate>;
      VEHICLE_TYPES.forEach((v, i) => {
        estimates[v] = results[i];
      });
      setAllEstimates(estimates);
      setAllEstimatesLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [step, service, pickup, dropoff, airport, hours, passengers, luggage, hasRequiredLocations]);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/places/config', { credentials: 'same-origin' })
      .then((r) => (r.ok ? r.json() : { enabled: false }))
      .then((d: { enabled?: boolean }) => {
        if (!cancelled) setPlacesServerEnabled(!!d.enabled);
      })
      .catch(() => {
        if (!cancelled) setPlacesServerEnabled(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const quoteReady = !!estimate && !estimate.incomplete;
  const quoteAmount = estimate && !estimate.incomplete ? estimate.amount : 0;
  const quoteLabel = estimate && !estimate.incomplete ? estimate.label : '';

  const canProceed =
    step === 1
      ? !!pickup.trim() &&
        !!date &&
        !!time &&
        (service !== 'point-to-point' || !!dropoff.trim()) &&
        (service !== 'airport' || !!airport)
      : step === 2
        ? !!vehicle
        : false;

  const goToStep = (n: number) => {
    setStep(n);
    window.scrollTo({ top: 0 });
  };

  const submitBooking = async () => {
    if (!customerName.trim() || !emailOk || !vehicle) return;
    setBookingStatus('sending');
    setBookingError(null);
    setBookingGuestCopyIssue(null);
    const notes = [flightNumber.trim() && `Flight: ${flightNumber.trim()}`, specialRequests.trim()].filter(Boolean).join('\n');
    try {
      const res = await fetch('/api/booking/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          service: service === 'airport' ? `${SERVICE_LABELS.airport} (${airportDirection === 'to' ? 'to' : 'from'} airport)` : SERVICE_LABELS[service],
          vehicle: VEHICLE_LABELS[vehicle],
          pickup,
          dropoff: service === 'point-to-point' || service === 'hourly' ? dropoff : '',
          airport: service === 'airport' ? airport : '',
          date,
          time,
          passengers,
          luggage,
          hours: service === 'hourly' ? hours : undefined,
          specialRequests: notes,
          quoteAmount,
          quoteLabel: quoteReady ? quoteLabel : 'Pending estimate',
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          customerPhone: customerPhone.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        guestEmailSent?: boolean;
        guestEmailError?: string;
      };
      if (!res.ok) {
        setBookingError(typeof data.error === 'string' ? data.error : 'Could not send booking.');
        setBookingStatus('error');
        return;
      }
      if (data.guestEmailSent === false) {
        setBookingGuestCopyIssue(
          typeof data.guestEmailError === 'string'
            ? data.guestEmailError
            : 'We could not send a copy to your email. Your request still reached our team.'
        );
      }
      setBookingSubmitted(true);
      setBookingStatus('idle');
      window.scrollTo({ top: 0 });
    } catch {
      setBookingError('Network error. Please try again or call us.');
      setBookingStatus('error');
    }
  };

  const airportName = AIRPORT_CHOICES.find((a) => a.value === airport);
  const fromLine = service === 'airport' && airportDirection === 'from' ? airportName && `${airportName.name} Airport (${airportName.code})` : pickup;
  const toLine =
    service === 'airport'
      ? airportDirection === 'from'
        ? pickup
        : airportName && `${airportName.name} Airport (${airportName.code})`
      : dropoff;
  const whenLine =
    date && time
      ? new Date(`${date}T${time}`).toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
      : '';

  return (
    <div className="bg-brand-tint py-8 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-5xl text-brand-ink lg:text-[72px]">Book Your Black Car</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-muted">
            Three short steps, no account needed. You see your price before you send anything, and nothing is charged here.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Form card */}
          <div className="rounded-3xl bg-brand-white p-5 shadow-[0_24px_60px_-40px_rgb(15_27_45/0.5)] ring-1 ring-brand-line sm:p-8">
            <h2 className="sr-only">Booking form</h2>

            {!bookingSubmitted && (
              <ol className="mb-8 flex items-center gap-2" aria-label="Progress">
                {STEPS.map((label, i) => {
                  const n = i + 1;
                  const done = n < step;
                  const current = n === step;
                  return (
                    <li key={label} className="flex min-w-0 flex-1 items-center gap-2">
                      <button
                        type="button"
                        disabled={!done}
                        onClick={() => goToStep(n)}
                        aria-current={current ? 'step' : undefined}
                        className="flex min-w-0 items-center gap-2 disabled:cursor-default"
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                            done || current ? 'bg-brand-accent text-brand-white' : 'bg-brand-tint text-brand-muted'
                          }`}
                        >
                          {done ? '✓' : n}
                        </span>
                        <span className={`hidden truncate text-sm sm:block ${current ? 'font-semibold text-brand-ink' : 'text-brand-muted'}`}>{label}</span>
                      </button>
                      {n < STEPS.length && <span aria-hidden="true" className={`h-0.5 flex-1 rounded ${done ? 'bg-brand-accent' : 'bg-brand-line'}`} />}
                    </li>
                  );
                })}
              </ol>
            )}

            {/* Confirmation */}
            {bookingSubmitted && (
              <div className="py-6 text-center">
                <span aria-hidden="true" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-2xl text-brand-white">
                  ✓
                </span>
                <h3 className="mt-5 text-2xl text-brand-ink">Request received</h3>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-brand-muted">
                  Thanks, {customerName.trim().split(' ')[0]}. We&apos;ll confirm your trip and send your invoice by email. Questions? Call{' '}
                  <a href={`tel:${CONTACT_PHONE_E164}`} className="font-semibold text-brand-accent hover:underline">
                    {CONTACT_PHONE_DISPLAY}
                  </a>{' '}
                  or email{' '}
                  <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="font-semibold text-brand-accent hover:underline">
                    {CONTACT_EMAIL_BOOKINGS}
                  </a>
                  .
                </p>
                {bookingGuestCopyIssue && <p className="mx-auto mt-3 max-w-md text-sm text-brand-muted">{bookingGuestCopyIssue}</p>}
                <Link href="/" className="mt-6 inline-flex rounded-lg bg-brand-accent px-6 py-3 text-brand-white hover:bg-brand-accent-hover">
                  Back to home
                </Link>
              </div>
            )}

            {/* Step 1: trip */}
            {!bookingSubmitted && step === 1 && (
              <div className="space-y-5">
                <div role="tablist" aria-label="Trip type" className="grid grid-cols-3 gap-1 rounded-xl bg-brand-tint p-1">
                  {SERVICE_TABS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={service === t.id}
                      onClick={() => setService(t.id)}
                      className={`rounded-lg py-2.5 text-sm font-medium transition-colors ${
                        service === t.id ? 'bg-brand-white text-brand-accent shadow-sm' : 'text-brand-muted hover:text-brand-ink'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {service === 'airport' && (
                  <>
                    <div>
                      <p className={labelClass}>Which airport?</p>
                      <div className="grid grid-cols-3 gap-2">
                        {AIRPORT_CHOICES.map((a) => (
                          <button
                            key={a.value}
                            type="button"
                            aria-pressed={airport === a.value}
                            onClick={() => setAirport(a.value)}
                            className={`rounded-xl border px-2 py-3 text-center transition-colors ${
                              airport === a.value
                                ? 'border-brand-accent bg-brand-accent text-brand-white'
                                : 'border-brand-line bg-brand-white text-brand-ink hover:border-brand-accent'
                            }`}
                          >
                            <span className="block font-heading text-2xl leading-none">{a.code}</span>
                            <span className={`mt-1 block text-xs ${airport === a.value ? 'text-brand-silver' : 'text-brand-muted'}`}>{a.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1 rounded-xl bg-brand-tint p-1">
                      {(['to', 'from'] as const).map((d) => (
                        <button
                          key={d}
                          type="button"
                          aria-pressed={airportDirection === d}
                          onClick={() => setAirportDirection(d)}
                          className={`rounded-lg py-2 text-sm font-medium transition-colors ${
                            airportDirection === d ? 'bg-brand-white text-brand-accent shadow-sm' : 'text-brand-muted hover:text-brand-ink'
                          }`}
                        >
                          {d === 'to' ? 'To the airport' : 'From the airport'}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <GooglePlacesAutocomplete
                  id="pickup"
                  label={service === 'airport' ? (airportDirection === 'to' ? 'Pick-up address' : 'Drop-off address') : 'Pick-up address'}
                  value={pickup}
                  onChange={setPickup}
                  placeholder="Address, hotel or office"
                  serverProxyEnabled={placesServerEnabled}
                  labelClassName={labelClass}
                  inputClassName={fieldClass}
                  hideLoading
                />

                {service !== 'airport' && (
                  <GooglePlacesAutocomplete
                    id="dropoff"
                    label={service === 'hourly' ? 'Drop-off address (optional)' : 'Destination'}
                    value={dropoff}
                    onChange={setDropoff}
                    placeholder="Address, city or airport"
                    serverProxyEnabled={placesServerEnabled}
                    labelClassName={labelClass}
                    inputClassName={fieldClass}
                    hideLoading
                  />
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="date" className={labelClass}>Date</label>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      min={minDateStr}
                      onChange={(e) => {
                        setDate(e.target.value);
                        // Clear the time when the date changes so an earlier time can't stay selected
                        setTime(e.target.value === minDateStr && minTimeStr ? minTimeStr : '');
                      }}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className={labelClass}>{service === 'airport' && airportDirection === 'from' ? 'Landing time' : 'Pick-up time'}</label>
                    <input
                      id="time"
                      type="time"
                      value={time}
                      min={date === minDateStr ? minTimeStr : undefined}
                      onChange={(e) => setTime(e.target.value)}
                      className={fieldClass}
                    />
                  </div>
                </div>
                {minPickupDate && (
                  <p className="text-xs text-brand-muted">
                    Online bookings need 2 hours&apos; notice. Sooner?{' '}
                    <a href={`tel:${CONTACT_PHONE_E164}`} className="font-semibold text-brand-accent hover:underline">
                      Call {CONTACT_PHONE_DISPLAY}
                    </a>
                  </p>
                )}

                {service === 'hourly' && <Stepper label="Hours (2 minimum)" value={hours} min={2} max={12} onChange={setHours} />}
              </div>
            )}

            {/* Step 2: car */}
            {!bookingSubmitted && step === 2 && (
              <div className="space-y-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Stepper label="Passengers" value={passengers} min={1} max={18} onChange={setPassengers} />
                  <Stepper label="Bags" value={luggage} min={0} max={20} onChange={setLuggage} />
                </div>

                <ul className="space-y-3">
                  {VEHICLE_TYPES.map((v) => {
                    const meta = VEHICLE_META[v];
                    const est = allEstimates[v];
                    const isSelected = vehicle === v;
                    const tooSmall = passengers > meta.passengers || luggage > meta.luggage;
                    return (
                      <li key={v}>
                        <button
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setVehicle(v)}
                          className={`card-hover flex w-full items-center gap-3 rounded-2xl border bg-brand-white p-3 text-left sm:gap-4 ${
                            isSelected ? 'border-brand-accent ring-2 ring-brand-accent' : 'border-brand-line hover:border-brand-accent'
                          }`}
                        >
                          <VehiclePhoto
                            src={classPhoto(v).image}
                            alt={`${VEHICLE_LABELS[v]} — ${classPhoto(v).name}`}
                            className="w-24 shrink-0 sm:w-40"
                            sizes="160px"
                          />
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold text-brand-ink">{VEHICLE_LABELS[v]}</span>
                            <span className="mt-0.5 hidden text-sm text-brand-muted sm:block">{meta.description}</span>
                            <span className={`mt-0.5 block text-xs ${tooSmall ? 'font-semibold text-red-700' : 'text-brand-muted'}`}>
                              {tooSmall ? `Too small: fits ${meta.passengers} people, ${meta.luggage} bags` : `Up to ${meta.passengers} people · ${meta.luggage} bags`}
                            </span>
                          </span>
                          <span className="shrink-0 text-right">
                            {service === 'hourly' ? (
                              <>
                                <span className="block text-xl font-semibold tabular-nums text-brand-ink">{money(meta.hourlyRate)}</span>
                                <span className="block text-xs text-brand-muted">per hour</span>
                              </>
                            ) : allEstimatesLoading ? (
                              <span className="text-sm text-brand-muted">…</span>
                            ) : est && !est.incomplete ? (
                              <>
                                <span className="block text-xl font-semibold tabular-nums text-brand-ink">{money(est.amount)}</span>
                                <span className="block text-xs text-brand-muted">estimate</span>
                              </>
                            ) : (
                              <span className="text-xs text-brand-muted">Quote on request</span>
                            )}
                          </span>
                          <span
                            aria-hidden="true"
                            className={`hidden h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs sm:flex ${
                              isSelected ? 'bg-brand-accent text-brand-white' : 'ring-1 ring-brand-line'
                            }`}
                          >
                            {isSelected ? '✓' : ''}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Step 3: details */}
            {!bookingSubmitted && step === 3 && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="cust-name" className={labelClass}>Full name</label>
                  <input
                    id="cust-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    autoComplete="name"
                    className={fieldClass}
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cust-email" className={labelClass}>Email</label>
                    <input
                      id="cust-email"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      autoComplete="email"
                      className={fieldClass}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="cust-phone" className={labelClass}>Mobile (optional)</label>
                    <input
                      id="cust-phone"
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      autoComplete="tel"
                      className={fieldClass}
                      placeholder="For your driver's text"
                    />
                  </div>
                </div>
                {service === 'airport' && (
                  <div>
                    <label htmlFor="flight" className={labelClass}>Flight number (optional)</label>
                    <input
                      id="flight"
                      type="text"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      className={fieldClass}
                      placeholder="e.g. DL 402"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="requests" className={labelClass}>Anything else? (optional)</label>
                  <textarea
                    id="requests"
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Child seat, extra stop, accessibility needs"
                    className={`${fieldClass} resize-y`}
                  />
                </div>
                {bookingError && (
                  <p className="text-sm text-red-700" role="alert">
                    {bookingError}
                  </p>
                )}
              </div>
            )}

            {/* Buttons */}
            {!bookingSubmitted && (
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                {step > 1 ? (
                  <button type="button" onClick={() => goToStep(step - 1)} className="py-2 text-sm font-medium text-brand-muted hover:text-brand-ink">
                    ← Back
                  </button>
                ) : (
                  <span />
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => goToStep(step + 1)}
                    disabled={!canProceed}
                    className="rounded-lg bg-brand-accent px-8 py-3 text-brand-white hover:bg-brand-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {step === 1 ? 'See cars and prices' : 'Continue'}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submitBooking}
                    disabled={bookingStatus === 'sending' || !customerName.trim() || !emailOk}
                    className="rounded-lg bg-brand-accent px-8 py-3 text-brand-white hover:bg-brand-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {bookingStatus === 'sending' ? 'Sending…' : 'Request this ride'}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Live trip panel */}
          <aside className="rounded-3xl bg-brand-ink p-6 text-brand-white lg:sticky lg:top-24" aria-label="Your trip" aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-silver">Your trip</p>

            <div className="mt-4 space-y-4">
              <div className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-white" />
                <div className="min-w-0">
                  <p className="text-xs text-brand-silver">From</p>
                  <p className="break-words text-sm">{fromLine || '—'}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-brand-white" />
                <div className="min-w-0">
                  <p className="text-xs text-brand-silver">To</p>
                  <p className="break-words text-sm">{toLine || (service === 'hourly' ? 'As directed' : '—')}</p>
                </div>
              </div>
            </div>

            <dl className="mt-5 space-y-2 border-t border-brand-white/15 pt-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-brand-silver">When</dt>
                <dd className="text-right">{whenLine || '—'}</dd>
              </div>
              {service === 'hourly' && (
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-silver">Hours</dt>
                  <dd>{hours}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4">
                <dt className="text-brand-silver">Car</dt>
                <dd className="text-right">{vehicle ? VEHICLE_LABELS[vehicle] : '—'}</dd>
              </div>
              {step > 1 && (
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-silver">Group</dt>
                  <dd>
                    {passengers} {passengers === 1 ? 'person' : 'people'} · {luggage} {luggage === 1 ? 'bag' : 'bags'}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-5 border-t border-brand-white/15 pt-4">
              <p className="text-xs text-brand-silver">Trip estimate</p>
              <p className="mt-1 font-heading text-4xl tabular-nums">{estimateLoading ? '…' : quoteReady ? money(quoteAmount) : '—'}</p>
              {estimate?.incomplete && !estimateLoading ? (
                <p className="mt-2 text-xs text-brand-silver">{estimate.message}</p>
              ) : (
                <p className="mt-2 text-xs leading-relaxed text-brand-silver">
                  {vehicle ? 'We confirm the final price by email before your ride.' : 'Your price appears when you choose a car.'}
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
