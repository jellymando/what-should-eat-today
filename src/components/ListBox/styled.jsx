import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const ListWrap = styled.div``;

export const List = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    min-height: 50px;
    padding: 10px;
    border-bottom: 1px solid ${COLOR.GRAY2};
`;

export const Image = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: center / ${({ imageUrl }) => (imageUrl ? `50px url(${imageUrl})` : `30px url("/img/user-icon.png")`)}
            no-repeat,
        ${COLOR.GRAY2};
    margin-right: 10px;
`;

export const Title = styled.div`
    color: ${COLOR.BLACK1};
    font-size: ${FONTSIZE.MIDDLE};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.SMALL};
`;

export const KeywordWrap = styled.div`
    margin-top: 3px;
`;

export const Keyword = styled.span`
    color: ${COLOR.GRAY1};
    font-size: ${FONTSIZE.SMALL};
    margin-right: 5px;
`;

export const TrashIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    width: 16px;
    height: 16px;
    margin-top: -8px;
    background-size: 16px 16px;
    background-image: url("/img/trash-icon.png");
    opacity: 0.5;
    cursor: pointer;
`;
