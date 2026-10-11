"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ChevronDown, Bot, HeartPulse, Hotel, Brush, ConciergeBell } from "lucide-react";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";

export function Header() {
  const [open, setOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);
  const links = [["Robots", "/robots"], ["Solutions", "/solutions"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]];
  const robotCategories: Array<[ComponentType<SVGProps<SVGSVGElement>>, string]> = [
    [Bot, "Robotic Arms"],
    [HeartPulse, "Healthcare Assistant Robots"],
    [Hotel, "Hotel Service Robots"],
    [Brush, "Autonomous Cleaning Robots"],
    [ConciergeBell, "Reception & Guest Experience Robots"],
  ];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}><Image className="brand-logo" src="/dara-robotics-logo.png" alt="Dara Robotics" width={580} height={288} priority /></Link>
        <nav className={"nav-links " + (open ? "open" : "")}>
          <div className={"nav-dropdown " + (robotsOpen ? "open" : "")}>
            <button className="nav-dropdown-trigger" type="button" aria-haspopup="true" aria-expanded={robotsOpen} onClick={() => setRobotsOpen((isOpen) => !isOpen)}>
              Robots <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div className="nav-dropdown-menu">
              <Link className="nav-dropdown-all" href="/robots" onClick={() => { setOpen(false); setRobotsOpen(false); }}>View All Robots <span>→</span></Link>
              {robotCategories.map(([Icon, label]) => {
                const categoryRoutes: Record<string, string> = {
                  "Robotic Arms": "/robots/robotic-arms",
                  "Healthcare Assistant Robots": "/robots/healthcare-assistant-robots",
                  "Hotel Service Robots": "/robots/hotel-service-robots",
                  "Autonomous Cleaning Robots": "/robots/autonomous-cleaning-robots",
                  "Reception & Guest Experience Robots": "/robots/reception-guest-experience-robots",
                };
                const href = categoryRoutes[label] ?? "/robots";
                return <Link key={label} href={href} onClick={() => { setOpen(false); setRobotsOpen(false); }}><b>{label}</b><Icon className="nav-dropdown-icon" aria-hidden="true" /></Link>;
              })}
            </div>
          </div>
          {links.slice(1).map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="button button-small" href="/request-quote" onClick={() => setOpen(false)}><MessageCircle size={16}/> Request a Quote</Link>
          <LanguageToggle />
        </nav>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  );
}
