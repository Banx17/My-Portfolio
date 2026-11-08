import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afeez | Product Designer & Backend Engineer",
  description:
    "Portfolio of Afeez Tomisin — Product Designer specializing in intuitive UI/UX design and Backend Engineer focused on building scalable, efficient, and reliable systems.",
  keywords: [
    "Afeez",
    "Afeez Tomisin",
    "Product Designer",
    "Backend Engineer",
    "UI/UX",
    "Fullstack Developer",
    "Next.js",
    "Figma",
  ],
  authors: [{ name: "Afeez Tomisin" }],
  openGraph: {
    title: "Afeez | Product Designer & Backend Engineer",
    description:
      "Crafting intuitive design experiences and architecting resilient backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-[#080808] text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
