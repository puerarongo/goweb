import React from "react";
import styles from "./Gallery.module.css";
import { galleryArr } from "../../services/imgPath";

const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <h3 className={styles.subtitle}>This is what we do</h3>
      <h2 className={styles.title}>Business cases</h2>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Architecto,sapiente!
      </p>
      <ul className={styles.gallery__list}>
        {galleryArr.length > 0 &&
          galleryArr.map((elem, index) => {
            return (
              <li key={index} className={styles.gallery__item}>
                <img
                  className={styles.image}
                  src={elem}
                  alt={"gallery" + index}
                />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Gallery;
