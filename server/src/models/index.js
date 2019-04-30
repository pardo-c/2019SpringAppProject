// node.js way of reading through file system
const fs = require('fs')

// path module dealing with paths. used with fs
const path = require('path')

// create sequlize model to create sequelize object to connect to database
const Sequelize = require('sequelize')

// include config file from config folder
const config = require('../config/config')

// database object
const db = {}

// declare sequelize object. get arguments from config file
const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

fs
  // read through the current directory and give array of files
  .readdirSync(__dirname)

  // filter these files to exclude index.js
  .filter((file) =>
    file !== 'index.js'
  )

  // for each file that we found, declare a model and import a full path to sequlize
  .forEach((file) => {
    model = sequelize.import(path.join(__dirname, file))
    // set the db to the created model
    db[model.name] = model
  })

  // for each model we find, check for associate method to pass db object
  Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
      db[modelName].associate(db)
    }
  })
// declare useful variables onto db object so that we have access to both objects and models
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
