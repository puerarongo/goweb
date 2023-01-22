import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "./logo/Logo";
import Navigation from "./navigation/Navigation";
import Media from "react-media";

const Header: React.FC = () => {
  const [scroll, setScroll] = useState<number>(0);

  document.onscroll = () => {
    let scrollValue = window.scrollY;
    setScroll(scrollValue);
  };

  return (
    <>
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
                <header
                  className={
                    scroll > 120 ? styles.header__fixed : styles.header
                  }
                >
                  <div className={styles.header__container}>
                    <Logo />
                    <Navigation />
                  </div>
                </header>
              </>
            )}
            {matches.large && (
              <>
                <header
                  className={scroll > 70 ? styles.header__fixed : styles.header}
                >
                  <div className={styles.header__container}>
                    <Logo />
                    <Navigation />
                  </div>
                </header>
              </>
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default Header;
