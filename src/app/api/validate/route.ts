import { NextRequest, NextResponse } from "next/server";
import api from "@/app/server/api";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  await api.post("/validate", {
    token,
  });

  return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/welcome`);
}
