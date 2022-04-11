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
    },
    createdAt: {
      field: "created_at",
      type: Sequelize.DATE,
    },

    updatedAt: {
      field: "updated_at",
      type: Sequelize.DATE,
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
