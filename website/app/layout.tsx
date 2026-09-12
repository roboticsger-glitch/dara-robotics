import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Dara Robotics | Robotics & Automation", template: "%s | Dara Robotics" },
  description: "Robotics, automation, rental, integration and support solutions for businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
