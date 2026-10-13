import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";

export const metadata: Metadata = {
  title: { default: "Dara Robotics | Robotics & Automation", template: "%s | Dara Robotics" },
  description: "Robotics, automation, integration and support solutions for businesses.",
  icons: {
    icon: "/dara-favicon-transparent.png",
    shortcut: "/dara-favicon-transparent.png",
    apple: "/dara-favicon-transparent.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{if(localStorage.getItem('dara-language')==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl';document.documentElement.setAttribute('data-language-pending','true')}}catch(e){}})()` }} /></head><body><Header/><main>{children}</main><Footer/><FloatingSocialButtons/></body></html>;
}
