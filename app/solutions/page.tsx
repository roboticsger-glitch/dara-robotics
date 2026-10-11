import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit } from "lucide-react";

export const metadata = { title: "Robotics & AI Solutions" };

export default function Solutions() {
  return <>
    <section className="section overview-section"><div className="container">
      <div className="overview-heading"><span className="eyebrow">Solutions</span><h1>Robotics and AI for your business.</h1><p>Explore robots for physical tasks and AI solutions for your data, systems and workflows.</p></div>
      <div className="overview-grid solution-paths">
        <Link className="overview-card" href="/robots">
          <div className="overview-card-media"><Image src="/solutions/manufacturing.png" alt="" fill sizes="(max-width: 620px) 100vw, 50vw" priority /></div>
          <div className="overview-card-copy"><h2>Robots</h2><p>Find robots for hospitality, healthcare, cleaning, reception and production.</p><span>Explore our robots <ArrowRight size={16}/></span></div>
        </Link>
        <Link className="overview-card" href="/solutions/ai">
          <div className="overview-card-media ai-solution-visual"><BrainCircuit size={120} strokeWidth={1} aria-hidden="true" /></div>
          <div className="overview-card-copy"><h2>AI Solutions</h2><p>Put your data to work with language models, machine vision and AI integration.</p><span>Explore AI solutions <ArrowRight size={16}/></span></div>
        </Link>
      </div>
    </div></section>
  </>;
}
