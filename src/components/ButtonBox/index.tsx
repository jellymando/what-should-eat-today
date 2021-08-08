import React from "react";
import { ButtonWrap, Button } from "./styled";

const ButtonBox = ({ buttonText, handleClickButton }) => {
    return (
        <ButtonWrap>
            <Button onClick={() => handleClickButton()}>{buttonText}</Button>
        </ButtonWrap>
    );
};

export default ButtonBox;
