/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import Map from "lib/Map";
import { MapContainer } from "./styled";

const RandomMap = ({ place }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState({});

    useEffect(() => {
        if (!mapRef.current) return;
        setMap(new Map({ ref: mapRef.current }));
    }, [mapRef]);

    useEffect(() => {
        if (Object.keys(map).length === 0 || !place) return;
        const position = new kakao.maps.LatLng(place.latlng.y, place.latlng.x);
        const bounds = new kakao.maps.LatLngBounds();
        bounds.extend(position);
        map.displayMarker({
            placeName: place.name,
            position,
        });
        map.setBounds(bounds);
    }, [map, place]);

    return <MapContainer ref={mapRef} />;
};

export default RandomMap;
