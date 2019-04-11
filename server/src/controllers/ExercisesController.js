const {Exercises} = require('../models')
module.exports = {
  // define routes in express with end points.
  async index (req,res) {
    try {
      // call sequelize object
      const exercises = await Exercises.findAll ({
        // limit number of exercises seen in UI
        limit: 10
      })    
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
      res.send(req.body)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to update this exercise. Sorry.'
      })
    }
  }
}
