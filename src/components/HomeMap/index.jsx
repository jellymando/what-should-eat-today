/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import Map from "lib/Map";
import { placeListSelector } from "store/selector";
import { MapContainer } from "./styled";

const HomeMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState({});
    const placeList = useRecoilValue(placeListSelector);

    useEffect(() => {
        if (!mapRef.current) return;
        setMap(new Map({ ref: mapRef.current }));
    }, [mapRef]);

    useEffect(() => {
        if (!map.$map || !placeList.length > 0) return;
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
