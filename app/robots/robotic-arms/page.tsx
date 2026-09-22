"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const arms = [
  {
    gif: "/robotic-arms/coffee-arm-view-1.png",
    preview: "/robotic-arms/coffee-arm-view-1.png",
    title: "Coffee & Tea Preparation",
    description: "Robotic solutions for preparing and serving Arabic coffee, tea, espresso and other beverages with consistent quality.",
    href: "/applications/robotic-coffee-preparation",
    video: "/robotic-arms/coffee-square-video.mp4",
  },
  {
    gif: "/robotic-arms/welding-process.gif",
    preview: "/robotic-arms/welding-preview.png",
    title: "Welding & Fabrication",
    href: "/applications/robotic-welding",
    description: "Robotic welding, cutting and finishing solutions for workshops, factories and production lines.",
  },
  {
    gif: "/robotic-arms/majlis-process.gif",
    preview: "/robotic-arms/majlis-preview.png",
    title: "Majalis Service",
    href: "/applications/majlis-service",
    description: "Robotic assistance for serving guests, presenting coffee and tea, and moving items safely in majalis and diwaniyas.",
  },
  {
    gif: "/robotic-arms/custom-robotic-arm.gif",
    preview: "/robotic-arms/custom-robotic-arm-preview.png",
    title: "Custom Robotic Arms",
    href: "/applications/custom-robotic-arm",
    description: "Flexible robotic arm configurations designed around your specific task, workspace and workflow.",
  },
];

function HoverGif({ gif, preview, video, title }: { gif: string; preview: string; video?: string; title: string }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  return video ? (
    <video ref={videoRef} className="arm-type-gif" src={video} muted loop playsInline aria-label={title} onMouseEnter={() => videoRef.current?.play()} onMouseLeave={() => { if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } }} />
  ) : (
    <img className="arm-type-gif" src={hovered ? gif : preview} alt={title} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />
  );
}
export default function RoboticArmsPage() {
  return (
    <section className="section robotic-arms-section">
      <div className="container">
        <div className="section-heading robotic-arms-heading">
          <h2>Advanced robotic arm solutions.</h2>
        </div>
        <div className="arm-types-grid">
          {arms.map((arm) => {
            const content = (
              <>
                <HoverGif gif={arm.gif} preview={arm.preview} video={arm.video} title={arm.title} />
                <h3>{arm.title}</h3>
              </>
            );
            return arm.href ? (
              <Link className="arm-type-card arm-type-link" href={arm.href} key={arm.title}>
                {content}
              </Link>
            ) : (
              <article className="arm-type-card" key={arm.title}>{content}</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
