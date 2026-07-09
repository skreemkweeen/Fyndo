import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { incrCache, CacheKeys } from "@fyndo/cache";

// Configuration for rate limits
const RATE_LIMITS = {
  auth: { limit: 10, window: 60 }, // 10 attempts per minute
  bids: { limit: 100, window: 60 }, // 100 bids per minute
  webhook: { limit: 50, window: 60 },
  checkout: { limit: 20, window: 60 },
  livekit: { limit: 30, window: 60 },
  message: { limit: 50, window: 60 },
};

function getRateLimitConfig(pathname: string) {
  if (pathname.startsWith("/api/v1/auth")) return RATE_LIMITS.auth;
  if (pathname.startsWith("/api/v1/bids")) return RATE_LIMITS.bids;
  if (pathname.startsWith("/api/stripe/webhook")) return RATE_LIMITS.webhook;
  if (pathname.startsWith("/api/checkout")) return RATE_LIMITS.checkout;
  if (pathname.startsWith("/api/livekit")) return RATE_LIMITS.livekit;
  if (pathname.startsWith("/api/message")) return RATE_LIMITS.message;
  return null;
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Rate Limiting Logic
  const config = getRateLimitConfig(request.nextUrl.pathname);
  if (config) {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    // Use an action key derived from the path
    const action = request.nextUrl.pathname.split("/")[2] || "global";
    const key = CacheKeys.rateLimit(action, ip);

    // In Edge middleware, we should ideally use Upstash directly as standard Redis clients might not work
    // But since we use @upstash/redis in @fyndo/cache, which is edge compatible, this works perfectly.
    const count = await incrCache(key, config.window);

    if (count > config.limit) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
  }

  return response;
}

export const config = {
  matcher: ["/api/:path*", "/((?!_next/static|_next/image|favicon.ico).*)"],
};
