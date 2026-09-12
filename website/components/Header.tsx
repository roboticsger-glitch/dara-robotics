"use client";

import Link from "next/link";
import { Menu, X, Bot, MessageCircle } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Robots", "/robots"],
    ["Solutions", "/solutions"],
    ["Services", "/services"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Bot size={24} /></span>
          <span>NEXA <b>ROBOTICS</b></span>
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="button button-small" href="/request-quote" onClick={() => setOpen(false)}><MessageCircle size={16}/> Request a Quote</Link>
        </nav>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  );
}
