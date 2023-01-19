import React from "react";
import styles from "./Team.module.css";
import { teamImages } from "../../services/imgPath";

const Team: React.FC = () => {
  return (
    <section className={styles.team__container}>
      <h3 className={styles.subtitle}>Who we are</h3>
      <h2 className={styles.title}>Our Professional Team</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={styles.team__list}>
        <li className={styles.team__item}>
          <img className={styles.image} src={teamImages.team1} alt="John Doe" />
          <h3 className={styles.name}>John Doe</h3>
          <p className={styles.profession}>President</p>
        </li>
        <li className={styles.team__item}>
          <img className={styles.image} src={teamImages.team2} alt="Jane Doe" />
          <h3 className={styles.name}>Jane Doe</h3>
          <p className={styles.profession}>Vice President</p>
        </li>
        <li className={styles.team__item}>
          <img
            className={styles.image}
            src={teamImages.team3}
            alt="Steve Smith"
          />
          <h3 className={styles.name}>Steve Smith</h3>
          <p className={styles.profession}>Marketing Head</p>
        </li>
      </ul>
    </section>
  );
};

export default Team;
