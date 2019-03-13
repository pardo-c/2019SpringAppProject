module.exports = (sequelize, DataTypes) =>
  // return user model
  sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
  })


