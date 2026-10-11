import type { Metadata } from "next";

export const metadata: Metadata = { title: "Autonomous Cleaning Robots" };

export default function CleaningRobotsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
