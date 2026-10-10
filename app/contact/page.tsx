import { ContactForm } from "@/components/ContactForm";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  return <>
    <section className="page-hero contact-page-hero"><div className="container"><span className="eyebrow">CONTACT</span><h1>Talk to a robotics specialist.</h1><p>For sales, supplier partnerships, demonstrations and integration projects.</p></div></section>
    <section className="section contact-page-section"><div className="container contact-grid">
      <div className="contact-details-card"><h2>Contact details</h2><div className="contact-item"><Phone/><div><b>Phone</b><a className="contact-number" href="tel:+966555261634">{site.phone}</a></div></div><div className="contact-item"><MessageCircle/><div><b>WhatsApp</b><a className="contact-number" href="https://wa.me/966555261634" target="_blank" rel="noopener noreferrer">{site.whatsapp}</a></div></div><div className="contact-item"><Mail/><div><b>Email</b><a href={`mailto:${site.email}`}>{site.email}</a></div></div></div>
      <ContactForm/>
    </div></section>
  </>;
}
