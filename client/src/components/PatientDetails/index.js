import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import styles from "./index.module.css";

function PatientDetails() {
  const [patient_name, setPatient_name] = useState("");
  const [patient_phone, setPatient_phone] = useState("");
  const [patient_address, setPatient_address] = useState("")

  const history = useHistory();
  useEffect(() => {
    if (window.localStorage.getItem("patient_phone")) {
      history.push("/patient");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("patient_name", patient_name);
    window.localStorage.setItem("patient_phone", patient_phone);
    window.localStorage.setItem("patient_address", patient_address);
    history.push("/patient");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.formDiv}>
        <h2>Just a tiny form!</h2>
        <form action="">
          <div className={styles.formRow}>
            <p>Name</p>
            <input className={styles.input} value={patient_name} onChange={(e) => setPatient_name(e.target.value)} type="text" />
          </div>
          <div className={styles.formRow}>
            <p>Mobile No</p>
            <input className={styles.input} value={patient_phone} onChange={(e) => setPatient_phone(e.target.value)} type="text" />
          </div>
          <div className={styles.formRow}>
            <p>Address</p>
            <input className={styles.input} value={patient_address} onChange={(e) => setPatient_address(e.target.value)} type="text" />
          </div>
          <div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Get Help!</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientDetails;
