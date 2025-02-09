"use client";

import Image from "next/image";
import styles from "./Hero.module.css";
import { bebas_neue } from "@/app/font";
import { useEffect, useState } from "react";
import { PHONE_HREF_LOCATION, PHONE_NUMBER } from "@/contants";
import gtag_report_conversion from "@/helpers/gtagReportConversion";

export default function Hero() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileWidth = screenWidth <= 1024;

  const heroImage = isMobileWidth
    ? "/images/phoneHero.jpg"
    : "/images/hero.jpg";

  const buttonDimensions = isMobileWidth ? 45 : 70;

  return (
    <div className={styles.heroWrapper}>
      <Image
        src={heroImage}
        alt="Vodoinstalater u Novom Sadu - Hero Slika"
        fill
        className={styles.heroImage}
        quality={100}
      />
      <div className={`${styles.heroContent} container`}>
        <h2 className={styles.heroSubtitle}>Novi Sad</h2>
        <h1 className={`${styles.heroTitle} ${bebas_neue.className}`}>
          Vodoinstalater
        </h1>
        <p className={styles.heroDescription}>
          hitne intervencije <span>24/7</span>
        </p>
        <div className={styles.heroCallButtonWrapper}>
          <button
            className={styles.heroCallButton}
            aria-label="Pozovite nas odmah"
          >
            <a
              href={PHONE_HREF_LOCATION}
              onClick={() => gtag_report_conversion(PHONE_HREF_LOCATION)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
                height={buttonDimensions}
                width={buttonDimensions}
                aria-label="Pozovite nas"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={bebas_neue.className}>{PHONE_NUMBER}</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
