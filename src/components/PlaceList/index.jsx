import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { placesQueryState } from "store/atom";
import { placeListSelector } from "store/selector";
import { deletePlace } from "api/place";
import { PlaceListWrap, List, Title, Content, Keyword, TrashIcon } from "./styled";

const PlaceList = () => {
    const placeList = useRecoilValue(placeListSelector);
    const setDeletePlaceQuery = useSetRecoilState(placesQueryState);

    const deletePlaceHandler = async (id) => {
        const { success, err } = await deletePlace(id);
        if (success) {
            setDeletePlaceQuery(id);
        }
    };
    return (
        <PlaceListWrap>
            {placeList &&
                placeList.map((place) => {
                    return (
                        <List key={place._id}>
                            <Title>{place.name}</Title>
                            <Content>
                                {place.keywords.map((keyword) => {
                                    return <Keyword key={place._id}>{keyword}</Keyword>;
                                })}
                            </Content>
                            <TrashIcon onClick={() => deletePlaceHandler(place._id)} />
                        </List>
                    );
                })}
        </PlaceListWrap>
    );
};

export default PlaceList;
