import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { addAddressController } from "@/lib/controllers/customer";

export async function POST(req) {
  try {
    const user = await getUserFromRequest(req);
    const body = await req.json();
    const address = await addAddressController(user, body);
    return NextResponse.json({ success: true, data: address });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 400 },
    );
  }
}
