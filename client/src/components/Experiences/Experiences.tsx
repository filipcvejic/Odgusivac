"use client";

import { bebas_neue, montserrat } from "@/app/font";
import styles from "./Experiences.module.css";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

export default function Experiences() {
  const experiences = [
    {
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku. Oduševljeni smo ovom metodom i preporučujemo je svima koji imaju problema s curenjem vode.",
      name: "Aleksandar",
    },
    {
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku. Oduševljeni smo ovom metodom i preporučujemo je svima koji imaju problema s curenjem vode.",
      name: "Aleksandar",
    },
    {
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku. Oduševljeni smo ovom metodom i preporučujemo je svima koji imaju problema s curenjem vode.",
      name: "Aleksandar",
    },
    {
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku. Oduševljeni smo ovom metodom i preporučujemo je svima koji imaju problema s curenjem vode.",
      name: "Aleksandar",
    },
    {
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku. Oduševljeni smo ovom metodom i preporučujemo je svima koji imaju problema s curenjem vode.",
      name: "Aleksandar",
    },
    {
      text: "Zahvaljujući profesionalnom i brzom servisu koji je koristio detektor curenja rashladnih tekućina, uspjeli smo otkriti i sanirati curenje u našem hladnjaku. Oduševljeni smo ovom metodom i preporučujemo je svima koji imaju problema s curenjem vode.",
      name: "Aleksandar",
    },
  ];

  return (
    <div className={`${styles.experiencesWrapper} ${montserrat.className}`}>
      <div className={`${styles.experiencesContainer} container`}>
        <h3 className={styles.experiencesHeading}>ISKUSTVA KORISNIKA</h3>
        <div>
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {experiences.map((experience, index) => (
              <SwiperSlide
                key={index}
                style={{ padding: 15, paddingBottom: 40 }}
              >
                <div className={styles.experienceContent}>
                  <span
                    className={`${styles.experienceCommas} ${bebas_neue.className}`}
                  >
                    ,,
                  </span>
                  <p className={styles.experienceDescription}>
                    {experience.text}
                  </p>
                  <p className={styles.experienceName}>{experience.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
