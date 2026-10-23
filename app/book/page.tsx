'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GooglePlacesAutocomplete } from '@/components/GooglePlacesAutocomplete';
import { VehicleArt } from '@/components/VehicleArt';
import {
  CONTACT_EMAIL_BOOKINGS,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from '@/lib/contact';

type ServiceType = 'point-to-point' | 'hourly' | 'airport';
type VehicleType = 'business-sedan' | 'business-suv' | 'first-suv' | 'first-sedan';

const SERVICE_LABELS: Record<ServiceType, string> = {
  'point-to-point': 'Point-to-Point',
  hourly: 'By the hour',
  airport: 'Airport Transfer',
};

const VEHICLE_LABELS: Record<VehicleType, string> = {
  'business-sedan': 'Business Sedan',
  'business-suv': 'Business SUV',
  'first-suv': 'First Class SUV',
  'first-sedan': 'First Class Sedan',
};

// Capacities match VEHICLE_CAPACITY in lib/booking-estimate-server.ts and /fleet.
// No hard-coded hourly rates: pricing is still to be set by the owner (TODO(owner)).
const VEHICLE_META: Record<VehicleType, { kind: 'sedan' | 'suv'; passengers: number; luggage: number; description: string }> = {
  'business-sedan': { kind: 'sedan', passengers: 3, luggage: 3, description: 'The everyday choice for one or two travelers' },
  'business-suv':   { kind: 'suv',   passengers: 6, luggage: 6, description: 'Room for a family, a team or a lot of luggage' },
  'first-suv':      { kind: 'suv',   passengers: 6, luggage: 6, description: 'Our most spacious car, newer and top-trim' },
  'first-sedan':    { kind: 'sedan', passengers: 3, luggage: 3, description: 'Newer, quieter, more legroom — for clients' },
};

const AIRPORTS = ['JFK - John F. Kennedy', 'LGA - LaGuardia', 'EWR - Newark Liberty'];

type EstimateLine = { label: string; amount: number };

type BookingEstimate =
  | { incomplete: true; message: string }
  | { incomplete: false; amount: number; label: string; lines: EstimateLine[] };

const STEPS = [
  'Service & locations',
  'Date & time',
  'Vehicle & guests',
  'Details & quote',
  'Confirm',
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>('point-to-point');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Minimum pickup = now + 2 hours. Recomputed each render so it stays current.
  const minPickupMs = Date.now() + 2 * 60 * 60 * 1000;
  const minPickupDate = new Date(minPickupMs);
  const minDateStr = minPickupDate.toLocaleDateString('en-CA'); // YYYY-MM-DD in local time
  const minTimeStr = minPickupDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); // HH:MM local
  const [vehicle, setVehicle] = useState<VehicleType | null>(null);
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [hours, setHours] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [airport, setAirport] = useState('');
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
    'business-suv': null,
    'first-suv': null,
    'first-sedan': null,
  });
  const [allEstimatesLoading, setAllEstimatesLoading] = useState(false);

  // Prefill from the home-page trip card (/book?service=…&pickup=…&airport=…&date=…&time=…).
  // Read once on mount from window.location so the page can stay statically rendered.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const s = q.get('service');
    if (s === 'airport' || s === 'point-to-point' || s === 'hourly') setService(s);
    const a = q.get('airport');
    if (a && AIRPORTS.includes(a)) setAirport(a);
    setPickup((v) => v || (q.get('pickup') ?? '').slice(0, 300));
    setDropoff((v) => v || (q.get('dropoff') ?? '').slice(0, 300));
    const d = q.get('date');
    if (d && /^\d{4}-\d{2}-\d{2}$/.test(d)) setDate(d);
    const t = q.get('time');
    if (t && /^\d{2}:\d{2}$/.test(t)) setTime(t);
  }, []);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim());

  const hasRequiredLocations =
    (service === 'point-to-point' && pickup.trim() && dropoff.trim()) ||
    (service === 'airport' && pickup.trim() && airport.trim()) ||
    service === 'hourly';

  useEffect(() => {
    if (service === 'hourly') {
      setEstimate(null);
      setEstimateLoading(false);
      return;
    }

    if (step < 4 || !vehicle) {
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
    }, 550);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [step, service, vehicle, pickup, dropoff, airport, hours, passengers, luggage, customerEmail, customerPhone]);

  // Fetch prices for ALL vehicle types simultaneously when user reaches step 3
  useEffect(() => {
    if (service === 'hourly' || step !== 3) return;
    if (!hasRequiredLocations) {
      setAllEstimates({
        'business-sedan': null,
        'business-suv': null,
        'first-suv': null,
        'first-sedan': null,
      });
      setAllEstimatesLoading(false);
      return;
    }
    const vehicleTypes: VehicleType[] = ['business-sedan', 'business-suv', 'first-suv', 'first-sedan'];
    let cancelled = false;
    setAllEstimatesLoading(true);
    Promise.all(
      vehicleTypes.map((v) =>
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
      vehicleTypes.forEach((v, i) => { estimates[v] = results[i]; });
      setAllEstimates(estimates);
      setAllEstimatesLoading(false);
    });
    return () => { cancelled = true; };
  }, [step, service, pickup, dropoff, airport, hours, passengers, luggage, hasRequiredLocations]);

  // Auto-default date & time to the minimum allowed (now + 3 h) when user reaches Step 2.
  useEffect(() => {
    if (step === 2 && !date && !time) {
      setDate(minDateStr);
      setTime(minTimeStr);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

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

  const quoteReady = service !== 'hourly' && estimate && !estimate.incomplete;
  const quoteAmount = quoteReady ? estimate.amount : 0;
  const quoteLabel = quoteReady ? estimate.label : '';
  const quoteLines = quoteReady ? estimate.lines : [];

  const pricedEstimateBlock = (
    <>
      {estimateLoading ? (
        <p className="text-sm text-brand-grey mt-3">Calculating your quote…</p>
      ) : estimate?.incomplete ? (
        <p className="text-sm text-brand-grey mt-3">{estimate.message}</p>
      ) : quoteReady ? (
        <>
          <p className="text-sm text-brand-grey mt-1">{quoteLabel}</p>
          <ul className="mt-4 space-y-2">
            {quoteLines.map((line, i) => (
              <li key={i} className="flex justify-between gap-4 text-sm text-brand-grey">
                <span className="min-w-0">{line.label}</span>
                <span className="shrink-0 tabular-nums text-brand-black font-medium">${line.amount}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-baseline gap-4 mt-5 pt-4 border-t border-brand-light">
            <span className="font-serif text-lg font-semibold text-brand-black">Estimated total</span>
            <span className="text-2xl font-semibold text-brand-black tabular-nums">${quoteAmount}</span>
          </div>
        </>
      ) : (
        <p className="text-sm text-brand-grey mt-3">Preparing quote…</p>
      )}
    </>
  );

  const estimateDisclaimer = (
    <p className="text-xs text-brand-silver mt-3">
      Estimate updates as details change. Your official price will be on the invoice we send after we confirm your trip.
    </p>
  );

  /** Quote on step 3 (inline); steps 4–5 repeat it in the panel above the form so it stays visible. */
  const showQuoteSummaryPanel =
    service !== 'hourly' && !!vehicle && step >= 4 && step <= 5 && !bookingSubmitted;

  const canProceed =
    (step === 1 &&
      pickup.trim() &&
      (service === 'point-to-point' ? dropoff.trim() : true) &&
      (service !== 'airport' || airport)) ||
    (step === 2 && date && time) ||
    (step === 3 && !!vehicle) ||
    (step === 4) ||
    (step === 5 && bookingSubmitted);

  const next = () => {
    if (step < 5 && canProceed) setStep(step + 1);
  };
  const prev = () => setStep(Math.max(1, step - 1));

  const submitBooking = async () => {
    if (!customerName.trim() || !emailOk) return;
    if (!vehicle) return;
    setBookingStatus('sending');
    setBookingError(null);
    setBookingGuestCopyIssue(null);
    try {
      const res = await fetch('/api/booking/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({
          service: SERVICE_LABELS[service],
          vehicle: VEHICLE_LABELS[vehicle],
          pickup,
          dropoff: service === 'point-to-point' || service === 'hourly' ? dropoff : '',
          airport: service === 'airport' ? airport : '',
          date,
          time,
          passengers,
          luggage,
          hours: service === 'hourly' ? hours : undefined,
          specialRequests,
          quoteAmount: service === 'hourly' ? 0 : quoteAmount,
          quoteLabel:
            service === 'hourly'
              ? `Hourly chauffeur, ${hours} hr (2 hr minimum)`
              : quoteReady
                ? quoteLabel
                : 'Pending estimate',
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
    } catch {
      setBookingError('Network error. Please try again or call us.');
      setBookingStatus('error');
    }
  };

  return (
    <div className="bg-brand-offwhite min-h-screen py-12 lg:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-blue mb-3">Book a ride</p>
          <h1 className="text-3xl lg:text-4xl text-brand-ink">Book Your Black Car</h1>
          <p className="mt-3 text-brand-muted leading-relaxed">
            Airport or city to city, five short steps. You see an estimate as you go; we confirm the fare by email before
            the ride. No account needed.
          </p>
        </div>

        <h2 className="sr-only">Booking Form</h2>

        {/* Step indicator */}
        <ol className="flex justify-between mb-10 text-xs sm:text-sm" aria-label="Progress">
          {STEPS.map((label, i) => (
            <li
              key={i}
              className={`flex-1 text-center ${i + 1 <= step ? 'text-brand-black font-medium' : 'text-brand-silver'}`}
            >
              <span className="hidden sm:inline">{label}</span>
              <span className="sm:hidden">{i + 1}</span>
            </li>
          ))}
        </ol>

        {showQuoteSummaryPanel && (
          <div
            className="mb-6 border border-brand-light bg-brand-white p-5 sm:p-6 shadow-sm"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-brand-silver">Your quote</p>
            <p className="text-sm font-medium text-brand-black mt-2">
              {vehicle ? VEHICLE_LABELS[vehicle] : 'Select a vehicle'} · {passengers} passenger{passengers !== 1 ? 's' : ''}
              {luggage > 0 ? ` · ${luggage} luggage` : ''}
            </p>
            <div className="mt-4">{pricedEstimateBlock}</div>
            {estimateDisclaimer}
          </div>
        )}

        <div className="bg-brand-white border border-brand-light p-6 sm:p-8 shadow-sm">
          {/* Step 1: Service & locations */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-3">
                  Service type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(Object.keys(SERVICE_LABELS) as ServiceType[]).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s)}
                      className={`py-3 px-4 border text-sm font-medium transition-colors ${
                        service === s
                          ? 'border-brand-black bg-brand-black text-brand-white'
                          : 'border-brand-light text-brand-dark hover:border-brand-grey'
                      }`}
                    >
                      {SERVICE_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <GooglePlacesAutocomplete
                  id="pickup"
                  label="Pick-up location"
                  value={pickup}
                  onChange={setPickup}
                  placeholder="Address, airport, or hotel"
                  serverProxyEnabled={placesServerEnabled}
                />
                {placesServerEnabled && (
                  <p className="mt-1 text-xs text-brand-silver">Address suggestions powered by Google</p>
                )}
              </div>
              {(service === 'point-to-point' || service === 'hourly') && (
                <div>
                  <GooglePlacesAutocomplete
                    id="dropoff"
                    label={`Drop-off location${service === 'hourly' ? ' (optional for hourly)' : ''}`}
                    value={dropoff}
                    onChange={setDropoff}
                    placeholder="Address, airport, or hotel"
                    serverProxyEnabled={placesServerEnabled}
                  />
                </div>
              )}
              {service === 'airport' && (
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Airport
                  </label>
                  <select
                    value={airport}
                    onChange={(e) => setAirport(e.target.value)}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  >
                    <option value="">Select airport</option>
                    {AIRPORTS.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Date & time */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-brand-black mb-2">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                    // Reset time when date changes so user doesn't keep a now-invalid time
                    if (e.target.value === minDateStr) setTime(minTimeStr);
                    else setTime('');
                  }}
                  min={minDateStr}
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-brand-black mb-2">
                  Pick-up Time
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  min={date === minDateStr ? minTimeStr : undefined}
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                />
                <p className="mt-1.5 text-xs text-brand-grey">
                  We require at least 2 hours&apos; notice. Earliest available:{' '}
                  <span className="font-medium text-brand-black">
                    {minPickupDate.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })}
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Vehicle & guests */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-brand-black mb-1">
                  Choose your vehicle
                </label>
                {service === 'hourly' ? (
                  <p className="text-xs text-brand-grey mb-4">Hourly bookings have a 2-hour minimum</p>
                ) : (
                  <p className="text-xs text-brand-grey mb-4">Estimates update for your route and car</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(Object.keys(VEHICLE_LABELS) as VehicleType[]).map((v) => {
                    const meta = VEHICLE_META[v];
                    const est = allEstimates[v];
                    const isSelected = vehicle === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setVehicle(v)}
                        className={`text-left rounded-xl border transition-all overflow-hidden ${
                          isSelected
                            ? 'border-brand-blue ring-2 ring-brand-blue'
                            : 'border-brand-line hover:border-brand-blue'
                        }`}
                      >
                        {/* Vehicle image */}
                        <div className="relative overflow-hidden">
                          <VehicleArt kind={meta.kind} className="h-24 rounded-none" />
                          {isSelected && (
                            <div className="absolute top-2 right-2 rounded-md bg-brand-blue text-brand-white text-xs px-2 py-1 font-semibold">
                              ✓ Selected
                            </div>
                          )}
                        </div>
                        {/* Vehicle info + price */}
                        <div className={`p-4 ${ isSelected ? 'bg-brand-blue' : 'bg-brand-white' }`}>
                          <p className={`font-serif text-base font-semibold ${ isSelected ? 'text-brand-white' : 'text-brand-black' }`}>
                            {VEHICLE_LABELS[v]}
                          </p>
                          <p className={`text-xs mt-0.5 ${ isSelected ? 'text-brand-silver' : 'text-brand-grey' }`}>
                            {meta.description}
                          </p>
                          <p className={`text-xs mt-1 ${ isSelected ? 'text-brand-silver' : 'text-brand-grey' }`}>
                            Up to {meta.passengers} passengers · {meta.luggage} bags
                          </p>
                          {/* Price display */}
                          <div className={`mt-3 pt-3 border-t ${ isSelected ? 'border-white/20' : 'border-brand-light' }`}>
                            {service === 'hourly' ? (
                              <p className={`text-sm ${ isSelected ? 'text-brand-silver' : 'text-brand-grey' }`}>
                                Hourly rate confirmed with your quote
                              </p>
                            ) : !hasRequiredLocations ? (
                              <p className={`text-sm ${ isSelected ? 'text-brand-silver' : 'text-brand-grey' }`}>
                                Enter your route to see estimate
                              </p>
                            ) : allEstimatesLoading ? (
                              <p className={`text-sm ${ isSelected ? 'text-brand-silver' : 'text-brand-grey' }`}>
                                Calculating…
                              </p>
                            ) : est && !est.incomplete ? (
                              <div className="flex items-baseline gap-1">
                                <span className={`text-2xl font-semibold tabular-nums ${ isSelected ? 'text-brand-white' : 'text-brand-black' }`}>
                                  ${est.amount}
                                </span>
                                <span className={`text-xs ${ isSelected ? 'text-brand-silver' : 'text-brand-grey' }`}>
                                  estimated
                                </span>
                              </div>
                            ) : (
                              <p className={`text-sm ${ isSelected ? 'text-brand-silver' : 'text-brand-grey' }`}>
                                Quote on request
                              </p>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {!vehicle && (
                  <p className="mt-3 text-xs text-brand-silver">
                    Select a vehicle to continue.
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-brand-black mb-2">
                    Passengers
                  </label>
                  <input
                    id="passengers"
                    type="number"
                    min={1}
                    max={10}
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  />
                </div>
                <div>
                  <label htmlFor="luggage" className="block text-sm font-medium text-brand-black mb-2">
                    Luggage (bags)
                  </label>
                  <input
                    id="luggage"
                    type="number"
                    min={0}
                    max={20}
                    value={luggage}
                    onChange={(e) => setLuggage(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  />
                </div>
              </div>
              {service === 'hourly' && (
                <div>
                  <label htmlFor="hours" className="block text-sm font-medium text-brand-black mb-2">
                    Hours <span className="text-brand-silver font-normal">(2 minimum)</span>
                  </label>
                  <input
                    id="hours"
                    type="number"
                    min={2}
                    max={12}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                  />
                </div>
              )}

              {/* Disclaimer — estimate is now shown inline on each vehicle card */}
              {service !== 'hourly' && (
                <p className="text-xs text-brand-silver">
                  Estimates are based on your route and update as you change vehicle or guest details. Final price will be on your invoice.
                </p>
              )}
            </div>
          )}

          {/* Step 4: Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="requests" className="block text-sm font-medium text-brand-black mb-2">
                  Special requests
                </label>
                <textarea
                  id="requests"
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Child seat, accessibility needs, etc."
                  className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black resize-y"
                />
              </div>
              <p className="text-sm text-brand-grey">
                {service === 'hourly' ? (
                  <>
                    Add any notes here. Hourly bookings have a <strong className="text-brand-black">2 hour minimum</strong>.
                  </>
                ) : (
                  <>
                    Add any notes here. The <strong className="text-brand-black">estimate</strong> above is a guide;
                    your invoice will show the confirmed price.
                  </>
                )}
              </p>
            </div>
          )}

          {/* Step 5: Confirm & notify */}
          {step === 5 && (
            <div className="space-y-6">
              {bookingSubmitted ? (
                <div className="bg-brand-offwhite border border-brand-light p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold text-brand-black mb-2">
                    Request received
                  </h3>
                  <p className="text-brand-grey text-sm">
                    <>
                      Your booking request has been received. Our team will be in touch shortly with your invoice and
                      confirmed trip details. Questions?{' '}
                      <a href={`mailto:${CONTACT_EMAIL_BOOKINGS}`} className="text-brand-black underline">
                        {CONTACT_EMAIL_BOOKINGS}
                      </a>
                    </>{' '}
                    Questions? Call{' '}
                    <a href={`tel:${CONTACT_PHONE_E164}`} className="text-brand-black underline">
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-brand-offwhite border border-brand-light p-6">
                    <h3 className="font-serif text-lg font-semibold text-brand-black mb-2">
                      Summary
                    </h3>
                    <ul className="text-sm text-brand-grey space-y-1">
                      <li>{SERVICE_LABELS[service]} • {vehicle ? VEHICLE_LABELS[vehicle] : 'Vehicle TBD'}</li>
                      <li>Pick-up: {pickup || '—'}</li>
                      {dropoff && <li>Drop-off: {dropoff}</li>}
                      {service === 'airport' && airport && <li>Airport: {airport}</li>}
                      <li>{date} at {time}</li>
                      {service === 'hourly' && (
                        <>
                          <li>Hours: {hours}</li>
                          <li className="font-medium text-brand-black mt-2">2 hours minimum</li>
                        </>
                      )}
                      {service !== 'hourly' && (
                        <li className="font-medium text-brand-black mt-2">
                          Website estimate: {quoteReady ? `$${quoteAmount}` : '—'} (invoice will show final price)
                        </li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-brand-black mb-4">
                      Your contact details
                    </h3>
                    <p className="text-brand-grey text-sm mb-4">
                      Submitting notifies our team at {CONTACT_EMAIL_BOOKINGS}. We&apos;ll email you an acknowledgment,
                      then send your <strong className="text-brand-black">invoice</strong> with the final ride price
                      after we confirm details.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cust-name" className="block text-sm font-medium text-brand-black mb-2">
                          Full name
                        </label>
                        <input
                          id="cust-name"
                          type="text"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          autoComplete="name"
                          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="cust-email" className="block text-sm font-medium text-brand-black mb-2">
                          Email
                        </label>
                        <input
                          id="cust-email"
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          autoComplete="email"
                          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="cust-phone" className="block text-sm font-medium text-brand-black mb-2">
                          Phone <span className="text-brand-silver font-normal">(optional)</span>
                        </label>
                        <input
                          id="cust-phone"
                          type="tel"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          autoComplete="tel"
                          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-black"
                          placeholder={CONTACT_PHONE_DISPLAY}
                        />
                      </div>
                    </div>
                    {bookingError && (
                      <p className="mt-4 text-sm text-red-600" role="alert">
                        {bookingError}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="mt-8 flex flex-col-reverse sm:flex-row gap-4 justify-between">
            <button
              type="button"
              onClick={prev}
              className="py-3 px-6 border border-brand-dark text-brand-black font-medium hover:bg-brand-offwhite transition-colors"
            >
              Back
            </button>
            {step < 5 ? (
              <button
                type="button"
                onClick={next}
                disabled={!canProceed}
                className="py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : bookingSubmitted ? (
              <Link
                href="/"
                className="py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors text-center sm:inline-block"
              >
                Back to home
              </Link>
            ) : (
              <button
                type="button"
                onClick={submitBooking}
                disabled={bookingStatus === 'sending' || !customerName.trim() || !emailOk}
                className="py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {bookingStatus === 'sending' ? 'Sending…' : 'Submit booking request'}
              </button>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-brand-grey">
          <Link href="/contact" className="hover:text-brand-black underline">
            Need help? Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}
