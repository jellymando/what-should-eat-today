import React from "react";
import { ButtonWrap, StyledButton } from "./styled";

const Button = ({ handleClick }) => {
  return (
    <ButtonWrap>
      <StyledButton onClick={handleClick}>밥집 추가</StyledButton>
    </ButtonWrap>
  );
};

export default Button;
