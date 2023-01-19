import React from "react";
import styles from "./Gallery.module.css";

const Gallery: React.FC = () => {
  return (
    <section>
      <h3 className={styles.subtitle}>This is what we do</h3>
      <h2 className={styles.title}>Business cases</h2>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Architecto,sapiente!
      </p>
      <ul className={styles.gallery__list}>
        <li className={styles.gallery__item}>
          <img className={styles.image} src="#" alt="#" />
        </li>
        <li className={styles.gallery__item}>
          <img className={styles.image} src="#" alt="#" />
        </li>
        <li className={styles.gallery__item}>
          <img className={styles.image} src="#" alt="#" />
        </li>
        <li className={styles.gallery__item}>
          <img className={styles.image} src="#" alt="#" />
        </li>
        <li className={styles.gallery__item}>
          <img className={styles.image} src="#" alt="#" />
        </li>
        <li className={styles.gallery__item}>
          <img className={styles.image} src="#" alt="#" />
        </li>
      </ul>
    </section>
  );
};

export default Gallery;
