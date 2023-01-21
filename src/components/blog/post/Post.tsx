import React from "react";
import stylesAbout from "../../about/About.module.css";
import styles from "../Blog.module.css";

const Post: React.FC = () => {
  return (
    <div className={styles.container__blog}>
      <p className={stylesAbout.subtitle}>April 16 2020</p>
      <h2 className={stylesAbout.title}>Blog Post One</h2>
      <p className={stylesAbout.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
        ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
        illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste
        maiores deleniti?
      </p>
      <button type="button" className={styles.button}>
        Read Our Blog
      </button>
    </div>
  );
};

export default Post;
