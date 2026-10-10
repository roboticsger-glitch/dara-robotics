import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendEnquiryEmail } from "@/lib/sendEnquiryEmail";

function serverDb() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Name, email and message are required." }, { status: 400 });
    }

    await sendEnquiryEmail({
      subject: `Contact enquiry from ${body.name}`,
      customerEmail: body.email,
      fields: [
        { label: "Name", value: body.name },
        { label: "Email", value: body.email },
        { label: "Subject", value: body.subject },
        { label: "Message", value: body.message },
      ],
    });

    const db = serverDb();
    if (db) {
      const { error } = await db.from("contact_messages").insert({ name: body.name, email: body.email, subject: body.subject || null, message: body.message, status: "new" });
      if (error) console.error("Could not store contact enquiry in Supabase", error);
    }

    return NextResponse.json({ message: "Thanks — your message has been received." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Could not send message." }, { status: 500 });
  }
}
