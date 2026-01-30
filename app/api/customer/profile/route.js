import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import {
  getProfileController,
  updateProfileController,
} from "@/lib/controllers/customer";

export async function GET(req) {
  try {
    const user = await getUserFromRequest(req);
    const profile = await getProfileController(user);
    return NextResponse.json({ success: true, data: profile });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 401 },
    );
  }
}

export async function PUT(req) {
  try {
    const user = await getUserFromRequest(req);
    const body = await req.json();
    const updated = await updateProfileController(user, body);
    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 400 },
    );
  }
}
