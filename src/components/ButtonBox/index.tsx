import React from "react";
import { ButtonWrap, Button } from "./styled";

type Props = {
    buttonText: string;
    handleClickButton: () => void;
};

const ButtonBox = ({ buttonText, handleClickButton }: Props) => {
    return (
        <ButtonWrap>
            <Button onClick={() => handleClickButton()}>{buttonText}</Button>
        </ButtonWrap>
    );
};

export default ButtonBox;
