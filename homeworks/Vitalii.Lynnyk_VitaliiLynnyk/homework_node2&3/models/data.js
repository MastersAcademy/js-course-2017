'use strict';
module.exports = (sequelize, DataTypes) => {
  var Data = sequelize.define('Data', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    bornCountry: DataTypes.STRING,
    inf: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Data;
};