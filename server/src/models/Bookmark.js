'use strict';
module.exports = (sequelize, _DataTypes) => {
    const Bookmark = sequelize.define('Bookmark', {})
    // bookmark will be association b/w user and exercises
    Bookmark.associate = function (models) {
      Bookmark.belongsTo(models.User)
      Bookmark.belongsTo(models.Exercises)
    }
  
    return Bookmark
  } 
