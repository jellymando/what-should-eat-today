import React, { useRef, useEffect } from "react";
import { SearchWrap, SearchInput, SearchButton } from "./styled";

const InputButtonBox = ({ buttonText, handleClickButton, focus }) => {
    const searchInputRef = useRef(null);

    useEffect(() => {
        if (!searchInputRef.current || !focus) return;
        searchInputRef.current.focus();
    }, [searchInputRef]);

    return (
        <SearchWrap>
            <SearchInput ref={searchInputRef} />
            <SearchButton
                onClick={() => {
                    handleClickButton(searchInputRef.current.value);
                    searchInputRef.current.value = "";
                }}
            >
                {buttonText}
            </SearchButton>
        </SearchWrap>
    );
};

export default InputButtonBox;
