import React from "react";
import styles from "../Header.module.css";
import { Link } from "react-scroll";

const Navigation: React.FC = () => {
  return (
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
  );
};

export default Navigation;
