// import all models
const User = require("./User");
const Location = require("./Locations");
const Hotel = require("./Hotels");
const Restaurant = require("./Restaurants");
const Comment = require("./Comment");
const Trip = require("./Trip");

// create associations
Trip.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
User.hasMany(Trip, {
  //   through: "Trip",
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
<<<<<<< HEAD

=======
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
<<<<<<< HEAD

=======
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
Hotel.belongsTo(Location, {
  foreignKey: "location_id",
});
// Hotel.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
<<<<<<< HEAD

=======
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
// Location.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
<<<<<<< HEAD

Restaurant.belongsTo(Location, {
  foreignKey: "location_id",
});

=======
Restaurant.belongsTo(Location, {
  foreignKey: "location_id",
});
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
// Restaurant.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
Comment.belongsTo(User, {
  through: "Trip",
  foreignKey: "comment_id",
});

module.exports = { User, Location, Hotel, Restaurant, Comment, Trip };
