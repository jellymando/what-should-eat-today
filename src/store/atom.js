import { atom } from "recoil";

export const placeListState = atom({
    key: "placeListState",
    default: [],
});

export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});

export const selectedPlaceState = atom({
    key: "selectedPlaceState",
    default: { name: "", x: 0, y: 0 },
});
