import React, { useState } from "react";
import styles from "./Form.module.css";
import svgPath from "../../services/svgPath";
import { Formik } from "formik";
import formValidationSchema from "../../services/formValidationSchema";
import Modal from "./modal/Modal";

const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [tumbler, setTumbler] = useState<boolean>(false);

  return (
    <>
      {tumbler && <Modal setTumbler={setTumbler} name={name} email={email} />}
      <section className={styles.section__form} id="contact">
        <div className={styles.image}></div>
        <Formik
          initialValues={{
            name: name,
            email: email,
          }}
          validationSchema={formValidationSchema}
          onSubmit={(values) => {
            const { name, email } = values;
            values.name = "";
            values.email = "";
            setEmail(name);
            setName(email);
            setTumbler(true);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.container__into}>
                <h2 className={styles.title}>Request Callback</h2>
                <input
                  className={styles.input__name}
                  type="name"
                  placeholder="Enter your name"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.name && touched.name ? (
                  <div className={styles.error__container}>
                    <svg className={styles.worning__svg}>
                      <use href={svgPath.worning + "#worning"}></use>
                    </svg>
                    <p className={styles.error}>{`${errors.email}`}</p>
                  </div>
                ) : (
                  <span className={styles.default}></span>
                )}
                <input
                  type="email"
                  className={styles.input__email}
                  placeholder="Enter email*"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <div className={styles.error__container}>
                    <svg className={styles.worning__svg}>
                      <use href={svgPath.worning + "#worning"}></use>
                    </svg>
                    <p className={styles.error}>{`${errors.email}`}</p>
                  </div>
                ) : (
                  <span className={styles.default}></span>
                )}
                <button type="submit" className={styles.from__button}>
                  Send
                </button>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Form;
