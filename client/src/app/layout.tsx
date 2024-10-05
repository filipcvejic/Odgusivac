import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./font";
import { PHONE_NUMBER } from "@/contants";

export const metadata: Metadata = {
  title: `Vodoinstalater Novi Sad - Intervencije 24/7 | ${PHONE_NUMBER}`,
  description:
    "Hitne vodoinstalaterske intervencije 24/7 u Novom Sadu! Otpusivanje i odgušivanje wc šolja, lavaboa, sudopera i slivnika. Popravka bojlera i zamena sanitarija.",
  alternates: {
    canonical: "https://odgusivac.vercel.app/",
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
    </html>
  );
}
