import React from "react";
import styles from "./Gallery.module.css";
import imageGalleryArr from "../../services/imageGalleryArr";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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
          {imageGalleryArr.length > 0 &&
            imageGalleryArr.map((elem, index) => {
              return (
                <li
                  key={index}
                  className={styles.gallery__item}
                  data-src={elem.jpg2}
                >
                  <a href={elem.jpg2}>
                    <picture>
                      <source
                        media="(min-width: 320px)"
                        srcSet={elem.webp + " 1x, " + elem.webp2 + " 2x"}
                        type="image/webp"
                      ></source>
                      <source
                        media="(min-width: 320px)"
                        srcSet={elem.jpg + " 1x, " + elem.jpg2 + " 2x"}
                      ></source>

                      <img
                        className={styles.image}
                        src={elem.jpg}
                        alt={"gallery" + (index + 1)}
                      />
                    </picture>
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
