import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { aiServices } from "@/lib/ai-services";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return aiServices.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = aiServices.find(item => item.slug === slug);
  return { title: service?.title ?? "AI Solutions" };
}

export default async function AIService({ params }: Props) {
  const { slug } = await params;
  const service = aiServices.find(item => item.slug === slug);
  if (!service) notFound();
  return <>
    <section className="detail-hero ai-service-section"><div className="container detail-hero-grid">
      <div><Link className="detail-back" href="/solutions/ai">← All AI solutions</Link><span className="eyebrow">AI Solutions</span><h1>{service.title}</h1><p>{service.description}</p></div>
      <div className="detail-hero-image"><Image src={service.image} alt="" fill sizes="(max-width: 950px) 100vw, 50vw" priority /></div>
    </div></section>
    <section className="section ai-service-section"><div className="container detail-content">
      <div><span className="eyebrow">POSSIBLE APPLICATIONS</span><h2>What this can help you do</h2><p>We choose the use cases with your team, based on your goals and the information available.</p></div>
      <ul>{service.examples.map(example => <li key={example}><CheckCircle2 size={20}/>{example}</li>)}</ul>
    </div></section>
    <section className="section alt ai-service-section"><div className="container detail-content">
      <div><span className="eyebrow">How we work</span><h2>From your requirements to everyday use.</h2><p>Start with a clear task. We review your data and systems, define the scope and help your team put AI into use.</p></div>
      <ul><li>Review the task, data access and success criteria.</li><li>Test a focused pilot with your team and evaluate the results.</li><li>Integrate the agreed solution, train users and plan ongoing support.</li></ul>
    </div></section>
    <section className="section"><div className="container detail-next"><div><h2>Let’s discuss your AI project.</h2><p>Tell us about your workflow and what you want to improve.</p></div><Link className="button" href="/contact">Contact us <ArrowRight size={16}/></Link></div></section>
  </>;
}
