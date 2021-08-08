import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const ButtonWrap = styled.div`
    margin-top: 10px;
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    font-size: ${FONTSIZE.LARGE};
    color: ${COLOR.WHITE};
    background: ${COLOR.ORANGE1};
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`;
