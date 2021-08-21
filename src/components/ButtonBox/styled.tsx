import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const ButtonWrap = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    font-size: ${FONTSIZE.LARGE};
    color: ${COLOR.WHITE};
    background: ${COLOR.ORANGE1};
    border: 0;
    border-radius: 5px;
    outline: none;
    cursor: pointer;

    & + button {
        margin-left: 5px;
        background: ${COLOR.ORANGE2};
    }
`;
