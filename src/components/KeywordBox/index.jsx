import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { keywordsQueryState } from "store/atom";
import { keywordListSelector } from "store/selector";
import { addKeyword } from "api/keyword";
import InputButtonBox from "components/InputButtonBox";
import KeywordItem from "components/KeywordItem";
import { Container, KeywordWrap } from "./styled";

const KeywordBox = () => {
    const keywordList = useRecoilValue(keywordListSelector);
    const setAddKeywordQuery = useSetRecoilState(keywordsQueryState);

    const addKeywordHandler = async (title) => {
        const { success, err } = await addKeyword(title);
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert("이미 등록된 키워드입니다.");
                    break;
            }
        } else {
            setAddKeywordQuery(title);
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
