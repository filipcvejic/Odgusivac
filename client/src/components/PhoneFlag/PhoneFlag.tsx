"use client";

import { bebas_neue } from "@/app/font";
import styles from "./PhoneFlag.module.css";
import { PHONE_NUMBER } from "@/contants";
import gtag_report_conversion from "@/helpers/gtagReportConversion";

export default function PhoneFlag() {
  return (
    <div className={`${styles.flagContainer} ${bebas_neue.className}`}>
      <a
        onClick={() => gtag_report_conversion(`tel:${PHONE_NUMBER}`)}
        className={styles.phoneNumber}
      >
        {PHONE_NUMBER}
      </a>
    </div>
  );
}
