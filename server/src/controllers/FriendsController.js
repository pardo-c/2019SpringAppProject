const {Friends} = require('../models')
module.exports = {
  // define routes in express with end points.
  async index (req,res) {
    try {
      // assign variable friends based on path user takes
      let friends = null
      const search = req.query.search
      if (search) {
        // call sequelize object
        friends = await Friends.findAll({
          where: {
            $or: [
              'status'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        // limit number of friends seen in UI
        friends = await Friends.findAll({
          limit: 10
        })
      } 
      res.send(friends)
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured trying to retrieve friends.'
      })
    }
  }
}
