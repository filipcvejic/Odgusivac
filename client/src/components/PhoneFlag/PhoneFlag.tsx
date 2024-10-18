"use client";

import { bebas_neue } from "@/app/font";
import styles from "./PhoneFlag.module.css";
import { PHONE_HREF_LOCATION, PHONE_NUMBER } from "@/contants";
import gtag_report_conversion from "@/helpers/gtagReportConversion";

export default function PhoneFlag() {
  return (
    <div className={`${styles.flagContainer} ${bebas_neue.className}`}>
      <a
        href={PHONE_HREF_LOCATION}
        onClick={() => gtag_report_conversion(PHONE_HREF_LOCATION)}
        className={styles.phoneNumber}
      >
        {PHONE_NUMBER}
      </a>
    </div>
  );
}
