import { NextResponse } from "next/server";
import { getStartingFromPricing } from "@/lib/controllers/pricing";

export async function GET() {
  try {
    const data = await getStartingFromPricing();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Starting-from pricing error:", error);

    return NextResponse.json(
      { error: "Failed to fetch starting price" },
      { status: 500 },
    );
  }
}
