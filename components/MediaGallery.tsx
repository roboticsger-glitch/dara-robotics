"use client";

import { useState } from "react";

type MediaItem = { type: "image" | "gif" | "video"; url: string; thumbnail?: string; alt: string; caption?: string };

export function MediaGallery({ items, className = "" }: { items: MediaItem[]; className?: string }) {
  const [active, setActive] = useState(0);
  const current = items[active] || items[0];
  if (!current) return null;
  return (
    <div className={"media-gallery " + className}>
      <div className="media-gallery-main">
        {current.type === "video" ? <video src={current.url} poster={current.thumbnail} autoPlay muted loop playsInline aria-label={current.alt} /> : <img src={current.url} alt={current.alt} />}
        {current.caption && <p>{current.caption}</p>}
      </div>
      {items.length > 1 && <div className="media-gallery-thumbs" aria-label="Media gallery">
        {items.map((item, index) => <button type="button" className={index === active ? "active" : ""} key={item.url} onClick={() => setActive(index)} aria-label={`Show media ${index + 1}`}>
          {item.type === "video" ? <video src={item.url} muted playsInline aria-hidden="true" /> : <img src={item.thumbnail || item.url} alt="" />}
        </button>)}
      </div>}
    </div>
  );
}
