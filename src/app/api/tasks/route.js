import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

function GET() {
  return NextResponse.json({
    message: "getTasks"
  })
}