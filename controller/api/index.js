const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const locationRoutes = require("./location-routes.js");
const hotelRoutes = require("./hotel-routes.js");
const restaurantRoutes = require("./restaurant-routes.js");
<<<<<<< HEAD
const tripRoutes = require("./trip-routes");
=======
const tripRoutes = require("./trip-routes.js");
>>>>>>> 84aa17b864a2e21a7c96e955bacfb31eb9246e19

router.use("/users", userRoutes);
router.use("/locations", locationRoutes);
router.use("/hotels", hotelRoutes);
router.use("/restaurants", restaurantRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
