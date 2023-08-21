import { NextResponse } from "next/server";

export function GET(request, { params }) {
  return NextResponse.json({
    message: params,
  })
}

export function DELETE(request, { params }) {
  return NextResponse.json({
    message: `deleting task ${params.id} ...`,
  })
}

export function PUT(request, { params }) {
  return NextResponse.json({
    message: `updating task ${params.id} ...`,
  })
}
