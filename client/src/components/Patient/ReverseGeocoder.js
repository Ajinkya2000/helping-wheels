import React, { useCallback } from "react";
import Geocoder from "react-map-gl-geocoder";

import "./ReverseGeocoder.css";

function ReverseGeocoder({ viewport, setViewport, mapRef, value }) {
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return (
    <>
      <Geocoder
        inputValue={`${value.latitude},${value.longitude}`}
        mapRef={mapRef}
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        position="top-left"
        reverseGeocode={true}
        onResults={(results) => console.log(results)}
      />
    </>
  );
}

export default ReverseGeocoder;
