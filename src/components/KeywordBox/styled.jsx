import styled from "styled-components";
import { COLOR } from "constants/style";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${COLOR.WHITE};
    z-index: 99;
`;

export const KeywordWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
