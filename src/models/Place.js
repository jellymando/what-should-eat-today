const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
    },
    latlng: {
        type: {
            x: Number,
            y: Number,
        },
        required: true,
        unique: true,
    },
    keywords: {
        type: [String],
    },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
