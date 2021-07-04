const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  latLng: {
    type: Object,
    required: true,
  },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
