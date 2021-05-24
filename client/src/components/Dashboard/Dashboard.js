import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import Toggle from "react-toggle";
import styles from "./Dashboard.module.css";
import "./Dashboard.css";
import PatientList from "./PatientList";
import profile from "../../images/profile.svg";

import { Context as PatientContext } from "../../context/patientContext";

const Dashboard = () => {
  const history = useHistory();
  const { state } = useContext(PatientContext);
  const { volunteer } = state;
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      history.push("/login");
    }
  }, []);

  // eslint-disable-next-line
  const [isAvailable, setIsAvailable] = useState(volunteer.isAvailable);
  // eslint-disable-next-line
  const [name, setName] = useState(volunteer.name);
  // eslint-disable-next-line
  const [phone, setPhone] = useState(volunteer.phone);
  // eslint-disable-next-line
  const [vehicle_name, setVehicle_name] = useState(volunteer.vehicle_name);
  // eslint-disable-next-line
  const [vehicle_number, setVehicle_number] = useState(
    volunteer.vehicle_number
  );
  // eslint-disable-next-line
  const [address, setAddress] = useState(volunteer.address);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.head}>Dashboard</h1>
        <div className={styles.detail}>
          <div className={styles.detailLeft}>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Name</span>
              {name}
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Mobile number</span>
              {phone}
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Vehicle type</span>
              {vehicle_name}
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Vehicle number</span>
              {vehicle_number}
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailField}>Address</span>
              {address}
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
