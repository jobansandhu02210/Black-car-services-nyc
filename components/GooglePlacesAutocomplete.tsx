'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Prediction = { description: string; placeId: string };

type Props = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /**
   * When true, suggestions use your server-side key via /api/places/* (no browser referrer rules).
   */
  serverProxyEnabled: boolean;
};

export function GooglePlacesAutocomplete({
  id,
  label,
  value,
  onChange,
  placeholder,
  serverProxyEnabled,
}: Props) {
  const [open, setOpen] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, []);

  const fetchPredictions = useCallback(
    async (q: string) => {
      if (!serverProxyEnabled || q.trim().length < 2) {
        setPredictions([]);
        setOpen(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/places/autocomplete?input=${encodeURIComponent(q.trim())}`,
          { credentials: 'same-origin' }
        );
        const data = (await res.json()) as { predictions?: Prediction[]; error?: string };
        if (!res.ok) {
          setPredictions([]);
          setError(data.error ?? 'Suggestions unavailable');
          setOpen(false);
          return;
        }
        const list = data.predictions ?? [];
        setPredictions(list);
        setOpen(list.length > 0);
      } catch {
        setPredictions([]);
        setError('Could not load suggestions');
        setOpen(false);
      } finally {
        setLoading(false);
      }
    },
    [serverProxyEnabled]
  );

  const onInputChange = (v: string) => {
    onChange(v);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!serverProxyEnabled) return;
    debounceRef.current = setTimeout(() => fetchPredictions(v), 350);
  };

  const onPick = async (p: Prediction) => {
    setOpen(false);
    setPredictions([]);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/places/details?placeId=${encodeURIComponent(p.placeId)}`, {
        credentials: 'same-origin',
      });
      const data = (await res.json()) as { formattedAddress?: string; error?: string };
      if (!res.ok || !data.formattedAddress) {
        onChange(p.description);
        if (!res.ok) setError(data.error ?? null);
        return;
      }
      onChange(data.formattedAddress);
    } catch {
      onChange(p.description);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={wrapRef} className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-brand-black mb-2">
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        onFocus={() => {
          if (serverProxyEnabled && predictions.length > 0) setOpen(true);
        }}
        placeholder={placeholder}
        autoComplete="off"
        aria-autocomplete={serverProxyEnabled ? 'list' : undefined}
        aria-controls={serverProxyEnabled ? `${id}-places-list` : undefined}
        aria-expanded={serverProxyEnabled ? open : undefined}
        className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black"
      />
      {loading && (
        <p className="mt-1 text-xs text-brand-silver" aria-live="polite">
          Loading suggestions…
        </p>
      )}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {serverProxyEnabled && open && predictions.length > 0 && (
        <ul
          id={`${id}-places-list`}
          role="listbox"
          className="absolute z-[100] left-0 right-0 top-full mt-1 max-h-56 overflow-auto border border-brand-light bg-brand-white shadow-lg text-sm"
        >
          {predictions.map((p) => (
            <li key={p.placeId} role="presentation">
              <button
                type="button"
                role="option"
                className="w-full text-left px-4 py-3 hover:bg-brand-offwhite text-brand-dark border-b border-brand-light last:border-0"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => onPick(p)}
              >
                {p.description}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
