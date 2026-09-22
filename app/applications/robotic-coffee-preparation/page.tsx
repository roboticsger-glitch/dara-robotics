import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { MediaGallery } from "@/components/MediaGallery";

export const metadata = {
  title: "Robotic Coffee Preparation | Dara Robotics",
  description: "Explore robotic-arm solutions for automated coffee preparation and hospitality applications.",
};

const benefits = [
  "Configurable for your workspace",
  "Custom end-of-arm tooling",
  "Coffee equipment integration",
  "Installation options available depending on the project",
];

export default function RoboticCoffeePreparationPage() {
  return (
    <section className="product-display-page">
      <div className="container product-display-grid">
        <div className="product-display-media">
          <MediaGallery items={[{ type: "image", url: "/robotic-arms/coffee-new-1.png", alt: "Coffee robotic arm view 1" }, { type: "image", url: "/robotic-arms/coffee-new-2.png", alt: "Coffee robotic arm view 2" }, { type: "image", url: "/robotic-arms/coffee-new-3.png", alt: "Coffee robotic arm view 3" }, { type: "image", url: "/robotic-arms/coffee-new-4.png", alt: "Coffee robotic arm view 4" }]} />
        </div>
        <div className="product-display-details">
          
          <h1>Robotic Coffee Preparation</h1>
          <p className="product-display-lead">A robotic-arm solution for coffee preparation and serving in cafés, hotels, lounges and hospitality environments.</p>
          <div className="product-price-block"><span>Starting from</span><strong>Price provided after project assessment</strong></div>
          <ul className="product-display-benefits">
            {benefits.map((benefit) => <li key={benefit}><CheckCircle2 size={19} />{benefit}</li>)}
          </ul>
          <p className="product-display-note">Final configuration and pricing depend on the selected robotic arm, tooling, integration and project requirements.</p>
          <Link className="button coffee-primary-cta" href="/request-quote?product=Robotic%20Coffee%20Preparation">Contact us to purchase <ArrowRight size={17} /></Link>
          <Link className="product-display-secondary" href="/request-quote?product=Robotic%20Coffee%20Preparation">Request a quotation</Link>
        </div>
      </div>
    </section>
  );
}
