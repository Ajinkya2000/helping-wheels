import React, { useState } from "react";
import Toggle from "react-toggle";
import styles from "./Dashboard.module.css";
import "./Dashboard.css";
import PatientList from "./PatientList";
// import "react-toggle/style.css"
import profile from "../../images/profile.svg";

const Dashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.head}>Dashboard</h1>
        <div className={styles.detail}>
          <div className={styles.detailLeft}>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Name</span>
              Sushant Pandey
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Mobile number</span>
              9988985487
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Vehicle type</span>
              SUV
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Vehicle number</span>
              CG16AS1234
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Address</span>
              xyz colony, near asd temple, pin. 112233
            </div>
            <div className={styles.detailCheck}>
              <Toggle
                id="availability-status"
                defaultChecked={isAvailable}
                onChange={() => setIsAvailable(!isAvailable)}
              />
              <label
                className={styles.detailCheckLabel}
                htmlFor="availability-status"
              >
                Are you available?
              </label>
            </div>
          </div>
          <div className={styles.detailRight}>
            <img src={profile} alt="Profile" />
          </div>
        </div>
        <PatientList />
      </div>
    </div>
  );
};

export default Dashboard;
