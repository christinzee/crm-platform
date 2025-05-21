import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Helper to extract the [id] param from the URL
function getIdFromRequest(request: NextRequest): string | null {
  const url = new URL(request.url);
  const segments = url.pathname.split("/");
  // Assumes route: /api/tasks/[id]
  const id = segments[segments.length - 1] || null;
  return id;
}

// GET /api/tasks/[id] - Get a single task by id
export async function GET(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing task id" }, { status: 400 });
  }
  try {
    const task = await prisma.task.findUnique({ where: { id } });
    if (!task)
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    return NextResponse.json(task);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch task" },
      { status: 500 }
    );
  }
}

// PUT /api/tasks/[id] - Update a task by id
export async function PUT(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing task id" }, { status: 400 });
  }
  try {
    const data = await request.json();
    const task = await prisma.task.update({
      where: { id },
      data: {
        title: data.title,
        dueDate: data.dueDate,
        dealId: data.dealId,
      },
    });
    return NextResponse.json(task);
  } catch {
    return NextResponse.json(
      { error: "Failed to update task" },
      { status: 500 }
    );
  }
}

// DELETE /api/tasks/[id] - Delete a task by id
export async function DELETE(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing task id" }, { status: 400 });
  }
  try {
    await prisma.task.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete task" },
      { status: 500 }
    );
  }
}
