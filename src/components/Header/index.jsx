import React from "react";
import { useRecoilState } from "recoil";
import { isNavOpenState } from "store/atom";
import NavBox from "components/NavBox";
import { HeaderWrap, MenuIcon, Logo } from "./styled";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useRecoilState(isNavOpenState);

    return (
        <>
            <HeaderWrap>
                <MenuIcon onClick={() => setIsNavOpen(!isNavOpen)} />
                <Logo />
            </HeaderWrap>
            {isNavOpen && <NavBox setIsNavOpen={setIsNavOpen} />}
        </>
    );
};

export default Header;
