import axios from "axios";
import mongoose from "mongoose";
import { URI } from "constants/uri";

export const getKeywords = async () => {
    try {
        const { data } = await axios.get(URI.KEYWORDS);
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const addKeyword = async (title: string) => {
    try {
        const { data } = await axios.post(URI.KEYWORDS, {
            _id: new mongoose.Types.ObjectId(),
            title: title,
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const deleteKeyword = async (id: string) => {
    try {
        const { data } = await axios.delete(`${URI.KEYWORDS}/${id}`);
        return data;
    } catch (e) {
        console.log(e);
    }
};
