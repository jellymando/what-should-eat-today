/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
            name: placeName,
            x: parseFloat(position.La),
            y: parseFloat(position.Ma),
        });
    };

    useEffect(() => {
        if (!mapRef.current) return;
        setMap(new Map({ ref: mapRef.current }));
    }, [mapRef]);

    useEffect(() => {
        if (!map || !searchKeyword) return;
        const ps = new kakao.maps.services.Places();
        const options = {
            category_group_code: "FD6",
            bounds: map.bounds,
        };
        const searchPlace = (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    const position = new kakao.maps.LatLng(data[i].y, data[i].x);
                    map.displayMarker({
                        placeName: data[i].place_name,
                        position,
                        handleClickTarget,
                        isDisplay: i === 0,
                    });
                }
            }
        };

        ps.keywordSearch(searchKeyword, searchPlace, options);
    }, [map, searchKeyword]);

    return <MapContainer ref={mapRef} />;
};

export default PlaceListMap;
