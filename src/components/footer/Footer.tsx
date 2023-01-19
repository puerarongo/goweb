import React from "react";
import styles from "./Footer.module.css";
import svgPath from "../../services/svgPath";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.svg__list}>
        <li className={styles.svg__item}>
          <svg className={styles.svg__facebook}>
            <use href={svgPath.facebook + "#facebook"}></use>
          </svg>
        </li>
        <li className={styles.svg__item}>
          <svg className={styles.svg__twitter}>
            <use href={svgPath.twitter + "#twitter"}></use>
          </svg>
        </li>
        <li className={styles.svg__item}>
          <svg className={styles.svg__youTube}>
            <use href={svgPath.youTube + "#youTube"}></use>
          </svg>
        </li>
        <li className={styles.svg__item}>
          <svg className={styles.svg__linkedIn}>
            <use href={svgPath.linkedIn + "#linkedIn"}></use>
          </svg>
        </li>
      </ul>
      <p className={styles.footer__text}>Copyright © 2021 - FinanceLedger</p>
    </footer>
  );
};

export default Footer;
