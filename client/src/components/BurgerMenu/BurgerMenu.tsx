"use client";

import React, { useState } from "react";
import styles from "./BurgerMenu.module.css";
import { bebas_neue } from "@/app/font";
import Image from "next/image";

const BurgerMenu = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <div className={styles.burgerMenuWrapper}>
      <div className={styles.burgerMenuTop}>
        <div className={`${styles.BurgerMenuLogo} ${bebas_neue.className}`}>
          Odgušivač
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
          width="62px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className={styles.BurgerMenuMail}>uros.n.nikolic123@gmail.com</div>
      <div className={styles.BurgerMenuPhoneWrapper}>
        <div className={styles.BurgerMenuPhone}>+38165/390-1520</div>
        <div></div>
      </div>
      <ul className={styles.BurgerMenuList}>
        <li className={styles.BurgerMenuItem}>Početna</li>
        <li className={styles.BurgerMenuItem}>Usluge</li>
        <li className={styles.BurgerMenuItem}>O Nama</li>
        <li className={styles.BurgerMenuItem}>Iskustva</li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
