import { describe, it, expect, vi } from "vitest";
import { AIOrchestrator } from "../src/orchestration";
import { EmbeddingService } from "../src/embeddings";
import { VisionService } from "../src/vision";
import { sql } from "drizzle-orm";

// Mock the AI SDK functions
vi.mock("ai", () => ({
  generateObject: vi.fn().mockImplementation(async ({ prompt, messages }) => {
    const input = prompt || JSON.stringify(messages);
    if (input.includes("expert luxury copywriter")) {
      return {
        object: {
          editorialTitle: "Vintage Leather Jacket",
          editorialBody: "An exquisite piece of history.",
          tags: ["vintage", "leather", "jacket"],
        },
      };
    } else if (input.includes("SEO metadata")) {
      return {
        object: {
          title: "Vintage Leather Jacket | Fyndo",
          description: "Discover this vintage leather jacket on Fyndo.",
          keywords: ["vintage", "leather"],
          openGraph: {
            title: "Vintage Leather Jacket | Fyndo",
            description: "Discover this vintage leather jacket on Fyndo.",
          },
        },
      };
    } else if (input.includes("extract its condition")) {
      return {
        object: {
          condition: "vintage",
          primaryColors: ["brown"],
          structuralAttributes: ["leather", "zipper"],
          brand: "Unknown",
        },
      };
    }
    return { object: {} };
  }),
  embed: vi.fn().mockResolvedValue({ embedding: new Array(1536).fill(0.1) }),
  embedMany: vi
    .fn()
    .mockResolvedValue({ embeddings: [new Array(1536).fill(0.1)] }),
}));

vi.mock("@ai-sdk/openai", () => ({
  openai: Object.assign(vi.fn().mockReturnValue("mock-model"), {
    embedding: vi.fn().mockReturnValue("mock-embedding-model"),
  }),
}));

describe("AI Orchestrator", () => {
  it("should generate editorial description matching schema", async () => {
    const res = await AIOrchestrator.generateEditorialDescription("old jacket");
    expect(res.editorialTitle).toBe("Vintage Leather Jacket");
    expect(res.tags).toContain("vintage");
  });

  it("should generate SEO metadata matching schema", async () => {
    const res = await AIOrchestrator.generateSEOMetadata("some content");
    expect(res.openGraph.title).toBe("Vintage Leather Jacket | Fyndo");
    expect(res.keywords.length).toBeGreaterThan(0);
  });
});

describe("Embedding Service", () => {
  it("should return a 1536-dimensional array for text", async () => {
    const embedding = await EmbeddingService.generateEmbedding("hello world");
    expect(embedding.length).toBe(1536);
    expect(embedding[0]).toBe(0.1);
  });

  it("should return an array of 1536-dimensional arrays for batch text", async () => {
    const embeddings = await EmbeddingService.generateEmbeddingsBatch([
      "hello world",
    ]);
    expect(embeddings.length).toBe(1);
    expect(embeddings[0].length).toBe(1536);
  });

  it("should format cosine distance SQL correctly", () => {
    // This is hard to test exactly since sql`` returns an object, but we can check if it returns a SQL wrapper
    const dummyColumn = sql`embedding`;
    const query = [0.1, 0.2];
    const condition = EmbeddingService.cosineDistance(dummyColumn, query);
    expect(condition).toBeDefined();
    // It's a drizzle SQL object
    expect(typeof condition.getSQL).toBe("function");
  });
});

describe("Vision Service", () => {
  it("should extract visual tags from image url", async () => {
    const res = await VisionService.analyzeProductImage(
      "https://example.com/image.jpg",
    );
    expect(res.condition).toBe("vintage");
    expect(res.primaryColors).toContain("brown");
  });

  it("should generate Cloudinary transformation URL", () => {
    const original =
      "https://res.cloudinary.com/demo/image/upload/v1612345/sample.jpg";
    const transformed = VisionService.enhanceCloudinaryImage(original);
    expect(transformed).toContain(
      "e_background_removal/c_pad,w_1200,h_1200,b_auto/q_auto,f_auto",
    );
    expect(transformed).toContain("/upload/e_background_removal");
  });
});
