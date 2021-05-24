import React, { useState } from "react";
import { useHistory } from "react-router";
import Geocoder from "react-mapbox-gl-geocoder";
import { Scrollbars } from "react-custom-scrollbars";

import helpingwheels from "../../api/helpingWheels";
import VolunteerLocation from "./VolunteerLocation";
import styles from "./index.module.css";

function RegisterVolunteer() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("")
  const [vehicle_name, setVehicle_name] = useState("")
  const [vehicle_number, setVehicle_number] = useState("")
  const [address, setAddress] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

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

  const handleEmailVerification = async (e) => {
    e.preventDefault();
    try {
      const res = await helpingwheels.get(`send-otp/${email}/`);
      if(res.status !== 200 ) {
        throw new Error("Unable to send otp!");
      }
    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await helpingwheels.post("register/", {
        email, name, phone, vehicle_name, vehicle_number, address, otp, password, latitude: viewport.latitude, longitude: viewport.longitude
      });

      if(res.status === 201) {
        window.localStorage.setItem("token", res.data.token);
        history.push("/dashboard");
      } else {
        throw new Error("Failed to register!");
      }
    } catch(err) {
      console.log(err);
    }
  }

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
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button className={styles.verify} onClick={(e) => handleEmailVerification(e)}>Verify Email</button>
            <div>
              <p>OTP</p>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </div>
            <div>
              <p>Password</p>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
              <p>Name</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <p>Mobile Number</p>
              <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>

            <div>
              <p>Vehicle Type</p>
              <input type="text" value={vehicle_name} onChange={(e) => setVehicle_name(e.target.value)} required />
            </div>

            <div>
              <p>Vehicle Number</p>
              <input type="text" value={vehicle_number} onChange={(e) => setVehicle_number(e.target.value)} required />
            </div>

            <div>
              <p>Address</p>
              <textarea type="email" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>

            <p>Type in your location or drag the marker in the map</p>
            <Geocoder
              mapboxApiAccessToken="pk.eyJ1IjoiYWppbmt5YTcyMDYiLCJhIjoiY2tvcmV4bjdqMTJveTJvc3p5aHp2cDNxcCJ9.Y1u-DV5tH9Se1Hvcq2Goug"
              onSelected={onSelected}
              viewport={viewport}
              hideOnSelect={true}
              value=""
              queryParams={params}
            />

            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
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
