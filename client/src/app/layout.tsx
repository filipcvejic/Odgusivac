import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
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
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-GHKCYEYPP3`}
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHKCYEYPP3');
            gtag('config', 'AW-16742086901');
          `}
        </script>
      </head>
      <body className={montserrat.className}>{children}</body>
      <GoogleAnalytics gaId="G-GHKCYEYPP3" />
      <GoogleTagManager gtmId="GTM-KK36G6DC" />
    </html>
  );
}
