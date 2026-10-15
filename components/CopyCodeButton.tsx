'use client';

import { useState } from 'react';

export default function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="text-sm text-brand-silver hover:text-brand-white underline"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export function CopyCodeLarge({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="px-8 py-4 bg-brand-white text-brand-black font-medium hover:bg-brand-light transition-colors"
    >
      {copied ? 'Copied!' : `Copy Code: ${code}`}
    </button>
  );
}
