import { RobotCategoryGrid } from "@/components/RobotCategoryGrid";

const healthcareSolutions = [
  {
    image: "/products/medical-delivery-new-1.png",
    title: "Medical Delivery Robots", href: "/applications/medical-delivery-robots", video: "/products/medical-delivery-robot-motion.mp4",
  },
  {
    image: "/products/patient-assistance-new-1.png",
    title: "Patient Assistance Robots", href: "/applications/patient-assistance-robots", video: "/products/patient-assistance-robot-full-body.mp4",
  },
  {
    image: "/products/healthcare-cleaning-new-1.png",
    title: "Healthcare Cleaning Robots", href: "/applications/healthcare-cleaning-robots", video: "/products/healthcare-cleaning-robot-motion.mp4",
  },
  {
    image: "/products/custom-healthcare-new-1.png",
    title: "Custom Healthcare Solutions", href: "/applications/custom-healthcare-solutions",
  },
];

export default function HealthcareAssistantRobotsPage() {
  return <RobotCategoryGrid heading="Advanced healthcare assistant robot solutions." cards={healthcareSolutions} />;
}
