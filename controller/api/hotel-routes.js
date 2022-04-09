const router = require("express").Router();
const { Hotel, Location } = require("../../models");
const sequelize = require('../../config/connection');

router.get("/", (req, res) => {
  Hotel.findAll({
  }).then((dbHotelData) => res.json(dbHotelData))
    //try return object
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    Hotel.create({
      name: req.body.name,
      city: req.body.city
    }).then(dbHotelData => res.json(dbHotelData))
      .catch (err => {
        console.log(err);
        res.status(500).json(err);
    });  
});

module.exports = router;