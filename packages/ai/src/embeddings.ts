import { embed, embedMany } from "ai";
import { openai } from "@ai-sdk/openai";
import { sql } from "drizzle-orm";

export class EmbeddingService {
  /**
   * Generates a 1536-dimensional embedding using text-embedding-3-small
   */
  static async generateEmbedding(text: string): Promise<number[]> {
    const { embedding } = await embed({
      model: openai.embedding("text-embedding-3-small"),
      value: text,
    });
    return embedding;
  }

  /**
   * Generates multiple embeddings in batch
   */
  static async generateEmbeddingsBatch(texts: string[]): Promise<number[][]> {
    const { embeddings } = await embedMany({
      model: openai.embedding("text-embedding-3-small"),
      values: texts,
    });
    return embeddings;
  }

  /**
   * Creates a Drizzle SQL condition for pgvector cosine distance search.
   * Usage: db.select().from(products).orderBy(EmbeddingService.cosineDistance(products.embedding, queryEmbedding)).limit(10)
   */
  static cosineDistance(column: unknown, queryEmbedding: number[]) {
    // pgvector syntax for cosine distance is <=>
    const formattedEmbedding = `[${queryEmbedding.join(",")}]`;
    return sql`${column} <=> ${formattedEmbedding}::vector`;
  }
}
