import React from "react";
import { Link } from 'react-router-dom';
import car from "../../images/car.svg";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.textWrap}>
        <div className={styles.container}>
          <h1 className={styles.heroText}>
            Get an emergency vehicle instantly
          </h1>
          <p className={styles.subhead}>
            For all medical situations. Faster than Ambulances.
          </p>
          <div className={styles.buttonWrapper}>
            <Link to="/patient-detail">
              <button>Find volunteers to help</button>
            </Link>
            <Link to="/register">
              <button>Register yourself as a Volunteer</button>
            </Link>
            <Link to="/login">
              <button>Volunteer Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.container} ${styles.imageWrap}`}>
        <img src={car} alt="hero" />
      </div>
    </div>
  );
}

export default Hero;
