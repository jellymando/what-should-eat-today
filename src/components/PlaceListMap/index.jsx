/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Map from "lib/Map";
import { searchKeywordState, selectedPlaceState } from "store/atom";
import { MapContainer } from "./styled";

const PlaceListMap = () => {
    const mapRef = useRef(null);
    const [plcaeListMap, setPlaceListMap] = useState({});
    const searchKeyword = useRecoilValue(searchKeywordState);
    const setSelectedPlace = useSetRecoilState(selectedPlaceState);

    const handleClickTarget = ({ placeName, position }) => {
        setSelectedPlace({
            name: placeName,
            x: parseFloat(position.La),
            y: parseFloat(position.Ma),
        });
    };

    useEffect(() => {
        if (!mapRef.current) return;
        const map = new Map({ ref: mapRef.current });
        setPlaceListMap(map);
    }, [mapRef]);

    useEffect(() => {
        if (!searchKeyword) return;
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchKeyword, placesSearchCB);

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    const position = new kakao.maps.LatLng(data[i].y, data[i].x);
                    plcaeListMap.displayMarker({
                        placeName: data[i].place_name,
                        position,
                        handleClickTarget,
                    });
                }
            }
        }
    }, [plcaeListMap, searchKeyword]);

    return <MapContainer ref={mapRef} />;
};

export default PlaceListMap;
