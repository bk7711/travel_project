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
<<<<<<< HEAD:Models/index.js
<<<<<<< HEAD

=======
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
=======

>>>>>>> 84aa17b864a2e21a7c96e955bacfb31eb9246e19:models/index.js
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
<<<<<<< HEAD:Models/index.js
<<<<<<< HEAD

=======
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
=======

>>>>>>> 84aa17b864a2e21a7c96e955bacfb31eb9246e19:models/index.js
Hotel.belongsTo(Location, {
  foreignKey: "location_id",
});
// Hotel.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
<<<<<<< HEAD:Models/index.js
<<<<<<< HEAD

=======
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
=======

>>>>>>> 84aa17b864a2e21a7c96e955bacfb31eb9246e19:models/index.js
// Location.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
<<<<<<< HEAD:Models/index.js
<<<<<<< HEAD
=======
>>>>>>> 84aa17b864a2e21a7c96e955bacfb31eb9246e19:models/index.js

Restaurant.belongsTo(Location, {
  foreignKey: "location_id",
});

<<<<<<< HEAD:Models/index.js
=======
Restaurant.belongsTo(Location, {
  foreignKey: "location_id",
});
>>>>>>> 9b9d7ebc1f3455f8dea9c5c20d0164011cbe06b7
=======
>>>>>>> 84aa17b864a2e21a7c96e955bacfb31eb9246e19:models/index.js
// Restaurant.belongsToMany(Trip, {
//   through: "Trip",
//   foreignKey: "id",
// });
Comment.belongsTo(User, {
  through: "Trip",
  foreignKey: "comment_id",
});

module.exports = { User, Location, Hotel, Restaurant, Comment, Trip };
