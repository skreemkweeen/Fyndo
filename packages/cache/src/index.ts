export * from "./redis";
export * from "./memory";

import { delCache } from "./redis";

/**
 * Common cache key generators
 */
export const CacheKeys = {
  feed: () => `fyndo:feed:global`,
  product: (productId: string) => `fyndo:product:${productId}`,
  productMetadata: (productId: string) => `fyndo:product:${productId}:metadata`,
  storefront: (sellerId: string) => `fyndo:storefront:${sellerId}`,
  rateLimit: (action: string, ip: string) => `fyndo:ratelimit:${action}:${ip}`,
};

/**
 * Cache invalidation helpers
 */
export async function invalidateProductCache(productId: string) {
  await Promise.all([
    delCache(CacheKeys.product(productId)),
    delCache(CacheKeys.productMetadata(productId)),
    delCache(CacheKeys.feed()), // invalidate global feed since inventory/price changed
  ]);
}

export async function invalidateStorefrontCache(sellerId: string) {
  await delCache(CacheKeys.storefront(sellerId));
}
