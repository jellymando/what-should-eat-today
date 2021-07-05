import React from "react";
import { ButtonWrap, Button } from "./styled";

const ButtonBox = ({ handleClick }) => {
  return (
    <ButtonWrap>
      <Button onClick={handleClick}>밥집 추가</Button>
    </ButtonWrap>
  );
};

export default ButtonBox;
