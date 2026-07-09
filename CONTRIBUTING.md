# Contributing to Fyndo

Welcome to the Fyndo monorepo! This enterprise-grade platform is built using Next.js 15, React Native (Expo), and Turborepo.

## Known Architectural Quirks

### React 18 vs React 19 (TS2742)

You may encounter a `TS2742` warning when running `turbo run typecheck` on the Next.js 15 apps (`@fyndo/web`, `@fyndo/seller`, `@fyndo/admin`). This occurs because the Next.js 15 applications leverage React 19, whereas the React Native `apps/mobile` Expo project currently relies on React 18.

This creates a minor peer dependency overlap in `pnpm-workspace`. This type resolution issue strictly affects type-checker verbosity and **does not impact runtime execution or production bundles**.

_If you are adding new inferred Server Components and the typechecker complains, you can explicitly define the return type (e.g., `JSX.Element` or `React.ReactElement`) to silence the warning._

## Submitting Pull Requests

1. All PRs are verified against our Playwright E2E suite (`apps/e2e`).
2. Run `turbo run test` and `turbo run lint` locally before pushing.
3. Ensure you do not mix DOM packages (e.g., `@fyndo/ui`) into `apps/mobile`.
