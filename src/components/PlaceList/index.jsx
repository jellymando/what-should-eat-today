import React from "react";
import { useRecoilValue } from "recoil";
import { placeListSelector } from "store/selector";
import { PlaceListWrap, List } from "./styled";

const PlaceList = () => {
    const placeList = useRecoilValue(placeListSelector);

    return (
        <PlaceListWrap>
            {placeList &&
                placeList.map((place) => {
                    return <List key={place._id}>{place.name}</List>;
                })}
        </PlaceListWrap>
    );
};

export default PlaceList;
