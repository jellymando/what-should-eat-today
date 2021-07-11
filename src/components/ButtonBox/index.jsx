import React from "react";
import { ButtonWrap, Button } from "./styled";

const ButtonBox = ({ handleButtonClick }) => {
    return (
        <ButtonWrap>
            <Button onClick={() => handleButtonClick()}>밥집 추가</Button>
        </ButtonWrap>
    );
};

export default ButtonBox;
