# AfterAdmit

**From admit to arrival, handled.**

AfterAdmit is a guided platform for international students navigating the complex journey between college acceptance and move-in day. Visa, housing, flights, banking, health insurance — turned into one personalized, ordered checklist tailored to your school, home country, and program.

## What it is

International students accepted to US universities face 40+ time-sensitive tasks spread across 5+ months: visa applications, I-20 processing, housing deadlines, flight booking, bank account setup, health insurance waivers, and more. AfterAdmit turns that chaos into a single clear roadmap with the right deadlines and real humans when you need them.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS custom properties |
| Fonts | Newsreader (headings) + Hanken Grotesk (body) via `next/font/google` |
| Deployment | Vercel (recommended) |

## Getting started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project structure

```
afteradmit-website/
├── app/
│   ├── globals.css        # CSS variables, animations, hover classes
│   ├── layout.tsx         # Root layout — fonts, metadata, body wrapper
│   └── page.tsx           # Home page — assembles sections, owns form state
├── components/
│   ├── Nav.tsx            # Sticky navigation header
│   ├── Hero.tsx           # Hero with email signup and animated roadmap card
│   ├── TrustBar.tsx       # "40+ universities" trust bar
│   ├── Problem.tsx        # How it works (3 steps) + checklist (6 service cards)
│   ├── Pricing.tsx        # Free + Concierge pricing plans
│   ├── FAQ.tsx            # Accordion FAQ (client component)
│   ├── FinalCTA.tsx       # Bottom email signup CTA
│   └── Footer.tsx         # Footer with navigation links
├── project/               # Original design prototype (HTML reference)
├── public/                # Static assets
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Design system

All brand colors are CSS custom properties, making the design easy to extend or retheme:

```css
:root {
  --bg:          #FAF8F4;  /* Off-white page background */
  --surface:     #FFFFFF;  /* Card and form backgrounds */
  --ink:         #1B2230;  /* Primary text */
  --muted:       #5B6273;  /* Secondary / caption text */
  --line:        #E9E3D9;  /* Borders and dividers */
  --accent:      #1B8A78;  /* Teal — primary brand color */
  --accent-ink:  #0E5448;  /* Dark teal — hover states */
  --accent-soft: #E4F1EC;  /* Light teal — subtle backgrounds */
}
```

Two alternative accent themes (`coral` and `indigo`) are defined in the original prototype and can be activated by swapping the three `--accent*` variables.

## Key features

- **Personalized roadmap** — task list built from school, program, home country, and start date
- **Waitlist signup** — email capture form with shared state across hero and bottom CTA
- **FAQ accordion** — smooth `grid-template-rows` CSS transition, no layout jank
- **Animated hero card** — floating roadmap preview with progress bar and task states
- **Responsive layout** — fluid grids with `clamp()` typography, mobile nav collapses at 820px
- **Zero layout shift** — fonts loaded via `next/font` with `display: swap`

## Deploying

### Vercel (recommended)

```bash
npx vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new) — Vercel auto-detects Next.js and deploys on every push to `main`.

### Other platforms

Any platform that supports Node.js can run `npm run build && npm start`. The app has no server-side data dependencies, so it can also be exported as a static site:

```bash
# Add output: 'export' to next.config.mjs, then:
npm run build
# Output is in /out
```

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes
4. Open a pull request

## License

MIT
