'use strict'
const {User} = require('../models')

// allow program to utilize jsonwebtoken
const jwt = require('jsonwebtoken')

// allow program access to config.js
const config = require('../config/config')

// create function to sign a user object using jwt library to give back jwt token
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  // give user param
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // define routes in express with end points. Use send function
  async register (req,res) {
    try{
      // create new user to save in database
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)

      })
    } catch (err) {
        res.status(400).send({
          error: 'This email account is already in use.'
      })
    }
  },
  async login (req,res) {
    try{
      // grab email and password user has passed in via body
      const {email, password} = req.body
      // find unique user in database
      const user = await User.findOne({
        where: {
          //where email matches email
          email: email
        }
      })
      // if user object returns null
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      // ensure password entered matches password in user model
      const isPasswordValid = await user.comparePassword(password)

      // if password is not correct
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information is incorrect'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        // validate token and return
        token: jwtSignUser(userJson)
      })
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured.'
      })
    }
  }
}
