/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { MemberType, PlaceType } from "types";
import Map from "lib/Map";
import { filteredPlaceListState } from "store/atom";
import { placeListSelector, selectedMemberListSelector } from "store/selector";
import { MapContainer } from "./styled";

const HomeMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(new Map());
    const placeList = useRecoilValue(placeListSelector);
    const selectedMembers = useRecoilValue(selectedMemberListSelector);
    const [filteredPlaceList, setFilteredPlaceList] = useRecoilState(filteredPlaceListState);

    useEffect(() => {
        const selectedMembersKeywords = new Set();
        selectedMembers.map((member: MemberType) =>
            member.keywords.forEach((keyword: string) => selectedMembersKeywords.add(keyword))
        );
        setFilteredPlaceList(
            placeList.filter((place: PlaceType) => {
                if (place.keywords.length > 0) {
                    for (const keyword of place.keywords) {
                        if (!selectedMembersKeywords.has(keyword)) {
                            return true;
                        }
                    }
                } else {
                    return true;
                }
                return false;
            })
        );
    }, [selectedMembers]);

    useEffect(() => {
        if (!mapRef.current) return;
        map.setRef(mapRef.current!);
    }, [mapRef]);

    useEffect(() => {
        if (Object.keys(map).length === 0 || !(filteredPlaceList.length > 0)) return;
        map.closeInfoWindow();
        for (const i in filteredPlaceList) {
            const position = new window.kakao.maps.LatLng(filteredPlaceList[i].latlng.y, filteredPlaceList[i].latlng.x);
            map.displayMarker({
                _id: filteredPlaceList[i]._id,
                placeName: filteredPlaceList[i].name,
                position,
            });
        }
    }, [map, filteredPlaceList]);

    return <MapContainer ref={mapRef} />;
};

export default HomeMap;
