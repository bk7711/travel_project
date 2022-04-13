const { Trip } = require("../models");

const tripdata = [
  {
    id: 1,
    user_id: 1,
    // location_id: 3,
    // hotel_id: 3,
    // restaurant_id: 3,
    // comment_id: 1,
    trip_name: "My first trip",
  },
];

const seedTrips = () => Trip.bulkCreate(tripdata);
module.exports = seedTrips;
