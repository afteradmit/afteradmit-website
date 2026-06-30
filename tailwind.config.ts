import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        sand: 'var(--sand)',
        peach: 'var(--peach)',
        apricot: 'var(--apricot)',
        terracotta: 'var(--terracotta)',
        'terracotta-dk': 'var(--terracotta-dk)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        'verify-ink': 'var(--verify-ink)',
        'verify-bg': 'var(--verify-bg)',
        line: 'var(--line)',
        surface: 'var(--surface)',
        /* compat aliases */
        bg: 'var(--paper)',
        accent: 'var(--terracotta)',
        'accent-ink': 'var(--terracotta-dk)',
        'accent-soft': 'var(--peach)',
      },
      fontFamily: {
        sans: ['var(--font-hanken)', 'Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
