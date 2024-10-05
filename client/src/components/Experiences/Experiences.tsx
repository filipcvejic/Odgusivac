"use client";

import { bebas_neue } from "@/app/font";
import styles from "./Experiences.module.css";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";

export default function Experiences() {
  //Text - max: 330 characters

  const experiences = [
    {
      text: "Imali smo zastoj u kuhinji koji je izazvao mnogo problema. Stručnjaci su brzo reagovali koristeći savremene tehnike. Njihova isplativost i brzina su neverovatne. Usluga je neprocenjiva! Preporučujem ih svima koji se suočavaju sa sličnim problemima.",
      name: "Milica",
    },
    {
      text: "Zbog problema sa odvodom u kupatilu, pozvali smo profesionalce. Stigli su brzo i koristili najnoviju opremu. Bio sam impresioniran njihovom stručnošću i posvećenošću. Definitivno preporučujem ovu uslugu za sve koji se suočavaju sa sličnim teškoćama!",
      name: "Stefan",
    },
    {
      text: "Zagušeni odvodi se javljaju često. Pozvao sam tim koji je brzo došao i rešio problem. Njihova usluga je bila na visokom nivou, a problemi su uspešno rešeni. Preporučujem ih svima!",
      name: "Dragana",
    },
    {
      text: "Imao sam ozbiljan problem sa zagušenom cevi. Nakon mnogo pokušaja, potražio sam pomoć. Tim je brzo reagovao i rešio problem. Vole to što rade i naporno rade na tome. Preporučujem saradnju sa ovim timom!",
      name: "Luka",
    },
    {
      text: "Imali smo zagušenje u stanu koje je ometalo funkcionisanje. Tim je brzo došao i rešio problem koristeći sofisticiranu opremu. Cene su bile pristupačne, a kvalitet usluge odličan. Preporučujemo ih svakog dana!",
      name: "Nina",
    },
    {
      text: "Nakon što smo pokušavali da otkačimo sudoperu, odlučili smo da potražimo pomoć. Tim je brzo stigao i odlično se snašao koristeći nove pristupe. Usluga je bila brza, a radnici prijatni. Preporučujemo ih svima!",
      name: "Vladimir",
    },
  ];

  return (
    <div className={styles.experiencesWrapper} id="experiences">
      <div className={`${styles.experiencesContainer} container`}>
        <h3 className={styles.experiencesHeading}>ISKUSTVA KORISNIKA</h3>
        <div>
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              780: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
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
