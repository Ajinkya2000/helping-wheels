import React, { useEffect } from "react";

import styles from "./index.module.css";

function VolunteerLogin() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formDiv}>
        <h2>Volunteer Login</h2>
        <form action="">
          <div className={styles.formRow}>
            <p>Email</p>
            <input className={styles.input} type="email" />
          </div>
          <div className={styles.formRow}>
            <p>Password</p>
            <input className={styles.input} type="password" />
          </div>

          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VolunteerLogin;
