import React from "react";
import { Container, I } from "./styled";

const Animation = () => {
    return (
        <Container>
            {Array.from(Array(30).keys()).map((el, i) => {
                return <I key={i} />;
            })}
        </Container>
    );
};

export default Animation;
