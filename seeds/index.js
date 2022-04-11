const seedUsers = require("./user-seeds");
const sequelize = require("../config/connection");
const seedLocation = require("./location-seeds");
const seedHotels = require("./hotel-seeds");
const seedRestaurants = require("./restaurant-seeds");
const seedTrips = require("./trip-seeds");
const seedComments = require("./comment-seeds");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedLocation();
  console.log("--------------");

  await seedHotels();
  console.log("--------------");

  await seedRestaurants();
  console.log("--------------");

  // await seedTrips();
  // console.log("--------------");

  // await seedComments();
  // console.log("--------------");

  process.exit(0);
};

seedAll();
