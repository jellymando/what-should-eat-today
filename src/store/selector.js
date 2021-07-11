import { selector } from "recoil";
import { addedKeywordState } from "./atom";
import { getPlaces } from "api/place";
import { getKeywords } from "api/keyword";

export const placeListSelector = selector({
    key: "placeListSelector",
    get: async () => {
        return await getPlaces();
    },
});

export const keywordSelector = selector({
    key: "keywordSelector",
    get: async ({ get }) => {
        const addedKeyword = get(addedKeywordState);
        return await getKeywords();
    },
});
