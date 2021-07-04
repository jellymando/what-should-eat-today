const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  latlng: {
    type: {
      x: Number,
      y: Number,
    },
    required: true,
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
