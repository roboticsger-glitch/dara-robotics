import { NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
export async function POST(req:Request){
 if(!await getAdminUser())return NextResponse.json({error:'Unauthorized'},{status:401});
 const db=createAdminClient();if(!db)return NextResponse.json({error:'Backend not configured'},{status:503});
 try{const b=await req.json();for(const k of ['name','slug','category','image_url','short_description','description'])if(!b[k])return NextResponse.json({error:`Missing ${k}`},{status:400});
 const split=(v:string)=>String(v||'').split(',').map(x=>x.trim()).filter(Boolean);
 const {error}=await db.from('products').insert({name:b.name,slug:b.slug,category:b.category,image_url:b.image_url,short_description:b.short_description,description:b.description,industries:split(b.industries),service_modes:split(b.service_modes),featured:b.featured==='on',status:'active'});if(error)throw error;return NextResponse.json({ok:true});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:'Failed'},{status:500})}
}
