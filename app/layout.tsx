import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
