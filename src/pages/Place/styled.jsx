import styled from "styled-components";
import { COLOR } from "constants/style";

export const SideButton = styled.div`
    position: fixed;
    bottom: 60px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: ${COLOR.ORANGE1};
    background-size: 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ isAddPlace }) => (isAddPlace ? `url("/img/list-icon.png");` : `url("/img/add-icon.png");`)};
    z-index: 999;
    cursor: pointer;
`;
