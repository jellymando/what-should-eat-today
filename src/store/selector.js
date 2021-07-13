import { selector } from "recoil";
import { addPlaceQueryState, addKeywordQueryState } from "./atom";
import { getPlaces } from "api/place";
import { getKeywords } from "api/keyword";

export const placeListSelector = selector({
    key: "placeListSelector",
    get: async ({ get }) => {
        get(addPlaceQueryState);
        return await getPlaces();
    },
});

export const keywordListSelector = selector({
    key: "keywordListSelector",
    get: async ({ get }) => {
        get(addKeywordQueryState);
        return await getKeywords();
    },
});
