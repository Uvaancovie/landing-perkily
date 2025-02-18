// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "../components/Navigation"; // Adjust the path if necessary

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perkily",
  description: "Manage patient loyalty programs effectively.",
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
        {/* Navigation Component */}
        <Navigation />

        {/* Main Content */}
        <main className="pt-16"> {/* Adjust padding-top based on navbar height */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
