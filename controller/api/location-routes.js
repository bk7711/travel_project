const router = require("express").Router();
const { Location } = require("../../models");

// see locations

router.get("/locations", (req, res) => {
  Location.findAll({
    include: [
      {
        model: Hotels,
      },
    ],
  })
    .then((dbLocationData) => res.json(dbLocationData))
    //try return object
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
