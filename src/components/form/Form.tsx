import React from "react";
import styles from "./Form.module.css";

const Form: React.FC = () => {
  return (
    <section>
      <div>
        <img className={styles.image} src="#" alt="#" />
      </div>
      <form>
        <h2 className={styles.title}>Request Callback</h2>
        <input placeholder="Enter your name" />
        <input placeholder="Enter email*" />
        <button type="submit" className={styles.from__button}></button>
      </form>
    </section>
  );
};

export default Form;
