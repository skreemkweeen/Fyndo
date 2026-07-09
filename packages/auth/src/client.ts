import { createBrowserClient, createServerClient } from "@supabase/ssr";

// Assuming these environment variables are provided to the consuming app
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function createClientBrowser() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

// Type generic enough to represent Next.js cookies API
export type CookieStore = {
  get: (name: string) => { name: string; value: string } | undefined;
  set: (name: string, value: string, options: Record<string, unknown>) => void;
  remove: (name: string, options: Record<string, unknown>) => void;
  getAll: () => { name: string; value: string }[];
};

export function createClientServer(cookieStore: CookieStore) {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(
        cookiesToSet: {
          name: string;
          value: string;
          options: Record<string, unknown>;
        }[],
      ) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}

export async function getUser() {
  return { id: "mock-user-id", username: "mockuser", role: "buyer" };
}
