import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const SearchWrap = styled.div`
    display: flex;
    height: 40px;
    margin-bottom: 10px;
`;

export const SearchInput = styled.input`
    width: 100%;
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.LARGE};
    padding: 7px 10px;
    border: 1px solid ${COLOR.GRAY1};
    border-radius: 5px;
    outline: none;
`;

export const SearchButton = styled.button`
    flex: 1 0 52px;
    color: ${COLOR.WHITE};
    font-size: ${FONTSIZE.SMALL};
    background: ${COLOR.ORANGE2};
    border-radius: 5px;
    margin-left: 5px;
    border: 0;
    outline: none;
    cursor: pointer;
`;
