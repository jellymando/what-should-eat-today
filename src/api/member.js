import axios from "axios";
import mongoose from "mongoose";
import { URI } from "constants/uri";

export const getMembers = async () => {
    try {
        const res = await axios.get(URI.MEMBERS);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const addMember = async (member) => {
    try {
        const {
            data: { success, err },
        } = await axios.post(URI.MEMBERS, {
            _id: new mongoose.Types.ObjectId(),
            name: member.name,
            keywords: member.keywords,
        });
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};

export const deleteMember = async (id) => {
    try {
        const {
            data: { success, err },
        } = await axios.delete(`${URI.MEMBERS}/${id}`);
        return { success, err };
    } catch (e) {
        console.log(e);
    }
};
