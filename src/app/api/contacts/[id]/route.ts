import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET /api/contacts/[id] - Get a single contact by id
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id: params.id },
    });
    if (!contact)
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    return NextResponse.json(contact);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch contact" },
      { status: 500 }
    );
  }
}

// PUT /api/contacts/[id] - Update a contact by id
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const contact = await prisma.contact.update({
      where: { id: params.id },
      data: {
        name: data.name,
        email: data.email,
        companyId: data.companyId,
      },
    });
    return NextResponse.json(contact);
  } catch {
    return NextResponse.json(
      { error: "Failed to update contact" },
      { status: 500 }
    );
  }
}

// DELETE /api/contacts/[id] - Delete a contact by id
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.contact.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
