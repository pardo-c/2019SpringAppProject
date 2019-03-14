// a controller has all your endpoints defined
const AuthenticationController = require('./controllers/AuthenticationController')

// include Joi framework
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

// export routes associated with authentication
module.exports = (app) => {
  // express.js/middleware endpoint: callback function
  app.post('/register',
    // call policy as middleware function before we get to controller
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

  app.post('/login',
    AuthenticationController.login)
}
