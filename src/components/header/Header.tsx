import React from "react";
import styles from "./Header.module.css";
import svgPath from "../../services/svgPath";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.logo__container}>
          <svg className={styles.logo__logo}>
            <use href={svgPath.logo + "#logo"}></use>
          </svg>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.into__link} href="#Home">
              Home
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.into__link} href="#About">
              About
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.into__link} href="#Cases">
              Cases
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.into__link} href="#Blog">
              Blog
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.into__link} href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
