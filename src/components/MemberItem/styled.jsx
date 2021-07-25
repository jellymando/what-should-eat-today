import styled from "styled-components";
import { COLOR } from "constants/style";

export const AddMember = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: center / 25px url("/img/add-icon.png") no-repeat, ${COLOR.GRAY2};
    margin-right: 5px;
    cursor: pointer;
`;

export const Member = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 2px solid ${({ isSelected }) => (isSelected ? `${COLOR.ORANGE1}` : `${COLOR.WHITE}`)};
    border-radius: 25px;
    background: center / ${({ imageUrl }) => (imageUrl ? `50px url(${imageUrl})` : `30px url("/img/user-icon.png")`)}
            no-repeat,
        ${COLOR.GRAY2};
    margin-right: 3px;
`;

export const Name = styled.p`
    font-size: 13px;
    color: ${COLOR.WHITE};
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
`;
