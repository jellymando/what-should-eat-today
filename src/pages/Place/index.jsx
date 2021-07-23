import React, { useState } from "react";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { placesQueryState, selectedPlaceState, searchKeywordState, selectedKeywordsState } from "store/atom";
import { placeListSelector } from "store/selector";
import { addPlace, deletePlace } from "api/place";
import { MESSAGE } from "constants/message";
import ListBox from "components/ListBox";
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
    const placeList = useRecoilValue(placeListSelector);
    const setPlaceQuery = useSetRecoilState(placesQueryState);

    const searchButtonHandler = (value) => {
        setSearchKeyword(value);
    };

    const addPlaceButtonHandler = async () => {
        if (!selectedPlace) return alert(MESSAGE.PLACES.ERROR.EMPTY);
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
            setPlaceQuery(selectedPlace._id);
            setIsAddMode(false);
        }
    };

    const deletePlaceButtonHandler = async (id) => {
        const { success, err } = await deletePlace(id);
        if (success) {
            setPlaceQuery(id);
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
                <ListBox list={placeList} handleClickDeleteButton={deletePlaceButtonHandler} />
            )}
            <SideButton isAddMode={isAddMode} handleClickButton={() => setIsAddMode(!isAddMode)} />
        </>
    );
};

export default Place;
