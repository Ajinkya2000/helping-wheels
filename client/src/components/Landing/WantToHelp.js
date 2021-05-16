import React from "react";
import navigator from "../../images/navigator.svg";

import styles from "./WantToHelp.module.css";

function WantToHelp() {
  return (
    <>
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
          <path d="M0 0 C 50 100 80 100 100 0 Z" />
        </svg>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textWrap}>
          <h2>If you wanna help out...</h2>
          <p>
            Register yourself as volunteers and begin your journey as a life
            saviour of countless lives. We will ping you whenever there's
            someone around you needs your help.
          </p>
        </div>
        <div className={styles.imgWrapper}>
          <img src={navigator} alt="navigator" />
        </div>
      </div>
    </>
  );
}

export default WantToHelp;
