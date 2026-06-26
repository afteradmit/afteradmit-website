import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-ink': 'var(--accent-ink)',
        'accent-soft': 'var(--accent-soft)',
      },
      fontFamily: {
        sans: ['var(--font-hanken)', 'Hanken Grotesk', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Newsreader', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
