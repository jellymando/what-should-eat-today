import React from "react";
import { ButtonWrap, Button } from "./styled";

const ButtonBox = ({ handleClickButton }) => {
    return (
        <ButtonWrap>
            <Button onClick={() => handleClickButton()}>밥집 추가</Button>
        </ButtonWrap>
    );
};

export default ButtonBox;
