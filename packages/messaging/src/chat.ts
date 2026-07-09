import { db, conversations, directMessages, offers } from "@fyndo/database";
import { eq, or, and, desc } from "drizzle-orm";
// Assume ai-moderation is exported from @fyndo/ai
import { scanMessageForPolicyViolations } from "@fyndo/ai/moderation";

export async function createConversation(
  participant1Id: string,
  participant2Id: string,
) {
  // Check if conversation already exists
  const existing = await db.query.conversations.findFirst({
    where: or(
      and(
        eq(conversations.participant1Id, participant1Id),
        eq(conversations.participant2Id, participant2Id),
      ),
      and(
        eq(conversations.participant1Id, participant2Id),
        eq(conversations.participant2Id, participant1Id),
      ),
    ),
  });

  if (existing) return existing;

  const [newConversation] = await db
    .insert(conversations)
    .values({
      participant1Id,
      participant2Id,
    })
    .returning();

  return newConversation;
}

export async function sendMessage(
  conversationId: string,
  senderId: string,
  content: string,
) {
  // 1. AI scanning (silent)
  const isFlagged = await scanMessageForPolicyViolations(content);

  // 2. Insert Message
  const [msg] = await db
    .insert(directMessages)
    .values({
      conversationId,
      senderId,
      content,
      isFlagged,
    })
    .returning();

  // Note: Supabase Realtime will automatically broadcast this insertion
  // to subscribed clients listening to the direct_messages table where conversationId matches.
  return msg;
}

export async function createOffer(
  messageId: string,
  productId: string,
  amount: number,
) {
  const [offer] = await db
    .insert(offers)
    .values({
      messageId,
      productId,
      amount,
      status: "pending",
    })
    .returning();
  return offer;
}

export async function getConversationMessages(conversationId: string) {
  return await db.query.directMessages.findMany({
    where: eq(directMessages.conversationId, conversationId),
    orderBy: [desc(directMessages.createdAt)],
    limit: 50,
  });
}
