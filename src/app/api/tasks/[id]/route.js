import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET(request, { params }) {
  try {
    connectDB();
    const taskFound = await Task.findById(params.id);

    if (!taskFound) {
      return NextResponse.json(
        {
          message: "task nof found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      message: taskFound,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const deletedTask = await Task.findByIdAndDelete(params.id);
    if (!taskDeleted)
      return NextResponse.json(
        {
          message: "Task not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json({
      message: deletedTask,
    });
  } catch (error) {
    return NextResponse.json(error.message)
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();

    const updatedTask = await Task.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return NextResponse.json({
      message: updatedTask,
    });
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
