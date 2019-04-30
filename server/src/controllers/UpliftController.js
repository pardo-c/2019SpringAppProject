/* const {Uplift} = require('../models')
module.exports = {
  // define routes in express with end points.
  async index (req,res) {
    try {
      // call sequelize object
      const stories = await Uplift.findAll ({
        // limit number of stories seen in UI
        limit: 25
      })    
      res.send(stories)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to retrieve uplifting stories.'
      })
    }
  },
  async post (req,res) {
    try {
      // call sequelize object
      const uplift = await Uplift.create(req.body)
      // send back uplift object
      res.send(uplift)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to create uplifting story. Sorry.'
      })
    }
  }
} */
