'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { WHATSAPP_URL } from '@/lib/contact';

const TIP_PERCENTAGES = [10, 15, 20];

function TipPageContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get('success') === '1';

  const [rideAmount, setRideAmount] = useState<string>('');
  const [customTip, setCustomTip] = useState<string>('');
  const [selectedPercentage, setSelectedPercentage] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasMounted = useRef(false);

  // Autofocus ride amount on mount
  useEffect(() => {
    if (!hasMounted.current && !success) {
      hasMounted.current = true;
    }
  }, [success]);

  const rideTotal = parseFloat(rideAmount) || 0;

  const calculateTip = (percentage: number) =>
    Math.round(rideTotal * (percentage / 100) * 100) / 100;

  const getActiveTipAmount = () => {
    if (selectedPercentage !== null) return calculateTip(selectedPercentage);
    if (customTip) return parseFloat(customTip) || 0;
    return 0;
  };

  const tipAmount = getActiveTipAmount();
  const tipCents = Math.round(tipAmount * 100);

  async function handleTip() {
    if (tipCents < 100) {
      setError('Please enter a tip amount of at least $1.00');
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/tip/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tipCents }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setLoading(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="w-full max-w-lg bg-brand-white rounded-xl shadow-sm border border-brand-light p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-serif font-semibold text-brand-black mb-3">
          Thank You!
        </h1>
        <p className="text-brand-grey text-sm mb-6">
          Your tip was received. Your driver genuinely appreciates it — it makes a real difference.
        </p>
        <Link
          href="/"
          className="inline-block py-3 px-8 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
        >
          Back to Eagle Eye Chauffeur
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg bg-brand-white rounded-xl shadow-sm border border-brand-light p-8">
      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>

      <h1 className="text-2xl font-serif font-semibold text-center text-brand-black">
        Tip Your Driver
      </h1>
      <p className="mt-2 text-center text-brand-grey text-sm">
        Your driver worked hard to get you there comfortably. Show your appreciation.
      </p>

      {/* Ride amount */}
      <div className="mt-8">
        <label htmlFor="ride-amount" className="block text-sm font-medium text-brand-black mb-2">
          Your ride total
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-grey font-medium">$</span>
          <input
            id="ride-amount"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={rideAmount}
            onChange={(e) => {
              setRideAmount(e.target.value);
              setSelectedPercentage(null);
              setCustomTip('');
            }}
            className="w-full pl-8 pr-4 py-3 border border-brand-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black/10 focus:border-brand-black text-lg font-medium transition-colors"
          />
        </div>
        <p className="text-xs text-brand-grey mt-1">Enter the amount from your booking confirmation</p>
      </div>

      {/* Tip percentage buttons */}
      {rideTotal > 0 && (
        <div className="mt-6">
          <p className="text-sm font-medium text-brand-black mb-3">Quick tip</p>
          <div className="grid grid-cols-3 gap-3">
            {TIP_PERCENTAGES.map((pct) => (
              <button
                key={pct}
                onClick={() => {
                  setSelectedPercentage(pct);
                  setCustomTip('');
                  setError(null);
                }}
                className={`py-3 px-4 rounded-lg text-sm font-medium border transition-all ${
                  selectedPercentage === pct
                    ? 'bg-brand-black text-brand-white border-brand-black'
                    : 'bg-brand-white text-brand-black border-brand-light hover:border-brand-black/30'
                }`}
              >
                <span className="block text-base font-semibold">{pct}%</span>
                <span className="block text-xs mt-0.5 opacity-75">${calculateTip(pct).toFixed(2)}</span>
              </button>
            ))}
          </div>

          {/* Custom amount */}
          <div className="mt-4">
            <label htmlFor="custom-tip" className="text-sm font-medium text-brand-black">
              Or enter custom amount
            </label>
            <div className="relative mt-2">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-grey font-medium">$</span>
              <input
                id="custom-tip"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                value={customTip}
                onChange={(e) => {
                  setCustomTip(e.target.value);
                  setSelectedPercentage(null);
                  setError(null);
                }}
                className="w-full pl-8 pr-4 py-3 border border-brand-light rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black/10 focus:border-brand-black text-lg font-medium transition-colors"
              />
            </div>
          </div>
        </div>
      )}

      {/* Summary */}
      {rideTotal > 0 && tipAmount > 0 && (
        <div className="mt-8 bg-brand-offwhite rounded-lg p-5 border border-brand-light">
          <h3 className="text-sm font-semibold text-brand-black uppercase tracking-wider">Summary</h3>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-brand-grey">Ride total</span>
              <span className="font-medium">${rideTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-grey">
                Tip {selectedPercentage ? `(${selectedPercentage}%)` : ''}
              </span>
              <span className="font-medium text-green-600">${tipAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Pay button */}
      <div className="mt-8">
        <button
          onClick={handleTip}
          disabled={loading || tipCents < 100}
          className="w-full py-4 px-6 bg-brand-black text-brand-white text-center font-semibold rounded-lg hover:bg-brand-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? 'Redirecting to payment…' : tipAmount > 0 ? `Tip $${tipAmount.toFixed(2)} by Card` : 'Select a tip amount'}
        </button>
        <p className="mt-3 text-center text-xs text-brand-grey">
          Secure payment powered by Stripe. You&apos;ll be redirected to complete payment.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex-1 border-t border-brand-light" />
        <span className="text-xs text-brand-grey">or</span>
        <div className="flex-1 border-t border-brand-light" />
      </div>

      {/* WhatsApp option */}
      <div className="mt-6 text-center">
        <p className="text-sm text-brand-grey mb-3">Prefer to tip another way?</p>
        <a
          href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I'd like to leave a tip for my driver.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          </svg>
          Message us on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function TipPage() {
  return (
    <div className="min-h-screen bg-brand-offwhite flex flex-col">
      {/* Header */}
      <header className="bg-brand-white border-b border-brand-light">
        <div className="max-w-lg mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-brand-grey hover:text-brand-black transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Eagle Eye Chauffeur
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Suspense fallback={<div className="w-full max-w-lg bg-brand-white rounded-xl p-8 text-center text-brand-grey">Loading…</div>}>
          <TipPageContent />
        </Suspense>
      </main>

      <footer className="border-t border-brand-light bg-brand-white">
        <div className="max-w-lg mx-auto px-4 py-6 text-center">
          <p className="text-xs text-brand-grey">
            Eagle Eye Chauffeur &mdash; NYC Luxury Chauffeur Service &bull; (929) 919-6499
          </p>
        </div>
      </footer>
    </div>
  );
}
