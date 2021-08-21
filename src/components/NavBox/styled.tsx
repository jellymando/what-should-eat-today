import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    z-index: 999;
`;

export const Nav = styled.ul`
    width: 85%;
    border-top: 1px solid ${COLOR.GRAY2};
`;

export const Menu = styled.li`
    font-size: ${FONTSIZE.LARGE};
    color: ${COLOR.BLACK1};
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid ${COLOR.GRAY2};
`;

export const CloseIcon = styled.li`
    position: absolute;
    top: 15px;
    left: 18px;
    width: 28px;
    height: 28px;
    background-size: 28px 28px;
    background-image: url("/img/pop-close-icon.png");
    opacity: 0.7;
    cursor: pointer;
`;
