import React from "react";
import { useRecoilValue } from "recoil";
import { selectedPlaceState } from "store/atom";
import { addPlace } from "api/place";
import { ButtonWrap, Button } from "./styled";

const ButtonBox = () => {
    const selectedPlace = useRecoilValue(selectedPlaceState);
    return (
        <ButtonWrap>
            <Button onClick={() => addPlace(selectedPlace)}>밥집 추가</Button>
        </ButtonWrap>
    );
};

export default ButtonBox;
