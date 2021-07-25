import { atom } from "recoil";

export const isNavOpenState = atom({
    key: "isNavOpenState",
    default: "",
});

export const membersQueryState = atom({
    key: "membersQueryState",
    default: "",
});

export const selectedMemberState = atom({
    key: "selectedMemberState",
    default: [],
});

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

export const isModalOpenState = atom({
    key: "isModalOpenState",
    default: false,
});
