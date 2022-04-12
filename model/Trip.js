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
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
