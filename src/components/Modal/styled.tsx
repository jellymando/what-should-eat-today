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
    overflow: hidden;
`;

export const Content = styled.div`
    font-size: ${FONTSIZE.SMALL};
    color: ${COLOR.BLACK1};

    img {
        max-width: 100%;
    }
`;

export const Title = styled.h2`
    font-size: ${FONTSIZE.MIDDLE};
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

export const Notice = styled.h2`
    font-size: ${FONTSIZE.MIDDLE};
    text-align: center;
    color: ${COLOR.BLACK1};
    margin: 5px 0 10px;
`;

export const Text = styled.p`
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.SMALL};
    text-align: center;
`;

export const Loading = styled.div`
    margin-bottom: 20px;

    ${Text} {
        color: ${COLOR.ORANGE1};
        font-size: ${FONTSIZE.MIDDLE};
        font-weight: 700;
    }
`;

export const ErrorMsg = styled.p`
    font-size: ${FONTSIZE.XSMALL};
    color: ${COLOR.ORANGE1};
    margin-top: 5px;
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    font-size: ${FONTSIZE.SMALL};
    color: ${COLOR.BLACK1};
    margin-top: 15px;
`;

export const Button = styled.button`
    min-width: 60px;
    height: 35px;
    font-size: ${FONTSIZE.SMALL};
    color: ${COLOR.WHITE};
    background: ${COLOR.GRAY1};
    border-radius: 5px;
    padding: 5px;
    margin: 0 3px;
    cursor: pointer;

    ${({ isSubmit }: { isSubmit?: boolean }) => isSubmit && `background: ${COLOR.ORANGE2}`}
`;
