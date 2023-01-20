import React from "react";
import styles from "./Team.module.css";
import { teamImages } from "../../services/imgPath";
// svg
import stylesA from "../footer/Footer.module.css";
import svgPath from "../../services/svgPath";

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
          <div className={styles.img__thumb}>
            <img
              className={styles.image}
              src={teamImages.team1}
              alt="John Doe"
            />

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

          <h3 className={styles.name}>John Doe</h3>
          <p className={styles.profession}>President</p>
        </li>

        <li className={styles.team__item}>
          <div className={styles.img__thumb}>
            <img
              className={styles.image}
              src={teamImages.team2}
              alt="Jane Doe"
            />

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
          <h3 className={styles.name}>Jane Doe</h3>
          <p className={styles.profession}>Vice President</p>
        </li>
        <li className={styles.team__item}>
          <div className={styles.img__thumb}>
            <img
              className={styles.image}
              src={teamImages.team3}
              alt="Steve Smith"
            />

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
          <h3 className={styles.name}>Steve Smith</h3>
          <p className={styles.profession}>Marketing Head</p>
        </li>
      </ul>
    </section>
  );
};

export default Team;
