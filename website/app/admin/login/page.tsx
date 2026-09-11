import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/AdminLoginForm";
import { getAdminUser } from "@/lib/auth";
export const metadata={title:"Admin Login"};
export default async function Login(){if(await getAdminUser())redirect('/admin');return <section className="section admin-login-page"><div className="container narrow"><AdminLoginForm/></div></section>}
