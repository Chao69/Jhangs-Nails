'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Type.belongsTo(models.Category)
    }
  };
  Type.init({
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type',
  });
  return Type;
};