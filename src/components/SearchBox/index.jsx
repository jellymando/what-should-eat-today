import React, { useRef } from "react";
import { SearchWrap, SearchInput, SearchButton } from "./styled";

const SearchBox = ({ handleClickButton }) => {
    const searchInputRef = useRef(null);

    return (
        <SearchWrap>
            <SearchInput ref={searchInputRef} />
            <SearchButton onClick={() => handleClickButton(searchInputRef.current.value)}>검색</SearchButton>
        </SearchWrap>
    );
};

export default SearchBox;
