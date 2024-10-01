import { montserrat } from "@/app/font";
import styles from "./Experiences.module.css";

export default function Experiences() {
  return (
    <div className={`${styles.experiencesWrapper} ${montserrat.className}`}>
      <div className={`${styles.experiencesContent} container`}>
        <h3 className={styles.experiencesHeading}>ISKUSTVA KORISNIKA</h3>
        <div></div>
      </div>
    </div>
  );
}
