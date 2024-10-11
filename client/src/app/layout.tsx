import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { montserrat } from "./font";
import { PHONE_NUMBER } from "@/contants";

export const metadata: Metadata = {
  title: `Vodoinstalater Novi Sad - Intervencije 24/7 | ${PHONE_NUMBER}`,
  description:
    "Vodoinstalater Novi Sad - Hitne intervencije 24/7! Majstor Mića nudi odgušenje WC šolje, sudopere, popravku bojlera i zamenu sanitarija po povoljnim cenama.",
  alternates: {
    canonical: "https://vodoinstalater-mica.rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
      <GoogleAnalytics gaId="G-GHKCYEYPP3" />
    </html>
  );
}
