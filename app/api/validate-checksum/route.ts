import { NextRequest, NextResponse } from "next/server";
import { verifyChecksum } from "../../lib/checksum";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { checksum, ...rest } = body;

  const isValid = verifyChecksum(
    rest,
    checksum,
    process.env.MYORDERBOX_SECRET_SALT || ""
  );

  if (!isValid) {
    return NextResponse.json({ valid: false }, { status: 400 });
  }

  return NextResponse.json({ valid: true });
}
