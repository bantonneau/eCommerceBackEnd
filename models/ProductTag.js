const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    prouduct_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
