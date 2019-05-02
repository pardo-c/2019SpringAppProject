'use strict';
module.exports = (sequelize, DataTypes) => {
    const Uplift = sequelize.define('Uplift', {
      id: {
        type: DataTypes.INTEGER,
        omitnull: true,
        primaryKey: true,
        autoIncrement: true
      },
      story: DataTypes.TEXT
    })
    Uplift.associate = function (models){
    }
    return Uplift
  }
  