import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceListMap from "../components/PlaceListMap";
import SearchBox from "../components/SearchBox";
import ButtonBox from "../components/ButtonBox";

const PlaceList = () => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [selectedPlace, setSelectedPlace] = useState({ name: "", x: 0, y: 0 });

    const addPlace = async () => {
        try {
            const {
                data: { success, err },
            } = await axios.post("/places", {
                name: selectedPlace.name,
                latlng: {
                    x: selectedPlace.x,
                    y: selectedPlace.y,
                },
            });
            if (!success) {
                switch (err.code) {
                    case 11000:
                        alert("이미 등록된 음식점입니다.");
                        break;
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        console.log("selectedPlace", selectedPlace);
    }, [selectedPlace]);

    return (
        <>
            <SearchBox setSearchKeyword={setSearchKeyword} />
            <PlaceListMap searchKeyword={searchKeyword} setSelectedPlace={setSelectedPlace} />
            <ButtonBox handleClick={addPlace} />
        </>
    );
};

export default PlaceList;
