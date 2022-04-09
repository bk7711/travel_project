const seedUsers = require("./user-seeds");
const sequelize = require("../config/connection");
const seedLocation = require("./location-seeds");
const seedHotels = require("./hotel-seeds")

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  console.log("--------------");

  await seedUsers();
  console.log("--------------");

  await seedLocation();
  console.log("--------------");

  await seedHotels();
  console.log("--------------");

  process.exit(0);
};

seedAll();
