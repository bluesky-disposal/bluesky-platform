import { NextResponse } from "next/server";
import { getZipPricingContext } from "@/lib/controllers/pricing";

export async function GET(request, context) {
  try {
    const params = await context.params;
    const zip = params?.zip;

    if (!zip || typeof zip !== "string" || zip.length !== 5) {
      return NextResponse.json(
        { error: "Invalid ZIP code format" },
        { status: 400 },
      );
    }

    const data = await getZipPricingContext(zip);

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("ZIP pricing route error:", error);

    return NextResponse.json(
      { error: "Pricing not found for this ZIP code" },
      { status: 404 },
    );
  }
}
