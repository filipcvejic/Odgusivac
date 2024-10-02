import React from "react";
import styles from "./Footer.module.css";
import { bebas_neue, montserrat } from "@/app/font";

const Footer = () => {
  return (
    <div>
      <div className={styles.topFooterWrapper}>
        <div
          className={`${bebas_neue.className} ${styles.topFooterWrapperText}`}
        >
          Sign up today & save 15%
        </div>
        <div className={styles.topFooterWrapperContainer}>
          <input
            type="text"
            className={`${styles.topFooterWrapperInput} ${montserrat.className}`}
            placeholder="Enter your e-mail"
          />
          <button
            className={`${bebas_neue.className} ${styles.topFooterWrapperButton}`}
          >
            I'm IN
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.footerTopSide} container`}>
          <div className={styles.footerTopSideSingleText}>
            <div className={styles.footerTopSideSingle}>Pozovite majstora</div>
            <div>+381 62 818 8090</div>
            <div className={styles.footerTopSideSingleText}>
              {/* <div className={styles.footerTopSideSingle}>Email</div> */}
              <div>kontakt@vodoinstalateri-novisad.rs</div>
            </div>
          </div>

          <div className={styles.footerTopSideSingleText}>
            <div className={styles.footerTopSideSingle}>Usluge</div>
            <div>Popravka curenja</div>
            <div>zamena cevi</div>
            <div>ugradnja sanitarija</div>
            <div>otčepljenje odvoda</div>
          </div>
          <div className={styles.footerTopSideSingleText}>
            <div className={styles.footerTopSideSingle}>Adrese</div>
            <div>Sanitehnik Novi Sad</div>
            <div>Plumber Novi Sad</div>
            <div>Vodoinstalateri Beograd</div>
            <div>Pravna Lica - Beograd</div>
          </div>
        </div>

        <div className={styles.footerBottomSide}>
          <div className={`${styles.footerLogo} ${bebas_neue.className}`}>
            VODOINSTALATER
          </div>
          <div className={styles.footerLogoText}>
            DISCOVER WHAT BETTER FEELS LIKE{" "}
          </div>
          <div className={styles.footerStatementsText}>
            Statements made on this website have not been evaluated by any
            regulatory authorities. These products and services are not intended
            to diagnose, treat, cure, or prevent any issues or problems.
            Information provided by this website or this company is not a
            substitute for professional advice. Always seek the advice of
            qualified professionals regarding any questions or concerns you may
            have. | © [Your Company Name], Inc. 2013–2024
          </div>
          <div className={styles.footerBottomPhrases}>
            <div>PRIVACY POLICY</div>
            <div>TERMS</div>
            <div>SELLER POLICY</div>
            <div>ACCESSIBILITY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
