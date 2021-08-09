/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import Map from "lib/Map";
import { PlaceType } from "types";
import { MapContainer } from "./styled";

const RandomMap = ({ place }: { place: PlaceType }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(new Map());

    useEffect(() => {
        if (!mapRef.current) return;
        map.setRef(mapRef.current!);
    }, [mapRef]);

    useEffect(() => {
        if (Object.keys(map).length === 0 || !place) return;
        const position = new window.kakao.maps.LatLng(place.latlng.y, place.latlng.x);
        const bounds = new window.kakao.maps.LatLngBounds();
        bounds.extend(position);
        map.displayMarker({
            _id: place._id,
            placeName: place.name,
            position,
        });
        map.setBounds(bounds);
    }, [map, place]);

    return <MapContainer ref={mapRef} />;
};

export default RandomMap;
