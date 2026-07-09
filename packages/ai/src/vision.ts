import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

const visualTaggingSchema = z.object({
  condition: z.enum(["new", "like_new", "vintage", "used", "luxury"]),
  primaryColors: z.array(z.string()),
  structuralAttributes: z.array(z.string()),
  brand: z.string().nullable().optional(),
});

export class VisionService {
  /**
   * Analyzes an image URL to extract visual tags, condition, and colors.
   */
  static async analyzeProductImage(imageUrl: string) {
    const { object } = await generateObject({
      model: openai("gpt-4o"),
      schema: visualTaggingSchema,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this product image and extract its condition, primary colors, structural attributes, and brand if visible.",
            },
            { type: "image", image: new URL(imageUrl) },
          ],
        },
      ],
    });
    return object;
  }

  /**
   * Generates a Cloudinary transformation URL for automated background removal and editorial framing.
   */
  static enhanceCloudinaryImage(baseCloudinaryUrl: string): string {
    // Cloudinary transformation: e_background_removal, c_pad (editorial framing), q_auto, f_auto
    // Assuming base URL is like: https://res.cloudinary.com/demo/image/upload/v1612345/sample.jpg
    const parts = baseCloudinaryUrl.split("/upload/");
    if (parts.length !== 2) return baseCloudinaryUrl;

    const transforms =
      "e_background_removal/c_pad,w_1200,h_1200,b_auto/q_auto,f_auto";
    return `${parts[0]}/upload/${transforms}/${parts[1]}`;
  }
}
