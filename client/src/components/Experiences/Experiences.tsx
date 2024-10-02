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
      text: "Imali smo veliki zastoj u kuhinji, što je izazvalo mnogo problema. Pozvali smo stručnjake koji su brzo reagovali i koristili savremene tehnike za rešavanje problema. Njihova isplativost i brzina su bile jednostavno neverovatne. Usluga koju su pružili je neprocenjiva! Preporučujem ih svima koji se suočavaju sa sličnim problemima.",
      name: "Milica",
    },
    {
      text: "Zbog problema sa odvodom u kupatilu, odlučili smo da pozovemo profesionalce. Prvo i najvažnije, ljudi su stigli u veoma kratkom vremenu i koristili najnoviju opremu da reše problem. Bio sam impresioniran njihovom stručnošću i posvećenošću. Ova usluga je definitivno preporuka za sve koji se suočavaju sa sličnim teškoćama!",
      name: "Stefan",
    },
    {
      text: "Sudoperi se često koriste, ali zagušeni odvodi mogu se javljati od dana do nedelje, i takva je bila situacija i kod mene. Pozvao sam tim koji je odmah došao na lice mesta i otkačio odvode koji su bili strašno začepljeni. Njihova usluga je bila na visokom nivou, kao i rešeni problemi. Preporučujem ih svima!",
      name: "Dragana",
    },
    {
      text: "Situacija sa zagušenom cevi koju sam imao bila je ozbiljna. Ovo je bila teška situacija, i nakon mnogo pokušaja da je rešim, na kraju sam morao da potražim pomoć majstora. Bio sam zapanjen koliko su brzo reagovali na moj zahtev za pomoć i rešili problem. Najviše od svega, vole to što rade i naporno rade na tome. Svako ko ima slične probleme treba da razmotri saradnju sa ovim timom.",
      name: "Luka",
    },
    {
      text: "Imali smo zagušenje u našem stanu koje je ometalo normalno funkcionisanje u kući. Odlučili smo da angažujemo tim majstora i bili smo srećni koliko su brzo došli. Uspeli su da reše problem koristeći sofisticiranu opremu. Njihove cene su bile Pristupačne, a kvalitet usluge odličan. Preporučujemo ih svakog dana!",
      name: "Nina",
    },
    {
      text: "Nakon što smo nekoliko dana pokušavali da otkačimo sudoperu u kuhinji, odlučili smo da potražimo pomoć. Tim je brzo stigao i odlično se snašao u rešavanju problema koristeći nove pristupe koje nismo videli do sada. Usluga je bila brza i produktivna, a radnici su bili prijatni i odgovorni. Preporučujemo ih svima koji se suočavaju sa sličnim teškoćama!",
      name: "Vladimir",
    },
  ];

  return (
    <div
      className={`${styles.experiencesWrapper} ${montserrat.className}`}
      id="experiences"
    >
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
