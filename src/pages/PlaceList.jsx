import React from "react";
import PlaceListMap from "../components/PlaceListMap";
import SearchBox from "../components/SearchBox";
import ButtonBox from "../components/ButtonBox";

const PlaceList = () => {
    return (
        <>
            <SearchBox />
            <PlaceListMap />
            <ButtonBox />
        </>
    );
};

export default PlaceList;
