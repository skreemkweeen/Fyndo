import {
  pgTable,
  uuid,
  text,
  timestamp,
  boolean,
  integer,
  jsonb,
  vector,
  varchar,
  pgEnum,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", [
  "buyer",
  "seller",
  "creator",
  "moderator",
  "admin",
]);

// Users / Profiles
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(), // Supabase Auth user ID maps here
  username: text("username").unique().notNull(),
  fullName: text("full_name"),
  avatarUrl: text("avatar_url"),
  role: text("role").default("buyer").notNull(), // 'buyer', 'seller', 'creator', 'moderator', 'admin'
  isVerified: boolean("is_verified").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const subscriptionTiers = pgTable("subscription_tiers", {
  id: uuid("id").primaryKey().defaultRandom(),
  creatorId: uuid("creator_id")
    .references(() => profiles.id)
    .notNull(),
  stripeProductId: text("stripe_product_id").notNull(),
  stripePriceId: text("stripe_price_id").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  priceAmount: integer("price_amount").notNull(),
  currency: varchar("currency", { length: 3 }).default("usd").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  subscriberId: uuid("subscriber_id")
    .references(() => profiles.id)
    .notNull(),
  tierId: uuid("tier_id")
    .references(() => subscriptionTiers.id)
    .notNull(),
  stripeSubscriptionId: text("stripe_subscription_id").notNull().unique(),
  status: varchar("status", { length: 50 }).notNull(), // active, canceled, past_due
  currentPeriodStart: timestamp("current_period_start").notNull(),
  currentPeriodEnd: timestamp("current_period_end").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const exclusiveContentAccess = pgTable("exclusive_content_access", {
  id: uuid("id").primaryKey().defaultRandom(),
  tierId: uuid("tier_id")
    .references(() => subscriptionTiers.id)
    .notNull(),
  contentId: uuid("content_id").notNull(), // Polymorphic reference to posts.id, products.id, etc.
  contentType: varchar("content_type", { length: 50 }).notNull(), // 'post', 'product', 'livestream'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Storefronts
export const stores = pgTable("stores", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerId: uuid("owner_id")
    .references(() => profiles.id)
    .notNull(),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  customDomain: text("custom_domain").unique(),
  themeConfig: jsonb("theme_config").default({}).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Products
export const products = pgTable("products", {
  id: uuid("id").primaryKey().defaultRandom(),
  storeId: uuid("store_id")
    .references(() => stores.id)
    .notNull(),
  title: text("title").notNull(),
  description: text("description"),
  price: integer("price").notNull(), // in cents
  saleType: text("sale_type").default("fixed").notNull(), // 'fixed', 'auction', 'livestream_exclusive'
  inventoryCount: integer("inventory_count").default(0).notNull(),
  images: jsonb("images").default([]).notNull(),
  embedding: vector("embedding", { dimensions: 1536 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Social Graph (Follows)
export const follows = pgTable("follows", {
  id: uuid("id").primaryKey().defaultRandom(),
  followerId: uuid("follower_id")
    .references(() => profiles.id)
    .notNull(),
  followingId: uuid("following_id")
    .references(() => profiles.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Collections (Moodboards)
export const collections = pgTable("collections", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerId: uuid("owner_id")
    .references(() => profiles.id)
    .notNull(),
  name: text("name").notNull(),
  isPrivate: boolean("is_private").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const collectionItems = pgTable("collection_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  collectionId: uuid("collection_id")
    .references(() => collections.id)
    .notNull(),
  productId: uuid("product_id")
    .references(() => products.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Streams
export const streams = pgTable("streams", {
  id: uuid("id").primaryKey().defaultRandom(),
  sellerId: uuid("seller_id")
    .references(() => profiles.id)
    .notNull(),
  streamKey: text("stream_key").unique().notNull(),
  title: text("title").notNull(),
  status: text("status").default("scheduled").notNull(), // 'scheduled', 'live', 'ended'
  scheduledStart: timestamp("scheduled_start"),
  actualStart: timestamp("actual_start"),
  actualEnd: timestamp("actual_end"),
  peakViewers: integer("peak_viewers").default(0).notNull(),
  currentViewers: integer("current_viewers").default(0).notNull(),
  replayUrl: text("replay_url"),
  thumbnail: text("thumbnail"),
  chatEnabled: boolean("chat_enabled").default(true).notNull(),
  recordingEnabled: boolean("recording_enabled").default(true).notNull(),
  visibility: text("visibility").default("public").notNull(),
  latencyMode: text("latency_mode").default("low").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Auctions
export const auctions = pgTable("auctions", {
  id: uuid("id").primaryKey().defaultRandom(),
  productId: uuid("product_id")
    .references(() => products.id)
    .notNull(),
  streamId: uuid("stream_id").references(() => streams.id),
  startingBid: integer("starting_bid").notNull(),
  currentHighestBid: integer("current_highest_bid").default(0).notNull(),
  reservePrice: integer("reserve_price"),
  buyNowPrice: integer("buy_now_price"),
  minimumIncrement: integer("minimum_increment").notNull(),
  currency: text("currency").default("usd").notNull(),
  proxyBidEnabled: boolean("proxy_bid_enabled").default(false).notNull(),
  antiSnipingSeconds: integer("anti_sniping_seconds").default(30).notNull(),
  visibility: text("visibility").default("public").notNull(),
  status: text("status").default("draft").notNull(), // 'draft', 'active', 'ended', 'cancelled'
  endTime: timestamp("end_time"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Bids
export const bids = pgTable("bids", {
  id: uuid("id").primaryKey().defaultRandom(),
  auctionId: uuid("auction_id")
    .references(() => auctions.id)
    .notNull(),
  bidderId: uuid("bidder_id")
    .references(() => profiles.id)
    .notNull(),
  amount: integer("amount").notNull(),
  status: text("status").default("accepted").notNull(), // 'accepted', 'outbid', 'won'
  proxyBid: boolean("proxy_bid").default(false).notNull(),
  ipAddress: text("ip_address"),
  deviceId: text("device_id"),
  paymentVerified: boolean("payment_verified").default(false).notNull(),
  bidSource: text("bid_source").default("web").notNull(),
  fraudScore: integer("fraud_score").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Chat Messages
export const chatMessages = pgTable("chat_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  streamId: uuid("stream_id")
    .references(() => streams.id)
    .notNull(),
  userId: uuid("user_id")
    .references(() => profiles.id)
    .notNull(),
  content: text("content").notNull(),
  isPinned: boolean("is_pinned").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Viewer Sessions (Auction Participant State)
export const viewerSessions = pgTable("viewer_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  streamId: uuid("stream_id")
    .references(() => streams.id)
    .notNull(),
  userId: uuid("user_id")
    .references(() => profiles.id)
    .notNull(),
  paymentVerified: boolean("payment_verified").default(false).notNull(),
  setupIntentId: text("setup_intent_id"),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
  leftAt: timestamp("left_at"),
});

// Orders
export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().defaultRandom(),
  buyerId: uuid("buyer_id")
    .references(() => profiles.id)
    .notNull(),
  sellerId: uuid("seller_id")
    .references(() => profiles.id)
    .notNull(),
  auctionId: uuid("auction_id").references(() => auctions.id),
  productId: uuid("product_id").references(() => products.id),
  totalAmount: integer("total_amount").notNull(),
  currency: text("currency").default("usd").notNull(),
  status: text("status").default("pending_payment").notNull(), // 'pending_payment', 'paid', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  stripeTransferId: text("stripe_transfer_id"), // for escrow
  shippingAddress: jsonb("shipping_address"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Fulfillment Events
export const fulfillmentEvents = pgTable("fulfillment_events", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id")
    .references(() => orders.id)
    .notNull(),
  status: text("status").notNull(), // 'label_created', 'picked_up', 'in_transit', 'out_for_delivery', 'delivered', 'exception'
  provider: text("provider").notNull(), // 'mock', 'easypost', 'shippo'
  trackingNumber: text("tracking_number"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Returns
export const returns = pgTable("returns", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id")
    .references(() => orders.id)
    .notNull(),
  buyerId: uuid("buyer_id")
    .references(() => profiles.id)
    .notNull(),
  reason: text("reason").notNull(),
  status: text("status").default("pending_approval").notNull(), // 'pending_approval', 'approved', 'shipped', 'received', 'rejected'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Refunds
export const refunds = pgTable("refunds", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id")
    .references(() => orders.id)
    .notNull(),
  amount: integer("amount").notNull(),
  reason: text("reason").notNull(),
  stripeRefundId: text("stripe_refund_id"),
  status: text("status").default("pending").notNull(), // 'pending', 'succeeded', 'failed'
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Disputes
export const disputes = pgTable("disputes", {
  id: uuid("id").primaryKey().defaultRandom(),
  orderId: uuid("order_id")
    .references(() => orders.id)
    .notNull(),
  initiatorId: uuid("initiator_id")
    .references(() => profiles.id)
    .notNull(),
  reason: text("reason").notNull(),
  status: text("status").default("open").notNull(), // 'open', 'under_review', 'resolved_buyer', 'resolved_seller'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Dispute Messages
export const disputeMessages = pgTable("dispute_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  disputeId: uuid("dispute_id")
    .references(() => disputes.id)
    .notNull(),
  senderId: uuid("sender_id")
    .references(() => profiles.id)
    .notNull(),
  content: text("content").notNull(),
  attachments: jsonb("attachments").default([]).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Moderation Cases
export const moderationCases = pgTable("moderation_cases", {
  id: uuid("id").primaryKey().defaultRandom(),
  targetType: text("target_type").notNull(), // 'product', 'store', 'profile', 'stream'
  targetId: uuid("target_id").notNull(),
  reporterId: uuid("reporter_id").references(() => profiles.id), // null if AI flagged
  reason: text("reason").notNull(), // 'counterfeit', 'tos_violation', 'harassment'
  aiConfidenceScore: integer("ai_confidence_score"), // 0-100
  status: text("status").default("pending").notNull(), // 'pending', 'investigating', 'action_taken', 'dismissed'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Admin Audit Logs
export const adminAuditLogs = pgTable("admin_audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  adminId: uuid("admin_id")
    .references(() => profiles.id)
    .notNull(),
  action: text("action").notNull(),
  targetType: text("target_type").notNull(),
  targetId: uuid("target_id").notNull(),
  metadata: jsonb("metadata").default({}).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// DM Conversations
export const conversations = pgTable("conversations", {
  id: uuid("id").primaryKey().defaultRandom(),
  participant1Id: uuid("participant1_id")
    .references(() => profiles.id)
    .notNull(),
  participant2Id: uuid("participant2_id")
    .references(() => profiles.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Direct Messages
export const directMessages = pgTable("direct_messages", {
  id: uuid("id").primaryKey().defaultRandom(),
  conversationId: uuid("conversation_id")
    .references(() => conversations.id)
    .notNull(),
  senderId: uuid("sender_id")
    .references(() => profiles.id)
    .notNull(),
  content: text("content").notNull(),
  attachments: jsonb("attachments").default([]).notNull(),
  isFlagged: boolean("is_flagged").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Offers (Embedded in Chat)
export const offers = pgTable("offers", {
  id: uuid("id").primaryKey().defaultRandom(),
  messageId: uuid("message_id")
    .references(() => directMessages.id)
    .notNull(),
  productId: uuid("product_id")
    .references(() => products.id)
    .notNull(),
  amount: integer("amount").notNull(),
  status: text("status").default("pending").notNull(), // 'pending', 'accepted', 'declined'
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Posts (Creator Activity Feed)
export const posts = pgTable("posts", {
  id: uuid("id").primaryKey().defaultRandom(),
  authorId: uuid("author_id")
    .references(() => profiles.id)
    .notNull(),
  content: text("content").notNull(),
  media: jsonb("media").default([]).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Viral Growth & Affiliates
export const promoCodes = pgTable("promo_codes", {
  id: uuid("id").primaryKey().defaultRandom(),
  creatorId: uuid("creator_id")
    .references(() => profiles.id)
    .notNull(),
  code: text("code").unique().notNull(),
  discountType: text("discount_type").notNull(), // 'percentage' or 'fixed'
  discountValue: integer("discount_value").notNull(), // percentage (0-100) or cents
  maxUses: integer("max_uses"),
  currentUses: integer("current_uses").default(0).notNull(),
  minCartValue: integer("min_cart_value").default(0).notNull(),
  expiresAt: timestamp("expires_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const affiliateLinks = pgTable("affiliate_links", {
  id: uuid("id").primaryKey().defaultRandom(),
  affiliateId: uuid("affiliate_id")
    .references(() => profiles.id)
    .notNull(),
  productId: uuid("product_id").references(() => products.id), // Can be null if it's a store-wide link
  storeId: uuid("store_id").references(() => stores.id),
  slug: text("slug").unique().notNull(),
  commissionRate: integer("commission_rate").notNull(), // e.g., 15 for 15%
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const referrals = pgTable("referrals", {
  id: uuid("id").primaryKey().defaultRandom(),
  referrerId: uuid("referrer_id")
    .references(() => profiles.id)
    .notNull(),
  referredUserId: uuid("referred_user_id")
    .references(() => profiles.id)
    .notNull(),
  status: text("status").default("pending").notNull(), // 'pending', 'converted', 'paid'
  rewardAmount: integer("reward_amount").notNull(), // platform credit in cents
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
