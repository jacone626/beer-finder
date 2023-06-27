const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pairing extends Model {}

Pairing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    activity_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'activity',
          key: 'id',
        },
      },
    beerIndex_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'beerIndex',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pairing',
  }
);

module.exports = Pairing;