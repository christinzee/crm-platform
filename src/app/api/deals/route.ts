import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/deals - List all deals
export async function GET() {
  try {
    const deals = await prisma.deal.findMany();
    return NextResponse.json(deals);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch deals" },
      { status: 500 }
    );
  }
}

// POST /api/deals - Create a new deal
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const deal = await prisma.deal.create({
      data: {
        name: data.name,
        stage: data.stage,
        value: data.value,
        userId: data.userId,
        companyId: data.companyId,
        contactId: data.contactId,
      },
    });
    return NextResponse.json(deal, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create deal" },
      { status: 500 }
    );
  }
}
