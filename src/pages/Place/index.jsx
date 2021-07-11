import React, { useState } from "react";
import PlaceList from "../../components/PlaceList";
import PlaceListMap from "../../components/PlaceListMap";
import SearchBox from "../../components/SearchBox";
import ButtonBox from "../../components/ButtonBox";
import { SideButton } from "./styled";

const Place = () => {
    const [isAddPlace, setIsAddPlace] = useState(false);
    return (
        <>
            {isAddPlace ? (
                <>
                    <SearchBox />
                    <PlaceListMap />
                    <ButtonBox />
                </>
            ) : (
                <PlaceList />
            )}
            <SideButton isAddPlace={isAddPlace} onClick={() => setIsAddPlace(!isAddPlace)} />
        </>
    );
};

export default Place;
