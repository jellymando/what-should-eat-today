import React from "react";
import { useRecoilValue } from "recoil";
import { selectedPlaceState } from "store/atom";
import { addPlace } from "api/place";
import { ButtonWrap, Button } from "./styled";

const ButtonBox = () => {
    const selectedPlace = useRecoilValue(selectedPlaceState);

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
        <ButtonWrap>
            <Button onClick={() => addPlaceButtonHandler()}>밥집 추가</Button>
        </ButtonWrap>
    );
};

export default ButtonBox;
