import { NextResponse } from "next/server";

export async function POST(request) {
  const { password } = await request.json();
  return NextResponse.json({ msg: "hello world" });
}
