const router = require("express").Router();
const { Trip, User } = require("../../models");
const { Location } = require("../../models");
const sequelize = require("../../config/connection");
const { QueryTypes } = require("sequelize");

router.get("/", (req, res) => {
   Trip.findAll({ include: [User] })
      .then((dbTripData) => res.json(dbTripData))
      //try return object
      .catch((err) => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get("/trip-detail/:id", (req, res) => {
   Trip.findOne({ 
      where: {
         id: req.params.id
      }
   }).
   then( (tripData) => {
      console.log(tripData["trip_name"]);
      res.render('trip-details', { tripData });
   })
   .catch((e) => {console.log("catchatcha");})
   
   
});
   // router.get("/:id", (req, res) => {
   //   Trip.findAll({
   //     where: {
   //       user_id: req.params.id,
   //     },
   //     include: [
   //       {
   //         model: User,
   //         attributes: ["username"],
   //       },
   //       {
   //         model: Location,
   //         attributes: ["city", "country"],
   //       },
   //       {
   //         model: Restaurant,
   //         attributes: ["name"],
   //       },
   //       {
   //         model: Hotel,
   //         attributes: ["name"],
   //       },
   //       {
   //         model: Comment,
   //         attributes: ["comment_text", "user_id"],
   //       },
   //     ],
   //   });
   // // });

router.post("/", (req, res) => {
      // Trip.create({
      //   country:req.body.country,
      //   Trip.find
      // })
      //   .catch (err => {
      //     console.log(err);
      //     res.status(500).json(err);
      // });
      console.log(req.session.user_id);
   });

module.exports = router;
