
module.exports = (sequelize, DataTypes) => {
  const Exercises = sequelize.define('Exercises', {
   // what makes an exercise?
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
