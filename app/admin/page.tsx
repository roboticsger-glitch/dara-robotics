import { redirect } from "next/navigation";
import { Inbox, Package, Settings } from "lucide-react";
import { getAdminUser } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { AdminLogout } from "@/components/AdminLogout";
import { AdminProductManager } from "@/components/AdminProductManager";
export const dynamic="force-dynamic"; export const metadata={title:"Admin Dashboard"};
export default async function Admin(){
 const user=await getAdminUser(); if(!user)redirect('/admin/login'); const db=createAdminClient(); if(!db)redirect('/admin/login');
 const [p,i,m]=await Promise.all([db.from('products').select('id,name,category,status,featured').order('created_at',{ascending:false}),db.from('inquiries').select('*').order('created_at',{ascending:false}).limit(20),db.from('contact_messages').select('*').order('created_at',{ascending:false}).limit(20)]);
 const products=p.data||[], inquiries=i.data||[], messages=m.data||[];
 return <section className="section admin"><div className="container"><div className="admin-top"><div><span className="eyebrow">ADMIN</span><h1>Robotics sales dashboard</h1><p className="muted">Signed in as {user.email}</p></div><AdminLogout/></div><div className="admin-stats"><div><Package/><b>{products.length}</b><span>Products</span></div><div><Inbox/><b>{inquiries.length}</b><span>Recent quote requests</span></div><div><Inbox/><b>{messages.length}</b><span>Recent messages</span></div><div><Settings/><b>LIVE</b><span>Backend</span></div></div><AdminProductManager products={products}/><div className="admin-columns"><div className="admin-panel"><h2>Latest quote requests</h2>{inquiries.length?inquiries.map((x:any)=><article className="lead-row" key={x.id}><b>{x.name} {x.company?`— ${x.company}`:''}</b><span>{x.interest||'General'} · {x.commercial_model||'Model not selected'}</span><a href={`mailto:${x.email}`}>{x.email}</a><small>{x.message}</small></article>):<p>No quote requests yet.</p>}</div><div className="admin-panel"><h2>Latest contact messages</h2>{messages.length?messages.map((x:any)=><article className="lead-row" key={x.id}><b>{x.name}</b><span>{x.subject||'Contact form'}</span><a href={`mailto:${x.email}`}>{x.email}</a><small>{x.message}</small></article>):<p>No messages yet.</p>}</div></div></div></section>
}
