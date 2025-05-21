import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/deals/[id] - Get a single deal by id
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deal = await prisma.deal.findUnique({ where: { id: params.id } });
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
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const deal = await prisma.deal.update({
      where: { id: params.id },
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
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.deal.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete deal" },
      { status: 500 }
    );
  }
}
