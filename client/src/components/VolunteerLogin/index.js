import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./index.module.css";

import helpingWheels from "../../api/helpingWheels";

function VolunteerLogin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hi");
    try {
      const res = await helpingWheels.post("login/", { email, password });
      if (res.status === 200) {
        window.localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
      } else {
        throw new Error("Unable to Login");
      }
    } catch (e) {
      console.log(e);
    }
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
