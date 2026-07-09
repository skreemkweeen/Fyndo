import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

// SEO Output Schema
export const seoOutputSchema = z.object({
  title: z.string().max(60),
  description: z.string().max(160),
  keywords: z.array(z.string()).max(10),
  openGraph: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// Editorial Description Schema
export const editorialDescriptionSchema = z.object({
  editorialTitle: z.string(),
  editorialBody: z.string(),
  tags: z.array(z.string()),
});

export class AIOrchestrator {
  /**
   * Generates a luxury, editorial product description matching the Apple/Linear aesthetic.
   */
  static async generateEditorialDescription(sellerInput: string) {
    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: editorialDescriptionSchema,
      prompt: `You are an expert luxury copywriter for Fyndo. Transform the following raw seller input into an ultra-premium, editorial product description. Tone: Apple, Linear, Arc Browser, Airbnb. Raw Input: "${sellerInput}"`,
    });
    return object;
  }

  /**
   * Generates automated SEO meta-tags for a product or storefront.
   */
  static async generateSEOMetadata(contentContext: string) {
    const { object } = await generateObject({
      model: openai("gpt-4o-mini"),
      schema: seoOutputSchema,
      prompt: `Generate optimized SEO metadata and Open Graph tags for the following content. Keep titles under 60 chars and descriptions under 160 chars. Context: "${contentContext}"`,
    });
    return object;
  }
}
