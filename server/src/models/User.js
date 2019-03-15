// use bluebird as promise library
const Promise = require('bluebird')

/* include all in bcrpyt package for salt hashing password
   promisfyAll will take any callback function and wrap it to use
   promise format, but use async/await mostly */
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


function hashPassword (user, optional) {
  // used by bcrypt
  const SALT_FACTOR = 8

  // did the password change at all? if no..
  if (!user.changed('password')) {
    return;
  }
  // otherwise call bcrypt
  return bcrypt
    /* generate salt factor, then take salt and bcrypt 
    using the user pw, get hash, then update users pw */
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

// return user model to be put in user table
module.exports = (sequelize, DataTypes) => {

  // create reference to User object
  const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
  }, {
    // add callback functions
    hooks: {
      // before object is created--hash password
      beforeCreate: hashPassword,
      // before object is  updated-- hash password
      beforeUpdate: hashPassword,
      // before object is saved-- hash password
      beforeSave: hashPassword
    }
  })

  /*Have User model do the pw compare instead of the controller
   Purpose is to apply comparePassword in other places*/
  User.prototype.comparePassword = function (password) {
    // compare user's password to user table psassword encrpyt password and return
    return bcrypt.compareAsync(password, this.password)
  }

  User.associate = function (models) {
    
  }

  return User
}



