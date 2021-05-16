import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import styles from "./index.module.css";
import { Context as PatientContext } from "../../context/patientContext";

function VolunteerLogin() {
  const { login } = useContext(PatientContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password }, () => {
      history.push("/dashboard");
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.formDiv}>
        <h2>Volunteer Login</h2>
        <form action="">
          <div className={styles.formRow}>
            <p>Email</p>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formRow}>
            <p>Password</p>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" onClick={(e) => handleSubmit(e)}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VolunteerLogin;
