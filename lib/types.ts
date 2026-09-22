export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  short_description: string;
  description: string;
  industries: string[];
  service_modes: string[];
  image_url: string;
  featured: boolean;
  status: "active" | "draft";
  payload?: string;
  runtime?: string;
  navigation?: string;
  lead_time?: string;
};
