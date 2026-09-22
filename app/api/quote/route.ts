import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function serverDb(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.SUPABASE_SERVICE_ROLE_KEY;if(!url||!key)return null;return createClient(url,key,{auth:{persistSession:false}})}
export async function POST(req:Request){
 try{const body=await req.json();const required=["name","email","phone","message"];for(const key of required){if(!body[key])return NextResponse.json({error:`Missing ${key}`},{status:400})}
 const db=serverDb();if(!db)return NextResponse.json({message:"Demo mode: the form works, but connect Supabase to store enquiries."});
 const {error}=await db.from("inquiries").insert({name:body.name,company:body.company||null,email:body.email,phone:body.phone,interest:body.interest||null,commercial_model:body.commercial_model||null,message:body.message,status:"new",source:"website"});if(error)throw error;return NextResponse.json({message:"Thank you — your robotics assessment request has been received."});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Could not submit request"},{status:500})}
}
