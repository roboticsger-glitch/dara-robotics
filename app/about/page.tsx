import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe2, Handshake, Wallet } from "lucide-react";

export const metadata = { title: "About" };

const team = [
  { name: "Dara Leadership", role: "Robotics Solutions", image: "/team/leader.png", bio: "Shapes practical automation programmes around business goals and measurable outcomes." },
  { name: "Deployment Team", role: "Engineering & Deployment", image: "/team/deployment-engineer.png", bio: "Turns proven robot platforms into reliable workflows for real operating environments." },
  { name: "Customer Success", role: "Operations & Support", image: "/team/customer-success.png", bio: "Keeps every project moving with training, local support and continuous improvement." },
];

export default function About() {
  return <>
    <section className="page-hero about-page-hero"><div className="container"><span className="eyebrow">ABOUT DARA ROBOTICS</span><h1>A robotics integrator focused on your business.</h1><p>Our model connects proven global robot platforms with local deployment, engineering and after-sales support.</p></div></section>
    <section className="section"><div className="container split"><div><h2>We sell outcomes, not boxes.</h2><p className="lead">Customers should not need to become robotics experts to automate a repetitive task. We select, configure and support the technology around the customer&apos;s operation.</p><p>This demo website is designed for a business that sources robots from vetted manufacturers while building local value through deployment, Arabic customer support, training, maintenance and recurring service models.</p><Link className="button" href="/request-quote">Start a project <ArrowRight size={16} /></Link></div><div className="value-grid"><div><BadgeCheck /><b>Vendor neutral</b><span>Select the best platform for the use case.</span></div><div><Globe2 /><b>Global sourcing</b><span>Access established robotics manufacturers.</span></div><div><Handshake /><b>Local relationship</b><span>Sales, deployment and support for your operation.</span></div><div><Wallet /><b>Flexible commercial models</b><span>Purchase and service options.</span></div></div></div></section>
    <section className="section alt about-team-section"><div className="container"><div className="section-heading about-team-heading"><div><span className="eyebrow">OUR TEAM</span><h2>Experience that travels with every project.</h2></div><p>Our team has worked with robotics and automation projects across markets around the world, bringing global perspective and practical local support to every deployment.</p></div><div className="team-grid">{team.map(member => <article className="team-card" key={member.role}><div className="team-card-image"><Image src={member.image} alt={member.name} fill sizes="(max-width: 620px) 100vw, (max-width: 950px) 50vw, 33vw" /></div><div className="team-card-copy"><span className="team-role">{member.role}</span><h3>{member.name}</h3><p>{member.bio}</p></div></article>)}</div></div></section>
  </>;
}
