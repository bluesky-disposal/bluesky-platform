import { NextResponse } from "next/server";
import { createQuoteController } from "@/lib/controllers/quote";

export async function POST(req) {
  try {
    const body = await req.json();
    const quote = await createQuoteController(body);

    return NextResponse.json({ success: true, data: quote }, { status: 200 });
  } catch (error) {
    console.error("Quote API error:", error.message);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 },
    );
  }
}
