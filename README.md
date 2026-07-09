# 🌌 Fyndo: The Omnichannel Social Commerce Platform

**Discover. Sell. Build.**

Fyndo is a next-generation, high-performance marketplace platform combining the best mechanics of Whatnot, Etsy, eBay, Shopify, and live social commerce. Engineered for infinite scale, Fyndo delivers real-time bidding, AI-powered discovery, and robust seller infrastructure in a pristine, monorepo architecture.

---

## 🏗️ Monorepo Architecture

Fyndo utilizes Turborepo to orchestrate a cleanly decoupled workspace:

### Applications (`apps/`)

- **`web`**: The primary consumer marketplace (Next.js 15).
- **`seller`**: The seller dashboard and operating system (Next.js 15).
- **`admin`**: The global platform administration portal (Next.js 15).
- **`mobile`**: The native iOS/Android mobile client (React Native / Expo).
- **`docs`**: The developer API portal for headless integrations (Next.js / Nextra).
- **`e2e`**: The Playwright End-to-End integration test suite.

### Core Packages (`packages/`)

- **`@fyndo/database`**: Drizzle ORM, Zod Schemas, and Supabase connection pooling.
- **`@fyndo/ui`**: Radix UI primitives and Tailwind CSS design system.
- **`@fyndo/types`**: Shared Zod schemas ensuring end-to-end type safety.
- **`@fyndo/live`**: LiveKit WebSocket engine for livestreaming and real-time WebRTC.
- **`@fyndo/auction`**: High-concurrency auction engine leveraging `SERIALIZABLE` isolation.
- **`@fyndo/payments`**: Stripe Connect escrow, multi-party ledger, and subscription logic.
- **`@fyndo/cache`**: Upstash Redis edge caching and rate limiting.
- **`@fyndo/ai`**: AI metadata generation and semantic search integrations.

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, Edge Middleware)
- **Mobile**: React Native & Expo Router
- **Database**: PostgreSQL (Supabase) + Drizzle ORM
- **Real-Time**: LiveKit Cloud
- **Payments**: Stripe Connect
- **Caching & Rate Limiting**: Upstash Redis
- **Validation**: Zod + TypeScript

---

## 💻 Getting Started

### 1. Installation

Clone the repository and install the dependencies utilizing `pnpm`:

```bash
git clone https://github.com/fyndo/fyndo.git
cd fyndo
pnpm install
```

### 2. Environment Variables

Ensure you copy `.env.example` to `.env.local` and populate your keys:

- `DATABASE_URL` (Supabase Connection Pool)
- `LIVEKIT_API_KEY` & `LIVEKIT_API_SECRET`
- `STRIPE_SECRET_KEY` & `STRIPE_WEBHOOK_SECRET`
- `UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`

### 3. Local Boot

Start the development server across all web applications simultaneously:

```bash
pnpm run dev
```

_(This triggers `turbo run dev`, running the Web, Seller, Admin, and Docs platforms concurrently on their respective ports)._

To boot the mobile client:

```bash
cd apps/mobile
pnpm start
```

---

## 🔒 Production Readiness

Review the [Production Readiness Guide](./production_readiness.md) and [Contributing Guidelines](./CONTRIBUTING.md) before deploying. Fyndo leverages strict Edge caching, security headers, and PII-redacted telemetry across its production boundary.
