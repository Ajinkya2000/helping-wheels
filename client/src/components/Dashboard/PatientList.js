import React from "react";
import styles from "./Dashboard.module.css";

const PatientList = () => {
  const fakePatients = [
    {
      id: 1,
      name: "Patient 1",
      address: "Patient address khsafdak aksjdhgasdk jhg jksadhfasdh"
    },
    {
      id: 2,
      name: "Patient 2",
      address: "Patient address khsafdak aksjdhgasdk jhg jksadhfasdh"
    },
    {
      id: 3,
      name: "Patient 3",
      address: "Patient address khsafdak aksjdhgasdk jhg jksadhfasdh"
    },
    {
      id: 4,
      name: "Patient 4",
      address: "Patient address khsafdak aksjdhgasdk jhg jksadhfasdh"
    },
    {
      id: 5,
      name: "Patient 5",
      address: "Patient address khsafdak aksjdhgasdk jhg jksadhfasdh"
    },
  ];

  const renderedPatients = fakePatients.map((patient) => {
    return (
      <div className={styles.listRow}>
        <p className={styles.patientName}>{patient.name}</p>
        <p className={styles.patientAddress}>{patient.address}</p>
        <div className={styles.acceptButton}>
          <h3>Accept</h3>
        </div>
      </div>
    );
  })

  return (
    <div className={styles.patientListContainer}>
      <h2 className={styles.listHead}>Patients near you: </h2>
      {renderedPatients}
    </div>
  );
};

export default PatientList;
