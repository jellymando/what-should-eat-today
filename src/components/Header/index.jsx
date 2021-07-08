import React from "react";
import { HeaderWrap } from "./styled";
import { default as Logo } from "/img/r-bob.png";

const Header = () => {
    return (
        <HeaderWrap>
            <Logo />
        </HeaderWrap>
    );
};

export default Header;
