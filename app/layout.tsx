import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salman | Senior SDET & QA Architect",
  description:
    "Senior Software Test Automation Engineer with 10+ years of experience in distributed systems, AI-driven QA, and founder of a QA training platform.",
  keywords: [
    "SDET",
    "QA Engineer",
    "Test Automation",
    "Selenium",
    "Playwright",
    "AI Testing",
    "Software Quality",
  ],
  openGraph: {
    title: "Salman | Senior SDET & QA Architect",
    description: "Building Bug-Free Systems at Scale",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
