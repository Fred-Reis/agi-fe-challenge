import { NextRequest, NextResponse } from "next/server";
import api from "@/app/server/api";
import { env } from "@/env";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  await api.post("/validate", {
    token,
  });

  return NextResponse.redirect("http://localhost:3000/welcome");
}
