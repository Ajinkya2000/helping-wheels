import React, { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import { Context as PatientContext } from "../../context/patientContext";

import Overlay from "../Overlay/Overlay";
import styles from "./PatientScreen.module.css";

const PatientScreen = () => {
  const { getVolunteers } = useContext(PatientContext);

  const [viewport, setViewport] = useState({
    latitude: 27.1751,
    longitude: 78.0421,
    width: "100vw",
    height: "100vh",
    zoom: 15,
  });

  const [cords, setCords] = useState({
    latitude: 27.1751,
    longitude: 78.0421,
  });

  const options = {
    enableHighAccuracy: true,
  };

  const success = (pos) => {
    console.log(pos.coords.latitude, pos.coords.longitude);
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

  const [isOpen, setIsOpen] = useState(false);

  // const fakeMarkers = [
  //   {
  //     id: 1,
  //     latitude: 27.1751,
  //     longitude: 78.0431,
  //   },
  //   {
  //     id: 2,
  //     latitude: 27.1764,
  //     longitude: 78.0441,
  //   },
  //   {
  //     id: 3,
  //     latitude: 27.179,
  //     longitude: 78.0405,
  //   },
  //   {
  //     id: 4,
  //     latitude: 27.1781,
  //     longitude: 78.0421,
  //   },
  // ];

  // const renderMarkers = fakeMarkers.map((fm) => {
  //   return (
  //     <Marker latitude={fm.latitude} longitude={fm.longitude} key={fm.id}>
  //       <button className={styles.markerButton} onClick={() => setIsOpen(true)}>
  //         <i className="fas fa-map-pin"></i>
  //       </button>
  //     </Marker>
  //   );
  // });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {/* {renderMarkers} */}
        <Marker latitude={cords.latitude} longitude={cords.longitude}>
          <button
            className={styles.markerButton}
            onClick={() => setIsOpen(true)}
          >
            <i className="fas fa-map-pin"></i>
          </button>
        </Marker>
      </ReactMapGL>
      <div className={styles.emergencyButton}>
        <h2>Emergency</h2>
      </div>
      {isOpen && <Overlay setIsOpen={(e) => setIsOpen(e)} />}
    </div>
  );
};

export default PatientScreen;
