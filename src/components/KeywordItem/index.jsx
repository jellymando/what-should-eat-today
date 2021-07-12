import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { addedKeywordState } from "store/atom";
import { deleteKeyword } from "api/keyword";
import { Keyword, Text, TrashIcon } from "./styled";

const KeywordItem = ({ id, title }) => {
    const [isSelected, setIsSelected] = useState(false);
    const addedKeyword = useSetRecoilState(addedKeywordState);

    const deleteKeywordHandler = async () => {
        const { success, err } = await deleteKeyword(id);
        if (success) addedKeyword(title);
    };

    return (
        <Keyword onClick={() => setIsSelected(!isSelected)}>
            <Text>{title}</Text>
            <TrashIcon onClick={() => deleteKeywordHandler()} />
        </Keyword>
    );
};

export default KeywordItem;
