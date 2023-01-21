import React from "react";
import { createPortal } from "react-dom";
import styles from "./Lightbox.module.css";
import svgPath from "../../../services/svgPath";

import { RemoveScroll } from "react-remove-scroll";

interface ILightbox {
  img: string;
  setTumbler: Function;
  clickLeft: Function;
  clickRight: Function;
}

const modalRoot: any = document.querySelector("#modal__root");

const Lightbox: React.FC<ILightbox> = ({
  img,
  setTumbler,
  clickLeft,
  clickRight,
}) => {
  const handleClick = (e: any) => {
    if (e.currentTarget === e.target) {
      console.log("!");
      setTumbler(false);
    }
  };

  return createPortal(
    <RemoveScroll>
      <div className={styles.overlay} onClick={handleClick}>
        <div className={styles.modal}>
          <button
            className={styles.button__left}
            type="button"
            onClick={() => clickLeft()}
          >
            <svg className={styles.svg__left}>
              <use href={svgPath.left + "#left"}></use>
            </svg>
          </button>
          <div className={styles.container}>
            <img className={styles.img} src={img} alt="" />
            <button
              className={styles.button__cross}
              type="button"
              onClick={handleClick}
            >
              <svg className={styles.svg__cross}>
                <use href={svgPath.cross + "#cross"}></use>
              </svg>
            </button>
          </div>
          <button
            className={styles.button__right}
            type="button"
            onClick={() => clickRight()}
          >
            <svg className={styles.svg__right}>
              <use href={svgPath.right + "#right"}></use>
            </svg>
          </button>
        </div>
      </div>
    </RemoveScroll>,
    modalRoot
  );
};

export default Lightbox;
