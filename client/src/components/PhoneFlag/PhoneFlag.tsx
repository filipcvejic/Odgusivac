import { bebas_neue } from "@/app/font";
import styles from "./PhoneFlag.module.css";

export default function PhoneFlag() {
  return (
    <div className={`${styles.flagContainer} ${bebas_neue.className}`}>
      <a href="tel:+381628253911" className={styles.phoneNumber}>
        062/825-3911
      </a>
    </div>
  );
}
