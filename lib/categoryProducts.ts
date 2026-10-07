import type { ApplicationProduct } from "@/components/ApplicationProductDisplay";

type CategoryProduct = ApplicationProduct & { slug: string };

const sharedPricing = {
  priceLabel: "Configured for your project",
  pricingNote: "Price provided after project assessment",
  ctaText: "Discuss your project with us",
  quoteText: "Request a quotation",
};

function product(slug: string, title: string, eyebrow: string, description: string, image: string, benefits: string[], gallery?: { url: string; alt: string }[]): CategoryProduct {
  const media = gallery?.length ? gallery : [{ url: image, alt: title }];
  return {
    slug,
    title,
    eyebrow,
    description,
    gif: image,
    preview: image,
    media,
    benefits,
    pricingFootnote: "Final configuration, availability and pricing depend on the site, workflow, selected equipment and integration requirements.",
    ...sharedPricing,
  };
}

export const categoryProducts: CategoryProduct[] = [
  product("medical-delivery-robots", "Medical Delivery Robots", "HEALTHCARE ASSISTANT ROBOTS", "Secure autonomous transport for medicines, laboratory samples and hospital supplies between departments.", "/products/medical-delivery-new-1.png", ["Secure compartment options", "Autonomous indoor navigation", "Configurable delivery workflows", "Facility integration and staff training"], [
    { url: "/products/medical-delivery-new-1.png", alt: "Dara Robotics medical delivery robot completing a hospital delivery" },
    { url: "/products/medical-delivery-new-2.png", alt: "Dara Robotics medical delivery robot being loaded by a nurse" },
    { url: "/products/medical-delivery-new-3.png", alt: "Dara Robotics medical delivery robot navigating a hospital corridor" },
    { url: "/products/medical-delivery-new-4.png", alt: "Dara Robotics medical delivery robot being prepared in a pharmacy" },
  ]),
  product("patient-assistance-robots", "Patient Assistance Robots", "HEALTHCARE ASSISTANT ROBOTS", "Interactive robotic support for guidance, information and patient-facing workflows in healthcare facilities.", "/products/patient-assistance-new-1.png", ["Patient and visitor guidance", "Interactive information display", "Multilingual experience options", "Configured for your facility"], [
    { url: "/products/patient-assistance-new-1.png", alt: "Dara Robotics patient assistance robot offering bedside support" },
    { url: "/products/patient-assistance-new-2.png", alt: "Dara Robotics patient assistance robot presenting care options" },
    { url: "/products/patient-assistance-new-3.png", alt: "Dara Robotics patient assistance robot guiding a patient through a hospital" },
    { url: "/products/patient-assistance-new-4.png", alt: "Dara Robotics patient assistance robot delivering water and medication" },
  ]),
  product("healthcare-cleaning-robots", "Healthcare Cleaning Robots", "HEALTHCARE ASSISTANT ROBOTS", "Autonomous cleaning support for corridors, waiting areas and other high-traffic healthcare environments.", "/products/healthcare-cleaning-new-1.png", ["Scheduled autonomous operation", "Obstacle detection and avoidance", "Cleaning route configuration", "Operator onboarding and support"], [
    { url: "/products/healthcare-cleaning-new-1.png", alt: "Dara Robotics healthcare cleaning robot scrubbing a hospital floor" },
    { url: "/products/healthcare-cleaning-new-2.png", alt: "Dara Robotics healthcare cleaning robot docked in a hospital corridor" },
    { url: "/products/healthcare-cleaning-new-3.png", alt: "Dara Robotics healthcare cleaning robot navigating a hospital hallway" },
    { url: "/products/healthcare-cleaning-new-4.png", alt: "Dara Robotics healthcare cleaning robot cleaning a busy hospital corridor" },
  ]),
  product("custom-healthcare-solutions", "Custom Healthcare Solutions", "HEALTHCARE ASSISTANT ROBOTS", "Robotic systems configured around your facility, workflow, safety requirements and operational goals.", "/products/custom-healthcare-new-1.png", ["Workflow and site assessment", "Application-specific configuration", "Integration planning", "Commissioning and support"], [
    { url: "/products/custom-healthcare-new-1.png", alt: "Dara Robotics custom healthcare robot team in a hospital" },
    { url: "/products/custom-healthcare-new-2.png", alt: "Dara Robotics custom pharmacy automation workflow" },
    { url: "/products/custom-healthcare-new-3.png", alt: "Dara Robotics custom telehealth patient-support workflow" },
    { url: "/products/custom-healthcare-new-4.png", alt: "Dara Robotics custom bedside assistance workflow" },
  ]),

  product("hotel-delivery-robots", "Hotel Delivery Robots", "HOTEL SERVICE ROBOTS", "Autonomous room-service and amenity delivery for hotels, resorts and serviced residences.", "/products/hotel-delivery-new-1.png", ["Guest-room and lobby delivery", "Autonomous elevator integration options", "Obstacle-aware indoor navigation", "Configured around hotel workflows"], [
    { url: "/products/hotel-delivery-new-1.png", alt: "Hotel delivery robot waiting in a luxury hotel lobby" },
    { url: "/products/hotel-delivery-new-2.png", alt: "Hotel staff loading a delivery robot with room service" },
    { url: "/products/hotel-delivery-new-3.png", alt: "Hotel delivery robot serving a guest at the room door" },
    { url: "/products/hotel-delivery-new-4.png", alt: "Hotel delivery robot arriving at a guest room" },
  ]),
  product("restaurant-service-robots", "Restaurant Service Robots", "HOTEL SERVICE ROBOTS", "Robotic assistance for moving meals, dishes and supplies between service areas and guests.", "/products/restaurant-service-new-1.png", ["Multi-tray delivery", "Repeatable service routes", "Staff call and dispatch options", "Restaurant workflow setup"], [
    { url: "/products/restaurant-service-new-1.png", alt: "Restaurant service robot carrying plated meals in a dining room" },
    { url: "/products/restaurant-service-new-2.png", alt: "Restaurant staff loading a service robot in the kitchen" },
    { url: "/products/restaurant-service-new-3.png", alt: "Restaurant service robot presenting meals to guests" },
    { url: "/products/restaurant-service-new-4.png", alt: "Restaurant service robot carrying plated dishes between tables" },
  ]),
  product("hotel-cleaning-service", "Hotel Cleaning Service", "HOTEL SERVICE ROBOTS", "Autonomous cleaning support for hotel lobbies, corridors and other high-traffic guest areas.", "/products/hotel-cleaning-new-1.png", ["Scheduled hotel cleaning", "Autonomous indoor navigation", "Configurable cleaning routes", "Deployment and staff training"], [
    { url: "/products/hotel-cleaning-new-1.png", alt: "Hotel cleaning robot scrubbing a lobby floor" },
    { url: "/products/hotel-cleaning-new-2.png", alt: "Hotel cleaning robot cleaning a guest corridor" },
    { url: "/products/hotel-cleaning-new-3.png", alt: "Hotel cleaning robot working near an elevator lobby" },
    { url: "/products/hotel-cleaning-new-4.png", alt: "Hotel cleaning robot polishing a hotel floor" },
  ]),
  product("custom-hospitality-solutions", "Custom Hospitality Solutions", "HOTEL SERVICE ROBOTS", "Hospitality robot systems designed around your property, service standards and guest journey.", "/products/custom-hospitality-solutions.png", ["Property and workflow assessment", "Custom robot configuration", "Guest experience planning", "Installation and staff training"]),

  product("commercial-floor-cleaning", "Commercial Floor Cleaning", "AUTONOMOUS CLEANING ROBOTS", "Autonomous floor-cleaning solutions for malls, hotels, hospitals and large commercial facilities.", "/products/commercial-floor-cleaning-preview.png", ["Automated route planning", "Scheduled cleaning operation", "Obstacle detection", "Coverage reporting options"]),
  product("ceiling-cleaning-robots", "Ceiling Cleaning Robots", "AUTONOMOUS CLEANING ROBOTS", "Specialized robotic cleaning for ceilings and elevated interior surfaces in commercial and industrial facilities.", "/products/ceiling-cleaning-robot-preview.png", ["Cleaning for elevated surfaces", "Reduced work-at-height exposure", "Configurable cleaning coverage", "Site assessment and deployment planning"]),
  product("window-facade-cleaning-robots", "Window & Facade Cleaning Robots", "AUTONOMOUS CLEANING ROBOTS", "Robotic cleaning solutions for large windows, glass walls and building facades.", "/products/window-facade-cleaning-preview.png", ["Large glass-surface coverage", "Consistent cleaning paths", "Reduced manual work at height", "Building-specific configuration"]),
  product("custom-cleaning-solutions", "Custom Cleaning Solutions", "AUTONOMOUS CLEANING ROBOTS", "A cleaning robot solution selected and configured for your surfaces, layout and operating schedule.", "/products/custom-cleaning-solutions.png", ["Site and surface assessment", "Machine and accessory selection", "Route commissioning", "Service and maintenance options"]),

  product("welcome-reception-robots", "Welcome & Reception Robots", "RECEPTION & GUEST EXPERIENCE ROBOTS", "Interactive robots for welcoming visitors, sharing information and supporting front-of-house teams.", "/products/welcome-reception-robot-preview.png", ["Visitor welcome experience", "Interactive information display", "Brand and content customization", "Multilingual options"]),
  product("guest-guidance-robots", "Guest Guidance Robots", "RECEPTION & GUEST EXPERIENCE ROBOTS", "Autonomous guidance robots that help visitors navigate venues, showrooms and public spaces.", "/products/guest-guidance-robot-preview.png", ["Indoor visitor guidance", "Mapped destination routes", "Interactive wayfinding", "Venue-specific configuration"]),
  product("interactive-experience-robots", "Interactive Experience Robots", "RECEPTION & GUEST EXPERIENCE ROBOTS", "Engaging robotic experiences for promotions, events, exhibitions and customer-facing environments.", "/products/interactive-experience-robot-preview.png", ["Interactive campaigns", "Custom media and messaging", "Event and venue deployment", "Brand experience configuration"]),
  product("custom-reception-solutions", "Custom Reception Solutions", "RECEPTION & GUEST EXPERIENCE ROBOTS", "A tailored reception robot experience designed around your visitors, brand and service workflow.", "/products/custom-reception-solutions.png", ["Visitor journey assessment", "Custom content and branding", "Workflow integration", "Deployment and staff training"]),
];

export function getCategoryProduct(slug: string) {
  return categoryProducts.find((item) => item.slug === slug);
}
