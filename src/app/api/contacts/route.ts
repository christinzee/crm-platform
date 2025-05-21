import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// GET /api/contacts - List all contacts
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany();
    return NextResponse.json(contacts);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

// POST /api/contacts - Create a new contact
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        companyId: data.companyId,
      },
    });
    return NextResponse.json(contact, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create contact" },
      { status: 500 }
    );
  }
}
