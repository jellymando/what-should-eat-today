/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import Map from "lib/Map";
import { placeListSelector, selectedMemberListSelector } from "store/selector";
import { MapContainer } from "./styled";

const HomeMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState({});
    const placeList = useRecoilValue(placeListSelector);
    const selectedMembers = useRecoilValue(selectedMemberListSelector);
    const [filteredPlaceList, setFilteredPlaceList] = useState([]);

    useEffect(() => {
        const selectedMembersKeywords = new Set();
        selectedMembers.map((member) => member.keywords.forEach((keyword) => selectedMembersKeywords.add(keyword)));
        setFilteredPlaceList(
            placeList.filter((place) => {
                for (const keyword of place.keywords) {
                    if (!selectedMembersKeywords.has(keyword)) {
                        return true;
                    }
                }
                return false;
            })
        );
    }, [selectedMembers]);

    useEffect(() => {
        if (!mapRef.current) return;
        setMap(new Map({ ref: mapRef.current }));
    }, [mapRef]);

    useEffect(() => {
        if (!map.$map || !filteredPlaceList.length > 0) return;
        map.closeInfoWindow();
        for (let i in filteredPlaceList) {
            const position = new kakao.maps.LatLng(filteredPlaceList[i].latlng.y, filteredPlaceList[i].latlng.x);
            map.displayMarker({
                placeName: filteredPlaceList[i].name,
                position,
            });
        }
    }, [map, filteredPlaceList]);

    return <MapContainer ref={mapRef} />;
};

export default HomeMap;
