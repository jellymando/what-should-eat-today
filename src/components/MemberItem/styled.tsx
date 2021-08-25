import styled from "styled-components";
import { COLOR, FONTSIZE, MEDIA } from "constants/style";

type MemberProps = {
    isSelected: boolean;
    imageUrl: string;
};

export const AddMember = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: center / 25px url("/img/add-icon.png") no-repeat, ${COLOR.GRAY2};
    margin-right: 5px;
    cursor: pointer;
`;

export const Member = styled.div<MemberProps>`
    position: relative;
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
    cursor: pointer;

    ${MEDIA.MOBILE(`
        margin-right: 0;
    `)};
`;

export const Name = styled.p`
    max-width: 80%;
    font-size: ${FONTSIZE.XSMALL};
    color: ${COLOR.WHITE};
    text-align: center;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.7);
    padding: 2px;
    overflow: hidden;
    line-height: 13px;
    max-height: 30px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;
