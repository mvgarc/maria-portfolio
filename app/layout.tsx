import "./globals.css";
import { Geist } from "next/font/google";
import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "María García",
  description: "Data Analyst & Backend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} max-w-4xl mx-auto px-6`}>
        {children}
      </body>
    </html>
  );
}