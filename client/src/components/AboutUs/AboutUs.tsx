import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import { montserrat } from "@/app/font";

export default function AboutUs() {
  const aboutUsSections = [
    {
      title: "Hitne intervencije 24/7 za odgušivanje",
      titleDescription:
        "Kada su vam odvodi zapušeni i voda ne otiče, naš tim je dostupan 24/7 za hitne intervencije u odgušivanju cevi. Sa modernom opremom i dugogodišnjim iskustvom, brzo rešavamo svaki problem sa začepljenim cevima, bez obzira na ozbiljnost situacije. Oslonite se na nas za brzu i pouzdanu uslugu odgušivanja cevi koja rešava hitne slučajeve.",
      subtitle: "odgušivanje cevi u Novom Sadu",
      subtitleDescription:
        "Zapušene cevi mogu uzrokovati ozbiljne probleme u domaćinstvu, od neprijatnih mirisa do značajnih oštećenja instalacija. Naša ekipa pruža stručno odgušivanje cevi, koristeći najsavremenije alate koji garantuju temeljno čišćenje bez oštećenja cevi. Poverite nam svoje probleme.",
      image: "/images/about2-image.png",
    },
    {
      title: "Oslonite se na naše stručnjake",
      titleDescription:
        "Kada su u pitanju vaše vodoinstalaterske potrebe, potrebna vam je ekipa kojoj možete verovati. U Pipowork-u smo posvećeni pružanju najkvalitetnijih vodoinstalaterskih rešenja i izvanredne korisničke usluge u oblasti vodoinstalacija.",
      subtitle: "Verujte našoj tradiciji",
      subtitleDescription:
        "Kroz godine, naša kompanija je gradila ime na temelju stručnosti, posvećenosti i poverenja klijenata. Danas, sa bogatim iskustvom u vodoinstalaterskim uslugama, ponosno pružamo vrhunska rešenja i usluge, ostajući posvećeni kvalitetu i zadovoljstvu naših klijenata.",
      image: "/images/about1-image.png",
    },
  ];

  return (
    <div
      className={`${styles.aboutUsWrapper} ${montserrat.className}`}
      id="about"
    >
      {aboutUsSections.map((aboutUsSection, index) => {
        const isEven = index % 2 == 0;

        return (
          <div
            className={
              isEven
                ? styles.leftToRightAboutContainer
                : styles.rightToLeftAboutContainer
            }
            key={index}
          >
            <div className={`${styles.aboutUsSectionContent} container`}>
              <div className={isEven ? styles.imageSide : styles.textSide}>
                {isEven ? (
                  <Image
                    src={aboutUsSection.image}
                    fill
                    alt={`About Image ${index + 1}`}
                    className={styles.aboutImage}
                  />
                ) : (
                  <>
                    <div>
                      <p className={styles.textSideTitle}>
                        {aboutUsSection.title}
                      </p>
                      <p className={styles.textSideTitleDescription}>
                        {aboutUsSection.titleDescription}
                      </p>
                    </div>
                    <div>
                      <p className={styles.textSideSubtitle}>
                        {aboutUsSection.subtitle}
                      </p>
                      <p className={styles.textSideSubtitleDescription}>
                        {aboutUsSection.subtitleDescription}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className={isEven ? styles.textSide : styles.imageSide}>
                {isEven ? (
                  <>
                    <div>
                      <p className={styles.textSideTitle}>
                        {aboutUsSection.title}
                      </p>
                      <p className={styles.textSideTitleDescription}>
                        {aboutUsSection.titleDescription}
                      </p>
                    </div>
                    <div>
                      <p className={styles.textSideSubtitle}>
                        {aboutUsSection.subtitle}
                      </p>
                      <p className={styles.textSideSubtitleDescription}>
                        {aboutUsSection.subtitleDescription}
                      </p>
                    </div>
                  </>
                ) : (
                  <Image
                    src={aboutUsSection.image}
                    fill
                    alt={`About Image ${index + 1}`}
                    className={styles.aboutImage}
                  />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
