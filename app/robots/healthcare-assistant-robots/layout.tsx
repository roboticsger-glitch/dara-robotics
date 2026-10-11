import type { Metadata } from "next";

export const metadata: Metadata = { title: "Healthcare Assistant Robots" };

export default function HealthcareRobotsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
