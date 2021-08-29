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

    const onSelectKeyword = (title: string) => {
        setIsSelected(!isSelected);
        setSelectedKeywords([...selectedKeywords, title]);
    };

    const onDeleteKeyword = async () => {
        const { success, err } = await deleteKeyword(id);
        if (success) setAddKeywordQuery(title);
    };

    return (
        <Keyword isSelected={isSelected}>
            <Text onClick={() => onSelectKeyword(title)}>{title}</Text>
            <TrashIcon onClick={() => onDeleteKeyword()} />
        </Keyword>
    );
};

export default KeywordItem;
