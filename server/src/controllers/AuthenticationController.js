const {User} = require('../models')



module.exports = {
  // define routes in express with end points. Use send function
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
          error: 'The login information as incorrect'
        })
      }
      // ensure password entered matches password in user model
      const isPasswordValid = password === user.password

      // if password is not correct
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information as incorrect'
        })
      }
      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
        res.status(500).send({
          error: 'An error has occured.'
      })
    }
  }
}
