import { AccessToken } from "livekit-server-sdk";

export interface TokenOptions {
  roomName: string;
  participantName: string;
  participantIdentity: string;
}

/**
 * Validates LiveKit environment variables securely.
 * Throws if missing to ensure we never generate invalid tokens.
 */
function getLiveKitEnv() {
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;

  if (!apiKey || !apiSecret || !wsUrl) {
    throw new Error(
      "LIVEKIT_API_KEY, LIVEKIT_API_SECRET, or NEXT_PUBLIC_LIVEKIT_URL is missing. Please configure your .env file.",
    );
  }

  return { apiKey, apiSecret, wsUrl };
}

/**
 * Creates a host (seller) token for broadcasting.
 */
export async function createHostToken({
  roomName,
  participantName,
  participantIdentity,
}: TokenOptions): Promise<string> {
  const { apiKey, apiSecret } = getLiveKitEnv();

  const at = new AccessToken(apiKey, apiSecret, {
    identity: participantIdentity,
    name: participantName,
    ttl: "12h", // Hosts might stream for a long time
  });

  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true,
    canPublishData: true,
    canSubscribe: true,
    roomAdmin: true,
  });

  return await at.toJwt();
}

/**
 * Creates a participant (viewer/bidder) token.
 */
export async function createParticipantToken({
  roomName,
  participantName,
  participantIdentity,
}: TokenOptions): Promise<string> {
  const { apiKey, apiSecret } = getLiveKitEnv();

  const at = new AccessToken(apiKey, apiSecret, {
    identity: participantIdentity,
    name: participantName,
    ttl: "4h",
  });

  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: false,
    canPublishData: true, // Needed for reactions/chat if using data channels, though we use Supabase for bids
    canSubscribe: true,
    roomAdmin: false,
  });

  return await at.toJwt();
}

/**
 * Creates a moderator token.
 */
export async function createModeratorToken({
  roomName,
  participantName,
  participantIdentity,
}: TokenOptions): Promise<string> {
  const { apiKey, apiSecret } = getLiveKitEnv();

  const at = new AccessToken(apiKey, apiSecret, {
    identity: participantIdentity,
    name: participantName,
    ttl: "12h",
  });

  at.addGrant({
    roomJoin: true,
    room: roomName,
    canPublish: true, // Moderators might need to speak or show camera
    canPublishData: true,
    canSubscribe: true,
    roomAdmin: true,
  });

  return await at.toJwt();
}
