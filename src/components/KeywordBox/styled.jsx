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
