import React, { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { placesQueryState, selectedPlaceState, searchKeywordState, selectedKeywordsState } from "store/atom";
import { placeListSelector } from "store/selector";
import { addPlace, deletePlace } from "api/place";
import { PlaceType } from "types";
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

    const handleSearchButton = (value: string) => {
        setSelectedKeywords([]);
        setSearchKeyword(value);
    };

    const searchInit = () => {
        setSelectedPlace({
            _id: "",
            name: "",
            latlng: {
                x: 0,
                y: 0,
            },
        });
        setSelectedKeywords([]);
        setSearchKeyword("");
    };

    const handleAddPlace = async () => {
        if (!selectedPlace) return alert(MESSAGE.PLACES.ERROR.EMPTY);
        const { success, err } = await addPlace({ ...selectedPlace, keywords: selectedKeywords });
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert(MESSAGE.PLACES.ERROR.EXIST);
                    break;
            }
        } else {
            setPlaceQuery(selectedPlace._id);
            setIsAddMode(false);
        }
    };

    const handleDeletePlace = async (id: string) => {
        const { success, err } = await deletePlace(id);
        if (success) {
            setPlaceQuery(id);
        }
    };

    useEffect(() => {
        if (!isAddMode) {
            searchInit();
        }
    }, [isAddMode]);

    return (
        <>
            {isAddMode ? (
                <>
                    <Container>
                        <InputButtonBox buttonText="검색" onClickButton={handleSearchButton} focus={true} />
                        <PlaceListMap />
                        {selectedPlace.name && <KeywordBox />}
                    </Container>
                    <ButtonBox buttonText="밥집 추가" onClickButton={handleAddPlace} />
                </>
            ) : (
                <ListBox list={placeList} onClickDeleteButton={handleDeletePlace} />
            )}
            <SideButton isAddMode={isAddMode} onClickButton={() => setIsAddMode(!isAddMode)} />
        </>
    );
};

export default Place;
