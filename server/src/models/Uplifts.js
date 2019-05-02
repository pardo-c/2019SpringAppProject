module.exports = (sequelize, DataTypes) => {
    const Uplifts = sequelize.define('Uplifts', {
      id: {
        type: DataTypes.INTEGER,
        omitnull: true,
        primaryKey: true,
        autoIncrement: true
      },
      story: DataTypes.TEXT
    })
    Uplifts.associate = function (models){
    }

    return Uplifts
  }
  