const { Trip } = require("../models");

const tripdata = [{}];

const seedTrips = () => Trip.bulkCreate(tripdata);
module.exports = seedTrips;
