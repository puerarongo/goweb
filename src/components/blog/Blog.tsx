import React from "react";
import styles from "./Blog.module.css";

const Blog: React.FC = () => {
  return (
    <section>
      <div>
        <p className={styles.date}>April 16 2020</p>
        <h2 className={styles.title}>Blog Post One</h2>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={styles.button}>
          Read Our Blog
        </button>
      </div>
      <div>
        <img className={styles.image} src="#" alt="#" />
      </div>
    </section>
  );
};

export default Blog;
