import type { Metadata } from "next";

export const metadata: Metadata = { title: "Hotel Service Robots" };

export default function HotelRobotsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
