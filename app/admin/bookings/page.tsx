'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

type Booking = {
  id: string;
  createdAt: string;
  service: string;
  vehicle: string | null;
  pickup: string;
  dropoff: string | null;
  airport: string | null;
  date: string | null;
  time: string | null;
  passengers: number | null;
  hours: number | null;
  customerName: string | null;
  customerEmail: string | null;
  customerPhone: string | null;
  promoCode: string | null;
  quoteAmount: number | null;
  tipAmount: number | null;
  tipPercent: number | null;
  specialRequests: string | null;
  source: string | null;
  sourceMessage: string | null;
  paymentStatus: string | null;
  chargedAmount: number | null;
  paidAt: string | null;
  stripeCustomerId: string | null;
  stripePaymentMethodId: string | null;
  assignedDriver: string | null;
  assignedChauffeurId: string | null;
  rideStatus: string | null;
  confirmationSentAt: string | null;
  driverNotifiedAt: string | null;
};

type Driver = { id: string; name: string; phone: string | null; email: string | null; notes: string | null; active: boolean };

type Filter = 'today' | 'upcoming' | 'past' | 'completed' | 'unassigned' | 'unpaid' | 'all';

const RIDE_STATUS_OPTIONS = [
  { value: 'new', label: 'New' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'completed', label: 'Completed' },
  { value: 'no_show', label: 'No-show' },
  { value: 'cancelled', label: 'Cancelled' },
];

const money = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function parseWhen(date?: string | null, time?: string | null): Date | null {
  if (!date) return null;
  const d = date.trim();
  const t = (time || '').trim();
  let dt = new Date(`${d} ${t}`.trim());
  if (!isNaN(dt.getTime())) return dt;
  dt = new Date(d);
  return isNaN(dt.getTime()) ? null : dt;
}
function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function mapsUrl(pickup: string, dest: string) {
  return dest
    ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(pickup)}&destination=${encodeURIComponent(dest)}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pickup)}`;
}

/** Plain-text trip sheet a driver can read on their phone. */
function tripMessage(b: Booking, dest: string) {
  const lines = [
    'New trip — Eagle Eye Chauffeur',
    (b.date || b.time) ? `Pick-up: ${[b.date, b.time].filter(Boolean).join(' ')}` : '',
    b.pickup ? `From: ${b.pickup}` : '',
    dest ? `To: ${dest}` : '',
    b.service ? `Service: ${b.service}` : '',
    b.vehicle ? `Vehicle: ${b.vehicle}` : '',
    b.customerName ? `Client: ${b.customerName}` : '',
    b.customerPhone ? `Client phone: ${b.customerPhone}` : '',
    b.passengers != null ? `Passengers: ${b.passengers}` : '',
    b.specialRequests ? `Notes: ${b.specialRequests}` : '',
  ].filter(Boolean);
  return lines.join('\n');
}
/** wa.me link — digits only, US country code (1) assumed for bare 10-digit numbers. */
function waLink(phone: string, text: string) {
  let digits = phone.replace(/\D/g, '');
  if (digits.length === 10) digits = '1' + digits;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
function smsLink(phone: string, text: string) {
  return `sms:${phone.replace(/[^\d+]/g, '')}?body=${encodeURIComponent(text)}`;
}

function paymentInfo(b: Booking) {
  if (b.paymentStatus === 'charged') return { label: `Paid ${b.chargedAmount != null ? money(b.chargedAmount) : ''}`.trim(), cls: 'bg-green-100 text-green-800' };
  if (b.paymentStatus === 'paid_cash') return { label: `Paid (cash)${b.chargedAmount != null ? ` ${money(b.chargedAmount)}` : ''}`, cls: 'bg-green-100 text-green-800' };
  if (b.paymentStatus === 'charge_failed') return { label: 'Payment failed', cls: 'bg-red-100 text-red-700' };
  if (b.stripeCustomerId) return { label: 'Card on file · unpaid', cls: 'bg-amber-100 text-amber-800' };
  return { label: 'Unpaid', cls: 'bg-gray-100 text-gray-500' };
}
function rideInfo(status: string | null) {
  const s = status ?? 'new';
  if (s === 'confirmed') return { label: 'Confirmed', cls: 'bg-blue-100 text-blue-800' };
  if (s === 'completed') return { label: 'Completed', cls: 'bg-gray-200 text-gray-700' };
  if (s === 'cancelled') return { label: 'Cancelled', cls: 'bg-red-100 text-red-700' };
  if (s === 'no_show') return { label: 'No-show', cls: 'bg-orange-100 text-orange-800' };
  return { label: 'New', cls: 'bg-purple-100 text-purple-800' };
}

function Pill({ children, cls }: { children: React.ReactNode; cls: string }) {
  return <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full ${cls}`}>{children}</span>;
}
function ActionBtn({ href, onClick, children }: { href?: string; onClick?: () => void; children: React.ReactNode }) {
  const cls = 'px-2.5 py-1.5 text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 whitespace-nowrap';
  return href
    ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={cls}>{children}</a>
    : <button type="button" onClick={onClick} className={cls}>{children}</button>;
}

const EMPTY_FORM = {
  customerName: '', customerPhone: '', customerEmail: '', service: 'point-to-point',
  pickup: '', dropoff: '', airport: '', date: '', time: '', vehicle: '',
  passengers: '', hours: '', quoteAmount: '', assignedDriver: '', rideStatus: 'confirmed', specialRequests: '',
};
type FormState = typeof EMPTY_FORM;

function BookingForm({ initial, onClose, onSaved }: { initial: Booking | null; onClose: () => void; onSaved: () => void }) {
  const [f, setF] = useState<FormState>(() => initial ? {
    customerName: initial.customerName ?? '', customerPhone: initial.customerPhone ?? '', customerEmail: initial.customerEmail ?? '',
    service: initial.service ?? 'point-to-point', pickup: initial.pickup ?? '', dropoff: initial.dropoff ?? '', airport: initial.airport ?? '',
    date: initial.date ?? '', time: initial.time ?? '', vehicle: initial.vehicle ?? '',
    passengers: initial.passengers != null ? String(initial.passengers) : '', hours: initial.hours != null ? String(initial.hours) : '',
    quoteAmount: initial.quoteAmount != null ? String(initial.quoteAmount) : '', assignedDriver: initial.assignedDriver ?? '',
    rideStatus: initial.rideStatus ?? 'confirmed', specialRequests: initial.specialRequests ?? '',
  } : { ...EMPTY_FORM });
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF((p) => ({ ...p, [k]: e.target.value }));

  async function submit() {
    if (!f.customerName.trim() || !f.pickup.trim()) { setErr('Customer name and pick-up are required.'); return; }
    setSaving(true); setErr(null);
    const payload: Record<string, unknown> = { ...f };
    if (initial) payload.id = initial.id;
    try {
      const res = await fetch('/api/admin/bookings', {
        method: initial ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin',
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setErr(data.error ?? 'Could not save.'); setSaving(false); return; }
      onSaved(); onClose();
    } catch { setErr('Network error.'); setSaving(false); }
  }

  const input = 'w-full px-3 py-2 border border-gray-300 rounded';
  const label = 'text-xs text-gray-500 mb-1 block';
  return (
    <div className="bg-white border-2 border-gray-900 rounded-xl p-5 mb-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900 text-lg">{initial ? 'Edit booking' : 'New booking'}</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl leading-none">✕</button>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <label><span className={label}>Customer name *</span><input className={input} value={f.customerName} onChange={set('customerName')} /></label>
        <label><span className={label}>Phone</span><input className={input} value={f.customerPhone} onChange={set('customerPhone')} /></label>
        <label><span className={label}>Email</span><input className={input} value={f.customerEmail} onChange={set('customerEmail')} /></label>
        <label><span className={label}>Service</span>
          <select className={input} value={f.service} onChange={set('service')}>
            <option value="point-to-point">Point-to-Point</option>
            <option value="airport">Airport Transfer</option>
            <option value="hourly">Hourly</option>
          </select>
        </label>
        <label className="sm:col-span-2"><span className={label}>Pick-up *</span><input className={input} value={f.pickup} onChange={set('pickup')} /></label>
        <label><span className={label}>Drop-off</span><input className={input} value={f.dropoff} onChange={set('dropoff')} /></label>
        <label><span className={label}>Airport (if any)</span><input className={input} value={f.airport} onChange={set('airport')} /></label>
        <label><span className={label}>Date</span><input className={input} type="date" value={f.date} onChange={set('date')} /></label>
        <label><span className={label}>Time</span><input className={input} value={f.time} onChange={set('time')} placeholder="e.g. 3:00 PM" /></label>
        <label><span className={label}>Vehicle</span>
          <select className={input} value={f.vehicle} onChange={set('vehicle')}>
            <option value="">—</option>
            <option>Executive Sedan</option>
            <option>First Class SUV</option>
            <option>First Class Sedan</option>
            <option>Sprinter Van</option>
          </select>
        </label>
        <label><span className={label}>Driver</span><input className={input} value={f.assignedDriver} onChange={set('assignedDriver')} placeholder="Driver name" /></label>
        <label><span className={label}>Passengers</span><input className={input} type="number" min="1" value={f.passengers} onChange={set('passengers')} /></label>
        <label><span className={label}>Hours (if hourly)</span><input className={input} type="number" min="1" value={f.hours} onChange={set('hours')} /></label>
        <label><span className={label}>Quote / fare ($)</span><input className={input} type="number" min="0" step="0.01" value={f.quoteAmount} onChange={set('quoteAmount')} /></label>
        <label><span className={label}>Ride status</span>
          <select className={input} value={f.rideStatus} onChange={set('rideStatus')}>
            {RIDE_STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>
        <label className="sm:col-span-2"><span className={label}>Notes</span><textarea className={input} rows={2} value={f.specialRequests} onChange={set('specialRequests')} /></label>
      </div>
      {err && <p className="text-sm text-red-600 mt-3">{err}</p>}
      <div className="flex gap-2 mt-4">
        <button onClick={submit} disabled={saving} className="px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50">
          {saving ? 'Saving…' : initial ? 'Save changes' : 'Create booking'}
        </button>
        <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">Cancel</button>
      </div>
    </div>
  );
}

function BookingCard({ booking, drivers, onUpdate, onCharged, onEdit, onDelete }: {
  booking: Booking;
  drivers: Driver[];
  onUpdate: (id: string, fields: Partial<Booking>) => Promise<void>;
  onCharged: () => void;
  onEdit: (b: Booking) => void;
  onDelete: (id: string) => Promise<void>;
}) {
  const [justNotified, setJustNotified] = useState(false);
  const [fare, setFare] = useState<string>(booking.quoteAmount ? String(booking.quoteAmount) : '');
  const [tip, setTip] = useState<string>(booking.tipAmount ? String(booking.tipAmount) : '');
  const [cashAmount, setCashAmount] = useState<string>(booking.quoteAmount ? String(booking.quoteAmount) : '');
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [justSent, setJustSent] = useState(false);
  const confirmationSent = justSent || !!booking.confirmationSentAt;

  const when = parseWhen(booking.date, booking.time);
  const now = new Date();
  const isToday = when ? isSameDay(when, now) : false;
  const isPast = when ? when.getTime() < now.getTime() : false;
  const soon = when ? when.getTime() - now.getTime() > 0 && when.getTime() - now.getTime() < 3 * 3600 * 1000 : false;

  const pay = paymentInfo(booking);
  const ride = rideInfo(booking.rideStatus);
  const assigned = !!booking.assignedDriver;
  const active = booking.rideStatus !== 'cancelled' && booking.rideStatus !== 'completed' && booking.rideStatus !== 'no_show';
  const needsDriver = !assigned && active;
  const isPaid = booking.paymentStatus === 'charged' || booking.paymentStatus === 'paid_cash';
  const hasCard = !!booking.stripeCustomerId;
  const fareNum = parseFloat(fare) || 0;
  const tipNum = parseFloat(tip) || 0;
  const total = fareNum + tipNum;
  const dest = booking.dropoff || booking.airport || '';

  const driverNotified = justNotified || !!booking.driverNotifiedAt;
  async function notifyDriver() {
    setBusy('notify'); setMsg(null);
    try {
      const res = await fetch(`/api/admin/bookings/${booking.id}/notify-driver`, { method: 'POST', credentials: 'same-origin' });
      const data = await res.json().catch(() => ({}));
      if (res.ok) { setJustNotified(true); setMsg({ ok: true, text: `Trip details emailed to ${data.driverName ?? 'the driver'}.` }); }
      else setMsg({ ok: false, text: data.error ?? 'Could not email the driver.' });
    } catch { setMsg({ ok: false, text: 'Network error.' }); }
    setBusy(null);
  }
  async function charge() {
    if (fareNum <= 0) return setMsg({ ok: false, text: 'Enter a fare greater than $0.' });
    if (!window.confirm(`Charge ${booking.customerName ?? 'this customer'} ${money(total)}?`)) return;
    setBusy('charge'); setMsg(null);
    try {
      const res = await fetch(`/api/booking/${booking.id}/charge`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin',
        body: JSON.stringify({ amount: fareNum, tip: tipNum }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setMsg({ ok: false, text: data.error ?? 'Charge failed.' }); setBusy(null); return; }
      setMsg({ ok: true, text: `Charged ${money(data.chargedAmount ?? total)}.` }); setBusy(null); onCharged();
    } catch { setMsg({ ok: false, text: 'Network error.' }); setBusy(null); }
  }
  async function markPaidCash() {
    const amt = parseFloat(cashAmount) || 0;
    if (!window.confirm(`Mark this booking paid (cash/other)${amt ? ` for ${money(amt)}` : ''}?`)) return;
    setBusy('cash');
    await onUpdate(booking.id, { paymentStatus: 'paid_cash', chargedAmount: amt || null, paidAt: new Date().toISOString() });
    setBusy(null);
  }
  async function sendConfirm() {
    setBusy('confirm'); setMsg(null);
    try {
      const res = await fetch(`/api/admin/bookings/${booking.id}/confirm`, { method: 'POST', credentials: 'same-origin' });
      const data = await res.json().catch(() => ({}));
      if (res.ok) { setJustSent(true); setMsg({ ok: true, text: 'Confirmation email sent to the customer.' }); }
      else setMsg({ ok: false, text: data.error ?? 'Could not send.' });
    } catch { setMsg({ ok: false, text: 'Network error.' }); }
    setBusy(null);
  }

  return (
    <div className={`bg-white border rounded-xl p-5 ${needsDriver ? 'border-amber-300 ring-1 ring-amber-200' : 'border-gray-200'} ${!active ? 'opacity-70' : ''}`}>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <p className="font-semibold text-gray-900 text-lg leading-tight">{booking.customerName ?? 'Unnamed'}</p>
          <p className="text-sm text-gray-500">
            {booking.customerPhone && <a href={`tel:${booking.customerPhone}`} className="hover:text-gray-900 underline decoration-gray-300">{booking.customerPhone}</a>}
            {booking.customerPhone && booking.customerEmail ? ' · ' : ''}
            {booking.customerEmail && <a href={`mailto:${booking.customerEmail}`} className="hover:text-gray-900 underline decoration-gray-300">{booking.customerEmail}</a>}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-end">
          {isToday && active && <Pill cls="bg-black text-white">⏰ Today</Pill>}
          {soon && active && <Pill cls="bg-orange-100 text-orange-800">Pickup soon</Pill>}
          {isPast && active && !isToday && <Pill cls="bg-gray-100 text-gray-500">Past</Pill>}
          {booking.source === 'whatsapp' && <Pill cls="bg-[#25D366]/15 text-[#075E54]">🟢 WhatsApp</Pill>}
          <Pill cls={ride.cls}>{ride.label}</Pill>
          <Pill cls={assigned ? 'bg-teal-100 text-teal-800' : 'bg-red-100 text-red-700'}>{assigned ? `🧑‍✈️ ${booking.assignedDriver}` : 'Unassigned'}</Pill>
          <Pill cls={pay.cls}>{pay.label}</Pill>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-700 mb-3">
        <div className="sm:col-span-2 font-medium text-gray-900">📅 {booking.date || '—'} {booking.time || ''} · {booking.service}{booking.vehicle ? ` · ${booking.vehicle}` : ''}</div>
        <div className="sm:col-span-2"><span className="text-gray-400">Pick-up:</span> {booking.pickup}</div>
        {booking.dropoff && <div className="sm:col-span-2"><span className="text-gray-400">Drop-off:</span> {booking.dropoff}</div>}
        {booking.airport && <div><span className="text-gray-400">Airport:</span> {booking.airport}</div>}
        {booking.hours && <div><span className="text-gray-400">Hours:</span> {booking.hours}</div>}
        {booking.passengers != null && <div><span className="text-gray-400">Passengers:</span> {booking.passengers}</div>}
        {booking.quoteAmount != null && <div><span className="text-gray-400">Quote:</span> {money(booking.quoteAmount)}</div>}
        {booking.tipAmount != null && booking.tipAmount > 0 && <div><span className="text-gray-400">Tip (customer):</span> {money(booking.tipAmount)}{booking.tipPercent ? ` (${booking.tipPercent}%)` : ''}</div>}
        {booking.specialRequests && <div className="sm:col-span-2"><span className="text-gray-400">Notes:</span> {booking.specialRequests}</div>}
        {booking.sourceMessage && (
          <details className="sm:col-span-2 mt-1">
            <summary className="text-gray-400 cursor-pointer hover:text-gray-600">Original message</summary>
            <p className="mt-1 whitespace-pre-wrap text-gray-600 bg-gray-50 border border-gray-100 rounded p-2">{booking.sourceMessage}</p>
          </details>
        )}
      </div>

      {/* One-tap actions */}
      <div className="flex flex-wrap gap-2 mb-4">
        <ActionBtn onClick={() => onEdit(booking)}>✎ Edit</ActionBtn>
        {booking.customerPhone && <ActionBtn href={`tel:${booking.customerPhone}`}>📞 Call</ActionBtn>}
        {booking.customerPhone && <ActionBtn href={`sms:${booking.customerPhone}`}>💬 Text</ActionBtn>}
        <ActionBtn href={mapsUrl(booking.pickup, dest)}>🧭 Navigate</ActionBtn>
        {booking.customerEmail && (confirmationSent ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium border border-green-300 rounded-lg text-green-700 bg-green-50 whitespace-nowrap">
            ✓ Confirmation sent
            <button type="button" onClick={sendConfirm} disabled={busy === 'confirm'} className="ml-1 underline text-green-800/70 hover:text-green-900 disabled:opacity-50">{busy === 'confirm' ? 'resending…' : 'resend'}</button>
          </span>
        ) : (
          <ActionBtn onClick={sendConfirm}>{busy === 'confirm' ? 'Sending…' : '✉ Send confirmation'}</ActionBtn>
        ))}
        <button
          type="button"
          onClick={() => { if (window.confirm(`Delete this booking for ${booking.customerName ?? 'this customer'}? This can't be undone.`)) onDelete(booking.id); }}
          className="px-2.5 py-1.5 text-xs font-medium border border-red-200 rounded-lg text-red-600 hover:bg-red-50 whitespace-nowrap"
        >
          🗑 Delete
        </button>
      </div>

      {/* Dispatch controls */}
      <div className="mb-4">
        <span className="block text-gray-500 text-sm mb-1">Assign driver</span>
        <div className="flex gap-2 items-center flex-wrap">
          <select
            value={booking.assignedChauffeurId ?? ''}
            onChange={(e) => {
              const d = drivers.find((x) => x.id === e.target.value);
              setJustNotified(false);
              onUpdate(booking.id, { assignedChauffeurId: e.target.value || null, assignedDriver: d ? d.name : null, driverNotifiedAt: null });
            }}
            className="px-3 py-2 border border-gray-300 rounded bg-white text-sm min-w-[180px]"
          >
            <option value="">— Unassigned —</option>
            {drivers.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          {booking.assignedChauffeurId && (() => {
            const dv = drivers.find((x) => x.id === booking.assignedChauffeurId);
            const msg = tripMessage(booking, dest);
            return (
              <>
                {dv?.phone && <ActionBtn href={waLink(dv.phone, msg)}>🟢 WhatsApp trip</ActionBtn>}
                {dv?.phone && <ActionBtn href={smsLink(dv.phone, msg)}>💬 Text trip</ActionBtn>}
                {dv?.phone && <ActionBtn href={`tel:${dv.phone}`}>📞 Call driver</ActionBtn>}
                {driverNotified ? (
                  <span className="inline-flex items-center gap-1 text-xs text-green-700">
                    ✓ Trip emailed to driver
                    <button type="button" onClick={notifyDriver} disabled={busy === 'notify'} className="underline text-green-800/70 hover:text-green-900 disabled:opacity-50">{busy === 'notify' ? 'resending…' : 'resend'}</button>
                  </span>
                ) : (
                  <button type="button" onClick={notifyDriver} disabled={busy === 'notify' || !dv?.email} title={dv?.email ? '' : 'No email on file for this driver'} className="px-3 py-1.5 text-xs font-medium border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700 disabled:opacity-50">{busy === 'notify' ? 'Emailing…' : '✉ Email trip'}</button>
                )}
              </>
            );
          })()}
        </div>
        {booking.assignedDriver && !booking.assignedChauffeurId && (
          <p className="text-xs text-gray-400 mt-1">Currently: {booking.assignedDriver} — pick from the list above to enable emailing the trip.</p>
        )}
        {drivers.length === 0 && <p className="text-xs text-gray-400 mt-1">No drivers yet — add them with “Manage drivers” above.</p>}
      </div>
      <div className="mb-4">
        <span className="block text-gray-500 text-sm mb-1">Trip status</span>
        <div className="flex flex-wrap gap-2">
          {RIDE_STATUS_OPTIONS.map((o) => {
            const on = (booking.rideStatus ?? 'new') === o.value;
            return (
              <button
                key={o.value}
                type="button"
                onClick={() => onUpdate(booking.id, { rideStatus: o.value })}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${on ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
              >
                {o.value === 'completed' ? '✓ ' : ''}{o.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Payment */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-gray-500">Payment:</span>
          <Pill cls={pay.cls}>{pay.label}</Pill>
          {isPaid && (
            <button onClick={() => onUpdate(booking.id, { paymentStatus: 'pending', chargedAmount: null, paidAt: null })} className="ml-auto px-3 py-1.5 text-xs border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100">↩ Mark unpaid</button>
          )}
        </div>
        {isPaid ? (
          <div className="bg-green-50 border border-green-200 rounded p-3 text-sm text-green-800">
            ✅ {pay.label}{booking.paidAt ? ` · ${new Date(booking.paidAt).toLocaleString()}` : ''}
          </div>
        ) : (
          <div className="space-y-3">
            {hasCard && (
              <div className="flex flex-wrap items-end gap-3">
                <label className="text-sm"><span className="block text-gray-500 mb-1">Final fare ($)</span><input type="number" min="0" step="0.01" value={fare} onChange={(e) => setFare(e.target.value)} className="w-32 px-3 py-2 border border-gray-300 rounded" placeholder="0.00" /></label>
                <label className="text-sm"><span className="block text-gray-500 mb-1">Tip ($)</span><input type="number" min="0" step="0.01" value={tip} onChange={(e) => setTip(e.target.value)} className="w-28 px-3 py-2 border border-gray-300 rounded" placeholder="0.00" /></label>
                <div className="text-sm"><span className="block text-gray-500 mb-1">Total</span><div className="px-3 py-2 font-semibold text-gray-900 tabular-nums">{money(total)}</div></div>
                <button onClick={charge} disabled={busy === 'charge'} className="ml-auto px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 disabled:opacity-50">{busy === 'charge' ? 'Charging…' : 'Charge saved card'}</button>
              </div>
            )}
            <div className="flex flex-wrap items-end gap-3">
              <label className="text-sm"><span className="block text-gray-500 mb-1">Amount paid ($)</span><input type="number" min="0" step="0.01" value={cashAmount} onChange={(e) => setCashAmount(e.target.value)} className="w-32 px-3 py-2 border border-gray-300 rounded" placeholder="0.00" /></label>
              <button onClick={markPaidCash} disabled={busy === 'cash'} className="px-5 py-2 bg-green-700 text-white font-medium rounded hover:bg-green-600 disabled:opacity-50">{busy === 'cash' ? 'Saving…' : 'Mark paid (cash / other)'}</button>
              {!hasCard && <span className="text-xs text-gray-400">No saved card — record a cash/external payment.</span>}
            </div>
          </div>
        )}
      </div>
      {msg && <p className={`mt-3 text-sm ${msg.ok ? 'text-green-700' : 'text-red-600'}`}>{msg.text}</p>}
    </div>
  );
}

function StatChip({ label, count, active, tone, onClick }: { label: string; count: number; active: boolean; tone: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className={`flex-1 min-w-[110px] text-left px-4 py-3 rounded-xl border transition-all ${active ? 'border-gray-900 ring-1 ring-gray-900 bg-white' : 'border-gray-200 bg-white hover:border-gray-400'}`}>
      <div className={`text-2xl font-bold tabular-nums ${tone}`}>{count}</div>
      <div className="text-xs text-gray-500 mt-0.5">{label}</div>
    </button>
  );
}

function DriversPanel({ drivers, onChange, onClose }: { drivers: Driver[]; onChange: () => void; onClose: () => void }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function add() {
    if (!name.trim()) { setErr('Driver name is required.'); return; }
    setSaving(true); setErr(null);
    try {
      const res = await fetch('/api/admin/drivers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ name, phone, email }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setErr(data.error ?? 'Could not add driver.'); setSaving(false); return; }
      setName(''); setPhone(''); setEmail(''); setSaving(false); onChange();
    } catch { setErr('Network error.'); setSaving(false); }
  }
  async function remove(id: string, dn: string) {
    if (!window.confirm(`Remove driver ${dn}? (Bookings already assigned keep the name.)`)) return;
    try {
      await fetch('/api/admin/drivers', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ id }) });
      onChange();
    } catch { /* ignore */ }
  }

  const inp = 'px-3 py-2 border border-gray-300 rounded text-sm';
  return (
    <div className="bg-white border-2 border-gray-900 rounded-xl p-5 mb-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900 text-lg">Drivers</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl leading-none">✕</button>
      </div>
      {drivers.length === 0 ? (
        <p className="text-sm text-gray-500 mb-4">No drivers yet. Add your first below.</p>
      ) : (
        <ul className="divide-y divide-gray-100 mb-4">
          {drivers.map((d) => (
            <li key={d.id} className="flex items-center justify-between gap-3 py-2 text-sm">
              <div>
                <span className="font-medium text-gray-900">{d.name}</span>{' '}
                <span className="text-gray-500">{[d.phone, d.email].filter(Boolean).join(' · ') || 'no contact info'}</span>
              </div>
              <button onClick={() => remove(d.id, d.name)} className="text-xs text-red-600 border border-red-200 rounded px-2 py-1 hover:bg-red-50">Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div className="border-t border-gray-100 pt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Add a driver</p>
        <div className="flex flex-wrap gap-2 items-center">
          <input className={inp} placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)} />
          <input className={inp} placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <input className={inp} placeholder="Email (to send trips)" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={add} disabled={saving} className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50">{saving ? 'Adding…' : 'Add driver'}</button>
        </div>
        {err && <p className="text-sm text-red-600 mt-2">{err}</p>}
        <p className="text-xs text-gray-400 mt-2">Add an <strong>email</strong> to email trip details to the driver. Phone is for your reference / one-tap call (automated SMS to drivers needs a Twilio account).</p>
      </div>
    </div>
  );
}

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>('today');
  const [search, setSearch] = useState('');
  const [lastLoaded, setLastLoaded] = useState<Date | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Booking | null>(null);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [driversOpen, setDriversOpen] = useState(false);

  const loadDrivers = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/drivers', { credentials: 'same-origin' });
      const data = await res.json().catch(() => ({}));
      if (res.ok) setDrivers(data.drivers ?? []);
    } catch { /* ignore */ }
  }, []);

  const load = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch('/api/admin/bookings', { credentials: 'same-origin' });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setError(res.status === 401 ? 'Not signed in. Reload and enter your admin username & password.' : data.error ?? 'Failed to load.'); setLoading(false); return; }
      setBookings(data.bookings ?? []); setLastLoaded(new Date());
    } catch { setError('Network error.'); }
    setLoading(false);
  }, []);

  useEffect(() => { load(); loadDrivers(); }, [load, loadDrivers]);
  useEffect(() => { const t = setInterval(load, 30000); return () => clearInterval(t); }, [load]);

  const onUpdate = useCallback(async (id: string, fields: Partial<Booking>) => {
    try {
      const body: Record<string, unknown> = { id, ...fields };
      if (fields.paymentStatus === 'paid_cash') { body.markPaid = true; delete body.paymentStatus; delete body.paidAt; }
      else if (fields.paymentStatus === 'pending') { body.markUnpaid = true; delete body.paymentStatus; delete body.paidAt; delete body.chargedAmount; }
      const res = await fetch('/api/admin/bookings', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify(body) });
      if (res.ok) setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, ...fields } : b)));
    } catch { /* keep UI as-is */ }
  }, []);

  const onDelete = useCallback(async (id: string) => {
    try {
      const res = await fetch('/api/admin/bookings', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ id }) });
      if (res.ok) setBookings((prev) => prev.filter((b) => b.id !== id));
    } catch { /* keep UI as-is */ }
  }, []);

  const openAdd = () => { setEditing(null); setFormOpen(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const openEdit = (b: Booking) => { setEditing(b); setFormOpen(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const counts = useMemo(() => {
    const n = new Date();
    let today = 0, upcoming = 0, past = 0, completed = 0, unassigned = 0, unpaid = 0;
    for (const b of bookings) {
      const when = parseWhen(b.date, b.time);
      const active = b.rideStatus !== 'cancelled' && b.rideStatus !== 'completed' && b.rideStatus !== 'no_show';
      const paid = b.paymentStatus === 'charged' || b.paymentStatus === 'paid_cash';
      if (when && isSameDay(when, n) && active) today++;
      if (when && when.getTime() >= n.getTime() && active) upcoming++;
      if (when && when.getTime() < n.getTime()) past++;
      if (b.rideStatus === 'completed') completed++;
      if (!b.assignedDriver && active) unassigned++;
      if (!paid && b.rideStatus !== 'cancelled' && b.rideStatus !== 'no_show') unpaid++;
    }
    return { today, upcoming, past, completed, unassigned, unpaid, all: bookings.length };
  }, [bookings]);

  const visible = useMemo(() => {
    const n = new Date();
    const q = search.trim().toLowerCase();
    const matchesSearch = (b: Booking) => !q || [b.customerName, b.customerEmail, b.customerPhone, b.pickup, b.dropoff, b.airport, b.assignedDriver, b.vehicle].some((v) => (v ?? '').toLowerCase().includes(q));
    const matchesFilter = (b: Booking) => {
      const when = parseWhen(b.date, b.time);
      const active = b.rideStatus !== 'cancelled' && b.rideStatus !== 'completed' && b.rideStatus !== 'no_show';
      const paid = b.paymentStatus === 'charged' || b.paymentStatus === 'paid_cash';
      switch (filter) {
        case 'today': return !!when && isSameDay(when, n) && active;
        case 'upcoming': return !!when && when.getTime() >= n.getTime() && active;
        case 'past': return !!when && when.getTime() < n.getTime();
        case 'completed': return b.rideStatus === 'completed';
        case 'unassigned': return !b.assignedDriver && active;
        case 'unpaid': return !paid && b.rideStatus !== 'cancelled' && b.rideStatus !== 'no_show';
        default: return true;
      }
    };
    const history = filter === 'past';
    return bookings.filter((b) => matchesSearch(b) && matchesFilter(b)).sort((a, b) => {
      const wa = parseWhen(a.date, a.time)?.getTime() ?? (history ? -Infinity : Infinity);
      const wb = parseWhen(b.date, b.time)?.getTime() ?? (history ? -Infinity : Infinity);
      if (wa !== wb) return history ? wb - wa : wa - wb;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  }, [bookings, filter, search]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Dispatch board</h1>
            <p className="text-sm text-gray-500">Add & assign rides, track status, charge cards.{lastLoaded && <span className="text-gray-400"> · updated {lastLoaded.toLocaleTimeString()} · auto-refreshes</span>}</p>
          </div>
          <div className="flex gap-2">
            <button onClick={openAdd} className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">＋ Add booking</button>
            <button onClick={() => setDriversOpen((v) => !v)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">🧑‍✈️ Manage drivers</button>
            <button onClick={load} className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">Refresh</button>
          </div>
        </div>

        {driversOpen && <DriversPanel drivers={drivers} onChange={loadDrivers} onClose={() => setDriversOpen(false)} />}
        {formOpen && <BookingForm initial={editing} onClose={() => setFormOpen(false)} onSaved={load} />}

        <div className="flex flex-wrap gap-3 mb-4">
          <StatChip label="Today" count={counts.today} active={filter === 'today'} tone="text-gray-900" onClick={() => setFilter('today')} />
          <StatChip label="Upcoming trips" count={counts.upcoming} active={filter === 'upcoming'} tone="text-blue-700" onClick={() => setFilter('upcoming')} />
          <StatChip label="Trip history" count={counts.past} active={filter === 'past'} tone="text-gray-500" onClick={() => setFilter('past')} />
          <StatChip label="Completed" count={counts.completed} active={filter === 'completed'} tone="text-green-700" onClick={() => setFilter('completed')} />
          <StatChip label="Unassigned" count={counts.unassigned} active={filter === 'unassigned'} tone="text-red-600" onClick={() => setFilter('unassigned')} />
          <StatChip label="Unpaid" count={counts.unpaid} active={filter === 'unpaid'} tone="text-amber-600" onClick={() => setFilter('unpaid')} />
          <StatChip label="All" count={counts.all} active={filter === 'all'} tone="text-gray-900" onClick={() => setFilter('all')} />
        </div>

        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, phone, email, pickup, driver…" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg mb-5 bg-white" />

        {error && <div className="bg-red-50 border border-red-200 rounded p-4 text-sm text-red-700 mb-4">{error}</div>}
        {loading && <p className="text-gray-500">Loading…</p>}
        {!loading && !error && visible.length === 0 && <p className="text-gray-500">No bookings match this view.</p>}

        <div className="space-y-4">
          {visible.map((b) => <BookingCard key={b.id} booking={b} drivers={drivers} onUpdate={onUpdate} onCharged={load} onEdit={openEdit} onDelete={onDelete} />)}
        </div>
      </div>
    </div>
  );
}
