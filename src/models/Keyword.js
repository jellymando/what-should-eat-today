const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const keywordSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        unique: true,
    },
});

const Keyword = mongoose.model("Keyword", keywordSchema);

module.exports = Keyword;
