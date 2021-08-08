import React from "react";
import { Link } from "react-router-dom";
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
                <Link to="/">
                    <Logo />
                </Link>
            </HeaderWrap>
            {isNavOpen && <NavBox setIsNavOpen={setIsNavOpen} />}
        </>
    );
};

export default Header;
