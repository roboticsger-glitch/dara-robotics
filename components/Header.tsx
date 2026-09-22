"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle, ChevronDown, Hotel, Sparkles, Hand } from "lucide-react";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";

function RoboticArmIcon(props: SVGProps<SVGSVGElement>) {
  return <span className={props.className} aria-hidden="true">🦾</span>;
}

function HealthcareHeartIcon(props: SVGProps<SVGSVGElement>) {
  return <span className={props.className} aria-hidden="true">❤️</span>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [robotsOpen, setRobotsOpen] = useState(false);
  const links = [["Robots", "/robots"], ["Solutions", "/solutions"], ["Services", "/services"], ["About", "/about"], ["Contact", "/contact"]];
  const robotCategories: Array<[ComponentType<SVGProps<SVGSVGElement>>, string]> = [
    [RoboticArmIcon, "Robotic Arms"],
    [HealthcareHeartIcon, "Healthcare Assistant Robots"],
    [Hotel, "Hotel Service Robots"],
    [Sparkles, "Autonomous Cleaning Robots"],
    [Hand, "Reception & Guest Experience Robots"],
  ];
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/" onClick={() => setOpen(false)}><Image className="brand-logo" src="/dara-robotics-logo.png" alt="Dara Robotics" width={580} height={288} priority /></Link>
        <nav className={"nav-links " + (open ? "open" : "")}>
          <div className={"nav-dropdown " + (robotsOpen ? "open" : "")}>
            <button className="nav-dropdown-trigger" type="button" aria-haspopup="true" aria-expanded={robotsOpen} onClick={() => setRobotsOpen(false)}>
              Robots <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div className="nav-dropdown-menu">
              <Link className="nav-dropdown-all" href="/robots" onClick={() => { setOpen(false); setRobotsOpen(false); }}>View All Robots <span>→</span></Link>
              {robotCategories.map(([Icon, label]) => <Link key={label} href={label === "Robotic Arms" ? "/robots/robotic-arms" : "/robots"} onClick={() => { setOpen(false); setRobotsOpen(false); }}><b>{label}</b><Icon className={"nav-dropdown-icon " + (label === "Robotic Arms" ? "robotic-arm-icon" : "")} aria-hidden="true" /></Link>)}
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
