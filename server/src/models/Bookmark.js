'use strict';
module.exports = (sequelize, DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {
      id: {
        type: DataTypes.INTEGER,
        omitnull: true,
        primaryKey: true,
        autoIncrement: true
      }
    })
    // bookmark will be association b/w user and exercises
    Bookmark.associate = function (models) {
      Bookmark.belongsTo(models.User)
      Bookmark.belongsTo(models.Exercises)
    }
  
    return Bookmark
  } 
