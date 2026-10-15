'use client';

import { useState } from 'react';
import { CONTACT_PHONE_DISPLAY } from '@/lib/contact';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const phone = String(fd.get('phone') || '').trim();
    const message = String(fd.get('message') || '').trim();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErrorMessage(typeof data.error === 'string' ? data.error : 'Could not send message.');
        setStatus('error');
        return;
      }
      setStatus('sent');
      form.reset();
    } catch {
      setErrorMessage('Network error. Please try again or call us.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">Name</label>
        <input id="name" name="name" type="text" required
          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
          placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">Email</label>
        <input id="email" name="email" type="email" required
          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
          placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">Phone</label>
        <input id="phone" name="phone" type="tel"
          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
          placeholder={CONTACT_PHONE_DISPLAY} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">Message</label>
        <textarea id="message" name="message" rows={4} required
          className="w-full px-4 py-3 border border-brand-light bg-brand-offwhite text-brand-black placeholder-brand-silver focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent resize-y"
          placeholder="How can we help?" />
      </div>
      <button type="submit" disabled={status === 'sending'}
        className="w-full sm:w-auto px-8 py-4 bg-brand-black text-brand-white font-medium hover:bg-brand-charcoal transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent' : 'Send Message'}
      </button>
      {status === 'sent' && <p className="text-brand-grey text-sm">We’ll get back to you soon.</p>}
      {status === 'error' && (
        <p className="text-red-600 text-sm" role="alert">
          {errorMessage ?? 'Something went wrong. Please try again or call us.'}
        </p>
      )}
    </form>
  );
}
