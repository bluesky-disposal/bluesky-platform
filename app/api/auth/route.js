import { NextResponse } from "next/server";
import { register, login, me } from "@/lib/controllers/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await register({ email, password });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

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
