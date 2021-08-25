import styled from "styled-components";
import { MEDIA } from "constants/style";

export const HeaderWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
`;

export const MenuIcon = styled.div`
    position: absolute;
    top: 12px;
    left: 10px;
    width: 30px;
    height: 30px;
    background-size: 30px 30px;
    background-image: url("/img/menu-icon.png");
    opacity: 0.5;
    cursor: pointer;
`;

export const Logo = styled.div`
    width: 120px;
    height: 55px;
    background-image: url("/img/r-bob.png");
    background-size: 120px 55px;

    ${MEDIA.MOBILE(`
        width: 103.2px;
        height: 47.3px;
        background-size: 103.2px 47.3px;
    `)};
`;
