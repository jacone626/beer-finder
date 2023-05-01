const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CannabisIndex extends Model {}

CannabisIndex.init(
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
    // description: {
    //   type: DataTypes.STRING,
    // },
    review: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    emoji_starRating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    strain: {
      type: DataTypes.String,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'CannabisIndex',
  }
);

module.exports = CannabisIndex;

