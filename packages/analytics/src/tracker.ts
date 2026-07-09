// Centralized Analytics and Error Tracking Abstraction
// Supports PostHog and Sentry adapters

export interface TelemetryEvent {
  eventName: string;
  userId?: string;
  properties: Record<string, unknown>;
}

export interface ErrorEvent {
  error: Error;
  userId?: string;
  context: Record<string, unknown>;
}

// Ensure PII is stripped out before leaving the system
function sanitizeProperties(
  properties: Record<string, unknown>,
): Record<string, unknown> {
  const sanitized = { ...properties } as Record<string, unknown>;
  const sensitiveKeys = ["password", "token", "credit_card", "ssn", "secret"];
  for (const key of Object.keys(sanitized)) {
    if (sensitiveKeys.some((s) => key.toLowerCase().includes(s))) {
      sanitized[key] = "[REDACTED]";
    }
  }
  return sanitized;
}

export class AnalyticsTracker {
  private static instance: AnalyticsTracker;

  private constructor() {}

  public static getInstance(): AnalyticsTracker {
    if (!AnalyticsTracker.instance) {
      AnalyticsTracker.instance = new AnalyticsTracker();
    }
    return AnalyticsTracker.instance;
  }

  public trackEvent(event: TelemetryEvent) {
    const safeProps = sanitizeProperties(event.properties);
    // STUB: PostHog adapter logic would go here
    console.log(`[Telemetry] Event: ${event.eventName}`, {
      userId: event.userId,
      properties: safeProps,
    });
  }

  public captureError(event: ErrorEvent) {
    const safeContext = sanitizeProperties(event.context);
    // STUB: Sentry adapter logic would go here
    console.error(`[Error Tracking] Captured: ${event.error.message}`, {
      userId: event.userId,
      context: safeContext,
    });
  }
}

export const tracker = AnalyticsTracker.getInstance();
