import { createParticipantToken } from "./tokens";

async function verify() {
  console.log("Verifying LiveKit SDK...");
  try {
    const token = await createParticipantToken({
      roomName: "verify-room",
      participantIdentity: "verify-user",
      participantName: "Verify User",
    });
    if (token) {
      console.log("LiveKit SDK initialized and token generated successfully.");
    }
  } catch (error: any) {
    console.error("LiveKit verification failed:", error.message);
    process.exit(1);
  }
}

verify();
