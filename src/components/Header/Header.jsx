import React from "react";
import * as styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import LogoSvg from "../SvgComponents/logoSvg";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <NavLink className={styles.logoLink} to="/">
          <LogoSvg />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
