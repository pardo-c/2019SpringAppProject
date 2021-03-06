'use strict'
const {Exercises} = require('../models')
module.exports = {
  // define routes in express with end points.
  async index (req,res) {
    try {
      // assign variable exercises based on path user takes
      let exercises = null
      const search = req.query.search
      if (search) {
        // call sequelize object
        exercises = await Exercises.findAll({
          where: {
            $or: [
              'name', 'type', 'difficulty'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        // limit number of exercises seen in UI
        exercises = await Exercises.findAll({
          limit: 10
        })
      } 
      res.send(exercises)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to retrieve exercises.'
      })
    }
  },
  async show (req,res) {
    try {
      // call sequelize object
      const exercise = await Exercises.findById(req.params.exerciseId)
      // return viewed exercise
      res.send(exercise)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to show exercise.'
      })
    }
  },
  async post (req,res) {
    try {
      // call sequelize object
      const exercise = await Exercises.create(req.body)
      // send back exercise object
      res.send(exercise)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to create exercise. Sorry.'
      })
    }
  },
  async put (req,res) {
    try {
      // call sequelize object
      const exercise = await Exercises.update(req.body, {
        where: {
          id: req.params.exerciseId
        }
      })
      // send back exercise object
      res.send(exercise)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to update this exercise. Sorry.'
      })
    }
  }
}
