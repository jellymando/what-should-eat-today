import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { keywordSelector } from "store/selector";
import { addedKeywordState } from "store/atom";
import { addKeyword, deleteKeyword } from "api/keyword";
import InputButtonBox from "components/InputButtonBox";
import KeywordItem from "components/KeywordItem";
import { Container, KeywordWrap } from "./styled";

const KeywordBox = () => {
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
            <InputButtonBox buttonText="추가" handleClickButton={addKeywordHandler} />
            <KeywordWrap>
                {keywordList &&
                    keywordList.map((keyword) => {
                        return <KeywordItem key={keyword._id} id={keyword._id} title={keyword.title} />;
                    })}
            </KeywordWrap>
        </Container>
    );
};

export default KeywordBox;
