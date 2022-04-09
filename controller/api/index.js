const router = require("express").Router();
const userRoutes = require("./user-routes.js");
const locationRoutes = require("./location-routes.js");
const hotelRoutes = require("./hotel-routes.js")

router.use("/users", userRoutes);
router.use("/locations", locationRoutes);
router.use("/hotels", hotelRoutes);

module.exports = router;
