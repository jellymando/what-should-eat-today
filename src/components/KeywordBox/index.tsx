import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { keywordsQueryState } from "store/atom";
import { keywordListSelector } from "store/selector";
import { KeywordType } from "types";
import { addKeyword } from "api/keyword";
import { MESSAGE } from "constants/message";
import InputButtonBox from "components/InputButtonBox";
import KeywordItem from "components/KeywordItem";
import { Container, KeywordWrap } from "./styled";

const KeywordBox = () => {
    const keywordList = useRecoilValue(keywordListSelector);
    const setAddKeywordQuery = useSetRecoilState(keywordsQueryState);

    const addKeywordHandler = async (value: string) => {
        const title = value.trim();
        if (!(title.length > 0)) return alert(MESSAGE.KEYWORDS.ERROR.EMPTY);
        const { success, err } = await addKeyword(title);
        if (!success) {
            switch (err.code) {
                case 11000:
                    alert(MESSAGE.KEYWORDS.ERROR.EXIST);
                    break;
            }
        } else {
            setAddKeywordQuery(title);
        }
    };

    return (
        <Container>
            <InputButtonBox buttonText="추가" handleClickButton={addKeywordHandler} focus={false} />
            <KeywordWrap>
                {keywordList &&
                    keywordList.map((keyword: KeywordType) => {
                        return <KeywordItem key={keyword._id} id={keyword._id} title={keyword.title} />;
                    })}
            </KeywordWrap>
        </Container>
    );
};

export default KeywordBox;
