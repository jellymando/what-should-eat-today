import { atom } from "recoil";

export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});

export const selectedPlaceState = atom({
    key: "selectedPlaceState",
    default: { name: "", x: 0, y: 0 },
});
