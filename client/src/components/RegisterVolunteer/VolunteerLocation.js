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
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
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
