import { NextResponse } from "next/server";
import { login } from "@/lib/controllers/auth";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const data = await login({ email, password });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}
