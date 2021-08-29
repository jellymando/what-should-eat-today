import React, { useRef, useEffect } from "react";
import { SearchWrap, SearchInput, SearchButton } from "./styled";

const InputButtonBox = ({
    buttonText,
    onClickButton,
    focus,
}: {
    buttonText: string;
    onClickButton: (value: string) => void;
    focus?: boolean;
}) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!searchInputRef.current || !focus) return;
        searchInputRef.current.focus();
    }, [searchInputRef]);

    return (
        <SearchWrap>
            <SearchInput ref={searchInputRef} />
            <SearchButton
                onClick={() => {
                    onClickButton(searchInputRef.current!.value);
                    searchInputRef.current!.value = "";
                }}
            >
                {buttonText}
            </SearchButton>
        </SearchWrap>
    );
};

export default InputButtonBox;
