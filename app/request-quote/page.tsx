import { QuoteForm } from "@/components/QuoteForm";

export const metadata = { title: "Request a Robotics Assessment" };

export default function Quote() {
  return <>
    <section className="page-hero compact contact-page-hero quote-page-hero"><div className="container"><span className="eyebrow">REQUEST A QUOTE</span><h1>Tell us what you want to automate.</h1><p>We’ll use your requirements to recommend a robot, deployment approach and commercial model.</p></div></section>
    <section className="section contact-page-section quote-page-section"><div className="container narrow"><QuoteForm /></div></section>
  </>;
}
