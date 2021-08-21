import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const Image = styled.div`
    text-align: center;

    .food-random-image {
        width: 150%;
        max-width: 150%;
        margin: -80px -25% -40px;
    }
    .coffee-random-image {
        width: 90%;
        margin: -30px 0 5px;
    }
`;

export const Name = styled.p`
    color: ${COLOR.ORANGE1};
    font-size: ${FONTSIZE.LARGE};
    font-weight: 700;
    text-align: center;

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

export const Profile = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: center /
            ${({ imageUrl }: { imageUrl: string }) =>
                imageUrl ? `120px url(${imageUrl})` : `90px url("/img/user-icon.png")`}
            no-repeat,
        ${COLOR.GRAY2};
    cursor: pointer;
    margin: 0 auto 10px;
`;
