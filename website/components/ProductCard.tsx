import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-image"><Image src={product.image_url} alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" /></div>
      <div className="product-body">
        <div className="eyebrow">{product.category}</div>
        <h3>{product.name}</h3>
        <p>{product.short_description}</p>
        <div className="chips">{product.service_modes.slice(0,3).map((m) => <span key={m}><Check size={13}/>{m}</span>)}</div>
        <Link className="text-link" href={`/robots/${product.slug}`}>View solution <ArrowUpRight size={16}/></Link>
      </div>
    </article>
  );
}
