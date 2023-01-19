import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.svg__list}>
        <li className={styles.scg__item}>
          <svg>
            <use href="$"></use>
          </svg>
        </li>
        <li className={styles.scg__item}>
          <svg>
            <use href="$"></use>
          </svg>
        </li>
        <li className={styles.scg__item}>
          <svg>
            <use href="$"></use>
          </svg>
        </li>
        <li className={styles.scg__item}>
          <svg>
            <use href="$"></use>
          </svg>
        </li>
      </ul>
      <p className={styles.footer__text}>Copyright © 2021 - FinanceLedger</p>
    </header>
  );
};

export default Footer;
