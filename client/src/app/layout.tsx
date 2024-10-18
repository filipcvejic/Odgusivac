import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./font";
import { PHONE_NUMBER } from "@/contants";
import Script from "next/script";

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
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GHKCYEYPP3"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHKCYEYPP3');
            gtag('config', 'AW-16742086901');
          `}
        </Script>
      </head>
      <body className={montserrat.className}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK36G6DC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}

        {children}
      </body>
    </html>
  );
}

{
  /* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-GHKCYEYPP3`}
        ></S>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GHKCYEYPP3');
            gtag('config', 'AW-16742086901');
          `}
        </script> */
}
