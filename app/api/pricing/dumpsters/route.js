import { NextResponse } from "next/server";
import { listDumpsters } from "@/lib/controllers/pricing";

export async function GET() {
  try {
    const data = await listDumpsters();
    return NextResponse.json({ dumpsters: data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
