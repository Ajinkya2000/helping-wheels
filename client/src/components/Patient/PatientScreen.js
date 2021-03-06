import React, { useState, useEffect, useRef, useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import mapboxgl from "mapbox-gl";

// Context Imports
import { Context as PatientContext } from "../../context/patientContext";

// Components Imports
import Overlay from "../Overlay/Overlay";
import ReverseGeocoder from "./ReverseGeocoder";
import styles from "./PatientScreen.module.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
// eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = "pk.eyJ1IjoiYWppbmt5YTcyMDYiLCJhIjoiY2tvcmV4bjdqMTJveTJvc3p5aHp2cDNxcCJ9.Y1u-DV5tH9Se1Hvcq2Goug";

const PatientScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [volunteerDetail, setVolunteerDetail] = useState(null);
  const [patient, setPatient] = useState({});

  const {
    getVolunteers,
    sendEmail,
    state: patientState,
  } = useContext(PatientContext);

  const mapRef = useRef();
  const [viewport, setViewport] = useState({
    latitude: 27.1751,
    longitude: 78.0421,
    width: "100vw",
    height: "100vh",
    zoom: 13,
  });

  const [cords, setCords] = useState({
    latitude: 27.1751,
    longitude: 78.0421,
  });

  const options = {
    enableHighAccuracy: true,
  };

  const success = (pos) => {
    setCords({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
    setViewport({
      ...viewport,
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
  };

  const error = (err) => {
    console.log(err);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
      getVolunteers(cords);
    } else {
      console.log("Denied");
    }
  }, []);

  useEffect(() => {
    const pName = localStorage.getItem("patient_name");
    const pPhone = localStorage.getItem("patient_phone");
    const pAddress = localStorage.getItem("patient_adderss");
    setPatient({ pName, pAddress, pPhone });
  }, []);

  const renderMarkers = patientState.volunteers.map((volunteer) => {
    return (
      <Marker
        latitude={volunteer.latitude}
        longitude={volunteer.longitude}
        key={volunteer.id}
      >
        <button
          className={styles.markerButton}
          onClick={() => {
            setIsOpen(true);
            setVolunteerDetail(volunteer);
          }}
        >
          <i className="fas fa-map-pin"></i>
        </button>
      </Marker>
    );
  });

  return (
    <div>
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYWppbmt5YTcyMDYiLCJhIjoiY2tvcmV4bjdqMTJveTJvc3p5aHp2cDNxcCJ9.Y1u-DV5tH9Se1Hvcq2Goug"
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {patientState.volunteers && renderMarkers}
        <Marker latitude={cords.latitude} longitude={cords.longitude}>
          <button
            className={styles.markerButton}
            onClick={() => setIsOpen(true)}
          >
            <i className="fas fa-map-pin"></i>
          </button>
        </Marker>
        <ReverseGeocoder
          viewport={viewport}
          setViewport={setViewport}
          mapRef={mapRef}
          value={cords}
        />
      </ReactMapGL>
      <div
        className={styles.emergencyButton}
        onClick={() => sendEmail(patientState.volunteers, patient)}
      >
        <h2>{!patientState.emailSent ? "Emergency" : "Help Coming"}</h2>
      </div>
      {isOpen && volunteerDetail && (
        <Overlay
          volunteerDetail={volunteerDetail}
          setIsOpen={(e) => setIsOpen(e)}
        />
      )}
    </div>
  );
};

export default PatientScreen;
