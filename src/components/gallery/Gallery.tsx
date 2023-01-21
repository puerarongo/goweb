import React from "react";
import styles from "./Gallery.module.css";
import { galleryArrObj } from "../../services/imgPath";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

console.log(galleryArrObj);

const Gallery: React.FC = () => {
  return (
    <section className={styles.gallery} id="cases">
      <h3 className={styles.subtitle}>This is what we do</h3>
      <h2 className={styles.title}>Business cases</h2>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Architecto,sapiente!
      </p>
      <ul className={styles.gallery__list}>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames={styles.lightbox}
        >
          {galleryArrObj.length > 0 &&
            galleryArrObj.map((elem, index) => {
              return (
                <li
                  key={index}
                  className={styles.gallery__item}
                  data-src={elem}
                >
                  <a href={elem}>
                    <img
                      className={styles.image}
                      src={elem}
                      alt={"gallery" + (index + 1)}
                    />
                  </a>
                </li>
              );
            })}
        </LightGallery>
      </ul>
    </section>
  );
};

export default Gallery;
