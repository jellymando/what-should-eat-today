import styled from "styled-components";

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
`;
