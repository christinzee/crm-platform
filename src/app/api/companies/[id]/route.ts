import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function getIdFromRequest(request: NextRequest): string | null {
  const id = request.nextUrl.pathname.split("/").pop();
  return id || null;
}

// GET /api/companies/[id] - Get a single company by id
export async function GET(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id)
    return NextResponse.json({ error: "Missing company id" }, { status: 400 });

  try {
    const company = await prisma.company.findUnique({ where: { id } });
    if (!company)
      return NextResponse.json({ error: "Company not found" }, { status: 404 });
    return NextResponse.json(company);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch company" },
      { status: 500 }
    );
  }
}

// PUT /api/companies/[id] - Update a company by id
export async function PUT(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id)
    return NextResponse.json({ error: "Missing company id" }, { status: 400 });

  try {
    const data = await request.json();
    const company = await prisma.company.update({
      where: { id },
      data: { name: data.name },
    });
    return NextResponse.json(company);
  } catch {
    return NextResponse.json(
      { error: "Failed to update company" },
      { status: 500 }
    );
  }
}

// DELETE /api/companies/[id] - Delete a company by id
export async function DELETE(request: NextRequest) {
  const id = getIdFromRequest(request);
  if (!id)
    return NextResponse.json({ error: "Missing company id" }, { status: 400 });

  try {
    await prisma.company.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete company" },
      { status: 500 }
    );
  }
}
