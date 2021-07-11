import React, { useRef } from "react";
import { SearchWrap, SearchInput, SearchButton } from "./styled";

const InputButtonBox = ({ buttonText, handleClickButton }) => {
    const searchInputRef = useRef(null);

    return (
        <SearchWrap>
            <SearchInput ref={searchInputRef} />
            <SearchButton onClick={() => handleClickButton(searchInputRef.current.value)}>{buttonText}</SearchButton>
        </SearchWrap>
    );
};

export default InputButtonBox;
