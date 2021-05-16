import React from "react";
import styles from "./overlay.module.css";

const Overlay = ({ setIsOpen, volunteerDetail }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.detailHeading}>Volunteer details</h2>
        <div className={styles.form}>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-user"></i>
            </span>
            {volunteerDetail.name}
          </div>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-phone-alt"></i>
            </span>
            {volunteerDetail.phone}
          </div>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-car-side"></i>
            </span>
            {volunteerDetail.vehicle_name}
          </div>
          <div className={styles.formRow}>
            <span className={styles.formIcon}>
              <i className="fas fa-hashtag"></i>
            </span>
            {volunteerDetail.vehicle_number}
          </div>
          <span className={styles.addressText}>Address</span>
          <div className={styles.address}>
            <p>{volunteerDetail.address}</p>
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
