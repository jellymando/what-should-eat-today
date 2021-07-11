import { atom } from "recoil";

export const selectedPlaceState = atom({
    key: "selectedPlaceState",
    default: "",
});

export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});

export const addedKeywordState = atom({
    key: "addedKeywordState",
    default: "",
});
