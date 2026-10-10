"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { title: "Healthcare Assistant Robots", href: "/robots/healthcare-assistant-robots", image: "/products/medical-delivery-new-1.png" },
  { title: "Robotic Arms", href: "/robots/robotic-arms", image: "/robotic-arms/coffee-dara-1.png" },
  { title: "Hotel Service Robots", href: "/robots/hotel-service-robots", image: "/products/hotel-delivery-new-1.png" },
  { title: "Autonomous Cleaning Robots", href: "/robots/autonomous-cleaning-robots", image: "/products/autonomous-scrubbing-robot-preview.png" },
  { title: "Reception & Guest Experience Robots", href: "/robots/reception-guest-experience-robots", image: "/products/welcome-reception-robot-preview.png" },
];

export function HomeHeroShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return (
    <div className="home-showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="home-showcase-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => (
          <Link className="home-showcase-slide" href={slide.href} key={slide.title} aria-hidden={index !== active} tabIndex={index === active ? 0 : -1}>
            <Image src={slide.image} alt={slide.title} fill priority={index === 0} sizes="(max-width: 950px) 100vw, 48vw" />
            <span className="home-media-label"><b>{slide.title}</b><ArrowRight size={18}/></span>
          </Link>
        ))}
      </div>
      <button className="home-showcase-arrow previous" type="button" onClick={() => move(-1)} aria-label="Previous robot category"><ArrowLeft size={20}/></button>
      <button className="home-showcase-arrow next" type="button" onClick={() => move(1)} aria-label="Next robot category"><ArrowRight size={20}/></button>
      <div className="home-showcase-dots" aria-label="Robot categories">
        {slides.map((slide, index) => <button className={index === active ? "active" : ""} type="button" key={slide.title} onClick={() => setActive(index)} aria-label={slide.title} aria-current={index === active ? "true" : undefined}/>) }
      </div>
    </div>
  );
}
