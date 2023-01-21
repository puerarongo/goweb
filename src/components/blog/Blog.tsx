import React from "react";
import styles from "./Blog.module.css";
import Post from "./post/Post";
import Media from "react-media";

const Blog: React.FC = () => {
  return (
    <section className={styles.blog} id="blog">
      <Media
        queries={{
          small: "(max-width: 767px)",
          large: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <>
            {matches.small && (
              <>
                <div className={styles.image}></div>
                <Post />
              </>
            )}
            {matches.large && (
              <>
                <Post />
                <div className={styles.image}></div>
              </>
            )}
          </>
        )}
      </Media>
    </section>
  );
};

export default Blog;
