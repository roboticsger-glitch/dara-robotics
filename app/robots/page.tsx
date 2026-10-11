import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Robots" };
const robotCategories = [
  { title: "Robotic Arms", href: "/robots/robotic-arms", image: "/robotic-arms/coffee-category-clean.png" },
  { title: "Healthcare Assistant Robots", href: "/robots/healthcare-assistant-robots", image: "/products/medical-delivery-new-1.png" },
  { title: "Hotel Service Robots", href: "/robots/hotel-service-robots", image: "/products/hotel-delivery-new-1.png" },
  { title: "Autonomous Cleaning Robots", href: "/robots/autonomous-cleaning-robots", image: "/products/autonomous-scrubbing-robot-preview.png" },
  { title: "Reception & Guest Experience Robots", href: "/robots/reception-guest-experience-robots", image: "/products/welcome-reception-robot-preview.png" },
];

 export default function Robots(){ return <section className="section overview-section"><div className="container"><div className="overview-heading robot-overview-heading"><span className="eyebrow">ROBOTS</span><h1>Robots that fit the way you work.</h1></div><div className="overview-grid robot-category-overview">{robotCategories.map(category=><Link className={`overview-card${category.title === "Autonomous Cleaning Robots" ? " cleaning-category-card" : ""}`} key={category.href} href={category.href}><div className="overview-card-media"><Image src={category.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 20vw" /></div><div className="overview-card-copy"><h2>{category.title}</h2></div></Link>)}</div></div></section> }
