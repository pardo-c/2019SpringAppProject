
module.exports = (sequelize, DataTypes) => {
    const Uplift = sequelize.define('Uplift', {
     // 
      story: DataTypes.TEXT
    })
    Uplift.associate = function (models){
    }
    return Uplift
  }
  