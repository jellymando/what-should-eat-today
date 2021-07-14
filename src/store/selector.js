import { selector } from "recoil";
import { placesQueryState, keywordsQueryState } from "./atom";
import { getPlaces } from "api/place";
import { getKeywords } from "api/keyword";

export const placeListSelector = selector({
    key: "placeListSelector",
    get: async ({ get }) => {
        get(placesQueryState);
        return await getPlaces();
    },
});

export const keywordListSelector = selector({
    key: "keywordListSelector",
    get: async ({ get }) => {
        get(keywordsQueryState);
        return await getKeywords();
    },
});
