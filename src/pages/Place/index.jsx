import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedPlaceState, searchKeywordState } from "store/atom";
import { addPlace } from "api/place";
import PlaceList from "components/PlaceList";
import PlaceListMap from "components/PlaceListMap";
import InputButtonBox from "components/InputButtonBox";
import ButtonBox from "components/ButtonBox";
import KeywordBox from "components/KeywordBox";
import { Container, SideButton } from "./styled";

const Place = () => {
    const [isAddPlace, setIsAddPlace] = useState(false);
    const selectedPlace = useRecoilValue(selectedPlaceState);
    const setSearchKeyword = useSetRecoilState(searchKeywordState);

    const searchButtonHandler = (value) => {
        setSearchKeyword(value);
    };

    const addPlaceButtonHandler = async () => {
        const { success, err } = await addPlace(selectedPlace);
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert("이미 등록된 음식점입니다.");
                    break;
            }
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
                    <ButtonBox handleClickButton={addPlaceButtonHandler} />
                </>
            ) : (
                <PlaceList />
            )}
            <SideButton isAddPlace={isAddPlace} onClick={() => setIsAddPlace(!isAddPlace)} />
        </>
    );
};

export default Place;
