// create express.js middleware to validate emails: include Joi framework
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      // email must be a string and of email format
      email: Joi.string().email(),
      // password must be string and follow reg.exp pattern
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }
    // use above schema (actually abide by conditions above)
    const {error, value} = Joi.validate(req.body, schema)
    
    // if error, find out which condition failed
    if(error){
      switch (error.details[0].context.key){
        case 'email':
          res.status(400).send({
            error: `Please provide a valid email address`
          })
          break
        case 'password':
          res.status(400).send({
            error: `Please provide a valid password. Must be between 8-32 characters and a combination of and contain ONLY capital and lowercase letters or numbers`
          })
          break
        default:
          res.status(400).send({
            error: `Invalid registration`
        })
      }
    } else{
        // this method allows program to go to AuthenticationContoller end point in controller
        next()
    }
  }
}
