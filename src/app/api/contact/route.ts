import SendEmailForm from "@/components/func/Contact/SendEmailForm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const response = await SendEmailForm(await request.json());

  if (response) {
    return NextResponse.json(
      { message: "Successfull Send Message" },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { message: "Failed Send Message" },
      { status: 500 }
    );
  }
}
