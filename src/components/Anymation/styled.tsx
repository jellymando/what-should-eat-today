import styled, { keyframes, css } from "styled-components";

const bang = keyframes`
    from {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
`;

const random = (range) => {
    return Math.floor(Math.random() * range);
};

export const I = styled.i`
    position: absolute;
    display: block;
    left: 50%;
    top: 0;
    width: 5px;
    height: 10px;
    background: red;
    opacity: 0;
`;

const createCSS = () => {
    let str = "";
    for (let i = 1; i <= 30; i++) {
        str += `
            &:nth-of-type(${i}) {
                transform: translate3d(${random(190) - 100}px, ${random(200) - 100}px, 0) rotate(${random(360)}deg);
                background: hsla(${random(360)}, 100%, 50%, 1);
            }
        `;
    }
    return str;
};

export const Container = styled.div`
    ${I} {
        ${createCSS()}
        animation: ${bang} 700ms ease-out forwards;
    }
`;
