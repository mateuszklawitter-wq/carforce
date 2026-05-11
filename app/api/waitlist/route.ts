import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body?.email === "string" ? body.email.trim() : "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
  }

  // TODO: persist to database (e.g. Supabase, PlanetScale, or Shopify customer)
  console.log(`[waitlist] New signup: ${email} at ${new Date().toISOString()}`);

  return NextResponse.json({ success: true });
}
