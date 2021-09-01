export const COLOR = {
    WHITE: "#fff",
    BLACK1: "#333",
    BLACK2: "#666",
    GRAY1: "#999",
    GRAY2: "#e9e9e9",
    GRAY3: "#d0d0d0",
    GRAY4: "#f7f7f7",
    ORANGE1: "#f15a22",
    ORANGE2: "#f2784b",
    YELLOW1: "#fff9de",
};

export const FONTSIZE = {
    LARGE: "1.8rem",
    MIDDLE: "1.6rem",
    SMALL: "1.4rem",
    XSMALL: "1.2rem",
};

export const MEDIA = {
    MOBILE: (css: string) => {
        return `@media screen and (max-width: 600px) {
                ${css}
            }`;
    },
    TABLET: (css: string) => {
        return `@media screen and (max-width: 1024px) {
                ${css}
            }`;
    },
};
