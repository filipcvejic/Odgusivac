import { bebas_neue } from "@/app/font";
import styles from "./Services.module.css";
import Image from "next/image";
import React from "react";

export default function Services() {
  const services = [
    {
      icon: "/images/pipe-image.png",
      label: "Odgušivanje cevi",
      alt: "Ikona odgušivanja cevi",
    },
    {
      icon: "/images/warning-image.png",
      label: "Hitne intervencije",
      alt: "Ikona za hitne vodoinstalaterske intervencije",
    },
    {
      icon: "/images/wrench-image.png",
      label: "Popravke",
      alt: "Ikona vodoinstalaterskih popravki",
    },
    {
      icon: "/images/sink-image.png",
      label: "Zamena sanitarije",
      alt: "Ikona za zamenu sanitarije",
    },
    {
      icon: "/images/camera-image.png",
      label: "Termalno snimanje",
      alt: "Ikona za termalno snimanje cevi",
    },
  ];

  return (
    <section className={styles.servicesWrapper} id="services">
      <div className={`${styles.servicesContent} container`}>
        <h2 className={`${styles.servicesHeading} ${bebas_neue.className}`}>
          Vodoinstalaterske usluge u Novom Sadu
        </h2>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <article className={styles.service} key={index}>
              <div className={styles.serviceCircle}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.icon}
                    width={120}
                    height={120}
                    alt={service.alt}
                  />
                </div>
                <div className={styles.topHalf} />
                <div className={styles.bottomHalf} />
              </div>
              <h4 className={styles.serviceTitle}>
                {service.label.includes(" ") ? (
                  <>
                    {service.label.split(" ")[0]}
                    <br />
                    {service.label.split(" ")[1]}
                  </>
                ) : (
                  service.label
                )}
              </h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
