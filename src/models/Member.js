const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    _id: Schema.Types.ObjectId,
    profileImage: {
        type: String,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    keywords: {
        type: [String],
    },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
