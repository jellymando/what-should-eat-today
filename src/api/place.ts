import axios from "axios";
import mongoose from "mongoose";
import { PlaceType } from "types";
import { URI } from "constants/uri";

export const getPlaces = async () => {
    try {
        const res = await axios.get(URI.PLACES);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const addPlace = async (place: PlaceType) => {
    try {
        const { data } = await axios.post(URI.PLACES, {
            _id: place._id,
            name: place.name,
            latlng: place.latlng,
            keywords: place.keywords,
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const deletePlace = async (id: string) => {
    try {
        const { data } = await axios.delete(`${URI.PLACES}/${id}`);
        return data;
    } catch (e) {
        console.log(e);
    }
};
