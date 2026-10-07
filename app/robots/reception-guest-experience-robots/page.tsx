import { RobotCategoryGrid } from "@/components/RobotCategoryGrid";

const receptionSolutions = [
  { image: "/products/welcome-reception-robot-preview.png", title: "Welcome & Reception Robots", href: "/applications/welcome-reception-robots", video: "/products/welcome-reception-robot-motion.mp4" },
  { image: "/products/guest-guidance-robot-preview.png", title: "Guest Guidance Robots", href: "/applications/guest-guidance-robots", video: "/products/guest-guidance-robot-motion.mp4" },
  { image: "/products/interactive-experience-robot-preview.png", title: "Interactive Experience Robots", href: "/applications/interactive-experience-robots", video: "/products/interactive-experience-robot-motion.mp4" },
  { image: "/products/custom-reception-solutions.png", title: "Custom Reception Solutions", href: "/applications/custom-reception-solutions" },
];

export default function ReceptionGuestExperienceRobotsPage() {
  return <RobotCategoryGrid heading="Advanced reception and guest experience robot solutions." cards={receptionSolutions} />;
}
