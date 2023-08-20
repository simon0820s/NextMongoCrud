import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "getTasks"
  })
}

export function POST() {
  return NextResponse.json({
    message: "creating task"
  })
}