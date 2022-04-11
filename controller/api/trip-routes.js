const router = require("express").Router();
const { Trip } = require("../../models");
const sequelize = require('../../config/connection');

router.get("/", (req, res) => {
  Trip.findAll({
  }).then((dbTripData) => res.json(dbTripData))
    //try return object
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.post("/", (req, res) => {
//     Trip.create({
//       name: req.body.name,
//       city: req.body.city
//     }).then(dbTripData => res.json(dbTripData))
//       .catch (err => {
//         console.log(err);
//         res.status(500).json(err);
//     });  
// });

module.exports = router;