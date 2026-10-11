import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/offerings";

export const metadata = { title: "Robotics Services" };

export default function Services() {
  return <>
    <section className="section overview-section"><div className="container">
      <div className="overview-heading services-overview-heading"><span className="eyebrow">SERVICES</span><h1>Support from purchase to daily operation.</h1><p>We help you choose and buy the right robot, configure it for your site, train your team and support the rollout.</p></div>
      <div className="overview-grid">{services.map(service => <article className="overview-card service-summary" key={service.slug}>
        <div className="overview-card-media"><Image src={service.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 950px) 50vw, 25vw" /></div>
        <div className="overview-card-copy"><h2>{service.title}</h2><p>{service.summary}</p></div>
      </article>)}</div>
      <div className="services-catalogue-link"><Link className="button" href="/robots">Explore our robots <ArrowRight size={16}/></Link></div>
    </div></section>
  </>;
}
