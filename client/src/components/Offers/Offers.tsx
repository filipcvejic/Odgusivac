import { montserrat } from "@/app/font";
import styles from "./Offers.module.css";
import Image from "next/image";
import React from "react";

export default function Offers() {
  const offers = [
    {
      image: "/images/like-image.png",
      title: " i Stručnost",
      description: "Radimo sa pažnjom i posvećenošću.",
      tag: "Kvalitet",
    },
    {
      image: "/images/like-image.png",
      title: " i Posvećenost",
      description: "Iskusni Majstori Za Vaš Dom",
      tag: "Iskustvo",
    },
    {
      image: "/images/like-image.png",
      title: " Zadovoljstvo",
      description: "Zajedno do savršenog rešenja za vas.",
      tag: "Vaše",
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
