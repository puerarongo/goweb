import React from "react";
import styles from "./Information.module.css";

const Information: React.FC = () => {
  return (
    <section className={styles.information__section} id="about">
      <div className={styles.image}></div>
      <div className={styles.container__information}>
        <h3 className={styles.subtitle}>What you are looking for</h3>
        <h2 className={styles.title}>We provide bespoke solutions</h2>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={styles.button}>
          Read More
        </button>
      </div>
    </section>
  );
};

export default Information;
