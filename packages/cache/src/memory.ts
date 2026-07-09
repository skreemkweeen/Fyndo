// In-memory cache fallback for development without Redis
const memoryStore = new Map<string, { value: any; expiresAt: number | null }>();

export const memoryCache = {
  async get<T>(key: string): Promise<T | null> {
    const record = memoryStore.get(key);
    if (!record) return null;

    if (record.expiresAt && record.expiresAt < Date.now()) {
      memoryStore.delete(key);
      return null;
    }

    return record.value as T;
  },

  async set(key: string, value: any, options?: { ex?: number }): Promise<void> {
    const expiresAt = options?.ex ? Date.now() + options.ex * 1000 : null;
    memoryStore.set(key, { value, expiresAt });
  },

  async del(key: string): Promise<void> {
    memoryStore.delete(key);
  },

  async incr(key: string): Promise<number> {
    const record = memoryStore.get(key);
    let val = 0;
    if (record && typeof record.value === "number") {
      val = record.value;
    } else if (record && typeof record.value === "string") {
      val = parseInt(record.value, 10);
      if (isNaN(val)) val = 0;
    }

    val += 1;
    memoryStore.set(key, { value: val, expiresAt: record?.expiresAt || null });
    return val;
  },
};
