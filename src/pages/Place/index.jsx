import React, { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { placesQueryState, selectedPlaceState, searchKeywordState, selectedKeywordsState } from "store/atom";
import { addPlace } from "api/place";
import { MESSAGE } from "constants/message";
import PlaceList from "components/PlaceList";
import PlaceListMap from "components/PlaceListMap";
import InputButtonBox from "components/InputButtonBox";
import ButtonBox from "components/ButtonBox";
import KeywordBox from "components/KeywordBox";
import SideButton from "components/SideButton";
import { Container } from "./styled";

const Place = () => {
    const [isAddMode, setIsAddMode] = useState(false);
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
                    alert(MESSAGE.PLACES.ERROR.EXIST);
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
            {isAddMode ? (
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
            <SideButton isAddMode={isAddMode} handleClickButton={() => setIsAddMode(!isAddMode)} />
        </>
    );
};

export default Place;
