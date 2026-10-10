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
    for (const key of ["name", "email", "phone", "message"]) {
      if (!body[key]) return NextResponse.json({ error: `Missing ${key}` }, { status: 400 });
    }

    await sendEnquiryEmail({
      subject: `Robotics assessment request from ${body.name}${body.company ? ` — ${body.company}` : ""}`,
      customerEmail: body.email,
      fields: [
        { label: "Name", value: body.name },
        { label: "Company", value: body.company },
        { label: "Email", value: body.email },
        { label: "Phone / WhatsApp", value: body.phone },
        { label: "Interested in", value: body.interest },
        { label: "Commercial model", value: body.commercial_model },
        { label: "Site or task", value: body.message },
      ],
    });

    const db = serverDb();
    if (db) {
      const { error } = await db.from("inquiries").insert({ name: body.name, company: body.company || null, email: body.email, phone: body.phone, interest: body.interest || null, commercial_model: body.commercial_model || null, message: body.message, status: "new", source: "website" });
      if (error) console.error("Could not store quote enquiry in Supabase", error);
    }

    return NextResponse.json({ message: "Thank you — your robotics assessment request has been received." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Could not submit request." }, { status: 500 });
  }
}
