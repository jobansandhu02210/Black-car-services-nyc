'use client';

import { useState, useEffect } from 'react';

const services = ['Chauffeur Service', 'Limousine Service', 'Black Car Service'];

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const timer = setInterval(() => {
      // fade out
      setPhase('out');
      setTimeout(() => {
        setIndex((i) => (i + 1) % services.length);
        setPhase('in');
      }, 450);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      style={{
        display: 'inline-block',
        transition: 'opacity 0.45s ease, transform 0.45s ease',
        opacity: phase === 'in' ? 1 : 0,
        transform: phase === 'in' ? 'translateY(0px)' : 'translateY(-10px)',
      }}
    >
      {services[index]}
    </span>
  );
}
