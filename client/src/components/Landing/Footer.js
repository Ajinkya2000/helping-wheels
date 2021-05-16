import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <svg
          className={styles.curve}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.icons}>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-reddit"></i>
        </div>
        <div>
          <p>Made by CodeRux</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
