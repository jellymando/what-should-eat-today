import axios from "axios";
import mongoose from "mongoose";

export const getKeywords = async () => {
    try {
        const { data } = await axios.get("/keywords");
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const addKeyword = async (keyword) => {
    try {
        const {
            data: { success, err },
        } = await axios.post("/keywords", {
            _id: new mongoose.Types.ObjectId(),
            title: keyword.title,
        });
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};
