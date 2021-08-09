import { atom } from "recoil";
import { MemberType, PlaceType, KeywordType } from "types";

export const isNavOpenState = atom({
    key: "isNavOpenState",
    default: false,
});

export const membersQueryState = atom({
    key: "membersQueryState",
    default: "",
});

export const selectedMemberState = atom<MemberType[]>({
    key: "selectedMemberState",
    default: [],
});

export const placesQueryState = atom({
    key: "placesQueryState",
    default: "",
});

export const selectedPlaceState = atom({
    key: "selectedPlaceState",
    default: {
        _id: "",
        name: "",
        latlng: {
            x: 0,
            y: 0,
        },
    },
});

export const filteredPlaceListState = atom<PlaceType[]>({
    key: "filteredPlaceListState",
    default: [],
});

export const searchKeywordState = atom({
    key: "searchKeywordState",
    default: "",
});

export const keywordsQueryState = atom({
    key: "keywordsQueryState",
    default: "",
});

export const selectedKeywordsState = atom<string[]>({
    key: "selectedKeywordsState",
    default: [],
});
