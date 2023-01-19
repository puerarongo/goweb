import React from "react";
import stylesInfo from "../information/Information.module.css";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.container__blog}>
        <p className={stylesInfo.subtitle}>April 16 2020</p>
        <h2 className={stylesInfo.title}>Blog Post One</h2>
        <p className={stylesInfo.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={stylesInfo.button}>
          Read Our Blog
        </button>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default Blog;
