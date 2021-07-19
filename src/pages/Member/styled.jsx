import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

export const Form = styled.ul``;
export const List = styled.li`
    margin-bottom: 20px;
`;

export const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    color: ${COLOR.ORANGE2};
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 100%;
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.LARGE};
    padding: 7px 10px;
    border: 1px solid ${COLOR.GRAY1};
    border-radius: 5px;
    outline: none;
`;
