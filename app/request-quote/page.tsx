import { QuoteForm } from "@/components/QuoteForm";

export const metadata = { title: "Request a Robotics Assessment" };

export default async function Quote({ searchParams }: { searchParams: Promise<{ product?: string; industry?: string }> }) {
  const query = await searchParams;
  const value = query.product || query.industry || "";
  return <>
    <section className="page-hero compact contact-page-hero"><div className="container"><span className="eyebrow">REQUEST A QUOTE</span><h1>Tell us what you want to automate.</h1><p>We’ll use your requirements to recommend a robot, deployment approach and commercial model.</p></div></section>
    <section className="section contact-page-section quote-page-section"><div className="container narrow"><QuoteForm product={value}/></div></section>
  </>;
}
