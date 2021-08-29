import React from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isNavOpenState } from "store/atom";
import { Container, Nav, Menu, CloseIcon } from "./styled";

const NavBox = () => {
    const setIsNavOpen = useSetRecoilState(isNavOpenState);
    const handleCloseNav = () => {
        setIsNavOpen(false);
    };

    return (
        <Container>
            <Nav>
                <Menu>
                    <Link to="/member" onClick={handleCloseNav}>
                        인간리스트
                    </Link>
                </Menu>
                <Menu>
                    <Link to="/place" onClick={handleCloseNav}>
                        밥집리스트
                    </Link>
                </Menu>
            </Nav>
            <CloseIcon onClick={handleCloseNav} />
        </Container>
    );
};

export default NavBox;
