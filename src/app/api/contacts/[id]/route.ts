import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Helper to extract the [id] param from the URL
function getIdFromRequest(request: NextRequest): string | null {
  const url = new URL(request.url);
  const segments = url.pathname.split("/");
  // Assumes route: /api/contacts/[id]
  const id = segments[segments.length - 1] || null;
  return id;
}

// GET /api/contacts/[id] - Get a single contact by id
export async function GET(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing contact id" }, { status: 400 });
  }
  try {
    const contact = await prisma.contact.findUnique({
      where: { id },
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
export async function PUT(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing contact id" }, { status: 400 });
  }
  try {
    const data = await request.json();
    const contact = await prisma.contact.update({
      where: { id },
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
export async function DELETE(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id) {
    return NextResponse.json({ error: "Missing contact id" }, { status: 400 });
  }
  try {
    await prisma.contact.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
