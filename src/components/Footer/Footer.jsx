import React from "react";
import * as styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.legal}>
        <span>© 2018 BaseballCloud</span>
        <NavLink to="/legal/terms">Terms of Service</NavLink>
        <NavLink to="/legal/privacy">Privacy Policy</NavLink>
      </div>
      <div className={styles.socialMedia}>
        <a
          href="https://baseballcloud.blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          href="http://twitter.com/baseballcloudus"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="http://www.instagram.com/baseballcloudus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="http://www.facebook.com/BaseballCloudUS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
