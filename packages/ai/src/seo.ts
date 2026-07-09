import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
}

export async function generateSEOMetadata(
  productName: string,
  productDescription: string,
): Promise<SEOMetadata> {
  const prompt = `Generate SEO metadata for a product.
Product Name: ${productName}
Description: ${productDescription}

Respond strictly in JSON format with three string fields: 'title' (max 60 chars), 'description' (max 155 chars), and 'keywords' (comma separated).`;

  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt,
  });

  try {
    const jsonStr = text.replace(/```json/g, "").replace(/```/g, "");
    return JSON.parse(jsonStr) as SEOMetadata;
  } catch (_e) {
    return {
      title: productName,
      description: productDescription.substring(0, 150),
      keywords: productName.split(" ").join(", "),
    };
  }
}
