import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { selectedPlaceState } from "store/atom";
import { addPlace } from "api/place";
import PlaceList from "components/PlaceList";
import PlaceListMap from "components/PlaceListMap";
import SearchBox from "components/SearchBox";
import ButtonBox from "components/ButtonBox";
import { SideButton } from "./styled";

const Place = () => {
    const [isAddPlace, setIsAddPlace] = useState(false);
    const selectedPlace = useRecoilValue(selectedPlaceState);

    const addPlaceButtonHandler = async () => {
        const { success, err } = await addPlace(selectedPlace);
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert("이미 등록된 음식점입니다.");
                    break;
            }
        }
    };

    return (
        <>
            {isAddPlace ? (
                <>
                    <SearchBox />
                    <PlaceListMap />
                    <ButtonBox handleButtonClick={addPlaceButtonHandler} />
                </>
            ) : (
                <PlaceList />
            )}
            <SideButton isAddPlace={isAddPlace} onClick={() => setIsAddPlace(!isAddPlace)} />
        </>
    );
};

export default Place;
