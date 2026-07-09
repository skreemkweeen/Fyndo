import { describe, it, expect, vi } from "vitest";
import { tracker } from "../src/tracker";

describe("Analytics Tracker", () => {
  it("sanitizes sensitive data before logging", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (global as any).fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    tracker.trackEvent({
      eventName: "checkout_started",
      properties: {
        amount: 100,
        password: "mysecretpassword123",
        credit_card: "4111222233334444",
      },
    });

    expect(consoleSpy).toHaveBeenCalled();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const callArgs = consoleSpy.mock.calls[0][1] as any;
    expect(callArgs.properties.amount).toBe(100);
    expect(callArgs.properties.password).toBe("[REDACTED]");
    expect(callArgs.properties.credit_card).toBe("[REDACTED]");

    consoleSpy.mockRestore();
  });
});
