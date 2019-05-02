const {Uplifts} = require('../models')
module.exports = {
  // define routes in express with end points.
  async index (req, res) {
    try {
      const uplifts = await Uplifts.findAll({
        limit: 10
      })
      res.send(uplifts)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  },
  async post (req,res) {
    try {
      // call sequelize object
      const story = await Uplifts.create(req.body)
      // send back uplift object
      res.send(story)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to create uplifting story. Sorry.'
      })
    }
  }
}
