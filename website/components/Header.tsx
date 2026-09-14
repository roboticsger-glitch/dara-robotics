"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Robots", "/robots"], ["Solutions", "/solutions"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}><Image className="brand-logo" src="/dara-robotics-logo.png" alt="Dara Robotics" width={118} height={58} priority /></Link>
        <nav className={"nav-links " + (open ? "open" : "")}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="button button-small" href="/request-quote" onClick={() => setOpen(false)}><MessageCircle size={16}/> Request a Quote</Link>
          <LanguageToggle />
        </nav>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  );
}