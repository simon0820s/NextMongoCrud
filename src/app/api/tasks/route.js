import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
export function GET() {
  connectDB()
  return NextResponse.json({
    message: "getTasks"
  })
}

export function POST() {
  return NextResponse.json({
    message: "creating task"
  })
}