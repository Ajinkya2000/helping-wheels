import React, { useEffect } from "react";
import { useHistory } from "react-router";

import styles from "./index.module.css";

function PatientDetails() {
  const history = useHistory();
  useEffect(() => {
    if (window.localStorage.getItem("phone")) {
      history.push("/");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.formDiv}>
        <h2>Just a tiny form!</h2>
        <form action="">
          <div className={styles.formRow}>
            <p>Name</p>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.formRow}>
            <p>Mobile No</p>
            <input className={styles.input} type="text" />
          </div>

          <div>
            <button type="submit">Get Help!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientDetails;
