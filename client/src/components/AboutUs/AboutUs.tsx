import React from "react";
import styles from "./AboutUs.module.css";
import Image from "next/image";
import { montserrat } from "@/app/font";

export default function AboutUs() {
  const aboutUsSections = [
    {
      title: "Our Company History",
      titleDescription:
        "When it comes to your plumbing needs, you need a team you can trust. At Pipowork, we're committed to providing our clients with the highest quality plumbing solutions and exceptional customer service.",
      subtitle: "Trust Our Team Experts",
      subtitleDescription:
        "When it comes to your plumbing needs, you need a team you can trust. At Pipowork, we're committed to providing our clients with the highest quality plumbing solutions and exceptional customer service.",
      image: "/images/about1-image.png",
    },
    {
      title: "Air Conditioning",
      titleDescription:
        "When it comes to your plumbing needs, you need a team you can trust. At Pipowork, we're committed to providing our clients with the highest quality plumbing solutions and exceptional customer service.",
      subtitle: "Odgusenje kanalizacija",
      subtitleDescription:
        "When it comes to your plumbing needs, you need a team you can trust. At Pipowork, we're committed to providing our clients with the highest quality plumbing solutions and exceptional customer service.",
      image: "/images/about2-image.png",
    },
  ];

  return (
    <div className={`${styles.aboutUsWrapper} ${montserrat.className}`}>
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
