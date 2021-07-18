const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    keywords: {
        type: [String],
    },
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
