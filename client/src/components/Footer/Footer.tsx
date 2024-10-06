import React, { useState } from "react";
import styles from "./Footer.module.css";
import { bebas_neue } from "@/app/font";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/contants";

const Footer = () => {
  return (
    <div>
      <div className={styles.topFooterWrapper}>
        <div
          className={`${bebas_neue.className} ${styles.topFooterWrapperText}`}
        >
          Kontaktirajte nas
        </div>
        <div className={styles.topFooterWrapperContainer}>
          <input
            type="text"
            className={styles.topFooterWrapperInput}
            placeholder="Enter your e-mail"
          />
          <button
            className={`${bebas_neue.className} ${styles.topFooterWrapperButton}`}
          >
            Pošalji
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={`${styles.footerTopSide} container`}>
          <div className={styles.footerTopSideSingleText}>
            <div className={styles.footerTopSideSingle}>Pozovite majstora</div>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
            <div className={styles.footerTopSideSingleText}>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
          <div className={styles.footerTopSideSingleText}>
            <div className={styles.footerTopSideSingle}>Usluge</div>
            <div>Popravka curenja</div>
            <div>Zamena cevi</div>
            <div>Ugradnja sanitarija</div>
            <div>Otčepljenje odvoda</div>
          </div>
          <div className={styles.footerTopSideSingleText}>
            <div className={styles.footerTopSideSingle}>Adrese</div>
            <p>{ADDRESS}</p>
          </div>
        </div>

        <div className={styles.footerBottomSide}>
          <div className={`${styles.footerLogo} ${bebas_neue.className}`}>
            VODOINSTALATER
          </div>
          <div className={styles.footerLogoText}>OTKRIJTE ŠTA ZNAČI BOLJE</div>
          <div className={styles.footerStatementsText}>
            Izjave navedene na ovoj veb stranici nisu procenjene od strane
            regulatornih tela. Ovi proizvodi i usluge nisu namenjeni
            dijagnostikovanju, lečenju, izlečenju ili prevenciji bilo kakvih
            problema ili poteškoća. Informacije pružene ovom veb stranicom ili
            ovom kompanijom nisu zamena za profesionalni savet. Uvek se
            konsultujte sa kvalifikovanim stručnjacima u vezi sa bilo kakvim
            pitanjima ili nedoumicama koje imate. | © [Ime vaše kompanije], Inc.
            2013–2024
          </div>
          <div className={styles.footerBottomPhrases}>
            <a href="/privacy-policy">PRIVATNOST POLITIKA</a>
            <a href="/terms">USLOVI</a>
            <a href="/sales-policy">POLITIKA PRODAJE</a>
            <a href="/accessibility">PRISTUPAČNOST</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
