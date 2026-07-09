# Fyndo Production Readiness Guide

This document outlines the operational baseline, edge caching strategies, and CI/CD pipelines necessary to maintain a secure and scalable deployment for the Fyndo platform.

## 1. Deployment Checklist

Prior to launching Phase 12 to production, complete the following verification steps:

- [ ] **Infrastructure as Code**: Ensure the GitHub Actions pipelines (`.github/workflows/pr-checks.yml`) are merging cleanly.
- [ ] **Database Connection Pooling**: Ensure `DATABASE_URL` is utilizing the Supavisor connection pooling string format for serverless functions (port 6543) instead of direct connections.
- [ ] **Edge Caching**: Verify `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are active in the Vercel production environment. Wait for cache hydration on initial drop launches.
- [ ] **Vercel Setup**: `apps/web`, `apps/seller`, and `apps/admin` are deployed using the Next.js preset with `pnpm run build`.

## 2. Environment Variables Checklist

### Core

- `DATABASE_URL` (Must point to Supabase Connection Pooler)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (Required for backend admin tasks)

### Redis & Edge Caching (Upstash)

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

### Stripe Connect & Billing

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_WEBHOOK_SECRET`

### Real-Time Livestreaming (LiveKit)

- `LIVEKIT_API_KEY`
- `LIVEKIT_API_SECRET`
- `NEXT_PUBLIC_LIVEKIT_URL`

## 3. Stripe Webhook Setup

1. In the Stripe Dashboard, navigate to **Developers > Webhooks**.
2. Add a new endpoint pointing to `https://fyndo-web.vercel.app/api/stripe/webhook`.
3. Select the following events:
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
   - `customer.subscription.deleted`
4. Copy the Webhook Signing Secret into your Vercel `STRIPE_WEBHOOK_SECRET` variable.

## 4. Cache Invalidation Guide

Fyndo utilizes Stale-While-Revalidate and Edge Caching for public discovery feeds.

- **Automated Invalidations**: Drizzle or Supabase Webhooks should invoke the `/api/webhooks/cache` endpoint (not yet implemented) or call `@fyndo/cache` `invalidateProductCache(productId)` upon inventory updates.
- **Manual Invalidations**: You can run `pnpm dlx upstash-redis-cli flushall` during critical outages if the cache drifts from the DB.

## 5. Security & Rate Limiting

- **Rate Limiting**: Activated in `apps/web/middleware.ts` for `/api/v1/auth`, `/api/v1/bids`, and `/api/checkout`.
- **Security Headers**: Set to block XSS and enforce HSTS.
- **Source Maps**: `productionBrowserSourceMaps: false` prevents accidental disclosure of proprietary source code.

## 6. Rollback Plan

If a deployment fails:

1. Revert to the previously known working Vercel deployment inside the Vercel Dashboard.
2. If schema migrations corrupted the state, execute `pnpm run db:rollback` (assuming you have down migrations configured, else manual data intervention is required).
