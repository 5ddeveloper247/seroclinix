# seroclinix

A lightweight Next.js website for a medical/clinic landing site. This repository contains a Next.js (App Router) project that serves the frontend content, components, and data for the Seroclinix site.

## What this project contains

- A Next.js application using the App Router (`src/app`).
- Tailwind CSS for styling (see `postcss.config.mjs`).
- Reusable components under `src/components` (header, footer, common sections).
- Static assets in `public/` (images, SVGs).
- Simple data module in `src/data/data.js` that the UI consumes.

This README describes how to run, build, and find the main parts of the codebase.

## Tech stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- GSAP for animations
- Swiper for carousels

## Quick start (development)

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Available npm scripts (from `package.json`):

- `dev` — run the development server (uses Turbopack by default).
- `build` — build the production app.
- `start` — start the production server after build.

Example build + start:

```bash
npm run build
npm run start
```

## Project structure (key files)

- `src/app/` — Next.js App Router routes and page layout. Entry point for pages/sections.
- `src/components/` — React components used across pages.
  - `common/` — small reusable UI pieces (Button, FaqSection, ServiceHeading, TestimonialSection).
  - `header/` — `HeaderComponent.jsx` (site header/navigation).
  - `footer/` — `FooterComponent.jsx` (site footer).
  - `sections/` — content sections for pages (home, about, services).
- `src/data/data.js` — data used by pages (services, testimonials, etc.).
- `public/` — static assets (images, svg, temps).
- `next.config.mjs` and `postcss.config.mjs` — project configuration.

If you need to find a component quickly, look under `src/components` for the directory matching the area of the site (header, footer, sections, common).

## Development notes and conventions

- Files under `src/app` use the App Router conventions (server components by default). Component files with `.jsx` are client components when they use browser-only APIs.
- Styling is provided through Tailwind CSS. Look in `globals.css` for global rules and `postcss.config.mjs` for PostCSS setup.
- Images and static content live in `public/` and can be referenced with `/images/...` paths.
- Fonts are placed in `src/app/font/` (if configured) and loaded via Next.js font optimizations.

## Where to edit content

- Top-level page composition lives in `src/app/page.jsx` and `src/app/layout.jsx`.
- Reusable sections and UI are in `src/components/sections/home/` and `src/components/common/`.
- Static site data is in `src/data/data.js` — update this file to change services, testimonials, and similar content.

## Deployment

This app is ready to deploy to any platform that supports Next.js (Vercel, Netlify with adapters, or any Node hosting). For Vercel, the defaults typically work without additional configuration.

Basic production flow:

```bash
npm run build
npm run start
```

When deploying to Vercel, connect the repository and use the `build` command above. Ensure environment variables (if any) are configured in your deployment settings.

## Contributing

1. Fork the repository and create a feature branch.
2. Make changes and keep them focused and small.
3. Update or add small tests if appropriate (this repo currently has no test harness).
4. Open a pull request describing your changes.

If you plan larger changes (design system, major refactor), open an issue first to discuss the approach.

## Troubleshooting

- If you see build errors, check that your local Node version is compatible with Next.js 15 and React 19.
- If Tailwind classes aren't applied, ensure that `globals.css` is imported in `src/app/layout.jsx` and that Tailwind is configured.

## License & contact

This repository does not include a license file by default — add a `LICENSE` if you intend to make the project open source. For questions about the project structure or content, open an issue in the repository.

---

If you want, I can also:

- Add a short `CONTRIBUTING.md` with a PR template.
- Add a small checklist for pull requests.
- Generate a simple `docs/` page with where each major component lives.

Tell me which of those you'd like next.
