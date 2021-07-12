import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Keyword = styled.span`
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 1.7;
    padding: 3px 6px;
    color: ${({ isSelected }) => (isSelected ? COLOR.ORANGE1 : COLOR.ORANGE2)};
    border: 1px solid ${({ isSelected }) => (isSelected ? COLOR.ORANGE1 : COLOR.GRAY2)};
    border-radius: 5px;
    background: ${COLOR.WHITE};
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
`;

export const Text = styled.span`
    font-size: ${FONTSIZE.SMALL};
`;

export const TrashIcon = styled.span`
    width: 8px;
    height: 8px;
    background-size: 8px 8px;
    background-image: url("/img/close-icon.png");
    margin-left: 7px;
`;
