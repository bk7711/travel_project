const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const locationRoutes = require("./location-routes.js");
const hotelRoutes = require("./hotel-routes.js");
const restaurantRoutes = require("./restaurant-routes.js");

router.use("/users", userRoutes);
router.use("/locations", locationRoutes);
router.use("/hotels", hotelRoutes);
router.use("/restaurants", restaurantRoutes);

module.exports = router;
