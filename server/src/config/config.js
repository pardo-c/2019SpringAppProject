'use strict'
const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  // declare db attribute, which has all sequelize configurations
  db: {
    database: process.env.DB_NAME || 'livingforward',
    user: process.env.DB_USER || 'livingforward',
    password: process.env.DB_PASS || 'livingforward',
    options: {
      // determine the database you will connect to
      dialect: process.env.DIALECT || 'sqlite',

      // tell sequelize the location of database you want to connect to
      host: process.env.HOST || 'localhost',
      
      // tell sequelize where to store database files
      storage: path.resolve(__dirname, '../../2019SpringAppProject.sqlite')
    }
  },
  // define authentication key for AuthenticationController.js
  authentication: {
    // used to sign jwt token: pass it a secret string-only known by server
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

