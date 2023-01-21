import React, { useState } from "react";
import styles from "./Header.module.css";
import svgPath from "../../services/svgPath";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  document.onscroll = () => {
    let scrollValue = window.scrollY;
    setScroll(scrollValue);
  };

  return (
    <header className={scroll > 70 ? styles.header__fixed : styles.header}>
      <div className={styles.header__container}>
        <div className={styles.logo__container}>
          <svg className={styles.logo__logo}>
            <use href={svgPath.logo + "#logo"}></use>
          </svg>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link
              className={styles.into__link}
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.into__link}
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.into__link}
              to="cases"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Cases
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.into__link}
              to="blog"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Blog
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={styles.into__link}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
