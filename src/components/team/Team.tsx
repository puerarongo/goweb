import React from "react";
import styles from "./Team.module.css";

const Team: React.FC = () => {
  return (
    <section>
      <h3 className={styles.subtitle}>Who we are</h3>
      <h2 className={styles.title}>Our Professional Team</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={styles.team__list}>
        <li className={styles.team__item}>
          <img className={styles.image} src="#" alt="#" />
          <h3 className={styles.name}>John Doe</h3>
          <p className={styles.profession}>President</p>
        </li>
        <li className={styles.team__item}>
          <img className={styles.image} src="#" alt="#" />
          <h3 className={styles.name}>Jane Doe</h3>
          <p className={styles.profession}>Vice President</p>
        </li>
        <li className={styles.team__item}>
          <img className={styles.image} src="#" alt="#" />
          <h3 className={styles.name}>Steve Smith</h3>
          <p className={styles.profession}>Marketing Head</p>
        </li>
      </ul>
    </section>
  );
};

export default Team;
