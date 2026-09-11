import Link from "next/link";
import { Bot, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark"><Bot size={22}/></span><span>NEXA <b>ROBOTICS</b><small>SAUDI ARABIA</small></span></div>
          <p>{site.tagline}</p>
          <p className="muted">Robots shown on this demo website are representative catalogue concepts. Replace them with your approved supplier models before launch.</p>
        </div>
        <div><h4>Solutions</h4><Link href="/robots">Robot Catalogue</Link><Link href="/solutions">Industries</Link><Link href="/services">Integration & Support</Link><Link href="/request-quote">Request a Quote</Link></div>
        <div><h4>Company</h4><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/admin">Admin</Link><span className="footer-contact"><MapPin size={16}/>{site.city}</span><span className="footer-contact"><Phone size={16}/>{site.phone}</span><span className="footer-contact"><Mail size={16}/>{site.email}</span></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {site.legalName}</span><span>Built for B2B robotics sales, rental & RaaS.</span></div>
    </footer>
  );
}
