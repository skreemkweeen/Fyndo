import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import {
  profiles,
  stores,
  follows,
  collections,
  collectionItems,
} from "@fyndo/database";

// --- Profiles ---
export const insertProfileSchema = createInsertSchema(profiles);
export const selectProfileSchema = createSelectSchema(profiles);
export type Profile = z.infer<typeof selectProfileSchema>;

// --- Stores ---
export const insertStoreSchema = createInsertSchema(stores, {
  slug: z
    .string()
    .min(3)
    .max(60)
    .regex(
      /^[a-z0-9-]+$/,
      "Slug must contain only lowercase letters, numbers, and hyphens",
    ),
});
export const selectStoreSchema = createSelectSchema(stores);
export type Store = z.infer<typeof selectStoreSchema>;

// --- Products ---
export const insertProductSchema = z.object({
  storeId: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().nullable().optional(),
  price: z.number().int().positive("Price must be a positive integer in cents"),
  saleType: z
    .enum(["fixed", "auction", "livestream_exclusive"])
    .default("fixed"),
  inventoryCount: z.number().int().nonnegative().default(0),
  images: z.array(z.string()).default([]),
  embedding: z.array(z.number()).optional(),
});

export const selectProductSchema = insertProductSchema.extend({
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
  embedding: z.array(z.number()).nullable().optional(),
});
export type Product = z.infer<typeof selectProductSchema>;

// --- Social Graph ---
export const insertFollowSchema = createInsertSchema(follows);
export const selectFollowSchema = createSelectSchema(follows);
export type Follow = z.infer<typeof selectFollowSchema>;

// --- Collections ---
export const insertCollectionSchema = createInsertSchema(collections);
export const selectCollectionSchema = createSelectSchema(collections);
export type Collection = z.infer<typeof selectCollectionSchema>;

export const insertCollectionItemSchema = createInsertSchema(collectionItems);
export const selectCollectionItemSchema = createSelectSchema(collectionItems);
export type CollectionItem = z.infer<typeof selectCollectionItemSchema>;

// --- API Payload Schemas ---

// Pagination Envelope Schema Factory
export function createPaginatedSchema<T extends z.ZodTypeAny>(itemSchema: T) {
  return z.object({
    data: z.array(itemSchema),
    pagination: z.object({
      total: z.number(),
      page: z.number(),
      limit: z.number(),
      totalPages: z.number(),
    }),
  });
}

// API Pagination Query Schema
export const paginationQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

// Semantic Search Query Schema
export const searchProductsQuerySchema = z.object({
  query: z.string().min(1).max(200),
  limit: z.coerce.number().min(1).max(50).default(10),
});

export const PaginatedProductsResponse =
  createPaginatedSchema(selectProductSchema);
