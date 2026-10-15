'use client';

import { useState } from 'react';

type LineItem = { id: number; label: string; amount: string };

const PRESETS = [
  { label: 'Base Fare', amount: '' },
  { label: 'Tolls', amount: '15.00' },
  { label: 'Airport Fee', amount: '10.00' },
  { label: 'Parking', amount: '20.00' },
  { label: 'NY State Tax (8.875%)', amount: '' },
  { label: 'Extra Stop', amount: '25.00' },
  { label: 'Wait Time', amount: '' },
  { label: 'Gratuity (Suggested)', amount: '' },
];

let nextId = 1;
function newItem(label = '', amount = ''): LineItem {
  return { id: nextId++, label, amount };
}

export default function NewInvoicePage() {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [rideDate, setRideDate] = useState('');
  const [rideFrom, setRideFrom] = useState('');
  const [rideTo, setRideTo] = useState('');
  const [notes, setNotes] = useState('');
  const [items, setItems] = useState<LineItem[]>([newItem('Base Fare', '')]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [sentUrl, setSentUrl] = useState('');
  const [error, setError] = useState('');

  const updateItem = (id: number, field: 'label' | 'amount', val: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, [field]: val } : i)));

  const removeItem = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));

  const addPreset = (preset: { label: string; amount: string }) => {
    setItems((prev) => [...prev, newItem(preset.label, preset.amount)]);
  };

  const subtotal = items.reduce((s, i) => {
    const n = parseFloat(i.amount);
    return s + (Number.isFinite(n) ? n : 0);
  }, 0);

  // Auto-calculate tax item if there's a tax row
  const itemsForSubmit = items.map((i) => {
    if (i.label.toLowerCase().includes('tax') && i.amount === '') {
      const taxable = items
        .filter((x) => !x.label.toLowerCase().includes('tax'))
        .reduce((s, x) => {
          const n = parseFloat(x.amount);
          return s + (Number.isFinite(n) ? n : 0);
        }, 0);
      return { ...i, amount: (taxable * 0.08875).toFixed(2) };
    }
    return i;
  });

  const canSubmit =
    customerName.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail.trim()) &&
    itemsForSubmit.some((i) => parseFloat(i.amount) > 0);

  async function handleSubmit() {
    if (!canSubmit || status === 'sending') return;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/invoice/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: customerName.trim(),
          customerEmail: customerEmail.trim(),
          rideDate: rideDate.trim(),
          rideFrom: rideFrom.trim(),
          rideTo: rideTo.trim(),
          notes: notes.trim(),
          lineItems: itemsForSubmit
            .map((i) => ({ label: i.label.trim(), amount: parseFloat(i.amount) }))
            .filter((i) => i.label && i.amount > 0),
        }),
      });
      const data = (await res.json()) as { ok?: boolean; token?: string; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error ?? 'Something went wrong.');
        setStatus('error');
        return;
      }
      const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin).replace(/\/$/, '');
      setSentUrl(`${siteUrl}/invoice/${data.token}`);
      setStatus('sent');
    } catch {
      setError('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
          <div className="text-4xl mb-4">✓</div>
          <h1 className="font-serif text-2xl font-semibold mb-2">Invoice Sent</h1>
          <p className="text-brand-grey mb-6">
            Email sent to <strong>{customerEmail}</strong>. You can also share this link directly:
          </p>
          <a
            href={sentUrl}
            target="_blank"
            rel="noreferrer"
            className="block bg-brand-black text-white rounded-lg px-5 py-3 font-medium mb-4 break-all text-sm"
          >
            {sentUrl}
          </a>
          <button
            onClick={() => {
              setStatus('idle');
              setSentUrl('');
              setCustomerName('');
              setCustomerEmail('');
              setRideDate('');
              setRideFrom('');
              setRideTo('');
              setNotes('');
              setItems([newItem('Base Fare', '')]);
            }}
            className="text-brand-grey underline text-sm"
          >
            Create another invoice
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-offwhite py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl font-semibold text-brand-black mb-1">New Invoice</h1>
        <p className="text-brand-grey mb-8 text-sm">
          Customer will receive an email with a secure pay link. They can add a tip before paying.
        </p>

        {/* Customer */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-5">
          <h2 className="font-semibold text-brand-black mb-4">Customer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-brand-grey mb-1">Name *</label>
              <input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border border-brand-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-xs text-brand-grey mb-1">Email *</label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full border border-brand-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
                placeholder="john@email.com"
              />
            </div>
          </div>
        </section>

        {/* Ride details */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-5">
          <h2 className="font-semibold text-brand-black mb-4">Ride Details (optional)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-brand-grey mb-1">Date</label>
              <input
                type="date"
                value={rideDate}
                onChange={(e) => setRideDate(e.target.value)}
                className="w-full border border-brand-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
              />
            </div>
            <div>
              <label className="block text-xs text-brand-grey mb-1">Pick-up</label>
              <input
                value={rideFrom}
                onChange={(e) => setRideFrom(e.target.value)}
                className="w-full border border-brand-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
                placeholder="123 Main St, NYC"
              />
            </div>
            <div>
              <label className="block text-xs text-brand-grey mb-1">Drop-off</label>
              <input
                value={rideTo}
                onChange={(e) => setRideTo(e.target.value)}
                className="w-full border border-brand-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
                placeholder="JFK Airport"
              />
            </div>
          </div>
        </section>

        {/* Line items */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-5">
          <h2 className="font-semibold text-brand-black mb-4">Charges</h2>

          <div className="space-y-2 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-2 items-center">
                <input
                  value={item.label}
                  onChange={(e) => updateItem(item.id, 'label', e.target.value)}
                  className="flex-1 border border-brand-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
                  placeholder="Description"
                />
                <div className="relative w-28">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-grey text-sm">$</span>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={item.amount}
                    onChange={(e) => updateItem(item.id, 'amount', e.target.value)}
                    className="w-full border border-brand-light rounded-lg pl-6 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
                    placeholder="0.00"
                  />
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-brand-grey hover:text-red-500 text-lg leading-none px-1"
                  aria-label="Remove"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center border-t border-brand-light pt-3 mb-5">
            <span className="text-sm text-brand-grey">Subtotal (before tip)</span>
            <span className="font-semibold text-brand-black">${subtotal.toFixed(2)}</span>
          </div>

          {/* Preset buttons */}
          <div>
            <p className="text-xs text-brand-grey mb-2">Quick add:</p>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => addPreset(p)}
                  className="border border-brand-light rounded-full px-3 py-1 text-xs hover:bg-brand-black hover:text-white hover:border-brand-black transition-colors"
                >
                  + {p.label}
                </button>
              ))}
              <button
                onClick={() => setItems((prev) => [...prev, newItem()])}
                className="border border-brand-light rounded-full px-3 py-1 text-xs hover:bg-brand-black hover:text-white hover:border-brand-black transition-colors"
              >
                + Custom
              </button>
            </div>
          </div>
        </section>

        {/* Notes */}
        <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="font-semibold text-brand-black mb-3">Notes (optional)</h2>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            className="w-full border border-brand-light rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black resize-none"
            placeholder="Any message for the customer…"
          />
        </section>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={!canSubmit || status === 'sending'}
          className="w-full bg-brand-black text-white rounded-xl py-4 font-semibold text-lg disabled:opacity-40 hover:opacity-90 transition-opacity"
        >
          {status === 'sending' ? 'Sending…' : `Send Invoice — $${subtotal.toFixed(2)}`}
        </button>
        <p className="text-center text-xs text-brand-grey mt-3">
          Customer can add a tip when they pay. You will receive Stripe confirmation.
        </p>
      </div>
    </div>
  );
}
