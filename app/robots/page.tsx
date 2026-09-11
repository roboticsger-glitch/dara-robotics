import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/lib/data";

export const metadata = { title: "Robot Catalogue" };
export default async function Robots(){ const products=await getProducts(); return <><section className="page-hero"><div className="container"><span className="eyebrow">ROBOT CATALOGUE</span><h1>Robots for real business operations.</h1><p>Purchase, rent or deploy as a managed service. Every robot can be packaged with integration, training and support.</p></div></section><section className="section"><div className="container"><div className="catalog-note"><b>Supplier-ready catalogue:</b> These demo product names are placeholders. Replace them in the admin/database with approved manufacturer models and your commercial terms.</div><div className="product-grid">{products.map(p=><ProductCard key={p.id} product={p}/>)}</div></div></section></> }
