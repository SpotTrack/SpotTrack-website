# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static landing page built with Vue 3 + Vite to present **SpotTrack**, an IoT-based gym monitoring platform (equipment availability, occupancy, usage tracking). Single-page marketing site — no router, no backend in this repo.

## Commands

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server on port 4200 (auto-opens browser)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally

There is no lint or test script configured in `package.json`. Prettier config exists (`.prettierrc`: printWidth 100, single quotes, `angular` parser for `*.html`) but no lint/format script is wired up — run `npx prettier --write .` directly if formatting is needed.

## Architecture

### Component file split convention

Every component lives in its own folder under `src/components/<Name>/` as three separate files, **not** a single-file `.vue` component:

- `<Name>.vue` — template only, plus `<script src="./<Name>.js"></script>` and `<style src="./<Name>.css" scoped></style>`
- `<Name>.js` — the component logic as a plain object (`export default { name, setup() {...} }`), Composition API via `setup()`
- `<Name>.css` — scoped styles

When adding or modifying a component, follow this exact three-file split rather than inlining `<script>`/`<style>` blocks in the `.vue` file.

### Page composition

`main.js` mounts `App.vue`, which renders `LayoutSection` (`src/components/LayoutSection/`). `LayoutSection` composes the full page in order: `HeroSection` → `FeaturesSection` → `PricingSection` → `ContactSection` → `FooterSection`. `LanguageSwitcher` is used inside `HeroSection`. There is also a nested `ContactSection/LayoutSection/` — check which layout component a change actually targets before editing, since the name is reused.

### i18n

`vue-i18n` is configured in `src/i18n/index.js` (`legacy: false`, `globalInjection: true`, default locale `en`, fallback `es`). Translation strings live in `src/i18n/en.json` and `src/i18n/es.json` as parallel key trees. Components read strings via `useI18n()` / `t()` (Composition API, e.g. `ContactSection.js`) or the global `$t()` in templates (e.g. `PricingSection.vue`). When adding user-facing text, add the key to **both** `en.json` and `es.json`.

### Stripe checkout (mocked)

`src/composables/useStripe.js` loads Stripe.js via `loadStripe()` but `redirectToCheckout(planKey)` currently just redirects to hardcoded Stripe test "buy button" URLs (`mockUrls`) keyed by plan (`basic`/`mid`/`platinum`) — there is no real backend payment-intent call yet, despite `src/config/environment.js` defining `stripePaymentEndpoint`. Treat this as a placeholder integration point, not a finished checkout flow.

### Contact form

`ContactSection.js` sends form submissions directly from the client via `@emailjs/browser` (dynamically imported), using a hardcoded EmailJS service ID, template ID, and public key. Client-side validation gates submission (non-empty name, regex-validated email, non-empty message) via `hasSubmitted`/`canSubmit` computed state before calling EmailJS.

### Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to the `develop` branch: `npm install` → `npm run build` → publish `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. `vite.config.js` sets `base: '/bytesquad-website/'` to match the GitHub Pages subpath — this must stay in sync with the repo name if the Pages URL changes.


## AI Behavior & Frontend Engineering Profile (Top Global)
- **Role:** Elite Frontend Architect & Vue 3 Technical Lead (Staff/Principal Engineer Level).
- **Tone & Workflow:** Strict efficiency. Zero conversational filler, greetings, or explanations of what you are about to do. Write production-ready, clean, and typed code instantly.
- **Vue & Vite Tech Stack Standards:**
  1. Seamless integration with Vite builds. Leverage strict TypeScript typing for component props, events, and API payloads (including Stripe-js components).
- **Git Safety:** Maintain absolute privacy. Never include AI comments, signatures, or mentions of Claude in code modifications or commits. All output must belong exclusively to **Valentino Espinoza**.