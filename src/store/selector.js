import { selector } from "recoil";
import { getPlaces } from "api/place";

export const placeListSelector = selector({
    key: "placeListSelector",
    get: async () => {
        const places = await getPlaces();
        return places;
    },
});
