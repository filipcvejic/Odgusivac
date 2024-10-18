"use client";

import React, { useState } from "react";
import styles from "./HamburgerMenu.module.css";
import { bebas_neue } from "@/app/font";
import { HamburgerMenuProps } from "./HamburgerMenuProps";
import { EMAIL, PHONE_HREF_LOCATION, PHONE_NUMBER } from "@/contants";
import gtag_report_conversion from "@/helpers/gtagReportConversion";

export default function HamburgerMenu({ navLinks }: HamburgerMenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  const closeIcon = (
    <svg
      onClick={() => setIsOpened(false)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      width={50}
      height={50}
      aria-label="Close menu"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );

  const openIcon = (
    <svg
      onClick={() => setIsOpened((prevValue) => !prevValue)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
      height={45}
      width={45}
      aria-label="Open menu"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );

  return (
    <>
      {openIcon}
      <div className={`${styles.menuWrapper} ${isOpened ? styles.open : ""}`}>
        <div className={`${styles.menuHeading} ${styles.menuContainer}`}>
          <p className={`${styles.menuLogo} ${bebas_neue.className}`}>
            Vodoinstalater
          </p>
          {closeIcon}
        </div>
        <p className={`${styles.menuMail} ${styles.menuContainer}`}>{EMAIL}</p>
        <div className={styles.menuPhoneNumberWrapper}>
          <div className={`${styles.menuPhoneNumber} ${styles.menuContainer}`}>
            <p>{PHONE_NUMBER}</p>
            <a
              href={PHONE_HREF_LOCATION}
              onClick={() => gtag_report_conversion(PHONE_HREF_LOCATION)}
            >
              Pozovite
            </a>
          </div>
        </div>

        <ul className={`${styles.menuList} ${styles.menuContainer}`}>
          {navLinks.map((navLink, index) => (
            <li className={styles.menuItem} key={index}>
              <a href={`#${navLink.href}`} onClick={() => setIsOpened(false)}>
                <div className={styles.menuLabel}>
                  {navLink.icon}
                  <p>{navLink.label}</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#00ADB5"
                  className="size-6"
                  height={35}
                  width={35}
                  aria-label="Navigate to section"
                >
                  <path strokeLinecap="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
