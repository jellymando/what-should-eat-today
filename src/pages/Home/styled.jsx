import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Text = styled.p`
    color: ${COLOR.BLACK2};
    font-size: ${FONTSIZE.SMALL};
    text-align: center;
`;

export const Loading = styled.div`
    margin-bottom: 30px;

    ${Text} {
        color: ${COLOR.ORANGE1};
        font-size: ${FONTSIZE.MIDDLE};
        font-weight: 700;
    }
`;

export const PlaceName = styled.p`
    color: ${COLOR.ORANGE1};
    font-size: ${FONTSIZE.LARGE};
    font-weight: 700;
    text-align: center;
    margin-bottom: 5px;

    &:before {
        content: "[";
        display: inline-block;
        margin-right: 5px;
    }

    &:after {
        content: "]";
        display: inline-block;
        margin-left: 5px;
    }
`;
