"use client";

import styles from "./Offers.module.css";
import Image from "next/image";
import React from "react";

export default function Offers() {
  const offers = [
    {
      image: "/images/pipe.png",
      title: " i Stručnost",
      description: "Radimo sa pažnjom i posvećenošću.",
      additionalDescription: "Zapušeni odvodi",
      tag: "Kvalitet",
    },
    {
      image: "/images/like-image.png",
      title: " i Posvećenost",
      description: "Iskusni Majstori Za Vaš Dom",
      additionalDescription: "Brzo čišćenje",
      tag: "Iskustvo",
    },
    {
      image: "/images/smiley.png",
      title: " Zadovoljstvo",
      description: "Zajedno do savršenog rešenja.",
      additionalDescription: "Ručno otpušivanje",
      tag: "Vaše",
    },
  ];

  return (
    <div className={styles.offersWrapper}>
      <div className={`${styles.offersContainer} container`}>
        {offers.map((offer, index) => (
          <div className={styles.offerContent} key={index}>
            <div>
              <Image src={offer.image} height={90} width={90} alt="Like icon" />
            </div>
            <div className={styles.offerActions}>
              <div>
                <p className={styles.offerTitle}>
                  <span>{offer.tag}</span> {offer.title}
                </p>
                <p>{offer.description}</p>
              </div>
              <p className={styles.offerButton}>Saznaj više</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
