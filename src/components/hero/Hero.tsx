import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section>
      <div className={styles.container}>
        <h1>The Sky Is The Limit</h1>
        <h2>We provide world class financial assistance</h2>
        <button type="button" className={styles.hero__button}>
          <svg className={styles.hero__svg}>
            <use href="$"></use>
          </svg>
          <p>Read More</p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
