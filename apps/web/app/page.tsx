import { MockAlgoliaAdapter } from "../lib/search-adapter";
import { BentoGrid, BentoGridItem } from "@fyndo/ui";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function DiscoveryFeed() {
  const adapter = new MockAlgoliaAdapter();
  // Fetch initial hydration
  const products = await adapter.search("luxury");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Discover.
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          The premier destination for highly-curated luxury products.
        </p>
      </div>

      <BentoGrid>
        {products.map((product, i) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <BentoGridItem
              title={product.title}
              description={`$${(product.price / 100).toFixed(2)}`}
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex items-center justify-center">
                  <ImageIcon className="text-muted-foreground/30 w-12 h-12" />
                </div>
              }
              className="h-full"
            />
          </Link>
        ))}
      </BentoGrid>

      {/* InfiniteFeed Client Component would mount here for subsequent fetching */}
    </div>
  );
}
