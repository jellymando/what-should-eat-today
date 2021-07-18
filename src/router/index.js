const Member = require("../models/Member");
const Place = require("../models/Place");
const Keyword = require("../models/Keyword");

module.exports = function (app) {
    app.get("/api/members", (req, res) => {
        Member.find((err, data) => {
            if (err) return res.json({ success: false, err });
            res.json(data);
        });
    });

    app.post("/api/members", (req, res) => {
        const member = new Member(req.body);
        member.save((err, doc) => {
            if (err) return res.json({ success: false, err });
            return res.status(200).json({ success: true });
        });
    });

    app.delete("/api/members/:_id", (req, res) => {
        Member.deleteOne({ _id: req.params._id }, (err, data) => {
            if (err) return res.json({ success: false, err });
            res.status(200).json({ success: true });
        });
    });

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
