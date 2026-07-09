import { MockAlgoliaAdapter } from "../../../lib/search-adapter";
import { notFound } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { AIOrchestrator, generateSEOMetadata } from "@fyndo/ai";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const adapter = new MockAlgoliaAdapter();
  const products = await adapter.search("luxury");
  const product = products.find((p) => p.id === id) || products[0];

  if (!product) {
    return { title: "Product Not Found" };
  }

  const seo = await generateSEOMetadata(
    product.title,
    product.description || "",
  );

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(product.title)}&price=${product.price}&id=${id}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const adapter = new MockAlgoliaAdapter();
  const products = await adapter.search("luxury");
  const product = products.find((p) => p.id === id) || products[0];

  if (!product) {
    notFound();
  }

  // Fetch AI generated SEO & Editorial data
  const aiEditorial = await AIOrchestrator.generateEditorialDescription(
    product.title,
  );

  return (
    <div className="relative min-h-screen bg-background pb-32">
      {/* Edge-to-edge photography placeholder */}
      <div className="relative w-full h-[60vh] md:h-[80vh] bg-neutral-200 dark:bg-neutral-900 flex items-center justify-center">
        <span className="text-muted-foreground">Product Image Gallery</span>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-4 flex-1">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              {aiEditorial.editorialTitle || product.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {aiEditorial.editorialBody || product.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4">
              {aiEditorial.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="text-3xl font-bold">
              ${(product.price / 100).toFixed(2)}
            </div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {product.inventoryCount} in stock
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 border-t border-border bg-background/80 backdrop-blur-xl z-30 supports-[backdrop-filter]:bg-background/40">
        <div className="container mx-auto max-w-4xl flex justify-between items-center">
          <div className="font-semibold">{product.title}</div>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary/20">
            <ShoppingBag className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
