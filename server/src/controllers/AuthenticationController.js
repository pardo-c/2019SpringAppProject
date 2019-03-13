const {User} = require('../models')



module.exports = {
  // define routes in express with end points. Use get function
  async register (req,res) {
    try{
      // create new user to save in database
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
        res.status(400).send({
          error: 'This email account is already in use.'
      })
    }
  }
}
