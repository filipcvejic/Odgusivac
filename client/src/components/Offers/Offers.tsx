import { montserrat } from "@/app/font";
import styles from "./Offers.module.css";
import Image from "next/image";
import React from "react";

export default function Offers() {
  const offers = [
    {
      image: "/images/like-image.png",
      title: "drive this instant",
      description: "on orders over $35",
      tag: "Free",
    },
    {
      image: "/images/like-image.png",
      title: "drive this instant",
      description: "on orders over $35",
      tag: "Free",
    },
    {
      image: "/images/like-image.png",
      title: "drive this instant",
      description: "on orders over $35",
      tag: "Free",
    },
  ];

  return (
    <div className={`${styles.offersWrapper} ${montserrat.className} `}>
      <div className={`${styles.offersContainer} container`}>
        {offers.map((offer, index) => (
          <div key={index} className={styles.offerContent}>
            <div>
              <Image
                src={offer.image}
                height={100}
                width={100}
                alt="Like icon"
              />
            </div>
            <div className={styles.offerActions}>
              <div>
                <p className={styles.offerTitle}>
                  <span>{offer.tag}</span> {offer.title}
                </p>
                <p>{offer.description}</p>
              </div>
              <a className={styles.offerButton}>Learn more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
