"use server";

import { createHostToken, createParticipantToken } from "@fyndo/live";
import { db, streams } from "@fyndo/database";
import { getUser } from "@fyndo/auth";
import { eq } from "drizzle-orm";

export async function generateLiveKitToken(streamId: string) {
  const user = await getUser();
  if (!user) {
    throw new Error("Unauthorized");
  }

  // Verify stream exists
  const stream = await db.query.streams.findFirst({
    where: eq(streams.id, streamId),
  });

  if (!stream) {
    throw new Error("Stream not found");
  }

  // If user is the seller, generate host token
  if (stream.sellerId === user.id) {
    return await createHostToken({
      roomName: streamId,
      participantIdentity: user.id,
      participantName: user.username,
    });
  }

  // Otherwise generate participant token
  return await createParticipantToken({
    roomName: streamId,
    participantIdentity: user.id,
    participantName: user.username,
  });
}
