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
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Hotel.belongsTo(Location, {
  foreignKey: "location_id",
});
// Hotel.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
// Location.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
Restaurant.belongsTo(Location, {
  foreignKey: "location_id",
});
// Restaurant.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
Comment.belongsTo(User, {
  through: "Trip",
  foreignKey: "comment_id",
});

module.exports = { User, Location, Hotel, Restaurant, Comment, Trip };
