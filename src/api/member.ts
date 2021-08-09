import axios from "axios";
import mongoose from "mongoose";
import { MemberType } from "types";
import { URI } from "constants/uri";

export const getMembers = async () => {
    try {
        const res = await axios.get(URI.MEMBERS);
        return res.data;
    } catch (e) {
        console.log(e);
    }
};

export const addMember = async (member: MemberType) => {
    try {
        const { data } = await axios.post(URI.MEMBERS, {
            _id: new mongoose.Types.ObjectId(),
            profileImage: member.profileImage,
            name: member.name,
            keywords: member.keywords,
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const deleteMember = async (id: string) => {
    try {
        const { data } = await axios.delete(`${URI.MEMBERS}/${id}`);
        return data;
    } catch (e) {
        console.log(e);
    }
};
