import { bebas_neue } from "@/app/font";
import styles from "./PhoneFlag.module.css";

export default function PhoneFlag() {
  return (
    <div className={`${styles.flagContainer} ${bebas_neue.className}`}>
      <a href="tel:+381653901520" className={styles.phoneNumber}>
        065/390-1520
      </a>
    </div>
  );
}
