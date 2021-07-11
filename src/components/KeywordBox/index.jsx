import React, { useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { keywordSelector } from "store/selector";
import { addedKeywordState } from "store/atom";
import { addKeyword } from "api/keyword";
import { Container, AddKeywordWrap, AddKeywordInput, AddKeywordButton, KeywordWrap, Keyword } from "./styled";

const KeywordBox = () => {
    const inputRef = useRef(null);
    const keywordList = useRecoilValue(keywordSelector);
    const addedKeyword = useSetRecoilState(addedKeywordState);

    const addKeywordHandler = async (value) => {
        const { success, err } = await addKeyword({ title: value });
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert("이미 등록된 키워드입니다.");
                    break;
            }
        } else {
            addedKeyword(value);
        }
    };

    return (
        <Container>
            <AddKeywordWrap>
                <AddKeywordInput ref={inputRef} />
                <AddKeywordButton onClick={() => addKeywordHandler(inputRef.current.value)}>추가</AddKeywordButton>
            </AddKeywordWrap>
            <KeywordWrap>
                {keywordList &&
                    keywordList.map((keyword) => {
                        return <Keyword key={keyword._id}>{keyword.title}</Keyword>;
                    })}
            </KeywordWrap>
        </Container>
    );
};

export default KeywordBox;
