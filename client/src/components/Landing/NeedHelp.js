import React from "react";
import injured from "../../images/injured.svg";

import styles from "./NeedHelp.module.css";

function NeedHelp() {
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
          <path d="M0 100 C 20 0 50 0 100 100 Z" />
        </svg>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={injured} alt="injured" />
        </div>
        <div className={styles.textWrap}>
          <h2>If you need help...</h2>
          <p>
            Reach out to Helping Wheels whenever you are in medical emergency
            that needs immediate hostipal care. Out volunteers throughout your
            neighbourhood are ready to lend their vehicles and drive you to the
            nearest care center.
          </p>
        </div>
      </div>
    </>
  );
}

export default NeedHelp;
