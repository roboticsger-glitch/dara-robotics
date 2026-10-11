import type { Metadata } from "next";

export const metadata: Metadata = { title: "Robotic Arms" };

export default function RoboticArmsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
