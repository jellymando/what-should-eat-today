import { atom } from "recoil";

export const placesQueryState = atom({
    key: "placesQueryState",
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

export const keywordsQueryState = atom({
    key: "keywordsQueryState",
    default: "",
});

export const selectedKeywordsState = atom({
    key: "selectedKeywordsState",
    default: [],
});
