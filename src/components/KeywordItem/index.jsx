import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedKeywordsState } from "store/atom";
import { keywordListSelector } from "store/selector";
import { deleteKeyword } from "api/keyword";
import { Keyword, Text, TrashIcon } from "./styled";

const KeywordItem = ({ id, title }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useRecoilState(selectedKeywordsState);
    const setKeywordList = useSetRecoilState(keywordListSelector);

    const selectKeywordHandler = (title) => {
        setIsSelected(!isSelected);
        setSelectedKeywords([...selectedKeywords, title]);
    };

    const deleteKeywordHandler = async () => {
        const { success, err } = await deleteKeyword(id);
        if (success) setKeywordList();
    };

    return (
        <Keyword isSelected={isSelected}>
            <Text onClick={() => selectKeywordHandler(title)}>{title}</Text>
            <TrashIcon onClick={() => deleteKeywordHandler()} />
        </Keyword>
    );
};

export default KeywordItem;
