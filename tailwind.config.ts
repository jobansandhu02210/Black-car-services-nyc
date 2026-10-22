import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Palette A "Calm Corporate" (docs/REFERENCE-RESEARCH.md §4). Values live as CSS
      // variables in app/globals.css; the legacy names (black, charcoal, grey, …) are
      // remapped onto the new palette so template pages not yet rewritten stay on-brand.
      colors: {
        brand: {
          // New semantic tokens — use these in new code
          ink: 'rgb(var(--c-ink) / <alpha-value>)',
          blue: 'rgb(var(--c-blue) / <alpha-value>)',
          'blue-hover': 'rgb(var(--c-blue-hover) / <alpha-value>)',
          sky: 'rgb(var(--c-sky) / <alpha-value>)',
          tint: 'rgb(var(--c-tint) / <alpha-value>)',
          line: 'rgb(var(--c-line) / <alpha-value>)',
          muted: 'rgb(var(--c-muted) / <alpha-value>)',
          // Legacy template names → new palette
          black: 'rgb(var(--c-ink) / <alpha-value>)',
          charcoal: 'rgb(var(--c-ink-2) / <alpha-value>)',
          dark: 'rgb(var(--c-ink-3) / <alpha-value>)',
          grey: 'rgb(var(--c-muted) / <alpha-value>)',
          silver: 'rgb(var(--c-on-dark-muted) / <alpha-value>)',
          light: 'rgb(var(--c-line) / <alpha-value>)',
          offwhite: 'rgb(var(--c-tint) / <alpha-value>)',
          white: 'rgb(var(--c-white) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
