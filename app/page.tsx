import Link from "next/link";
import { ArrowRight, Bot, Building2, CheckCircle2, Factory, Hotel, PackageCheck, ShieldCheck, Sparkles, Sun, Wrench } from "lucide-react";
import { RobotCategoryGrid } from "@/components/RobotCategoryGrid";
import { HomeHeroShowcase } from "@/components/HomeHeroShowcase";

export default function Home() {
  const robotCategories = [
    { image: "/robotic-arms/coffee-dara-1.png", title: "Robotic Arms", href: "/robots/robotic-arms", video: "/robotic-arms/coffee-square-video.mp4" },
    { image: "/products/medical-delivery-new-1.png", title: "Healthcare Assistant Robots", href: "/robots/healthcare-assistant-robots", video: "/products/medical-delivery-robot-motion.mp4" },
    { image: "/products/hotel-delivery-new-1.png", title: "Hotel Service Robots", href: "/robots/hotel-service-robots", video: "/products/hotel-delivery-robot-motion.mp4" },
    { image: "/products/autonomous-scrubbing-robot-preview.png", title: "Autonomous Cleaning Robots", href: "/robots/autonomous-cleaning-robots", video: "/products/autonomous-scrubbing-robot-motion.mp4" },
    { image: "/products/welcome-reception-robot-preview.png", title: "Reception & Guest Experience Robots", href: "/robots/reception-guest-experience-robots", video: "/products/welcome-reception-robot-motion.mp4" },
  ];
  const industries = [
    [Hotel, "Hospitality", "Delivery, reception and cleaning automation for hotels and restaurants."],
    [Building2, "Facilities", "Autonomous floor cleaning and service robots for large commercial sites."],
    [PackageCheck, "Logistics", "AMRs and autonomous transport for warehouses and distribution centers."],
    [Factory, "Manufacturing", "Cobots, machine tending, palletizing and internal material movement."],
    [Sun, "Solar & Energy", "Robotic solar cleaning and remote inspection for harsh environments."],
    [ShieldCheck, "Inspection", "Quadrupeds and sensor platforms for industrial and security use cases."],
  ];

  return <>
    <section className="home-hero">
      <div className="container home-hero-grid">
        <div className="home-hero-copy">
          <div className="home-pill"><Sparkles size={15}/> Robotics built around your operation</div>
          <h1>Deploy robots.<br/><span>Automate real work.</span></h1>
          <p>Robotic solutions for businesses — from cleaning and hospitality to warehouses, factories, energy and inspection.</p>
          <div className="home-hero-actions"><Link className="button" href="/request-quote">Book a Robotics Assessment <ArrowRight size={17}/></Link><Link className="button home-secondary" href="/robots">Explore Robots</Link></div>
          <div className="home-trust-row"><span><CheckCircle2/>Purchase</span><span><CheckCircle2/>RaaS</span><span><CheckCircle2/>Local Integration</span></div>
        </div>
        <HomeHeroShowcase />
      </div>
    </section>
    <section className="metric-strip"><div className="container metrics"><div><b>7+</b><span>solution categories</span></div><div><b>3</b><span>commercial models</span></div><div><b>360°</b><span>integration & support</span></div></div></section>
    <RobotCategoryGrid heading="Explore our robot solutions." cards={robotCategories} highlightHeading />
    <div className="home-catalogue-link"><Link className="button ghost dark" href="/robots">View full catalogue <ArrowRight size={16}/></Link></div>
    <section className="section home-industries"><div className="container"><div className="section-heading home-industries-heading"><div><span className="eyebrow">INDUSTRIES</span><h2>Automation across industries.</h2></div><p>From hospitality to industrial sites, every deployment is designed around ROI and operations.</p></div><div className="industry-grid home-industry-grid">{industries.map(([Icon,title,desc]) => { const I = Icon as typeof Hotel; return <div className="industry-card home-industry-card" key={String(title)}><span className="home-industry-icon"><I/></span><h3>{String(title)}</h3><p>{String(desc)}</p></div>})}</div></div></section>
    <section className="section home-services"><div className="container split"><div><span className="eyebrow">SERVICES</span><h2>Hardware is only the beginning.</h2><p className="lead">We create the complete deployment: selection, import coordination, installation, mapping, integration, training and maintenance.</p><div className="service-list"><div><Wrench/><span><b>Turnkey integration</b> Site survey, commissioning and workflow setup.</span></div><div><Bot/><span><b>Robot-as-a-Service</b> Monthly operating model with support.</span></div><div><ShieldCheck/><span><b>Local support</b> Maintenance plans, spare parts and remote diagnostics.</span></div></div><Link className="text-link large" href="/services">Explore our service model <ArrowRight size={17}/></Link></div><div className="process-card"><div className="process-step"><span>01</span><div><h3>Assess</h3><p>Understand the site, people, workflow and target ROI.</p></div></div><div className="process-step"><span>02</span><div><h3>Select</h3><p>Source the right robot and accessories from approved suppliers.</p></div></div><div className="process-step"><span>03</span><div><h3>Integrate</h3><p>Map, configure, connect and train the operating team.</p></div></div><div className="process-step"><span>04</span><div><h3>Support</h3><p>Maintain uptime with service contracts and spare parts.</p></div></div><div className="process-step"><span>05</span><div><h3>Deploy</h3><p>Launch the solution on site and verify daily operations.</p></div></div><div className="process-step"><span>06</span><div><h3>Train</h3><p>Prepare operators and supervisors for confident everyday use.</p></div></div><div className="process-step"><span>07</span><div><h3>Optimize</h3><p>Review performance and improve workflows as requirements evolve.</p></div></div></div></div></section>
    <section className="section cta-section home-cta-section"><div className="container cta home-cta"><div><span className="eyebrow">LET&apos;S AUTOMATE</span><h2>Tell us the task. We&apos;ll design the robotic solution.</h2><p>Request an assessment for your facility, restaurant, warehouse, factory, solar site or event.</p></div><Link className="button light" href="/request-quote">Request a Quote <ArrowRight size={17}/></Link></div></section>
  </>;
}
