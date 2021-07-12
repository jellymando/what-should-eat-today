import { atom } from "recoil";

export const placeListState = atom({
    key: "placeListState",
    default: [],
});

export const selectedPlaceState = atom({
    key: "selectedPlaceState",
    default: "",
});

export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});

export const keywordListState = atom({
    key: "keywordListState",
    default: "",
});

export const selectedKeywordsState = atom({
    key: "selectedKeywordsState",
    default: [],
});
