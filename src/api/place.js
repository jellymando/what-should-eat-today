import axios from "axios";
import mongoose from "mongoose";

export const getPlaces = async () => {
    try {
        const res = await axios.get("/places");
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const addPlace = async (place) => {
    try {
        const {
            data: { success, err },
        } = await axios.post("/places", {
            _id: new mongoose.Types.ObjectId(),
            name: place.name,
            latlng: {
                x: place.x,
                y: place.y,
            },
            keywords: place.keywords,
        });
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};

export const deletePlace = async (id) => {
    try {
        const {
            data: { success, err },
        } = await axios.delete(`/places/${id}`);
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};
