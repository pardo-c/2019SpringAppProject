'use strict';
module.exports = (sequelize, DataTypes) => {
    const Friends = sequelize.define('Friends', {
      id: {
        type: DataTypes.INTEGER,
        omitnull: true,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      status: DataTypes.STRING
    })

    Friends.associate = function (models){
    }
    
    return Friends
  }
