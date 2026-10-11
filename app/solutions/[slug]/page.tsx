import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { solutions } from "@/lib/offerings";

export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }

export default async function SolutionDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions.find(item => item.slug === slug);
  if (!solution) notFound();
  return <>
    <section className="detail-hero"><div className="container detail-hero-grid"><div><Link className="detail-back" href="/solutions">← All solutions</Link><span className="eyebrow">INDUSTRY SOLUTION</span><h1>{solution.title}</h1><p>{solution.summary}</p><Link className="button" href={`/request-quote?industry=${encodeURIComponent(solution.title)}`}>Discuss your site <ArrowRight size={16}/></Link></div><div className="detail-hero-image"><Image src={solution.image} alt="" fill sizes="(max-width: 950px) 100vw, 50vw" priority /></div></div></section>
    <section className="section"><div className="container detail-content"><div><span className="eyebrow">POSSIBLE APPLICATIONS</span><h2>Where robots can help</h2><p>The right setup depends on your site, routes and daily operation.</p></div><ul>{solution.tasks.map(task => <li key={task}><CheckCircle2 size={20}/>{task}</li>)}</ul></div></section>
    <section className="section alt"><div className="container detail-next"><div><span className="eyebrow">PURCHASE & ROLLOUT</span><h2>Own the robot. We help make it work.</h2><p>We select a suitable platform, configure it for your site, train your team and support the rollout.</p></div><Link className="button" href={`/request-quote?industry=${encodeURIComponent(solution.title)}`}>Request an assessment <ArrowRight size={16}/></Link></div></section>
  </>;
}
