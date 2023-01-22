import React from "react";
import styles from "../Header.module.css";
import svgPath from "../../../services/svgPath";

const Logo: React.FC = () => {
  return (
    <svg className={styles.logo__logo}>
      <use href={svgPath.logo + "#logo"}></use>
    </svg>
  );
};

export default Logo;
