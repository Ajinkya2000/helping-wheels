import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import styles from "./VolunteerLocation.module.css";

const mapStyle = {
  width: "100%",
  height: window.innerWidth > 768 ? "100vh" : "300px",
};

function VolunteerLocation({ viewport, setViewPort }) {
  return (
    <div>
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoiYWppbmt5YTcyMDYiLCJhIjoiY2tvcmV4bjdqMTJveTJvc3p5aHp2cDNxcCJ9.Y1u-DV5tH9Se1Hvcq2Goug"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        {...viewport}
        {...mapStyle}
        onViewportChange={(viewport) => setViewPort(viewport)}
      >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
          <i className={`fas fa-map-pin ${styles.marker}`}></i>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default VolunteerLocation;
