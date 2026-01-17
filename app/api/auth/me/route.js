import { NextResponse } from "next/server";
import { me } from "@/lib/controllers/auth";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { error: "Missing Authorization header" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const user = await me(token);

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
