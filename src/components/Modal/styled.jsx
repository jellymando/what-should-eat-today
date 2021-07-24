import styled from "styled-components";
import { COLOR } from "constants/style";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 9990;
`;

export const ModalWrap = styled.div`
    width: 85%;
    max-width: 500px;
    padding: 15px;
    background: ${COLOR.WHITE};
    border: 1px solid ${COLOR.GRAY2};
    border-radius: 10px;
    box-shadow: 0 0 10px ${COLOR.GRAY3};
`;

export const Content = styled.div`
    font-size: 14px;
    color: ${COLOR.BLACK1};
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: ${COLOR.BLACK1};
    margin-top: 15px;
`;

export const Button = styled.button`
    min-width: 60px;
    height: 35px;
    font-size: 13px;
    color: ${COLOR.WHITE};
    background: ${COLOR.GRAY1};
    border-radius: 5px;
    padding: 5px;
    margin: 0 3px;

    ${({ isSubmit }) => isSubmit && `background: ${COLOR.ORANGE2}`}
`;
