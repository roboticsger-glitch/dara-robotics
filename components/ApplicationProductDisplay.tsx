import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MediaGallery } from "@/components/MediaGallery";

export type ApplicationProduct = {
  eyebrow: string;
  title: string;
  description: string;
  gif: string;
  preview: string;
  benefits: string[];
  priceLabel?: string;
  pricingNote?: string;
  pricingFootnote?: string;
  ctaText?: string;
  quoteText?: string;
  media?: { url: string; alt: string }[];
};

export function ApplicationProductDisplay({ product }: { product: ApplicationProduct }) {
  return <section className="product-display-page"><div className="container product-display-grid">
    <div className="product-display-media"><MediaGallery items={(product.media || [{ url: product.gif, alt: product.title }, { url: product.preview, alt: product.title }]).map((item) => ({ type: "image" as const, url: item.url, alt: item.alt }))} /></div>
    <div className="product-display-details"><h1>{product.title}</h1><p className="product-display-lead">{product.description}</p><div className="product-price-block"><span>{product.priceLabel || "Starting from"}</span><strong>{product.pricingNote || "Price provided after project assessment"}</strong></div><ul className="product-display-benefits">{product.benefits.map((benefit) => <li key={benefit}><CheckCircle2 size={19} />{benefit}</li>)}</ul><p className="product-display-note">{product.pricingFootnote || "Final configuration and pricing depend on the selected robotic arm, tooling, integration and project requirements."}</p><Link className="button coffee-primary-cta" href={`/request-quote?product=${encodeURIComponent(product.title)}`}>{product.ctaText || "Contact us to purchase"} <ArrowRight size={17} /></Link><Link className="product-display-secondary" href={`/request-quote?product=${encodeURIComponent(product.title)}`}>{product.quoteText || "Request a quotation"}</Link></div>
  </div></section>;
}
