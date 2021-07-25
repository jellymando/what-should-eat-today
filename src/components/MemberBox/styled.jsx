import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: ${COLOR.WHITE};
    margin: 10px 0;
    z-index: 99;
`;

export const MemberWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const Input = styled.input`
    width: 100%;
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.MIDDLE};
    padding: 7px 10px;
    border: 1px solid ${COLOR.GRAY1};
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
`;
