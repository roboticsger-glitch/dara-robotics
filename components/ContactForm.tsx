"use client";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
export function ContactForm(){
 const [msg,setMsg]=useState("");
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setMsg("Sending…");const f=new FormData(e.currentTarget);const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(f.entries()))});const d=await r.json();setMsg(r.ok?(d.message||'Message received.'):(d.error||'Could not send message.'));if(r.ok)e.currentTarget.reset();}
 return <form className="form-card" onSubmit={submit}><div className="form-grid two"><label>Name<input name="name" required/></label><label>Email<input name="email" type="email" required/></label></div><label>Subject<input name="subject" required/></label><label>Message<textarea name="message" rows={6} required/></label><button className="button"><Send size={17}/> Send message</button>{msg&&<p className="form-message">{msg}</p>}</form>
}
