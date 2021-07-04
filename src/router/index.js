const Place = require("../models/Place");

module.exports = function (app) {
  app.get("/", function (req, res) {});

  app.get("/places", (req, res) => {
    Place.find((err, data) => {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(data);
    });
  });

  app.post("/places", (req, res) => {
    const place = new Place(req.body);
    place.save((err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true });
    });
  });

  app.delete("/places/:id", (req, res) => {
    Place.deleteOne({ id: req.params.id }, (err, data) => {
      if (err) return res.status(500).send({ error: "database failure" });
      res.json(data);
    });
  });
};
