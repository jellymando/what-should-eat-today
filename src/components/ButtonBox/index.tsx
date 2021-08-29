import React from "react";
import { ButtonWrap, Button } from "./styled";

type Props = {
    buttonText: string;
    onClickButton: () => void;
    buttonTextSecond?: string;
    onClickButtonSecond?: () => void;
};

const ButtonBox = ({ buttonText, onClickButton, buttonTextSecond, onClickButtonSecond }: Props) => {
    return (
        <ButtonWrap>
            <Button onClick={() => onClickButton()}>{buttonText}</Button>
            {buttonTextSecond && onClickButtonSecond && (
                <Button onClick={() => onClickButtonSecond()}>{buttonTextSecond}</Button>
            )}
        </ButtonWrap>
    );
};

export default ButtonBox;
