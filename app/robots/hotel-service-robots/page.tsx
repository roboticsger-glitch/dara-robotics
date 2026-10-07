import { RobotCategoryGrid } from "@/components/RobotCategoryGrid";

const hotelSolutions = [
  { image: "/products/hotel-delivery-new-1.png", title: "Hotel Delivery Robots", href: "/applications/hotel-delivery-robots", video: "/products/hotel-delivery-robot-motion.mp4" },
  { image: "/products/restaurant-service-new-1.png", title: "Restaurant Service Robots", href: "/applications/restaurant-service-robots", video: "/products/restaurant-service-robot-motion.mp4" },
  { image: "/products/hotel-cleaning-new-1.png", title: "Hotel Cleaning Service", href: "/applications/hotel-cleaning-service", video: "/products/hotel-cleaning-service-motion.mp4" },
  { image: "/products/custom-hospitality-solutions.png", title: "Custom Hospitality Solutions", href: "/applications/custom-hospitality-solutions" },
];

export default function HotelServiceRobotsPage() {
  return <RobotCategoryGrid heading="Advanced hotel service robot solutions." cards={hotelSolutions} />;
}
