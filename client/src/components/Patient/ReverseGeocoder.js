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
        mapboxApiAccessToken="pk.eyJ1IjoiYWppbmt5YTcyMDYiLCJhIjoiY2tvcmV4bjdqMTJveTJvc3p5aHp2cDNxcCJ9.Y1u-DV5tH9Se1Hvcq2Goug"
        position="top-left"
        reverseGeocode={true}
        onResults={(results) => console.log(results)}
      />
    </>
  );
}

export default ReverseGeocoder;
