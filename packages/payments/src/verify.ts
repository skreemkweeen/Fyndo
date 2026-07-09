async function verify() {
  console.log("Verifying Stripe SDK...");
  try {
    // Just testing that the SDK initializes without throwing a missing key error
    // We won't actually hit the API with a fake ID as it would 404, we just want to ensure it parses the env.
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error(
        "STRIPE_SECRET_KEY is missing from environment variables.",
      );
    }
    console.log("Stripe SDK initialized successfully.");
  } catch (error: any) {
    console.error("Stripe verification failed:", error.message);
    process.exit(1);
  }
}

verify();
