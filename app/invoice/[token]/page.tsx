'use client';

import { useEffect, useState, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

type LineItem = { label: string; amount: number };

type InvoiceData = {
  id: string;
  customerName: string;
  rideDate: string | null;
  rideFrom: string | null;
  rideTo: string | null;
  lineItems: LineItem[];
  notes: string | null;
  status: 'unpaid' | 'paid';
  tipAmount: number | null;
  createdAt: string;
  paidAt: string | null;
};

const TIP_OPTIONS = [
  { label: 'No tip', pct: 0 },
  { label: '15%', pct: 15 },
  { label: '18%', pct: 18 },
  { label: '20%', pct: 20 },
  { label: '25%', pct: 25 },
];

function round2(n: number) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}

// ─── Payment form (rendered inside <Elements>) ────────────────────────────────

function PaymentForm({
  token,
  tipAmount,
  subtotal,
  onSuccess,
}: {
  token: string;
  tipAmount: number;
  subtotal: number;
  onSuccess: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paying, setPaying] = useState(false);
  const [payError, setPayError] = useState<string | null>(null);

  const total = round2(subtotal + tipAmount);

  async function handlePay() {
    if (!stripe || !elements || paying) return;
    setPaying(true);
    setPayError(null);

    const { error: submitErr } = await elements.submit();
    if (submitErr) {
      setPayError(submitErr.message ?? 'Could not submit payment details.');
      setPaying(false);
      return;
    }

    const piRes = await fetch(`/api/invoice/${token}/pay`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipAmount }),
    });
    const piData = (await piRes.json()) as { clientSecret?: string; error?: string };
    if (!piRes.ok || !piData.clientSecret) {
      setPayError(piData.error ?? 'Could not create payment. Please try again.');
      setPaying(false);
      return;
    }

    const { error: confirmErr, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret: piData.clientSecret,
      confirmParams: { return_url: window.location.href },
      redirect: 'if_required',
    });

    if (confirmErr) {
      setPayError(confirmErr.message ?? 'Payment failed. Please try again.');
      setPaying(false);
      return;
    }

    if (paymentIntent?.status === 'succeeded') {
      await fetch(`/api/invoice/${token}/paid`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentIntentId: paymentIntent.id, tipAmount }),
      });
      onSuccess();
    } else {
      setPayError('Payment not confirmed. Please contact us.');
      setPaying(false);
    }
  }

  return (
    <div>
      <PaymentElement />
      {payError && <p className="text-red-600 text-sm mt-3">{payError}</p>}
      <button
        onClick={handlePay}
        disabled={paying || !stripe || !elements}
        className="mt-5 w-full bg-brand-black text-white rounded-xl py-4 font-semibold text-lg disabled:opacity-40 hover:opacity-90 transition-opacity"
      >
        {paying ? 'Processing…' : `Pay $${total.toFixed(2)}`}
      </button>
    </div>
  );
}

// ─── Main invoice page ────────────────────────────────────────────────────────

export default function InvoicePage({ params }: { params: { token: string } }) {
  const [invoice, setInvoice] = useState<InvoiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [paid, setPaid] = useState(false);

  const [selectedTip, setSelectedTip] = useState<number | 'custom'>(20);
  const [customTip, setCustomTip] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
  const [stripeReady, setStripeReady] = useState(false);

  useEffect(() => {
    fetch(`/api/invoice/${params.token}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: InvoiceData) => {
        setInvoice(data);
        if (data.status === 'paid') setPaid(true);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [params.token]);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

  const subtotal = invoice?.lineItems.reduce((s, l) => s + l.amount, 0) ?? 0;

  const tipAmount =
    selectedTip === 'custom'
      ? Math.max(0, parseFloat(customTip) || 0)
      : round2(subtotal * (selectedTip / 100));

  const total = round2(subtotal + tipAmount);

  const handleProceedToPay = useCallback(async () => {
    if (!invoice) return;
    const res = await fetch(`/api/invoice/${params.token}/pay`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipAmount }),
    });
    const data = (await res.json()) as { clientSecret?: string; error?: string };
    if (data.clientSecret) {
      setClientSecret(data.clientSecret);
      setShowPayment(true);
      setStripeReady(true);
    }
  }, [invoice, params.token, tipAmount]);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-offwhite flex items-center justify-center">
        <p className="text-brand-grey">Loading invoice…</p>
      </div>
    );
  }

  if (notFound || !invoice) {
    return (
      <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">Invoice not found</p>
          <p className="text-brand-grey">This link may have expired or is invalid.</p>
        </div>
      </div>
    );
  }

  if (paid) {
    return (
      <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">✓</div>
          <h1 className="font-serif text-2xl font-semibold mb-2">Payment Received</h1>
          <p className="text-brand-grey mb-1">Thank you, {invoice.customerName}!</p>
          <p className="text-brand-grey text-sm">
            A receipt has been sent to your email. We look forward to your next ride.
          </p>
          <p className="mt-6 text-sm text-brand-grey">— Eagle Eye Chauffeur</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-offwhite py-10 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-brand-grey text-sm uppercase tracking-widest mb-1">Eagle Eye Chauffeur</p>
          <h1 className="font-serif text-3xl font-semibold text-brand-black">Your Invoice</h1>
          {invoice.rideDate && (
            <p className="text-brand-grey mt-1 text-sm">{invoice.rideDate}</p>
          )}
        </div>

        {/* Invoice details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-5">
          <p className="text-sm text-brand-grey mb-4">
            Hi <strong className="text-brand-black">{invoice.customerName}</strong>, here is your invoice summary.
          </p>

          {(invoice.rideFrom || invoice.rideTo) && (
            <div className="flex gap-3 text-sm text-brand-grey mb-4 border-b border-brand-light pb-4">
              {invoice.rideFrom && (
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide mb-1">From</p>
                  <p className="text-brand-black">{invoice.rideFrom}</p>
                </div>
              )}
              {invoice.rideTo && (
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide mb-1">To</p>
                  <p className="text-brand-black">{invoice.rideTo}</p>
                </div>
              )}
            </div>
          )}

          {/* Line items */}
          <ul className="space-y-2 mb-4">
            {invoice.lineItems.map((item, i) => (
              <li key={i} className="flex justify-between text-sm">
                <span className="text-brand-grey">{item.label}</span>
                <span className="font-medium text-brand-black tabular-nums">${item.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between border-t border-brand-light pt-3">
            <span className="font-semibold text-brand-black">Subtotal</span>
            <span className="font-semibold text-brand-black tabular-nums">${subtotal.toFixed(2)}</span>
          </div>

          {invoice.notes && (
            <p className="mt-4 text-sm text-brand-grey bg-brand-offwhite rounded-lg px-3 py-2">{invoice.notes}</p>
          )}
        </div>

        {/* Tip selector */}
        {!showPayment && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-5">
            <h2 className="font-semibold text-brand-black mb-1">Add a gratuity?</h2>
            <p className="text-xs text-brand-grey mb-4">100% goes to your driver.</p>

            <div className="grid grid-cols-5 gap-2 mb-4">
              {TIP_OPTIONS.map((opt) => (
                <button
                  key={opt.pct}
                  onClick={() => setSelectedTip(opt.pct)}
                  className={`rounded-lg py-2 text-sm font-medium border transition-colors ${
                    selectedTip === opt.pct
                      ? 'bg-brand-black text-white border-brand-black'
                      : 'border-brand-light text-brand-grey hover:border-brand-black hover:text-brand-black'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setSelectedTip('custom')}
              className={`w-full rounded-lg py-2 text-sm font-medium border mb-3 transition-colors ${
                selectedTip === 'custom'
                  ? 'bg-brand-black text-white border-brand-black'
                  : 'border-brand-light text-brand-grey hover:border-brand-black hover:text-brand-black'
              }`}
            >
              Custom amount
            </button>

            {selectedTip === 'custom' && (
              <div className="relative mb-3">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-grey">$</span>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={customTip}
                  onChange={(e) => setCustomTip(e.target.value)}
                  placeholder="0.00"
                  className="w-full border border-brand-light rounded-lg pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
                />
              </div>
            )}

            {tipAmount > 0 && (
              <div className="flex justify-between text-sm text-brand-grey mb-2">
                <span>Gratuity</span>
                <span className="tabular-nums text-brand-black font-medium">+${tipAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between items-baseline border-t border-brand-light pt-3 mt-3">
              <span className="font-serif text-lg font-semibold text-brand-black">Total</span>
              <span className="text-2xl font-semibold text-brand-black tabular-nums">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleProceedToPay}
              className="mt-5 w-full bg-brand-black text-white rounded-xl py-4 font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Continue to Pay — ${total.toFixed(2)}
            </button>
          </div>
        )}

        {/* Stripe payment form */}
        {showPayment && stripeReady && clientSecret && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-5">
            <div className="flex justify-between items-baseline mb-5">
              <h2 className="font-semibold text-brand-black">Payment</h2>
              <span className="text-sm text-brand-grey">
                Total: <strong className="text-brand-black">${total.toFixed(2)}</strong>
                {tipAmount > 0 && (
                  <span className="text-xs ml-1">(incl. ${tipAmount.toFixed(2)} tip)</span>
                )}
              </span>
            </div>
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: { theme: 'stripe', variables: { colorPrimary: '#111111' } },
              }}
            >
              <PaymentForm
                token={params.token}
                tipAmount={tipAmount}
                subtotal={subtotal}
                onSuccess={() => setPaid(true)}
              />
            </Elements>
            <button
              onClick={() => { setShowPayment(false); setClientSecret(''); }}
              className="mt-3 w-full text-brand-grey text-sm underline"
            >
              ← Change tip amount
            </button>
          </div>
        )}

        <p className="text-center text-xs text-brand-grey mt-4">
          Payments processed securely by Stripe. Questions? Call{' '}
          <a href="tel:+19299196499" className="underline">
            (929) 919-6499
          </a>
        </p>
      </div>
    </div>
  );
}
