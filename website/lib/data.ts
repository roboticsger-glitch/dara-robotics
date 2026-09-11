import { demoProducts } from "./products";
import { Product } from "./types";
import { createClient } from "./supabase/server";

export async function getProducts(): Promise<Product[]> {
  try {
    const supabase = await createClient();
    if (!supabase) return demoProducts;
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("status", "active")
      .order("featured", { ascending: false });
    if (error || !data?.length) return demoProducts;
    return data as Product[];
  } catch {
    return demoProducts;
  }
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}
