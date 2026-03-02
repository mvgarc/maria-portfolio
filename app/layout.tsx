import "./globals.css";
import type { Metadata } from "next";

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
      <body className="max-w-4xl mx-auto px-6">
        {children}
      </body>
    </html>
  );
}