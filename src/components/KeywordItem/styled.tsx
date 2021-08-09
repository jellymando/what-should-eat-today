import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Keyword = styled.span`
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 1.7;
    color: ${({ isSelected }: { isSelected: boolean }) => (isSelected ? COLOR.ORANGE1 : COLOR.ORANGE2)};
    border: 1px solid ${({ isSelected }: { isSelected: boolean }) => (isSelected ? COLOR.ORANGE1 : COLOR.GRAY2)};
    border-radius: 5px;
    background: ${COLOR.WHITE};
    padding-right: 6px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
`;

export const Text = styled.span`
    font-size: ${FONTSIZE.SMALL};
    padding: 3px 6px;
`;

export const TrashIcon = styled.span`
    width: 8px;
    height: 8px;
    background-size: 8px 8px;
    background-image: url("/img/keyword-delete-icon.png");
`;
