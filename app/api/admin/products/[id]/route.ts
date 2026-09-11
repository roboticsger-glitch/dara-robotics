import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
export async function DELETE(_req:Request,{params}:{params:Promise<{id:string}>}){if(!await getAdminUser())return NextResponse.json({error:'Unauthorized'},{status:401});const db=createAdminClient();if(!db)return NextResponse.json({error:'Backend not configured'},{status:503});const {id}=await params;const {error}=await db.from('products').delete().eq('id',id);if(error)return NextResponse.json({error:error.message},{status:500});return NextResponse.json({ok:true})}
