const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Hotel extends Model {}

Hotel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      },
    },
    // trip_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "trip",
    //     key: "id",
    //   },
    // },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "hotel",
  }
);

module.exports = Hotel;
