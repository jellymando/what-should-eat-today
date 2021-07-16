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

export const addKeyword = async (title) => {
    try {
        const {
            data: { success, err },
        } = await axios.post(URI.KEYWORDS, {
            _id: new mongoose.Types.ObjectId(),
            title: title,
        });
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};

export const deleteKeyword = async (id) => {
    try {
        const {
            data: { success, err },
        } = await axios.delete(`${URI.KEYWORDS}/${id}`);
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};
