/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import Map from "lib/Map";
import { MapContainer } from "./styled";

const HomeMap = ({ placeList }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState({});

    useEffect(() => {
        if (!mapRef.current) return;
        const map = new Map({ ref: mapRef.current });
        setMap(map);
    }, [mapRef]);

    useEffect(() => {
        if (!placeList) return;
        for (let i in placeList) {
            const position = new kakao.maps.LatLng(placeList[i].latlng.y, placeList[i].latlng.x);
            map.displayMarker({
                placeName: placeList[i].name,
                position,
            });
        }
    }, [map, placeList]);

    return <MapContainer ref={mapRef} />;
};

export default HomeMap;
