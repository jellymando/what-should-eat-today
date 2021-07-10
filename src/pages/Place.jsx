import React from "react";
import PlaceList from "../components/PlaceList";
import SearchBox from "../components/SearchBox";
import ButtonBox from "../components/ButtonBox";

const Place = () => {
    return (
        <>
            <SearchBox />
            <PlaceList />
            <ButtonBox />
        </>
    );
};

export default Place;
