'use strict';
module.exports = (sequelize, DataTypes) => {
    const Friends = sequelize.define('Friends', {
      name: DataTypes.STRING,
      status: DataTypes.STRING
    })

    Friends.associate = function (models){
    }
    
    return Friends
  }
