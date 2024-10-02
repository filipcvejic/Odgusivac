import Image from "next/image";
import styles from "./Header.module.css";
import { bebas_neue, montserrat } from "@/app/font";

export default function Header() {
  const navigationLinks = [
    {
      label: "Početna",
      href: "/",
      icon: "/icons/house-icon.svg",
      iconAlt: "House Icon",
    },
    {
      label: "Usluge",
      href: "/services",
      icon: "/icons/services-icon.svg",
      iconAlt: "Services Icon",
    },
    {
      label: "O Nama",
      href: "/about",
      icon: "/icons/user-icon.svg",
      iconAlt: "User Icon",
    },
    {
      label: "Iskustva",
      href: "/reviews",
      icon: "/icons/reviews-icon.svg",
      iconAlt: "Reviews Icon",
    },
  ];

  return (
    <header>
      <div className={styles.topHeaderWrapper}>
        <div className={`${styles.topHeaderContent} container`}>
          <div className={styles.contactInfo}>
            <span>kontakt@vodoinstalateri-novisad.rs | Laze Kostica 13</span>
          </div>
          <a
            href="tel:+381628188090"
            className={`${styles.contactPhone} ${montserrat.className}`}
          >
            <Image
              src="/icons/phone-icon.svg"
              alt="Phone Icon"
              width={24}
              height={24}
            />
            <span>+381 62 818 8090</span>
          </a>
        </div>
      </div>
      <div className={styles.mainHeaderWrapper}>
        <div className={`${styles.mainHeaderContent} container`}>
          <div className={`${styles.logo} ${bebas_neue.className}`}>
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={46}
              height={46}
            />
            <a href="#">odgušivač</a>
          </div>

          <nav className={styles.navBar}>
            <ul>
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={montserrat.className}>
                    <Image
                      src={link.icon}
                      alt={link.iconAlt}
                      width={20}
                      height={20}
                    />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
