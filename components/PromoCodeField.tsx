'use client';

import { useEffect, useMemo, useState } from 'react';
import { normalizePromoCode } from '@/lib/referral-utils';

type LookupOk = { ok: true; driverId: string; driverName: string; code: string };
type LookupErr = { ok: false; message: string };

export function PromoCodeField({
  value,
  onChange,
  onResolved,
}: {
  value: string;
  onChange: (next: string) => void;
  onResolved: (result: LookupOk | null) => void;
}) {
  const normalized = useMemo(() => normalizePromoCode(value), [value]);
  const [status, setStatus] = useState<'idle' | 'checking' | 'ok' | 'bad'>('idle');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    onResolved(null);
    if (!normalized) {
      setStatus('idle');
      setMessage('');
      return;
    }

    let cancelled = false;
    setStatus('checking');
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/referrals/lookup?code=${encodeURIComponent(normalized)}`, {
          credentials: 'same-origin',
        });
        const data = (await res.json()) as LookupOk | LookupErr;
        if (cancelled) return;
        if (!res.ok || !data.ok) {
          setStatus('bad');
          setMessage((data as LookupErr).message || 'Promo code not found.');
          onResolved(null);
          return;
        }
        setStatus('ok');
        setMessage(`Applied: ${data.driverName}`);
        onResolved(data as LookupOk);
      } catch {
        if (cancelled) return;
        setStatus('bad');
        setMessage('Could not validate promo code.');
        onResolved(null);
      }
    }, 400);

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [normalized, onResolved]);

  return (
    <div>
      <label htmlFor="promo" className="block text-sm font-medium text-brand-black mb-2">
        Promo code <span className="text-brand-silver font-normal">(optional)</span>
      </label>
      <input
        id="promo"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="DRIVER1"
        className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black"
      />
      {status === 'checking' && <p className="mt-2 text-xs text-brand-silver">Checking…</p>}
      {status === 'ok' && <p className="mt-2 text-xs text-green-700">{message}</p>}
      {status === 'bad' && <p className="mt-2 text-xs text-red-700">{message}</p>}
    </div>
  );
}

