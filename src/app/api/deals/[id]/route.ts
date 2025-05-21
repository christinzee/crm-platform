import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Helper to extract the [id] param from the URL
function getIdFromRequest(request: NextRequest): string | null {
  const url = new URL(request.url);
  const segments = url.pathname.split("/");
  // Assumes route: /api/deals/[id]
  const id = segments[segments.length - 1] || null;
  return id;
}

// GET /api/deals/[id] - Get a single deal by id
export async function GET(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing deal id" }, { status: 400 });
  }
  try {
    const deal = await prisma.deal.findUnique({ where: { id } });
    if (!deal)
      return NextResponse.json({ error: "Deal not found" }, { status: 404 });
    return NextResponse.json(deal);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch deal" },
      { status: 500 }
    );
  }
}

// PUT /api/deals/[id] - Update a deal by id
export async function PUT(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing deal id" }, { status: 400 });
  }
  try {
    const data = await request.json();
    const deal = await prisma.deal.update({
      where: { id },
      data: {
        name: data.name,
        stage: data.stage,
        value: data.value,
        userId: data.userId,
        companyId: data.companyId,
        contactId: data.contactId,
      },
    });
    return NextResponse.json(deal);
  } catch {
    return NextResponse.json(
      { error: "Failed to update deal" },
      { status: 500 }
    );
  }
}

// DELETE /api/deals/[id] - Delete a deal by id
export async function DELETE(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing deal id" }, { status: 400 });
  }
  try {
    await prisma.deal.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete deal" },
      { status: 500 }
    );
  }
}
