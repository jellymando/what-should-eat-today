import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

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
    position: relative;
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

    img {
        max-width: 100%;
    }
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
    font-size: ${FONTSIZE.MIDDLE};
    padding: 7px 10px;
    border: 1px solid ${COLOR.GRAY1};
    border-radius: 5px;
    outline: none;
`;

export const ErrorMsg = styled.p`
    font-size: 12px;
    color: ${COLOR.ORANGE1};
    margin-top: 5px;
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
    cursor: pointer;

    ${({ isSubmit }) => isSubmit && `background: ${COLOR.ORANGE2}`}
`;
