/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import mongoose from "mongoose";
import Map from "lib/Map";
import { searchKeywordState, selectedPlaceState } from "store/atom";
import { MapContainer } from "./styled";

const PlaceListMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState({});
    const searchKeyword = useRecoilValue(searchKeywordState);
    const setSelectedPlace = useSetRecoilState(selectedPlaceState);

    const handleClickTarget = ({ placeName, position }) => {
        setSelectedPlace({
            _id: new mongoose.Types.ObjectId(),
            name: placeName,
            x: parseFloat(position.La),
            y: parseFloat(position.Ma),
        });
    };

    useEffect(() => {
        if (!mapRef.current) return;
        const map = new Map({ ref: mapRef.current });
        setMap(map);
    }, [mapRef]);

    useEffect(() => {
        if (!searchKeyword) return;
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchKeyword, placesSearchCB);

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    const position = new kakao.maps.LatLng(data[i].y, data[i].x);
                    map.displayMarker({
                        placeName: data[i].place_name,
                        position,
                        handleClickTarget,
                    });
                }
            }
        }
    }, [map, searchKeyword]);

    return <MapContainer ref={mapRef} />;
};

export default PlaceListMap;
