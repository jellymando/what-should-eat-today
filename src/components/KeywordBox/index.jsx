import React, { useRef, useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { keywordSelector } from "store/selector";
import { addedKeywordState } from "store/atom";
import { addKeyword } from "api/keyword";
import InputButtonBox from "components/InputButtonBox";
import { Container, KeywordWrap, Keyword } from "./styled";

const KeywordBox = () => {
    const inputRef = useRef(null);
    const keywordList = useRecoilValue(keywordSelector);
    const addedKeyword = useSetRecoilState(addedKeywordState);

    const addKeywordHandler = useCallback(async () => {
        if (!inputRef.current) return;
        const { success, err } = await addKeyword({ title: inputRef.current.value });
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert("이미 등록된 키워드입니다.");
                    break;
            }
        } else {
            addedKeyword(inputRef.current.value);
        }
    }, [inputRef.current]);

    return (
        <Container>
            <InputButtonBox buttonText="추가" handleClickButton={addKeywordHandler} />
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
