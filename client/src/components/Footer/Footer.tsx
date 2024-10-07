import styles from "./Footer.module.css";
import { bebas_neue } from "@/app/font";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/contants";

const Footer = () => {
  return (
    <footer>
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
            <h3 className={styles.footerHeading}>Naše usluge</h3>
            <ul className={styles.footerList}>
              <li>Popravka curenja cevi</li>
              <li>Otčepljenje WC šolje i odvoda</li>
              <li>Odgušivanje kanalizacije</li>
              <li>Zamena vodovodnih cevi</li>
              <li>Popravka bojlera</li>
              <li>Ugradnja sanitarija</li>
            </ul>
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
          <p className={styles.footerLogoText}>OTKRIJTE ŠTA ZNAČI BOLJE</p>
          <p className={styles.footerStatementsText}>
            Naša kompanija se bavi različitim aspektima vodoinstalaterskih
            usluga, sa ciljem da zadovoljimo potrebe naših klijenata. Iako
            nudimo širok spektar rešenja, naš tim se posebno ponosi svojom
            brzinom i efikasnošću. Kontaktirajte nas za više informacija o našim
            uslugama.
          </p>
          <div className={styles.footerBottomPhrases}>
            <p>PRIVATNOST POLITIKA</p>
            <p>USLOVI</p>
            <p>POLITIKA PRODAJE</p>
            <p>PRISTUPAČNOST</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
