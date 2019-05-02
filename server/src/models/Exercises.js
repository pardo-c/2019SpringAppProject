'use strict';
module.exports = (sequelize, DataTypes) => {
  const Exercises = sequelize.define('Exercises', {
   // what makes an exercise?
   id: {
    type: DataTypes.INTEGER,
    omitnull: true,
    primaryKey: true,
    autoIncrement: true
  },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    gifURL: DataTypes.STRING,
    youtubeId: DataTypes.STRING
  })

  Exercises.associate = function (models){
  }
  
  return Exercises
}
