import { selector } from "recoil";
import { placeListState, keywordListState } from "./atom";
import { getPlaces } from "api/place";
import { getKeywords } from "api/keyword";

export const placeListSelector = selector({
    key: "placeListSelector",
    get: async ({ get }) => {
        get(placeListState);
        return await getPlaces();
    },
    set: ({ set }) => {
        set(placeListState, getPlaces());
    },
});

export const keywordListSelector = selector({
    key: "keywordListSelector",
    get: async ({ get }) => {
        get(keywordListState);
        return await getKeywords();
    },
    set: ({ set }) => {
        set(keywordListState, getKeywords());
    },
});
