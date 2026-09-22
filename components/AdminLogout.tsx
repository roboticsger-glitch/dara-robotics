"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
export function AdminLogout(){const router=useRouter();return <button className="button ghost dark" onClick={async()=>{const db=createClient();if(db)await db.auth.signOut();router.replace('/admin/login');router.refresh();}}><LogOut size={16}/> Sign out</button>}
