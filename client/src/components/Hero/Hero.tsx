import Image from "next/image";
import styles from "./Hero.module.css";
import { bebas_neue, montserrat } from "@/app/font";

export default function Hero() {
  return (
    <div className={`${styles.heroWrapper} ${montserrat.className}`}>
      <Image
        src="/images/hero.jpg"
        alt="Hero image"
        fill
        className={styles.heroImage}
        quality={100}
      />
      <div className={` ${styles.heroContent} container`}>
        <p className={styles.heroSubtitle}>Novi Sad</p>
        <h1 className={`${styles.heroTitle} ${bebas_neue.className}`}>
          ODGUŠIVAČ
        </h1>
        <p className={styles.heroDescription}>
          HITNE INTEVERNCIJE <span>24/7</span>
        </p>
        <button className={styles.heroCallButton}>
          <Image
            src="/icons/phone-icon.svg"
            width={50}
            height={50}
            alt="Phone icon"
          />
          <h2 className={bebas_neue.className}>+381 62 818 8090</h2>
        </button>
      </div>
    </div>
  );
}
