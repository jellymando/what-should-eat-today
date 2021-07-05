/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import Map from "../../lib/Map";
import { MapContainer } from "./styled";

const HomeMap = ({ placeList }) => {
  const mapRef = useRef(null);
  const [homeMap, setHomeMap] = useState({});

  useEffect(() => {
    if (!mapRef.current) return;
    const map = new Map({ ref: mapRef.current });
    setHomeMap(map);
  }, [mapRef]);

  useEffect(() => {
    if (!placeList) return;
    for (let i in placeList) {
      const position = new kakao.maps.LatLng(
        placeList[i].latlng.y,
        placeList[i].latlng.x
      );
      homeMap.displayMarker({
        placeName: placeList[i].name,
        position,
      });
    }
  }, [homeMap, placeList]);

  return <MapContainer ref={mapRef} />;
};

export default HomeMap;
