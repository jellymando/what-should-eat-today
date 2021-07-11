import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { placeListSelector } from "store/selector";
import { PlaceListWrap, List } from "./styled";

const PlaceList = () => {
    const placeList = useRecoilValue(placeListSelector);

    useEffect(() => {
        console.log("placeList", placeList);
    }, [placeList]);

    return (
        <PlaceListWrap>
            {placeList.map((place) => {
                console.log(place);
                return <List key={place._id}>{place.name}</List>;
            })}
        </PlaceListWrap>
    );
};

export default PlaceList;
