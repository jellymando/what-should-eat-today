import { selector } from "recoil";
import { getPlaces } from "api/place";

export const placeListSelector = selector({
    key: "placeListSelector",
    get: async () => {
        const data = await getPlaces();
        if (data) {
            const places = [];
            for (let i in data) {
                places.push({
                    _id: data[i]._id,
                    name: data[i].name,
                    latlng: {
                        x: data[i].latlng.x,
                        y: data[i].latlng.y,
                    },
                });
            }
            return places;
        }
    },
});
