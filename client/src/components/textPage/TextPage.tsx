import React from "react";
import styles from "./TextPage.module.css";
import Image from "next/image";
import { PHONE_NUMBER } from "@/contants";
const textPage = ({
  text1,
  text2,
  text3,
  text4,
  title1,
  title2,
  title3,
  title4,
  img1,
  img2,
  mainTitle,
}) => {
  return (
    <div className={styles.textPageWrapper}>
      <div className={styles.introduction}>
        <h1>{mainTitle}</h1>
      </div>
      <div className={`${styles.textPageContainer} container`}>
        <div>
          <h2>{title1}</h2>
          <p>{text1}</p>
        </div>
        <div className={styles.textPageArticle}>
          <div>
            <h2>{title2}</h2>
            <p>{text2}</p>
            <button className={styles.textPageButton}>{PHONE_NUMBER}</button>
          </div>
          <Image
            src={img1}
            width={640}
            height={360}
            alt=""
            className={styles.textPageImage1}
          />
        </div>
        <div>
          <h2>{title3}</h2>
          <p>{text3}</p>
        </div>
        <div className={styles.textPageArticle}>
          <Image
            src={img2}
            width={520}
            height={360}
            alt=""
            className={styles.textPageImage}
          />
          <div>
            <h2>{title4}</h2>
            <p>{text4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default textPage;
