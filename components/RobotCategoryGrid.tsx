"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type RobotCategoryCard = {
  image: string;
  title: string;
  href: string;
  video?: string;
  hoverImage?: string;
};

function CategoryCardMedia({ card }: { card: RobotCategoryCard }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  if (!card.video) {
    return <Image className="arm-type-gif" src={hovered && card.hoverImage ? card.hoverImage : card.image} alt={card.title} width={900} height={900} unoptimized={Boolean(card.hoverImage)} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} />;
  }

  return (
    <video
      ref={videoRef}
      className="arm-type-gif"
      src={card.video}
      muted
      loop
      playsInline
      preload="auto"
      aria-label={card.title}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    />
  );
}

export function RobotCategoryGrid({ heading, cards }: { heading: string; cards: RobotCategoryCard[] }) {
  return (
    <section className="section robotic-arms-section">
      <div className="container">
        <div className="section-heading robotic-arms-heading">
          <h2>{heading}</h2>
        </div>
        <div className="arm-types-grid">
          {cards.map((card) => (
            <Link
              className="arm-type-card arm-type-link"
              href={card.href}
              key={card.title}
            >
              <CategoryCardMedia card={card} />
              <h3>{card.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
