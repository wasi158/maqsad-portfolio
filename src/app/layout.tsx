import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ScrollManager } from "@/components/ScrollManager";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Max-Maqsad | Inventory & POS Portfolio",
  description:
    "Flagship garment retail ERP — POS terminal, inventory, GRN, finance modules. Built with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
