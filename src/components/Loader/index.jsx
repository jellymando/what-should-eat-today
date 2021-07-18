import React from "react";
import { LoaderWrap, RoundWrap, Round } from "./styled";

const Loader = () => {
    return (
        <LoaderWrap>
            <RoundWrap>
                <Round />
                <Round />
                <Round />
            </RoundWrap>
        </LoaderWrap>
    );
};

export default Loader;
