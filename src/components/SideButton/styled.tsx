import styled from "styled-components";
import { COLOR } from "constants/style";

export const Button = styled.div`
    position: fixed;
    bottom: 65px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: ${COLOR.ORANGE1};
    background-size: 20px 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ isAddMode }) => (isAddMode ? `url("/img/list-icon.png");` : `url("/img/add-icon.png");`)};
    z-index: 9;
    cursor: pointer;
`;
