/* eslint-disable no-undef */
import React, { useRef, useEffect } from "react";
import { MapContainer } from "./styled";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(mapRef.current, options);
  }, [mapRef]);

  return <MapContainer ref={mapRef}></MapContainer>;
};

export default Map;
