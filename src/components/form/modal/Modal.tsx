import React from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

import { RemoveScroll } from "react-remove-scroll";

interface IModal {
  setTumbler: Function;
  name: string;
  email: string;
}

const modalRoot: any = document.querySelector("#modal__root");

const Modal: React.FC<IModal> = ({ setTumbler, name, email }) => {
  const handleClick = () => {
    setTumbler(false);
    window.scrollTo(0, 0);
  };

  return createPortal(
    <RemoveScroll>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <p className={styles.text__modal}>Your form submission:</p>
          <p className={styles.text__modal}>Name - {name}</p>
          <p className={styles.text__modal}>Email - {email}</p>
          <button
            className={styles.modal__button}
            type="button"
            onClick={handleClick}
          >
            Okay
          </button>
        </div>
      </div>
    </RemoveScroll>,
    modalRoot
  );
};

export default Modal;
