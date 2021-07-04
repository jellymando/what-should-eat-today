import React, { useRef } from "react";
import { SearchWrap, SearchInput, SearchButton } from "./styled";

const Search = ({ setSearchKeyword }) => {
  const searchInputRef = useRef(null);

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

export default Search;
