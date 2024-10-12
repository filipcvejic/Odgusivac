import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  const aboutUsSections = [
    {
      title: "Hitne intervencije 24/7 za odgušenje",
      titleDescription:
        "Kada su vam odvodi zapušeni i voda ne otiče, naš tim je dostupan 24/7 za hitne intervencije u odgušenju cevi. Sa modernom opremom i dugogodišnjim iskustvom, brzo rešavamo svaki problem sa začepljenim cevima, bez obzira na ozbiljnost situacije. Oslonite se na nas za brzu i pouzdanu uslugu odgušivanja cevi koja rešava hitne slučajeve.",
      subtitle: "Odgušenje cevi u Novom Sadu",
      subtitleDescription:
        "Zapušene cevi mogu uzrokovati ozbiljne probleme u domaćinstvu, od neprijatnih mirisa do značajnih oštećenja instalacija. Naša ekipa pruža stručno odgušenje cevi, koristeći najsavremenije alate koji garantuju temeljno čišćenje bez oštećenja cevi. Poverite nam svoje probleme.",
      image: "/images/about2-image.jpg",
    },
    {
      title: "Oslonite se na naše stručnjake",
      titleDescription:
        "Kada su u pitanju vaše vodoinstalaterske potrebe, potrebna vam je ekipa kojoj možete verovati. U Pipowork-u smo posvećeni pružanju najkvalitetnijih vodoinstalaterskih rešenja i izvanredne korisničke usluge u oblasti vodoinstalacija.",
      subtitle: "Verujte našoj tradiciji",
      subtitleDescription:
        "Kroz godine, naša kompanija je gradila ime na temelju stručnosti, posvećenosti i poverenja klijenata. Danas, sa bogatim iskustvom u vodoinstalaterskim uslugama, ponosno pružamo vrhunska rešenja i usluge, ostajući posvećeni kvalitetu i zadovoljstvu naših klijenata.",
      image: "/images/about1-image.jpg",
    },
  ];

  return (
    <section className={styles.aboutUsWrapper} id="about">
      {aboutUsSections.map((aboutUsSection, index) => {
        const isEven = index % 2 === 0;

        return (
          <article
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
                    alt={`${aboutUsSection.title}`}
                    className={styles.aboutImage}
                  />
                ) : (
                  <>
                    <div>
                      <h2 className={styles.textSideTitle}>
                        {aboutUsSection.title}
                      </h2>
                      <p className={styles.textSideTitleDescription}>
                        {aboutUsSection.titleDescription}
                      </p>
                    </div>
                    <div>
                      <h3 className={styles.textSideSubtitle}>
                        {aboutUsSection.subtitle}
                      </h3>
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
                      <h2 className={styles.textSideTitle}>
                        {aboutUsSection.title}
                      </h2>
                      <p className={styles.textSideTitleDescription}>
                        {aboutUsSection.titleDescription}
                      </p>
                    </div>
                    <div>
                      <h3 className={styles.textSideSubtitle}>
                        {aboutUsSection.subtitle}
                      </h3>
                      <p className={styles.textSideSubtitleDescription}>
                        {aboutUsSection.subtitleDescription}
                      </p>
                    </div>
                  </>
                ) : (
                  <Image
                    src={aboutUsSection.image}
                    fill
                    alt={`${aboutUsSection.title}`}
                    className={styles.aboutImage}
                  />
                )}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
