import { expect, test, describe, vi } from "vitest";
import { createConversation, sendMessage, createOffer } from "../src/index";
import { scanMessageForPolicyViolations } from "@fyndo/ai/moderation";

vi.mock("@fyndo/database", () => {
  const conversationsList: any[] = [];
  const messagesList: any[] = [];
  const offersList: any[] = [];

  return {
    db: {
      query: {
        conversations: {
          findFirst: vi.fn().mockImplementation(() => null),
        },
      },
      insert: vi.fn().mockImplementation((table) => {
        return {
          values: vi.fn().mockImplementation((vals) => {
            return {
              returning: vi
                .fn()
                .mockReturnValue([{ id: "mock-id-123", ...vals }]),
            };
          }),
        };
      }),
    },
    conversations: {
      participant1Id: "participant1_id",
      participant2Id: "participant2_id",
    },
    directMessages: {
      conversationId: "conversation_id",
      senderId: "sender_id",
    },
    offers: { messageId: "message_id" },
  };
});

describe("Real-Time Messaging Engine", () => {
  test("Users can create a conversation and send an offer", async () => {
    const participant1 = "user-1";
    const participant2 = "user-2";

    // 1. Create Conversation
    const conversation = await createConversation(participant1, participant2);
    expect(conversation).toBeDefined();
    expect(conversation.participant1Id).toBe(participant1);

    // 2. Send Message (Not spam)
    const message = await sendMessage(
      conversation.id,
      participant1,
      "Hey, would you take $40 for the jacket?",
    );
    expect(message.content).toBe("Hey, would you take $40 for the jacket?");
    expect(message.isFlagged).toBe(false);

    // 3. Create Interactive Offer Card
    const offer = await createOffer(message.id, "prod-456", 4000); // 4000 cents
    expect(offer.amount).toBe(4000);
    expect(offer.status).toBe("pending");
  });

  test("AI Moderation silently flags phishing attempts", async () => {
    const isFlagged = await scanMessageForPolicyViolations(
      "Hey, just pay me on venmo instead",
    );
    expect(isFlagged).toBe(true);

    const isFlagged2 = await scanMessageForPolicyViolations(
      "Cashapp me the funds",
    );
    expect(isFlagged2).toBe(true);
  });
});
