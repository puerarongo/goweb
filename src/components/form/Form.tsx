import React from "react";
import styles from "./Form.module.css";

const Form: React.FC = () => {
  return (
    <section className={styles.section__form}>
      <div className={styles.image}></div>
      <form className={styles.form}>
        <div className={styles.container__into}>
          <h2 className={styles.title}>Request Callback</h2>
          <input className={styles.input__name} placeholder="Enter your name" />
          <input className={styles.input__email} placeholder="Enter email*" />
          <button type="submit" className={styles.from__button}>
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
