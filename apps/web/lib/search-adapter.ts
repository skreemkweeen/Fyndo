import { Product } from "@fyndo/types";

export interface SearchAdapter {
  search(query: string): Promise<Product[]>;
}

export class MockAlgoliaAdapter implements SearchAdapter {
  async search(query: string): Promise<Product[]> {
    console.log("Searching for:", query);
    return [
      {
        id: "mock-1",
        storeId: "store-1",
        title: "Apple Vision Pro",
        description: "Spatial computing is here.",
        price: 349900,
        saleType: "fixed",
        inventoryCount: 5,
        images: ["https://example.com/vision-pro.jpg"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "mock-2",
        storeId: "store-1",
        title: "Linear Mouse",
        description: "The minimalist workhorse.",
        price: 12900,
        saleType: "fixed",
        inventoryCount: 15,
        images: ["https://example.com/linear-mouse.jpg"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "mock-3",
        storeId: "store-2",
        title: "Vintage Leather Jacket",
        description: "An exquisite piece of history.",
        price: 25000,
        saleType: "fixed",
        inventoryCount: 1,
        images: ["https://example.com/vintage-jacket.jpg"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }
}
