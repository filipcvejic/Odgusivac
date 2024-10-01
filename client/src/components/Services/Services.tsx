import { bebas_neue } from "@/app/font";
import styles from "./Services.module.css";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: "/images/pipe-image.png",
      label: "Odgušivanje cevi",
    },
    {
      icon: "/images/warning-image.png",
      label: "Hitne intervencije",
    },
    {
      icon: "/images/wrench-image.png",
      label: "Popravke",
    },
    {
      icon: "/images/sink-image.png",
      label: "Zamena sanitarije",
    },
    {
      icon: "/images/camera-image.png",
      label: "Termalno snimanje",
    },
  ];

  return (
    <div className={`${styles.servicesWrapper} container`}>
      <div className={styles.servicesContent}>
        <h3 className={`${styles.servicesHeading} ${bebas_neue.className}`}>
          ODGUŠIVANJE CEVI U NOVOM SADU
        </h3>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <div className={styles.service} key={index}>
              <div className={styles.serviceCircle}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.icon}
                    width={120}
                    height={120}
                    alt="Pipe image"
                  />
                </div>
                <div className={styles.topHalf} />
                <div className={styles.bottomHalf} />
              </div>
              <p className={styles.serviceDescription}>{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}