"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export function QuoteForm() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("sending"); setMessage("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/quote", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not send request");
      setState("sent"); setMessage(data.message || "Your request has been received."); e.currentTarget.reset();
    } catch (err) { setState("error"); setMessage(err instanceof Error ? err.message : "Something went wrong."); }
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-grid two"><label>Full name<input name="name" required placeholder="Your name" /></label><label>Company<input name="company" placeholder="Company name" /></label></div>
      <div className="form-grid two"><label>Email<input name="email" required type="email" placeholder="name@company.com" /></label><label>Phone / WhatsApp<input name="phone" required placeholder="Include country code" /></label></div>
      <label>Tell us about the site or task<textarea name="message" required rows={5} placeholder="Example: 12,000 m² warehouse. We want to automate floor cleaning and need local maintenance support." /></label>
      <button className="button" disabled={state === "sending"}>{state === "sending" ? "Sending…" : <><Send size={17}/> Request Assessment</>}</button>
      {message && <p className={state === "error" ? "form-message error" : "form-message success"}>{message}</p>}
    </form>
  );
}
