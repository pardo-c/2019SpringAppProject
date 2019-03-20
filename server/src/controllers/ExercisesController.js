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
          error: 'An error has occured trying to retrieve songs.'
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
          error: 'An error has occured trying to create song. Sorry.'
      })
    }
  }
}
