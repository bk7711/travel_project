const router = require("express").Router();
const { Restaurant, Location } = require("../../models");
const sequelize = require('../../config/connection');

router.get("/", (req, res) => {
  Restaurant.findAll({
  }).then((dbRestaurantData) => res.json(dbRestaurantData))
    //try return object
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
    Restaurant.create({
      name: req.body.name,
      city: req.body.city
    }).then(dbRestaurantData => res.json(dbRestaurantData))
      .catch (err => {
        console.log(err);
        res.status(500).json(err);
    });  
});

module.exports = router;