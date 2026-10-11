import Image from "next/image";
import Link from "next/link";
import { aiServices } from "@/lib/ai-services";
export const metadata = { title: "AI Solutions" };
export default function AISolutions() {
  return <section className="section overview-section"><div className="container">
    <Link href="/solutions">← All solutions</Link>
    <div className="overview-heading"><span className="eyebrow">AI Solutions</span><h1>AI that fits the way you work.</h1></div>
    <div className="overview-grid">{aiServices.map(service => <Link className="overview-card" key={service.slug} href={`/solutions/ai/${service.slug}`}>
      <div className="overview-card-media"><Image src={service.image} alt="" fill sizes="(max-width: 620px) 100vw, (max-width: 1100px) 50vw, 25vw" /></div>
      <div className="overview-card-copy"><h2>{service.title}</h2></div>
    </Link>)}</div>
  </div></section>;
}
