const router = require("express").Router();
const { Locations } = require("../../models");

// see locations

router.get("/locations", (req, res) => {
  Locations.findall({
    include: [
      {
        model: Hotels,
        attributes: [""],
      },
    ],
  })
    .then((dbLocationData) => res.json(dbLocationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
