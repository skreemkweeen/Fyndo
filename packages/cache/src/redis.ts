import { Redis } from "@upstash/redis";
import { memoryCache } from "./memory";

// Initialize Redis only if we have the variables, otherwise we fallback silently
const hasRedis = !!(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

const redisClient = hasRedis
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null;

/**
 * Universal cache get - uses Redis if available, memory otherwise.
 */
export async function getCache<T>(key: string): Promise<T | null> {
  if (redisClient) {
    try {
      return await redisClient.get<T>(key);
    } catch (error) {
      console.warn("Redis GET failed, falling back to memory.", error);
      return memoryCache.get<T>(key);
    }
  }
  return memoryCache.get<T>(key);
}

/**
 * Universal cache set - uses Redis if available, memory otherwise.
 * @param ex Expiration in seconds
 */
export async function setCache(
  key: string,
  value: any,
  ex?: number,
): Promise<void> {
  if (redisClient) {
    try {
      if (ex) {
        await redisClient.set(key, value, { ex });
      } else {
        await redisClient.set(key, value);
      }
      return;
    } catch (error) {
      console.warn("Redis SET failed, falling back to memory.", error);
      return memoryCache.set(key, value, { ex });
    }
  }
  return memoryCache.set(key, value, { ex });
}

/**
 * Universal cache delete
 */
export async function delCache(key: string): Promise<void> {
  if (redisClient) {
    try {
      await redisClient.del(key);
      return;
    } catch (error) {
      console.warn("Redis DEL failed, falling back to memory.", error);
      return memoryCache.del(key);
    }
  }
  return memoryCache.del(key);
}

/**
 * Increment key
 */
export async function incrCache(
  key: string,
  windowSeconds?: number,
): Promise<number> {
  if (redisClient) {
    try {
      const p = redisClient.pipeline();
      p.incr(key);
      if (windowSeconds) {
        p.expire(key, windowSeconds);
      }
      const results = await p.exec();
      return results[0] as number;
    } catch (error) {
      console.warn("Redis INCR failed, falling back to memory.", error);
      return memoryCache.incr(key);
    }
  }
  return memoryCache.incr(key);
}
