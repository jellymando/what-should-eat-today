import React, { useState } from "react";
import mongoose from "mongoose";
import { useRecoilState, useSetRecoilState } from "recoil";
import { selectedKeywordsState, keywordsQueryState } from "store/atom";
import { deleteKeyword } from "api/keyword";
import { Keyword, Text, TrashIcon } from "./styled";

const KeywordItem = ({ id, title }: { id: string; title: string }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useRecoilState(selectedKeywordsState);
    const setAddKeywordQuery = useSetRecoilState(keywordsQueryState);

    const selectKeywordHandler = (title: string) => {
        setIsSelected(!isSelected);
        setSelectedKeywords([...selectedKeywords, title]);
    };

    const deleteKeywordHandler = async () => {
        const { success, err } = await deleteKeyword(id);
        if (success) setAddKeywordQuery(title);
    };

    return (
        <Keyword isSelected={isSelected}>
            <Text onClick={() => selectKeywordHandler(title)}>{title}</Text>
            <TrashIcon onClick={() => deleteKeywordHandler()} />
        </Keyword>
    );
};

export default KeywordItem;
