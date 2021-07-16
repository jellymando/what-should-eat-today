import axios from "axios";
import mongoose from "mongoose";
import { URI } from "constants/uri";

export const getPlaces = async () => {
    try {
        const res = await axios.get(URI.PLACES);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const addPlace = async (place) => {
    try {
        const {
            data: { success, err },
        } = await axios.post(URI.PLACES, {
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
        } = await axios.delete(`${URI.PLACES}/${id}`);
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};
