import { bebas_neue } from "@/app/font";
import styles from "./PhoneFlag.module.css";
import { PHONE_NUMBER } from "@/contants";

export default function PhoneFlag() {
  return (
    <div className={`${styles.flagContainer} ${bebas_neue.className}`}>
      <a href={`tel:${PHONE_NUMBER}`} className={styles.phoneNumber}>
        062/825-3911
      </a>
    </div>
  );
}
