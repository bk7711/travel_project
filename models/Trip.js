const { Model, DataTypes, STRING } = require("sequelize");
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
    trip_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // location_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "location",
    //     key: "id",
    //   },
    // },
    // restaurant_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // hotel_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
    // comment_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    // },
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
