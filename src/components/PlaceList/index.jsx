import React, { useEffect } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { placeListSelector } from "store/selector";
import { PlaceListWrap, List, Title, Content, Keyword } from "./styled";

const PlaceList = () => {
    const placeList = useRecoilValue(placeListSelector);

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
                        </List>
                    );
                })}
        </PlaceListWrap>
    );
};

export default PlaceList;
