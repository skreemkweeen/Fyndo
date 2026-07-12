import { BentoGrid, BentoGridItem } from "@fyndo/ui";
import { MockAlgoliaAdapter } from "../../../lib/search-adapter";
import { UserPlus } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function CreatorProfile({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const adapter = new MockAlgoliaAdapter();
  const products = await adapter.search("luxury");

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <div className="w-32 h-32 rounded-full bg-neutral-200 dark:bg-neutral-800 border-4 border-background shadow-xl" />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">@{handle}</h1>
          <p className="text-muted-foreground mt-2 max-w-md mx-auto">
            Curator of fine vintage goods and modern minimalism.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform">
          <UserPlus className="w-4 h-4" />
          Follow
        </button>
      </div>

      {/* Moodboard / Storefront */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">
            Curated Collection
          </h2>
        </div>

        <BentoGrid>
          {products.map((product) => (
            <BentoGridItem
              key={product.id}
              title={product.title}
              description={`$${(product.price / 100).toFixed(2)}`}
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex items-center justify-center"></div>
              }
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
