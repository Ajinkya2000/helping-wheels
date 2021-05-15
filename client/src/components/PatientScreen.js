import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import styles from "./PatientScreen.module.css";

const PatientScreen = () => {
  const [viewport, setViewport] = useState({
    latitude: 27.1751,
    longitude: 78.0421,
    width: "100vw",
    height: "100vh",
    zoom: 15,
  });

  const fakeMarkers = [
    {
      id: 1,
      latitude: 27.2751,
      longitude: 78.0421,
    },
    {
      id: 2,
      latitude: 27.1851,
      longitude: 78.0421,
    },
    {
      id: 3,
      latitude: 27.3151,
      longitude: 78.0421,
    },
    {
      id: 4,
      latitude: 27.1051,
      longitude: 78.0421,
    },
  ];

  const renderMarkers = fakeMarkers.map((fm) => {
    return (
      <Marker latitude = {fm.latitude} longitude = {fm.longitude} key={fm.id} >
        <button>Click me</button>
      </Marker>
    );
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
      ></ReactMapGL>
      <div className={styles.emergencyButton}>
        <h2>Emergency</h2>
      </div>
    </div>
  );
};

export default PatientScreen;
