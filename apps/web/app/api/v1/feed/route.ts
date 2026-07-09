import { NextResponse } from "next/server";
import { db, products } from "@fyndo/database";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const feed = await db
      .select()
      .from(products)
      .orderBy(desc(products.createdAt))
      .limit(20);

    return NextResponse.json({ feed });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
