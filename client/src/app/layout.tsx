import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./font";
import { PHONE_NUMBER } from "@/contants";
import { GoogleTagManager } from "@next/third-parties/google";

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
        <script>
          {`(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KK36G6DC');`}
        </script>
        {/* <script
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
        </script> */}
      </head>
      <body className={montserrat.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KK36G6DC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
