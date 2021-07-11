import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 8px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 99;
`;

export const AddKeywordWrap = styled.div`
    display: flex;
    height: 40px;
    margin-bottom: 10px;
`;

export const AddKeywordInput = styled.input`
    width: 100%;
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.LARGE};
    padding: 7px 10px;
    border: 1px solid ${COLOR.GRAY1};
    border-radius: 5px;
    outline: none;
`;

export const AddKeywordButton = styled.button`
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

export const KeywordWrap = styled.div`
    display: flex;
    align-items: center;
    overflow-x: auto;
`;

export const Keyword = styled.span`
    height: 30px;
    line-height: 1.7;
    padding: 3px 6px;
    color: ${COLOR.ORANGE1};
    font-size: ${FONTSIZE.SMALL};
    border: 1px solid ${COLOR.ORANGE1};
    border-radius: 5px;
    background: ${COLOR.WHITE};
    margin-right: 6px;
`;
