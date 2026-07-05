import "./globals.css";
import { Geist } from "next/font/google";
import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "María García",
  description: "Ingeniera en Computación · Backend Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}