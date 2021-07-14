import React, { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { placesQueryState, selectedPlaceState, searchKeywordState, selectedKeywordsState } from "store/atom";
import { addPlace } from "api/place";
import PlaceList from "components/PlaceList";
import PlaceListMap from "components/PlaceListMap";
import InputButtonBox from "components/InputButtonBox";
import ButtonBox from "components/ButtonBox";
import KeywordBox from "components/KeywordBox";
import { Container, SideButton } from "./styled";

const Place = () => {
    const [isAddPlace, setIsAddPlace] = useState(false);
    const [selectedPlace, setSelectedPlace] = useRecoilState(selectedPlaceState);
    const setSearchKeyword = useSetRecoilState(searchKeywordState);
    const [selectedKeywords, setSelectedKeywords] = useRecoilState(selectedKeywordsState);
    const setAddPlaceQuery = useSetRecoilState(placesQueryState);

    const searchButtonHandler = (value) => {
        setSearchKeyword(value);
    };

    const addPlaceButtonHandler = async () => {
        const { success, err } = await addPlace({ ...selectedPlace, keywords: selectedKeywords });
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert("이미 등록된 음식점입니다.");
                    break;
            }
        } else {
            setSelectedPlace("");
            setSelectedKeywords([]);
            setAddPlaceQuery(selectedPlace._id);
        }
    };

    return (
        <>
            {isAddPlace ? (
                <>
                    <Container>
                        <InputButtonBox buttonText="검색" handleClickButton={searchButtonHandler} />
                        <PlaceListMap />
                        {selectedPlace && <KeywordBox />}
                    </Container>
                    <ButtonBox buttonText="밥집 추가" handleClickButton={addPlaceButtonHandler} />
                </>
            ) : (
                <PlaceList />
            )}
            <SideButton isAddPlace={isAddPlace} onClick={() => setIsAddPlace(!isAddPlace)} />
        </>
    );
};

export default Place;
