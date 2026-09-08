import type { Metadata } from "next";
import { Inter, Hanuman } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hanuman = Hanuman({
  variable: "--font-hanuman",
  subsets: ["khmer"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmartServe | Revolutionize Your Restaurant",
  description: "The ultimate Restaurant SaaS platform with POS, Table Booking, QR Ordering, and Kitchen Management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${hanuman.variable} antialiased`} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}