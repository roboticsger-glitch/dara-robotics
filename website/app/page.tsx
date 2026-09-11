import Link from "next/link";
import { ArrowRight, Bot, Building2, CheckCircle2, Factory, Hotel, PackageCheck, ShieldCheck, Sparkles, Sun, Wrench } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/data";

export default async function Home() {
  const products = await getProducts();
  const featured = products.filter(p => p.featured).slice(0, 6);
  const industries = [
    [Hotel, "Hospitality", "Delivery, reception and cleaning automation for hotels and restaurants."],
    [Building2, "Facilities", "Autonomous floor cleaning and service robots for large commercial sites."],
    [PackageCheck, "Logistics", "AMRs and autonomous transport for warehouses and distribution centers."],
    [Factory, "Manufacturing", "Cobots, machine tending, palletizing and internal material movement."],
    [Sun, "Solar & Energy", "Robotic solar cleaning and remote inspection for harsh environments."],
    [ShieldCheck, "Inspection", "Quadrupeds and sensor platforms for industrial and security use cases."],
  ];
  return <>
    <section className="hero">
      <div className="hero-glow one"/><div className="hero-glow two"/>
      <div className="container hero-grid">
        <div className="hero-copy"><div className="pill"><Sparkles size={15}/> Robotics built around your operation</div><h1>Deploy robots.<br/><span>Automate real work.</span></h1><p>Robotic solutions for Saudi businesses — from cleaning and hospitality to warehouses, factories, energy and inspection.</p><div className="hero-actions"><Link className="button" href="/request-quote">Book a Robotics Assessment <ArrowRight size={17}/></Link><Link className="button ghost" href="/robots">Explore Robots</Link></div><div className="trust-row"><span><CheckCircle2/>Purchase</span><span><CheckCircle2/>Rental</span><span><CheckCircle2/>RaaS</span><span><CheckCircle2/>Local Integration</span></div></div>
        <div className="hero-panel"><div className="radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><Bot className="hero-bot" size={110}/><span className="node n1"/><span className="node n2"/><span className="node n3"/></div><div className="status-card"><span className="status-dot"/><div><b>Automation assessment</b><small>Robot + integration + support</small></div><span>LIVE</span></div></div>
      </div>
    </section>
    <section className="metric-strip"><div className="container metrics"><div><b>7+</b><span>solution categories</span></div><div><b>3</b><span>commercial models</span></div><div><b>360°</b><span>integration & support</span></div><div><b>KSA</b><span>market focused</span></div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">ROBOT CATALOGUE</span><h2>Start with the task, not the robot.</h2></div><p>We match the right platform to the environment, workflow and commercial model.</p></div><div className="product-grid">{featured.map(p => <ProductCard key={p.id} product={p}/>)}</div><div className="center"><Link className="button ghost dark" href="/robots">View full catalogue <ArrowRight size={16}/></Link></div></div></section>
    <section className="section dark-section"><div className="container"><div className="section-heading inverse"><div><span className="eyebrow">INDUSTRIES</span><h2>Automation across the Saudi economy.</h2></div><p>From hospitality to industrial sites, every deployment is designed around ROI and operations.</p></div><div className="industry-grid">{industries.map(([Icon,title,desc]) => { const I = Icon as typeof Hotel; return <div className="industry-card" key={String(title)}><I/><h3>{String(title)}</h3><p>{String(desc)}</p></div>})}</div></div></section>
    <section className="section"><div className="container split"><div><span className="eyebrow">SERVICES</span><h2>Hardware is only the beginning.</h2><p className="lead">We create the complete deployment: selection, import coordination, installation, mapping, integration, training and maintenance.</p><div className="service-list"><div><Wrench/><span><b>Turnkey integration</b> Site survey, commissioning and workflow setup.</span></div><div><Bot/><span><b>Robot-as-a-Service</b> Monthly operating model with support.</span></div><div><ShieldCheck/><span><b>Local support</b> Maintenance plans, spare parts and remote diagnostics.</span></div></div><Link className="text-link large" href="/services">Explore our service model <ArrowRight size={17}/></Link></div><div className="process-card"><span>01</span><h3>Assess</h3><p>Understand the site, people, workflow and target ROI.</p><span>02</span><h3>Select</h3><p>Source the right robot and accessories from approved suppliers.</p><span>03</span><h3>Integrate</h3><p>Map, configure, connect and train the operating team.</p><span>04</span><h3>Support</h3><p>Maintain uptime with service contracts and spare parts.</p></div></div></section>
    <section className="section cta-section"><div className="container cta"><div><span className="eyebrow">LET'S AUTOMATE</span><h2>Tell us the task. We’ll design the robotic solution.</h2><p>Request an assessment for your facility, restaurant, warehouse, factory, solar site or event.</p></div><Link className="button light" href="/request-quote">Request a Quote <ArrowRight size={17}/></Link></div></section>
  </>;
}
