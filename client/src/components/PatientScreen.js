import React, { useState } from 'react';
import ReactMapGL from "react-map-gl";

const PatientScreen = () => {
  const [viewport, setViewport] = useState({
    latitude: 27.1751,
    longitude: 78.0421,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        // mapStyle="mapbox://styles/mapbox/dark-v10"
      >

      </ReactMapGL>
    </div>
  )
}

export default PatientScreen;
