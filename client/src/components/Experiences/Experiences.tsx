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
      text: "Imali smo zagušenje u kuhinji koje su brzo rešili stručnjaci. Koristili su modernu opremu koja je efikasno otkrila uzrok zapušenja. Oduševljeni smo brzinom i efikasnošću usluge, a cene su bile veoma pristupačne. Preporučujemo ovaj tim svima koji se suočavaju sličnim problemima!",
      name: "Marko",
    },
    {
      text: "Imala sam ozbiljan problem sa začepljenjem cevi u kupatilu, što je značajno ometalo moj svakodnevni život. Stručnjaci su brzo došli i efikasno rešili problem koristeći savremenu opremu koja je otkrila uzrok. Oduševljena sam kvalitetom usluge koju su pružili. Preporučujem svima koji se suočavaju sa sličnim poteškoćama!",
      name: "Jelena",
    },
    {
      text: "Nakon neuspešnih pokušaja da sami rešimo zagušenje u kuhinji, konačno smo pozvali stručnjake. Tim je brzo došao i upotrebio specijalizovanu opremu koja je efikasno odgušila cevi. Rezultat je bio trenutni – voda se ponovo slobodno slivala! Ova usluga je izvrsna i toplo ih preporučujem svima koji se suočavaju sa problemima sa začepljenim cevima.",
      name: "Ivan",
    },
    {
      text: "U našem stanu je došlo do zagušenja odvodnih cevi, što je značajno ometalo naše svakodnevne aktivnosti. Stručnjaci za odgušivanje su brzo došli i koristili savremene tehnike da otkriju uzrok problema. Njihova efikasnost i stručnost su nas oduševili. Toplo preporučujem ovu uslugu svima koji imaju poteškoća sa zagušenim cevima!",
      name: "Marija",
    },
    {
      text: "Imali smo ozbiljno zagušenje u odvodu na spratu, što je izazvalo velike probleme u celoj kući. Kontaktirali smo stručnjake za odgušivanje cevi koji su brzo došli i efikasno rešili problem. Sada uživamo u mirnom domu bez zagušenja. Preporučujem ovu uslugu svima koji imaju slične probleme!",
      name: "Petar",
    },
    {
      text: "U mojoj kuhinji je došlo do ozbiljnog zagušenja koje je značajno ometalo moj svakodnevni život. Nakon što sam iscrpljeno pokušavao da to rešim, odlučio sam da pozovem stručnjake za odgušivanje cevi. Oni su brzo došli i rešili problem koristeći efikasne metode u vrlo kratkom roku. Njihova usluga je bila izvanredna, a tim veoma ljubazan. Preporučujem ih svima koji se bore sa zagušenim cevima!",
      name: "Ana",
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
