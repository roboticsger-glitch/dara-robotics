const RESEND_ENDPOINT = "https://api.resend.com/emails";

type EnquiryField = {
  label: string;
  value?: string | null;
};

type EnquiryEmail = {
  subject: string;
  customerEmail: string;
  fields: EnquiryField[];
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendEnquiryEmail({ subject, customerEmail, fields }: EnquiryEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const destination = process.env.CONTACT_EMAIL || "roboticsger@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL || "Dara Robotics Website <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("Email delivery is not configured. Add RESEND_API_KEY to the server environment.");
  }

  const rows = fields
    .filter((field) => field.value?.trim())
    .map(({ label, value }) => `<tr><td style="padding:9px 12px;border-bottom:1px solid #d8edf5;font-weight:700;color:#0b2a4a;vertical-align:top">${escapeHtml(label)}</td><td style="padding:9px 12px;border-bottom:1px solid #d8edf5;color:#263b48;white-space:pre-wrap">${escapeHtml(value || "")}</td></tr>`)
    .join("");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: sender,
      to: [destination],
      reply_to: customerEmail,
      subject,
      html: `<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#14222c"><div style="padding:22px 26px;background:#0b2a4a;color:#fff;border-radius:16px 16px 0 0"><h1 style="margin:0;font-size:22px">Dara Robotics</h1><p style="margin:6px 0 0;color:#b7d7e6">New website enquiry</p></div><table style="width:100%;border-collapse:collapse;border:1px solid #d8edf5">${rows}</table><p style="padding:14px 4px;color:#63727c;font-size:13px">Reply to this email to contact the customer directly.</p></div>`,
    }),
  });

  const result = await response.json();
  if (!response.ok) {
    const message = typeof result?.message === "string" ? result.message : "Email delivery failed.";
    throw new Error(message);
  }

  return result;
}
