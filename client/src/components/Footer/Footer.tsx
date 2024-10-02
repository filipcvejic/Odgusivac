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
          Kontaktirajte nas
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
            Pošalji
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
            <div>PRIVATNOST POLITIKA</div>
            <div>USLOVI</div>
            <div>POLITIKA PRODAJE</div>
            <div>PRISTUPAČNOST</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
