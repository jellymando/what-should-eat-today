import styled from "styled-components";
import "./animation.css";
import { COLOR } from "constants/style";

export const LoaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 9999;
`;

export const RoundWrap = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
`;

export const Round = styled.span`
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background: ${COLOR.ORANGE1};

    &:nth-child(1) {
        top: 50px;
        -webkit-animation-name: ball-triangle-path-1;
        animation-name: ball-triangle-path-1;
        -webkit-animation-delay: 0;
        animation-delay: 0;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
    &:nth-child(2) {
        left: 25px;
        -webkit-animation-name: ball-triangle-path-2;
        animation-name: ball-triangle-path-2;
        -webkit-animation-delay: 0;
        animation-delay: 0;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
    &:nth-child(3) {
        top: 50px;
        left: 50px;
        -webkit-animation-name: ball-triangle-path-3;
        animation-name: ball-triangle-path-3;
        -webkit-animation-delay: 0;
        animation-delay: 0;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
    }
`;
