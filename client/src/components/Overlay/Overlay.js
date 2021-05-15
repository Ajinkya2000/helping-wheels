import React from "react";
import styles from "./overlay.module.css";

const Overlay = ({ setIsOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.detailHeading}>Volunteer details</h2>
        <div className={styles.form}>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-user"></i>
            </span>
            Sushant Pandey
          </div>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-phone-alt"></i>
            </span>
            9988985487
          </div>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-car-side"></i>
            </span>
            SUV
          </div>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-hashtag"></i>
            </span>
            CG16AS1234
          </div>
          <span className={styles.addressText}>Address</span>
          <div className={styles.address}>
            <p>asd asdj, pi 1243 ,SD</p>
          </div>
        </div>
        <div className={styles.closeDetail} onClick={() => setIsOpen(false)}>
          <i className="fas fa-times-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default Overlay;