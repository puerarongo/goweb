import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h2>Finance</h2>
        <h2>Ledger</h2>
      </div>
      <ul>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Cases</p>
        </li>
        <li>
          <p>Blog</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
