import { NextResponse } from "next/server";
import { register } from "@/lib/controllers/auth";

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
