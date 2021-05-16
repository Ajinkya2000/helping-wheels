import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import styles from "./index.module.css";

function PatientDetails() {
  const [patient_name, setPatient_name] = useState("");
  const [patient_phone, setPatient_phone] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (window.localStorage.getItem("phone")) {
      history.push("/patient");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.formDiv}>
        <h2>Just a tiny form!</h2>
        <form action="">
          <div className={styles.formRow}>
            <p>Name</p>
            <input className={styles.input} value={patient_name} onChange={(newName) => setPatient_name(newName)} type="text" />
          </div>
          <div className={styles.formRow}>
            <p>Mobile No</p>
            <input className={styles.input} value={patient_phone} onChange={(newPhone) => setPatient_phone(newPhone)} type="text" />
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
