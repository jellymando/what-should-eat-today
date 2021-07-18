import { selector } from "recoil";
import { membersQueryState, placesQueryState, keywordsQueryState } from "./atom";
import { getMembers } from "api/member";
import { getPlaces } from "api/place";
import { getKeywords } from "api/keyword";

export const memberListSelector = selector({
    key: "memberListSelector",
    get: async ({ get }) => {
        get(membersQueryState);
        return await getMembers();
    },
});

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
