import React from "react";
import stylesInfo from "../about/About.module.css";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container__blog}>
        <p className={stylesInfo.subtitle}>April 16 2020</p>
        <h2 className={stylesInfo.title}>Blog Post One</h2>
        <p className={stylesInfo.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={styles.button}>
          Read Our Blog
        </button>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default Blog;
