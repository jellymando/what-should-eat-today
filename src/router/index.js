const Place = require("../models/Place");
const Keyword = require("../models/Keyword");

module.exports = function (app) {
    app.get("/", function (req, res) {});

    app.get("/api/places", (req, res) => {
        Place.find((err, data) => {
            if (err) return res.json({ success: false, err });
            res.json(data);
        });
    });

    app.post("/api/places", (req, res) => {
        const place = new Place(req.body);
        place.save((err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({ success: true });
        });
    });

    app.delete("/api/places/:_id", (req, res) => {
        Place.deleteOne({ _id: req.params._id }, (err, data) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json({ success: true });
        });
    });

    app.get("/api/keywords", (req, res) => {
        Keyword.find((err, data) => {
            if (err) return res.json({ success: false, err });
            res.json(data);
        });
    });

    app.post("/api/keywords", (req, res) => {
        const keyword = new Keyword(req.body);
        keyword.save((err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({ success: true });
        });
    });

    app.delete("/api/keywords/:_id", (req, res) => {
        Keyword.deleteOne({ _id: req.params._id }, (err, data) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({ success: true });
        });
    });
};
