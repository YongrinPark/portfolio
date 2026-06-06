import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "David (Yongrin) Park — Portfolio",
  description:
    "Industrial Engineering student at UIUC interested in data science, quantitative finance, optimization, and simulation.",
  // TODO: Replace with your actual deployed domain for proper OG tags
  // openGraph: { url: "https://yourdomain.com", ... }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
