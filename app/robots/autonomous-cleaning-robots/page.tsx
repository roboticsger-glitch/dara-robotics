import { RobotCategoryGrid } from "@/components/RobotCategoryGrid";

const cleaningSolutions = [
  { image: "/products/commercial-floor-cleaning-preview.png", title: "Commercial Floor Cleaning", href: "/applications/commercial-floor-cleaning", video: "/products/commercial-floor-cleaning-motion.mp4" },
  { image: "/products/ceiling-cleaning-robot-preview.png", title: "Ceiling Cleaning Robots", href: "/applications/ceiling-cleaning-robots", video: "/products/ceiling-cleaning-robot-motion.mp4" },
  { image: "/products/window-facade-cleaning-preview.png", title: "Window & Facade Cleaning Robots", href: "/applications/window-facade-cleaning-robots", video: "/products/window-facade-cleaning-motion.mp4" },
  { image: "/products/custom-cleaning-solutions.png", title: "Custom Cleaning Solutions", href: "/applications/custom-cleaning-solutions" },
];

export default function AutonomousCleaningRobotsPage() {
  return <RobotCategoryGrid heading="Advanced autonomous cleaning robot solutions." cards={cleaningSolutions} />;
}
