import React, { useState } from "react";
import Geocoder from "react-mapbox-gl-geocoder";
import { Scrollbars } from "react-custom-scrollbars";

import VolunteerLocation from "./VolunteerLocation";
import styles from "./index.module.css";

function RegisterVolunteer() {
  // const [email, setEmail] = useState("");
  // const [otp, setOtp] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [vehicle, setVehicle] = useState("");
  // const [vehicleNumber, setVehicleNumber] = useState("");
  const [viewport, setViewport] = useState({
    latitude: 45.50884,
    longitude: -73.58781,
    zoom: 15,
  });

  const onSelected = (viewport, item) => {
    setViewport(viewport);
  };

  const params = {
    country: "in",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formDiv}>
        <h2>Register As a Volunteer</h2>
        <Scrollbars
          style={{
            width: "100%",
            height: "80vh",
            borderRadius: "30px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
          }}
        >
          <form action="">
            <div>
              <p>Email</p>
              <input type="email" required />
            </div>
            <button className={styles.verify}>Verify Email</button>
            <div>
              <p>OTP</p>
              <input type="text" required />
            </div>
            <div>
              <p>Set a Password</p>
              <input type="password" required />
            </div>
            <div>
              <p>Name</p>
              <input type="text" required />
            </div>
            <div>
              <p>Mobile Number</p>
              <input type="text" required />
            </div>

            <div>
              <p>Vehicle Type</p>
              <input type="text" required />
            </div>

            <div>
              <p>Vehicle Number</p>
              <input type="text" required />
            </div>

            <div>
              <p>Address</p>
              <textarea type="email" required />
            </div>

            <p>Type in your location or drag the marker in the map</p>
            <Geocoder
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              onSelected={onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value=""
              queryParams={params}
            />

            <button type="submit">Submit</button>
          </form>
        </Scrollbars>
      </div>
      <div className={styles.map}>
        <VolunteerLocation viewport={viewport} setViewPort={setViewport} />
      </div>
    </div>
  );
}

export default RegisterVolunteer;
