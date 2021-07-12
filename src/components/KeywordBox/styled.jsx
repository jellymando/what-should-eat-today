import styled from "styled-components";
import { COLOR } from "constants/style";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 8px 8px 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 99;
`;

export const KeywordWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
