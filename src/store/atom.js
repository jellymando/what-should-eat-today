import { atom } from "recoil";

export const addPlaceQueryState = atom({
    key: "addPlaceQueryState",
    default: "",
});

export const selectedPlaceState = atom({
    key: "selectedPlaceState",
    default: "",
});

export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});

export const addKeywordQueryState = atom({
    key: "addKeywordQueryState",
    default: "",
});

export const selectedKeywordsState = atom({
    key: "selectedKeywordsState",
    default: [],
});
