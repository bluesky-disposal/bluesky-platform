import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { listAddressesController } from "@/lib/controllers/customer";

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    const addresses = await listAddressesController(user);
    return NextResponse.json({ success: true, data: addresses });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 401 },
    );
  }
}
