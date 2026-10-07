import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplicationProductDisplay } from "@/components/ApplicationProductDisplay";
import { categoryProducts, getCategoryProduct } from "@/lib/categoryProducts";

export function generateStaticParams() {
  return categoryProducts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/applications/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getCategoryProduct(slug);
  return product
    ? { title: `${product.title} | Dara Robotics`, description: product.description }
    : {};
}

export default async function CategoryProductPage({ params }: PageProps<"/applications/[slug]">) {
  const { slug } = await params;
  const product = getCategoryProduct(slug);
  if (!product) notFound();
  return <ApplicationProductDisplay product={product} />;
}
