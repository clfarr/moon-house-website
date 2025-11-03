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
  title: "Moon House - Coffee, Games & Grub | Weaverville, CA",
  description: "Board game cafe in Weaverville, CA serving local organic produce filled rice/quinoa bowls, Moon Pitas, sweet and savory protein waffles & full organic coffee bar!",
  keywords: ["board game cafe", "Weaverville", "organic coffee", "Moon Pitas", "quinoa bowls", "protein waffles", "local produce"],
  authors: [{ name: "Moon House" }],
  openGraph: {
    title: "Moon House - Coffee, Games & Grub",
    description: "Board game cafe in Weaverville, CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
