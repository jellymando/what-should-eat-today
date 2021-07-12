import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const PlaceListWrap = styled.div``;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50px;
    padding: 10px;
    border-bottom: 1px solid ${COLOR.GRAY2};
`;

export const Title = styled.div`
    color: ${COLOR.BLACK1};
    font-size: ${FONTSIZE.MIDDLE};
`;

export const Content = styled.div`
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.SMALL};
    margin-top: 3px;
`;

export const Keyword = styled.span`
    color: ${COLOR.GRAY1};
    font-size: ${FONTSIZE.SMALL};
    margin-right: 5px;
`;
