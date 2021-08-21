import React from "react";
import { ButtonWrap, Button } from "./styled";

type Props = {
    buttonText: string;
    handleClickButton: () => void;
    buttonTextSecond?: string;
    handleClickButtonSecond?: () => void;
};

const ButtonBox = ({ buttonText, handleClickButton, buttonTextSecond, handleClickButtonSecond }: Props) => {
    return (
        <ButtonWrap>
            <Button onClick={() => handleClickButton()}>{buttonText}</Button>
            {buttonTextSecond && handleClickButtonSecond && (
                <Button onClick={() => handleClickButtonSecond()}>{buttonTextSecond}</Button>
            )}
        </ButtonWrap>
    );
};

export default ButtonBox;
