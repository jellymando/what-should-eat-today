import styled from "styled-components";
import { COLOR, FONTSIZE } from "constants/style";

export const NoticeWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const Notice = styled.div`
    width: 100%;
    font-size: ${FONTSIZE.LARGE};
    text-align: center;
    color: ${COLOR.BLACK1};
    padding: 15px;
    line-height: 1.4;
    border: 1px solid ${COLOR.GRAY2};
    border-radius: 5px;
    background: ${COLOR.GRAY4};
`;
