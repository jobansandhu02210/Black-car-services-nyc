'use client';

import { useState } from 'react';
import Link from 'next/link';

type RouteKey = 'jfk-midtown' | 'lga-midtown' | 'ewr-midtown' | 'jfk-brooklyn' | 'jfk-wallst' | 'midtown-brooklyn';

interface RouteData {
  label: string;
  eagleEyeBase: number;
  uberTypical: number;
  uberSurge: number;
}

// Prices reflect Eagle Eye's pricing model: $120 base + $5/mi (Business Class Sedan).
// Route distances: JFK~17.4mi, LGA~8.95mi, EWR~16.7mi, JFK→BK~13mi, JFK→WS~18.5mi, Mid→BK~9mi.
const ROUTES: Record<RouteKey, RouteData> = {
  'jfk-midtown':      { label: 'JFK → Midtown Manhattan',      eagleEyeBase: 207, uberTypical: 75,  uberSurge: 190 },
  'lga-midtown':      { label: 'LaGuardia → Midtown Manhattan', eagleEyeBase: 165, uberTypical: 45,  uberSurge: 130 },
  'ewr-midtown':      { label: 'Newark → Midtown Manhattan',    eagleEyeBase: 204, uberTypical: 65,  uberSurge: 170 },
  'jfk-brooklyn':     { label: 'JFK → Brooklyn',               eagleEyeBase: 185, uberTypical: 60,  uberSurge: 150 },
  'jfk-wallst':       { label: 'JFK → Wall Street / FiDi',      eagleEyeBase: 213, uberTypical: 80,  uberSurge: 200 },
  'midtown-brooklyn':  { label: 'Midtown → Brooklyn',           eagleEyeBase: 165, uberTypical: 40,  uberSurge: 110 },
};

export default function UberCalculator() {
  const [selectedRoute, setSelectedRoute] = useState<RouteKey>('jfk-midtown');
  const [timeOfDay, setTimeOfDay] = useState<'normal' | 'peak'>('normal');

  const route = ROUTES[selectedRoute];
  const uberPrice = timeOfDay === 'peak' ? route.uberSurge : route.uberTypical;
  const savings = uberPrice - route.eagleEyeBase;
  const savingsPercent = Math.round((savings / uberPrice) * 100);

  return (
    <div className="bg-brand-offwhite py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-brand-black mb-4">
            Eagle Eye vs Uber — Compare Real Prices
          </h2>
          <p className="text-brand-grey max-w-2xl mx-auto">
            See how much you save with fixed pricing. No surge. No surprises. Just professional luxury service at a fair price.
          </p>
        </div>

        <div className="bg-brand-white border border-brand-light rounded-none p-6 lg:p-8">
          {/* Route selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-brand-grey mb-2">Your Route</label>
            <select
              value={selectedRoute}
              onChange={(e) => setSelectedRoute(e.target.value as RouteKey)}
              className="w-full border border-brand-light px-4 py-3 text-brand-black bg-brand-white focus:outline-none focus:border-brand-black"
            >
              {Object.entries(ROUTES).map(([key, data]) => (
                <option key={key} value={key}>{data.label}</option>
              ))}
            </select>
          </div>

          {/* Time selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-brand-grey mb-2">When Are You Traveling?</label>
            <div className="flex gap-2">
              <button
                onClick={() => setTimeOfDay('normal')}
                className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                  timeOfDay === 'normal'
                    ? 'bg-brand-black text-brand-white'
                    : 'bg-brand-offwhite text-brand-grey hover:bg-brand-light'
                }`}
              >
                Normal Time
              </button>
              <button
                onClick={() => setTimeOfDay('peak')}
                className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${
                  timeOfDay === 'peak'
                    ? 'bg-brand-black text-brand-white'
                    : 'bg-brand-offwhite text-brand-grey hover:bg-brand-light'
                }`}
              >
                Peak / Surge Time
              </button>
            </div>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-brand-offwhite p-6 text-center border border-brand-light">
              <div className="text-sm text-brand-grey mb-1">Uber / Lyft</div>
              <div className="text-3xl font-bold text-brand-grey">${uberPrice}</div>
              {timeOfDay === 'peak' && (
                <div className="text-xs text-red-500 mt-1">⚠️ Surge pricing active</div>
              )}
            </div>
            <div className="bg-brand-black p-6 text-center">
              <div className="text-sm text-brand-silver mb-1">Eagle Eye Chauffeur</div>
              <div className="text-3xl font-bold text-brand-white">${route.eagleEyeBase}</div>
              <div className="text-xs text-green-400 mt-1">✓ Fixed price, no surge</div>
            </div>
          </div>

          {/* Savings */}
          {savings > 0 && (
            <div className="text-center mb-8 py-4 bg-green-50 border border-green-200">
              <div className="text-lg font-semibold text-green-800">
                Save ${savings} with Eagle Eye <span className="text-green-600">({savingsPercent}% less)</span>
              </div>
              <div className="text-sm text-green-600 mt-1">
                Includes flight tracking, meet & greet, and professional chauffeur
              </div>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/book"
              className="inline-block px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors"
            >
              Book This Route — Get an Instant Quote
            </Link>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-brand-grey">
              * Uber prices are estimates based on typical NYC rates and may vary. Eagle Eye prices are fixed and confirmed at booking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
