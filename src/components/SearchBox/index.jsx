import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { searchKeywordState } from "store/atom";
import { SearchWrap, SearchInput, SearchButton } from "./styled";

const SearchBox = () => {
    const searchInputRef = useRef(null);
    const setSearchKeyword = useSetRecoilState(searchKeywordState);

    const handleSearch = () => {
        if (!searchInputRef.current) return;
        setSearchKeyword(searchInputRef.current.value);
    };

    return (
        <SearchWrap>
            <SearchInput ref={searchInputRef} />
            <SearchButton onClick={handleSearch.bind(this)}>검색</SearchButton>
        </SearchWrap>
    );
};

export default SearchBox;
