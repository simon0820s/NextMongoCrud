import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET() {
  connectDB();

  const tasks = await Task.find();

  return NextResponse.json(tasks);
}

export async function POST(request) {
  const data = await request.json();

  const newTask = new Task(data);

  const savedTask = await newTask.save();

  console.log(savedTask);

  return NextResponse.json(savedTask)
}
