/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Map from "lib/Map";
import { searchKeywordState, selectedPlaceState } from "store/atom";
import { MapContainer } from "./styled";

const PlaceListMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(new Map());
    const searchKeyword = useRecoilValue(searchKeywordState);
    const setSelectedPlace = useSetRecoilState(selectedPlaceState);

    const handleClickTarget = ({ _id, placeName, position }: { _id: string; placeName: string; position: any }) => {
        setSelectedPlace({
            _id,
            name: placeName,
            latlng: {
                x: parseFloat(position.La),
                y: parseFloat(position.Ma),
            },
        });
    };

    useEffect(() => {
        if (!mapRef.current) return;
        map.setRef(mapRef.current!);
    }, [mapRef]);

    useEffect(() => {
        if (Object.keys(map).length === 0 || !searchKeyword) return;
        const ps = new window.kakao.maps.services.Places();
        const options = {
            category_group_code: "FD6",
            bounds: map.bounds,
        };
        const searchPlace = (data: any, status: any) => {
            if (status === window.kakao.maps.services.Status.OK) {
                for (let i = 0; i < data.length; i++) {
                    const position = new window.kakao.maps.LatLng(data[i].y, data[i].x);
                    map.displayMarker({
                        _id: data[i].id,
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
