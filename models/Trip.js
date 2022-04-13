const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      },
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
<<<<<<< HEAD:Models/Trip.js
      references: {
        model: "restaurant",
        key: "id",
      },
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "hotel",
        key: "id",
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "comment",
        key: "id",
      },
=======
      allowNull: true,
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
>>>>>>> 84aa17b864a2e21a7c96e955bacfb31eb9246e19:models/Trip.js
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trip",
  }
);

module.exports = Trip;
