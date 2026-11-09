import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif-face" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans-face" });

export const metadata: Metadata = {
  title: "Faheel",
  description: "Personal site: music, writing, and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body
        className="min-h-screen bg-midnight font-sans text-ink antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}