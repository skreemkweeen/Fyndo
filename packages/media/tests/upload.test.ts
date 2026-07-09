import { describe, it, expect, vi } from "vitest";
import { generateUploadUrl } from "../src/upload";

vi.mock("@fyndo/auth", () => ({
  getUser: vi.fn().mockImplementation(async () => {
    // For testing purposes, we'll check a global variable or just rely on tests overriding the mock
    return { id: "user_123" };
  }),
}));

vi.mock("@supabase/supabase-js", () => {
  return {
    createClient: () => ({
      storage: {
        from: (bucket: string) => ({
          createSignedUploadUrl: async (path: string) => {
            return {
              data: {
                signedUrl: `https://mock.supabase.co/storage/v1/upload/resumable/${bucket}/${path}`,
                token: "mock-upload-token",
              },
              error: null,
            };
          },
        }),
      },
    }),
  };
});

import { getUser } from "@fyndo/auth";

describe("Media Upload Engine", () => {
  it("generates a signed upload URL for an authorized user", async () => {
    vi.mocked(getUser).mockResolvedValueOnce({
      id: "user_123",
      username: "mock",
      role: "buyer",
    });
    const result = await generateUploadUrl(
      "user_123",
      "videos",
      "drop-announcement.mp4",
    );
    expect(result.signedUrl).toContain("user_123/drop-announcement.mp4");
    expect(result.token).toBe("mock-upload-token");
  });

  it("denies upload URL generation if user is not authorized", async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked(getUser).mockResolvedValueOnce(null as any);
    await expect(
      generateUploadUrl("user_123", "videos", "drop.mp4"),
    ).rejects.toThrow(
      "Unauthorized to generate upload signature for this path.",
    );
  });

  it("denies upload URL generation if user id mismatches", async () => {
    vi.mocked(getUser).mockResolvedValueOnce({
      id: "user_456",
      username: "mock",
      role: "buyer",
    });
    await expect(
      generateUploadUrl("user_123", "videos", "drop.mp4"),
    ).rejects.toThrow(
      "Unauthorized to generate upload signature for this path.",
    );
  });
});
