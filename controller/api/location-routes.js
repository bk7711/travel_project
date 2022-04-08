const router = require("express").Router();
const { Location } = require("../../models");

// see locations

router.get("/", (req, res) => {
  Location
    .findAll
    //   {
    //   include: [
    //     {
    //       model: Hotels,
    //       attributes: [""],
    //     },
    //   ],
    // }
    ()
    .then((dbLocationData) => res.json(dbLocationData))
    //try return object
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const dbLocationData = await Location.create({
      name: req.body.name,
    });

    // req.session.save(() => {
    //   req.session.loggedIn = true;

    res.status(200).json(dbLocationData);
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
