import React from "react";
import styles from "./Team.module.css";
import imageTeamArr from "../../services/imageTeamArr";
// svg
import stylesA from "../footer/Footer.module.css";
import svgPath from "../../services/svgPath";

const Team: React.FC = () => {
  return (
    <section className={styles.team__container} id="contact">
      <h3 className={styles.subtitle}>Who we are</h3>
      <h2 className={styles.title}>Our Professional Team</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!
      </p>
      <ul className={styles.team__list}>
        {imageTeamArr.length > 0 &&
          imageTeamArr.map((elem, index) => {
            return (
              <li className={styles.team__item} key={index}>
                <div className={styles.img__thumb}>
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
                      alt={elem.name}
                    />
                  </picture>

                  <div className={styles.list__container}>
                    <ul className={styles.svg__list}>
                      <li className={stylesA.svg__item}>
                        <svg className={stylesA.svg__facebook}>
                          <use href={svgPath.facebook + "#facebook"}></use>
                        </svg>
                      </li>
                      <li className={stylesA.svg__item}>
                        <svg className={stylesA.svg__twitter}>
                          <use href={svgPath.twitter + "#twitter"}></use>
                        </svg>
                      </li>
                      <li className={stylesA.svg__item}>
                        <svg className={stylesA.svg__youTube}>
                          <use href={svgPath.youTube + "#youTube"}></use>
                        </svg>
                      </li>
                      <li className={stylesA.svg__item}>
                        <svg className={stylesA.svg__linkedIn}>
                          <use href={svgPath.linkedIn + "#linkedIn"}></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className={styles.name}>{elem.name}</h3>
                <p className={styles.profession}>{elem.profession}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Team;
