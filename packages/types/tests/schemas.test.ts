import { expect, test, describe } from "vitest";
import { insertProductSchema, paginationQuerySchema } from "../src/index";

describe("Types and Schemas", () => {
  test("insertProductSchema validates valid payloads", () => {
    const valid = insertProductSchema.safeParse({
      storeId: "123e4567-e89b-12d3-a456-426614174000",
      title: "Vintage Jacket",
      price: 5000,
      saleType: "fixed",
    });
    expect(valid.success).toBe(true);
  });

  test("insertProductSchema rejects negative prices", () => {
    const invalid = insertProductSchema.safeParse({
      storeId: "123e4567-e89b-12d3-a456-426614174000",
      title: "Vintage Jacket",
      price: -10,
      saleType: "fixed",
    });
    expect(invalid.success).toBe(false);
  });

  test("paginationQuerySchema applies defaults", () => {
    const result = paginationQuerySchema.parse({});
    expect(result.page).toBe(1);
    expect(result.limit).toBe(20);
  });
});
