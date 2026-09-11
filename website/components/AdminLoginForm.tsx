"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function AdminLoginForm(){
  const router=useRouter(); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setLoading(true); setError("");
    const db=createClient(); if(!db){setError("Supabase is not configured yet.");setLoading(false);return;}
    const f=new FormData(e.currentTarget); const email=String(f.get("email")||""); const password=String(f.get("password")||"");
    const {error}=await db.auth.signInWithPassword({email,password});
    if(error){setError(error.message);setLoading(false);return;}
    router.replace("/admin"); router.refresh();
  }
  return <form className="form-card admin-login" onSubmit={submit}><div className="login-icon"><LockKeyhole/></div><h2>Admin sign in</h2><p className="muted">Use the Supabase Auth account whose email matches <code>ADMIN_EMAIL</code>.</p><label>Email<input name="email" type="email" required autoComplete="email"/></label><label>Password<input name="password" type="password" required autoComplete="current-password"/></label><button className="button" disabled={loading}>{loading?"Signing in…":"Sign in"}</button>{error&&<p className="form-message error">{error}</p>}</form>
}
