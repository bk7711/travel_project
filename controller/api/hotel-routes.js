const router = require("express").Router();
const { Hotel, Location } = require("../../models");

router.get("/", (req, res) => {
  Hotel.findAll
  ().then((dbHotelData) => res.json(dbHotelData))
    //try return object
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const dbHotelData = await Hotel.create({
      name: req.body.name,
      city: req.city.name
    });

    // req.session.save(() => {
    //   req.session.loggedIn = true;

    res.status(200).json(dbHotelData);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;