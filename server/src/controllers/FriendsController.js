const {Friends} = require('../models')

module.exports = {
  async index (req, res) {
    try {
        const friends = await Friends.findAll({
        })
        res.send(friends)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while fetching friends'
      })
    }
  }
}
