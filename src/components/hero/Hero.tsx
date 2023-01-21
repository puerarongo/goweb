import React from "react";
import styles from "./Hero.module.css";
import svgPath from "../../services/svgPath";

const Hero: React.FC = () => {
  return (
    <section className={styles.section__hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>The Sky Is The Limit</h1>
        <h2 className={styles.subtitle}>
          We provide world class financial assistance
        </h2>
        <button type="button" className={styles.hero__button}>
          <svg className={styles.hero__svg}>
            <use href={svgPath.arrow + "#arrow"}></use>
          </svg>
          <p className={styles.button__text}>Read More</p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
